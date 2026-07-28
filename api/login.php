<?php
require_once __DIR__ . '/helpers.php';
require_method('POST');

if (is_login_locked_out()) {
    json_response(['error' => 'Too many failed attempts. Try again in a few minutes.'], 429);
}

$body = read_json_body();
$password = (string) ($body['password'] ?? '');

if ($password === '' || !password_verify($password, read_admin_password_hash())) {
    register_login_failure();
    json_response(['error' => 'Incorrect password.'], 401);
}

clear_login_failures();
session_regenerate_id(true);
$_SESSION['authed'] = true;

json_response(['authed' => true, 'csrfToken' => get_csrf_token()]);
