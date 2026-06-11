import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import CustomerAvatarBuilder from '@/components/tools/CustomerAvatarBuilder';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer Avatar Builder | Target Ideal Customer | Hephzibah Media",
  description: "Create detailed customer avatars for your Nigerian business. Define demographics, pain points, and buying behavior to tailor your marketing message.",
};

export default function CustomerAvatarPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Strategy" 
          title={<>Customer <span className="text-electric-blue">Avatar Builder</span></>}
          description="Create detailed profiles of your ideal customers to ensure your marketing messaging speaks directly to their needs."
        />

        <div className="mt-20">
          <CustomerAvatarBuilder />
        </div>
      </div>
    </div>
  );
}
