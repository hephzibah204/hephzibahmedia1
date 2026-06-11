import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import HeadlineGenerator from '@/components/tools/HeadlineGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Headline & CTA Generator | Copywriting Tool | Hephzibah Media",
  description: "Create high-converting headlines and call-to-actions in seconds. Tailored for Nigerian audiences and specific business goals including sales, leads, and downloads.",
};

export default function HeadlineGeneratorPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Conversion Copywriting" 
          title={<>Headline & <span className="text-electric-blue">CTA Generator</span></>}
          description="Stop staring at a blank page. Generate battle-tested copy variations that grab attention and drive action from your ideal customers."
        />

        <div className="mt-20">
          <HeadlineGenerator />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">The Power of Persuasive Copy</h3>
          <p className="text-grey leading-relaxed">
            Your headline is the first (and sometimes only) chance to make an impression. 
            Statistics show that 8 out of 10 people will read your headline, but only 2 out of 10 
            will read the rest. Our generator uses proven psychological triggers to ensure 
            your message cuts through the noise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Emotional Hooks</h4>
              <p className="text-grey text-sm leading-relaxed">We utilize frameworks that tap into specific audience desires and pain points to create an immediate connection.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Action Focused</h4>
              <p className="text-grey text-sm leading-relaxed">Our CTA variations are designed to reduce friction and give users a clear, compelling reason to take the next step.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Localized Logic</h4>
              <p className="text-grey text-sm leading-relaxed">Templates are optimized for the Nigerian market, reflecting common business structures and consumer behaviors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
