import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-midnight-mid border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 overflow-hidden">
                <Image 
                  src="/Hephzibah Media Logo.png" 
                  alt="Hephzibah Media Logo" 
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-xl font-bold text-white font-display">
                Hephzibah <span className="text-electric-blue">Media</span>
              </span>
            </Link>
            <p className="text-grey text-sm leading-relaxed max-w-xs">
              Nigeria&apos;s premium Digital Marketing & Tech Agency. Engineered for growth, built for the future.
            </p>
          </div>
          
          <div>
            <h5 className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-6">Services</h5>
            <ul className="space-y-4">
              <li><Link href="/services/web-design" className="text-grey hover:text-white transition-colors text-sm">Web Design</Link></li>
              <li><Link href="/services/seo" className="text-grey hover:text-white transition-colors text-sm">SEO & Search</Link></li>
              <li><Link href="/services/digital-marketing" className="text-grey hover:text-white transition-colors text-sm">Digital Marketing</Link></li>
              <li><Link href="/services/mobile-app" className="text-grey hover:text-white transition-colors text-sm">App Development</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-grey hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/portfolio" className="text-grey hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/blog" className="text-grey hover:text-white transition-colors text-sm">Insights Blog</Link></li>
              <li><Link href="/contact" className="text-grey hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-electric-blue uppercase tracking-widest mb-6">Connect</h5>
            <ul className="space-y-4">
              <li className="text-grey text-sm">Ogere, Ogun State, Nigeria</li>
              <li><a href="https://wa.me/2349077780156" className="text-grey hover:text-white transition-colors text-sm">+234 907 778 0156</a></li>
              <li className="text-grey text-sm">info@hephzibahmedia.com.ng</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-grey tracking-wider uppercase">
          <p>© 2026 Hephzibah Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
