import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "SchoolFees.NG Case Study | Hephzibah Media",
  description: "How we built a modern, AI-powered school financial management platform for Nigerian educational institutions.",
};

export default function SchoolFeesCaseStudy() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <Link href="/case-studies" className="text-electric-blue text-sm uppercase tracking-wider mb-8 inline-block hover:text-white transition-colors">
          &larr; Back to Case Studies
        </Link>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">EdTech</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">FinTech</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">SaaS</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          Modernising School Finance Management Across Nigeria
        </h1>
        <p className="text-xl text-grey leading-relaxed">
          SchoolFees.NG is a fully integrated, cloud-powered school financial management platform built specifically for Nigerian schools—putting an AI financial consultant right in the administrator's pocket.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Client</p>
            <p className="text-white font-medium">Schools Across Nigeria</p>
          </div>
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Product</p>
            <p className="text-white font-medium">SchoolFees.NG</p>
          </div>
          <div className="col-span-2">
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Deliverables</p>
            <p className="text-white font-medium">Web App, Android App, REST API, AI Coach</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-xl mb-12">
          <h2 className="text-2xl font-display text-white mb-4">The Problem</h2>
          <p className="text-grey leading-relaxed mb-6">
            Nigeria's private school sector manages billions of naira annually—yet most institutions rely on paper ledgers, spreadsheets, and disconnected WhatsApp messages. Bursars are overwhelmed. Parents are frustrated. Owners lack real-time visibility.
          </p>
          <ul className="space-y-3 text-grey">
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Manual fee tracking led to disputes and undetected fraud.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Debt recovery was reactive, relying on manual reminders.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Reporting was slow, waiting for end-of-term reconciliations.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Mobile access was non-existent, tying bursars to their desks.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">Our Approach</h2>
          <p className="text-grey leading-relaxed mb-6">
            We spent time understanding the end-to-end workflow of a Nigerian school bursar before writing a single line of code. We designed the platform with three guiding principles:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Simplicity First</h3>
              <p className="text-sm text-grey">Every daily task must take fewer than 3 clicks.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Mobile-Native</h3>
              <p className="text-sm text-grey">Seamless experience on smartphones, not just desktop.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Intelligence Built-In</h3>
              <p className="text-sm text-grey">Automation and AI to reduce workload, not add to it.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">What We Built</h2>
        <div className="space-y-12 mb-16">
          
          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">💰</span> Complete Fee & Payment Management
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              The financial engine covers every stage: Fee Structure Builder, Bulk Invoice Generation, One-click Payment Recording, and Automated Clearance Checks. Flexible installment plans track partial payments automatically.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🤖</span> AI Financial Coach
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Powered by Cloudflare Workers AI, owners can ask natural language questions like "What is my current financial health?", generate debt recovery SMS drafts, and analyse payroll ratios instantly.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">📱</span> Native Android Mobile App
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Built using Capacitor to deliver full offline capability via IndexedDB. Bursars can record payments without internet, and the app automatically syncs when reconnected. Features push notifications and haptic feedback.
            </p>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-2xl font-display text-white mb-6">Results & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">101</div>
              <div className="text-xs text-grey uppercase tracking-wider">Production Routes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">60+</div>
              <div className="text-xs text-grey uppercase tracking-wider">API Endpoints</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">&lt;10m</div>
              <div className="text-xs text-grey uppercase tracking-wider">Build & Deploy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">&lt;5s</div>
              <div className="text-xs text-grey uppercase tracking-wider">AI Response Time</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">The Architecture</h2>
          <div className="bg-black/50 border border-white/10 p-6 rounded-lg font-mono text-sm text-electric-blue-lt overflow-x-auto whitespace-pre">
{`┌────────────────────────────────────────────────────┐
│               Next.js 16 (Static Export)           │
│         React 19 · TypeScript · Tailwind CSS 4     │
└──────────────────────┬─────────────────────────────┘
                       │
┌──────────────────────▼─────────────────────────────┐
│           Cloudflare Pages (Global CDN)            │
│  ┌─────────────────────────────────────────────┐   │
│  │     Cloudflare Pages Functions (API)        │   │
│  │     TypeScript · JWT Auth · Drizzle ORM     │   │
│  └──────────┬──────────────┬───────────────────┘   │
│             │              │                       │
│    ┌────────▼──────┐  ┌───▼────────────────────┐   │
│    │ Cloudflare D1 │  │  Cloudflare Workers AI │   │
│    │  (SQLite DB)  │  │   (AI Financial Coach) │   │
│    └───────────────┘  └────────────────────────┘   │
└────────────────────────────────────────────────────┘`}
          </div>
        </div>
      </section>
    </div>
  );
}
