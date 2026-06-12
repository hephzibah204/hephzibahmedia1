import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Conductor AI Case Study | Hephzibah Media",
  description: "How we built a serverless, geolocational traffic intelligence and fare forecasting platform for Lagos commuters.",
};

export default function ConductorAICaseStudy() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <Link href="/case-studies" className="text-electric-blue text-sm uppercase tracking-wider mb-8 inline-block hover:text-white transition-colors">
          &larr; Back to Case Studies
        </Link>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">SaaS</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">Geolocational AI</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">Mobile</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          Modernising Commuter Intelligence & Real-Time Traffic Forecasting
        </h1>
        <p className="text-xl text-grey leading-relaxed">
          Conductor AI is a serverless, geolocational traffic intelligence and fare forecasting platform built specifically for the Nigerian reality—complete with a street-smart, Pidgin-speaking financial and route advisor.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Client</p>
            <p className="text-white font-medium">Commuters of Lagos</p>
          </div>
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Product</p>
            <p className="text-white font-medium">Conductor AI</p>
          </div>
          <div className="col-span-2">
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Deliverables</p>
            <p className="text-white font-medium">Web App, Mobile PWA, REST API, AI Chat Oracle</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-xl mb-12">
          <h2 className="text-2xl font-display text-white mb-4">The Problem</h2>
          <p className="text-grey leading-relaxed mb-6">
            Lagos manages millions of daily commuter trips across a highly fragmented public transit network. Commuters struggle with unpredictable pricing, volatile gridlocks, and sudden traffic restrictions. Drivers are caught in unexpected roadblocks, and passengers are left guessing fares.
          </p>
          <ul className="space-y-3 text-grey">
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Volatile Danfo pricing fluctuating wildly based on weather and congestion.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> No real-time mapping warnings for local transport bans (Okada/Keke).</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Inaccurate open-source mapping networks missing informal bus stops and aliases.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Rigid mapping infrastructures crashing upon API rate limits.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">Our Approach</h2>
          <p className="text-grey leading-relaxed mb-6">
            We mapped out the daily routines of Lagos commuters, Danfo cashiers, and BRT passengers. From understanding transfer nodes (Oshodi, CMS, Yaba) to how government task forces operate, we designed a platform based on three guiding principles:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Failsafe Operations</h3>
              <p className="text-sm text-grey">Multi-provider failover ensures route calculation and map display never hang.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-grey">Actively steers users away from restricted transit modes based on coordinates.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Street-Smart AI</h3>
              <p className="text-sm text-grey">Mirrors the wit, vocabulary, and practical advice of a Lagos conductor.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">What We Built</h2>
        <div className="space-y-12 mb-16">
          
          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">💰</span> Fare & Crowdsourced Indexing
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Commuters submit real-time reports of active fares, which are aggregated and recalculated dynamically. The system features upvotes, verified reporters, and a gamified leaderboard with badges like "Road Warrior".
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🗺️</span> Native Midnight Google Maps
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Built directly on the Google Maps JS SDK featuring a custom dark-theme JSON stylesheet, live traffic layers, pulsing SVG markers, and dual-layered glowing neon route lines.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🤖</span> Pidgin English AI Oracle
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Powered by Cloudflare Workers AI and grounded directly on the live D1 database. Evaluates prompts in Nigerian Pidgin and provides street-smart warnings using real-time municipal safety alerts.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🚨</span> Okada & Keke Ban Advisory
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              The geocoding engine actively checks routes against a database of banned LGAs and expressways, displaying prominent flashing warning banners if a restricted zone is crossed.
            </p>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-2xl font-display text-white mb-6">Results & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">100%</div>
              <div className="text-xs text-grey uppercase tracking-wider">Test Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">94%</div>
              <div className="text-xs text-grey uppercase tracking-wider">Routing Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">2.5s</div>
              <div className="text-xs text-grey uppercase tracking-wider">Strict Failover</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">+30%</div>
              <div className="text-xs text-grey uppercase tracking-wider">Chatbot Retention</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">The Architecture</h2>
          <div className="bg-black/50 border border-white/10 p-6 rounded-lg font-mono text-sm text-electric-blue-lt overflow-x-auto whitespace-pre">
{`┌────────────────────────────────────────────────────┐
│               React Frontend (Vite)                │
│         Tailwind CSS · Outfit UI · Capacitor       │
└──────────────────────┬─────────────────────────────┘
                       │
┌──────────────────────▼─────────────────────────────┐
│           Cloudflare Pages (Global CDN)            │
│  ┌─────────────────────────────────────────────┐   │
│  │      Cloudflare Workers Backend (API)       │   │
│  │     NodeJS Worker · JWT Auth · callAI()     │   │
│  └──────────┬──────────────┬───────────────────┘   │
│             │              │                       │
│    ┌────────▼──────┐  ┌───▼────────────────────┐   │
│    │ Cloudflare D1 │  │  Cloudflare Workers AI │   │
│    │  (SQLite DB)  │  │   (AI Chatbot Oracle)  │   │
│    └───────────────┘  └────────────────────────┘   │
└────────────────────────────────────────────────────┘`}
          </div>
        </div>
      </section>
    </div>
  );
}
