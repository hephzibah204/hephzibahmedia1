import os
import re

nav_html = """  <!-- NAVBAR -->
  <nav id="navbar">
    <a class="nav-logo" href="index.html">Hephzibah <span>Media</span></a>
    <ul class="nav-links">
      <li class="nav-item">
        <a href="index.html#services">Services</a>
        <div class="mega-menu">
          <div class="mega-col">
            <h3>Web & Apps</h3>
            <ul>
              <li><a href="web-design.html">Web Design</a></li>
              <li><a href="ecommerce.html">E-commerce</a></li>
              <li><a href="mobile-app.html">Mobile Apps</a></li>
              <li><a href="wordpress.html">WordPress</a></li>
              <li><a href="custom-software.html">Custom Software</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Marketing & SEO</h3>
            <ul>
              <li><a href="seo.html">SEO</a></li>
              <li><a href="digital-marketing.html">Digital Marketing</a></li>
              <li><a href="growth-marketing.html">Growth Marketing</a></li>
              <li><a href="landing-pages-sales-funnels.html">Landing Pages</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Creative & Print</h3>
            <ul>
              <li><a href="graphics-design.html">Graphics Design</a></li>
              <li><a href="printing.html">Printing Services</a></li>
              <li><a href="large-format.html">Large Format</a></li>
              <li><a href="tshirt.html">T-Shirt Printing</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Specialized</h3>
            <ul>
              <li><a href="cybersecurity.html">Cybersecurity</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="training.html">Training</a>
        <div class="mega-menu">
          <div class="mega-col">
            <h3>Tech & Design</h3>
            <ul>
              <li><a href="web-design-training.html">Web Design</a></li>
              <li><a href="ui-ux-training.html">UI/UX</a></li>
              <li><a href="coding-training.html">Coding</a></li>
              <li><a href="graphics-design-training.html">Graphics Design</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Marketing & Growth</h3>
            <ul>
              <li><a href="digital-marketing-training.html">Digital Marketing</a></li>
              <li><a href="seo-training.html">SEO</a></li>
              <li><a href="sales-funnel-training.html">Sales Funnel</a></li>
              <li><a href="content-creation-training.html">Content Creation</a></li>
              <li><a href="social-media-training.html">Social Media</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Strategy</h3>
            <ul>
              <li><a href="video-editing-training.html">Video Editing</a></li>
              <li><a href="ai-tools-training.html">AI Tools</a></li>
              <li><a href="business-digitalization-training.html">Business Digitalization</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="free-resources.html">Resources</a>
        <div class="mega-menu">
          <div class="mega-col">
            <h3>Calculators</h3>
            <ul>
              <li><a href="ad-budget-calculator.html">Ad Budget</a></li>
              <li><a href="roi-calculator.html">ROI Calculator</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Generators</h3>
            <ul>
              <li><a href="hashtag-generator.html">Hashtag</a></li>
              <li><a href="headline-cta-generator.html">Headline/CTA</a></li>
              <li><a href="ab-test-generator.html">AB Test</a></li>
              <li><a href="email-subject-tester.html">Email Subject</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Strategy</h3>
            <ul>
              <li><a href="keyword-research.html">Keyword Research</a></li>
              <li><a href="content-calendar.html">Content Calendar</a></li>
              <li><a href="customer-avatar.html">Customer Avatar</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Learning</h3>
            <ul>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="free-resources.html">Free Resources</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a href="portfolio.html">Company</a>
        <div class="mega-menu">
          <div class="mega-col">
            <h3>Our Work</h3>
            <ul>
              <li><a href="case-studies.html">Case Studies</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>About</h3>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="service-areas.html">Service Areas</a></li>
            </ul>
          </div>
          <div class="mega-col">
            <h3>Connect</h3>
            <ul>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li><a href="contact.html" class="nav-cta">Get Started</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>"""

css_link = '  <link rel="stylesheet" href="css/navigation.css" />'
js_link = '  <script src="js/navigation.js"></script>'

files = [f for f in os.listdir('.') if f.endswith('.html') and f not in ['index.html', 'web-design.html']]

for filename in files:
    content = None
    encodings = ['utf-8', 'latin-1', 'cp1252']
    used_encoding = 'utf-8'
    
    for enc in encodings:
        try:
            with open(filename, 'r', encoding=enc) as f:
                content = f.read()
            used_encoding = enc
            break
        except UnicodeDecodeError:
            continue
            
    if content is None:
        print(f"Could not read {filename}")
        continue
        
    # 1. Add CSS link in head
    if '</head>' in content and 'navigation.css' not in content:
        content = content.replace('</head>', css_link + '\n</head>')
    
    # 2. Replace Nav block
    new_content = re.sub(r'<nav id="navbar">.*?</nav>', nav_html, content, flags=re.DOTALL)
    if new_content == content:
        new_content = re.sub(r'<nav>.*?</nav>', nav_html, content, flags=re.DOTALL)
    content = new_content
    
    # 3. Add JS link before body
    if '</body>' in content and 'navigation.js' not in content:
        content = content.replace('</body>', js_link + '\n</body>')
        
    # 4. Remove inline nav CSS (Optional but good)
    # Most pages have nav { ... } .nav-logo { ... } .nav-links { ... } .hamburger { ... }
    # I'll use a safer approach and just leave it for now unless it causes visible issues, 
    # but the external CSS should override it.
    
    try:
        with open(filename, 'w', encoding=used_encoding) as f:
            f.write(content)
        print(f"Updated {filename} using {used_encoding}")
    except Exception as e:
        print(f"Error updating {filename}: {e}")

print("Batch update complete.")
