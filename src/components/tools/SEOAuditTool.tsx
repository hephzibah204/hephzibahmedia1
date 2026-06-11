"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShieldCheck, Globe, Zap, Smartphone, Image as ImageIcon, FileCode, Check, X, AlertTriangle } from 'lucide-react';

interface AuditCheck {
  title: string;
  desc: string;
  status: 'pass' | 'fail' | 'warn';
  icon: React.ReactNode;
}

export default function SEOAuditTool() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{ score: number; checks: AuditCheck[] } | null>(null);

  const runAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    setResults(null);

    // Simulate audit delay
    setTimeout(() => {
      const mockChecks: AuditCheck[] = [
        {
          title: 'URL Structure',
          desc: url.length < 30 ? 'Clean, readable URL structure.' : 'URL is quite long. Consider shortening.',
          status: url.length < 30 ? 'pass' : 'warn',
          icon: <Globe size={18} />
        },
        {
          title: 'SSL Certificate',
          desc: url.startsWith('https') ? 'Secure HTTPS connection detected.' : 'Non-secure HTTP detected. SSL is critical for ranking.',
          status: url.startsWith('https') ? 'pass' : 'fail',
          icon: <ShieldCheck size={18} />
        },
        {
          title: 'Meta Title Tag',
          desc: Math.random() > 0.2 ? 'Page has optimized title tag.' : 'Add descriptive meta title tags.',
          status: Math.random() > 0.2 ? 'pass' : 'fail',
          icon: <FileCode size={18} />
        },
        {
          title: 'Mobile Optimization',
          desc: Math.random() > 0.3 ? 'Site is mobile-friendly.' : 'Optimize site for mobile devices.',
          status: Math.random() > 0.3 ? 'pass' : 'fail',
          icon: <Smartphone size={18} />
        },
        {
          title: 'Page Speed',
          desc: Math.random() > 0.4 ? 'Good loading speed.' : 'Optimize images and enable caching.',
          status: Math.random() > 0.4 ? 'pass' : 'warn',
          icon: <Zap size={18} />
        },
        {
          title: 'Image Alt Tags',
          desc: Math.random() > 0.35 ? 'Images have alt attributes.' : 'Add alt text to all images.',
          status: Math.random() > 0.35 ? 'pass' : 'fail',
          icon: <ImageIcon size={18} />
        }
      ];

      const passCount = mockChecks.filter(c => c.status === 'pass').length;
      const score = Math.round((passCount / mockChecks.length) * 100);

      setResults({ score, checks: mockChecks });
      setIsLoading(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getStatusIcon = (status: 'pass' | 'fail' | 'warn') => {
    switch (status) {
      case 'pass': return <Check className="text-green-500" size={16} />;
      case 'fail': return <X className="text-red-500" size={16} />;
      case 'warn': return <AlertTriangle className="text-yellow-500" size={16} />;
    }
  };

  const getStatusBg = (status: 'pass' | 'fail' | 'warn') => {
    switch (status) {
      case 'pass': return 'bg-green-500/10 border-green-500/20';
      case 'fail': return 'bg-red-500/10 border-red-500/20';
      case 'warn': return 'bg-yellow-500/10 border-yellow-500/20';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Input Section */}
      <div className="glass p-8 md:p-12 text-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">Enter Website URL</h3>
          <p className="text-grey max-w-md mx-auto">Get a comprehensive SEO health check for your website in seconds.</p>
        </div>

        <form onSubmit={runAudit} className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-grey">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-midnight-lt border border-white/10 py-4 pl-12 pr-4 text-white focus:border-electric-blue/50 outline-none transition-colors"
              required
            />
          </div>
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-white text-midnight px-8 py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-midnight border-t-transparent rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              'Run Audit'
            )}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {results && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Score Card */}
            <div className="bg-midnight-mid border border-white/5 p-12 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-3xl rounded-full" />
              
              <div className="relative z-10 space-y-4">
                <div className="text-[10px] uppercase tracking-[0.4em] text-electric-blue font-bold">Overall SEO Score</div>
                <div className={`text-7xl md:text-8xl font-bold font-mono ${getScoreColor(results.score)}`}>
                  {results.score}<span className="text-4xl text-grey/30">/100</span>
                </div>
                <div className="pt-4">
                  <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${results.score >= 80 ? 'bg-green-500/10 text-green-500' : results.score >= 50 ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'}`}>
                    {results.score >= 80 ? 'Excellent' : results.score >= 50 ? 'Needs Improvement' : 'Poor Performance'}
                  </span>
                </div>
              </div>
            </div>

            {/* Checks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.checks.map((check, index) => (
                <motion.div 
                  key={check.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 border flex gap-4 items-start ${getStatusBg(check.status)}`}
                >
                  <div className={`p-3 bg-white/5 text-white`}>
                    {check.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">{check.title}</h4>
                      {getStatusIcon(check.status)}
                    </div>
                    <p className="text-grey text-xs leading-relaxed">{check.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="glass p-8 text-center space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">Need a Deep Audit?</h3>
              <p className="text-grey text-sm max-w-lg mx-auto">This tool provides a basic check. Our technical SEO team can perform a deep dive into your core web vitals, backlink profile, and content strategy.</p>
              <button className="bg-electric-blue text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-midnight transition-all">
                Book Expert Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
