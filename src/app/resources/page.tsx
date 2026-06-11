import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Free Resources & Tools | Hephzibah Media",
  description: "Free marketing tools, calculators, and guides for Nigerian businesses.",
};

const resources = [
  { title: "Ad Budget Calculator", href: "/tools/budget", desc: "Plan your marketing spend effectively." },
  { title: "ROI Calculator", href: "/tools/roi", desc: "Calculate return on your ad investment." },
  { title: "Hashtag Generator", href: "/tools/hashtags", desc: "Boost social engagement." },
  { title: "Headline/CTA Generator", href: "/tools/headlines", desc: "Write persuasive ad copy." },
  { title: "AB Test Calculator", href: "/tools/ab-test", desc: "Validate your marketing experiments." },
  { title: "Email Subject Tester", href: "/tools/email-subject", desc: "Improve email open rates." },
];

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Free <em className="text-electric-blue-lt">Resources</em></h1>
        <p className="text-grey max-w-2xl mx-auto">Tools and guides to help you grow your business online.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Toolkit" title="Free Marketing Tools" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {resources.map((res) => (
            <Link key={res.title} href={res.href} className="glass p-8 hover:bg-midnight-mid transition-colors rounded-lg group">
              <h3 className="text-xl font-display text-white mb-4 group-hover:text-electric-blue">{res.title}</h3>
              <p className="text-grey text-sm">{res.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
