<?php
require_once __DIR__ . '/helpers.php';
require_method('POST');
require_auth();
require_csrf();

$body = read_json_body();
$current = (string) ($body['currentPassword'] ?? '');
$new = (string) ($body['newPassword'] ?? '');

if (!password_verify($current, read_admin_password_hash())) {
    json_response(['error' => 'Current password is incorrect.'], 401);
}
if (strlen($new) < 8) {
    json_response(['error' => 'New password must be at least 8 characters.'], 422);
}

write_admin_password_hash(password_hash($new, PASSWORD_DEFAULT));

json_response(['ok' => true]);
