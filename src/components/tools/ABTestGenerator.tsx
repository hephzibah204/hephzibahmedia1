"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Split, Layers, Monitor, Mail, Megaphone, MousePointer2, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const testIdeas = {
  landing: [
    { title: 'Hero Headline', icon: <Layers size={18} />, tests: [
      { label: 'A', desc: 'Benefit-driven ("Save 50% on electricity")', impact: 'high' },
      { label: 'B', desc: 'Curiosity-driven ("Why Nigerians are switching to solar")', impact: 'med' }
    ]},
    { title: 'Call-to-Action', icon: <MousePointer2 size={18} />, tests: [
      { label: 'A', desc: '"Sign Up Now" (Direct)', impact: 'med' },
      { label: 'B', desc: '"Get My Free Guide" (Value-based)', impact: 'high' }
    ]},
    { title: 'Social Proof', icon: <CheckCircle2 size={18} />, tests: [
      { label: 'A', desc: 'Individual testimonials with photos', impact: 'high' },
      { label: 'B', desc: 'Logo cloud of well-known partners', impact: 'med' }
    ]},
    { title: 'Hero Image', icon: <Monitor size={18} />, tests: [
      { label: 'A', desc: 'Product dashboard screenshot', impact: 'med' },
      { label: 'B', desc: 'Smiling human using the product', impact: 'high' }
    ]}
  ],
  email: [
    { title: 'Subject Line', icon: <Mail size={18} />, tests: [
      { label: 'A', desc: 'Personal "Hi [Name],..."', impact: 'high' },
      { label: 'B', desc: 'Urgency "Only 24 hours left..."', impact: 'med' }
    ]},
    { title: 'Preview Text', icon: <Layers size={18} />, tests: [
      { label: 'A', desc: 'Value proposition', impact: 'med' },
      { label: 'B', desc: 'Question to spark curiosity', impact: 'high' }
    ]},
    { title: 'Button Color', icon: <MousePointer2 size={18} />, tests: [
      { label: 'A', desc: 'Brand color (Midnight Blue)', impact: 'med' },
      { label: 'B', desc: 'Contrasting color (Electric Blue)', impact: 'high' }
    ]},
    { title: 'Email Length', icon: <Mail size={18} />, tests: [
      { label: 'A', desc: 'Short & scannable (under 200 words)', impact: 'high' },
      { label: 'B', desc: 'Detailed with multiple visuals', impact: 'med' }
    ]}
  ],
  ad: [
    { title: 'Ad Creative', icon: <Megaphone size={18} />, tests: [
      { label: 'A', desc: 'Product photo on clean background', impact: 'med' },
      { label: 'B', desc: 'User-generated content (UGC) video', impact: 'high' }
    ]},
    { title: 'Primary Copy', icon: <Layers size={18} />, tests: [
      { label: 'A', desc: 'Problem-Solution framework', impact: 'high' },
      { label: 'B', desc: 'Aspirational lifestyle copy', impact: 'med' }
    ]},
    { title: 'Targeting', icon: <Layers size={18} />, tests: [
      { label: 'A', desc: 'Broad interest-based (Lagos/Abuja)', impact: 'med' },
      { label: 'B', desc: 'Lookalike audience from customers', impact: 'high' }
    ]},
    { title: 'Offer Type', icon: <Zap size={18} />, tests: [
      { label: 'A', desc: 'Flat percentage discount (20% off)', impact: 'med' },
      { label: 'B', desc: 'Free gift/bonus with purchase', impact: 'high' }
    ]}
  ]
};

export default function ABTestGenerator() {
  const [testType, setTestType] = useState('landing');
  const [showResults, setShowResults] = useState(false);

  const generateIdeas = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Input Section */}
      <div className="glass p-8 md:p-12 text-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">Select Campaign Type</h3>
          <p className="text-grey max-w-md mx-auto">Choose what you want to optimize and we&apos;ll generate high-impact test ideas.</p>
        </div>

        <form onSubmit={generateIdeas} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <select 
            value={testType}
            onChange={(e) => { setTestType(e.target.value); setShowResults(false); }}
            className="flex-1 bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
          >
            <option value="landing">Landing Page / Website</option>
            <option value="email">Email Marketing</option>
            <option value="ad">Paid Advertising (Meta/Google)</option>
          </select>
          <button 
            type="submit"
            className="bg-white text-midnight px-8 py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Generate Test Ideas
          </button>
        </form>
      </div>

      <AnimatePresence>
        {showResults && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testIdeas[testType as keyof typeof testIdeas].map((card, i) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-midnight-mid border border-white/5 p-8 space-y-6 group hover:border-electric-blue/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-electric-blue/10 flex items-center justify-center text-electric-blue">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{card.title}</h4>
                </div>

                <div className="space-y-4">
                  {card.tests.map((test) => (
                    <div key={test.label} className="flex gap-4 p-4 bg-midnight-lt border border-white/5 relative">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-electric-blue/30 flex items-center justify-center text-electric-blue text-xs font-bold">
                        {test.label}
                      </div>
                      <div className="space-y-2">
                        <p className="text-grey text-sm leading-relaxed">{test.desc}</p>
                        <div className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded inline-block ${
                          test.impact === 'high' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {test.impact} Impact
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {showResults && (
        <div className="glass p-10 text-center space-y-6">
          <div className="flex justify-center text-electric-blue">
            <Split size={48} />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Ready to start testing?</h3>
          <p className="text-grey max-w-xl mx-auto">A/B testing is the fastest way to increase your ROI without increasing your budget. We can help you set up these experiments using professional tools like VWO, Optimizely, or Google Optimize.</p>
          <button className="bg-electric-blue text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-midnight transition-all flex items-center justify-center gap-3 mx-auto">
            Get Implementation Help <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
