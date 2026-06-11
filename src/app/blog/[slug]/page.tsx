import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

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

function MarkdownRenderer({ content }: { content: string }) {
    return (
        <div className="prose prose-invert prose-lg max-w-none">
            {content.split('\n').map((line, i) => {
                if (line.startsWith('# ')) return <h1 key={i} className="text-4xl font-bold mb-4">{line.slice(2)}</h1>;
                if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-bold mb-3">{line.slice(3)}</h2>;
                if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-bold mb-2">{line.slice(4)}</h3>;
                if (line.startsWith('- ')) return <li key={i} className="ml-6 mb-2">{line.slice(2)}</li>;
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="mb-4">{line}</p>;
            })}
        </div>
    );
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(fileContent);

    return (
        <div className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{frontmatter.title}</h1>
            <p className="text-gold mb-10">{frontmatter.date}</p>
            <MarkdownRenderer content={body} />
        </div>
    );
}
