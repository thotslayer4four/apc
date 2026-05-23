<?php
$to = 'info@apcpromisekept.com';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../contact.html');
    exit;
}

$honeypot = trim($_POST['website'] ?? '');
if ($honeypot !== '') {
    header('Location: ../contact.html?status=success');
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $subject === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: ../contact.html?status=error');
    exit;
}

$safeSubject = 'A Promise Kept Contact: ' . preg_replace('/[\r\n]+/', ' ', $subject);
$body = "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n\n";
$body .= "Message:\n{$message}\n";
$headers = [
    'From: A Promise Kept Website <no-reply@apcpromisekept.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, $safeSubject, $body, implode("\r\n", $headers));
header('Location: ../contact.html?status=' . ($sent ? 'success' : 'error'));
exit;
