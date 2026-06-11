import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ABTestGenerator from '@/components/tools/ABTestGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "A/B Test Idea Generator | Conversion Rate Optimization | Hephzibah Media",
  description: "Generate high-impact A/B testing ideas for your landing pages, emails, and ads. Optimization strategies tailored for the Nigerian digital market.",
};

export default function ABTestGeneratorPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Experimentation & Growth" 
          title={<>A/B Test <span className="text-electric-blue">Idea Generator</span></>}
          description="Stop guessing what works. Our generator provides data-backed experiment ideas that help you optimize for conversions and scale your revenue."
        />

        <div className="mt-20">
          <ABTestGenerator />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">The Growth Experimentation Framework</h3>
          <p className="text-grey leading-relaxed">
            Successful businesses don&apos;t just &quot;launch and leave.&quot; They treat every digital asset as a 
            hypothesis that needs testing. By systematically running A/B tests on your headlines, 
            creative, and offers, you can compound small wins into massive growth over time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Statistical Significance</h4>
              <p className="text-grey text-sm leading-relaxed">We focus on high-impact variables that are most likely to yield clear, measurable results in shorter timeframes.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Platform Nuances</h4>
              <p className="text-grey text-sm leading-relaxed">Our ideas account for how different platforms (like Meta vs. Google) respond to creative and copy variations.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">ROI Focused</h4>
              <p className="text-grey text-sm leading-relaxed">Every test is mapped to its potential impact on your bottom line, prioritizing revenue-driving experiments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
