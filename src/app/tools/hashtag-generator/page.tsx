import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import HashtagGenerator from '@/components/tools/HashtagGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Hashtag Generator | Social Media Reach | Hephzibah Media",
  description: "Boost your social media visibility with our free hashtag generator. Tailored for Nigerian businesses on Instagram, TikTok, LinkedIn, and Twitter/X.",
};

export default function HashtagGeneratorPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Social Media Marketing" 
          title={<>Free Hashtag <span className="text-electric-blue">Generator</span></>}
          description="Stop guessing which hashtags work. Generate optimized sets based on your topic, platform, and post intent to maximize your organic reach."
        />

        <div className="mt-20">
          <HashtagGenerator />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">The Science of Hashtags</h3>
          <p className="text-grey leading-relaxed">
            In 2026, hashtags aren&apos;t just for decoration—they are a metadata signal that helps 
            AI-driven algorithms categorize your content. Using the right mix of broad and 
            niche hashtags ensures your posts are shown to the people most likely to engage 
            with your brand in Nigeria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Algorithm Sync</h4>
              <p className="text-grey text-sm leading-relaxed">Our logic aligns with the latest platform-specific limits and categorization preferences for 2026.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Local Relevance</h4>
              <p className="text-grey text-sm leading-relaxed">Includes high-engagement Nigerian tags like #LagosEats or #TechNigeria based on your selected niche.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Intent Based</h4>
              <p className="text-grey text-sm leading-relaxed">Whether you&apos;re educating or selling, we add modifiers that signal your post&apos;s purpose to the platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
