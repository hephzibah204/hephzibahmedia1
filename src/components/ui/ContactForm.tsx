"use client";

import React, { useState } from 'react';
import { submitLead } from '@/actions/leads';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError(null);
    
    const result = await submitLead(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || "Something went wrong.");
    }
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 text-center space-y-6"
      >
        <div className="flex justify-center text-electric-blue">
          <CheckCircle size={64} />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Message Received!</h3>
        <p className="text-grey max-w-sm mx-auto">
          Thanks for reaching out. One of our growth strategists will be in touch with you shortly.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-electric-blue font-bold uppercase tracking-widest text-xs border-b border-electric-blue/20 pb-1"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Full Name</label>
          <input 
            type="text" 
            name="full_name" 
            required
            className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Business Email</label>
          <input 
            type="email" 
            name="email" 
            required
            className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Business Name</label>
          <input 
            type="text" 
            name="business_name" 
            className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-colors"
            placeholder="Company Ltd"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Monthly Budget</label>
          <select 
            name="budget"
            className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-colors appearance-none"
          >
            <option value="">Select budget range</option>
            <option value="Below 200k">Below ₦200k</option>
            <option value="200k - 500k">₦200k - ₦500k</option>
            <option value="500k - 1.5M">₦500k - ₦1.5M</option>
            <option value="Above 1.5M">Above ₦1.5M</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Phone Number</label>
          <input 
            type="tel" 
            name="phone_number" 
            required
            className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-colors"
            placeholder="+234 ..."
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Service Required</label>
          <select 
            name="requested_service"
            className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-colors appearance-none"
          >
            <option value="">Select a service</option>
            <option value="Web Design">Web Design</option>
            <option value="SEO">SEO & Marketing</option>
            <option value="App Development">App Development</option>
            <option value="Branding">Branding & Print</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Project Message</label>
        <textarea 
          name="message" 
          rows={4}
          className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none transition-colors"
          placeholder="Tell us about your project goals..."
        />
      </div>

      {error && <p className="text-red-400 text-xs italic">{error}</p>}

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-electric-blue text-white py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-electric-blue-lt transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <>Send Message <Send size={16} /></>
        )}
      </button>
    </form>
  );
}
