"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navData = [
  {
    title: "Services",
    href: "#services",
    mega: [
      {
        title: "Web & Apps",
        links: [
          { name: "Web Design", href: "/services/web-design" },
          { name: "E-commerce", href: "/services/ecommerce" },
          { name: "Mobile Apps", href: "/services/mobile-app" },
          { name: "WordPress", href: "/services/wordpress" },
          { name: "Custom Software", href: "/services/custom-software" },
        ]
      },
      {
        title: "Marketing & SEO",
        links: [
          { name: "SEO", href: "/services/seo" },
          { name: "Digital Marketing", href: "/services/digital-marketing" },
          { name: "Growth Marketing", href: "/services/growth-marketing" },
          { name: "Landing Pages", href: "/services/landing-pages" },
        ]
      },
      {
        title: "Creative & Print",
        links: [
          { name: "Graphics Design", href: "/services/graphics-design" },
          { name: "Printing Services", href: "/services/printing" },
          { name: "Large Format", href: "/services/large-format" },
          { name: "T-Shirt Printing", href: "/services/t-shirt-printing" },
        ]
      },
      {
        title: "Specialized",
        links: [
          { name: "Cybersecurity", href: "/services/cybersecurity" },
        ]
      }
    ]
  },
  {
    title: "Training",
    href: "/training",
    mega: [
      {
        title: "Tech & Design",
        links: [
          { name: "Web Design", href: "/training/web-design" },
          { name: "UI/UX", href: "/training/ui-ux" },
          { name: "Coding", href: "/training/coding" },
          { name: "Graphics Design", href: "/training/graphics-design" },
        ]
      },
      {
        title: "Marketing & Growth",
        links: [
          { name: "Digital Marketing", href: "/training/digital-marketing" },
          { name: "SEO", href: "/training/seo" },
          { name: "Sales Funnel", href: "/training/sales-funnel" },
          { name: "Content Creation", href: "/training/content-creation" },
          { name: "Social Media", href: "/training/social-media" },
        ]
      },
      {
        title: "Strategy",
        links: [
          { name: "Video Editing", href: "/training/video-editing" },
          { name: "AI Tools", href: "/training/ai-tools" },
          { name: "Business Digitalization", href: "/training/business-digitalization" },
        ]
      }
    ]
  },
  {
    title: "Resources",
    href: "/resources",
    mega: [
      {
        title: "Calculators",
        links: [
          { name: "Ad Budget", href: "/tools/budget" },
          { name: "ROI Calculator", href: "/tools/roi" },
        ]
      },
      {
        title: "Generators",
        links: [
          { name: "Hashtag", href: "/tools/hashtags" },
          { name: "Headline/CTA", href: "/tools/headlines" },
          { name: "AB Test", href: "/tools/ab-test" },
          { name: "Email Subject", href: "/tools/email-subject-tester" },
        ]
      },
      {
        title: "Strategy",
        links: [
          { name: "Keyword Research", href: "/tools/keywords" },
          { name: "Content Calendar", href: "/tools/content-calendar" },
          { name: "Customer Avatar", href: "/tools/customer-avatar" },
        ]
      },
      {
        title: "Learning",
        links: [
          { name: "Blog", href: "/blog" },
          { name: "Free Resources", href: "/resources" },
        ]
      }
    ]
  },
  {
    title: "Company",
    href: "/portfolio",
    mega: [
      {
        title: "Our Work",
        links: [
          { name: "Case Studies", href: "/case-studies" },
          { name: "Portfolio", href: "/portfolio" },
        ]
      },
      {
        title: "About",
        links: [
          { name: "About Us", href: "/about" },
          { name: "FAQ", href: "/faq" },
          { name: "Service Areas", href: "/service-areas" },
        ]
      },
      {
        title: "Connect",
        links: [
          { name: "Contact", href: "/contact" },
        ]
      }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden">
            <Image 
              src="/Hephzibah Media Logo.png" 
              alt="Hephzibah Media Logo" 
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link 
            href="/immersive"
            className="text-[10px] font-bold text-electric-blue border border-electric-blue/30 px-3 py-1.5 rounded-full hover:bg-electric-blue hover:text-white transition-all animate-pulse"
          >
            Immersive Universe
          </Link>
          {navData.map((item) => (
            <div 
              key={item.title} 
              className="relative group"
              onMouseEnter={() => setActiveMega(item.title)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link 
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-electric-blue transition-colors flex items-center gap-1 uppercase tracking-wider"
              >
                {item.title}
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeMega === item.title ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {activeMega === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] mt-4 glass p-8 grid grid-cols-4 gap-8 shadow-2xl rounded-sm"
                  >
                    {item.mega.map((col) => (
                      <div key={col.title}>
                        <h3 className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-4 border-b border-electric-blue/20 pb-2">
                          {col.title}
                        </h3>
                        <ul className="space-y-2">
                          {col.links.map((link) => (
                            <li key={link.name}>
                              <Link 
                                href={link.href}
                                className="text-sm text-grey hover:text-white transition-colors"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link 
            href="/contact"
            className="bg-electric-blue text-white px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-electric-blue-lt transition-colors rounded-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-midnight-mid border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navData.map((item) => (
                <div key={item.title}>
                  <h3 className="text-electric-blue font-bold uppercase text-xs tracking-widest mb-4">{item.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {item.mega.flatMap(col => col.links).map((link) => (
                      <Link 
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm text-grey hover:text-white"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-electric-blue text-white py-4 font-bold uppercase tracking-wider"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
