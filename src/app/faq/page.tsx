"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const faqData = [
  {
    category: 'website',
    question: 'How long does it take to build a website?',
    answer: 'Timelines vary based on complexity. A standard 5-page business website typically takes 2-3 weeks. E-commerce sites take 4-6 weeks. Complex web applications may take 2-3 months. We provide a detailed timeline during our initial consultation.'
  },
  {
    category: 'website',
    question: 'Do you offer website maintenance?',
    answer: 'Yes! We offer monthly maintenance packages that include security updates, content updates, backup monitoring, and technical support. Our packages start at ₦25,000/month. We also offer one-time updates at ₦5,000 per update.'
  },
  {
    category: 'seo',
    question: 'How long does SEO take to show results?',
    answer: 'SEO is a long-term strategy. Most clients see initial improvements in 4-6 weeks (technical fixes), with significant results in 3-6 months. Competitive keywords may take 6-12 months. We provide monthly reports so you can track progress.'
  },
  {
    category: 'seo',
    question: 'What SEO services do you offer?',
    answer: 'We offer comprehensive SEO including: technical SEO audits, on-page optimization, keyword research, content creation, link building, local SEO (Google Business Profile), and monthly performance reports. We specialize in Nigerian market SEO.'
  },
  {
    category: 'marketing',
    question: 'Which digital marketing channel is best for my business?',
    answer: 'It depends on your business type, target audience, and goals. B2B companies often benefit from LinkedIn and SEO. E-commerce works well with Instagram and Google Ads. Local businesses should focus on Google Business Profile and local SEO. We analyze your business to recommend the best mix.'
  },
  {
    category: 'marketing',
    question: 'Do you offer social media management?',
    answer: 'Yes! Our social media packages include content creation, posting, community management, analytics, and strategy. We handle Instagram, Facebook, LinkedIn, Twitter, and TikTok. Packages start at ₦50,000/month.'
  },
  {
    category: 'pricing',
    question: 'How much does a website cost?',
    answer: 'Our website packages: Landing Page (₦150,000), Business Website 5-pages (₦250,000-₦350,000), E-commerce (₦400,000-₦800,000), Custom Web App (₦500,000+). All packages include hosting, SSL, mobile responsiveness, and basic SEO.'
  },
  {
    category: 'pricing',
    question: 'Do you offer payment plans?',
    answer: 'Yes! We offer flexible payment plans: 50% upfront, 50% on completion for standard projects. For larger projects, we can do 3 equal monthly payments. We also accept installment plans for annual service packages.'
  },
  {
    category: 'website',
    question: 'Will my website work on mobile phones?',
    answer: 'Absolutely! All our websites are fully responsive and mobile-first. We test on multiple devices to ensure perfect display. With Nigeria\'s mobile-first internet usage, we prioritize mobile experience in all our designs.'
  },
  {
    category: 'marketing',
    question: 'How do you measure ROI on marketing campaigns?',
    answer: 'We set up tracking for each campaign including Google Analytics, goal tracking, and custom dashboards. Monthly reports show: traffic, leads, conversions, cost per lead, and revenue attribution. We focus on metrics that matter to your business goals.'
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaq = faqData.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Help Center" 
          title={<>Frequently <span className="text-electric-blue">Asked Questions</span></>}
          description="Find answers to common questions about our services, pricing, and how we help Nigerian businesses grow."
        />

        <div className="mt-12 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-grey">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-midnight-mid border border-white/10 py-5 pl-14 pr-6 text-white rounded-full focus:border-electric-blue/50 outline-none transition-colors"
          />
        </div>

        <div className="mt-12 space-y-4">
          {filteredFaq.map((item, index) => (
            <div key={index} className="glass border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-bold text-white tracking-tight">{item.question}</h3>
                <div className="text-electric-blue">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-8 text-grey leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
