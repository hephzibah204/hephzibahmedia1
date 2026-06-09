const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('<div class="case-image">')) {
    let counter = 1;
    content = content.replace(/<div class="case-image">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/g, () => {
      const imgNum = (counter % 2 === 1) ? 1 : 2;
      counter++;
      return `<div class="case-image"><img src="img-case-study-${imgNum}.svg" alt="Case Study Highlight" style="width:100%;height:100%;object-fit:cover;"></div>`;
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
  
  if (content.includes('<div class="blog-thumb">') && content.includes('<svg')) {
    content = content.replace(/<div class="blog-thumb">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/g, () => {
      return `<div class="blog-thumb"><img src="img-blog-thumb.svg" alt="Blog Post" style="width:100%;height:100%;object-fit:cover;"></div>`;
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated blog thumb in ${file}`);
  }
});
