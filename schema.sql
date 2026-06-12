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
