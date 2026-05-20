<?php
/**
 * Hephzibah Media - Admin Login
 */

require_once __DIR__ . '/config.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = sanitizeInput($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    
    $db = getDatabaseConnection();
    
    if ($db) {
        $stmt = $db->prepare("SELECT id, username, password_hash FROM admin_users WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user && password_verify($password, $user['password_hash'])) {
            $_SESSION['admin_id'] = $user['id'];
            $_SESSION['admin_username'] = $user['username'];
            
            $update = $db->prepare("UPDATE admin_users SET last_login = datetime('now') WHERE id = ?");
            $update->execute([$user['id']]);
            
            logActivity($user['id'], 'login', 'Admin logged in');
            
            header('Location: index.php');
            exit;
        } else {
            $error = 'Invalid username or password';
        }
    } else {
        $error = 'Database connection error';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Admin Login - Hephzibah Media</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0F2C; color: #FAF6ED; font-family: 'DM Sans', sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
        .login-box { background: #111A45; padding: 3rem; border-radius: 8px; width: 100%; max-width: 400px; border: 1px solid rgba(201,168,76,0.2); }
        .logo { text-align: center; margin-bottom: 2rem; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 700; }
        .logo span { color: #C9A84C; }
        h2 { text-align: center; margin-bottom: 1.5rem; font-family: 'Cormorant Garamond', serif; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.5rem; font-size: 0.9rem; color: #8A8FA8; }
        input { width: 100%; padding: 0.8rem; border: 1px solid rgba(201,168,76,0.2); border-radius: 4px; background: #0A0F2C; color: #FAF6ED; font-size: 1rem; }
        input:focus { outline: none; border-color: #C9A84C; }
        button { width: 100%; padding: 1rem; background: #C9A84C; color: #0A0F2C; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: 1rem; margin-top: 1rem; }
        button:hover { background: #E2C07A; }
        .error { background: rgba(255,0,0,0.1); color: #ff6b6b; padding: 0.8rem; border-radius: 4px; margin-bottom: 1rem; text-align: center; }
        .back-link { text-align: center; margin-top: 1rem; }
        .back-link a { color: #C9A84C; text-decoration: none; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="login-box">
        <div class="logo">Hephzibah <span>Media</span></div>
        <h2>Admin Login</h2>
        <?php if ($error): ?>
            <div class="error"><?php echo $error; ?></div>
        <?php endif; ?>
        <form method="POST">
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="back-link">
            <a href="../index.html">← Back to Website</a>
        </div>
    </div>
</body>
</html>