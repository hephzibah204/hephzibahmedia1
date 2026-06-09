# SEO Strategy & Audit Framework for Hephzibah Media

*Based on the 'seo-audit' skill and Project Doc 02.*

## 1. Initial Assessment
**Site Type:** Agency & IT Training.
**Business Goal:** Generate qualified leads for agency services (₦500k-₦2M ACV) and course enrollments (₦150k-₦300k).
**Current State:** Basic SEO foundation, undergoing transformation. Address consistency is currently a known critical issue affecting Local SEO.

## 2. Technical SEO Priorities
### Crawlability & Indexation
- **Sitemap & Robots.txt:** Ensure `sitemap.xml` and `robots.txt` are optimized. Since the project doesn't use a CMS (pure HTML/CSS/PHP), the sitemap must be dynamically generated or manually updated when new blog posts/courses are added.
- **Local SEO & NAP Consistency:** The Executive Summary noted that the "old address still appears in search results." This is a **Critical Priority**. NAP (Name, Address, Phone) must be consistent across the entire website, Google Business Profile, local directories (VConnect, BusinessList.com.ng), and social media.

### Site Architecture & Speed
- **Flat Architecture:** Ensure all 12 training course pages and primary service pages are no more than 2-3 clicks from the homepage.
- **Core Web Vitals:** The site is custom HTML/CSS, which typically performs very well. Ensure images (especially on the 9-section high-converting templates) are optimized (WebP, lazy loaded).

## 3. On-Page SEO Optimization
### The "High-Converting Service Page" SEO
Each service page (e.g., Web Design, SEO, Training) must integrate SEO elements naturally:
- **Title Tags:** Format as `[Primary Service] in [Location/Nigeria] | Hephzibah Media` (e.g., `High-Converting Web Design in Lagos | Hephzibah Media`).
- **Headings (H1/H2/H3):** 
  - H1: Benefit-driven + Keyword (e.g., "Web Design Services That Generate Leads in Nigeria").
  - H2: Service specifics, Problem/Solution, Case Studies.
- **Content Depth:** Target is 1,500+ words per service page. This easily satisfies Google's depth requirements. Ensure long-tail keywords (e.g., "how to get more leads from my website") are answered in the FAQ section.

### Local & Service-Specific Intent
- **Intent Mapping:** For "digital marketing agency in Nigeria", the intent is transactional/commercial. For "how to design a sales funnel", the intent is informational. Match the page type to the intent (Service page vs. Blog post).

## 4. Off-Page & Authority Building
- **Training as a Backlink Engine:** The 12 training courses are highly linkable assets. Local universities, tech hubs, and career blogs can link to the syllabus.
- **Case Studies:** Publish detailed data-driven case studies. These attract natural backlinks from industry blogs.

## 5. Schema Markup Recommendations
Since this is a custom PHP/HTML site, inject JSON-LD directly into the `<head>` or before `</body>`:
- **LocalBusiness Schema:** For the homepage and contact page. Must include the *new* updated address.
- **Service Schema:** For each agency service page.
- **Course Schema:** Critical for the 12 training courses. Allows them to appear in Google's rich course carousels. Include price, duration, and curriculum.
- **FAQ Schema:** On service pages to dominate "People Also Ask" snippets.

## 6. Action Plan (90-Day SEO)
1. **Week 1-2:** Fix NAP consistency everywhere. Deploy LocalBusiness schema. Finalize Keyword Research Framework.
2. **Week 3-6:** Build the 1,500+ word service pages with integrated Service and FAQ schema.
3. **Week 7-10:** Launch the training hub with Course schema.
4. **Week 11-12:** Run a full Screaming Frog (or similar) crawl to ensure no broken links, missing canonicals, or slow-loading assets before final launch.