import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: "Service Areas | Hephzibah Media",
  description: "We provide digital marketing, tech, and print services across Nigeria.",
};

const areas = [
  "Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Abeokuta", "Ogere", "Ikeja", "Lekki", "Victoria Island"
];

export default function ServiceAreasPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Service <em className="text-electric-blue-lt">Areas</em></h1>
        <p className="text-grey max-w-2xl mx-auto">We proudly serve businesses across Nigeria, providing premium digital solutions wherever you are.</p>
      </section>

      <section className="max-w-4xl mx-auto px-6">
        <div className="glass p-12 rounded-lg">
          <SectionHeading label="Locations" title="Where We Operate" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {areas.map((area) => (
              <div key={area} className="text-center p-4 bg-midnight rounded-sm border border-electric-blue/10">
                <span className="text-white font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
