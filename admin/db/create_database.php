<?php
/**
 * Hephzibah Media - Lead Capture Database Initialization
 * Run once to create database tables
 */

$db_path = __DIR__ . '/hephzibah_leads.db';

try {
    $db = new PDO('sqlite:' . $db_path);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $db->exec("
        CREATE TABLE IF NOT EXISTS leads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone_number TEXT NOT NULL,
            business_name TEXT,
            requested_service TEXT,
            budget TEXT,
            training_interest TEXT,
            message TEXT,
            device_type TEXT,
            ip_address TEXT,
            submission_date DATETIME DEFAULT CURRENT_TIMESTAMP,
            is_replied INTEGER DEFAULT 0,
            reply_date DATETIME,
            notes TEXT
        )
    ");
    
    $db->exec("
        CREATE TABLE IF NOT EXISTS form_submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lead_id INTEGER,
            page_url TEXT,
            form_id TEXT,
            submission_data TEXT,
            submission_date DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(lead_id) REFERENCES leads(id)
        )
    ");
    
    $db->exec("
        CREATE TABLE IF NOT EXISTS admin_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            email TEXT,
            created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_login DATETIME
        )
    ");
    
    $db->exec("
        CREATE TABLE IF NOT EXISTS activity_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            admin_id INTEGER,
            action TEXT,
            details TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(admin_id) REFERENCES admin_users(id)
        )
    ");
    
    $db->exec("CREATE INDEX IF NOT EXISTS idx_submission_date ON leads(submission_date)");
    $db->exec("CREATE INDEX IF NOT EXISTS idx_is_replied ON leads(is_replied)");
    $db->exec("CREATE INDEX IF NOT EXISTS idx_service ON leads(requested_service)");
    
    $default_password = password_hash('admin123', PASSWORD_DEFAULT);
    $check = $db->query("SELECT COUNT(*) FROM admin_users WHERE username = 'admin'");
    if ($check->fetchColumn() == 0) {
        $db->exec("INSERT INTO admin_users (username, password_hash, email) VALUES ('admin', '$default_password', 'admin@hephzibahmedia.com')");
    }
    
    echo "✓ Database initialized successfully!\n";
    echo "✓ Tables created: leads, form_submissions, admin_users, activity_log\n";
    echo "✓ Default admin login: admin / admin123\n";

} catch (Exception $e) {
    die("Error initializing database: " . $e->getMessage());
}

$db = null;
?>