import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ROICalculator from '@/components/tools/ROICalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ROI Calculator | Digital Marketing Return on Investment | Hephzibah Media",
  description: "Calculate the expected return on investment for your digital marketing campaigns. Make data-driven decisions for your business growth in Nigeria.",
};

export default function ROICalcPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Free Growth Tool" 
          title={<>Marketing <span className="text-electric-blue">ROI Calculator</span></>}
          description="Quantify your growth potential. Enter your current metrics to see how a strategic digital campaign can transform your revenue."
        />

        <div className="mt-20">
          <ROICalculator />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">How it works</h3>
          <p className="text-grey leading-relaxed">
            Our calculator uses proprietary benchmarks from the Nigerian market to estimate returns. 
            We factor in average industry conversion rates, typical traffic growth from white-hat SEO, 
            and optimized PPC performance to give you a realistic projection of your net profit potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="p-6 bg-midnight-mid border border-white/5">
              <div className="text-electric-blue font-bold text-xl mb-2">01</div>
              <div className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Input Metrics</div>
              <p className="text-grey text-xs">Enter your current revenue and desired budget.</p>
            </div>
            <div className="p-6 bg-midnight-mid border border-white/5">
              <div className="text-electric-blue font-bold text-xl mb-2">02</div>
              <div className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Analyze ROI</div>
              <p className="text-grey text-xs">Review your projected net profit and CPA.</p>
            </div>
            <div className="p-6 bg-midnight-mid border border-white/5">
              <div className="text-electric-blue font-bold text-xl mb-2">03</div>
              <div className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Scale Up</div>
              <p className="text-grey text-xs">Book a strategy call to turn these projections into reality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
