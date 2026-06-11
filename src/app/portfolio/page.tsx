import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ThematicBackground from '@/components/immersive/ThematicBackground';

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Hephzibah Media",
  description: "Hephzibah Media portfolio. Web design, SEO, print, and software projects delivered for Nigerian businesses.",
};

export default function PortfolioPage() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <ThematicBackground type="marketing" />
      
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
        <p className="text-electric-blue uppercase tracking-widest text-sm mb-4 font-bold">Our Work</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Projects That <em className="text-electric-blue-lt">Move Needles</em></h1>
        <p className="text-grey max-w-2xl mx-auto text-lg">A curated selection of branding, web, marketing, and print projects delivered for Nigerian businesses across multiple industries.</p>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeading label="Showcase" title="Selected Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { category: "Brand Identity / Print", title: "Logistics Brand Identity", desc: "Complete brand identity – logo, stationery, and vehicle livery – for an Abuja-based freight company." },
            { category: "E-commerce / Web", title: "E-commerce Store Launch", desc: "WooCommerce store with Paystack integration for a Lagos fashion brand. 340% increase in online sales in 90 days." },
            { category: "SEO / Digital Marketing", title: "Google SEO Domination", desc: "Took a Lekki real estate agency from page 4 to position 2 for 'real estate Lagos' in 6 months." },
            { category: "Large Format / Print", title: "Corporate Print Campaign", desc: "Annual report, brochure, and trade show booth graphics for a Port Harcourt oil services firm." },
            { category: "Custom Software / EdTech", title: "SaaS Platform Build", desc: "Custom multi-tenant SaaS platform for school report card management deployed across 40+ Nigerian schools." },
            { category: "Fintech / Web Dev", title: "Fintech KYC Platform", desc: "NIN and BVN validation infrastructure for a Nigerian fintech startup. Processes 5,000+ verifications daily." },
          ].map((project) => (
            <div key={project.title} className="glass p-8 hover:bg-midnight-mid/80 hover:border-electric-blue/30 transition-all group">
              <p className="text-electric-blue text-xs uppercase tracking-widest mb-4 font-bold">{project.category}</p>
              <h3 className="text-xl font-display text-white mb-4 group-hover:text-electric-blue transition-colors">{project.title}</h3>
              <p className="text-grey text-sm leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
