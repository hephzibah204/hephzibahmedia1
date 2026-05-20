<?php
/**
 * Hephzibah Media - Lead Capture Handler
 * Processes form submissions and routes based on device type
 */

require_once __DIR__ . '/config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

$full_name = sanitizeInput($_POST['full_name'] ?? '');
$email = sanitizeInput($_POST['email'] ?? '');
$phone = sanitizeInput($_POST['phone_number'] ?? '');
$business_name = sanitizeInput($_POST['business_name'] ?? '');
$service = sanitizeInput($_POST['requested_service'] ?? '');
$budget = sanitizeInput($_POST['budget'] ?? '');
$training_interest = sanitizeInput($_POST['training_interest'] ?? 'no');
$message = sanitizeInput($_POST['message'] ?? '');

if (empty($full_name) || empty($email) || empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

$device_type = isMobileDevice() ? 'mobile' : 'desktop';
$ip_address = getClientIP();

$db = getDatabaseConnection();

if ($db && $device_type === 'desktop') {
    try {
        $stmt = $db->prepare("INSERT INTO leads (full_name, email, phone_number, business_name, requested_service, budget, training_interest, message, device_type, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$full_name, $email, $phone, $business_name, $service, $budget, $training_interest, $message, $device_type, $ip_address]);
        
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you! We will contact you shortly.',
            'redirect' => 'whatsapp'
        ]);
    } catch (Exception $e) {
        error_log("Database error: " . $e->getMessage());
        echo json_encode(['success' => false, 'message' => 'Something went wrong. Please try again.']);
    }
} else {
    $whatsapp_message = "Hi Hephzibah Media, I'm interested in your services.%0A%0AName: $full_name%0AEmail: $email%0APhone: $phone%0AService: $service%0ABudget: $budget%0AMessage: $message";
    $whatsapp_url = "https://wa.me/" . WHATSAPP_NUMBER . "?text=" . $whatsapp_message;
    
    echo json_encode([
        'success' => true,
        'message' => 'Redirecting to WhatsApp...',
        'redirect_url' => $whatsapp_url
    ]);
}
?>