import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hephzibahmedia.com.ng';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/portfolio',
    '/case-studies',
    '/faq',
    '/resources',
    '/tools',
    '/blog',
    '/service-areas',
    '/subscribe',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Blog routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    if (fs.existsSync(blogDir)) {
      const blogFiles = fs.readdirSync(blogDir);
      blogRoutes = blogFiles.map((filename) => ({
        url: `${siteUrl}/blog/${filename.replace('.md', '')}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error('Error reading blog directory for sitemap:', error);
  }

  // Dynamic Tool routes
  const tools = [
    'ab-test',
    'brand-colors',
    'budget',
    'content-calendar',
    'customer-avatar',
    'email-subject-tester',
    'hashtag-generator',
    'headline-generator',
    'keywords',
    'roi',
    'seo-audit'
  ].map((tool) => ({
    url: `${siteUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...routes, ...serviceRoutes, ...blogRoutes, ...tools];
}
