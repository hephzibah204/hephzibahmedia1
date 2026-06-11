import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ContentCalendarGenerator from '@/components/tools/ContentCalendarGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Content Calendar Generator | Social Media Strategy | Hephzibah Media",
  description: "Plan your weekly social media content in seconds. Get a balanced mix of educational, promotional, and engagement posts tailored to your industry.",
};

export default function ContentCalendarPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Content Strategy Tool" 
          title={<>Smart Content <span className="text-electric-blue">Calendar Generator</span></>}
          description="Consistency is the key to organic growth. Use our generator to build a balanced weekly posting schedule that keeps your audience engaged and drives sales."
        />

        <div className="mt-20">
          <ContentCalendarGenerator />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">Mastering Social Consistency</h3>
          <p className="text-grey leading-relaxed">
            The biggest challenge in social media marketing isn&apos;t just &quot;what&quot; to post, but doing it 
            consistently. Our generator removes the creative block by providing a strategic framework 
            that ensures you&apos;re providing value (education), building trust (engagement), and 
            driving revenue (promotion) in the right proportions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">The 4:1:1 Rule</h4>
              <p className="text-grey text-sm leading-relaxed">We utilize the industry-standard ratio that prioritizes helpfulness over hard-selling to build long-term brand equity.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Platform Agnostic</h4>
              <p className="text-grey text-sm leading-relaxed">Whether you&apos;re on Instagram, LinkedIn, or TikTok, our content categories are designed to work across any social platform.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Industry Insights</h4>
              <p className="text-grey text-sm leading-relaxed">Our templates are tailored to common Nigerian business sectors, from E-commerce to Professional Services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
