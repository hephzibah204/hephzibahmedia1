import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { trainingData } from '@/data/training';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Skills Training & Certification | Hephzibah Media Academy",
  description: "Learn Web Design, SEO, and Digital Marketing from industry experts. Practical, hands-on training that lands you jobs and clients.",
};

export default function TrainingPage() {
  const courses = Object.values(trainingData);

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          centered
          label="Hephzibah Academy" 
          title={<>Master Digital Skills That <span className="text-electric-blue">Actually Pay</span></>}
          description="Stop watching generic YouTube tutorials. Learn directly from an agency that builds high-ticket assets for top Nigerian brands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {courses.map((course) => (
            <Link 
              key={course.slug} 
              href={`/training/${course.slug}`}
              className="group glass border border-white/5 hover:border-electric-blue/40 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              <div className="bg-midnight-mid border-b border-electric-blue/20 p-8 relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl group-hover:bg-electric-blue/10 transition-colors" />
                 <span className="inline-block bg-electric-blue/10 text-electric-blue text-[10px] uppercase tracking-widest font-bold py-1 px-3 rounded-sm mb-4">
                   Enrolling Now
                 </span>
                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                   {course.title}
                 </h3>
                 <p className="text-grey text-sm line-clamp-2">
                   {course.heroDesc}
                 </p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex gap-4 mb-6 pb-6 border-b border-white/5">
                  <div className="text-xs text-grey font-bold uppercase tracking-widest flex items-center gap-2">
                    ⏱️ {course.meta.duration}
                  </div>
                  <div className="text-xs text-grey font-bold uppercase tracking-widest flex items-center gap-2">
                    💻 {course.meta.format.split(' ')[0]}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {course.modules.slice(0, 4).map((mod, i) => (
                    <li key={i} className="text-sm text-cream flex items-start gap-2">
                      <span className="text-gold mt-1 text-xs">✦</span>
                      <span>{mod.title}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto w-full border border-white/10 text-white text-center py-4 text-xs font-bold uppercase tracking-widest group-hover:bg-electric-blue group-hover:border-electric-blue transition-all">
                  View Course Details
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 p-12 bg-midnight-mid border border-white/5 text-center max-w-4xl mx-auto">
          <p className="text-electric-blue text-[10px] uppercase tracking-widest font-bold mb-4">The Challenge</p>
          <h3 className="text-3xl font-bold text-white mb-6">Most Tech Courses Teach Theory.<br/>We Teach <span className="text-electric-blue italic">Execution.</span></h3>
          <p className="text-grey leading-relaxed mb-8">
            The Nigerian tech space is full of &quot;gurus&quot; selling outdated courses. When you graduate, you still don&apos;t know how to land a client or deliver a professional project. We teach you the exact frameworks and code we use to deliver high-ticket projects to our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
