# Backend Implementation Guide
## Lead Capture & Database System for Hephzibah Media

---

## OVERVIEW

This guide covers the complete backend infrastructure for:
- SQLite database setup
- PHP form handling
- Device detection (mobile vs desktop)
- Mobile → WhatsApp redirect
- Desktop → Database storage
- Admin dashboard
- Security implementation

**Tech Stack:**
- PHP 7.4+
- SQLite3
- Vanilla JavaScript (device detection)
- cPanel compatible
- Lightweight & scalable

---

## PHASE 1: DATABASE SETUP

### Step 1: Create Database Schema

Create file: `admin/db/create_database.php`

```php
<?php
/**
 * Hephzibah Media - Lead Capture Database Initialization
 * Run once to create database tables
 */

// Database connection
$db_path = __DIR__ . '/hephzibah_leads.db';

try {
    // Create database connection
    $db = new PDO('sqlite:' . $db_path);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create leads table
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
    
    // Create form submissions log table
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
    
    // Create admin users table
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
    
    // Create activity log table
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
    
    // Create indexes for better performance
    $db->exec("CREATE INDEX IF NOT EXISTS idx_submission_date ON leads(submission_date)");
    $db->exec("CREATE INDEX IF NOT EXISTS idx_is_replied ON leads(is_replied)");
    $db->exec("CREATE INDEX IF NOT EXISTS idx_service ON leads(requested_service)");
    
    echo "✓ Database initialized successfully!\n";
    echo "✓ Tables created: leads, form_submissions, admin_users, activity_log\n";
    
} catch (Exception $e) {
    die("Error initializing database: " . $e->getMessage());
}

// Close connection
$db = null;
?>
```

**To run:**
- Upload file to server
- Visit: `https://yourdomain.com/admin/db/create_database.php`
- Or run via command line: `php /home/username/public_html/admin/db/create_database.php`

---

## PHASE 2: CONFIGURATION & SETUP

### Step 1: Create Config File

Create file: `admin/config.php`

```php
<?php
/**
 * Hephzibah Media Configuration
 * Database, security, and general settings
 */

// ============================================
// DATABASE CONFIGURATION
// ============================================

define('DB_PATH', __DIR__ . '/db/hephzibah_leads.db');

function getDatabaseConnection() {
    try {
        $db = new PDO('sqlite:' . DB_PATH);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;
    } catch (Exception $e) {
        die('Database connection failed: ' . $e->getMessage());
    }
}

// ============================================
// SECURITY CONFIGURATION
// ============================================

define('SESSION_TIMEOUT', 1800); // 30 minutes
define('MAX_LOGIN_ATTEMPTS', 5);
define('LOCKOUT_TIME', 900); // 15 minutes

// Admin login credentials (CHANGE THESE!)
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD_HASH', password_hash('hephzibah2025', PASSWORD_BCRYPT));

// WhatsApp configuration
define('WHATSAPP_PHONE', '2349077780156'); // Format: country code + number

// Email configuration (optional)
define('NOTIFICATION_EMAIL', 'info@hephzibahedutech.com.ng');
define('ADMIN_EMAIL', 'abiodun@hephzibahedutech.com.ng');

// ============================================
// COMPANY INFORMATION
// ============================================

define('COMPANY_NAME', 'Hephzibah Media');
define('COMPANY_PHONE', '09077780156');
define('COMPANY_ADDRESS', 'Old Ode Road, Along Ogere Tollgate, Ogere, Nigeria');
define('COMPANY_EMAIL', 'info@hephzibahedutech.com.ng');

// ============================================
// FORM CONFIGURATION
// ============================================

define('FORM_REQUIRED_FIELDS', [
    'full_name',
    'email',
    'phone_number',
    'requested_service'
]);

define('SERVICES_LIST', [
    'web-design' => 'Web Design',
    'web-development' => 'Web Development',
    'seo' => 'SEO Services',
    'digital-marketing' => 'Digital Marketing',
    'graphics-design' => 'Graphics Design',
    'ecommerce' => 'E-commerce Development',
    'mobile-app' => 'Mobile App Development',
    'custom-software' => 'Custom Software',
    'landing-pages' => 'Landing Pages & Sales Funnels',
    'training' => 'Training Programs',
    'other' => 'Other'
]);

define('BUDGET_RANGES', [
    '100k-300k' => '₦100,000 - ₦300,000',
    '300k-500k' => '₦300,000 - ₦500,000',
    '500k-1m' => '₦500,000 - ₦1,000,000',
    '1m-5m' => '₦1,000,000 - ₦5,000,000',
    '5m+' => '₦5,000,000+'
]);

// ============================================
// LOGGING & ERROR HANDLING
// ============================================

define('LOG_PATH', __DIR__ . '/logs/');
define('DEBUG_MODE', false); // Set to true for development

function logError($message, $context = []) {
    $timestamp = date('Y-m-d H:i:s');
    $log_file = LOG_PATH . 'error.log';
    
    if (!is_dir(LOG_PATH)) {
        mkdir(LOG_PATH, 0755, true);
    }
    
    $log_entry = "[{$timestamp}] {$message}";
    if (!empty($context)) {
        $log_entry .= "\n" . json_encode($context, JSON_PRETTY_PRINT);
    }
    $log_entry .= "\n---\n";
    
    file_put_contents($log_file, $log_entry, FILE_APPEND);
}

function logActivity($action, $details = [], $db = null) {
    if ($db && isset($_SESSION['admin_id'])) {
        try {
            $stmt = $db->prepare("
                INSERT INTO activity_log (admin_id, action, details, timestamp)
                VALUES (?, ?, ?, CURRENT_TIMESTAMP)
            ");
            $stmt->execute([
                $_SESSION['admin_id'],
                $action,
                json_encode($details)
            ]);
        } catch (Exception $e) {
            logError('Activity log failed', ['error' => $e->getMessage()]);
        }
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function sanitizeInput($input) {
    if (is_array($input)) {
        return array_map('sanitizeInput', $input);
    }
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function validatePhone($phone) {
    // Nigerian phone format: 09XXX XXXXX or +234 9XXX XXXXX
    $phone = preg_replace('/[^0-9+]/', '', $phone);
    return strlen($phone) >= 10 && strlen($phone) <= 15;
}

function getClientIP() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : 'UNKNOWN';
}

function formatPhoneForWhatsApp($phone) {
    // Convert to standard format: 2349077780156
    $phone = preg_replace('/[^0-9]/', '', $phone);
    
    // If starts with 0, replace with 234
    if (substr($phone, 0, 1) === '0') {
        $phone = '234' . substr($phone, 1);
    }
    
    // If doesn't start with 234, assume it's Nigerian
    if (substr($phone, 0, 3) !== '234') {
        $phone = '234' . ltrim($phone, '0');
    }
    
    return $phone;
}

// ============================================
// START SESSION
// ============================================

session_start();

// Session timeout check
if (isset($_SESSION['last_activity'])) {
    if ((time() - $_SESSION['last_activity']) > SESSION_TIMEOUT) {
        session_destroy();
        header('Location: /admin/login.php?expired=1');
        exit;
    }
}
$_SESSION['last_activity'] = time();

?>
```

---

## PHASE 3: FORM SUBMISSION HANDLER

### Step 1: Frontend JavaScript (Form Submission & Device Detection)

Add to your HTML pages (before closing `</body>`):

```html
<script>
/**
 * Form Handler & Device Detection
 * Hephzibah Media
 */

(function() {
    'use strict';
    
    // ================================
    // DEVICE DETECTION
    // ================================
    
    function detectDevice() {
        const userAgent = navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        return {
            isMobile: isMobile,
            userAgent: userAgent,
            type: isMobile ? 'mobile' : 'desktop'
        };
    }
    
    // ================================
    // FORM SUBMISSION HANDLER
    // ================================
    
    function handleFormSubmission(e) {
        e.preventDefault();
        
        const form = e.target;
        const device = detectDevice();
        const formData = new FormData(form);
        
        // Add device type to form
        formData.append('device_type', device.type);
        
        // Add user agent
        formData.append('user_agent', device.userAgent);
        
        // Validate form
        if (!validateForm(formData)) {
            alert('Please fill in all required fields');
            return;
        }
        
        // If mobile - redirect to WhatsApp
        if (device.isMobile) {
            redirectToWhatsApp(formData);
        } else {
            // If desktop - submit to backend
            submitFormToBackend(form, formData);
        }
    }
    
    // ================================
    // FORM VALIDATION
    // ================================
    
    function validateForm(formData) {
        const required = ['full_name', 'email', 'phone_number', 'requested_service'];
        
        for (let field of required) {
            if (!formData.get(field) || formData.get(field).trim() === '') {
                return false;
            }
        }
        
        // Email validation
        const email = formData.get('email');
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        // Phone validation
        const phone = formData.get('phone_number');
        if (!isValidPhone(phone)) {
            alert('Please enter a valid phone number');
            return false;
        }
        
        return true;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        // Accept various Nigerian phone formats
        const phoneRegex = /^(\+234|234|0)?[789]\d{9}$/;
        const cleaned = phone.replace(/[^\d+]/g, '');
        return phoneRegex.test(cleaned) || cleaned.length >= 10;
    }
    
    // ================================
    // WHATSAPP REDIRECT
    // ================================
    
    function redirectToWhatsApp(formData) {
        const name = formData.get('full_name') || 'Friend';
        const service = formData.get('requested_service') || 'a service';
        const budget = formData.get('budget') || 'not specified';
        const message = formData.get('message') || '';
        
        // Construct WhatsApp message
        let waMessage = `Hello Hephzibah Media, my name is ${name}.\n`;
        waMessage += `I need: ${service}\n`;
        waMessage += `My budget: ${budget}\n`;
        
        if (message) {
            waMessage += `\nAdditional info: ${message}`;
        }
        
        // Format phone number for WhatsApp
        const whatsappPhone = '2349077780156'; // Update with actual number
        
        // Redirect to WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(waMessage)}`;
        window.location.href = whatsappUrl;
    }
    
    // ================================
    // BACKEND SUBMISSION
    // ================================
    
    function submitFormToBackend(form, formData) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        fetch('/admin/api/submit-lead.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // Show success message
                showSuccessMessage(form);
                
                // Reset form
                form.reset();
                
                // Optionally redirect after delay
                setTimeout(() => {
                    if (data.redirect) {
                        window.location.href = data.redirect;
                    }
                }, 2000);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            alert('Error submitting form: ' + error.message + '\nPlease try again or contact us on WhatsApp.');
        })
        .finally(() => {
            // Restore button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    }
    
    // ================================
    // SUCCESS MESSAGE
    // ================================
    
    function showSuccessMessage(form) {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success-message';
        successDiv.innerHTML = `
            <div style="background: #25D366; color: white; padding: 1.5rem; border-radius: 4px; text-align: center;">
                <h3 style="margin: 0 0 0.5rem 0; font-size: 1.2rem;">✓ Message Received!</h3>
                <p style="margin: 0; opacity: 0.95;">We'll get back to you within 24 hours.</p>
                <p style="margin: 0.8rem 0 0 0; font-size: 0.9rem; opacity: 0.9;">Or chat with us on WhatsApp for instant response.</p>
            </div>
        `;
        
        form.parentNode.insertBefore(successDiv, form);
        form.style.display = 'none';
        
        // Hide after 5 seconds
        setTimeout(() => {
            successDiv.style.display = 'none';
            form.style.display = 'block';
        }, 5000);
    }
    
    // ================================
    // INITIALIZE
    // ================================
    
    document.addEventListener('DOMContentLoaded', function() {
        // Find all forms with class 'hephzibah-contact-form'
        const forms = document.querySelectorAll('.hephzibah-contact-form');
        
        forms.forEach(form => {
            form.addEventListener('submit', handleFormSubmission);
        });
    });
    
})();
</script>
```

### Step 2: HTML Form Structure

Add this form to service pages and contact page:

```html
<form class="hephzibah-contact-form" method="POST" style="max-width: 600px; margin: 2rem auto;">
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label for="full_name" style="display: block; margin-bottom: 0.5rem; color: var(--gold); font-weight: 500;">
            Full Name *
        </label>
        <input 
            type="text" 
            id="full_name" 
            name="full_name" 
            required 
            placeholder="Your name"
            style="width: 100%; padding: 0.8rem; background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.3); color: var(--cream); border-radius: 2px; font-family: var(--font-body);"
        />
    </div>
    
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label for="email" style="display: block; margin-bottom: 0.5rem; color: var(--gold); font-weight: 500;">
            Email Address *
        </label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="your@email.com"
            style="width: 100%; padding: 0.8rem; background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.3); color: var(--cream); border-radius: 2px; font-family: var(--font-body);"
        />
    </div>
    
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label for="phone_number" style="display: block; margin-bottom: 0.5rem; color: var(--gold); font-weight: 500;">
            Phone Number *
        </label>
        <input 
            type="tel" 
            id="phone_number" 
            name="phone_number" 
            required 
            placeholder="09077780156"
            style="width: 100%; padding: 0.8rem; background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.3); color: var(--cream); border-radius: 2px; font-family: var(--font-body);"
        />
    </div>
    
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label for="business_name" style="display: block; margin-bottom: 0.5rem; color: var(--gold); font-weight: 500;">
            Business Name
        </label>
        <input 
            type="text" 
            id="business_name" 
            name="business_name" 
            placeholder="Your company name (optional)"
            style="width: 100%; padding: 0.8rem; background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.3); color: var(--cream); border-radius: 2px; font-family: var(--font-body);"
        />
    </div>
    
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label for="requested_service" style="display: block; margin-bottom: 0.5rem; color: var(--gold); font-weight: 500;">
            Service Needed *
        </label>
        <select 
            id="requested_service" 
            name="requested_service" 
            required
            style="width: 100%; padding: 0.8rem; background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.3); color: var(--cream); border-radius: 2px; font-family: var(--font-body);"
        >
            <option value="">-- Select a service --</option>
            <option value="web-design">Web Design</option>
            <option value="web-development">Web Development</option>
            <option value="seo">SEO Services</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="graphics-design">Graphics Design</option>
            <option value="ecommerce">E-commerce Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="landing-pages">Landing Pages & Sales Funnels</option>
            <option value="training">Training Programs</option>
            <option value="other">Other</option>
        </select>
    </div>
    
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label for="budget" style="display: block; margin-bottom: 0.5rem; color: var(--gold); font-weight: 500;">
            Budget Range
        </label>
        <select 
            id="budget" 
            name="budget"
            style="width: 100%; padding: 0.8rem; background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.3); color: var(--cream); border-radius: 2px; font-family: var(--font-body);"
        >
            <option value="">-- Select budget range --</option>
            <option value="100k-300k">₦100,000 - ₦300,000</option>
            <option value="300k-500k">₦300,000 - ₦500,000</option>
            <option value="500k-1m">₦500,000 - ₦1,000,000</option>
            <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
            <option value="5m+">₦5,000,000+</option>
        </select>
    </div>
    
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label style="display: flex; align-items: center; gap: 0.8rem; cursor: pointer; color: var(--cream);">
            <input 
                type="checkbox" 
                id="training_interest" 
                name="training_interest" 
                value="yes"
                style="width: 18px; height: 18px; cursor: pointer;"
            />
            <span>I'm also interested in our training programs</span>
        </label>
    </div>
    
    <div class="form-group" style="margin-bottom: 1.5rem;">
        <label for="message" style="display: block; margin-bottom: 0.5rem; color: var(--gold); font-weight: 500;">
            Message
        </label>
        <textarea 
            id="message" 
            name="message" 
            placeholder="Tell us more about your needs (optional)"
            rows="5"
            style="width: 100%; padding: 0.8rem; background: var(--navy); border: 1px solid rgba(201, 168, 76, 0.3); color: var(--cream); border-radius: 2px; font-family: var(--font-body); resize: vertical;"
        ></textarea>
    </div>
    
    <button 
        type="submit" 
        class="btn-primary" 
        style="width: 100%; padding: 1rem; font-size: 1rem;"
    >
        Send Inquiry
    </button>
    
    <p style="text-align: center; margin-top: 1rem; font-size: 0.9rem; color: var(--grey);">
        On mobile? You'll be redirected to WhatsApp for faster response.
    </p>
</form>
```

---

## PHASE 4: BACKEND PHP API

### Step 1: Lead Submission Handler

Create file: `admin/api/submit-lead.php`

```php
<?php
/**
 * Lead Submission Handler
 * Receives form data and either redirects to WhatsApp (mobile) or saves to database (desktop)
 */

require_once __DIR__ . '/../config.php';

// Set response headers
header('Content-Type: application/json');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]));
}

// Get database connection
$db = getDatabaseConnection();

try {
    // Sanitize all inputs
    $data = [
        'full_name' => sanitizeInput($_POST['full_name'] ?? ''),
        'email' => sanitizeInput($_POST['email'] ?? ''),
        'phone_number' => sanitizeInput($_POST['phone_number'] ?? ''),
        'business_name' => sanitizeInput($_POST['business_name'] ?? ''),
        'requested_service' => sanitizeInput($_POST['requested_service'] ?? ''),
        'budget' => sanitizeInput($_POST['budget'] ?? ''),
        'training_interest' => sanitizeInput($_POST['training_interest'] ?? 'no'),
        'message' => sanitizeInput($_POST['message'] ?? ''),
        'device_type' => sanitizeInput($_POST['device_type'] ?? 'unknown'),
        'user_agent' => sanitizeInput($_POST['user_agent'] ?? ''),
        'ip_address' => getClientIP()
    ];
    
    // Validate required fields
    $required = ['full_name', 'email', 'phone_number', 'requested_service'];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            throw new Exception("Missing required field: {$field}");
        }
    }
    
    // Validate email format
    if (!validateEmail($data['email'])) {
        throw new Exception("Invalid email address");
    }
    
    // Validate phone format
    if (!validatePhone($data['phone_number'])) {
        throw new Exception("Invalid phone number");
    }
    
    // Insert into database
    $stmt = $db->prepare("
        INSERT INTO leads (
            full_name,
            email,
            phone_number,
            business_name,
            requested_service,
            budget,
            training_interest,
            message,
            device_type,
            ip_address,
            submission_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    ");
    
    $stmt->execute([
        $data['full_name'],
        $data['email'],
        $data['phone_number'],
        $data['business_name'],
        $data['requested_service'],
        $data['budget'],
        $data['training_interest'],
        $data['message'],
        $data['device_type'],
        $data['ip_address']
    ]);
    
    $lead_id = $db->lastInsertId();
    
    // Log form submission
    logActivity('lead_submitted', [
        'lead_id' => $lead_id,
        'service' => $data['requested_service'],
        'device' => $data['device_type']
    ], $db);
    
    // Send notification email (optional)
    sendLeadNotificationEmail($data, $lead_id);
    
    // Return success response
    exit(json_encode([
        'success' => true,
        'message' => 'Thank you! We\'ll get back to you within 24 hours.',
        'lead_id' => $lead_id,
        'redirect' => '/thank-you.html'
    ]));
    
} catch (Exception $e) {
    logError('Lead submission error', [
        'error' => $e->getMessage(),
        'data' => $_POST,
        'ip' => getClientIP()
    ]);
    
    http_response_code(400);
    exit(json_encode([
        'success' => false,
        'message' => 'Error processing your submission: ' . $e->getMessage()
    ]));
} finally {
    $db = null;
}

// ================================
// HELPER: Send Email Notification
// ================================

function sendLeadNotificationEmail($data, $lead_id) {
    $to = NOTIFICATION_EMAIL;
    $subject = "New Lead: " . $data['requested_service'];
    
    $message = "
    <html><body style='font-family: Arial, sans-serif;'>
    <h2>New Lead Received</h2>
    <p><strong>Name:</strong> {$data['full_name']}</p>
    <p><strong>Email:</strong> {$data['email']}</p>
    <p><strong>Phone:</strong> {$data['phone_number']}</p>
    <p><strong>Business:</strong> {$data['business_name']}</p>
    <p><strong>Service:</strong> {$data['requested_service']}</p>
    <p><strong>Budget:</strong> {$data['budget']}</p>
    <p><strong>Training Interest:</strong> {$data['training_interest']}</p>
    <p><strong>Device:</strong> {$data['device_type']}</p>
    
    <p><strong>Message:</strong></p>
    <p>" . nl2br($data['message']) . "</p>
    
    <p><a href='https://yourdomai
n.com/admin/dashboard.php?lead_id={$lead_id}'>View in Dashboard</a></p>
    </body></html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: " . COMPANY_EMAIL . "\r\n";
    
    // Only send if email is configured
    if (!empty($to)) {
        mail($to, $subject, $message, $headers);
    }
}

?>
```

---

## PHASE 5: ADMIN DASHBOARD (BASIC)

### Step 1: Login Page

Create file: `admin/login.php`

```php
<?php
/**
 * Admin Login Page
 */

require_once __DIR__ . '/config.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // Check credentials (simple version - use database in production)
    if ($username === ADMIN_USERNAME && password_verify($password, ADMIN_PASSWORD_HASH)) {
        $_SESSION['admin_id'] = 1;
        $_SESSION['admin_username'] = $username;
        $_SESSION['last_login'] = date('Y-m-d H:i:s');
        
        header('Location: /admin/dashboard.php');
        exit;
    } else {
        $error = 'Invalid username or password';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Hephzibah Media</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            background: #0A0F2C; 
            color: #FAF6ED; 
            font-family: 'DM Sans', Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .login-container {
            background: #111A45;
            padding: 3rem;
            border-radius: 4px;
            border: 1px solid rgba(201, 168, 76, 0.2);
            max-width: 400px;
            width: 100%;
        }
        h1 {
            color: #C9A84C;
            margin-bottom: 0.5rem;
            font-size: 1.8rem;
        }
        .subtitle {
            color: #8A8FA8;
            margin-bottom: 2rem;
            font-size: 0.95rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        label {
            display: block;
            color: #C9A84C;
            margin-bottom: 0.5rem;
            font-weight: 500;
            font-size: 0.9rem;
        }
        input {
            width: 100%;
            padding: 0.8rem;
            background: #0A0F2C;
            border: 1px solid rgba(201, 168, 76, 0.3);
            color: #FAF6ED;
            border-radius: 2px;
            font-family: inherit;
            font-size: 1rem;
        }
        input:focus {
            outline: none;
            border-color: #C9A84C;
        }
        button {
            width: 100%;
            padding: 0.85rem;
            background: #C9A84C;
            color: #0A0F2C;
            border: none;
            border-radius: 2px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s;
        }
        button:hover {
            background: #E2C07A;
            transform: translateY(-2px);
        }
        .error {
            background: rgba(255, 100, 100, 0.1);
            border: 1px solid #FF6464;
            color: #FF8080;
            padding: 1rem;
            border-radius: 2px;
            margin-bottom: 1.5rem;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Hephzibah Media</h1>
        <p class="subtitle">Lead Management Dashboard</p>
        
        <?php if ($error): ?>
            <div class="error"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>
        
        <form method="POST">
            <div class="form-group">
                <label for="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    required 
                    autofocus
                />
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required
                />
            </div>
            
            <button type="submit">Login</button>
        </form>
    </div>
</body>
</html>
```

---

## SECURITY CHECKLIST

- [ ] Change default admin credentials in config.php
- [ ] Use HTTPS (SSL certificate)
- [ ] Validate all inputs server-side
- [ ] Use parameterized queries (prevent SQL injection)
- [ ] Hash passwords with bcrypt
- [ ] Implement CSRF protection
- [ ] Set proper file permissions (644 for PHP, 755 for directories)
- [ ] Disable directory listing (.htaccess)
- [ ] Regular database backups
- [ ] Monitor error logs
- [ ] Keep PHP updated
- [ ] Rate limit form submissions (optional, via .htaccess or PHP)

---

## DEPLOYMENT CHECKLIST

### Step 1: Upload Files
```
admin/
├── config.php
├── login.php
├── dashboard.php (to be created)
├── api/
│   ├── submit-lead.php
│   └── get-leads.php (to be created)
├── db/
│   ├── create_database.php
│   └── hephzibah_leads.db (created after running initialization)
└── logs/
    └── (created automatically)
```

### Step 2: Run Database Initialization
- Visit: `https://yourdomain.com/admin/db/create_database.php`
- Or run via cPanel terminal

### Step 3: Configure & Test
- Update credentials in config.php
- Test form submissions
- Verify WhatsApp redirects (mobile)
- Verify database storage (desktop)
- Check email notifications

### Step 4: Security
- Change file permissions
- Enable HTTPS
- Test login functionality
- Remove create_database.php after use (optional but recommended)

---

## TROUBLESHOOTING

### Forms Not Submitting
1. Check JavaScript console for errors
2. Verify form has class `hephzibah-contact-form`
3. Check all required fields are filled
4. Verify admin/api/submit-lead.php exists and is accessible

### Database Not Storing Leads
1. Check file permissions (666 for .db file)
2. Verify database was created
3. Check error logs in admin/logs/
4. Verify PDO extension is enabled

### WhatsApp Not Opening on Mobile
1. Verify phone number format in config.php
2. Test WhatsApp link directly: `https://wa.me/2349077780156?text=test`
3. Check if WhatsApp is installed on test device

### Email Notifications Not Sending
1. Check if NOTIFICATION_EMAIL is configured
2. Verify server supports mail() function
3. Check spam/junk folder
4. Review server email logs

---

## NEXT STEPS

1. ✓ Create database tables
2. ✓ Setup PHP backend
3. □ Create admin dashboard (for viewing leads)
4. □ Create email notification system
5. □ Implement rate limiting
6. □ Add lead export (CSV)
7. □ Add analytics integration
8. □ Create mobile app (optional)

---

*This backend system is designed to be lightweight, cPanel-compatible, and easy to maintain.*
