"use client";

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, href, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-midnight-mid border border-white/5 p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      {/* Accent Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl group-hover:bg-electric-blue/20 transition-colors" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 flex items-center justify-center bg-midnight-lt border border-white/10 text-electric-blue mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-grey text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
        
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-electric-blue hover:text-white transition-colors"
        >
          Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Bottom Progress Line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-electric-blue w-0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}
