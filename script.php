<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: content-Type');
echo 'we are in php server for form';


if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        //server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.sendgrid.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'apikey';
        $mail->Password = getenv('SENDGRID_API_KEY');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        //
        $mail->setFrom('jonathan.ruizzavala@icloud.com', 'Website Contract');
        $mail->addAddress('jonathan.ruiz.1793@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "Name: $name<br>Email: $email<br>Message: $message";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed ERROR 405";
}
