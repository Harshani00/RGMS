<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$subject = $data['subject'];
$message = $data['message'];

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'rgms@gs.pdn.ac.lk'; // Your email
    $mail->Password = 'dgac ahtx lkla bjxs'; // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('rgms@gs.pdn.ac.lk','URC-University of Peradeniya');
    $mail->addAddress($email);

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}
