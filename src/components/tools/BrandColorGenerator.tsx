"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Palette } from 'lucide-react';

interface Color {
  name: string;
  hex: string;
}

interface Palette {
  name: string;
  colors: Color[];
}

const palettes: Record<string, Palette> = {
  corporate: { name: 'Corporate Trust', colors: [
    { name: 'Primary Navy', hex: '#0A0F2C' },
    { name: 'Secondary Blue', hex: '#1E3A5F' },
    { name: 'Accent Gold', hex: '#C9A84C' },
    { name: 'Light Grey', hex: '#E8E8E8' },
    { name: 'White', hex: '#FFFFFF' }
  ]},
  creative: { name: 'Creative Bold', colors: [
    { name: 'Primary Purple', hex: '#6B46C1' },
    { name: 'Secondary Pink', hex: '#EC4899' },
    { name: 'Accent Yellow', hex: '#F59E0B' },
    { name: 'Light Lavender', hex: '#E9D5FF' },
    { name: 'White', hex: '#FFFFFF' }
  ]},
  luxury: { name: 'Luxury Premium', colors: [
    { name: 'Primary Black', hex: '#1A1A1A' },
    { name: 'Secondary Gold', hex: '#C9A84C' },
    { name: 'Accent Cream', hex: '#F5E6C8' },
    { name: 'Dark Grey', hex: '#333333' },
    { name: 'White', hex: '#FFFFFF' }
  ]},
  friendly: { name: 'Startup Friendly', colors: [
    { name: 'Primary Orange', hex: '#F97316' },
    { name: 'Secondary Teal', hex: '#14B8A6' },
    { name: 'Accent Yellow', hex: '#FBBF24' },
    { name: 'Light Orange', hex: '#FFEDD5' },
    { name: 'White', hex: '#FFFFFF' }
  ]},
  bold: { name: 'Bold Energy', colors: [
    { name: 'Primary Red', hex: '#DC2626' },
    { name: 'Secondary Black', hex: '#18181B' },
    { name: 'Accent White', hex: '#FAFAFA' },
    { name: 'Dark Red', hex: '#991B1B' },
    { name: 'Grey', hex: '#71717A' }
  ]},
  minimal: { name: 'Minimal Clean', colors: [
    { name: 'Primary Charcoal', hex: '#27272A' },
    { name: 'Secondary Light Grey', hex: '#A1A1AA' },
    { name: 'Accent Black', hex: '#18181B' },
    { name: 'Off White', hex: '#FAFAFA' },
    { name: 'White', hex: '#FFFFFF' }
  ]}
};

export default function BrandColorGenerator() {
  const [vibe, setVibe] = useState('corporate');
  const [palette, setPalette] = useState<Palette | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const generatePalette = (e: React.FormEvent) => {
    e.preventDefault();
    setPalette(palettes[vibe]);
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="glass p-12 space-y-8">
        <form onSubmit={generatePalette} className="flex flex-col md:flex-row gap-4">
          <select
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            className="flex-1 bg-midnight-lt border border-white/10 py-4 px-6 text-white outline-none focus:border-electric-blue/50"
          >
            {Object.keys(palettes).map(v => (
              <option key={v} value={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</option>
            ))}
          </select>
          <button type="submit" className="bg-white text-midnight px-8 py-4 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all">
            Generate
          </button>
        </form>
      </div>

      <AnimatePresence>
        {palette && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white text-center">{palette.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {palette.colors.map((color) => (
                <div key={color.hex} className="glass p-2">
                  <div 
                    className="h-24 w-full mb-4"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center">
                    <div className="text-xs text-grey mb-1">{color.name}</div>
                    <button 
                      onClick={() => copyHex(color.hex)}
                      className="text-white font-mono text-sm hover:text-electric-blue flex items-center justify-center gap-2 w-full"
                    >
                      {color.hex}
                      {copiedHex === color.hex ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
