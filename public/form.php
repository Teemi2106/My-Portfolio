<?php
// Load Composer's autoloader if installed via Composer
require '../vendor/autoload.php';

// If manually installed, include the following files
// require 'path/to/PHPMailer/src/Exception.php';
// require 'path/to/PHPMailer/src/PHPMailer.php';
// require 'path/to/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "teemiofficial13@gmail.com"; 
    $subject = "New Contact Form Submission";

    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message: $message\n";

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'localhost';  // Set the SMTP server to send through
        $mail->Port       = 1025;          // TCP port to connect to

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress($to);     // Add a recipient

        // Content
        $mail->isHTML(false);                                  // Set email format to plain text
        $mail->Subject = $subject;
        $mail->Body    = $emailContent;

        $mail->send();
        header("Location: thank-you.html");
        exit();
    } catch (Exception $e) {
        // Redirect to an error page
        header("Location: Error.html");
    }
}
?>
