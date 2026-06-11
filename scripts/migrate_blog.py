import os
import re
import html

def parse_html_to_md(html_content):
    # Extract metadata
    title_match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    title = title_match.group(1) if title_match else "Untitled"
    
    desc_match = re.search(r'<meta name="description" content="(.*?)">', html_content, re.IGNORECASE)
    description = desc_match.group(1) if desc_match else ""
    
    date_match = re.search(r'<meta property="article:published_time" content="(.*?)">', html_content, re.IGNORECASE)
    date = date_match.group(1) if date_match else "2025-01-01"
    
    # Extract body content (simplistic approach: everything after the first <body> tag, before </body>)
    body_match = re.search(r'<body.*?>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
    body = body_match.group(1) if body_match else ""
    
    # Simple HTML to MD (just strip tags and clean up, not full conversion but acceptable for a migration)
    # 1. Remove script/style
    body = re.sub(r'<(script|style).*?>.*?</\1>', '', body, flags=re.DOTALL | re.IGNORECASE)
    # 2. Simple tag conversion
    body = re.sub(r'<h1>(.*?)</h1>', r'# \1\n', body, flags=re.IGNORECASE)
    body = re.sub(r'<h2>(.*?)</h2>', r'## \1\n', body, flags=re.IGNORECASE)
    body = re.sub(r'<h3>(.*?)</h3>', r'### \1\n', body, flags=re.IGNORECASE)
    body = re.sub(r'<p>(.*?)</p>', r'\n\1\n', body, flags=re.IGNORECASE)
    body = re.sub(r'<li>(.*?)</li>', r'- \1\n', body, flags=re.IGNORECASE)
    body = re.sub(r'<a href="(.*?)">(.*?)</a>', r'[\2](\1)', body, flags=re.IGNORECASE)
    # 3. Strip remaining tags
    body = re.sub(r'<.*?>', '', body)
    body = html.unescape(body)
    
    return title, description, date, body.strip()

def migrate():
    legacy_dir = 'legacy'
    content_dir = 'src/content/blog'
    
    for filename in os.listdir(legacy_dir):
        if filename.startswith('blog-') and filename.endswith('.html'):
            try:
                with open(os.path.join(legacy_dir, filename), 'r', encoding='utf-8') as f:
                    html_content = f.read()
            except UnicodeDecodeError:
                with open(os.path.join(legacy_dir, filename), 'r', encoding='latin-1') as f:
                    html_content = f.read()
                
            title, description, date, body = parse_html_to_md(html_content)
            
            # Create slug
            slug = filename.replace('blog-', '').replace('.html', '')
            
            md_content = f"""---
title: "{title}"
date: "{date}"
description: "{description}"
---

{body}
"""
            with open(os.path.join(content_dir, f"{slug}.md"), 'w', encoding='utf-8') as f:
                f.write(md_content)
            print(f"Migrated {filename} to {slug}.md")

if __name__ == "__main__":
    migrate()
