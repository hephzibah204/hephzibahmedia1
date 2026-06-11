import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import EmailSubjectTester from '@/components/tools/EmailSubjectTester';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Email Subject Line Tester | Open Rate Optimizer | Hephzibah Media",
  description: "Test your email subject lines for open rate potential, mobile visibility, and spam triggers. Get instant feedback and optimization tips for your Nigerian email campaigns.",
};

export default function EmailSubjectTesterPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Email Marketing" 
          title={<>Email Subject <span className="text-electric-blue">Line Tester</span></>}
          description="Your subject line determines whether your email is opened or ignored. Use our analyzer to ensure your message lands in the inbox and gets the attention it deserves."
        />

        <div className="mt-20">
          <EmailSubjectTester />
        </div>

        <div className="mt-32 max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">The Science of Email Opens</h3>
          <p className="text-grey leading-relaxed">
            With the average professional receiving over 120 emails a day, your subject line has less than 
            3 seconds to capture attention. Our tester analyzes your copy against 20+ psychological 
            and technical benchmarks specifically tuned for the Nigerian professional landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Spam Guard</h4>
              <p className="text-grey text-sm leading-relaxed">We identify words and formatting patterns that trigger modern spam filters, helping you maintain high deliverability.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Mobile Optimized</h4>
              <p className="text-grey text-sm leading-relaxed">See exactly how your subject and preheader will look on smartphones, where 70% of Nigerian emails are first read.</p>
            </div>
            <div className="p-8 bg-midnight-mid border border-white/5 hover:border-electric-blue/30 transition-colors">
              <h4 className="text-white font-bold mb-3 tracking-tight text-lg">Psychological Triggers</h4>
              <p className="text-grey text-sm leading-relaxed">Our score accounts for urgency, curiosity, and personalization—the three pillars of high-performing email copy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
