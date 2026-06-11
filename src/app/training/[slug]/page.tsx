import React from 'react';
import { notFound } from 'next/navigation';
import { trainingData } from '@/data/training';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle2, PlayCircle, Target, Calendar } from 'lucide-react';
import ThematicBackground from '@/components/immersive/ThematicBackground';

const themeMap: Record<string, 'web' | 'mobile' | 'marketing' | 'cyber' | 'design' | 'software'> = {
  'digital-marketing': 'marketing',
  'seo': 'marketing',
  'sales-funnel': 'marketing',
  'content-creation': 'marketing',
  'social-media': 'marketing',
  'web-design': 'web',
  'ui-ux': 'design',
  'coding': 'software',
  'video-editing': 'design',
  'ai-tools': 'software',
  'business-digitalization': 'software'
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const course = trainingData[params.slug];
  
  if (!course) {
    return {
      title: "Course Not Found | Hephzibah Media",
    };
  }

  return {
    title: course.seoMeta.title,
    description: course.seoMeta.description,
  };
}

export function generateStaticParams() {
  return Object.keys(trainingData).map((slug) => ({
    slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = trainingData[params.slug];

  if (!course) {
    notFound();
  }

  const themeType = themeMap[params.slug] || 'web';

  return (
    <div className="relative pt-32 pb-32 overflow-hidden">
      <ThematicBackground type={themeType} />
      
      {/* Hero Section */}
      <section className="relative z-10 px-6 mb-24 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-electric-blue text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
          <span className="w-8 h-px bg-electric-blue"></span>
          {course.eyebrow}
          <span className="w-8 h-px bg-electric-blue"></span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
          {course.title.split(' ').slice(0, -1).join(' ')} <em className="text-electric-blue not-italic">{course.title.split(' ').slice(-1)}</em>
        </h1>
        <p className="text-lg text-grey max-w-3xl mx-auto leading-relaxed mb-10">
          {course.heroDesc}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-widest text-grey font-bold">
          <span className="flex items-center gap-2"><Calendar size={16} className="text-electric-blue"/> {course.meta.duration}</span>
          <span className="flex items-center gap-2"><Target size={16} className="text-electric-blue"/> {course.meta.level}</span>
          <span className="flex items-center gap-2"><PlayCircle size={16} className="text-electric-blue"/> {course.meta.format}</span>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="bg-midnight-mid border-y border-white/5 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            centered
            label="What You'll Learn" 
            title={<>Complete <span className="text-electric-blue">Skill Stack</span></>} 
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            {course.modules.map((mod, index) => (
              <div key={index} className="glass p-6 text-center border border-white/5 hover:border-electric-blue/30 transition-colors">
                <h4 className="text-white font-bold mb-2 tracking-tight">{mod.title}</h4>
                <p className="text-grey text-xs uppercase tracking-wider">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <SectionHeading 
          label="Syllabus" 
          title={<>Course <span className="text-electric-blue">Curriculum</span></>} 
        />
        <div className="space-y-4 mt-12">
          {course.curriculum.map((item, index) => (
            <div key={index} className="bg-midnight-mid p-8 border-l-4 border-electric-blue flex flex-col md:flex-row gap-6 md:items-center">
              <div className="bg-electric-blue text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shrink-0 self-start md:self-center">
                {item.week}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-midnight-mid border-y border-white/5 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            label="Benefits" 
            title={<>Why Choose <span className="text-electric-blue">Hephzibah Academy</span></>} 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {course.features.map((feature, index) => (
              <div key={index} className="glass p-8 border border-white/5 hover:border-electric-blue/30 transition-colors">
                <h3 className="text-xl font-bold text-electric-blue mb-6">{feature.title}</h3>
                <ul className="space-y-4">
                  {feature.list.map((item, i) => (
                    <li key={i} className="text-grey text-sm flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-electric-blue mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6" id="pricing">
        <SectionHeading 
          centered
          label="Investment" 
          title={<>Choose Your <span className="text-electric-blue">Learning Path</span></>} 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {course.pricing.map((plan, index) => (
            <div 
              key={index} 
              className={`glass p-8 md:p-10 relative flex flex-col ${plan.popular ? 'border-electric-blue bg-electric-blue/5 transform md:-translate-y-4' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric-blue text-white text-[10px] uppercase tracking-widest font-bold py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl md:text-4xl font-bold text-electric-blue font-mono mb-8">
                {plan.price} <span className="text-sm text-grey font-sans font-normal">/course</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-cream text-sm flex items-start gap-3">
                    <span className="text-electric-blue font-bold mt-0.5 shrink-0">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://wa.me/2349077780156" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 font-bold uppercase tracking-widest transition-all ${
                  plan.popular 
                    ? 'bg-electric-blue text-white hover:bg-electric-blue-lt' 
                    : 'border border-white/20 text-white hover:border-electric-blue hover:text-electric-blue'
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
