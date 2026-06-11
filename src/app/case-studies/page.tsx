import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: "Case Studies | Success Stories | Hephzibah Media",
  description: "See how we helped Nigerian businesses grow with digital marketing, web design, and SEO. Real results, real numbers.",
};

const studies = [
  { client: "RetailPlus Nigeria", title: "3x Revenue in 60 Days", cat: "E-commerce", desc: "Complete e-commerce overhaul with SEO, UX improvements, and WhatsApp integration for a Lagos-based retailer.", stats: [{ val: "+210%", label: "Revenue" }, { val: "+156%", label: "Traffic" }, { val: "45%", label: "Conv. Rate" }] },
  { client: "GreenLife Hospital", title: "First Page Google Ranking", cat: "Healthcare", desc: "Local SEO campaign that took a Port Harcourt hospital from page 4 to #1 for key medical keywords.", stats: [{ val: "#1", label: "Google Rank" }, { val: "+340%", label: "Appointments" }, { val: "89%", label: "Local Visits" }] },
  { client: "Taste of Nigeria", title: "Brand Launch & Social Growth", cat: "Food & Beverage", desc: "Complete brand identity and social media campaign for a new restaurant in Abuja.", stats: [{ val: "18K", label: "Followers" }, { val: "+500%", label: "Engagement" }, { val: "70%", label: "Repeat" }] },
  { client: "FutureTech Academy", title: "Lead Gen with Content", cat: "Education", desc: "Content marketing and email funnel that generated 500+ enrollments for a tech bootcamp.", stats: [{ val: "500+", label: "Enrollments" }, { val: "₦12M", label: "Revenue" }, { val: "32%", label: "Conv. Rate" }] },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <p className="text-electric-blue uppercase tracking-widest text-sm mb-4">Results That Speak</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Case <em className="text-electric-blue-lt">Studies</em></h1>
        <p className="text-grey max-w-2xl mx-auto">Real results from real Nigerian businesses. See how we helped them grow their traffic, leads, and revenue.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <SectionHeading label="Success Stories" title="Real Results" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {studies.map((study) => (
            <div key={study.client} className="glass p-8 rounded-lg">
              <span className="bg-electric-blue text-white text-xs px-3 py-1 rounded-sm uppercase tracking-widest">{study.cat}</span>
              <p className="text-electric-blue mt-4 mb-2 uppercase text-xs">{study.client}</p>
              <h3 className="text-2xl font-display text-white mb-4">{study.title}</h3>
              <p className="text-grey text-sm mb-6">{study.desc}</p>
              <div className="grid grid-cols-3 gap-4 bg-midnight p-4 rounded-sm">
                {study.stats.map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-electric-blue-lt font-display text-xl font-bold">{s.val}</div>
                    <div className="text-grey text-[10px] uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
