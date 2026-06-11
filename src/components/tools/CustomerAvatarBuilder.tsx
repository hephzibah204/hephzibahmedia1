"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Target, MessageSquare, DollarSign, Smartphone, Zap } from 'lucide-react';

const presetData = {
  Entrepreneur: {
    pain: 'Struggling to get customers online, wasting money on ads that don&apos;t convert, no time for marketing',
    goals: 'Build a profitable online business, automate sales, create recurring revenue',
    message: '"Stop guessing. Let us build a system that brings you customers while you focus on running your business."'
  },
  Corporate: {
    pain: 'Wants side income, limited time, needs flexible work options, looking for career growth',
    goals: 'Generate extra income without quitting job, gain financial freedom, learn new skills',
    message: '"You don&apos;t need another job. Build a skill that earns you money on your terms."'
  },
  Freelancer: {
    pain: 'Inconsistent income, needs more clients, struggles with pricing, wants to scale',
    goals: 'Get steady clients, increase rates, build personal brand, work from anywhere',
    message: '"Stop chasing clients. Let&apos;s create a system that attracts them to you."'
  },
  Student: {
    pain: 'Limited budget, needs practical skills, wants earning potential, time constraints',
    goals: 'Learn valuable skills, earn while studying, boost CV, prepare for career',
    message: '"Gain skills that employers pay for. Start building your future today."'
  },
  Professional: {
    pain: 'Wants work-life balance, interested in investments, values quality over price',
    goals: 'Build wealth, diversify income, achieve financial independence',
    message: '"Your expertise is valuable. Let&apos;s turn it into an asset that works for you."'
  }
};

interface AvatarProfile {
  name: string;
  age: string;
  location: string;
  income: string;
  occupation: string;
  pain: string;
  goals: string;
  channel: string;
  message: string;
}

export default function CustomerAvatarBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    age: '25-34',
    location: 'Lagos',
    income: 'Middle',
    occupation: 'Entrepreneur',
    pain: '',
    goals: '',
    channel: 'Instagram'
  });

  const [avatar, setAvatar] = useState<AvatarProfile | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const presets = presetData[formData.occupation as keyof typeof presetData];
    
    setAvatar({
      ...formData,
      pain: formData.pain || presets.pain,
      goals: formData.goals || presets.goals,
      message: presets.message
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
      {/* Form Side */}
      <div className="lg:col-span-5 space-y-8">
        <div className="glass p-8 space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-electric-blue/10 flex items-center justify-center text-electric-blue">
              <User size={20} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Avatar Details</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Avatar Name</label>
              <input 
                name="name"
                type="text" 
                placeholder="e.g. Segun the Startup Founder"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Age Range</label>
                <select name="age" value={formData.age} onChange={handleChange} className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none">
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55+">55+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Income</label>
                <select name="income" value={formData.income} onChange={handleChange} className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none">
                  <option value="Low">Budget-Conscious</option>
                  <option value="Middle">Middle Class</option>
                  <option value="High">Affluent</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Occupation</label>
              <select name="occupation" value={formData.occupation} onChange={handleChange} className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none">
                <option value="Entrepreneur">Entrepreneur / Founder</option>
                <option value="Corporate">Corporate Professional</option>
                <option value="Freelancer">Freelancer / Creator</option>
                <option value="Student">Student</option>
                <option value="Professional">High-Level Professional</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Primary Pain Point (Optional)</label>
              <textarea 
                name="pain"
                placeholder="What keeps them up at night?"
                value={formData.pain}
                onChange={handleChange}
                rows={2}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Primary Channel</label>
              <select name="channel" value={formData.channel} onChange={handleChange} className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none">
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Twitter">Twitter/X</option>
                <option value="WhatsApp">WhatsApp Groups</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-white text-midnight py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all mt-4">
              Build Avatar Profile
            </button>
          </form>
        </div>
      </div>

      {/* Results Side */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          {avatar ? (
            <motion.div 
              key="avatar-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-midnight-mid border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-3xl rounded-full" />
              
              <div className="p-10 md:p-14 space-y-10 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-electric-blue">
                    <User size={48} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-bold text-white tracking-tight">{avatar.name}</h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <span className="text-[10px] px-3 py-1 bg-white/5 text-grey border border-white/10 uppercase font-bold tracking-widest">{avatar.occupation}</span>
                      <span className="text-[10px] px-3 py-1 bg-white/5 text-grey border border-white/10 uppercase font-bold tracking-widest">{avatar.age} Years</span>
                      <span className="text-[10px] px-3 py-1 bg-white/5 text-grey border border-white/10 uppercase font-bold tracking-widest">{avatar.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-electric-blue">
                      <Zap size={16} />
                      <h5 className="text-[10px] uppercase tracking-widest font-bold">Pain Points</h5>
                    </div>
                    <p className="text-grey text-sm leading-relaxed">{avatar.pain}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-electric-blue">
                      <Target size={16} />
                      <h5 className="text-[10px] uppercase tracking-widest font-bold">Goals & Desires</h5>
                    </div>
                    <p className="text-grey text-sm leading-relaxed">{avatar.goals}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-electric-blue">
                      <DollarSign size={16} />
                      <h5 className="text-[10px] uppercase tracking-widest font-bold">Spending Power</h5>
                    </div>
                    <p className="text-grey text-sm leading-relaxed">{avatar.income} Income range. Values {avatar.income === 'High' ? 'premium quality and time-saving' : 'ROI and practical utility'}.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-electric-blue">
                      <Smartphone size={16} />
                      <h5 className="text-[10px] uppercase tracking-widest font-bold">Active Channels</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[9px] px-2 py-1 bg-electric-blue/10 text-electric-blue border border-electric-blue/20 uppercase font-bold">{avatar.channel}</span>
                      <span className="text-[9px] px-2 py-1 bg-white/5 text-grey border border-white/10 uppercase font-bold">WhatsApp</span>
                      <span className="text-[9px] px-2 py-1 bg-white/5 text-grey border border-white/10 uppercase font-bold">Email</span>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gold">
                      <MessageSquare size={16} />
                      <h5 className="text-[10px] uppercase tracking-widest font-bold">Recommended Hook</h5>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-display italic text-white leading-relaxed">
                      {avatar.message}
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full bg-midnight-mid border border-white/5 flex flex-col items-center justify-center text-center p-12 space-y-6">
              <div className="w-20 h-20 bg-white/5 flex items-center justify-center rounded-full text-grey/20">
                <Target size={40} />
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-bold">Avatar Builder Ready</h4>
                <p className="text-grey text-sm max-w-xs mx-auto">Input your typical customer&apos;s details to build a psychological profile for your marketing.</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
