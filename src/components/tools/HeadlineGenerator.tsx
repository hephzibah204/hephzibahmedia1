"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, MousePointer2, Copy, Check, Sparkles, Target, Zap } from 'lucide-react';

const headlineTemplates = {
  entrepreneur: [
    "How {product} Helped {audience} 3x Their Revenue in 90 Days",
    "The Secret to {benefit} Every {audience} Needs to Know",
    "Why Smart {audience} Are Switching to {product}",
    "Get {benefit} Without the Stress - Here's How",
    "The {product} That {audience} Can't Stop Talking About"
  ],
  corporate: [
    "Side Hustle Alert: How {audience} Earn Extra Income",
    "Unlock Your Potential with {product}",
    "What {audience} Know About {benefit} (That You Don't)",
    "Finally, a {product} That Works for Busy {audience}",
    "Level Up: {product} for Career-Driven {audience}"
  ],
  student: [
    "{product}: The Skill {audience} Need for 2026",
    "How Students Are Getting {benefit} With This {product}",
    "Boost Your CV with {product}",
    "The {product} Every {audience} Should Have",
    "Study Smart, Not Hard - With {product}"
  ],
  smb: [
    "Finally, {product} Designed for Nigerian {audience}",
    "How Local {audience} Are Growing With {product}",
    "{product}: The Secret Weapon for {audience}",
    "Stop Wasting Money - Try {product} Today",
    "The {product} That {audience} Trust"
  ]
};

const ctaTemplates = {
  buy: {
    none: ['Buy Now', 'Get Started', 'Order Now', 'Purchase Today'],
    limited: ['Get 50% Off - Limited Time', 'Offer Ends Soon', 'Last Chance to Buy', 'Flash Sale - 24h Only'],
    urgent: ['Buy Now Before Gone', 'Only Few Left', 'Don\'t Miss Out', 'Instant Access Now']
  },
  lead: {
    none: ['Get Free Quote', 'Sign Up Free', 'Download Guide', 'Join Waitlist'],
    limited: ['Get Free Access (Limited)', 'Claim Your Spot', 'Register Before Full', 'Get Early Bird Access'],
    urgent: ['Sign Up Now - Spots Filling', 'Don\'t Miss This', 'Join Before Closed', 'Get Access Immediately']
  },
  download: {
    none: ['Download Now', 'Get Free Guide', 'Get Template', 'Download Checklist'],
    limited: ['Free for Limited Time', 'Get Before Ends', 'Download Free Copy', 'Claim Your Copy'],
    urgent: ['Download Before Gone', 'Get It Now', 'Free Copy - Hurry', 'Download Immediately']
  },
  book: {
    none: ['Book Consultation', 'Schedule Call', 'Book Appointment', 'Book Demo'],
    limited: ['Book Before Slots Gone', 'Limited Availability', 'Book Your Spot', 'Schedule Now'],
    urgent: ['Book Immediately', 'Last Available Slots', 'Don\'t Miss - Book Now', 'Secure Your Time']
  }
};

export default function HeadlineGenerator() {
  const [activeTab, setActiveTab] = useState<'headline' | 'cta'>('headline');
  
  // Headline State
  const [product, setProduct] = useState('');
  const [benefit, setBenefit] = useState('');
  const [audience, setAudience] = useState('entrepreneur');
  const [headlines, setHeadlines] = useState<string[]>([]);
  
  // CTA State
  const [ctaGoal, setCtaGoal] = useState('buy');
  const [urgency, setUrgency] = useState('none');
  const [ctas, setCtas] = useState<string[]>([]);
  
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const generateHeadlines = (e: React.FormEvent) => {
    e.preventDefault();
    const templates = headlineTemplates[audience as keyof typeof headlineTemplates] || headlineTemplates.entrepreneur;
    const results = templates.map(t => 
      t.replace(/{product}/g, product || '[Product]')
       .replace(/{benefit}/g, benefit || '[Benefit]')
       .replace(/{audience}/g, audience.charAt(0).toUpperCase() + audience.slice(1))
    );
    setHeadlines(results);
  };

  const generateCtas = (e: React.FormEvent) => {
    e.preventDefault();
    const results = ctaTemplates[ctaGoal as keyof typeof ctaTemplates][urgency as keyof typeof ctaTemplates['buy']];
    setCtas(results);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Tab Switcher */}
      <div className="flex justify-center p-1 bg-midnight-mid border border-white/5 rounded-none max-w-md mx-auto">
        <button 
          onClick={() => setActiveTab('headline')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'headline' ? 'bg-white text-midnight' : 'text-grey hover:text-white'}`}
        >
          <Type size={14} /> Headlines
        </button>
        <button 
          onClick={() => setActiveTab('cta')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'cta' ? 'bg-white text-midnight' : 'text-grey hover:text-white'}`}
        >
          <MousePointer2 size={14} /> Call-To-Actions
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Side */}
        <div className="lg:col-span-5 space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === 'headline' ? (
              <motion.div 
                key="headline-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass p-8 space-y-6"
              >
                <div className="flex items-center gap-3 text-electric-blue mb-2">
                  <Sparkles size={20} />
                  <h3 className="text-lg font-bold text-white tracking-tight">Headline Inputs</h3>
                </div>
                
                <form onSubmit={generateHeadlines} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Your Product/Service</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Hephzibah Media"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Main Benefit</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 3x revenue"
                      value={benefit}
                      onChange={(e) => setBenefit(e.target.value)}
                      className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Target Audience</label>
                    <select 
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
                    >
                      <option value="entrepreneur">Entrepreneurs</option>
                      <option value="corporate">Corporate Professionals</option>
                      <option value="student">Students</option>
                      <option value="smb">Small Business Owners</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-white text-midnight py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all mt-4">
                    Generate Headlines
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="cta-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass p-8 space-y-6"
              >
                <div className="flex items-center gap-3 text-electric-blue mb-2">
                  <Target size={20} />
                  <h3 className="text-lg font-bold text-white tracking-tight">CTA Inputs</h3>
                </div>

                <form onSubmit={generateCtas} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Primary Goal</label>
                    <select 
                      value={ctaGoal}
                      onChange={(e) => setCtaGoal(e.target.value)}
                      className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
                    >
                      <option value="buy">Purchase / Sale</option>
                      <option value="lead">Lead Generation</option>
                      <option value="download">Resource Download</option>
                      <option value="book">Booking / Call</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Urgency Level</label>
                    <select 
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
                    >
                      <option value="none">Standard (No Urgency)</option>
                      <option value="limited">Limited Offer</option>
                      <option value="urgent">Extreme Urgency</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-white text-midnight py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all mt-4">
                    Generate CTAs
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Side */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-midnight-mid border border-white/5 p-8 min-h-[400px]">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-electric-blue font-bold">
                Generated {activeTab === 'headline' ? 'Headlines' : 'Variations'}
              </h4>
              <div className="text-[10px] text-grey font-medium">Click to Copy</div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {(activeTab === 'headline' ? headlines : ctas).map((text, i) => (
                  <motion.div 
                    key={text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => copyToClipboard(text)}
                    className="group relative bg-midnight-lt border border-white/5 p-6 cursor-pointer hover:border-electric-blue/30 transition-all"
                  >
                    <p className="text-white text-sm md:text-base pr-8 leading-relaxed font-medium">{text}</p>
                    <div className="absolute top-6 right-6 text-grey group-hover:text-electric-blue transition-colors">
                      {copiedText === text ? <Check size={16} /> : <Copy size={16} />}
                    </div>
                  </motion.div>
                ))}

                {(activeTab === 'headline' ? headlines : ctas).length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 pt-12">
                    <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full text-grey/20">
                      {activeTab === 'headline' ? <Type size={32} /> : <MousePointer2 size={32} />}
                    </div>
                    <p className="text-grey text-sm italic">Fill out the form to generate {activeTab}s</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="bg-electric-blue/10 border border-electric-blue/20 p-6 flex gap-4 items-start">
            <div className="mt-1 text-electric-blue"><Zap size={20} /></div>
            <p className="text-grey text-sm leading-relaxed">
              <span className="text-white font-bold">Pro Tip:</span> 
              {activeTab === 'headline' 
                ? " High-performing headlines often focus on the transformation (the 'After' state) rather than just features."
                : " Contrast your CTA button color with your site's primary palette to maximize visibility and click-through rates."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
