<?php
/**
 * Shared configuration for the news admin API.
 *
 * data/ and uploads/ live outside the folders .cpanel.yml deletes-and-replaces
 * on every deploy (assets/, api/), so published news and photos survive pushes.
 */

define('ROOT_DIR', dirname(__DIR__));
define('DATA_DIR', ROOT_DIR . '/data');
define('UPLOADS_DIR', ROOT_DIR . '/uploads/news');
define('NEWS_FILE', DATA_DIR . '/news.json');
define('ADMIN_FILE', DATA_DIR . '/admin.json');
define('THROTTLE_FILE', DATA_DIR . '/login_throttle.json');

// Temporary default password: Voyage-9778-Harbor
// Used only to seed data/admin.json the first time login.php runs.
// Change it immediately from the admin panel after first login.
define('DEFAULT_ADMIN_PASSWORD_HASH', '$2y$12$3Y//hShIaUtnEs1AaN1BOedUcM/Eo4a50foHWh26RmgjoGHK.R3C2');

define('MAX_FEATURED', 3);
define('MAX_UPLOAD_BYTES', 8 * 1024 * 1024);
define('ALLOWED_IMAGE_EXT', ['jpg', 'jpeg', 'png', 'webp']);
define('DEFAULT_NEWS_IMAGE', 'assets/images/apromiseimg-1.png');
define('LOGIN_MAX_ATTEMPTS', 8);
define('LOGIN_LOCKOUT_SECONDS', 15 * 60);

if (session_status() === PHP_SESSION_NONE) {
    session_name('apc_admin_session');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => !empty($_SERVER['HTTPS']),
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}
