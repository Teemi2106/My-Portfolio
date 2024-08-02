<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);


    $to = "teemiofficial13@gmail.com"; 

    $subject = "New Contact Form Submission";

    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message: $message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $emailContent, $headers)) {
        
        header("Location: thank-you.html");
        exit();
    } else {
       
        header("Location:Error.html");
    }
}
?>
