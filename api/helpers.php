<?php
require_once __DIR__ . '/config.php';

function json_response($data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($data);
    exit;
}

function ensure_dir(string $path): void {
    if (!is_dir($path)) {
        mkdir($path, 0775, true);
    }
}

function seed_news_data(): array {
    $seed = [
        ['date' => '2026-07-24', 'category' => 'Healthcare', 'title' => 'Three More Cancer Treatment Centres Commissioned', 'summary' => 'The federal government has commissioned three additional cancer treatment centres, bringing world-class oncology care closer to Nigerians across the geopolitical zones.', 'image' => 'assets/images/cards/billboards-world-class-cancer-treatment-centres.jpg', 'featured' => true],
        ['date' => '2026-07-20', 'category' => 'Education', 'title' => 'NELFUND Disburses Fresh Round of Student Loans Nationwide', 'summary' => 'Thousands more Nigerian students have received interest-free education loans in the latest disbursement cycle, extending access to higher education regardless of background.', 'image' => 'assets/images/cards/billboards-nelfund.jpg', 'featured' => true],
        ['date' => '2026-07-16', 'category' => 'Agriculture', 'title' => 'FG Flags Off New Batch of Tractors Under Agric Mechanization Programme', 'summary' => 'A fresh consignment of tractors and farming implements has been deployed to farmers as part of the Renewed Hope Agricultural Mechanization Programme, boosting food production nationwide.', 'image' => 'assets/images/cards/BILLBOARDS - Agricultural Mechanisation.jpg', 'featured' => true],
        ['date' => '2026-07-10', 'category' => 'Healthcare', 'title' => 'President Tinubu Commissions New Primary Healthcare Centres in the North-East', 'summary' => "Newly revamped primary healthcare centres have been commissioned, part of the administration's commitment to upgrade 17,600 facilities across Nigeria by 2027.", 'image' => 'assets/images/cards/billboards-primary-healthcare-delivery.jpg', 'featured' => false],
        ['date' => '2026-07-05', 'category' => 'Energy', 'title' => 'Gas to Prosperity: FG Marks Completion of North-South Pipeline Link', 'summary' => "The federal government has marked the complete linking of the southern and northern regions with gas pipelines, unlocking new Final Investment Decisions and industrial growth.", 'image' => 'assets/images/cards/Gas to prosperity.jpg', 'featured' => false],
        ['date' => '2026-06-29', 'category' => 'Infrastructure', 'title' => 'Federal Ministry of Works Flags Off 260 Emergency Road Palliatives', 'summary' => 'Emergency repair works have begun on failed corridors nationwide, part of a ₦300 billion supplementary budget driving legacy superhighways and critical road maintenance.', 'image' => 'assets/images/slider/slider4.jpg', 'featured' => false],
        ['date' => '2026-06-22', 'category' => 'Youth', 'title' => 'NDDC Youth Empowerment Scheme Graduates New Set of Technicians', 'summary' => 'A new cohort of young Nigerians has completed technical and vocational training under the NDDC Youth and Girl Mechanic Programme, expanding livelihood opportunities in the Niger Delta.', 'image' => 'assets/images/cards/NDDC Youth Empowerment.jpg', 'featured' => false],
        ['date' => '2026-06-15', 'category' => 'Party', 'title' => 'APC Chairman Tours Party Structures Ahead of Membership Drive', 'summary' => "National Chairman Prof. Nentawe Yilwatda continues his tour of state party structures, strengthening internal democracy and expanding membership ahead of the party's renewal drive.", 'image' => 'assets/images/chairman-yilwatda.jpeg', 'featured' => false],
        ['date' => '2026-06-08', 'category' => 'Economy', 'title' => "Nigeria's Crude Oil Output Hits 1.8 Million Barrels Per Day", 'summary' => 'Enhanced maritime security and anti-crude theft measures have propelled national crude oil production to 1.8 million barrels per day, reinforcing macroeconomic recovery.', 'image' => 'assets/images/cards/economic-recovery.jpg', 'featured' => false],
        ['date' => '2026-06-01', 'category' => 'Economy', 'title' => 'Presidential Intervention Fund Extends Support to More MSMEs', 'summary' => '₦75 billion Presidential Intervention Fund has been extended to small and medium enterprises, creating jobs and expanding economic inclusion nationwide.', 'image' => 'assets/images/cards/billboards-msmes.jpg', 'featured' => false],
    ];

    $now = date('c');
    $out = [];
    foreach ($seed as $i => $item) {
        $item['id'] = 'seed-' . $i;
        $item['createdAt'] = $now;
        $item['updatedAt'] = $now;
        $out[] = $item;
    }
    return $out;
}

/**
 * Opens $path with an exclusive lock, passes the decoded array to $mutator,
 * writes the returned array back, then releases the lock. Returns the final array.
 * If $mutator is null, just returns the current contents (still lock-safe).
 */
function with_locked_json(string $path, ?array $seedIfMissing, ?callable $mutator): array {
    ensure_dir(dirname($path));
    $handle = fopen($path, 'c+');
    if (!$handle) {
        throw new RuntimeException("Unable to open $path");
    }
    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        throw new RuntimeException("Unable to lock $path");
    }

    $size = filesize($path);
    $raw = $size > 0 ? fread($handle, $size) : '';
    $data = $raw !== '' ? json_decode($raw, true) : null;
    if (!is_array($data)) {
        $data = $seedIfMissing ?? [];
    }

    if ($mutator !== null) {
        $data = $mutator($data);
        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        fflush($handle);
    }

    flock($handle, LOCK_UN);
    fclose($handle);
    return $data;
}

function read_news(): array {
    return with_locked_json(NEWS_FILE, seed_news_data(), function ($data) {
        return $data; // no mutation, just seeds the file on first read
    });
}

function write_news(callable $mutator): array {
    return with_locked_json(NEWS_FILE, seed_news_data(), $mutator);
}

function read_admin_password_hash(): string {
    $data = with_locked_json(ADMIN_FILE, ['passwordHash' => DEFAULT_ADMIN_PASSWORD_HASH], function ($data) {
        return $data;
    });
    return $data['passwordHash'] ?? DEFAULT_ADMIN_PASSWORD_HASH;
}

function write_admin_password_hash(string $hash): void {
    with_locked_json(ADMIN_FILE, [], function ($data) use ($hash) {
        $data['passwordHash'] = $hash;
        return $data;
    });
}

function get_client_ip(): string {
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function is_login_locked_out(): bool {
    $throttle = with_locked_json(THROTTLE_FILE, [], fn($d) => $d);
    $ip = get_client_ip();
    $entry = $throttle[$ip] ?? null;
    if (!$entry) return false;
    if ($entry['count'] >= LOGIN_MAX_ATTEMPTS && (time() - $entry['last']) < LOGIN_LOCKOUT_SECONDS) {
        return true;
    }
    return false;
}

function register_login_failure(): void {
    with_locked_json(THROTTLE_FILE, [], function ($data) {
        $ip = get_client_ip();
        $now = time();
        foreach ($data as $key => $entry) {
            if (($now - $entry['last']) > LOGIN_LOCKOUT_SECONDS) {
                unset($data[$key]);
            }
        }
        if (!isset($data[$ip]) || ($now - $data[$ip]['last']) > LOGIN_LOCKOUT_SECONDS) {
            $data[$ip] = ['count' => 0, 'last' => $now];
        }
        $data[$ip]['count'] += 1;
        $data[$ip]['last'] = $now;
        return $data;
    });
}

function clear_login_failures(): void {
    with_locked_json(THROTTLE_FILE, [], function ($data) {
        unset($data[get_client_ip()]);
        return $data;
    });
}

function require_auth(): void {
    if (empty($_SESSION['authed'])) {
        json_response(['error' => 'Unauthorized'], 401);
    }
}

function get_csrf_token(): string {
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}

function require_csrf(): void {
    $sent = $_POST['csrf'] ?? ($_SERVER['HTTP_X_CSRF_TOKEN'] ?? '');
    $expected = $_SESSION['csrf'] ?? '';
    if ($expected === '' || !hash_equals($expected, (string) $sent)) {
        json_response(['error' => 'Invalid or missing CSRF token'], 403);
    }
}

function require_method(string $method): void {
    if ($_SERVER['REQUEST_METHOD'] !== $method) {
        json_response(['error' => 'Method not allowed'], 405);
    }
}

/** Reads a JSON request body into an assoc array (used where we're not using multipart form data). */
function read_json_body(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

/**
 * Validates and stores an uploaded image (from $_FILES['image']).
 * Returns the root-relative path to store on the news item, or null if no file was uploaded.
 * Throws RuntimeException with a user-facing message on validation failure.
 */
function handle_image_upload(): ?string {
    if (empty($_FILES['image']) || $_FILES['image']['error'] === UPLOAD_ERR_NO_FILE) {
        return null;
    }
    $file = $_FILES['image'];

    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new RuntimeException('Photo upload failed. Please try again.');
    }
    if ($file['size'] > MAX_UPLOAD_BYTES) {
        throw new RuntimeException('Photo is too large (max 8MB).');
    }

    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, ALLOWED_IMAGE_EXT, true)) {
        throw new RuntimeException('Photo must be a JPG, PNG, or WEBP file.');
    }

    $imageInfo = @getimagesize($file['tmp_name']);
    if ($imageInfo === false) {
        throw new RuntimeException('That file does not look like a valid image.');
    }

    ensure_dir(UPLOADS_DIR);
    $filename = bin2hex(random_bytes(10)) . '.' . $ext;
    $destination = UPLOADS_DIR . '/' . $filename;

    if (!move_uploaded_file($file['tmp_name'], $destination)) {
        throw new RuntimeException('Could not save the uploaded photo.');
    }

    return 'uploads/news/' . $filename;
}

/** Deletes an uploaded image file if (and only if) it lives under uploads/news/. */
function delete_uploaded_image(?string $relativePath): void {
    if (!$relativePath || strpos($relativePath, 'uploads/news/') !== 0) {
        return;
    }
    $full = ROOT_DIR . '/' . $relativePath;
    $realUploads = realpath(UPLOADS_DIR);
    $realFull = realpath($full);
    if ($realFull && $realUploads && strpos($realFull, $realUploads) === 0 && is_file($realFull)) {
        @unlink($realFull);
    }
}

function count_featured(array $news, ?string $excludingId = null): int {
    $count = 0;
    foreach ($news as $item) {
        if (!empty($item['featured']) && $item['id'] !== $excludingId) {
            $count++;
        }
    }
    return $count;
}
