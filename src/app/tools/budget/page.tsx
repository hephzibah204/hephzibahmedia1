import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import AdBudgetCalculator from '@/components/tools/AdBudgetCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ad Budget Calculator | Digital Advertising Spend | Hephzibah Media",
  description: "Optimize your digital advertising budget for Nigerian platforms. Calculate your ideal spend for Facebook, Instagram, Google, and TikTok based on your business goals.",
};

export default function AdBudgetPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Ad Strategy Tool" 
          title={<>Ad Budget <span className="text-electric-blue">Calculator</span></>}
          description="Plan your digital advertising spend with precision. Our calculator helps you allocate your budget across platforms that deliver the best ROI for your specific business goal."
        />

        <div className="mt-20">
          <AdBudgetCalculator />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">Mastering Your Ad Spend</h3>
          <p className="text-grey leading-relaxed">
            Successful digital advertising in Nigeria requires more than just a big budget—it requires strategic allocation. 
            Platform algorithms prioritize consistent spending and relevant content. Our breakdown helps you balance 
            high-intent platforms like Google with high-engagement platforms like Instagram and TikTok.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Platform Fees</h4>
              <p className="text-grey text-sm leading-relaxed">We account for a 20% margin covering local taxes (VAT), transaction fees, and management overhead to ensure your direct ad spend remains effective.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Goal-Based Allocation</h4>
              <p className="text-grey text-sm leading-relaxed">Lead generation requires different placement than brand awareness. Our logic shifts budget to where your conversion happens most frequently.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Daily Pacing</h4>
              <p className="text-grey text-sm leading-relaxed">Avoid exhausting your budget too early. Our calculator provides a daily pacing guide to help maintain algorithm stability throughout your campaign.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
