import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "JobberRecruit Case Study | Hephzibah Media",
  description: "How we built a comprehensive talent acquisition and career development platform blending recruitment, LMS, and AI tools.",
};

export default function JobberRecruitCaseStudy() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <Link href="/case-studies" className="text-electric-blue text-sm uppercase tracking-wider mb-8 inline-block hover:text-white transition-colors">
          &larr; Back to Case Studies
        </Link>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">HRTech</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">EdTech</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">SaaS</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          Revolutionizing Talent Acquisition & Career Development
        </h1>
        <p className="text-xl text-grey leading-relaxed">
          JobberRecruit is a fully integrated talent acquisition and career development platform that bridges the gap between hiring managers and top talent while offering an ecosystem of e-learning, AI-driven resume building, mock interviews, and career coaching all in one unified SaaS platform.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Client</p>
            <p className="text-white font-medium">JobberRecruit.com</p>
          </div>
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Product</p>
            <p className="text-white font-medium">JobberRecruit Platform</p>
          </div>
          <div className="col-span-2">
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Deliverables</p>
            <p className="text-white font-medium">Web App, REST API, Integrated LMS, AI Career Tools</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-xl mb-12">
          <h2 className="text-2xl font-display text-white mb-4">The Problem</h2>
          <p className="text-grey leading-relaxed mb-6">
            The modern job market is highly fragmented. Employers waste hours filtering unqualified applicants across disparate tools, while candidates lack access to upskilling resources, professional CV reviews, and interview prep.
          </p>
          <ul className="space-y-3 text-grey">
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Fragmented tools for posting, messaging, and applicant tracking.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Unqualified talent pools applying blindly, bloating pipelines.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Candidates lacking affordable CV reviews, mock interviews, and courses.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Rigid payment structures and weak SEO/security in regional job boards.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">Our Approach</h2>
          <p className="text-grey leading-relaxed mb-6">
            We designed JobberRecruit with a "Candidate-First, Employer-Optimized" philosophy, building the platform around three core principles:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Holistic Ecosystem</h3>
              <p className="text-sm text-grey">Recruitment shouldn't end at the post; it includes training and upskilling.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Flexible Monetization</h3>
              <p className="text-sm text-grey">Freedom between monthly subscriptions or pay-as-you-go bundles.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">AI-Powered Assistance</h3>
              <p className="text-sm text-grey">Automate the heavy lifting of resume building and CV analysis.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">What We Built</h2>
        <div className="space-y-12 mb-16">
          
          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🏢</span> Comprehensive Employer Dashboard
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Employers manage their hiring pipeline with flexible job posting, candidate unlocking, and an integrated real-time messaging system. Supported by a dual-monetization engine with digital wallets, standalone bundles, and auto-renewing subscriptions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🎓</span> Integrated LMS & EdTech
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Job seekers enroll in professional courses, complete modules, automatically generate certificates, and register for live career-focused webinars directly inside the platform.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🤖</span> AI-Powered Career Tools
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Candidates upload CVs for automated AI analysis, grading, and optimization. They can also practice through an interactive mock interview module and generate professional AI profile headshots.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🔐</span> Bank-Grade Security & SEO
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Protected by CodeIgniter Shield (JWT/HttpOnly), global CSRF/XSS sanitization, and cryptographic webhook verification. Engineered for SEO dominance with semantic routing, JSON-LD Schema markup, and automated dynamic Meta Tags.
            </p>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-2xl font-display text-white mb-6">Results & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">Dual</div>
              <div className="text-xs text-grey uppercase tracking-wider">Monetization Engine</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">4-in-1</div>
              <div className="text-xs text-grey uppercase tracking-wider">Unified Platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">SEO</div>
              <div className="text-xs text-grey uppercase tracking-wider">Dominance Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">100%</div>
              <div className="text-xs text-grey uppercase tracking-wider">Secure Checkouts</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">The Architecture</h2>
          <div className="bg-black/50 border border-white/10 p-6 rounded-lg font-mono text-sm text-electric-blue-lt overflow-x-auto whitespace-pre">
{`┌────────────────────────────────────────────────────┐
│              CodeIgniter 4 (PHP 8.2)               │
│        Server-Side Rendering (SSR) for SEO         │
└──────────────────────┬─────────────────────────────┘
                       │
┌──────────────────────▼─────────────────────────────┐
│                 Frontend Engine                    │
│    HTML5 · Vanilla JS · Tailwind CSS · AJAX        │
│    (Delivering near-SPA real-time experience)      │
└──────────────────────┬─────────────────────────────┘
                       │
┌────────────┬─────────┴────────┬────────────────────┐
│            │                  │                    │
│ ┌──────────▼───────┐  ┌───────▼──────────┐ ┌───────▼────────┐
│ │  SQLite/MySQL    │  │ Paystack Webhook │ │ AI APIs        │
│ │ (Flexible ORM)   │  │ (HMAC-SHA256)    │ │ (CV/Mock Gen)  │
│ └──────────────────┘  └──────────────────┘ └────────────────┘`}
          </div>
        </div>
      </section>
    </div>
  );
}
