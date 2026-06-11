"use client";

import React from 'react';
import { servicesData } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          label="Our Services" 
          title={<>Solutions Engineered for <span className="text-electric-blue">Performance</span></>}
          description="We provide the technical foundation and marketing intelligence required for modern business growth in Nigeria."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 mt-16">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={service.slug}
              title={service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              description={service.heroDesc.split('.')[0] + '.'}
              href={`/services/${service.slug}`}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
