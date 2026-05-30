const commitments = [
  {
    title: "Access to Quality and Affordable",
    subtitle: "World Class Medical Care",
    summary: "Establishing cancer treatment centres across Nigeria's geopolitical zones to bring world-class medical care to Nigerians.",
    full: "To reduce the threat of cancer and increase access to world class medical services, the Renewed Hope Health Agenda is establishing six new cancer treatment centres across Nigeria's geopolitical zones. Three have been commissioned and are operational in Edo, Enugu and Katsina states.",
    stats: [["6", "New cancer centres"], ["3", "Centres operational"], ["Edo, Enugu, Katsina", "States covered"]],
    image: "component-22-1.png",
    card: "frame-2087327867.png",
    detailImage: "cards/billboards-world-class-cancer-treatment-centres.jpg",
    featureImage: "cards/billboards-world-class-cancer-treatment-centres.jpg"
  },
  {
    title: "Presidential Intervention Fund",
    subtitle: "Empowerment Initiatives",
    summary: "Funding support for MSMEs, SMEs, and youth entrepreneurship is creating jobs and expanding economic inclusion.",
    full: "The Presidential Intervention Fund for MSMEs, SMEDAN support for SMEs, and youth entrepreneurship interventions are creating jobs, strengthening small businesses, and empowering Nigerians across the federation.",
    stats: [["N75B", "MSME intervention fund"], ["N11B", "SMEDAN support"], ["N30B", "Youth entrepreneurship fund"]],
    image: "component-23-1.png",
    card: "frame-2087327867-1.png",
    detailImage: "cards/billboards-msmes.jpg",
    featureImage: "cards/billboards-msmes.jpg"
  },
  {
    title: "Education",
    subtitle: "Digital Skills and Youth Innovation",
    summary: "Expanding access to quality education and digital skills through the 3MTT programme, iDICE, and youth innovation initiatives across Nigeria.",
    full: "The Tinubu administration is investing in education and digital skills development through the 3 Million Technical Talent (3MTT) programme, iDICE digital investment, and the Creative Enterprise Development Fund — equipping young Nigerians with skills for the 21st-century economy.",
    stats: [["$617M", "iDICE education investment"], ["$100M", "Creative enterprise fund"], ["3MTT", "Digital skills programme"]],
    image: "component-19-1.png",
    card: "frame-2087327867-2.png",
    detailImage: "cards/education.png",
    featureImage: "cards/education.png"
  },
  {
    title: "Universal Health Coverage",
    subtitle: "Affordable Medicines",
    summary: "Medipool and expanded health insurance enrolment are improving access to quality, affordable healthcare.",
    full: "The federal government has established Medipool to support affordable medical care, while millions of Nigerians have been enrolled into the National Health Insurance Scheme in just two years.",
    stats: [["4M", "New enrolments"], ["16M", "Previous two decades"], ["5x", "Faster growth rate"]],
    image: "component-22-1.png",
    card: "frame-2087327867-3.png",
    detailImage: "cards/BILLBOARDS - Universal Healthcare .jpg",
    featureImage: "cards/med.jpg"
  },
  {
    title: "Nigerian Education Loan Fund",
    subtitle: "NELFUND",
    summary: "Interest free student loans are opening higher education to qualified Nigerian students regardless of background.",
    full: "The Nigerian Education Loan Fund removes financial barriers to higher education by providing interest free loans that support tuition and living needs for Nigerian students.",
    stats: [["Interest Free", "Loan type"], ["Tuition", "Education support"], ["All Nigerians", "Eligibility focus"]],
    image: "component-19-1.png",
    card: "frame-2087327867-4.png",
    detailImage: "cards/billboards-nelfund.jpg",
    featureImage: "cards/education.png"
  },
  {
    title: "Primary Healthcare Centres",
    subtitle: "Healthcare Delivery",
    summary: "Thousands of primary healthcare centres are being revamped and upgraded across the six geopolitical zones.",
    full: "The administration has reaffirmed its commitment to revamp 17,600 Primary Healthcare Centres by 2027, with hundreds revamped and thousands more undergoing upgrades.",
    stats: [["17,600", "Target by 2027"], ["1,480", "Already revamped"], ["5,500", "Being upgraded"]],
    image: "component-22-1.png",
    card: "frame-2087327867-5.png",
    detailImage: "cards/billboards-primary-healthcare-delivery.jpg",
    featureImage: "cards/billboards-primary-healthcare-delivery.jpg"
  },
  {
    title: "Federal Roads",
    subtitle: "Infrastructure",
    summary: "Major road projects are connecting cities, improving commerce, reducing travel time, and supporting national productivity.",
    full: "Federal road infrastructure remains a catalyst for economic development, connecting markets and reducing transportation costs for businesses, farmers, and families.",
    stats: [["Nationwide", "Project coverage"], ["Highways", "Core focus"], ["Commerce", "Economic impact"]],
    image: "frame-2087327867-9.png",
    card: "frame-2087327867-9.png",
    detailImage: "cards/billboards-fct-roads-infrastructure.jpg",
    featureImage: "cards/billboards-fct-roads-infrastructure.jpg"
  },
  {
    title: "Renewed Hope Agricultural",
    subtitle: "Mechanization Programme",
    summary: "Tractors, harvesters, implements, workshops, and spare kits are supporting food production and food security.",
    full: "The Renewed Hope Agricultural Mechanization Programme includes tractors, combine harvesters, farming implements, mobile tools workshops, and spare kits, representing a major national investment in agricultural productivity.",
    stats: [["2,000", "Tractors"], ["9,000", "Farming implements"], ["12", "Mobile workshops"]],
    image: "frame-2087327867-6.png",
    card: "frame-2087327867-6.png",
    detailImage: "cards/BILLBOARDS - Agricultural Mechanisation.jpg",
    featureImage: "cards/BILLBOARDS - Agricultural Mechanisation.jpg"
  },
  {
    title: "ASUU FGN Pact",
    subtitle: "16 Years Impasse Resolved",
    summary: "A landmark agreement restored confidence and academic stability across Nigeria's university system.",
    full: "The successful renegotiation and signing of the ASUU FGN pact helped end recurring disputes and addressed inherited salary backlogs, supporting a more stable academic calendar.",
    stats: [["16 Years", "Disputes resolved"], ["100%", "Withheld salaries paid"], ["Stability", "Education outcome"]],
    image: "frame-2087327867-4.png",
    card: "frame-2087327867-4.png",
    detailImage: "cards/asuu-fgn.png",
    featureImage: "cards/asuu-fgn.png"
  },
  {
    title: "Social Investment Programme",
    subtitle: "9.178M Nigerians Supported",
    summary: "Direct cash transfer support has reached poor and vulnerable Nigerians across urban and rural communities.",
    full: "The Renewed Hope administration has delivered direct cash transfers to more than 9.1 million poor and vulnerable Nigerians, providing critical support across communities nationwide.",
    stats: [["9,178,837", "Beneficiaries reached"], ["Nationwide", "Coverage"], ["Social Register", "Targeting"]],
    image: "frame-2087327867-3.png",
    card: "frame-2087327867-3.png",
    detailImage: "cards/social-investment.jpg",
    featureImage: "cards/social-investment.jpg"
  },
  {
    title: "Student Innovators",
    subtitle: "Driving Financial Inclusion",
    summary: "Student entrepreneurs are receiving funding and resources to turn innovative ideas into successful ventures.",
    full: "The SVCG initiative supports student entrepreneurs with funding and resources, helping young Nigerians launch startups, create jobs, and contribute to economic growth.",
    stats: [["N50M", "Grant amount"], ["Nationwide", "Implementation"], ["Students", "Entrepreneur focus"]],
    image: "frame-2087327867-10.png",
    card: "frame-2087327867-10.png",
    detailImage: "cards/SVCG.jpg",
    featureImage: "cards/SVCG.jpg"
  },
  {
    title: "Trade Diplomacy Expansion",
    subtitle: "Global Partnerships",
    summary: "Expanded international engagement is opening new markets, stronger exports, and strategic investment partnerships.",
    full: "Nigeria's trade diplomacy has expanded through BRICS engagement and partnerships with Brazil, Qatar, UAE, and Turkey, unlocking markets and strengthening competitiveness.",
    stats: [["14%", "Intra-African trade growth"], ["7,000+", "Tariff free products"], ["$5B", "Projected trade volume"]],
    image: "frame-2087327867-8.png",
    card: "frame-2087327867-8.png",
    detailImage: "cards/trade-diplomacy.jpg",
    featureImage: "cards/trade-diplomacy.jpg"
  },
  {
    title: "Nigeria-UK Relations",
    subtitle: "Strengthening International Ties",
    summary: "A landmark UK state visit has unlocked strategic bilateral agreements across infrastructure, trade, and energy.",
    full: "Nigeria's renewed diplomatic engagement with the United Kingdom is strengthening cooperation across infrastructure, trade, energy, and investment priorities.",
    stats: [["UK", "Strategic partner"], ["Trade", "Economic focus"], ["Energy", "Cooperation area"]],
    image: "frame-2087327867-11.png",
    card: "frame-2087327867-11.png",
    detailImage: "cards/uk-nigeria-relations.jpg",
    featureImage: "cards/uk-nigeria-relations.jpg"
  },
  {
    title: "Economic Growth & Recovery",
    subtitle: "Strong, Resilient Economy",
    summary: "Strong GDP growth, rising reserves, and sector-wide reform are reinforcing confidence in Nigeria's macroeconomic direction.",
    full: "Economic reforms under the Renewed Hope Agenda are supporting recovery, improving fiscal stability, and strengthening confidence in Nigeria's long-term growth.",
    stats: [["4.4%", "GDP growth"], ["Recovery", "Economic direction"], ["Reforms", "Policy focus"]],
    image: "frame-2087327867-12.png",
    card: "frame-2087327867-12.png",
    detailImage: "cards/economic-recovery.jpg",
    featureImage: "cards/economic-recovery.jpg"
  },
  {
    title: "NDDC Youth Empowerment",
    subtitle: "Youth and Girl Mechanic Programme",
    summary: "Youth empowerment programmes are opening technical and vocational pathways for young people across the Niger Delta.",
    full: "NDDC youth empowerment initiatives are equipping young Nigerians with practical skills, supporting livelihoods, and expanding opportunities for technical careers.",
    stats: [["Youth", "Beneficiaries"], ["Skills", "Training focus"], ["Niger Delta", "Regional impact"]],
    image: "cards/NDDC Youth Empowerment.jpg",
    card: "cards/NDDC Youth Empowerment.jpg",
    detailImage: "cards/NDDC Youth Empowerment.jpg",
    featureImage: "cards/NDDC Youth Empowerment.jpg"
  },
  {
    title: "Federal Ministry of Works",
    subtitle: "National Road Infrastructure Programme",
    summary: "A ₦300 billion supplementary budget is driving legacy superhighways, nationwide dualizations, 260+ emergency palliatives, and critical bridge reconstructions across every geopolitical zone.",
    full: "Under the Tinubu administration, the Federal Ministry of Works and FERMA are executing a strategic mix of legacy superhighways, critical dualization projects, and preventive maintenance across Nigeria.",
    stats: [["700 km", "Lagos-Calabar Coastal Highway"], ["260+", "Emergency palliative repairs"], ["₦300B", "Supplementary road budget"]],
    image: "slider/slider4.png",
    card: "slider/slider4.png",
    detailImage: "slider/slider4.png",
    featureImage: "slider/slider4.png",
    gallery: [
      {
        src: "federal ministry of works/LAGOS-CALABAR COASTAL HIGHWAY.jpeg",
        caption: "Lagos-Calabar Coastal Highway",
        alt: "Lagos-Calabar Coastal Highway under construction — Tinubu administration's 700km coastal corridor integrating road and rail infrastructure"
      },
      {
        src: "federal ministry of works/dUALIZATION OF EAST–WEST ROAD.jpeg",
        caption: "Dualization of East-West Road",
        alt: "Dualization of the East-West Road, Federal Ministry of Works ongoing reconstruction under the Renewed Hope Agenda"
      },
      {
        src: "federal ministry of works/ongoing BUJA- KADUNA- ZARIA- KANO HIGHWAy.jpeg",
        caption: "Abuja-Kaduna-Zaria-Kano Highway",
        alt: "Ongoing construction of Abuja-Kaduna-Zaria-Kano Highway revitalized with ₦740.79 billion federal funding injection"
      },
      {
        src: "federal ministry of works/ongoing Rehabilitation of Enugu-Port Harcourt Road.jpeg",
        caption: "Rehabilitation of Enugu-Port Harcourt Road",
        alt: "Ongoing rehabilitation and reconstruction of the Enugu-Port Harcourt Expressway by the Federal Ministry of Works Nigeria"
      }
    ],
    categories: [
      {
        number: "01",
        title: "Legacy Superhighways & Mega Corridors",
        description: "Monumental multi-state routes designed to boost national integration, trade, and economic development.",
        items: [
          { name: "Lagos-Calabar Coastal Highway", badge: "700 km", detail: "A massive coastal corridor incorporating a rail line in its median. Phase 1 (47.7 km section) actively under construction, providing commute relief along the Lekki-Ajah axis in Lagos." },
          { name: "Sokoto-Badagry Highway", badge: "1,068 km", detail: "A monumental north-south legacy route traversing multiple states. Built with durable concrete pavement and designed to include a rail line; early-stage implementation and financing underway." },
          { name: "Calabar-Ebonyi-Abuja Superhighway (Trans-Saharan Highway)", badge: "477 km", detail: "An ongoing legacy highway traversing Cross River, Ebonyi, Kogi, Benue, Nasarawa, and the FCT." }
        ]
      },
      {
        number: "02",
        title: "Major Highway Dualizations, Reconstructions & Expansions",
        description: "Key national transit corridors undergoing expansion and structural overhaul using Continuously Reinforced Concrete Pavement (CRCP) technology.",
        items: [
          { name: "Abuja-Kaduna-Zaria-Kano Road", badge: "375 km", detail: "Revitalized with a ₦740.79 billion funding injection. Major sections remain under construction, with parts partially completed." },
          { name: "Akwanga-Jos-Bauchi-Gombe-Biu-Maiduguri Expressway", badge: "422 km", detail: "Presidential legacy dualization incorporating solar streetlights and railway tracks." },
          { name: "South-West Highway Contracts", badge: "₦690B", detail: "Package spanning Kaduna, Oyo, Ogun, and Osun states, focusing heavily on CRCP technology." },
          { name: "Lagos-Ibadan Expressway", detail: "Nearing completion with remaining underpasses and localized repairs ongoing." },
          { name: "Enugu-Port Harcourt Expressway", detail: "Active rehabilitation and reconstruction across the entire corridor." },
          { name: "Mushin-Apapa-Oshodi Expressway", detail: "Dualization and structural redesign underway, improving port access logistics in Lagos." }
        ]
      },
      {
        number: "03",
        title: "Road Maintenance, Palliatives & Emergency Interventions",
        description: "The Ministry flagged off 260 emergency palliatives and FERMA programs targeting failed corridors, washouts, and collapsed bridges nationwide.",
        items: [
          { name: "Nationwide Emergency Palliatives", badge: "260+", detail: "Special intervention repairs across Makurdi–Nsukka, Lagos–Abeokuta, East-West Road (Section II), Benin Bypass, and Jebba–Mokwa Road." },
          { name: "Operation Safeguard the Roads (FERMA)", detail: "Community-driven initiative engaging youth along federal highways for routine maintenance, pothole patching, vegetation control, and drainage clearing." },
          { name: "Artisan Market Bridge & Akpoha Bridge", detail: "Complete structural reconstruction of both bridges following collapse due to overloading and heavy seasonal flooding." },
          { name: "Third Mainland Bridge & Carter Bridge", detail: "Active structural reinforcement on Third Mainland Bridge; demolition and redesign commenced on Carter Bridge following formal approval." }
        ]
      }
    ]
  },
  {
    title: "Youth in Governance",
    subtitle: "Record Youth Appointments",
    summary: "President Bola Ahmed Tinubu has appointed the highest number of youths in government leadership positions in Nigeria's history.",
    full: "President Bola Ahmed Tinubu has appointed the highest number of youths in government leadership positions in Nigeria's history, ensuring that the next generation has a direct voice in shaping the policies and decisions that will define Nigeria's future.",
    stats: [["Highest Ever", "Youth appointments in history"], ["Nationwide", "Representation across ministries"], ["2023–Present", "Under Tinubu administration"]],
    image: "list/5.png",
    card: "list/5.png",
    featureImage: "list/5.png"
  },
  {
    title: "Gas to Prosperity",
    subtitle: "Nigeria's Gas Revolution",
    summary: "With the complete linking of southern to northern regions via gas pipelines and over ₦10B in Final Investment Decisions, Nigeria's gas revolution is becoming a reality.",
    full: "With the complete linking of the southern to the northern regions with gas pipelines and over ₦10 Billion in Final Investment Decisions, the Tinubu administration is turning Nigeria's vast gas reserves into an engine of economic growth, industrialization, and energy security.",
    stats: [["₦10B+", "Final Investment Decisions"], ["North–South", "Pipeline connection achieved"], ["Gas Revolution", "National energy objective"]],
    image: "cards/Gas to prosperity.png",
    card: "cards/Gas to prosperity.png",
    detailImage: "cards/Gas to prosperity.png",
    featureImage: "cards/Gas to prosperity.png"
  },
  {
    title: "Support for SMEs & MSMEs",
    subtitle: "Affordable Credit & Business Grants",
    summary: "Improving access to affordable credit, digital financial inclusion, and direct business grants to cushion the effects of the economic reforms.",
    full: "The Tinubu administration is improving access to affordable credit, expanding digital financial inclusion, and providing direct business grants to small and medium enterprises across Nigeria — cushioning the effects of bold economic reforms and empowering entrepreneurs to grow, hire, and contribute to national prosperity.",
    stats: [["Affordable Credit", "Access for SMEs & MSMEs"], ["Digital Inclusion", "Financial services expansion"], ["Direct Grants", "Business support nationwide"]],
    image: "cards/Support for SMEs.jpg",
    card: "cards/Support for SMEs.jpg",
    detailImage: "cards/Support for SMEs.jpg",
    featureImage: "cards/Support for SMEs.jpg"
  }
];

function cardMarkup(item, index) {
  return `
    <article class="promise-card">
      <a class="promise-media" href="commitment-detail.html?id=${index}" aria-label="Open ${item.title}">
        <img src="assets/images/${item.card}" alt="${item.title}">
        <img class="promise-badge" src="assets/images/apromiseimg-1.png" alt="">
        <div class="promise-title">
          <h3>${item.title}</h3>
          <span>${item.subtitle}</span>
        </div>
      </a>
      <div class="promise-content">
        <p>${item.summary}</p>
        <a class="read-more" href="commitment-detail.html?id=${index}">Read more</a>
      </div>
    </article>
  `;
}

function homeCardMarkup(entry) {
  return `
    <article class="home-promise-card">
      <a class="home-promise-media" href="commitment-detail.html?id=${entry.index}" aria-label="Open ${entry.title}">
        <img src="assets/images/${entry.item.featureImage || entry.item.card}" alt="${entry.title}" loading="lazy">
      </a>
      <div class="home-promise-content">
        <h3>${entry.title}</h3>
        <span>${entry.subtitle}</span>
        <p>${entry.summary}</p>
        <a class="home-read-more" href="commitment-detail.html?id=${entry.index}">Read more</a>
      </div>
    </article>
  `;
}

function commitmentListCardMarkup(entry) {
  return `
    <article class="commitment-list-card">
      <a class="commitment-list-media" href="commitment-detail.html?id=${entry.index}" aria-label="Open ${entry.title}">
        <img src="assets/images/${entry.item.featureImage || entry.item.card}" alt="${entry.title}" loading="lazy">
      </a>
      <div class="commitment-list-content">
        <h3>${entry.title}</h3>
        <span>${entry.subtitle}</span>
        <p>${entry.summary}</p>
        <a class="commitment-list-read" href="commitment-detail.html?id=${entry.index}">Read more</a>
      </div>
    </article>
  `;
}

function initMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  if (!header || !toggle) return;

  const setScrolledState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20 || !document.body.classList.contains("home-page"));
  };

  setScrolledState();
  window.addEventListener("scroll", setScrolledState, { passive: true });

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    header.classList.toggle("menu-open", !open);
  });
}

function initHeroSlider() {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const title = document.getElementById("hero-title");
  const subtitle = document.getElementById("hero-subtitle");
  const prev = document.querySelector(".slider-prev");
  const next = document.querySelector(".slider-next");
  if (!slides.length || !title || !subtitle) return;

  slides.forEach((slide) => {
    slide.style.backgroundImage = `url("${slide.dataset.image}")`;
  });

  let activeIndex = 0;
  let timer;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeIndex);
    });
    title.textContent = slides[activeIndex].dataset.title;
    subtitle.textContent = slides[activeIndex].dataset.subtitle;
  };

  const startTimer = () => {
    timer = window.setInterval(() => showSlide(activeIndex + 1), 4800);
  };

  const restartTimer = () => {
    window.clearInterval(timer);
    startTimer();
  };

  prev?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    restartTimer();
  });

  next?.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    restartTimer();
  });

  showSlide(0);
  startTimer();
}

function initHomeCards() {
  const grid = document.getElementById("home-feature-grid");
  if (!grid) return;
  const homeCommitments = [
    {
      index: 0,
      item: commitments[0],
      title: "Access to Quality & Affordable",
      subtitle: "World Class Medical Care",
      summary: "Establishing cancer treatment centres across Nigeria's geopolitical zones to bring world-class medical care to all Nigerians."
    },
    {
      index: 1,
      item: commitments[1],
      title: "Presidential Intervention Fund",
      subtitle: "Empowerment Initiatives",
      summary: "N75 Billion for MSMEs, N11 Billion SMEDAN support, and N30 Billion Youth Entrepreneurship Fund creating jobs across Nigeria."
    },
    {
      index: 4,
      item: commitments[4],
      title: "Nigerian Education Loan Fund",
      subtitle: "NELFUND",
      summary: "Making higher education accessible to every Nigerian student through interest-free education loans regardless of background."
    }
  ];
  grid.innerHTML = homeCommitments.map(homeCardMarkup).join("");
}

function initCommitmentGrid() {
  const grid = document.getElementById("commitment-grid");
  if (!grid) return;
  const pageCommitments = [
    { index: 0, title: "Access to Quality & Affordable", subtitle: commitments[0].subtitle, summary: "Establishing cancer treatment centres across Nigeria's geopolitical zones to bring world-class medical care to all Nigerians." },
    { index: 1, title: "Presidential Intervention Fund", subtitle: commitments[1].subtitle, summary: "N75 Billion for MSMEs, N11 Billion SMEDAN support, and N30 Billion Youth Entrepreneurship Fund creating jobs across Nigeria." },
    { index: 4, title: "Nigerian Education Loan Fund", subtitle: commitments[4].subtitle, summary: "Making higher education accessible to every Nigerian student through interest-free education loans regardless of background." },
    { index: 3, title: "Universal Health Coverage", subtitle: commitments[3].subtitle, summary: "Medipool established for affordable healthcare. 4 Million Nigerians enrolled in just two years versus 16M in previous two decades." },
    { index: 5, title: "Primary Healthcare", subtitle: commitments[5].subtitle, summary: "Commitment to revamp 17,600 Primary Healthcare Centres by 2027. 1,480 already revamped, 5,500 being upgraded across all zones." },
    { index: 6, title: "FCT Roads", subtitle: commitments[6].subtitle, summary: commitments[6].summary },
    { index: 7, title: "Renewed Hope Agricultural", subtitle: "Mechanization Programme", summary: "2,000 tractors, 10 combine harvesters, 9,000 farming implements - the largest agricultural mechanization procurement in Nigeria's history." },
    { index: 12, title: "Nigeria-UK Relations", subtitle: commitments[12].subtitle, summary: commitments[12].summary },
    { index: 8, title: "ASUU-FGN Pact", subtitle: commitments[8].subtitle, summary: "A landmark agreement that ends years of disputes and restores academic stability across Nigeria's university system." },
    { index: 9, title: "Hope - CT (Conditional Cash Transfer)", subtitle: "N75 Billion for MSMEs", summary: "N75 Billion for MSMEs, N11 Billion SMEDAN support, and N30 Billion Youth Entrepreneurship Fund creating jobs across Nigeria." },
    { index: 10, title: "Student Venture Capital Grant", subtitle: commitments[10].subtitle, summary: "Students now have access to startup funding for their innovative ideas." },
    { index: 11, title: "Trade Diplomacy Expansion", subtitle: commitments[11].subtitle, summary: commitments[11].summary },
    { index: 13, title: "Economic Growth & Recovery", subtitle: commitments[13].subtitle, summary: commitments[13].summary },
    { index: 14, title: "NDDC Youth Empowerment", subtitle: commitments[14].subtitle, summary: "Youth empowerment programmes are opening technical and vocational pathways for young people across the Niger Delta." },
    { index: 15, title: "Federal Ministry of Works", subtitle: commitments[15].subtitle, summary: "A ₦300 billion supplementary budget driving legacy superhighways, nationwide dualizations, 260+ emergency palliatives, and critical bridge reconstructions across Nigeria." },
    { index: 16, title: commitments[16].title, subtitle: commitments[16].subtitle, summary: commitments[16].summary },
    { index: 17, title: commitments[17].title, subtitle: commitments[17].subtitle, summary: commitments[17].summary },
    { index: 18, title: commitments[18].title, subtitle: commitments[18].subtitle, summary: commitments[18].summary }
  ].map((entry) => ({ ...entry, item: commitments[entry.index] }));
  grid.innerHTML = pageCommitments.map(commitmentListCardMarkup).join("");
}

function initDetailPage() {
  const root = document.getElementById("detail-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = Math.max(0, Math.min(commitments.length - 1, Number(params.get("id") || 0)));
  const item = commitments[id];
  const displayStats = item.stats.map(([value, label]) => [value.replace(/^N/, "₦"), label]);
  const whyItMatters = id === 1
    ? "Small and medium enterprises are the backbone of any growing economy, yet access to capital had always been a persistent challenge. By providing direct intervention funds, we are unlocking entrepreneurial potential and driving economic growth from the ground up."
    : item.full;
  const humanImpact = id === 1
    ? "Young entrepreneurs, and small business owners including tailors, farmers, etc, now have access to capital to grow their businesses, hire employees, and contribute to their communities economic development."
    : "Nigerians are seeing practical benefits from this commitment through expanded access, stronger institutions, and programmes designed to improve livelihoods across communities.";
  const fullDetails = id === 1
    ? "The ₦75 Billion Presidential Intervention Fund for MSMEs, the SMEDAN's ₦11 Billion support for SMEs and the NDDC's ₦30 Billion Youth Entrepreneurship Fund of the Tinubu led government are creating jobs and empowering Nigerians."
    : item.full;

  document.title = `${item.title} | A Promise Kept`;
  root.innerHTML = `
    <section class="detail-clean">
      <div class="initiative-pill detail-pill" aria-label="Our Commitments">
        <span class="pill-logo kept-logo"><img src="assets/images/apromiseimg-1.png" alt=""></span>
        <strong>Our Commitments</strong>
        <span class="pill-logo hope-logo"><img src="assets/images/renewed-hope-1.png" alt=""></span>
      </div>

      <header class="detail-clean-header">
        <h1>${item.title}</h1>
        <p>${item.subtitle}<br>${item.summary}</p>
      </header>

      <img class="detail-clean-image" src="assets/images/${item.detailImage || item.card}" alt="${item.title}">

      <article class="detail-copy-block">
        <h2>Why It Matters:</h2>
        <p>${whyItMatters}</p>
      </article>

      <section class="detail-stat-section" aria-label="Key Statistics">
        <h2>Key Statistics</h2>
        <div class="detail-stat-grid">
          ${displayStats.map(([value, label]) => `
            <div class="detail-clean-stat">
              <span class="detail-stat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M5 19h14v2H5v-2Zm2-2V9h3v8H7Zm5 0V4h3v13h-3Zm5 0v-6h3v6h-3Z"/></svg>
              </span>
              <strong>${value}</strong>
              <span>${label}</span>
            </div>
          `).join("")}
        </div>
      </section>

      <article class="detail-copy-block">
        <h2>Human Impact</h2>
        <p>${humanImpact}</p>
      </article>

      <article class="detail-copy-block">
        <h2>Full Details</h2>
        <p>${fullDetails}</p>
      </article>

      ${item.gallery ? `
        <section class="detail-gallery" aria-label="On the ground — project photography">
          <h2 class="detail-gallery-heading">On the Ground</h2>
          <span class="intro-green-rule" aria-hidden="true"></span>
          <div class="detail-gallery-grid">
            ${item.gallery.map(photo => `
              <figure class="detail-gallery-figure">
                <img
                  src="assets/images/${photo.src}"
                  alt="${photo.alt}"
                  loading="lazy"
                  width="800"
                  height="533"
                >
                <figcaption>${photo.caption}</figcaption>
              </figure>
            `).join("")}
          </div>
        </section>
      ` : ""}

      ${item.categories ? `
        <div class="detail-category-section" aria-label="Programme breakdown">
          ${item.categories.map(cat => `
            <div class="detail-category">
              <div class="detail-category-header">
                <span class="detail-category-number" aria-hidden="true">${cat.number}</span>
                <div>
                  <h2 class="detail-category-title">${cat.title}</h2>
                  <p class="detail-category-desc">${cat.description}</p>
                </div>
              </div>
              <div class="detail-category-items">
                ${cat.items.map(it => `
                  <div class="detail-category-item">
                    <div class="detail-category-item-meta">
                      <strong class="detail-category-item-name">${it.name}</strong>
                      ${it.badge ? `<span class="detail-category-item-badge">${it.badge}</span>` : ""}
                    </div>
                    <p class="detail-category-item-detail">${it.detail}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      ` : ""}
    </section>
  `;
}

function initScrollCue() {
  const cues = document.querySelectorAll('.scroll-cue');
  if (!cues.length) return;

  setTimeout(() => cues.forEach(c => c.classList.add('is-visible')), 700);

  window.addEventListener('scroll', function hide() {
    if (window.scrollY > 80) {
      cues.forEach(c => {
        c.classList.remove('is-visible');
        c.classList.add('is-gone');
      });
      window.removeEventListener('scroll', hide);
    }
  }, { passive: true });
}

initMenu();
initHeroSlider();
initHomeCards();
initCommitmentGrid();
initDetailPage();
initScrollCue();
