import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import KeywordResearchTool from '@/components/tools/KeywordResearchTool';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free SEO Keyword Research Tool | Market Volume Analysis | Hephzibah Media",
  description: "Find the best search keywords for your Nigerian business. Analyze estimated search volume, competition density, and get personalized content ideas.",
};

export default function KeywordResearchPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Search Engine Optimization" 
          title={<>SEO Keyword <span className="text-electric-blue">Research Tool</span></>}
          description="Find high-value search terms that your target customers are using on Google. Discover keyword volume, competition, and content opportunities in Nigeria."
        />

        <div className="mt-20">
          <KeywordResearchTool />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">The Foundation of Organic Visibility</h3>
          <p className="text-grey leading-relaxed">
            Every Google search is an expression of user intent. By aligning your website content 
            with the exact keywords your potential customers are using, you build a steady, 
            highly-qualified stream of organic traffic that converts without recurring ad spend.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Search Volume</h4>
              <p className="text-grey text-sm leading-relaxed">Focus on terms that have sufficient search demand. We estimate local Nigerian search patterns to guide your content priority.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Competition Level</h4>
              <p className="text-grey text-sm leading-relaxed">Identify low-hanging fruit—high-volume terms with low competition that you can rank for quickly.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Content Strategy</h4>
              <p className="text-grey text-sm leading-relaxed">Every keyword suggestion comes with a recommended content format, helping you turn search data into actual web pages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
