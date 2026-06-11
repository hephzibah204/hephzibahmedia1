"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, Camera, Send, Share2, Music, Copy, Check, Info, Trash2, Zap } from 'lucide-react';

const hashtagDatabase = {
  fitness: ['#FitnessNigeria', '#GymLagos', '#FitFamNigeria', '#WorkoutTips', '#HealthAndWellnessNG', '#FitnessMotivation', '#NigeriaFit', '#FitLifeNigeria', '#ExerciseNG', '#WellnessNigeria', '#FitGirlNigeria', '#GymMotivation'],
  restaurant: ['#NigerianFood', '#FoodBlogNigeria', '#RestaurantLagos', '#NigerianCuisine', '#FoodieNigeria', '#LagosEats', '#NigerianRestaurant', '#FoodLoversNG', '#AbujaFood', '#YammyFood', '#FoodNigeria', '#RestaurantReview'],
  fashion: ['#NigerianFashion', '#FashionNigeria', '#AnkaraStyles', '#NigerianStyle', '#FashionLagos', '#AnkaraLover', '#NigeriaFashion', '#StyleNigeria', '#AfricanFashion', '#WearsNigerian', '#FashionBloggerNG', '#TrendAlert'],
  tech: ['#TechNigeria', '#StartupsNigeria', '#NigerianTech', '#InnovationNG', '#TechHubLagos', '#DigitalNigeria', '#TechNewsNG', '#NigeriaStartups', '#TechCommunity', '#CodingNigeria', '#ITNigeria', '#TechTrends'],
  business: ['#NigerianBusiness', '#BusinessNigeria', '#SMENigeria', '#EntrepreneurNigeria', '#BusinessGrowth', '#LagosBusiness', '#NigerianEntrepreneur', '#BusinessTipsNG', '#SMEGrowth', '#NigeriaBusiness', '#BusinessOwner', '#HustleHardNG'],
  education: ['#NigeriaEducation', '#LearningNigeria', '#StudyTips', '#NigerianStudents', '#EducationMatters', '#LagosStudents', '#OnlineLearningNG', '#ExamTips', '#NigeriaUniversities', '#ScholarshipNigeria', '#StudyAbroadNG', '#EducationNews'],
  beauty: ['#NigerianBeauty', '#BeautyNigeria', '#MakeupNigeria', '#SkincareNG', '#BeautyTips', '#LagosBeauty', '#NigerianBlogger', '#NaturalHairNG', '#BeautyProducts', '#GlowUpNigeria', '#HairCareNG', '#BeautyRoutine'],
  travel: ['#NigeriaTravel', '#TravelNigeria', '#ExploreNigeria', '#TourismNigeria', '#LagosTravel', '#NigeriaTourism', '#TravelBlogNG', '#WanderlustNigeria', '#AdventureNG', '#PlacesToVisitNG', '#NigeriaTravelDiaries', '#TravelNigeria']
};

const platformPrefixes = {
  instagram: { icon: <Camera size={16} />, min: 15, max: 30 },
  twitter: { icon: <Send size={16} />, min: 3, max: 5 },
  linkedin: { icon: <Share2 size={16} />, min: 5, max: 10 },
  tiktok: { icon: <Music size={16} />, min: 5, max: 10 }
};

const typeModifiers = {
  general: [],
  promo: ['#SaleAlert', '#LimitedOffer', '#DiscountAlert', '#PromoNG', '#BlackFridayNG', '#FlashSale'],
  education: ['#LearnOnTikTok', '#EducationTips', '#KnowledgeIsPower', '#LearnFromHome', '#SkillDevelopment'],
  event: ['#EventAlert', '#SaveTheDate', '#ComingSoon', '#EventNigeria', '#Announcement'],
  behind: ['#BehindTheScenes', '#BTS', '#DayInMyLife', '#WorkInProgress', '#RealLifeNG']
};

export default function HashtagGenerator() {
  const [topic, setTopic] = useState('business');
  const [platform, setPlatform] = useState('instagram');
  const [postType, setPostType] = useState('general');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generateHashtags = (e: React.FormEvent) => {
    e.preventDefault();
    const topicData = hashtagDatabase[topic as keyof typeof hashtagDatabase] || hashtagDatabase.business;
    const platformData = platformPrefixes[platform as keyof typeof platformPrefixes];
    
    // Shuffle and pick
    const count = Math.floor(Math.random() * (platformData.max - platformData.min + 1) + platformData.min);
    const shuffled = [...topicData].sort(() => 0.5 - Math.random());
    let results = shuffled.slice(0, Math.min(count, shuffled.length));
    
    // Add modifiers
    const modifiers = typeModifiers[postType as keyof typeof typeModifiers];
    if (modifiers.length > 0) {
      const addModifiers = Math.min(2, modifiers.length);
      const shuffledModifiers = [...modifiers].sort(() => 0.5 - Math.random());
      results = Array.from(new Set([...results, ...shuffledModifiers.slice(0, addModifiers)]));
    }

    setHashtags(results.slice(0, platformData.max));
  };

  const copyAll = () => {
    if (hashtags.length === 0) return;
    navigator.clipboard.writeText(hashtags.join(' '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clear = () => {
    setHashtags([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Input Side */}
      <div className="glass p-8 md:p-12 space-y-8 h-fit">
        <div className="flex items-center gap-4 mb-4">
           <div className="w-10 h-10 bg-electric-blue/10 flex items-center justify-center text-electric-blue">
             <Hash size={20} />
           </div>
           <h3 className="text-xl font-bold text-white tracking-tight">Generator Settings</h3>
        </div>

        <form onSubmit={generateHashtags} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Content Topic</label>
            <select 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
            >
              <option value="business">Business & Entrepreneurship</option>
              <option value="tech">Technology & Startups</option>
              <option value="fashion">Fashion & Style</option>
              <option value="fitness">Fitness & Health</option>
              <option value="restaurant">Food & Restaurants</option>
              <option value="education">Education & Learning</option>
              <option value="beauty">Beauty & Makeup</option>
              <option value="travel">Travel & Tourism</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Platform</label>
              <select 
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
              >
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter / X</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-grey font-bold">Post Type</label>
              <select 
                value={postType}
                onChange={(e) => setPostType(e.target.value)}
                className="w-full bg-midnight-lt border border-white/10 p-4 text-white focus:border-electric-blue/50 outline-none appearance-none"
              >
                <option value="general">General Post</option>
                <option value="promo">Promotion / Sale</option>
                <option value="education">Educational</option>
                <option value="event">Event / News</option>
                <option value="behind">Behind the Scenes</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full bg-white text-midnight py-5 font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-white transition-all flex items-center justify-center gap-3">
            <Zap size={16} /> Generate Hashtags
          </button>
        </form>
      </div>

      {/* Results Side */}
      <div className="space-y-6">
        <div className="bg-midnight-mid border border-white/5 p-8 md:p-10 min-h-[300px] flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 blur-3xl" />
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-electric-blue font-bold flex items-center gap-2">
              {platformPrefixes[platform as keyof typeof platformPrefixes].icon} Generated Set
            </h4>
            {hashtags.length > 0 && (
              <button onClick={clear} className="text-grey hover:text-red-500 transition-colors">
                <Trash2 size={16} />
              </button>
            )}
          </div>

          <div className="flex-1 relative z-10">
            <AnimatePresence mode="wait">
              {hashtags.length > 0 ? (
                <motion.div 
                  key="tags"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-midnight-lt/50 border border-white/5 p-6 font-mono text-sm leading-relaxed text-grey"
                >
                  {hashtags.join(' ')}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 pt-8"
                >
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-grey/20">
                    <Hash size={24} />
                  </div>
                  <p className="text-grey text-xs italic">Adjust settings and click generate</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {hashtags.length > 0 && (
            <button 
              onClick={copyAll}
              className={`mt-8 w-full py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${copied ? 'bg-green-500 text-white' : 'bg-electric-blue text-white hover:bg-white hover:text-midnight'}`}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied to Clipboard' : 'Copy All Hashtags'}
            </button>
          )}
        </div>

        <div className="bg-midnight-lt/30 border border-white/5 p-6 flex gap-4 items-start">
          <div className="mt-1 text-grey/40"><Info size={20} /></div>
          <div className="space-y-1">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">Platform Note</p>
            <p className="text-grey text-xs leading-relaxed">
              {platform === 'instagram' && "Instagram allows up to 30 hashtags. We recommend using 10-15 highly relevant ones for maximum reach."}
              {platform === 'twitter' && "Keep it lean. Twitter's algorithm favors 2-3 specific hashtags to avoid looking like spam."}
              {platform === 'linkedin' && "3 hashtags is the 'magic number' on LinkedIn. Use one broad, one niche, and one brand hashtag."}
              {platform === 'tiktok' && "TikTok SEO is real. Use a mix of trending sounds and niche hashtags (4-6) to hit the FYP."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
