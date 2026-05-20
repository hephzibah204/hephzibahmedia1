<?php
/**
 * Hephzibah Media - Admin Logout
 */

require_once __DIR__ . '/config.php';

if (isset($_SESSION['admin_id'])) {
    logActivity($_SESSION['admin_id'], 'logout', 'Admin logged out');
}

session_destroy();
header('Location: login.php');
exit;
?>