import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Solen Case Study | Hephzibah Media",
  description: "How we built an AI Wellness Coach and comprehensive SaaS platform focusing on maximum impact with minimum architectural friction.",
};

export default function SolenCaseStudy() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <Link href="/case-studies" className="text-electric-blue text-sm uppercase tracking-wider mb-8 inline-block hover:text-white transition-colors">
          &larr; Back to Case Studies
        </Link>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">HealthTech</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">SaaS</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">AI Application</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          AI Wellness Coach Web App
        </h1>
        <p className="text-xl text-grey leading-relaxed">
          Solen is a full-featured AI wellness coach providing conversational, empathetic guidance 24/7. Engineered as a complete "business in a box" with user authentication, subscription management, a bespoke admin dashboard, and an integrated blog CMS.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Client</p>
            <p className="text-white font-medium">Solen</p>
          </div>
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Product</p>
            <p className="text-white font-medium">Solen Platform</p>
          </div>
          <div className="col-span-2">
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Deliverables</p>
            <p className="text-white font-medium">Full-Stack Web App, AI Wellness Coach, Custom CMS</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-xl mb-12">
          <h2 className="text-2xl font-display text-white mb-4">The Problem</h2>
          <p className="text-grey leading-relaxed mb-6">
            The wellness app market is saturated with generic mood trackers and static content. Users need dynamic responses tailored to their emotional state. Moreover, running a SaaS typically requires complex DevOps, containerisation, and high server costs just to get off the ground.
          </p>
          <ul className="space-y-3 text-grey">
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Generic, cookie-cutter advice instead of dynamic, contextual responses.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Complex onboarding deterring users seeking immediate help.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> High operational overhead stitching together multiple expensive SaaS tools.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> JavaScript-heavy stacks requiring complex DevOps and high server costs.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">Our Approach</h2>
          <p className="text-grey leading-relaxed mb-6">
            We designed Solen with a philosophy of maximum impact with minimum architectural friction. Rather than adopting a complex microservices architecture, we opted for a highly optimised monolithic approach to keep running costs incredibly low while delivering a highly interactive, React-powered frontend.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Zero-Config DB</h3>
              <p className="text-sm text-grey">SQLite3 auto-creates on first visit, making deployment as simple as FTP.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Edge Inference</h3>
              <p className="text-sm text-grey">Cloudflare AI integration for highly empathetic, edge-optimised AI coaching.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Unified SaaS</h3>
              <p className="text-sm text-grey">Marketing site, web app, blog, and admin tools all run from one codebase.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">What We Built</h2>
        <div className="space-y-12 mb-16">
          
          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🤖</span> Streaming AI Wellness Coach
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Integrated with Cloudflare AI using server-sent events to stream responses in real-time. It features contextual memory, tracking moods and profiles via API so the coach remembers past conversations and progress.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🏢</span> Comprehensive Admin Dashboard
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              A bespoke, secure control panel providing complete visibility into MRR/ARR, full CRUD capabilities for Stripe subscription management, and global configuration settings.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">📝</span> Integrated Blog CMS
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Built-in content management system featuring rich text editing, automated SEO (meta tags, Schema.org structure), and a live Google search result preview before publishing.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">💳</span> Seamless Monetization
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Stripe subscription integration with automated webhook listeners securely tying Stripe products and prices directly into the local SQLite database.
            </p>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-2xl font-display text-white mb-6">Results & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">60s</div>
              <div className="text-xs text-grey uppercase tracking-wider">Deployment Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">Zero</div>
              <div className="text-xs text-grey uppercase tracking-wider">DevOps Config</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">Edge</div>
              <div className="text-xs text-grey uppercase tracking-wider">AI Inference</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">100%</div>
              <div className="text-xs text-grey uppercase tracking-wider">Self-Contained</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">The Architecture</h2>
          <div className="bg-black/50 border border-white/10 p-6 rounded-lg font-mono text-sm text-electric-blue-lt overflow-x-auto whitespace-pre">
{`┌────────────────────────────────────────────────────┐
│                  Frontend App                      │
│        React 18 (Loaded via CDN for Zero-Build)    │
└──────────────────────┬─────────────────────────────┘
                       │
┌──────────────────────▼─────────────────────────────┐
│                 Backend Server                     │
│    PHP 8.1+ · Apache (.htaccess) · Secure Proxy    │
│    (Monolithic SaaS processing & API router)       │
└──────────────────────┬─────────┬───────────────────┘
                       │         │
┌──────────────────────▼─┐    ┌──▼───────────────────┐
│     SQLite3 DB         │    │ Cloudflare AI        │
│   (Zero Config DB)     │    │ (Streaming Engine)   │
└────────────────────────┘    └──────────────────────┘`}
          </div>
        </div>
      </section>
    </div>
  );
}
