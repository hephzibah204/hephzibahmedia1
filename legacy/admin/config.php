<?php
/**
 * Hephzibah Media Configuration
 * Database, security, and general settings
 */

define('DB_PATH', __DIR__ . '/db/hephzibah_leads.db');
define('WHATSAPP_NUMBER', '2349077780156');
define('SITE_NAME', 'Hephzibah Media');
define('SITE_URL', 'https://www.hephzibahmedia.com');

function getDatabaseConnection() {
    try {
        $db = new PDO('sqlite:' . DB_PATH);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;
    } catch (PDOException $e) {
        error_log("Database connection failed: " . $e->getMessage());
        return null;
    }
}

function sanitizeInput($input) {
    if (is_array($input)) {
        return array_map('sanitizeInput', $input);
    }
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

function isMobileDevice() {
    return preg_match('/mobile|android|iphone|ipad|phone/i', $_SERVER['HTTP_USER_AGENT'] ?? '');
}

function getClientIP() {
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ips = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        return trim($ips[0]);
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function logActivity($admin_id, $action, $details) {
    $db = getDatabaseConnection();
    if ($db) {
        $stmt = $db->prepare("INSERT INTO activity_log (admin_id, action, details) VALUES (?, ?, ?)");
        $stmt->execute([$admin_id, $action, $details]);
    }
}

session_start();

function requireLogin() {
    if (!isset($_SESSION['admin_id'])) {
        header('Location: login.php');
        exit;
    }
}

function isLoggedIn() {
    return isset($_SESSION['admin_id']);
}
?>