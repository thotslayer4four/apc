<?php
require_once __DIR__ . '/helpers.php';
require_method('POST');
require_auth();
require_csrf();

$id = trim((string) ($_POST['id'] ?? ''));
$title = trim((string) ($_POST['title'] ?? ''));
$category = trim((string) ($_POST['category'] ?? ''));
$date = trim((string) ($_POST['date'] ?? ''));
$summary = trim((string) ($_POST['summary'] ?? ''));
$featuredRaw = (string) ($_POST['featured'] ?? '');
$featured = $featuredRaw !== '' && $featuredRaw !== '0' && $featuredRaw !== 'false';

if ($title === '' || $category === '' || $summary === '') {
    json_response(['error' => 'Title, category, and summary are required.'], 422);
}

$dateParts = explode('-', $date);
if (count($dateParts) !== 3 || !checkdate((int) ($dateParts[1] ?? 0), (int) ($dateParts[2] ?? 0), (int) ($dateParts[0] ?? 0))) {
    json_response(['error' => 'Please provide a valid date.'], 422);
}

$newImage = null;
try {
    $newImage = handle_image_upload();
} catch (RuntimeException $e) {
    json_response(['error' => $e->getMessage()], 422);
}

$result = null;
$error = null;

write_news(function ($news) use ($id, $title, $category, $date, $summary, $featured, $newImage, &$result, &$error) {
    $existingIndex = null;
    if ($id !== '') {
        foreach ($news as $i => $item) {
            if ($item['id'] === $id) {
                $existingIndex = $i;
                break;
            }
        }
        if ($existingIndex === null) {
            $error = 'That story no longer exists — it may have already been deleted.';
            return $news;
        }
    }

    $featuredCount = count_featured($news, $id !== '' ? $id : null);
    if ($featured && $featuredCount >= MAX_FEATURED) {
        $error = 'Only ' . MAX_FEATURED . ' stories can be featured on the homepage at once. Un-feature another story first.';
        return $news;
    }

    $now = date('c');

    if ($existingIndex !== null) {
        $image = $newImage ?? $news[$existingIndex]['image'];
        $news[$existingIndex] = array_merge($news[$existingIndex], [
            'title' => $title,
            'category' => $category,
            'date' => $date,
            'summary' => $summary,
            'featured' => $featured,
            'image' => $image,
            'updatedAt' => $now,
        ]);
        $result = $news[$existingIndex];
    } else {
        $item = [
            'id' => bin2hex(random_bytes(8)),
            'title' => $title,
            'category' => $category,
            'date' => $date,
            'summary' => $summary,
            'featured' => $featured,
            'image' => $newImage ?? DEFAULT_NEWS_IMAGE,
            'createdAt' => $now,
            'updatedAt' => $now,
        ];
        $news[] = $item;
        $result = $item;
    }

    return $news;
});

if ($error) {
    if ($newImage) {
        delete_uploaded_image($newImage);
    }
    json_response(['error' => $error], 422);
}

json_response(['item' => $result]);
