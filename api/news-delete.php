<?php
require_once __DIR__ . '/helpers.php';
require_method('POST');
require_auth();
require_csrf();

$body = read_json_body();
$id = trim((string) ($body['id'] ?? ''));

if ($id === '') {
    json_response(['error' => 'Missing story id.'], 422);
}

$deletedImage = null;
$found = false;

write_news(function ($news) use ($id, &$deletedImage, &$found) {
    $remaining = [];
    foreach ($news as $item) {
        if ($item['id'] === $id) {
            $found = true;
            $deletedImage = $item['image'] ?? null;
            continue;
        }
        $remaining[] = $item;
    }
    return $remaining;
});

if (!$found) {
    json_response(['error' => 'That story no longer exists.'], 404);
}

delete_uploaded_image($deletedImage);

json_response(['ok' => true]);
