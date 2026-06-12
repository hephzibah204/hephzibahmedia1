import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "ReportSheet.com.ng Case Study | Hephzibah Media",
  description: "How we built a lightweight, offline-capable school report-card system designed for the realities of the Nigerian education sector.",
};

export default function ReportSheetCaseStudy() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <Link href="/case-studies" className="text-electric-blue text-sm uppercase tracking-wider mb-8 inline-block hover:text-white transition-colors">
          &larr; Back to Case Studies
        </Link>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">EdTech</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">SaaS</span>
          <span className="bg-electric-blue/10 text-electric-blue border border-electric-blue/20 text-xs px-3 py-1 rounded-full uppercase tracking-widest">Web Application</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
          Modernising School Result Management & Assessment in Nigeria
        </h1>
        <p className="text-xl text-grey leading-relaxed">
          ReportSheet.com.ng is a lightweight, cPanel-friendly, and highly responsive school report-card system designed for the realities of the local education sector, ensuring a seamless grading experience even in low-bandwidth environments.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Client</p>
            <p className="text-white font-medium">Schools & Teachers</p>
          </div>
          <div>
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Product</p>
            <p className="text-white font-medium">ReportSheet.com.ng</p>
          </div>
          <div className="col-span-2">
            <p className="text-grey text-xs uppercase tracking-wider mb-1">Deliverables</p>
            <p className="text-white font-medium">Web Platform, PHP REST API, Multi-Role Portals</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-xl mb-12">
          <h2 className="text-2xl font-display text-white mb-4">The Problem</h2>
          <p className="text-grey leading-relaxed mb-6">
            Managing student records and grading continuous assessments is historically tedious. Administrators are forced to choose between complex, expensive software or fragile spreadsheets. With varying internet reliability, cloud-only platforms frequently lead to data loss during critical grading periods.
          </p>
          <ul className="space-y-3 text-grey">
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Cumbersome manual compilation leading to human errors.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Spotty internet causing data loss on heavy Single Page Applications.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> High hosting costs forcing schools onto shared cPanel environments.</li>
            <li className="flex items-start"><span className="text-electric-blue mr-3">✗</span> Lack of granular access control exposing sensitive admin settings.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">Our Approach</h2>
          <p className="text-grey leading-relaxed mb-6">
            Before writing code, we studied the frantic "result season" workflows of form teachers and administrators. We focused on three guiding principles:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Deployment Flexibility</h3>
              <p className="text-sm text-grey">Easily deployable on local networks (Docker/SQLite) or cheap shared hosting.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Resilient Data Entry</h3>
              <p className="text-sm text-grey">Browser caching ensures teachers never lose grades if the network drops.</p>
            </div>
            <div className="bg-midnight p-6 rounded-lg border border-white/5">
              <h3 className="text-white font-medium mb-2">Role-Specific Workflows</h3>
              <p className="text-sm text-grey">Isolated portals tailored specifically to what each role needs to see.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">What We Built</h2>
        <div className="space-y-12 mb-16">
          
          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🏫</span> Multi-Role Portal Architecture
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              The frontend is split into distinct portals: an Admin Panel for centralized management, a Teacher Portal for seamless score input, and a read-only Student/Parent Portal for checking and printing finalized report cards.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">📝</span> Integrated Exam Maker
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              We built an exammaker.html module allowing teachers to craft, format, and store standardized exams and continuous assessments natively within the platform.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">⚡</span> Resilient, Cache-First Frontend
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Built on static HTML/JS/CSS, the UI intelligently caches data in browser storage to maintain responsiveness. A decoupled config allows it to seamlessly point to local or cloud APIs depending on the deployment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-electric-blue-lt mb-3 flex items-center">
              <span className="text-3xl mr-3">🛡️</span> Enterprise-Grade Security
            </h3>
            <p className="text-grey leading-relaxed mb-4">
              Features comprehensive audit logging for every critical action, ensuring complete traceability for grading disputes, plus 2FA and role-based subscription models to secure administrative accounts.
            </p>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-xl mb-16">
          <h2 className="text-2xl font-display text-white mb-6">Results & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">Zero</div>
              <div className="text-xs text-grey uppercase tracking-wider">Data Loss</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">100%</div>
              <div className="text-xs text-grey uppercase tracking-wider">cPanel Compatible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">3</div>
              <div className="text-xs text-grey uppercase tracking-wider">Isolated Portals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-electric-blue font-bold mb-1">1st</div>
              <div className="text-xs text-grey uppercase tracking-wider">Offline-First Engine</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display text-white mb-8 border-l-4 border-electric-blue pl-4">The Architecture</h2>
          <div className="bg-black/50 border border-white/10 p-6 rounded-lg font-mono text-sm text-electric-blue-lt overflow-x-auto whitespace-pre">
{`┌────────────────────────────────────────────────────┐
│              Static Frontend (HTML/JS/CSS)         │
│         Browser Caching · Role-based Portals       │
└──────────────────────┬─────────────────────────────┘
                       │
┌──────────────────────▼─────────────────────────────┐
│                Shared Hosting / cPanel             │
│  ┌─────────────────────────────────────────────┐   │
│  │                PHP REST API                 │   │
│  │       JWT Auth · Swagger API Docs           │   │
│  └──────────┬──────────────┬───────────────────┘   │
│             │              │                       │
│    ┌────────▼──────┐  ┌────▼───────────────────┐   │
│    │     SQLite    │  │     MySQL/MariaDB      │   │
│    │ (Local/Docker)│  │      (Production)      │   │
│    └───────────────┘  └────────────────────────┘   │
└────────────────────────────────────────────────────┘`}
          </div>
        </div>
      </section>
    </div>
  );
}
