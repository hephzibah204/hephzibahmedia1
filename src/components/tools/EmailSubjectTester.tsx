"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Smartphone, AlertTriangle, CheckCircle, Info, Sparkles, Send, Gauge } from 'lucide-react';

interface Tip {
  icon: React.ReactNode;
  text: string;
  type: 'pass' | 'fail' | 'warn' | 'info';
}

export default function EmailSubjectTester() {
  const [subject, setSubject] = useState('');
  const [preheader, setPreheader] = useState('');
  const [results, setResults] = useState<{ score: number; tips: Tip[] } | null>(null);

  const testSubject = useCallback(() => {
    if (!subject) {
      setResults(null);
      return;
    }

    let score = 50;
    const tips: Tip[] = [];

    // Length check
    if (subject.length >= 30 && subject.length <= 60) {
      score += 15;
      tips.push({ icon: <CheckCircle size={14} />, text: 'Perfect length for mobile and desktop.', type: 'pass' });
    } else if (subject.length > 60) {
      score -= 10;
      tips.push({ icon: <AlertTriangle size={14} />, text: 'Too long - will likely get cut off on mobile devices.', type: 'fail' });
    } else {
      score -= 5;
      tips.push({ icon: <Info size={14} />, text: 'A bit short - consider adding more value or context.', type: 'warn' });
    }

    // Punctuation and Emojis
    if (/[!?]/.test(subject)) {
      score += 10;
      tips.push({ icon: <CheckCircle size={14} />, text: 'Good use of punctuation to grab attention.', type: 'pass' });
    }
    
    if (/\p{Emoji}/u.test(subject)) {
      score += 5;
      tips.push({ icon: <Sparkles size={14} />, text: 'Emoji detected! This can improve open rates if used sparingly.', type: 'pass' });
    }

    // Urgency words
    const urgentWords = ['now', 'limited', 'today', 'free', 'urgent', 'only', 'last', 'expiring'];
    const hasUrgent = urgentWords.some(word => subject.toLowerCase().includes(word));
    if (hasUrgent) {
      score += 10;
      tips.push({ icon: <CheckCircle size={14} />, text: 'Contains urgency-triggering words.', type: 'pass' });
    }

    // Personalization
    const personalWords = ['you', 'your', 'we', 'our', 'i'];
    const hasPersonal = personalWords.some(word => subject.toLowerCase().includes(word));
    if (hasPersonal) {
      score += 10;
      tips.push({ icon: <CheckCircle size={14} />, text: 'Personal and engaging tone.', type: 'pass' });
    } else {
      tips.push({ icon: <Info size={14} />, text: 'Try adding &quot;you&quot; or &quot;your&quot; for better engagement.', type: 'info' });
    }

    // Spam checks
    if (subject === subject.toUpperCase() && subject.length > 5) {
      score -= 25;
      tips.push({ icon: <AlertTriangle size={14} />, text: 'Avoid ALL CAPS - this is a high spam trigger.', type: 'fail' });
    }

    const spamWords = ['$$$', '100% free', 'act now!', 'click here', 'winner', 'cash'];
    const hasSpam = spamWords.some(word => subject.toLowerCase().includes(word));
    if (hasSpam) {
      score -= 20;
      tips.push({ icon: <AlertTriangle size={14} />, text: 'Spam-trigger words detected. Might hit junk folders.', type: 'fail' });
    }

    // Preheader bonus
    if (preheader.length > 0) {
      score += 5;
      tips.push({ icon: <CheckCircle size={14} />, text: 'Preheader present - provides valuable context.', type: 'pass' });
    }

    setResults({
      score: Math.max(0, Math.min(100, score)),
      tips
    });
  }, [subject, preheader]);

  useEffect(() => {
    const timer = setTimeout(testSubject, 300);
    return () => clearTimeout(timer);
  }, [testSubject]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Input Side */}
      <div className="glass p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-4 mb-4">
           <div className="w-10 h-10 bg-electric-blue/10 flex items-center justify-center text-electric-blue">
             <Mail size={20} />
           </div>
           <h3 className="text-xl font-bold text-white tracking-tight">Compose Subject</h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-grey font-bold flex justify-between">
              Subject Line <span>{subject.length}/60 recommended</span>
            </label>
            <input 
              type="text" 
              placeholder="e.g. Your 50% discount expires tonight! ⏳"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-grey font-bold flex justify-between">
              Preheader Text (Optional) <span>{preheader.length} chars</span>
            </label>
            <textarea 
              placeholder="The preview text that appears after the subject in most email clients..."
              value={preheader}
              onChange={(e) => setPreheader(e.target.value)}
              rows={3}
              className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-all resize-none text-sm"
            />
          </div>
        </div>

        {/* Mobile Preview */}
        <div className="pt-8 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-grey font-bold">
            <Smartphone size={12} /> Live Mobile Preview
          </div>
          <div className="bg-midnight-lt border border-white/10 rounded-2xl p-4 max-w-[280px] mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center text-white text-[10px] font-bold">HM</div>
              <div className="flex-1">
                <div className="h-2 w-20 bg-white/10 rounded-full mb-1"></div>
                <div className="h-1.5 w-12 bg-white/5 rounded-full"></div>
              </div>
              <div className="text-[8px] text-grey">12:45 PM</div>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-white line-clamp-1">
                {subject || "Email Subject Line"}
              </div>
              <div className="text-[10px] text-grey line-clamp-2 leading-tight">
                {preheader || "This is where your email preview text appears..."}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Side */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {results ? (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-midnight-mid border border-white/5 p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl" />
                <div className="relative z-10 space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-electric-blue font-bold">Subject Score</div>
                  <div className={`text-6xl md:text-7xl font-bold font-mono ${getScoreColor(results.score)}`}>
                    {results.score}
                  </div>
                  <p className="text-white font-bold text-sm uppercase tracking-widest pt-2">
                    {results.score >= 80 ? 'Excellent Open Potential' : results.score >= 50 ? 'Good - Needs Optimization' : 'Poor - Risk of Spam'}
                  </p>
                </div>
              </div>

              <div className="glass p-8 space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest text-grey font-bold flex items-center gap-2">
                  <Gauge size={14} className="text-electric-blue" /> Optimization Analysis
                </h4>
                <div className="space-y-3">
                  {results.tips.map((tip, i) => (
                    <div key={i} className={`flex items-start gap-3 p-3 text-xs leading-relaxed ${
                      tip.type === 'pass' ? 'text-green-500/80' : 
                      tip.type === 'fail' ? 'text-red-500/80' : 
                      tip.type === 'warn' ? 'text-yellow-500/80' : 'text-grey'
                    }`}>
                      <div className="mt-0.5">{tip.icon}</div>
                      <span>{tip.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-electric-blue text-white py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-midnight transition-all group">
                Improve Subject with AI <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ) : (
            <div className="h-full bg-midnight-mid border border-white/5 flex flex-col items-center justify-center text-center p-12 space-y-4">
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-full text-grey/20">
                <Gauge size={32} />
              </div>
              <p className="text-grey text-sm italic">Type a subject line to see the analysis</p>
            </div>
          )}
        </AnimatePresence>

        <div className="bg-electric-blue/10 border border-electric-blue/20 p-6 flex gap-4 items-start">
          <div className="mt-1 text-electric-blue"><Sparkles size={20} /></div>
          <div className="space-y-1">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">Open Rate Tip</p>
            <p className="text-grey text-xs leading-relaxed">
              Questions in subject lines often outperform statements. Instead of &quot;We have a new guide,&quot; try &quot;Have you seen our new guide?&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
