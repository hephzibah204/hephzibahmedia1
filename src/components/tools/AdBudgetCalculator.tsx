"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Wallet, Target, Layout, ArrowRight, MessageSquare } from 'lucide-react';

const platformAllocations = {
  awareness: { facebook: 40, instagram: 35, google: 15, tiktok: 10 },
  traffic: { facebook: 35, instagram: 30, google: 25, tiktok: 10 },
  leads: { facebook: 30, instagram: 25, google: 35, tiktok: 10 },
  sales: { facebook: 25, instagram: 25, google: 40, tiktok: 10 }
};

const platformIcons = {
  facebook: '📘',
  instagram: '📸',
  google: '🔍',
  tiktok: '🎵'
};

const recommendations = {
  ecommerce: 'For e-commerce, prioritize visual platforms like Instagram. Use retargeting ads to convert visitors.',
  service: 'Service businesses benefit from Google Search ads for high-intent leads. Use Facebook for brand awareness.',
  b2b: 'B2B works best with LinkedIn and Google Ads. Focus on lead generation campaigns.',
  education: 'Use video content on Instagram and Facebook. Target students and professionals seeking skills.',
  health: 'Health industry needs trust. Use Facebook for longer-form content and Google for local search.'
};

export default function AdBudgetCalculator() {
  const [totalBudget, setTotalBudget] = useState(100000);
  const [duration, setDuration] = useState(30);
  const [goal, setGoal] = useState('traffic');
  const [businessType, setBusinessType] = useState('ecommerce');

  const results = React.useMemo(() => {
    const dailyBudget = totalBudget / duration;
    const adSpend = dailyBudget * 0.8;
    const fees = dailyBudget * 0.2;
    const effectiveBudget = adSpend;
    const allocation = platformAllocations[goal as keyof typeof platformAllocations];
    const recommendation = recommendations[businessType as keyof typeof recommendations];

    return {
      dailyBudget,
      adSpend,
      fees,
      effectiveBudget,
      allocation,
      recommendation
    };
  }, [totalBudget, duration, goal, businessType]);

  const formatCurrency = (num: number) => {
    return '₦' + num.toLocaleString(undefined, { maximumFractionDigits: 0 });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Form Side */}
      <div className="glass p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-4 mb-4">
           <div className="w-10 h-10 bg-electric-blue/10 flex items-center justify-center text-electric-blue">
             <Wallet size={20} />
           </div>
           <h3 className="text-xl font-bold text-white tracking-tight">Budget Parameters</h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Total Monthly Budget (₦)</label>
            <input 
              type="number" 
              value={totalBudget}
              onChange={(e) => setTotalBudget(Number(e.target.value))}
              className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Campaign Duration</label>
              <select 
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
              >
                <option value={7}>7 Days</option>
                <option value={14}>14 Days</option>
                <option value={30}>30 Days</option>
                <option value={90}>90 Days</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Campaign Goal</label>
              <select 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
              >
                <option value="awareness">Brand Awareness</option>
                <option value="traffic">Traffic/Visitors</option>
                <option value="leads">Lead Generation</option>
                <option value="sales">Sales/Conversions</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Business Type</label>
            <select 
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
            >
              <option value="ecommerce">E-commerce / Retail</option>
              <option value="service">Service Business</option>
              <option value="b2b">B2B / Professional Services</option>
              <option value="education">Education / Courses</option>
              <option value="health">Health & Wellness</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Side */}
      <div className="space-y-6">
        <div className="bg-midnight-mid border border-electric-blue/30 p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl" />
          
          <div className="relative z-10 text-center space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-electric-blue font-bold">Effective Daily Ad Budget</div>
            <div className="text-5xl md:text-6xl font-bold text-white font-mono leading-none">
              {formatCurrency(results.effectiveBudget)}
            </div>
            <p className="text-grey text-sm italic mt-4">80% allocation for direct ad spend</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-midnight-mid border border-white/5 p-8">
            <div className="text-electric-blue mb-4"><Target size={24} /></div>
            <div className="text-[10px] uppercase tracking-widest text-grey mb-1 font-bold">Daily Total</div>
            <div className="text-2xl font-bold text-white font-mono">{formatCurrency(results.dailyBudget)}</div>
            <div className="text-[10px] text-grey/60 mt-2 uppercase">Gross budget per day</div>
          </div>
          <div className="bg-midnight-mid border border-white/5 p-8">
            <div className="text-electric-blue mb-4"><Layout size={24} /></div>
            <div className="text-[10px] uppercase tracking-widest text-grey mb-1 font-bold">Platform Fees</div>
            <div className="text-2xl font-bold text-white font-mono">{formatCurrency(results.fees * duration)}</div>
            <div className="text-[10px] text-grey/60 mt-2 uppercase">Est. Management & VAT (20%)</div>
          </div>
        </div>

        <div className="glass p-8 space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
            <PieChart size={16} className="text-electric-blue" /> Platform Allocation
          </h4>
          <div className="space-y-4">
            {Object.entries(results.allocation).map(([platform, percent]) => (
              <div key={platform} className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white flex items-center gap-2">
                    {platformIcons[platform as keyof typeof platformIcons]} {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </span>
                  <span className="text-electric-blue font-bold">{formatCurrency(totalBudget * 0.8 * (percent / 100))} ({percent}%)</span>
                </div>
                <div className="w-full h-1 bg-midnight-lt rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    className="h-full bg-electric-blue"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-electric-blue/10 border border-electric-blue/20 p-6 flex gap-4 items-start">
          <div className="mt-1 text-electric-blue"><MessageSquare size={20} /></div>
          <p className="text-grey text-sm leading-relaxed">
            <span className="text-white font-bold">Pro Tip:</span> {results.recommendation}
          </p>
        </div>

        <button className="w-full bg-white text-midnight py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-electric-blue hover:text-white transition-all">
          Optimize My Ad Spend <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
