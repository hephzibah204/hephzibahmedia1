-- Hephzibah Media - D1 Schema Migration

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
);

CREATE TABLE IF NOT EXISTS form_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lead_id INTEGER,
    page_url TEXT,
    form_id TEXT,
    submission_data TEXT,
    submission_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(lead_id) REFERENCES leads(id)
);

CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email TEXT,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME
);

CREATE TABLE IF NOT EXISTS activity_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_id INTEGER,
    action TEXT,
    details TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(admin_id) REFERENCES admin_users(id)
);

CREATE INDEX IF NOT EXISTS idx_submission_date ON leads(submission_date);
CREATE INDEX IF NOT EXISTS idx_is_replied ON leads(is_replied);
CREATE INDEX IF NOT EXISTS idx_service ON leads(requested_service);
