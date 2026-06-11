import { 
  Code2, 
  Search, 
  TrendingUp, 
  Palette,
  Target,
  PenTool,
  Share2,
  Video,
  Bot,
  Briefcase
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface TrainingData {
  slug: string;
  title: string;
  eyebrow: string;
  heroDesc: string;
  icon: LucideIcon;
  meta: {
    duration: string;
    level: string;
    format: string;
    certificate: boolean;
  };
  modules: { title: string; desc: string }[];
  curriculum: { week: string; title: string; desc: string }[];
  features: { title: string; list: string[] }[];
  pricing: { 
    name: string; 
    price: string; 
    features: string[]; 
    popular?: boolean;
  }[];
  seoMeta: {
    title: string;
    description: string;
  };
}

export const trainingData: Record<string, TrainingData> = {
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Become a Digital Marketing Expert",
    eyebrow: "Digital Marketing Training Nigeria",
    heroDesc: "Master full-funnel digital marketing in 12 weeks. Learn SEO, PPC, social media, email marketing, and analytics. Run real campaigns and graduate job-ready.",
    icon: TrendingUp,
    meta: {
      duration: "12 Weeks",
      level: "Intermediate",
      format: "Physical & Online",
      certificate: true
    },
    modules: [
      { title: "SEO", desc: "Search Engine Optimization" },
      { title: "PPC / Ads", desc: "Google & Facebook Ads" },
      { title: "Social Media", desc: "Organic & Paid Strategies" },
      { title: "Email Marketing", desc: "Automation & Campaigns" },
      { title: "Analytics", desc: "Data-Driven Decisions" },
      { title: "Content", desc: "Strategy & Creation" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "Digital Marketing Fundamentals", desc: "Marketing funnel, customer journey, channels overview, and strategy building." },
      { week: "Week 3-4", title: "SEO Mastery", desc: "Technical SEO, on-page optimization, content strategy, and local SEO for Nigeria." },
      { week: "Week 5-6", title: "PPC & Paid Advertising", desc: "Google Ads, Facebook Ads Manager, campaign optimization, and budget management." },
      { week: "Week 7-8", title: "Social Media Marketing", desc: "Content strategy, community management, influencer marketing, and paid social." },
      { week: "Week 9-10", title: "Email Marketing & Automation", desc: "List building, drip campaigns, automation flows, and measurable results." },
      { week: "Week 11-12", title: "Analytics & Real Projects", desc: "Google Analytics, campaign measurement, and run a complete marketing campaign." }
    ],
    features: [
      { title: "Real Campaigns", list: ["Run live ad campaigns", "Manage real budgets", "Track actual results", "Build case studies"] },
      { title: "Certifications", list: ["Google Ads certified", "Facebook Blueprint", "Google Analytics", "Hephzibah Academy"] },
      { title: "Career Support", list: ["Portfolio development", "Interview preparation", "Rate guidance", "Job referrals"] }
    ],
    pricing: [
      { name: "Online Self-Paced", price: "₦120,000", features: ["Full video course access", "Downloadable resources", "Certificate of completion", "6-month support"] },
      { name: "Live Online Class", price: "₦200,000", features: ["Live interactive sessions", "Real-time Q&A", "Certificate of completion", "12-month support", "Campaign project"], popular: true },
      { name: "Physical Training", price: "₦350,000", features: ["In-person classes", "Hands-on ad budgets", "Certificate of completion", "12-month support", "Job placement"] }
    ],
    seoMeta: {
      title: "Digital Marketing Training Nigeria – SEO, PPC & Social Media Course",
      description: "Master digital marketing with our 12-week course. Learn SEO, PPC, social media, email marketing, and analytics. Run real campaigns and get certified."
    }
  },
  "web-design": {
    slug: "web-design",
    title: "Build Professional Websites From Scratch",
    eyebrow: "Web Design Training Nigeria",
    heroDesc: "Master HTML, CSS, and responsive design in our 8-week intensive program. Build real client-ready websites and launch your career as a professional web designer.",
    icon: Code2,
    meta: {
      duration: "8 Weeks",
      level: "Beginner Friendly",
      format: "Physical & Online",
      certificate: true
    },
    modules: [
      { title: "HTML Fundamentals", desc: "Structure & Semantic Tags" },
      { title: "CSS Foundations", desc: "Styling & Layouts" },
      { title: "Responsive Design", desc: "Mobile-First Approach" },
      { title: "CSS Grid & Flexbox", desc: "Modern Layouts" },
      { title: "UI Principles", desc: "Design Systems" },
      { title: "Web Deployment", desc: "Hosting & Portfolios" }
    ],
    curriculum: [
      { week: "Week 1", title: "HTML Fundamentals", desc: "Structure, semantic tags, forms, tables, and best practices for accessible markup." },
      { week: "Week 2", title: "CSS Foundations", desc: "Selectors, specificity, box model, typography, colors, and layout fundamentals." },
      { week: "Week 3", title: "Flexbox & CSS Grid", desc: "Modern layout techniques for responsive, flexible web designs." },
      { week: "Week 4", title: "Responsive Design", desc: "Mobile-first approach, media queries, and cross-device optimization." },
      { week: "Week 5", title: "CSS Animations & Transitions", desc: "Adding interactivity and polish with CSS animations and keyframes." },
      { week: "Week 6", title: "Design Systems & UI Principles", desc: "Color theory, typography, spacing, and building consistent designs." },
      { week: "Week 7", title: "Building Real Projects", desc: "Apply everything learned to build a complete portfolio website." },
      { week: "Week 8", title: "Deployment & Portfolio", desc: "Deploy to live servers, optimize for performance, and present your work." }
    ],
    features: [
      { title: "Real-World Projects", list: ["Build 5 portfolio-ready websites", "Work on actual client briefs", "Create responsive landing pages", "Design a complete brand website"] },
      { title: "Expert Mentorship", list: ["Small class sizes (max 15)", "1-on-1 code reviews", "Personal portfolio feedback", "Career guidance sessions"] },
      { title: "Career Support", list: ["Resume and portfolio review", "Interview preparation", "Freelance rate guidance", "Job referral network"] }
    ],
    pricing: [
      { name: "Online Self-Paced", price: "₦85,000", features: ["Full video course access", "Downloadable resources", "Certificate of completion", "6-month mentor support", "Community access"] },
      { name: "Live Online Class", price: "₦150,000", features: ["Live interactive sessions", "Real-time Q&A", "Certificate of completion", "12-month mentor support", "Community access", "Project feedback"], popular: true },
      { name: "Physical Training", price: "₦250,000", features: ["In-person classes in Ogere", "Hands-on lab sessions", "Certificate of completion", "12-month mentor support", "Networking events", "Job placement assistance"] }
    ],
    seoMeta: {
      title: "Web Design Training Nigeria – HTML, CSS & Responsive Design Course",
      description: "Master web design with our 8-week intensive course. Learn HTML, CSS, responsive design, and modern UI principles. Build real websites and graduate job-ready."
    }
  },
  "seo": {
    slug: "seo",
    title: "Master Search Engine Optimization",
    eyebrow: "SEO Training Nigeria",
    heroDesc: "Learn to rank websites on Google Nigeria. Technical SEO, on-page optimization, link building, and local SEO strategies that drive organic traffic.",
    icon: Search,
    meta: {
      duration: "8 Weeks",
      level: "Intermediate",
      format: "Physical & Online",
      certificate: true
    },
    modules: [
      { title: "SEO Fundamentals", desc: "How Search Works" },
      { title: "Technical SEO", desc: "Speed & Crawlability" },
      { title: "On-Page SEO", desc: "Content & Tags" },
      { title: "Link Building", desc: "Domain Authority" },
      { title: "Local SEO", desc: "Google Business" },
      { title: "Analytics", desc: "Tracking & Projects" }
    ],
    curriculum: [
      { week: "Week 1", title: "SEO Fundamentals", desc: "How search engines work, keyword research, and SERP analysis." },
      { week: "Week 2-3", title: "Technical SEO", desc: "Site speed, crawlability, XML sitemaps, schema markup, and site architecture." },
      { week: "Week 4-5", title: "On-Page SEO", desc: "Content optimization, meta tags, internal linking, and URL structure." },
      { week: "Week 6", title: "Link Building", desc: "Backlink strategies, outreach, and building domain authority." },
      { week: "Week 7", title: "Local SEO", desc: "Google Business Profile, local citations, and Nigerian market strategies." },
      { week: "Week 8", title: "Analytics & Projects", desc: "Track rankings, measure traffic, and optimize real client websites." }
    ],
    features: [
      { title: "Real Projects", list: ["Optimize real websites", "Track actual rankings", "Build case studies"] },
      { title: "Tools Mastery", list: ["Google Search Console", "Ahrefs & SEMrush", "Screaming Frog"] },
      { title: "Career Support", list: ["Portfolio development", "Rate guidance", "Job referrals"] }
    ],
    pricing: [
      { name: "Online", price: "₦95,000", features: ["Full video access", "Certificate", "6-month support"] },
      { name: "Live Online", price: "₦150,000", features: ["Live sessions", "Certificate", "12-month support", "Project feedback"], popular: true },
      { name: "Physical", price: "₦250,000", features: ["In-person", "Certificate", "12-month support", "Job placement"] }
    ],
    seoMeta: {
      title: "SEO Training Nigeria – Search Engine Optimization Course",
      description: "Master SEO with our 8-week course. Learn technical SEO, on-page optimization, link building, and local SEO strategies for the Nigerian market."
    }
  },
  "graphics-design": {
    slug: "graphics-design",
    title: "Master Visual Design That Stands Out",
    eyebrow: "Graphics Design Training Nigeria",
    heroDesc: "Learn Adobe Photoshop, Illustrator, and Figma in our 10-week program. Create stunning brand identities, marketing materials, and digital assets that command premium prices.",
    icon: Palette,
    meta: {
      duration: "10 Weeks",
      level: "Beginner Friendly",
      format: "Physical & Online",
      certificate: true
    },
    modules: [
      { title: "Adobe Photoshop", desc: "Image editing & manipulation" },
      { title: "Adobe Illustrator", desc: "Vector graphics & branding" },
      { title: "Figma", desc: "UI design & prototyping" },
      { title: "Adobe InDesign", desc: "Print & publication design" },
      { title: "Brand Identity", desc: "Color & Typography" },
      { title: "Portfolio", desc: "Client Projects" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "Photoshop Fundamentals", desc: "Layers, masks, retouching, color correction, and image manipulation." },
      { week: "Week 3-4", title: "Vector Graphics with Illustrator", desc: "Paths, pen tool, logo design, icons, and vector illustrations." },
      { week: "Week 5-6", title: "Brand Identity Design", desc: "Creating brand guidelines, color palettes, typography systems." },
      { week: "Week 7-8", title: "UI/UX with Figma", desc: "Wireframing, prototyping, design systems, and user interface design." },
      { week: "Week 9", title: "Print Design", desc: "Business cards, flyers, brochures, and print-ready file preparation." },
      { week: "Week 10", title: "Portfolio & Client Projects", desc: "Build a professional portfolio and complete real client assignments." }
    ],
    features: [
      { title: "5 Portfolio Projects", list: ["Complete brand identity", "Marketing collateral set", "Social media templates", "UI design case study"] },
      { title: "Expert Mentorship", list: ["Small class sizes", "1-on-1 portfolio reviews", "Design feedback sessions", "Career guidance"] },
      { title: "Career Support", list: ["Portfolio review", "Rate guidance", "Client acquisition tips", "Job referrals"] }
    ],
    pricing: [
      { name: "Online Self-Paced", price: "₦95,000", features: ["Full video course access", "Downloadable resources", "Certificate of completion", "6-month support"] },
      { name: "Live Online Class", price: "₦175,000", features: ["Live interactive sessions", "Real-time Q&A", "Certificate of completion", "12-month support", "Project feedback"], popular: true },
      { name: "Physical Training", price: "₦280,000", features: ["In-person classes", "Hands-on lab sessions", "Certificate of completion", "12-month support", "Job placement"] }
    ],
    seoMeta: {
      title: "Graphics Design Training Nigeria – Photoshop, Illustrator & Figma Course",
      description: "Master graphics design with our 10-week course. Learn Adobe Photoshop, Illustrator, and Figma. Create stunning brand identities and marketing materials."
    }
  },
  "ui-ux": {
    slug: "ui-ux",
    title: "Design User-Centered Experiences",
    eyebrow: "UI/UX Design Training",
    heroDesc: "Master UI/UX design with Figma. Learn user research, wireframing, prototyping, and design systems. Create interfaces users love.",
    icon: Target,
    meta: {
      duration: "10 Weeks",
      level: "Beginner Friendly",
      format: "Physical & Online",
      certificate: true
    },
    modules: [
      { title: "Design Fundamentals", desc: "Visual Hierarchy" },
      { title: "Figma Mastery", desc: "Components & Auto-layout" },
      { title: "User Research", desc: "Interviews & Personas" },
      { title: "Wireframing", desc: "Low-fidelity Design" },
      { title: "Prototyping", desc: "Interaction Design" },
      { title: "Design Systems", desc: "Reusable Components" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "Design Fundamentals", desc: "Color theory, typography, spacing, and visual hierarchy." },
      { week: "Week 3-4", title: "Figma Mastery", desc: "Frames, components, auto-layout, and prototyping." },
      { week: "Week 5-6", title: "User Research", desc: "User interviews, personas, journey mapping, and problem definition." },
      { week: "Week 7-8", title: "Wireframing & Prototyping", desc: "Low-fidelity to high-fidelity prototyping and interaction design." },
      { week: "Week 9-10", title: "Design Systems & Portfolio", desc: "Building design systems and creating a professional portfolio." }
    ],
    features: [
      { title: "Real Projects", list: ["Mobile app design", "Web dashboard", "Complete case study"] },
      { title: "Tool Mastery", list: ["Figma expert level", "FigJam collaboration", "Prototyping"] },
      { title: "Career Support", list: ["Portfolio review", "Interview prep", "Job referrals"] }
    ],
    pricing: [
      { name: "Online", price: "₦95,000", features: ["Video access", "Certificate", "6-month support"] },
      { name: "Live Online", price: "₦175,000", features: ["Live sessions", "Certificate", "12-month support"], popular: true },
      { name: "Physical", price: "₦280,000", features: ["In-person", "Certificate", "Job placement"] }
    ],
    seoMeta: {
      title: "UI/UX Design Training Nigeria – Figma & Design Course",
      description: "Master UI/UX design with our 10-week course. Learn Figma, user research, wireframing, prototyping, and design systems. Create user-centered interfaces."
    }
  },
  "coding": {
    slug: "coding",
    title: "Become a Full-Stack Developer",
    eyebrow: "Coding Training Nigeria",
    heroDesc: "Master JavaScript, PHP, and modern web development. Build dynamic websites and applications from scratch. Launch your development career.",
    icon: Code2,
    meta: {
      duration: "12 Weeks",
      level: "Intermediate",
      format: "Physical & Online",
      certificate: true
    },
    modules: [
      { title: "JavaScript Fundamentals", desc: "Variables & DOM" },
      { title: "Advanced JavaScript", desc: "Async & APIs" },
      { title: "PHP & Backend", desc: "Server-side & MySQL" },
      { title: "Full-Stack Projects", desc: "Complete Web Apps" },
      { title: "Deployment", desc: "Live Server & Security" },
      { title: "Portfolio", desc: "Career Preparation" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "JavaScript Fundamentals", desc: "Variables, functions, DOM manipulation, and ES6+ features." },
      { week: "Week 3-4", title: "Advanced JavaScript", desc: "Async/await, APIs, and modern frameworks intro." },
      { week: "Week 5-6", title: "PHP & Backend", desc: "Server-side programming, MySQL, and CMS development." },
      { week: "Week 7-8", title: "Full-Stack Projects", desc: "Building complete web applications with authentication." },
      { week: "Week 9-10", title: "Deployment & Security", desc: "Live deployment, security best practices, and performance." },
      { week: "Week 11-12", title: "Portfolio & Career", desc: "Build portfolio projects and prepare for job market." }
    ],
    features: [
      { title: "Real Projects", list: ["E-commerce platform", "Custom CMS", "Portfolio website"] },
      { title: "Career Support", list: ["Interview prep", "Rate guidance", "Job referrals"] },
      { title: "Mentorship", list: ["Code reviews", "1-on-1 support", "12-month access"] }
    ],
    pricing: [
      { name: "Online", price: "₦120,000", features: ["Video access", "Certificate", "6-month support"] },
      { name: "Live Online", price: "₦200,000", features: ["Live sessions", "Certificate", "12-month support"], popular: true },
      { name: "Physical", price: "₦350,000", features: ["In-person", "Certificate", "Job placement"] }
    ],
    seoMeta: {
      title: "Coding & Web Development Training Nigeria – JavaScript, PHP Course",
      description: "Master coding and web development with our 12-week course. Learn JavaScript, PHP, and full-stack development. Build dynamic websites and web applications."
    }
  },
  "sales-funnel": {
    slug: "sales-funnel",
    title: "Build High-Converting Funnels",
    eyebrow: "Sales Funnel Training",
    heroDesc: "Learn to build sales funnels that convert visitors into customers. Landing pages, email sequences, and automation.",
    icon: Target,
    meta: {
      duration: "8 Weeks",
      level: "Intermediate",
      format: "Physical & Online",
      certificate: true
    },
    modules: [
      { title: "Funnel Fundamentals", desc: "Conversion Psychology" },
      { title: "Landing Pages", desc: "Design & Copy" },
      { title: "Email Automation", desc: "Drip Campaigns" },
      { title: "Offer Creation", desc: "Irresistible Offers" },
      { title: "Traffic generation", desc: "Ads & Organic" },
      { title: "Projects & Clients", desc: "Real Funnels" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "Funnel Fundamentals", desc: "Understanding conversion psychology and funnel stages." },
      { week: "Week 3-4", title: "Landing Pages", desc: "High-converting page design and copy." },
      { week: "Week 5-6", title: "Email Automation", desc: "Drip campaigns, follow-ups, and nurturing." },
      { week: "Week 7-8", title: "Projects & Clients", desc: "Build real funnels and get clients." }
    ],
    features: [
      { title: "Real Funnels", list: ["Lead magnet funnel", "Webinar funnel", "Sales funnel"] },
      { title: "Career Support", list: ["Funnel consultant skills", "Freelance rates", "Client acquisition"] },
      { title: "Mentorship", list: ["Funnel reviews", "1-on-1 support", "Strategy guidance"] }
    ],
    pricing: [
      { name: "Online", price: "₦95,000", features: ["Video access", "Certificate", "6-month support"] },
      { name: "Live Online", price: "₦150,000", features: ["Live sessions", "Certificate", "12-month support"], popular: true },
      { name: "Physical", price: "₦250,000", features: ["In-person", "Certificate", "Job placement"] }
    ],
    seoMeta: {
      title: "Sales Funnel Design Training Nigeria | Hephzibah Media Academy",
      description: "Learn to build high-converting sales funnels, landing pages, and email automation sequences. Turn visitors into paying customers."
    }
  },
  "content-creation": {
    slug: "content-creation",
    title: "Master Content That Converts",
    eyebrow: "Content Creation Training",
    heroDesc: "Learn copywriting, storytelling, and content strategy. Create engaging content that builds audiences and drives conversions.",
    icon: PenTool,
    meta: {
      duration: "8 Weeks",
      level: "Beginner",
      format: "Online & Physical",
      certificate: true
    },
    modules: [
      { title: "Copywriting", desc: "Persuasive writing" },
      { title: "Content Strategy", desc: "Planning & Funnels" },
      { title: "Social Media", desc: "Captions & Threads" },
      { title: "Storytelling", desc: "Brand narratives" },
      { title: "SEO Writing", desc: "Ranking content" },
      { title: "Portfolio", desc: "Client work" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "Copywriting Fundamentals", desc: "Headlines, hooks, and persuasive writing." },
      { week: "Week 3-4", title: "Content Strategy", desc: "Planning, calendars, and content funnels." },
      { week: "Week 5-6", title: "Social Media Content", desc: "Captions, threads, and visual content." },
      { week: "Week 7-8", title: "Portfolio & Clients", desc: "Build portfolio and find clients." }
    ],
    features: [
      { title: "Real Projects", list: ["10 content pieces", "Copy portfolio", "Strategy doc"] },
      { title: "Career", list: ["Freelance skills", "Rate guidance", "Client acquisition"] },
      { title: "Mentorship", list: ["Copy reviews", "Feedback sessions", "Ongoing support"] }
    ],
    pricing: [
      { name: "Online", price: "₦75,000", features: ["Video access", "Certificate", "Community"] },
      { name: "Live Online", price: "₦125,000", features: ["Live sessions", "Certificate", "12-month support"], popular: true },
      { name: "Physical", price: "₦200,000", features: ["In-person", "Certificate", "Job placement"] }
    ],
    seoMeta: {
      title: "Content Creation Training Nigeria – Copywriting & Social Media",
      description: "Master content creation, copywriting, and content strategy. Build engaging content that drives sales and audience growth."
    }
  },
  "social-media": {
    slug: "social-media",
    title: "Become a Social Media Manager",
    eyebrow: "Social Media Training",
    heroDesc: "Learn to manage social media for brands. Content strategy, community management, analytics, and paid social.",
    icon: Share2,
    meta: {
      duration: "8 Weeks",
      level: "Beginner",
      format: "Online & Physical",
      certificate: true
    },
    modules: [
      { title: "Social Strategy", desc: "Platform selection" },
      { title: "Content Creation", desc: "Visuals & Copy" },
      { title: "Community Management", desc: "Engagement" },
      { title: "Paid Social", desc: "Ads & Boosting" },
      { title: "Analytics", desc: "ROI Measurement" },
      { title: "Client Management", desc: "Freelance skills" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "Social Strategy", desc: "Platform selection, audience research, and content planning." },
      { week: "Week 3-4", title: "Content Creation", desc: "Caption writing, visual content, and scheduling." },
      { week: "Week 5-6", title: "Community & Ads", desc: "Engagement, customer service, and paid campaigns." },
      { week: "Week 7-8", title: "Analytics & Clients", desc: "Reporting, ROI measurement, and client management." }
    ],
    features: [
      { title: "Skills", list: ["Multi-platform management", "Content strategy", "Analytics"] },
      { title: "Career", list: ["Freelance skills", "Client acquisition", "Rate guidance"] },
      { title: "Mentorship", list: ["Strategy reviews", "Feedback sessions", "Ongoing support"] }
    ],
    pricing: [
      { name: "Online", price: "₦75,000", features: ["Video access", "Certificate", "Community"] },
      { name: "Live Online", price: "₦125,000", features: ["Live sessions", "Certificate", "12-month support"], popular: true },
      { name: "Physical", price: "₦200,000", features: ["In-person", "Certificate", "Job placement"] }
    ],
    seoMeta: {
      title: "Social Media Management Training Nigeria | Hephzibah Media Academy",
      description: "Learn social media management, content strategy, and community building. Become a certified social media manager."
    }
  },
  "video-editing": {
    slug: "video-editing",
    title: "Become a Pro Video Editor",
    eyebrow: "Video Editing Training",
    heroDesc: "Master Premiere Pro and DaVinci Resolve. Create professional videos for social media, ads, and YouTube.",
    icon: Video,
    meta: {
      duration: "10 Weeks",
      level: "Beginner",
      format: "Online & Physical",
      certificate: true
    },
    modules: [
      { title: "Premiere Pro", desc: "Timeline & Cuts" },
      { title: "Advanced Editing", desc: "Audio & Effects" },
      { title: "DaVinci Resolve", desc: "Color Grading" },
      { title: "Motion Graphics", desc: "Text & Animations" },
      { title: "Short Form", desc: "TikToks & Reels" },
      { title: "Portfolio", desc: "Demo Reel" }
    ],
    curriculum: [
      { week: "Week 1-2", title: "Premiere Pro Basics", desc: "Timeline, cuts, transitions, and exports." },
      { week: "Week 3-4", title: "Advanced Editing", desc: "Color grading, audio mixing, and effects." },
      { week: "Week 5-6", title: "DaVinci Resolve", desc: "Professional color grading and finishing." },
      { week: "Week 7-8", title: "Motion Graphics", desc: "Text animations and basic motion graphics." },
      { week: "Week 9-10", title: "Portfolio Projects", desc: "Create demo reel and client projects." }
    ],
    features: [
      { title: "Projects", list: ["YouTube video", "Ad video", "Social clips"] },
      { title: "Tools", list: ["Premiere Pro", "DaVinci Resolve", "After Effects basics"] },
      { title: "Career Support", list: ["Portfolio review", "Rate guidance", "Job referrals"] }
    ],
    pricing: [
      { name: "Online", price: "₦85,000", features: ["Video access", "Certificate", "6-month support"] },
      { name: "Live Online", price: "₦150,000", features: ["Live sessions", "Certificate", "12-month support"], popular: true },
      { name: "Physical", price: "₦250,000", features: ["In-person", "Certificate", "Job placement"] }
    ],
    seoMeta: {
      title: "Video Editing Training Nigeria – Premiere Pro & DaVinci Resolve",
      description: "Learn professional video editing with Adobe Premiere Pro and DaVinci Resolve. Master color grading, audio mixing, and motion graphics."
    }
  },
  "ai-tools": {
    slug: "ai-tools",
    title: "Leverage AI for Business",
    eyebrow: "AI Tools Training",
    heroDesc: "Master AI tools like ChatGPT, automation workflows, and AI-powered solutions. Transform your business operations and stay ahead of the AI revolution.",
    icon: Bot,
    meta: {
      duration: "6 Weeks",
      level: "All Levels",
      format: "Online",
      certificate: true
    },
    modules: [
      { title: "AI Fundamentals", desc: "LLMs & Prompting" },
      { title: "Content Creation", desc: "Writing & Video AI" },
      { title: "Automation", desc: "Zapier & Make.com" },
      { title: "Custom GPTs", desc: "Building assistants" },
      { title: "Business AI", desc: "Data & Operations" },
      { title: "Implementation", desc: "Real-world solutions" }
    ],
    curriculum: [
      { week: "Week 1", title: "AI Fundamentals", desc: "Understanding AI, ML, and how ChatGPT works." },
      { week: "Week 2", title: "Content Creation with AI", desc: "Writing, video scripts, and social media with AI." },
      { week: "Week 3", title: "Automation Basics", desc: "Zapier, Make.com, and workflow automation." },
      { week: "Week 4", title: "AI for Business", desc: "Customer service, chatbots, and data analysis." },
      { week: "Week 5-6", title: "Projects & Implementation", desc: "Build real AI solutions for businesses." }
    ],
    features: [
      { title: "Real Projects", list: ["Build chatbots", "Create automation", "AI content strategy"] },
      { title: "Tool Mastery", list: ["ChatGPT Pro", "Zapier & Make", "AI writing tools"] },
      { title: "Career Boost", list: ["AI consultant skills", "Freelance opportunities", "High-demand niche"] }
    ],
    pricing: [
      { name: "Online", price: "₦75,000", features: ["Video access", "Certificate", "Lifetime access"] },
      { name: "Live Online", price: "₦120,000", features: ["Live sessions", "Certificate", "12-month support"], popular: true }
    ],
    seoMeta: {
      title: "AI Tools & Automation Training Nigeria | Hephzibah Media Academy",
      description: "Master AI tools and automation with our 6-week course. Learn ChatGPT, automation workflows, and AI-powered business solutions for Nigerian businesses."
    }
  },
  "business-digitalization": {
    slug: "business-digitalization",
    title: "Transform Your Business Digitally",
    eyebrow: "Business Digitalization",
    heroDesc: "Learn to digitize traditional businesses. E-commerce, digital payments, online presence, and automation for Nigerian businesses.",
    icon: Briefcase,
    meta: {
      duration: "6 Weeks",
      level: "All Levels",
      format: "Online & Physical",
      certificate: true
    },
    modules: [
      { title: "Digital Assessment", desc: "Business analysis" },
      { title: "Online Presence", desc: "Google & Social" },
      { title: "E-commerce", desc: "Selling online" },
      { title: "Digital Payments", desc: "Paystack & Flutterwave" },
      { title: "Cloud Tools", desc: "Workspace & Collaboration" },
      { title: "Automation", desc: "Scaling operations" }
    ],
    curriculum: [
      { week: "Week 1", title: "Digital Assessment", desc: "Analyze current business and identify digital opportunities." },
      { week: "Week 2-3", title: "E-commerce & Online Sales", desc: "Setting up online stores and digital product delivery." },
      { week: "Week 4", title: "Digital Payments", desc: "Payment gateways, Flutterwave, Paystack integration." },
      { week: "Week 5-6", title: "Automation & Scaling", desc: "Business automation tools and growth strategies." }
    ],
    features: [
      { title: "Practical Skills", list: ["E-commerce setup", "Payment integration", "Digital marketing"] },
      { title: "Business Growth", list: ["Expand online reach", "Automate operations", "Increase revenue"] },
      { title: "Consultation", list: ["Business audit", "Digital roadmap", "Ongoing support"] }
    ],
    pricing: [
      { name: "Online", price: "₦85,000", features: ["Video access", "Certificate", "Templates"] },
      { name: "Live Online", price: "₦150,000", features: ["Live sessions", "Certificate", "1-on-1 audit"], popular: true },
      { name: "Physical", price: "₦250,000", features: ["In-person workshops", "Certificate", "Full implementation help"] }
    ],
    seoMeta: {
      title: "Business Digitalization Training Nigeria – Digital Transformation | Hephzibah Media Academy",
      description: "Learn how to digitize your traditional business in Nigeria. Master e-commerce, digital payments, online marketing, and business automation."
    }
  }
};
