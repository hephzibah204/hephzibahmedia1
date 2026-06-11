import fs from 'fs';
import path from 'path';
import Link from 'next/link';

function parseFrontmatter(fileContent: string) {
    const match = fileContent.match(/^---\n([\s\S]+?)\n---\n([\s\S]+)$/);
    if (!match) return { frontmatter: { title: 'Untitled' }, body: fileContent };
    const [, fm, body] = match;
    const frontmatter: Record<string, string> = {};
    fm.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key) frontmatter[key.trim()] = value.join(':').replace(/"/g, '').trim();
    });
    return { frontmatter, body };
}

export default function BlogIndex() {
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    const files = fs.readdirSync(blogDir);
    
    const posts = files.map(filename => {
        const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
        const { frontmatter } = parseFrontmatter(fileContent);
        return {
            slug: filename.replace('.md', ''),
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date || '',
            description: frontmatter.description || '',
            ...frontmatter
        };
    });

    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Blog</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                        <div className="glass p-6 rounded-2xl h-full border border-white/10 hover:border-gold/30 transition-all">
                            <h2 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{post.title}</h2>
                            <p className="text-sm opacity-70 mb-4">{post.date}</p>
                            <p className="opacity-80">{post.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
