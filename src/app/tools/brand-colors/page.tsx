import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import BrandColorGenerator from '@/components/tools/BrandColorGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brand Color Palette Generator | Visual Identity | Hephzibah Media",
  description: "Generate professional brand color palettes tailored for your Nigerian business. Get hex codes for your web, print, and branding projects.",
};

export default function BrandColorsPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Strategy" 
          title={<>Brand Color <span className="text-electric-blue">Generator</span></>}
          description="Create a cohesive visual identity with professional color palettes tailored for different business vibes."
        />

        <div className="mt-20">
          <BrandColorGenerator />
        </div>
      </div>
    </div>
  );
}
