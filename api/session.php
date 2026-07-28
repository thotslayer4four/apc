<?php
require_once __DIR__ . '/helpers.php';

json_response([
    'authed' => !empty($_SESSION['authed']),
    'csrfToken' => get_csrf_token(),
]);
