<?php
/**
 * Hephzibah Media - All Leads
 */

require_once __DIR__ . '/config.php';
requireLogin();

$db = getDatabaseConnection();

$leads = [];
$filter = $_GET['filter'] ?? 'all';

$query = "SELECT * FROM leads ORDER BY submission_date DESC";
if ($filter === 'unreplied') {
    $query = "SELECT * FROM leads WHERE is_replied = 0 ORDER BY submission_date DESC";
} elseif ($filter === 'replied') {
    $query = "SELECT * FROM leads WHERE is_replied = 1 ORDER BY submission_date DESC";
}

if ($db) {
    $leads = $db->query($query)->fetchAll(PDO::FETCH_ASSOC);
}

if (isset($_POST['action']) && $_POST['action'] === 'mark_replied' && $db) {
    $lead_id = $_POST['lead_id'];
    $stmt = $db->prepare("UPDATE leads SET is_replied = 1, reply_date = datetime('now') WHERE id = ?");
    $stmt->execute([$lead_id]);
    logActivity($_SESSION['admin_id'], 'lead_update', "Marked lead #$lead_id as replied");
    header('Location: leads.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>All Leads - Hephzibah Media Admin</title>
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
        .filters { margin-bottom: 1.5rem; display: flex; gap: 1rem; }
        .filters a { padding: 0.5rem 1rem; background: #111A45; color: #8A8FA8; text-decoration: none; border-radius: 4px; }
        .filters a.active { background: #C9A84C; color: #0A0F2C; }
        table { width: 100%; border-collapse: collapse; background: #111A45; border-radius: 8px; overflow: hidden; }
        th, td { padding: 1rem; text-align: left; border-bottom: 1px solid rgba(201,168,76,0.1); }
        th { background: #1C2A5E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: #8A8FA8; }
        tr:hover { background: rgba(201,168,76,0.05); }
        .status { padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.75rem; }
        .status.new { background: rgba(201,168,76,0.2); color: #C9A84C; }
        .status.replied { background: rgba(37,211,102,0.2); color: #25D366; }
        .btn { padding: 0.4rem 0.8rem; background: #C9A84C; color: #0A0F2C; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem; }
        .btn:hover { background: #E2C07A; }
        .logout { color: #ff6b6b; }
        .message { max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="logo">Hephzibah <span>Media</span></div>
        <nav class="nav">
            <a href="index.php">Dashboard</a>
            <a href="leads.php" class="active">All Leads</a>
            <a href="settings.php">Settings</a>
            <a href="logout.php" class="logout">Logout</a>
        </nav>
    </div>
    <div class="main">
        <h1>All Leads</h1>
        
        <div class="filters">
            <a href="leads.php?filter=all" class="<?php echo $filter === 'all' ? 'active' : ''; ?>">All</a>
            <a href="leads.php?filter=unreplied" class="<?php echo $filter === 'unreplied' ? 'active' : ''; ?>">Unreplied</a>
            <a href="leads.php?filter=replied" class="<?php echo $filter === 'replied' ? 'active' : ''; ?>">Replied</a>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php if (empty($leads)): ?>
                    <tr><td colspan="8" style="text-align: center; color: #8A8FA8;">No leads found</td></tr>
                <?php else: ?>
                    <?php foreach ($leads as $lead): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($lead['full_name']); ?></td>
                        <td><?php echo htmlspecialchars($lead['email']); ?></td>
                        <td><?php echo htmlspecialchars($lead['phone_number']); ?></td>
                        <td><?php echo htmlspecialchars($lead['requested_service'] ?: '-'); ?></td>
                        <td class="message" title="<?php echo htmlspecialchars($lead['message']); ?>"><?php echo htmlspecialchars($lead['message'] ?: '-'); ?></td>
                        <td>
                            <span class="status <?php echo $lead['is_replied'] ? 'replied' : 'new'; ?>">
                                <?php echo $lead['is_replied'] ? 'Replied' : 'New'; ?>
                            </span>
                        </td>
                        <td><?php echo date('M d, Y H:i', strtotime($lead['submission_date'])); ?></td>
                        <td>
                            <?php if (!$lead['is_replied']): ?>
                            <form method="POST" style="display:inline;">
                                <input type="hidden" name="action" value="mark_replied">
                                <input type="hidden" name="lead_id" value="<?php echo $lead['id']; ?>">
                                <button type="submit">Mark Replied</button>
                            </form>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>
</html>