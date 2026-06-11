import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import ThematicBackground from '@/components/immersive/ThematicBackground';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const themeMap: Record<string, 'web' | 'mobile' | 'marketing' | 'cyber' | 'design' | 'software'> = {
  'web-design': 'web',
  'mobile-app': 'mobile',
  'digital-marketing': 'marketing',
  'cybersecurity': 'cyber',
  'ecommerce': 'web',
  'graphics-design': 'design',
  'custom-software': 'software',
  'wordpress': 'web',
  'printing': 'design',
  'large-format': 'design',
  't-shirt-printing': 'design',
  'growth-marketing': 'marketing',
  'landing-pages': 'marketing',
  'seo': 'marketing'
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const themeType = themeMap[slug] || 'web';

  return (
    <div className="pt-24 relative overflow-hidden">
      <ThematicBackground type={themeType} />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-radial-[at_50%_0%] from-electric-blue/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-midnight-mid border border-white/10 rounded-full mb-8">
            <Icon size={16} className="text-electric-blue" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-grey">{service.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight max-w-4xl mx-auto">
            {service.title}
          </h1>
          <p className="text-grey text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {service.heroDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-white/10">
            {service.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-grey">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-32 bg-midnight-mid">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            label="The Challenge" 
            title="Stop Settling for Weak Results"
            description="Many Nigerian businesses struggle to gain traction online due to outdated strategies and poor execution. Recognize these bottlenecks?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-white/5 border border-white/5">
            {service.problems.map((prob) => (
              <div key={prob.title} className="bg-midnight p-8 hover:bg-midnight-lt transition-colors">
                <h3 className="text-white font-bold mb-4 tracking-tight">{prob.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-[at_50%_50%] from-electric-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                label="Our Approach" 
                title="Strategy Built for the Local Market"
                description="We don't do generic. Our methodology is refined for the unique behavior of Nigerian consumers and the local competitive landscape."
              />
              <ul className="space-y-6 mt-12">
                {service.approach.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 text-electric-blue group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-grey text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-12 lg:p-16">
              <h3 className="text-2xl font-bold text-white mb-8">What You Get</h3>
              <div className="space-y-10">
                {service.deliverables.map((del) => (
                  <div key={del.title}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{del.icon}</span>
                      <h4 className="text-white font-bold tracking-tight">{del.title}</h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-12">
                      {del.list.map((li, idx) => (
                        <li key={idx} className="text-grey text-xs flex items-center gap-2">
                          <span className="w-1 h-1 bg-electric-blue rounded-full" /> {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-midnight-mid">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading 
            centered
            label="Investment" 
            title="Transparent Pricing"
            description="Choose the package that aligns with your growth goals. Flexible milestones available."
          />
          <div className={`grid grid-cols-1 gap-8 mt-16 mx-auto ${
            service.pricing.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4 max-w-7xl' : 'md:grid-cols-3 max-w-5xl'
          }`}>
            {service.pricing.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative p-10 border transition-all duration-500 ${plan.popular ? 'bg-midnight border-electric-blue shadow-2xl scale-105 z-10' : 'bg-midnight border-white/5 hover:border-white/20'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-blue text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-white font-bold mb-2">{plan.name}</h3>
                <p className="text-grey text-xs mb-6 h-8">{plan.desc}</p>
                <div className="text-4xl font-bold text-white mb-8 font-mono">{plan.price}</div>
                <ul className="text-left space-y-4 mb-10">
                  {plan.features.map((feat) => (
                    <li key={feat} className="text-grey text-sm flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-electric-blue" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block w-full py-4 font-bold uppercase tracking-widest text-xs transition-all ${plan.popular ? 'bg-electric-blue text-white hover:bg-electric-blue-lt' : 'border border-electric-blue/40 text-electric-blue hover:bg-electric-blue/10'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading 
            centered
            label="FAQ" 
            title="Common Questions"
          />
          <div className="space-y-6 mt-12">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="glass p-8 group hover:border-electric-blue/40 transition-colors">
                <h4 className="text-white font-bold mb-4 flex items-center justify-between">
                  {faq.q}
                  <span className="text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRight size={16} /></span>
                </h4>
                <p className="text-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-electric-blue p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">Ready to See Real Growth?</h2>
            <p className="text-white/80 text-lg">Book a free audit and let&apos;s identify your winning strategy.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-midnight text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-midnight-lt transition-all whitespace-nowrap">
              Get Started Now
            </Link>
            <a href="https://wa.me/2349077780156" target="_blank" rel="noopener" className="bg-white/10 text-white border border-white/20 px-10 py-5 font-bold uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3">
              <MessageSquare size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
