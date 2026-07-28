<?php
require_once __DIR__ . '/helpers.php';
require_method('GET');

$news = read_news();
usort($news, fn($a, $b) => strcmp($b['date'], $a['date']));

json_response(['news' => $news]);
