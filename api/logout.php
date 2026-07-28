<?php
require_once __DIR__ . '/helpers.php';
require_method('POST');
require_auth();
require_csrf();

$_SESSION = [];
session_destroy();

json_response(['authed' => false]);
