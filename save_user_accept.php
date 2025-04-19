<?php
// Step 1: Get the raw JSON input from JavaScript (POST request se)
$data = json_decode(file_get_contents("php://input"), true);

// Step 2: Check if the necessary data is received
if (isset($data['accepted']) && isset($data['date']) && isset($data['browser'])) {
    // Prepare the email details
    $to = "m.zain.298.786@gmail.com"; // 👈 Apna email address yahan daalein
    $subject = "User Accepted Terms and Conditions";

    // Create the message body
    $message = "✅ A user has accepted the terms and conditions.\n\n";
    $message .= "🕒 Time of Acceptance: " . $data['date'] . "\n";
    $message .= "🖥️ User's Browser: " . $data['browser'] . "\n";
    
    // Send the email using PHP's mail() function
    $headers = "From: no-reply@yourdomain.com"; // Optional: Add your 'From' email
    $isEmailSent = mail($to, $subject, $message, $headers);
    
    // Step 3: Return response based on whether email was sent successfully
    if ($isEmailSent) {
        echo json_encode(["status" => "email_sent", "message" => "Email sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data received."]);
}
?>
