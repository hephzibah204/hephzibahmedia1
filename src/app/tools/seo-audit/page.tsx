import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import SEOAuditTool from '@/components/tools/SEOAuditTool';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free SEO Audit Tool | Website Health Check | Hephzibah Media",
  description: "Analyze your website's SEO performance in 60 seconds. Our free tool checks for critical ranking factors and provides actionable recommendations for Nigerian businesses.",
};

export default function SEOAuditPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Search Engine Optimization" 
          title={<>Free SEO <span className="text-electric-blue">Audit Tool</span></>}
          description="Identify technical issues holding your website back from ranking on Google. Get instant feedback on mobile-friendliness, speed, and metadata."
        />

        <div className="mt-20">
          <SEOAuditTool />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">Why SEO Audit Matters</h3>
          <p className="text-grey leading-relaxed">
            Google&apos;s algorithm uses over 200 signals to rank websites. Even a small technical error can prevent 
            your business from being discovered by potential customers in Lagos, Abuja, or across Nigeria. 
            Our audit tool simplifies these complex signals into an actionable checklist.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Core Web Vitals</h4>
              <p className="text-grey text-sm leading-relaxed">We check how fast your site loads and how stable it is during interaction—critical factors for both SEO and user experience.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">On-Page SEO</h4>
              <p className="text-grey text-sm leading-relaxed">From H1 tags to meta descriptions, we ensure your page tells search engines exactly what it&apos;s about and why it&apos;s relevant.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Mobile Ready</h4>
              <p className="text-grey text-sm leading-relaxed">With over 80% of Nigerian web traffic coming from mobile devices, we verify your site delivers a perfect experience on any screen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
