"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: centered ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}
      >
        {!centered && <span className="w-8 h-[1px] bg-electric-blue" />}
        <span className="text-[10px] uppercase tracking-[0.3em] text-electric-blue font-bold">{label}</span>
        {centered && <span className="w-8 h-[1px] bg-electric-blue ml-4" />}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-grey text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
