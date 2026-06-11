import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Target, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';
import ThematicBackground from '@/components/immersive/ThematicBackground';

export const metadata: Metadata = {
  title: "About Hephzibah Media | Nigeria's Premium Digital Agency",
  description: "Learn about Hephzibah Media, Nigeria's full-service digital marketing, tech, and print agency based in Ogere, Ogun State.",
};

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-32 space-y-32 overflow-hidden">
      <ThematicBackground type="web" />
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] uppercase tracking-[0.4em] text-electric-blue font-bold mb-6">Our Mission</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-8">
            Building Brands That <span className="text-electric-blue">Dominate</span>
          </h1>
          <p className="text-grey text-lg md:text-xl leading-relaxed">
            Hephzibah Media is Nigeria&apos;s premium digital marketing, tech, and print agency. 
            We combine local market fluency with international technical standards to deliver 
            growth-oriented digital ecosystems.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-midnight-mid/80 backdrop-blur-sm py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Years Experience", value: "12+" },
            { label: "States Served", value: "36" },
            { label: "Client Retention", value: "98%" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-electric-blue mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-grey font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Our Values" 
          title={<>What We <span className="text-electric-blue">Stand For</span></>}
          description="We operate with a core set of principles that ensure our clients receive the highest level of service and results."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-16">
          {[
            {
              title: "Strategy Before Execution",
              description: "We never touch a keyboard without a clear brief, agreed KPIs, and a strategy both parties believe in.",
              icon: Target
            },
            {
              title: "Nigerian Market Fluency",
              description: "We understand 3G constraints, WhatsApp culture, payment friction, and what makes Nigerians trust a brand online.",
              icon: MessageSquare
            },
            {
              title: "Radical Transparency",
              description: "Monthly reports, open access to analytics, and honest conversations when something isn't working.",
              icon: Zap
            },
            {
              title: "Ownership Mindset",
              description: "Your success is our portfolio. We treat every project as if our name is on the outcome — because it is.",
              icon: ShieldCheck
            }
          ].map((value) => (
            <div key={value.title} className="glass p-12 border border-white/5 hover:border-electric-blue/30 transition-all">
              <div className="text-electric-blue mb-6">
                <value.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{value.title}</h3>
              <p className="text-grey leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
