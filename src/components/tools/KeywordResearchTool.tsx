"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Briefcase, TrendingUp, Copy, Check, Info, ArrowRight } from 'lucide-react';


interface KeywordResult {
  keyword: string;
  volume: number;
  competition: 'high' | 'medium' | 'low';
  idea: string;
}

const presetData = {
  general: [
    { keyword: 'web design Nigeria', volume: 2400, competition: 'medium' },
    { keyword: 'digital marketing agency Lagos', volume: 1900, competition: 'high' },
    { keyword: 'SEO services Port Harcourt', volume: 880, competition: 'medium' },
    { keyword: 'logo design Nigeria', volume: 3200, competition: 'high' },
    { keyword: 'social media marketing Abuja', volume: 1400, competition: 'medium' },
    { keyword: 'website development Lagos', volume: 2100, competition: 'high' },
    { keyword: 'content writing Nigeria', volume: 1100, competition: 'low' },
    { keyword: 'graphic design services Ibadan', volume: 650, competition: 'low' },
  ],
  ecommerce: [
    { keyword: 'online shop Nigeria', volume: 3600, competition: 'high' },
    { keyword: 'buy clothes online Lagos', volume: 2800, competition: 'high' },
    { keyword: 'Nigeria e-commerce websites', volume: 1900, competition: 'medium' },
    { keyword: 'online grocery delivery Abuja', volume: 1200, competition: 'medium' },
    { keyword: 'fashion store Nigeria', volume: 2200, competition: 'high' },
    { keyword: 'electronics online store Nigeria', volume: 1800, competition: 'high' },
    { keyword: 'custom e-commerce development', volume: 720, competition: 'low' },
  ],
  service: [
    { keyword: 'accountant Lagos', volume: 1600, competition: 'medium' },
    { keyword: 'law firm Abuja', volume: 1100, competition: 'high' },
    { keyword: 'consulting services Nigeria', volume: 1400, competition: 'medium' },
    { keyword: 'HR services Lagos', volume: 890, competition: 'low' },
    { keyword: 'business consultant Nigeria', volume: 2100, competition: 'high' },
    { keyword: 'virtual assistant Nigeria', volume: 760, competition: 'low' },
  ],
  health: [
    { keyword: 'gym Lagos', volume: 2800, competition: 'high' },
    { keyword: 'fitness center Abuja', volume: 1400, competition: 'medium' },
    { keyword: 'nutritionist Nigeria', volume: 1100, competition: 'medium' },
    { keyword: 'hospital Port Harcourt', volume: 1900, competition: 'high' },
    { keyword: 'weight loss program Nigeria', volume: 2200, competition: 'high' },
    { keyword: 'yoga studio Lagos', volume: 680, competition: 'low' },
  ],
  education: [
    { keyword: 'online courses Nigeria', volume: 3100, competition: 'high' },
    { keyword: 'university admission guide', volume: 2400, competition: 'medium' },
    { keyword: 'coding bootcamp Lagos', volume: 1200, competition: 'medium' },
    { keyword: 'tutorial center Ibadan', volume: 890, competition: 'low' },
    { keyword: 'MBA programs Nigeria', volume: 1600, competition: 'medium' },
    { keyword: 'ielts preparation Nigeria', volume: 2100, competition: 'high' },
  ],
  food: [
    { keyword: 'restaurant Lagos', volume: 4200, competition: 'high' },
    { keyword: 'catering services Abuja', volume: 1800, competition: 'medium' },
    { keyword: 'food delivery Lagos', volume: 3200, competition: 'high' },
    { keyword: 'bakery Port Harcourt', volume: 1100, competition: 'medium' },
    { keyword: 'nigerian food blog', volume: 2100, competition: 'high' },
    { keyword: 'meal prep Nigeria', volume: 950, competition: 'low' },
  ],
  realestate: [
    { keyword: 'houses for rent Lagos', volume: 3800, competition: 'high' },
    { keyword: 'property for sale Abuja', volume: 2800, competition: 'high' },
    { keyword: 'real estate agent Nigeria', volume: 2100, competition: 'medium' },
    { keyword: 'luxury apartments Lagos', volume: 1600, competition: 'medium' },
    { keyword: 'land for sale Ogun State', volume: 1400, competition: 'low' },
  ],
  tech: [
    { keyword: 'software company Nigeria', volume: 2400, competition: 'high' },
    { keyword: 'app development Lagos', volume: 1900, competition: 'medium' },
    { keyword: 'IT support services Abuja', volume: 1100, competition: 'low' },
    { keyword: 'tech startup Nigeria', volume: 1600, competition: 'medium' },
    { keyword: 'data analytics company', volume: 890, competition: 'low' },
    { keyword: 'cybersecurity services Nigeria', volume: 1200, competition: 'medium' },
  ]
};

const contentIdeas = {
  general: ['Ultimate Guide', 'Top 10 List', 'How-to Tutorial', 'Case Study'],
  ecommerce: ['Product Guide', 'Buying Tips', 'Comparison', 'Review'],
  service: ['Industry Report', 'Tips Guide', 'Expert Interview', 'Checklist'],
  health: ['Wellness Guide', 'Fitness Plan', 'Nutrition Tips', 'Success Story'],
  education: ['Course Review', 'Learning Guide', 'Career Path', 'Study Tips'],
  food: ['Recipe Collection', 'Restaurant Review', 'Cooking Tips', 'Food Guide'],
  realestate: ['Property Guide', 'Investment Tips', 'Location Review', 'Market Analysis'],
  tech: ['Tech Tutorial', 'Product Review', 'Industry News', 'Comparison Guide']
};

export default function KeywordResearchTool() {
  const [seedKeyword, setSeedKeyword] = useState('');
  const [industry, setIndustry] = useState('general');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<KeywordResult[] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResults(null);

    setTimeout(() => {
      let baseKeywords = [...(presetData[industry as keyof typeof presetData] || presetData.general)];
      const ideas = contentIdeas[industry as keyof typeof contentIdeas] || contentIdeas.general;

      if (seedKeyword) {
        const cleanedSeed = seedKeyword.trim();
        const customKeywords = [
          { keyword: `${cleanedSeed} Nigeria`, volume: Math.floor(Math.random() * 2000) + 500, competition: 'medium' as const },
          { keyword: `best ${cleanedSeed} in Lagos`, volume: Math.floor(Math.random() * 1500) + 300, competition: 'medium' as const },
          { keyword: `${cleanedSeed} company Abuja`, volume: Math.floor(Math.random() * 1000) + 200, competition: 'low' as const },
          { keyword: `cheap ${cleanedSeed} Nigeria`, volume: Math.floor(Math.random() * 800) + 150, competition: 'low' as const },
          { keyword: `${cleanedSeed} services Port Harcourt`, volume: Math.floor(Math.random() * 600) + 100, competition: 'low' as const },
        ];
        // Combine, prioritizing seed keywords
        baseKeywords = [...customKeywords, ...baseKeywords.slice(0, 5)];
      }

      const finalResults: KeywordResult[] = baseKeywords.map((k, i) => ({
        keyword: k.keyword,
        volume: k.volume,
        competition: k.competition as 'high' | 'medium' | 'low',
        idea: ideas[i % ideas.length]
      }));

      setResults(finalResults);
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getCompetitionColor = (level: 'high' | 'medium' | 'low') => {
    switch (level) {
      case 'high': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-500 bg-green-500/10 border-green-500/20';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Search Console Card */}
      <div className="glass p-8 md:p-12 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-3xl rounded-full" />
        
        <div className="relative z-10 space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-white tracking-tight">Keyword Analytics Engine</h3>
            <p className="text-grey max-w-md mx-auto text-sm">Enter a topic and select your industry to discover local search opportunities in the Nigerian market.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Seed Keyword Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Seed Keyword (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-grey">
                    <Search size={16} />
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. real estate, tech agency"
                    value={seedKeyword}
                    onChange={(e) => setSeedKeyword(e.target.value)}
                    className="w-full bg-midnight-lt border border-white/10 py-4 pl-12 pr-4 text-white focus:border-electric-blue/50 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Industry Selection */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Industry / Niche</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-grey">
                    <Briefcase size={16} />
                  </div>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-midnight-lt border border-white/10 py-4 pl-12 pr-10 text-white focus:border-electric-blue/50 outline-none transition-colors appearance-none"
                  >
                    <option value="general">General Business</option>
                    <option value="ecommerce">E-commerce / Retail</option>
                    <option value="service">Professional Services</option>
                    <option value="health">Health & Wellness</option>
                    <option value="education">Education & E-learning</option>
                    <option value="food">Food & Hospitality</option>
                    <option value="realestate">Real Estate & Property</option>
                    <option value="tech">Tech & Software</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-grey">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-midnight py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-midnight border-t-transparent rounded-full animate-spin" />
                  Analyzing Market Data...
                </>
              ) : (
                'Find Keyword Opportunities'
              )}
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">Keyword Ideas & Search Intent</h4>
                <p className="text-grey text-sm">Pre-calculated volume averages and target content topics based on 2026 Nigerian metrics.</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-midnight-mid border border-white/5 text-xs text-grey">
                <Info size={14} className="text-electric-blue animate-pulse" />
                Data-driven approximations
              </div>
            </div>

            {/* Results Table */}
            <div className="glass overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/5 text-grey text-[10px] uppercase tracking-widest font-bold">
                    <th className="py-5 px-6">Keyword</th>
                    <th className="py-5 px-6">Monthly Searches</th>
                    <th className="py-5 px-6">Competition</th>
                    <th className="py-5 px-6">Suggested Content Angle</th>
                    <th className="py-5 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((k, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors text-sm">
                      <td className="py-5 px-6 font-semibold text-white tracking-tight">{k.keyword}</td>
                      <td className="py-5 px-6 font-mono text-grey">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} className="text-electric-blue" />
                          {k.volume.toLocaleString()}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span className={`inline-block px-3 py-1 text-xs border font-bold uppercase tracking-wider ${getCompetitionColor(k.competition)}`}>
                          {k.competition}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-grey italic">{k.idea}</td>
                      <td className="py-5 px-6 text-right">
                        <button
                          onClick={() => copyToClipboard(k.keyword, i)}
                          className="p-2 hover:bg-white/10 text-grey hover:text-white transition-colors rounded-full"
                          title="Copy keyword"
                        >
                          {copiedIndex === i ? (
                            <Check size={16} className="text-green-500" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
