import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: "Case Studies | Success Stories | Hephzibah Media",
  description: "See how we helped Nigerian businesses grow with digital marketing, web design, and SEO. Real results, real numbers.",
};

const studies = [
  { 
    client: "SchoolFees.NG", 
    title: "Modernising School Finance", 
    cat: "EdTech & FinTech", 
    desc: "A fully integrated, cloud-powered school financial management platform built specifically for Nigerian schools—with an AI financial consultant built-in.", 
    stats: [{ val: "101", label: "Routes" }, { val: "<10m", label: "Build Time" }, { val: "<5s", label: "AI Latency" }],
    slug: "schoolfees-ng"
  },
  { 
    client: "Conductor AI", 
    title: "Real-Time Traffic Forecasting", 
    cat: "SaaS & Geolocational AI", 
    desc: "A serverless, geolocational traffic intelligence platform built for Lagos commuters—complete with a street-smart, Pidgin-speaking AI advisor.", 
    stats: [{ val: "100%", label: "Test Success" }, { val: "94%", label: "Routing Accuracy" }, { val: "+30%", label: "Chatbot Retention" }],
    slug: "conductor-ai"
  },
  { 
    client: "JobberRecruit.com", 
    title: "Revolutionizing Talent Acquisition", 
    cat: "HRTech & EdTech SaaS", 
    desc: "A comprehensive talent acquisition platform blending recruitment, LMS courses, and AI-driven career tools for seamless hiring.", 
    stats: [{ val: "4-in-1", label: "Unified Platform" }, { val: "Dual", label: "Monetization" }, { val: "SEO", label: "Dominance" }],
    slug: "jobberrecruit"
  },
  { 
    client: "Solen", 
    title: "AI Wellness Coach Web App", 
    cat: "HealthTech & SaaS", 
    desc: "A full-featured AI wellness coach providing empathetic guidance 24/7. Engineered as a complete 'business in a box' with zero-config deployment.", 
    stats: [{ val: "60s", label: "Deployment Time" }, { val: "Zero", label: "DevOps Config" }, { val: "Edge", label: "AI Inference" }],
    slug: "solen"
  },
  { 
    client: "ReportSheet.com.ng", 
    title: "School Result Management", 
    cat: "EdTech & SaaS", 
    desc: "A lightweight, offline-capable school report-card system built on PHP. Designed for seamless grading in low-bandwidth, shared cPanel environments.", 
    stats: [{ val: "Zero", label: "Data Loss" }, { val: "100%", label: "cPanel Ready" }, { val: "3", label: "Isolated Portals" }],
    slug: "reportsheet"
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <p className="text-electric-blue uppercase tracking-widest text-sm mb-4">Results That Speak</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Case <em className="text-electric-blue-lt">Studies</em></h1>
        <p className="text-grey max-w-2xl mx-auto">Real results from real Nigerian businesses. See how we helped them grow their traffic, leads, and revenue.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Success Stories" title="Real Results" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {studies.map((study) => (
            <Link href={`/case-studies/${study.slug}`} key={study.client} className="glass p-8 rounded-lg block hover:border-electric-blue/50 transition-colors cursor-pointer group">
              <span className="bg-electric-blue text-white text-xs px-3 py-1 rounded-sm uppercase tracking-widest">{study.cat}</span>
              <p className="text-electric-blue mt-4 mb-2 uppercase text-xs font-semibold group-hover:text-white transition-colors">{study.client}</p>
              <h3 className="text-2xl font-display text-white mb-4 group-hover:text-electric-blue transition-colors">{study.title}</h3>
              <p className="text-grey text-sm mb-6">{study.desc}</p>
              <div className="grid grid-cols-3 gap-4 bg-midnight p-4 rounded-sm border border-transparent group-hover:border-electric-blue/20 transition-colors">
                {study.stats.map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-electric-blue-lt font-display text-xl font-bold">{s.val}</div>
                    <div className="text-grey text-[10px] uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
