"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 z-0 bg-radial-[at_50%_0%] from-electric-blue/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-8 h-[1px] bg-electric-blue" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-electric-blue font-bold">Nigeria&apos;s Premium Tech Agency</span>
          <span className="w-8 h-[1px] bg-electric-blue" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight flex flex-col items-center">
          <div className="overflow-hidden">
             <motion.span 
               initial={{ y: "100%" }} 
               animate={{ y: 0 }} 
               transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.3 }}
               className="inline-block"
             >
               Engineering <span className="text-electric-blue italic">Growth</span>
             </motion.span>
          </div>
          <div className="overflow-hidden">
             <motion.span 
               initial={{ y: "100%" }} 
               animate={{ y: 0 }} 
               transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.4 }}
               className="inline-block"
             >
               Through Technology.
             </motion.span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-xl mx-auto text-grey text-lg md:text-xl mb-12 leading-relaxed"
        >
          Digital Marketing, Web Technology, and Software Solutions built to dominate the Nigerian market and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <Link 
              href="/services" 
              className="inline-block w-full sm:w-auto bg-electric-blue text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-electric-blue-lt transition-all rounded-sm"
            >
              Our Services
            </Link>
          </MagneticButton>
          
          <MagneticButton>
            <Link 
              href="/contact" 
              className="inline-block w-full sm:w-auto border border-electric-blue/40 text-electric-blue-lt px-10 py-4 font-bold uppercase tracking-widest hover:border-electric-blue hover:text-white transition-all rounded-sm"
            >
              Free Consult
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { label: 'Projects Delivered', value: '200+' },
            { label: 'Years Experience', value: '12+' },
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Avg. ROI Growth', value: '3×' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-grey">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
