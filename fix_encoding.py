import os
import re

files_to_fix = [f for f in os.listdir('.') if f.endswith('.html')]

for file in files_to_fix:
    try:
        # Try reading as UTF-8 first
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        # Fallback to latin-1 or Windows-1252 to rescue it
        with open(file, 'r', encoding='cp1252') as f:
            content = f.read()
            
    original = content
    
    # 1. Replace literal ? followed by a number with the Naira symbol ₦
    content = re.sub(r'\?(?=\d)', '₦', content)
    
    # 2. Fix the specific 3?1 artifact that got caught
    content = content.replace('3₦1', '3-in-1')
    
    # 3. Replace the unicode replacement character  with an em-dash —
    # The replacement character is U+FFFD. 
    content = content.replace('', '—')
    
    # 4. Handle any remaining strange spacing or artifacts if needed
    
    if content != original:
        # Always write back in pure UTF-8
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed encoding artifacts in {file}')
