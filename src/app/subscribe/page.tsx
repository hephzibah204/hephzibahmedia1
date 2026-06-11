"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function SubscribePage() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-32 px-6">
      <div className="max-w-xl w-full glass p-12 text-center space-y-8">
        <div className="inline-block bg-electric-blue/10 text-electric-blue px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold">
          📧 Weekly Newsletter
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Get <em className="text-electric-blue-lt">Insider</em> Tips
        </h1>
        <p className="text-grey leading-relaxed">
          Join 2,500+ Nigerian business owners who receive our weekly digest on digital marketing, 
          SEO secrets, and growth strategies that actually work.
        </p>
        
        <div className="flex justify-center gap-4 text-sm text-grey mb-8">
          <div className="flex items-center gap-2"><span>✓</span> No spam</div>
          <div className="flex items-center gap-2"><span>✓</span> Free guides</div>
        </div>

        {subscribed ? (
          <div className="bg-green-500/10 border border-green-500/30 text-green-500 p-6 rounded-lg">
            🎉 You&apos;re in! Check your inbox to confirm your subscription.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Your First Name" 
              required
              className="w-full bg-midnight-lt border border-white/10 py-4 px-6 text-white focus:border-electric-blue/50 outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Your Email Address" 
              required
              className="w-full bg-midnight-lt border border-white/10 py-4 px-6 text-white focus:border-electric-blue/50 outline-none transition-colors"
            />
            <button type="submit" className="w-full bg-white text-midnight py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all">
              Subscribe Now
            </button>
          </form>
        )}
        
        <Link href="/" className="block mt-8 text-sm text-grey hover:text-white transition-colors">
          ← Back to Website
        </Link>
      </div>
    </div>
  );
}
