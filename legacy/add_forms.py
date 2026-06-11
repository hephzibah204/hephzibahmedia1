import re
import sys

files_to_update = [
    'ecommerce.html',
    'mobile-app.html',
    'custom-software.html',
    'wordpress.html',
    'printing.html',
    'growth-marketing.html',
    'large-format.html',
    'tshirt.html'
]

form_html = '''
      <form id="leadForm" class="lead-form" method="POST" style="max-width: 600px; margin: 3rem auto; text-align: left; background: rgba(10,15,44,0.1); padding: 2.5rem; border: 1px solid rgba(10,15,44,0.1); border-radius: 4px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label for="full_name" style="display: block; margin-bottom: 0.5rem; color: var(--navy); font-weight: 600;">Full Name *</label>
            <input type="text" id="full_name" name="full_name" required placeholder="Your name" style="width: 100%; padding: 0.8rem; background: var(--white); border: 1px solid rgba(10,15,44,0.2); color: var(--navy); border-radius: 2px; font-family: var(--font-body);">
          </div>
          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label for="email" style="display: block; margin-bottom: 0.5rem; color: var(--navy); font-weight: 600;">Email Address *</label>
            <input type="email" id="email" name="email" required placeholder="your@email.com" style="width: 100%; padding: 0.8rem; background: var(--white); border: 1px solid rgba(10,15,44,0.2); color: var(--navy); border-radius: 2px; font-family: var(--font-body);">
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label for="phone_number" style="display: block; margin-bottom: 0.5rem; color: var(--navy); font-weight: 600;">Phone Number *</label>
            <input type="tel" id="phone_number" name="phone_number" required placeholder="09077780156" style="width: 100%; padding: 0.8rem; background: var(--white); border: 1px solid rgba(10,15,44,0.2); color: var(--navy); border-radius: 2px; font-family: var(--font-body);">
          </div>
          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label for="requested_service" style="display: block; margin-bottom: 0.5rem; color: var(--navy); font-weight: 600;">Service Needed *</label>
            <select id="requested_service" name="requested_service" required style="width: 100%; padding: 0.8rem; background: var(--white); border: 1px solid rgba(10,15,44,0.2); color: var(--navy); border-radius: 2px; font-family: var(--font-body);">
              <option value="Web Design" selected>Web Design</option>
              <option value="Web Development">Web Development</option>
              <option value="SEO">SEO Services</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="Mobile App">Mobile App Development</option>
              <option value="Printing">Printing Services</option>
            </select>
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 2rem;">
          <label for="message" style="display: block; margin-bottom: 0.5rem; color: var(--navy); font-weight: 600;">Tell us about your project</label>
          <textarea id="message" name="message" rows="4" placeholder="Briefly describe what you need..." style="width: 100%; padding: 0.8rem; background: var(--white); border: 1px solid rgba(10,15,44,0.2); color: var(--navy); border-radius: 2px; font-family: var(--font-body); resize: vertical;"></textarea>
        </div>
        <button type="submit" class="btn-dark" style="width: 100%; justify-content: center; font-size: 1rem;">Get My Free Quote</button>
      </form>
'''

for file_path in files_to_update:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'class="lead-form"' in content:
            print(f'Skipping {file_path} - Form already exists.')
            continue
            
        new_content = content.replace('<div class="cta-actions">', form_html + '\n      <div class="cta-actions">')
        
        script_tag = '<script src="admin/js/form-handler.js"></script>\n</body>'
        new_content = new_content.replace('</body>', script_tag)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f'Successfully updated {file_path}')
    except Exception as e:
        print(f'Error processing {file_path}: {e}')
