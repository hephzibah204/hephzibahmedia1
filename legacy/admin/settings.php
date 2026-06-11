<?php
/**
 * Hephzibah Media - Admin Settings
 */

require_once __DIR__ . '/config.php';
requireLogin();

$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'change_password') {
        $new_password = $_POST['new_password'] ?? '';
        $confirm_password = $_POST['confirm_password'] ?? '';
        
        if ($new_password !== $confirm_password) {
            $message = 'Passwords do not match';
        } elseif (strlen($new_password) < 6) {
            $message = 'Password must be at least 6 characters';
        } else {
            $db = getDatabaseConnection();
            if ($db) {
                $password_hash = password_hash($new_password, PASSWORD_DEFAULT);
                $stmt = $db->prepare("UPDATE admin_users SET password_hash = ? WHERE id = ?");
                $stmt->execute([$password_hash, $_SESSION['admin_id']]);
                logActivity($_SESSION['admin_id'], 'settings', 'Password changed');
                $message = 'Password updated successfully';
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Settings - Hephzibah Media Admin</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0F2C; color: #FAF6ED; font-family: 'DM Sans', sans-serif; }
        .sidebar { position: fixed; left: 0; top: 0; bottom: 0; width: 250px; background: #111A45; border-right: 1px solid rgba(201,168,76,0.1); padding: 1.5rem; }
        .logo { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem; }
        .logo span { color: #C9A84C; }
        .nav a { display: block; padding: 0.8rem 1rem; color: #8A8FA8; text-decoration: none; border-radius: 4px; margin-bottom: 0.5rem; }
        .nav a:hover, .nav a.active { background: rgba(201,168,76,0.1); color: #C9A84C; }
        .main { margin-left: 250px; padding: 2rem; }
        h1 { font-family: 'Cormorant Garamond', serif; font-size: 2rem; margin-bottom: 1.5rem; }
        .card { background: #111A45; padding: 2rem; border-radius: 8px; border: 1px solid rgba(201,168,76,0.1); max-width: 500px; }
        .card h2 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; margin-bottom: 1rem; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.5rem; color: #8A8FA8; }
        input { width: 100%; padding: 0.8rem; border: 1px solid rgba(201,168,76,0.2); border-radius: 4px; background: #0A0F2C; color: #FAF6ED; }
        input:focus { outline: none; border-color: #C9A84C; }
        button { padding: 0.8rem 1.5rem; background: #C9A84C; color: #0A0F2C; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; }
        button:hover { background: #E2C07A; }
        .message { background: rgba(201,168,76,0.2); color: #C9A84C; padding: 1rem; border-radius: 4px; margin-bottom: 1rem; }
        .error { background: rgba(255,0,0,0.2); color: #ff6b6b; }
        .logout { color: #ff6b6b; }
        .info { background: #1C2A5E; padding: 1rem; border-radius: 4px; margin-top: 1rem; font-size: 0.9rem; color: #8A8FA8; }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="logo">Hephzibah <span>Media</span></div>
        <nav class="nav">
            <a href="index.php">Dashboard</a>
            <a href="leads.php">All Leads</a>
            <a href="settings.php" class="active">Settings</a>
            <a href="logout.php" class="logout">Logout</a>
        </nav>
    </div>
    <div class="main">
        <h1>Settings</h1>
        
        <div class="card">
            <h2>Change Password</h2>
            <?php if ($message): ?>
                <div class="message <?php echo strpos($message, 'success') !== false ? '' : 'error'; ?>"><?php echo $message; ?></div>
            <?php endif; ?>
            <form method="POST">
                <input type="hidden" name="action" value="change_password">
                <div class="form-group">
                    <label>New Password</label>
                    <input type="password" name="new_password" required minlength="6">
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_password" required>
                </div>
                <button type="submit">Update Password</button>
            </form>
        </div>
        
        <div class="card" style="margin-top: 1.5rem;">
            <h2>System Info</h2>
            <div class="info">
                <p><strong>Database:</strong> SQLite</p>
                <p><strong>Leads Storage:</strong> admin/db/hephzibah_leads.db</p>
                <p><strong>WhatsApp:</strong> +234 907 778 0156</p>
            </div>
        </div>
    </div>
</body>
</html>