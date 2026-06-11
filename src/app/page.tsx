"use client";

import React from 'react';
import Hero from '@/components/home/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { 
  Code2, 
  Smartphone, 
  Search, 
  Palette, 
  ShoppingBag, 
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Zap,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: "Web Design",
    description: "High-performance, conversion-optimized websites built with the latest tech stack (Next.js, React, Tailwind).",
    href: "/services/web-design",
    icon: Code2
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
    href: "/services/mobile-app",
    icon: Smartphone
  },
  {
    title: "Digital Marketing",
    description: "Results-driven marketing strategies including SEO, PPC, and Social Media to dominate your market.",
    href: "/services/digital-marketing",
    icon: Search
  },
  {
    title: "Graphics Design",
    description: "Premium brand identity and visual assets that position your business as a leader in your industry.",
    href: "/services/graphics-design",
    icon: Palette
  },
  {
    title: "E-commerce",
    description: "Paystack/Flutterwave integrated stores with automated inventory and order management systems.",
    href: "/services/ecommerce",
    icon: ShoppingBag
  },
  {
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security audits, SSL implementation, and threat mitigation.",
    href: "/services/cybersecurity",
    icon: ShieldCheck
  }
];

const whyUs = [
  {
    title: "Nigerian Market Mastery",
    description: "12+ years of local expertise combined with international standards to build brands that resonate.",
    icon: Zap
  },
  {
    title: "End-to-End Solutions",
    description: "From strategy and design to development and marketing — we handle the full growth cycle.",
    icon: TrendingUp
  },
  {
    title: "Performance First",
    description: "We don't just build beautiful things; we build assets that deliver measurable ROI and scale.",
    icon: CheckCircle2
  },
  {
    title: "Strategic Partnership",
    description: "We act as your extended tech team, providing continuous support and strategic consulting.",
    icon: Users
  }
];

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      <Hero />

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading 
            label="Our Services" 
            title={<>Built for the <span className="text-electric-blue">Future</span></>}
            description="We combine technical excellence with marketing intelligence to deliver digital products that move the needle."
          />
          <Link 
            href="/services" 
            className="text-[10px] font-bold uppercase tracking-widest text-electric-blue hover:text-white border-b border-electric-blue/20 pb-2 mb-8"
          >
            Explore All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-midnight-mid py-32 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-[at_50%_50%] from-electric-blue/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                label="Why Hephzibah" 
                title={<>Strategy First. <br /> <span className="text-electric-blue">Results Always.</span></>}
                description="Our philosophy is simple: we prioritize business outcomes over vanity metrics. Every line of code and every pixel is designed to drive growth."
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
                {whyUs.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-electric-blue mb-4">
                      <item.icon size={28} />
                    </div>
                    <h4 className="text-white font-bold mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-grey text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-12 relative z-10"
              >
                <div className="text-electric-blue mb-8">
                   <div className="flex gap-1">
                     {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-electric-blue rounded-full" />)}
                   </div>
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight tracking-tight">
                  &quot;They didn&apos;t just build our website — they built our entire digital presence from the ground up. The ROI was visible within the first quarter.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-midnight-lt border border-electric-blue/30 rounded-full flex items-center justify-center font-bold text-electric-blue">TA</div>
                  <div>
                    <div className="text-white font-bold text-sm">Tunde Adeyemi</div>
                    <div className="text-grey text-[10px] uppercase tracking-widest">CEO — Adeyemi Logistics</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-electric-blue/20 -z-0" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-electric-blue/5 blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-electric-blue p-16 md:p-24 relative overflow-hidden"
        >
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Ready to Scale Your <br /> Digital Authority?
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
              Book a free strategy session today. Let&apos;s map out your growth trajectory with precision.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-midnight text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-midnight-lt transition-all hover:scale-105"
            >
              Get Started Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
