"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Target, ArrowRight } from 'lucide-react';

const channelROIs = {
  seo: { min: 2.5, max: 5.5, conversion: 2.8, name: "SEO / Search Optimization" },
  ppc: { min: 1.8, max: 4.0, conversion: 3.5, name: "PPC / Google Ads" },
  social: { min: 1.5, max: 3.5, conversion: 2.2, name: "Social Media Marketing" },
  email: { min: 3.0, max: 8.0, conversion: 4.5, name: "Email Marketing" },
  content: { min: 2.0, max: 4.5, conversion: 2.5, name: "Content Marketing" }
};

const industryMultipliers = {
  retail: { val: 1.0, name: "Retail / E-commerce" },
  service: { val: 1.2, name: "Professional Services" },
  health: { val: 1.3, name: "Health & Wellness" },
  education: { val: 1.1, name: "Education" },
  food: { val: 0.9, name: "Food & Hospitality" },
  tech: { val: 1.4, name: "Technology" }
};

export default function ROICalculator() {
  const [budget, setBudget] = useState(100000);
  const [duration, setDuration] = useState(6);
  const [revenue, setRevenue] = useState(500000);
  const [industry, setIndustry] = useState('retail');
  const [traffic, setTraffic] = useState(30);
  const [channel, setChannel] = useState('seo');

  const results = React.useMemo(() => {
    const channelData = channelROIs[channel as keyof typeof channelROIs];
    const industryMult = industryMultipliers[industry as keyof typeof industryMultipliers].val;

    const totalInvestment = budget * duration;
    const avgMultiplier = (channelData.min + channelData.max) / 2;
    const roiMultiplier = avgMultiplier * industryMult;
    const roi = ((roiMultiplier - 1) * 100);

    const monthlyTrafficGain = (traffic / 100) * revenue;
    const conversionRate = channelData.conversion / 100;
    const newCustomers = (monthlyTrafficGain * conversionRate) * (duration / 6);
    const avgCustomerValue = revenue * 0.3;
    const additionalRevenue = newCustomers * avgCustomerValue;

    const projectedReturn = totalInvestment * roiMultiplier;
    const netProfit = projectedReturn - totalInvestment;
    const costPerAcquisition = totalInvestment / (newCustomers || 1);

    const grade = roi >= 150 ? 'Excellent! High potential returns.' : roi >= 80 ? 'Good projected returns.' : roi >= 40 ? 'Moderate returns expected.' : 'Low projected returns. Consider optimization.';

    return {
      roi,
      revenueGain: additionalRevenue,
      cpa: costPerAcquisition,
      totalInvest: totalInvestment,
      totalReturn: projectedReturn,
      netProfit,
      grade
    };
  }, [budget, duration, revenue, industry, traffic, channel]);

  const formatCurrency = (num: number) => {
    return '₦' + num.toLocaleString(undefined, { maximumFractionDigits: 0 });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Form Side */}
      <div className="glass p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-4 mb-4">
           <div className="w-10 h-10 bg-electric-blue/10 flex items-center justify-center text-electric-blue">
             <BarChart3 size={20} />
           </div>
           <h3 className="text-xl font-bold text-white tracking-tight">Campaign Parameters</h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Marketing Channel</label>
            <select 
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
              className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
            >
              {Object.entries(channelROIs).map(([key, data]) => (
                <option key={key} value={key}>{data.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Monthly Budget (₦)</label>
              <input 
                type="number" 
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Duration (Months)</label>
              <select 
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none"
              >
                <option value={3}>3 Months</option>
                <option value={6}>6 Months</option>
                <option value={12}>12 Months</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Current Monthly Revenue (₦)</label>
              <input 
                type="number" 
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Industry</label>
              <select 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
              >
                {Object.entries(industryMultipliers).map(([key, data]) => (
                  <option key={key} value={key}>{data.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-grey font-bold flex justify-between">
              Expected Traffic Increase <span>{traffic}%</span>
            </label>
            <input 
              type="range" 
              min="1" 
              max="200" 
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full accent-electric-blue"
            />
          </div>
        </div>
      </div>

      {/* Results Side */}
      <div className="space-y-6">
        <div className="bg-midnight-mid border border-electric-blue/30 p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl" />
          
          <div className="relative z-10 text-center space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-electric-blue font-bold">Projected ROI</div>
            <div className="text-6xl md:text-7xl font-bold text-white font-mono leading-none">
              {results.roi.toFixed(0)}%
            </div>
            <div className="w-full h-1.5 bg-midnight-lt rounded-full overflow-hidden mt-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(results.roi, 200) / 2}%` }}
                className={`h-full ${results.roi >= 150 ? 'bg-green-500' : results.roi >= 80 ? 'bg-electric-blue' : 'bg-yellow-500'}`}
              />
            </div>
            <p className="text-grey text-sm italic">{results.grade}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-midnight-mid border border-white/5 p-8">
            <div className="text-electric-blue mb-4"><TrendingUp size={24} /></div>
            <div className="text-[10px] uppercase tracking-widest text-grey mb-1 font-bold">Revenue Gain</div>
            <div className="text-2xl font-bold text-white font-mono">{formatCurrency(results.revenueGain)}</div>
            <div className="text-[10px] text-grey/60 mt-2 uppercase">Est. after {duration} months</div>
          </div>
          <div className="bg-midnight-mid border border-white/5 p-8">
            <div className="text-electric-blue mb-4"><Target size={24} /></div>
            <div className="text-[10px] uppercase tracking-widest text-grey mb-1 font-bold">Avg. CPA</div>
            <div className="text-2xl font-bold text-white font-mono">{formatCurrency(results.cpa)}</div>
            <div className="text-[10px] text-grey/60 mt-2 uppercase">Cost Per Acquisition</div>
          </div>
        </div>

        <div className="glass p-8 space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-white/5 text-sm">
            <span className="text-grey">Total Investment</span>
            <span className="text-white font-bold font-mono">{formatCurrency(results.totalInvest)}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-white/5 text-sm">
            <span className="text-grey">Projected Gross Return</span>
            <span className="text-white font-bold font-mono">{formatCurrency(results.totalReturn)}</span>
          </div>
          <div className="flex justify-between items-center py-3 text-sm">
            <span className="text-electric-blue font-bold uppercase tracking-widest text-xs">Net Profit Potential</span>
            <span className="text-green-500 font-bold font-mono text-xl">{formatCurrency(results.netProfit)}</span>
          </div>
        </div>

        <button className="w-full bg-white text-midnight py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-electric-blue hover:text-white transition-all">
          Get Custom Growth Plan <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
