<?php
    $visitor_email = $_POST['email'];
  
    $email_from = 'noreply@viziya.com';

    $email_subject = "New Form submission";

	$email_body = "You have received email $visitor_email";

    $to = "info@mine-dev.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    if (    mail($to,$email_subject,$email_body,$headers)) {
echo "ok";
} else {
echo "error";
}
?>
