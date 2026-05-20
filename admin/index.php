<?php
/**
 * Hephzibah Media - Admin Dashboard
 */

require_once __DIR__ . '/config.php';
requireLogin();

$db = getDatabaseConnection();

$total_leads = 0;
$unreplied = 0;
$recent_leads = [];

if ($db) {
    $total_leads = $db->query("SELECT COUNT(*) FROM leads")->fetchColumn();
    $unreplied = $db->query("SELECT COUNT(*) FROM leads WHERE is_replied = 0")->fetchColumn();
    
    $stmt = $db->query("SELECT * FROM leads ORDER BY submission_date DESC LIMIT 10");
    $recent_leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

$services = [];
if ($db) {
    $stmt = $db->query("SELECT requested_service, COUNT(*) as count FROM leads WHERE requested_service != '' GROUP BY requested_service ORDER BY count DESC");
    $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Dashboard - Hephzibah Media Admin</title>
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
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
        .stat-card { background: #111A45; padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(201,168,76,0.1); }
        .stat-card h3 { font-size: 0.8rem; color: #8A8FA8; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
        .stat-card .value { font-size: 2rem; font-weight: 700; color: #C9A84C; }
        table { width: 100%; border-collapse: collapse; background: #111A45; border-radius: 8px; overflow: hidden; }
        th, td { padding: 1rem; text-align: left; border-bottom: 1px solid rgba(201,168,76,0.1); }
        th { background: #1C2A5E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: #8A8FA8; }
        tr:hover { background: rgba(201,168,76,0.05); }
        .status { padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.75rem; }
        .status.new { background: rgba(201,168,76,0.2); color: #C9A84C; }
        .status.replied { background: rgba(37,211,102,0.2); color: #25D366; }
        .btn { padding: 0.5rem 1rem; background: #C9A84C; color: #0A0F2C; border: none; border-radius: 4px; cursor: pointer; text-decoration: none; display: inline-block; font-size: 0.85rem; }
        .logout { color: #ff6b6b; }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="logo">Hephzibah <span>Media</span></div>
        <nav class="nav">
            <a href="index.php" class="active">Dashboard</a>
            <a href="leads.php">All Leads</a>
            <a href="settings.php">Settings</a>
            <a href="logout.php" class="logout">Logout</a>
        </nav>
    </div>
    <div class="main">
        <h1>Dashboard</h1>
        
        <div class="stats">
            <div class="stat-card">
                <h3>Total Leads</h3>
                <div class="value"><?php echo $total_leads; ?></div>
            </div>
            <div class="stat-card">
                <h3>Unreplied</h3>
                <div class="value"><?php echo $unreplied; ?></div>
            </div>
            <div class="stat-card">
                <h3>Services</h3>
                <div class="value"><?php echo count($services); ?></div>
            </div>
        </div>
        
        <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; margin-bottom: 1rem;">Recent Leads</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <?php if (empty($recent_leads)): ?>
                    <tr><td colspan="6" style="text-align: center; color: #8A8FA8;">No leads yet</td></tr>
                <?php else: ?>
                    <?php foreach ($recent_leads as $lead): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($lead['full_name']); ?></td>
                        <td><?php echo htmlspecialchars($lead['email']); ?></td>
                        <td><?php echo htmlspecialchars($lead['phone_number']); ?></td>
                        <td><?php echo htmlspecialchars($lead['requested_service'] ?: '-'); ?></td>
                        <td>
                            <span class="status <?php echo $lead['is_replied'] ? 'replied' : 'new'; ?>">
                                <?php echo $lead['is_replied'] ? 'Replied' : 'New'; ?>
                            </span>
                        </td>
                        <td><?php echo date('M d, H:i', strtotime($lead['submission_date'])); ?></td>
                    </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>