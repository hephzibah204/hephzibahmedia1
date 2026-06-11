import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PieChart, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Growth Tools | Free Marketing Calculators | Hephzibah Media",
  description: "Free digital marketing tools for Nigerian businesses. Calculate ROI, optimize ad spend, and plan your growth with our data-driven calculators.",
};

const tools = [
  {
    title: "Marketing ROI Calculator",
    description: "Calculate your potential return on investment for SEO, PPC, and Social Media campaigns based on Nigerian market benchmarks.",
    href: "/tools/roi",
    icon: TrendingUp,
    label: "Growth Tool"
  },
  {
    title: "Ad Budget Calculator",
    description: "Optimize your ad spend across Facebook, Instagram, Google, and TikTok. Get goal-based platform allocations for the local market.",
    href: "/tools/budget",
    icon: PieChart,
    label: "Strategy Tool"
  }
];

export default function ToolsPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          label="Free Resources" 
          title={<>Data-Driven <span className="text-electric-blue">Growth Tools</span></>}
          description="Take the guesswork out of your marketing. Use our proprietary calculators to plan your trajectory and optimize your digital investment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {tools.map((tool) => (
            <Link 
              key={tool.title} 
              href={tool.href}
              className="group glass p-10 md:p-12 hover:border-electric-blue/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl group-hover:bg-electric-blue/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="text-electric-blue mb-8">
                  <tool.icon size={40} strokeWidth={1.5} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-grey font-bold mb-4">{tool.label}</div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-electric-blue transition-colors">{tool.title}</h3>
                <p className="text-grey text-lg leading-relaxed mb-8 max-w-md">
                  {tool.description}
                </p>
                <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs">
                  Launch Tool <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 p-12 bg-midnight-mid border border-white/5 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Growth Strategy?</h3>
          <p className="text-grey mb-8 max-w-2xl mx-auto italic">
            &quot;Our tools give you the numbers, but our team gives you the execution. Let&apos;s turn these projections into actual revenue.&quot;
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-electric-blue text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-electric-blue-lt transition-all"
          >
            Book Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
