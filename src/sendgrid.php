<?php
require "../../vendor/autoload.php";
// using SendGrid's PHP Library - https://github.com/sendgrid/sendgrid-php
$sendgrid = new SendGrid("Marrbacca", "qazse1423");
$email    = new SendGrid\Email();

try {
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $email->addTo("kamil@szewczyk.org")
        ->setFrom($request->from)
        ->setFromName($request->fromName)
        ->setSubject($request->subject)
        ->setHtml($request->body);
    
    if (!$sendgrid->send($email)) {
        header('HTTP/1.1 500 Internal Server Error');
    }
} catch (Exception $e) {
    header('HTTP/1.1 500 Internal Server Error');
}