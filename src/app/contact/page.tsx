"use client";

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import ThematicBackground from '@/components/immersive/ThematicBackground';

export default function ContactPage() {
  return (
    <div className="relative pt-32 pb-32 overflow-hidden">
      <ThematicBackground type="cyber" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading 
              label="Contact Us" 
              title={<>Let&apos;s Start Your <span className="text-electric-blue">Evolution</span></>}
              description="Whether you're looking for a performance audit, a new software solution, or a full-scale digital transformation, we're ready to partner with you."
            />

            <div className="space-y-12 mt-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-midnight-mid/80 border border-white/5 text-electric-blue backdrop-blur-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Email Us</h4>
                  <p className="text-grey text-sm">info@hephzibahmedia.com.ng</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-midnight-mid/80 border border-white/5 text-electric-blue backdrop-blur-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Call Us</h4>
                  <p className="text-grey text-sm">+234 907 778 0156</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-midnight-mid/80 border border-white/5 text-electric-blue backdrop-blur-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Location</h4>
                  <p className="text-grey text-sm">Ogere, Ogun State, Nigeria</p>
                </div>
              </div>

              <motion.a 
                href="https://wa.me/2349077780156"
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 p-6 text-[#25D366] group backdrop-blur-sm"
              >
                <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-sm">Instant WhatsApp Chat</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Response time: &lt; 15 mins</div>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-electric-blue/5 blur-3xl -z-10" />
            <div className="glass p-8 md:p-12 relative z-10 backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
