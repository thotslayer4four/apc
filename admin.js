const ADMIN_CATEGORIES = ["Healthcare", "Education", "Agriculture", "Energy", "Infrastructure", "Youth", "Party", "Economy"];
const MAX_FEATURED = 3;

const root = document.getElementById("admin-root");
const logoutBtn = document.getElementById("admin-logout-btn");

const state = {
  authed: false,
  csrfToken: "",
  news: [],
  editingId: null,
  error: "",
  loginError: "",
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

async function apiGet(url) {
  try {
    const res = await fetch(url, { credentials: "same-origin" });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: { error: "Network error. Please check your connection and try again." } };
  }
}

async function apiPostJson(url, body) {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", "X-CSRF-Token": state.csrfToken },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: { error: "Network error. Please check your connection and try again." } };
  }
}

async function apiPostForm(formData) {
  formData.set("csrf", state.csrfToken);
  try {
    const res = await fetch("api/news-save.php", {
      method: "POST",
      credentials: "same-origin",
      body: formData,
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: { error: "Network error. Please check your connection and try again." } };
  }
}

async function checkSession() {
  const { data } = await apiGet("api/session.php");
  state.authed = !!data.authed;
  state.csrfToken = data.csrfToken || "";
}

async function loadNews() {
  const { data } = await apiGet("api/news-list.php");
  state.news = Array.isArray(data.news) ? data.news : [];
}

function featuredCount(excludingId) {
  return state.news.filter((n) => n.featured && n.id !== excludingId).length;
}

function formatDate(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function render() {
  logoutBtn.hidden = !state.authed;
  root.innerHTML = state.authed ? renderPanelHtml() : renderLoginHtml();
  if (state.authed) {
    attachPanelHandlers();
  } else {
    attachLoginHandlers();
  }
}

function renderLoginHtml() {
  return `
    <section class="admin-login">
      <h1>Admin Login</h1>
      <p>Enter the admin password to publish news.</p>
      <form id="admin-login-form" novalidate>
        <div class="admin-field">
          <label for="admin-password">Password</label>
          <div class="admin-password-field">
            <input id="admin-password" name="password" type="password" autocomplete="current-password" required autofocus>
            <button type="button" id="admin-password-toggle">Show</button>
          </div>
        </div>
        ${state.loginError ? `<p class="admin-form-error" role="alert">${escapeHtml(state.loginError)}</p>` : ""}
        <button class="btn admin-btn-primary" type="submit">Log In</button>
      </form>
    </section>
  `;
}

function attachLoginHandlers() {
  const form = document.getElementById("admin-login-form");
  const toggle = document.getElementById("admin-password-toggle");
  const input = document.getElementById("admin-password");

  toggle?.addEventListener("click", () => {
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
    toggle.textContent = showing ? "Show" : "Hide";
  });

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    const { ok, status, data } = await apiPostJson("api/login.php", { password: input.value });
    submitBtn.disabled = false;
    if (ok) {
      state.authed = true;
      state.csrfToken = data.csrfToken || state.csrfToken;
      state.loginError = "";
      await loadNews();
      render();
    } else {
      state.loginError = data.error || (status === 429 ? "Too many attempts. Try again later." : "Login failed.");
      render();
    }
  });
}

function renderPanelHtml() {
  const featCount = featuredCount(null);
  const editing = state.editingId ? state.news.find((n) => n.id === state.editingId) : null;
  const editingIsOtherCategory = editing && !ADMIN_CATEGORIES.includes(editing.category);
  const atCap = (!editing || !editing.featured) && featCount >= MAX_FEATURED;

  return `
    <section class="admin-panel">
      <div class="admin-panel-header">
        <h1>${editing ? "Edit Story" : "Publish News"}</h1>
        <span class="admin-featured-count">${featCount}/${MAX_FEATURED} featured on homepage</span>
      </div>

      ${state.error ? `<p class="admin-form-error" role="alert">${escapeHtml(state.error)}</p>` : ""}

      <form id="admin-news-form" class="admin-news-form" novalidate>
        <input type="hidden" name="id" value="${editing ? escapeHtml(editing.id) : ""}">
        <input type="hidden" name="category" id="admin-category-value" value="${editing ? escapeHtml(editing.category) : ""}">

        <div class="admin-field">
          <label for="admin-title">Title</label>
          <input id="admin-title" name="title" type="text" required maxlength="140" value="${editing ? escapeHtml(editing.title) : ""}">
        </div>

        <div class="admin-field-row">
          <div class="admin-field">
            <label for="admin-category-select">Category</label>
            <select id="admin-category-select">
              ${ADMIN_CATEGORIES.map((c) => `<option value="${c}" ${editing && editing.category === c ? "selected" : ""}>${c}</option>`).join("")}
              <option value="__other" ${editingIsOtherCategory ? "selected" : ""}>Other…</option>
            </select>
          </div>
          <div class="admin-field">
            <label for="admin-date">Date</label>
            <input id="admin-date" name="date" type="date" required value="${editing ? editing.date : new Date().toISOString().slice(0, 10)}">
          </div>
        </div>

        <div class="admin-field" id="admin-category-other-wrap" ${editingIsOtherCategory ? "" : "hidden"}>
          <label for="admin-category-other">Custom category</label>
          <input id="admin-category-other" type="text" maxlength="40" value="${editingIsOtherCategory ? escapeHtml(editing.category) : ""}">
        </div>

        <div class="admin-field">
          <label for="admin-summary">Summary</label>
          <textarea id="admin-summary" name="summary" rows="4" required maxlength="400">${editing ? escapeHtml(editing.summary) : ""}</textarea>
        </div>

        <div class="admin-field">
          <label for="admin-image">Photo${editing ? " (leave blank to keep current photo)" : ""}</label>
          <input id="admin-image" name="image" type="file" accept="image/png, image/jpeg, image/webp" capture="environment">
          <div class="admin-image-preview" id="admin-image-preview">
            ${editing ? `<img src="${escapeHtml(editing.image)}" alt="Current photo">` : ""}
          </div>
        </div>

        <label class="admin-featured-toggle">
          <input type="checkbox" name="featured" value="1" id="admin-featured" ${editing && editing.featured ? "checked" : ""} ${atCap ? "disabled" : ""}>
          Feature on homepage
        </label>
        ${atCap ? `<p class="admin-hint">Homepage is full — un-feature another story to feature this one.</p>` : ""}

        <div class="admin-form-actions">
          <button class="btn admin-btn-primary" type="submit">${editing ? "Save Changes" : "Publish Story"}</button>
          ${editing ? `<button class="admin-btn-secondary" type="button" id="admin-cancel-edit">Cancel</button>` : ""}
        </div>
      </form>

      <details class="admin-password-section">
        <summary>Change Password</summary>
        <form id="admin-password-form" class="admin-password-form" novalidate>
          <div class="admin-field">
            <label for="admin-current-password">Current Password</label>
            <input id="admin-current-password" type="password" autocomplete="current-password" required>
          </div>
          <div class="admin-field">
            <label for="admin-new-password">New Password</label>
            <input id="admin-new-password" type="password" autocomplete="new-password" required minlength="8">
          </div>
          <div class="admin-field">
            <label for="admin-confirm-password">Confirm New Password</label>
            <input id="admin-confirm-password" type="password" autocomplete="new-password" required minlength="8">
          </div>
          <p class="admin-password-msg" id="admin-password-msg" role="status"></p>
          <button class="admin-btn-secondary" type="submit">Update Password</button>
        </form>
      </details>

      <div class="admin-list">
        <h2>All News (${state.news.length})</h2>
        ${state.news.length === 0 ? `<p class="admin-empty">No stories yet — publish your first one above.</p>` : state.news
          .slice()
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((item) => `
            <article class="admin-list-item" data-id="${escapeHtml(item.id)}">
              <img src="${escapeHtml(item.image)}" alt="" loading="lazy">
              <div class="admin-list-item-body">
                <span class="admin-list-item-meta">${formatDate(item.date)} · ${escapeHtml(item.category)}${item.featured ? ' · <strong class="admin-featured-badge">Featured</strong>' : ""}</span>
                <h3>${escapeHtml(item.title)}</h3>
              </div>
              <div class="admin-list-item-actions">
                <button type="button" data-action="edit" data-id="${escapeHtml(item.id)}">Edit</button>
                <button type="button" class="admin-delete-btn" data-action="delete" data-id="${escapeHtml(item.id)}">Delete</button>
              </div>
            </article>
          `).join("")}
      </div>
    </section>
  `;
}

function attachPanelHandlers() {
  const categorySelect = document.getElementById("admin-category-select");
  const categoryOtherWrap = document.getElementById("admin-category-other-wrap");
  const categoryOtherInput = document.getElementById("admin-category-other");
  const categoryValue = document.getElementById("admin-category-value");

  function syncCategory() {
    if (categorySelect.value === "__other") {
      categoryOtherWrap.hidden = false;
      categoryValue.value = categoryOtherInput.value.trim();
    } else {
      categoryOtherWrap.hidden = true;
      categoryValue.value = categorySelect.value;
    }
  }
  categorySelect?.addEventListener("change", syncCategory);
  categoryOtherInput?.addEventListener("input", syncCategory);

  const imageInput = document.getElementById("admin-image");
  const preview = document.getElementById("admin-image-preview");
  imageInput?.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      preview.innerHTML = `<img src="${reader.result}" alt="Selected photo preview">`;
    };
    reader.readAsDataURL(file);
  });

  const newsForm = document.getElementById("admin-news-form");
  newsForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    syncCategory();
    if (!categoryValue.value) {
      state.error = "Please choose or enter a category.";
      render();
      return;
    }
    const submitBtn = newsForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    const formData = new FormData(newsForm);
    if (!newsForm.querySelector('[name="featured"]').checked) {
      formData.delete("featured");
    }
    const { ok, data } = await apiPostForm(formData);
    submitBtn.disabled = false;
    if (ok) {
      state.editingId = null;
      state.error = "";
      await loadNews();
      render();
    } else {
      state.error = data.error || "Could not save story.";
      render();
    }
  });

  document.getElementById("admin-cancel-edit")?.addEventListener("click", () => {
    state.editingId = null;
    state.error = "";
    render();
  });

  root.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.id;
      if (btn.dataset.action === "edit") {
        state.editingId = id;
        state.error = "";
        render();
        document.getElementById("admin-news-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (btn.dataset.action === "delete") {
        const item = state.news.find((n) => n.id === id);
        if (!confirm(`Delete "${item ? item.title : "this story"}"? This cannot be undone.`)) return;
        const { ok, data } = await apiPostJson("api/news-delete.php", { id });
        if (ok) {
          if (state.editingId === id) state.editingId = null;
          await loadNews();
          render();
        } else {
          state.error = data.error || "Could not delete story.";
          render();
        }
      }
    });
  });

  const pwForm = document.getElementById("admin-password-form");
  pwForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("admin-password-msg");
    const current = document.getElementById("admin-current-password").value;
    const next = document.getElementById("admin-new-password").value;
    const confirmValue = document.getElementById("admin-confirm-password").value;
    if (next !== confirmValue) {
      msg.textContent = "New passwords don't match.";
      msg.className = "admin-password-msg admin-password-msg-error";
      return;
    }
    const { ok, data } = await apiPostJson("api/change-password.php", {
      currentPassword: current,
      newPassword: next,
    });
    if (ok) {
      msg.textContent = "Password updated.";
      msg.className = "admin-password-msg admin-password-msg-success";
      pwForm.reset();
    } else {
      msg.textContent = data.error || "Could not update password.";
      msg.className = "admin-password-msg admin-password-msg-error";
    }
  });
}

logoutBtn.addEventListener("click", async () => {
  await apiPostJson("api/logout.php", {});
  state.authed = false;
  state.news = [];
  state.editingId = null;
  await checkSession();
  render();
});

async function init() {
  await checkSession();
  if (state.authed) {
    await loadNews();
  }
  render();
}

init();
