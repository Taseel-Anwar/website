import { pageSeo, siteUrl } from './seo';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { FiMail, FiMapPin, FiLayers, FiZap } from 'react-icons/fi';
import { BsCursorText } from 'react-icons/bs';
import { SlBubble } from 'react-icons/sl';
import { FaJava, FaMagic } from 'react-icons/fa';
import { TbBrandGoogleBigQuery } from 'react-icons/tb';
import PremiumLetsTalkSection from './PremiumLetsTalkSection';
import {
  SiGithub,
  SiLinkedin,
  SiUpwork,
  SiWhatsapp,
  SiWebflow,
  SiZapier,
  SiOpenai,
  SiReact,
  SiDjango,
  SiSupabase,
  SiPowerbi,
  SiTableau,
  SiPython,
  SiAngular,
  SiWordpress,
  SiR
} from 'react-icons/si';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

const brandIcons = {
  bubble: { wv: 'bubble-io', si: 'bubble' },
  webflow: { wv: 'webflow', si: 'webflow' },
  retool: { wv: 'retool', si: 'retool' },
  n8n: { wv: 'n8n', si: 'n8n' },
  zapier: { wv: 'zapier', si: 'zapier' },
  cursor: { wv: 'cursor', si: 'cursor' },
  openai: { wv: 'openai', si: 'openai' },
  react: { wv: 'react-2', si: 'react' },
  django: { wv: 'django', si: 'django' },
  supabase: { wv: 'supabase', si: 'supabase' },
  'power-bi': { wv: 'power-bi', si: 'powerbi' },
  tableau: { wv: 'tableau', si: 'tableau' },
  python: { wv: 'python', si: 'python' },
  'google-bigquery': { wv: 'google-bigquery', si: 'googlebigquery' },
  angular: { wv: 'angular', si: 'angular' },
  wordpress: { wv: 'wordpress', si: 'wordpress' },
  java: { wv: 'java', si: 'java' }
};

const techIconMap = {
  bubble: SlBubble,
  webflow: SiWebflow,
  retool: FiLayers,
  n8n: FiZap,
  zapier: SiZapier,
  cursor: BsCursorText,
  openai: SiOpenai,
  react: SiReact,
  django: SiDjango,
  supabase: SiSupabase,
  'power-bi': SiPowerbi,
  tableau: SiTableau,
  python: SiPython,
  'google-bigquery': TbBrandGoogleBigQuery,
  java: FaJava,
  angular: SiAngular,
  wordpress: SiWordpress
};

const stackItems = [
  { name: 'Bubble', slug: 'bubble' },
  { name: 'Webflow', slug: 'webflow' },
  { name: 'Retool', slug: 'retool' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'Cursor', slug: 'cursor' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'React', slug: 'react' },
  { name: 'Django', slug: 'django' },
  { name: 'Supabase', slug: 'supabase' },
  { name: 'Power BI', slug: 'power-bi' },
  { name: 'Tableau', slug: 'tableau' },
  { name: 'Python', slug: 'python' },
  { name: 'BigQuery', slug: 'google-bigquery' },
  { name: 'Angular', slug: 'angular' },
  { name: 'WordPress', slug: 'wordpress' }
];

const clusterItems = [
  { name: 'DeepSeek', brand: 'deepseek', icon: 'deepseek' },
  { name: 'OpenAI', brand: 'openai', icon: 'openai' },
  { name: 'Gemini', brand: 'gemini', icon: 'googlegemini' },
  { name: 'Mistral AI', brand: 'mistral', icon: 'mistral' },
  { name: 'Anthropic', brand: 'anthropic', icon: 'anthropic' },
  { name: 'Llama', brand: 'llama', icon: 'meta' }
];

function WorkflowLogo({ item }) {
  return <span className={`brand-mark brand-mark-${item.brand}`}>
    <img src={`/brands/${item.brand}.svg`} alt={item.name} title={item.name} />
  </span>;
}

const serviceCards = [
  {
    title: 'No Code Development',
    description: 'Build websites, customer portals, and business applications with Bubble, Webflow, Retool, WordPress, Lovable, and Base44.',
    link: '/services#nocode',
    slug: 'bubble'
  },
  {
    title: 'Automation',
    description: 'Connect your apps and reduce repetitive work with n8n, Zapier, and practical AI automation.',
    link: '/services#automation',
    slug: 'n8n'
  },
  {
    title: 'Code & Vibe Coding',
    description: 'Develop web applications and APIs with React, Angular, Python, Django, and Java.',
    link: '/services#code',
    slug: 'react'
  },
  {
    title: 'Data & AI',
    description: 'Turn business data into useful dashboards, reports, and AI tools with Power BI, Tableau, BigQuery, and Python.',
    link: '/services#data',
    slug: 'power-bi'
  }
];

const featureItems = [
  {
    title: 'Fast to market',
    description: 'Start with the features your users need and build from there.'
  },
  {
    title: 'Thoughtful use of your budget',
    description: 'Choose tools that fit the scope, timeline, and budget of your project.'
  },
  {
    title: 'Scalable solutions',
    description: 'Create a foundation that can grow with your product and your team.'
  },
  {
    title: 'Practical AI',
    description: 'Use AI for tasks where it adds value, from support to data analysis.'
  }
];

const testimonials = [
  {
    stars: '★★★★★',
    quote: 'Taseel did a phenomenal job understanding requirements and making it come live on Retool. He was extremely communicative and responded to requests in a timely manner.',
    author: 'Joel Macpherson',
    role: 'Verified Upwork Client',
    initials: 'JM'
  },
  {
    stars: '★★★★★',
    quote: 'Taseel built a Retool app for my company. He pointed out flaws in our design and suggested options to correct them. Great to work with and receptive to feedback.',
    author: 'Jared Hislop',
    role: 'Verified Upwork Client',
    initials: 'JH'
  },
  {
    stars: '★★★★★',
    quote: 'Great web developer! Fixed our issues and were very quick with responses in delivery! Highly recommended! A+++.',
    author: 'Shemie Breitenbach',
    role: 'Verified Upwork Client',
    initials: 'SB'
  },
  {
    stars: '★★★★★',
    quote: 'Taseel communicated well when we hit obstacles and provided clear suggestions. When Retool didn\'t support something, he still found a way to get it working. Will use again.',
    author: 'Adam Dawood',
    role: 'Verified Upwork Client',
    initials: 'AD'
  }
];

const servicesSections = [
  {
    id: 'nocode',
    label: 'No Code Development',
    title: 'Build without code. Launch without limits.',
    description: 'I build customer portals, marketplaces, internal tools, and websites using platforms suited to each project.',
    icon: '◈',
    tools: [
      { name: 'Bubble.io', slug: 'bubble' },
      { name: 'Webflow', slug: 'webflow' },
      { name: 'Retool', slug: 'retool' },
      { name: 'WordPress', slug: 'wordpress' },
      { name: 'Lovable / Base44', slug: 'openai' }
    ],
    accent: false
  },
  {
    id: 'automation',
    label: 'Automation Services',
    title: 'Your business, running on autopilot.',
    description: 'I connect your apps, APIs, and data with n8n and Zapier so routine tasks move forward with less manual work.',
    icon: '⟳',
    tools: [
      { name: 'n8n', slug: 'n8n' },
      { name: 'Zapier', slug: 'zapier' },
      { name: 'AI Automation', slug: 'openai' },
      { name: 'Custom Pipelines', slug: 'power-bi' }
    ],
    accent: true
  },
  {
    id: 'code',
    label: 'Code & Vibe Coding',
    title: 'Web application development',
    description: 'I develop web applications, APIs, and SaaS products with React, Python, Django, and other tools chosen for your requirements.',
    icon: '⌥',
    tools: [
      { name: 'React / Angular', slug: 'react' },
      { name: 'Python / Django', slug: 'django' },
      { name: 'Java', slug: 'java' },
      { name: 'Vibe Coding', slug: 'cursor' },
      { name: 'Web Apps & SaaS', slug: 'webflow' },
      { name: 'Software & APIs', slug: 'google-bigquery' }
    ],
    accent: false
  },
  {
    id: 'data',
    label: 'Data & AI Services',
    title: 'Turn your data into decisions and products.',
    description: 'I create business dashboards, data workflows, chatbots, and AI agents that help teams find and use information.',
    icon: '◉',
    tools: [
      { name: 'Power BI / Tableau', slug: 'power-bi' },
      { name: 'Python / R Visualisation', slug: 'python' },
      { name: 'BigQuery', slug: 'google-bigquery' },
      { name: 'AI Chatbots', slug: 'openai' },
      { name: 'AI Agents', slug: 'openai' }
    ],
    accent: true
  }
];

const portfolioItems = [
  {
    number: '01', title: 'CloudOps DevOps Monitor', role: 'Web Application Development',
    description: 'A DevOps monitoring SaaS bringing infrastructure health, CI/CD pipelines, uptime, and incident diagnosis into one workspace. Includes a Gemini assistant and data isolation for each team with Supabase.',
    tags: ['Next.js', 'Vercel', 'Gemini', 'Supabase'],
    outcome: 'Service health dashboards, deployment alerts, and AI supported incident investigation.',
    image: '/portfolio/cloudops.png', gallery: ['/portfolio/cloudops.png', '/portfolio/cloudops-detail.png'],
    source: 'https://www.upwork.com/freelancers/~01af62dd25502a2237?p=2082831555716149248'
  },
  {
    number: '02', title: 'FinPulse Finance Dashboard', role: 'Web Application Development',
    description: 'A finance dashboard bringing revenue, expenses, and subscriptions together. Stripe webhooks support MRR and churn tracking, with interactive charts and a Gemini assistant for spending insights.',
    tags: ['Next.js', 'Stripe', 'Gemini', 'AWS'],
    outcome: 'Revenue reporting, subscription tracking, and alerts for renewals and budget thresholds.',
    image: '/portfolio/finpulse.jpg',
    source: 'https://www.upwork.com/freelancers/~01af62dd25502a2237?p=2082830946682236928'
  },
  {
    number: '03', title: 'SkillForge', role: 'Web Application Development',
    description: 'An EdTech SaaS combining a learner portal and instructor administration. Includes Stripe checkout, Mux video lessons, a Gemini AI tutor, timed quizzes, progress tracking, and completion certificates.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini', 'SendGrid'],
    outcome: 'Course delivery, learner progress, and instructor analytics in one product.',
    image: '/portfolio/skillforge.jpg', source: 'https://www.upwork.com/freelancers/~01af62dd25502a2237'
  },

  {
    number: '01',
    title: 'Greenlight Athletics AthletIQ',
    role: 'Bubble Application Development',
    image: '/portfolio/greenlight.jpg', source: 'https://greenlightathletics.com/', sourceLabel: 'Visit project',
    description: 'A marketplace for local sports programs, camps, and verified coaches, designed for parents and community organisers.',
    tags: ['Bubble.io', 'Marketplace', 'No Code'],
    outcome: 'Full marketplace platform delivered rapidly with a polished user experience.'
  },
  
  {
    number: '03',
    title: 'Tradernode Financial Management MVP',
    image: '/portfolio/tradernode.png', source: 'https://tradernode.bubbleapps.io', sourceLabel: 'Visit project',
    role: 'SaaS Platform for Prop Traders',
    description: 'A clean trading dashboard with P&L analytics, payout tracking, and portfolio monitoring for active traders.',
    tags: ['Bubble.io', 'SaaS', 'FinTech'],
    outcome: 'A fully functional financial MVP delivered without traditional development overhead.'
  },
  
{"title": "Rent Referee Rental Review Platform", "role": "Bubble Application Development", "description": "A rental review platform with property search on a map, reviews, and an onboarding flow for different user roles.", "tags": ["Bubble.io", "Stripe", "Maps"], "outcome": "Property search, rental reviews, and responsive account onboarding.", "image": "/portfolio/rent-referee.jpg"},
{"title": "Elvasma Faith Quiz App", "role": "Bubble Application Development", "description": "A mobile Bible study application with interactive faith quizzes, reading guides, and progress tracking. Onboarding connects Shopify purchases with account access.", "tags": ["Bubble.io", "Shopify", "n8n"], "outcome": "Faith quizzes, study guides, progress tracking, and controlled onboarding.", "image": "/portfolio/elvasma.png", "source": "https://app.elvasma.com", "sourceLabel": "Visit project"},
{"title": "Calendar to Voice Interview Automation", "role": "n8n Workflow Development", "description": "A Google Calendar workflow that filters interview events, extracts Google Meet details, validates meeting data, and prepares outbound calls through VAPI.", "tags": ["n8n", "Google Calendar", "VAPI"], "outcome": "Calendar triggers, meeting validation, outbound calls, and handling missing data.", "image": "/portfolio/n8n-1.jpg"},
{"title": "AI Agent & Structured Data Workflow", "role": "n8n Workflow Development", "description": "An AI workflow using webhooks connecting an OpenAI chat model with a structured output parser, custom code steps, and HTTP requests.", "tags": ["n8n", "OpenAI", "Webhooks"], "outcome": "AI processing, structured responses, and API handoffs for each item.", "image": "/portfolio/n8n-2.jpg"},
{"title": "Voice AI Platform Automation", "role": "n8n Workflow Development", "description": "A collection of connected workflows for voice assistant operations, including phone numbers, assistant setup, call logs, calendar data, and knowledge base updates.", "tags": ["n8n", "VAPI", "Supabase"], "outcome": "Voice assistant management, call log updates, and data synchronization.", "image": "/portfolio/n8n-3.jpg"}
];

const aboutPillars = [
  {
    number: '01',
    title: 'Right tool, right problem',
    description: 'I recommend an approach based on your goals, budget, and timeline.'
  },
  {
    number: '02',
    title: 'Modern over traditional',
    description: 'I choose from visual platforms and custom code based on what the project needs.'
  },
  {
    number: '03',
    title: 'Speed without sacrifice',
    description: 'A clear scope and thoughtful planning help keep projects moving.'
  },
  {
    number: '04',
    title: 'Low cost, high impact',
    description: 'I focus on the features that deliver the most value for your budget.'
  }
];

const stackLayers = [
  {
    label: 'AI & Automation',
    tools: 'Claude · n8n · Zapier · LLMs · Custom Agents'
  },
  {
    label: 'No Code and Low Code',
    tools: 'Bubble.io · Webflow · Retool · Lovable · Base44 · WordPress'
  },
  {
    label: 'Vibe Coding',
    tools: 'Cursor · Claude · v0 · AI assisted development'
  },
  {
    label: 'Web Development',
    tools: 'React · Angular · Python · Django · Java · Supabase'
  },
  {
    label: 'Data & Analytics',
    tools: 'Power BI · Tableau · BigQuery · Python/R · Excel'
  }
];

const valueCards = [
  {
    icon: '⚡',
    title: 'Velocity matters',
    description: 'In a world where competitors move fast, the ability to ship quickly is a strategic advantage.'
  },
  {
    icon: '◎',
    title: 'Honesty over hype',
    description: 'I explain the options clearly so you can make an informed choice.'
  },
  {
    icon: '∞',
    title: 'Always learning',
    description: 'I continue learning and choose established tools that suit the work.'
  },
  {
    icon: '◈',
    title: 'Clear communication',
    description: 'I keep you informed about progress, decisions, and next steps.'
  }
];

const contactCards = [
  {
    Icon: FiMail,
    title: 'Email',
    content: 'taseel.work@gmail.com',
    secondary: 'Send me your project details',
    href: 'mailto:taseel.work@gmail.com'
  },
  {
    Icon: SiWhatsapp,
    title: 'WhatsApp',
    content: '+92 321 430 8899',
    secondary: 'Message me on WhatsApp',
    href: 'https://wa.me/923214308899'
  },
  {
    Icon: FiMapPin,
    title: 'Location',
    content: 'Lahore, Pakistan',
    secondary: 'Working with clients globally'
  },
  {
    Icon: SiUpwork,
    title: 'Upwork',
    content: 'View my profile',
    secondary: 'Verified reviews & portfolio',
    href: 'https://www.upwork.com/freelancers/~01af62dd25502a2237'
  }
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Taseel-Anwar', Icon: SiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/taseel', Icon: SiLinkedin },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01af62dd25502a2237', Icon: SiUpwork }
];

function useScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
}

function TechLogo({ slug, label }) {
  const Icon = techIconMap[slug];
  const config = brandIcons[slug] || { si: slug };
  const [src, setSrc] = useState(`https://cdn.simpleicons.org/${config.si}/0f2b66`);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSrc(`https://cdn.simpleicons.org/${config.si}/0f2b66`);
    setFailed(false);
  }, [slug]);

  if (Icon) {
    return <Icon className="svg-icon-img local-icon" title={label} aria-label={label || slug} />;
  }

  if (failed) {
    return <FaMagic className="svg-icon-img fallback-icon" title={label} aria-label={label || slug} />;
  }

  return (
    <img
      className="svg-icon-img"
      src={src}
      alt={label || slug}
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
      crossOrigin="anonymous"
    />
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <Link to="/" className="nav-logo">
          <img src="/ta-monogram.png" alt="Taseel Anwar" width="32" height="32" />
          <span>Taseel Anwar</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')} end>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="nav-cta">
          Start a Project
        </Link>

        <button
          className="hamburger"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          ☰
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
          Start a Project
        </Link>
      </div>
    </>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

function PageHero({ label, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <SectionLabel>{label}</SectionLabel>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

function ServicesHeroVisual() {
  return (
    <div className="services-hero-visual" aria-hidden="true">
      <div className="hero-visual-orb orb-one" />
      <div className="hero-visual-orb orb-two" />
      <svg viewBox="0 0 560 420" className="services-hero-svg" role="img" aria-label="Modern team illustration">
        <defs>
          <linearGradient id="deskGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffb14d" />
            <stop offset="100%" stopColor="#f06724" />
          </linearGradient>
          <linearGradient id="shirtGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffd24a" />
            <stop offset="100%" stopColor="#ff8f1f" />
          </linearGradient>
          <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8eb3ff" />
            <stop offset="100%" stopColor="#6289f7" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffcfb0" />
            <stop offset="100%" stopColor="#f79b72" />
          </linearGradient>
        </defs>

        <ellipse cx="285" cy="372" rx="210" ry="22" fill="rgba(15,47,102,0.08)" />
        <rect x="112" y="248" width="360" height="18" rx="9" fill="url(#deskGradient)" />
        <rect x="128" y="266" width="16" height="104" rx="8" fill="#d66b3b" />
        <rect x="440" y="266" width="16" height="104" rx="8" fill="#d66b3b" />
        <rect x="246" y="256" width="116" height="66" rx="10" fill="url(#screenGradient)" />
        <rect x="238" y="318" width="136" height="12" rx="6" fill="#8d5eeb" opacity="0.45" />
        <rect x="162" y="248" width="24" height="34" rx="8" fill="#ffbb36" />
        <rect x="162" y="240" width="26" height="6" rx="3" fill="#f7f0d0" />
        <rect x="387" y="250" width="32" height="28" rx="8" fill="#ffb84a" />
        <path d="M386 241c8-10 6-22-5-34 14 8 21 21 18 36" fill="none" stroke="#ffd49d" strokeWidth="5" strokeLinecap="round" />
        <path d="M392 238c10-8 10-18 2-28" fill="none" stroke="#fff0c7" strokeWidth="4" strokeLinecap="round" />
        <path d="M134 112c20-20 45-24 76-14 19 6 31 22 40 44 10 24 8 59 8 91h-96c-8-30-26-53-46-76-11-13-13-33 18-45z" fill="#6b4237" />
        <circle cx="193" cy="96" r="24" fill="#7d4b40" />
        <circle cx="192" cy="92" r="23" fill="url(#skinGradient)" />
        <path d="M167 112c2-16 8-26 23-30 18-5 37 0 49 12 7 8 9 18 8 28-2 8-11 14-17 19-10 8-22 12-38 11-11-1-18-8-24-20-3-7-3-13-1-20z" fill="#5a2e29" opacity="0.95" />
        <rect x="144" y="135" width="96" height="118" rx="16" fill="url(#shirtGradient)" />
        <rect x="171" y="145" width="6" height="66" rx="3" fill="#5b2d28" opacity="0.75" />
        <rect x="187" y="145" width="6" height="66" rx="3" fill="#5b2d28" opacity="0.75" />
        <rect x="203" y="145" width="6" height="66" rx="3" fill="#5b2d28" opacity="0.75" />
        <rect x="219" y="145" width="6" height="66" rx="3" fill="#5b2d28" opacity="0.75" />
        <rect x="232" y="247" width="20" height="102" rx="10" fill="#4f5de0" />
        <rect x="162" y="247" width="22" height="102" rx="10" fill="#4f5de0" />
        <rect x="157" y="346" width="32" height="14" rx="7" fill="#ffb56a" />
        <rect x="227" y="346" width="32" height="14" rx="7" fill="#ffb56a" />

        <circle cx="455" cy="114" r="24" fill="url(#skinGradient)" />
        <path d="M435 98c11-10 24-15 38-14 15 1 28 8 36 20 7 9 9 25 4 42-9 20-24 31-45 31-22-1-38-13-46-33-5-15-1-34 13-46z" fill="#4d2a23" />
        <path d="M433 119c4-18 15-29 33-32 17-3 33 2 46 14 9 8 12 19 11 33-1 13-7 25-16 36-10 12-23 17-40 17-16 0-27-5-35-17-8-10-10-24-8-51z" fill="url(#skinGradient)" />
        <rect x="412" y="136" width="90" height="126" rx="18" fill="#d6c2f7" opacity="0.92" />
        <rect x="430" y="150" width="24" height="82" rx="10" fill="#4f5de0" />
        <rect x="448" y="150" width="24" height="82" rx="10" fill="#4f5de0" />
        <rect x="395" y="248" width="18" height="112" rx="9" fill="#d06b3d" />
        <rect x="472" y="248" width="18" height="112" rx="9" fill="#d06b3d" />
        <rect x="392" y="348" width="36" height="14" rx="7" fill="#ffb56a" />
        <rect x="468" y="348" width="36" height="14" rx="7" fill="#ffb56a" />

        <circle cx="500" cy="265" r="22" fill="#ffb43f" />
        <rect x="486" y="252" width="28" height="44" rx="10" fill="#f2b14b" />
        <path d="M492 248c0-10 4-18 12-24 10 8 14 16 14 24" fill="none" stroke="#4ac0b8" strokeWidth="6" strokeLinecap="round" />
        <path d="M488 297h30" stroke="#4ac0b8" strokeWidth="4" strokeLinecap="round" />
        <path d="M150 168c18 8 32 24 38 46" fill="none" stroke="#ffcf7d" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      </svg>
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="container services-hero-inner">
        <div className="services-hero-copy">
          <span className="services-eyebrow">Development services</span>
          <h1>Build the product.<br />Connect the rest.</h1>
          <p>I build web apps, automate the work around them, and turn business data into useful tools. Choose the expertise your project needs.</p>
          <div className="services-hero-actions">
            <Link to="/contact" className="btn-primary btn-lg">Discuss your project →</Link>
            <a href="#nocode" className="services-text-link">Explore services ↓</a>
          </div>
        </div>
        <div className="services-blueprint" aria-label="From customer experience to connected workflows and useful data">
          <div className="blueprint-heading"><span>How the pieces connect</span><span aria-hidden="true">↗</span></div>
          <div className="blueprint-product"><span className="blueprint-caption">The customer experience</span><h2>Your next web product</h2><div className="blueprint-tabs"><span>Web apps</span><span>Internal tools</span><span>SaaS</span></div></div>
          <div className="blueprint-connector" aria-hidden="true">↓</div>
          <div className="blueprint-layer"><FiZap aria-hidden="true" /><div><h3>Connected workflows</h3><p>Tools, events, and business processes</p></div></div>
          <div className="blueprint-connector" aria-hidden="true">↓</div>
          <div className="blueprint-layer"><FiLayers aria-hidden="true" /><div><h3>Useful intelligence</h3><p>Dashboards, data, and AI integrations</p></div></div>
          <div className="blueprint-footnote">One project. The right tools for each layer.</div>
        </div>
      </div>
    </section>
  );
}

const marqueeLogos = [
  { name: 'Bubble.io', letter: 'B' },
  { name: 'Webflow',   letter: 'W' },
  { name: 'Retool',    letter: 'R' },
  { name: 'MongoDB',   letter: 'M' },
  { name: 'React',     letter: 'R' },
  { name: 'Node.js',   letter: 'N' },
  { name: 'Zapier',    letter: 'Z' },
  { name: 'Make',      letter: 'M' },
];

function DarkHero() {
  const videoRef   = useRef(null);
  const rafRef     = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Video fade loop ──
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;

    function fadeIn() {
      if (cancelled) return;
      const duration = 500;
      const start = performance.now();
      function tick(now) {
        if (cancelled) return;
        const t = Math.min((now - start) / duration, 1);
        video.style.opacity = t;
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    function onTimeUpdate() {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.5) {
        const duration = 500;
        const startOpacity = parseFloat(video.style.opacity) || 1;
        const fadeStart = performance.now();
        cancelAnimationFrame(rafRef.current);
        function fadeTick(now) {
          if (cancelled) return;
          const t = Math.min((now - fadeStart) / duration, 1);
          video.style.opacity = startOpacity * (1 - t);
          if (t < 1) rafRef.current = requestAnimationFrame(fadeTick);
        }
        rafRef.current = requestAnimationFrame(fadeTick);
      }
    }

    function onEnded() {
      if (cancelled) return;
      video.style.opacity = 0;
      setTimeout(() => {
        if (cancelled) return;
        video.currentTime = 0;
        video.play().then(fadeIn).catch(() => {});
      }, 100);
    }

    video.style.opacity = 0;
    video.play().then(fadeIn).catch(() => {});
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  // ── Parallax + navbar scroll state ──
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (videoRef.current) {
        // Move video at 40% of scroll speed — creates depth
        videoRef.current.style.transform = `translateY(${y * 0.4}px)`;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="dh-section">
      {/* Background video — parallax layer */}
      <div className="dh-video-wrap">
        <video
          ref={videoRef}
          className="dh-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Content layer */}
      <div className="dh-content-wrap">

        {/* ── Navbar — merged into hero ── */}
        <nav className={`dh-nav${scrolled ? ' dh-nav-scrolled' : ''}`}>
          <div className="dh-nav-left">
            <img src="/ta-monogram.png" alt="Taseel Anwar" className="dh-nav-logo-img" />
            <span className="dh-nav-logo-name">Taseel Anwar</span>
          </div>
          <div className="dh-nav-center">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="dh-nav-link"
                onClick={() => setMenuOpen(false)}
              >{link.label}</Link>
            ))}
          </div>
          <div className="dh-nav-right">
            <Link to="/contact" className="dh-nav-cta">Start a Project</Link>
            <button
              className="dh-hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >☰</button>
          </div>
        </nav>
        <div className="dh-nav-divider" />

        {/* Mobile menu */}
        {menuOpen && (
          <div className="dh-mobile-menu">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="dh-nav-cta" onClick={() => setMenuOpen(false)}>
              Start a Project
            </Link>
          </div>
        )}

        {/* ── Hero ── */}
        <div className="dh-hero-area">
          <div className="dh-blur-blob" aria-hidden="true" />

          <div className="dh-hero-inner">
            {/* Left */}
            <div className="dh-left">
              <h1 className="dh-headline">
                Web apps and AI automation<br />
                <span className="dh-headline-em">built for your business.</span>
              </h1>
              <p className="dh-subtitle">
                I'm Taseel Anwar, a developer based in Lahore. I build Bubble apps, React and Python products, and n8n automations for businesses and founders worldwide.
              </p>
              <div className="dh-ctas">
                <Link to="/portfolio" className="dh-cta-filled">View My Work</Link>
                <Link to="/contact"  className="dh-cta-outline">Hire Me</Link>
              </div>
            </div>

            {/* Right — profile photo card */}
            <div className="dh-right">
              <div className="dh-profile-card">
                {/* Outer decorative ring */}
                <div className="dh-profile-ring" aria-hidden="true" />

                {/* The photo frame */}
                <div className="dh-profile-frame">
                  <div className="dh-profile-glow" aria-hidden="true" />
                  <img
                    src="/taseel.jpg"
                    alt="Taseel Anwar, web application and automation developer"
                    className="dh-profile-photo"
                  />
                  {/* Name plate over photo */}
                  <div className="dh-profile-nameplate">
                    <div className="dh-profile-nameplate-text">
                      <h3>Taseel Anwar</h3>
                      <span>Web Development · Automation · AI</span>
                    </div>
                    <div className="dh-profile-badge">
                      <span className="dh-profile-dot" />
                      Open to work
                    </div>
                  </div>
                </div>

                {/* Profile highlights */}
                <div className="dh-profile-highlights" aria-label="Profile highlights">
                <div className="dh-profile-chip dh-chip-projects">
                  <div className="dh-profile-chip-icon">🏆</div>
                  <div className="dh-profile-chip-label">
                    <strong>10+ Projects</strong>
                    <span>Delivered globally</span>
                  </div>
                </div>

                <div className="dh-profile-chip dh-chip-rating">
                  <div className="dh-profile-chip-icon">⭐</div>
                  <div className="dh-profile-chip-label">
                    <strong>4.9 / 5.0</strong>
                    <span>Upwork rating</span>
                  </div>
                </div>

                <div className="dh-profile-chip dh-chip-stack">
                  <div className="dh-profile-chip-icon">⚡</div>
                  <div className="dh-profile-chip-label">
                    <strong>5 Stacks</strong>
                    <span>Visual tools and custom code</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

function HomePage() {
  const MAIL_TO = 'taseel.work@gmail.com';

  const [selectedDateISO, setSelectedDateISO] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [note, setNote] = useState('');
  const [sentAt, setSentAt] = useState('');

  const timeSlots = ['10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  const dates = useMemo(() => {
    const now = new Date();
    const result = [];
    for (let i = 0; i < 14; i += 1) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      const iso = d.toISOString().slice(0, 10);
      const label = d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
      result.push({ iso, label });
    }
    return result;
  }, []);

  useEffect(() => {
    if (!selectedDateISO && dates.length) {
      setSelectedDateISO(dates[0].iso);
      setSelectedTime(timeSlots[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates]);

  const selectedDateObj = selectedDateISO ? new Date(`${selectedDateISO}T00:00:00`) : null;
  const selectedDateLabel = selectedDateObj
    ? selectedDateObj.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    : '';

  const handleSend = () => {
    const datePart = selectedDateISO || '';
    const timePart = selectedTime || '';
    const subject = `Let\'s Talk — ${datePart} ${timePart}`;
    const body = [
      `Hi Taseel,`,
      `I'd like to schedule a discussion for:`,
      `Date: ${selectedDateLabel || datePart}`,
      `Time: ${timePart || '-'}`,
      ``,
      `Quick note:`,
      note ? note : '-',
      ``,
      `My name:`,
      `-`,
      ``,
      `Sent from your website calendar.`
    ].join('\n');

    setSentAt(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    window.location.href = `mailto:${encodeURIComponent(MAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Background
    ctx.clearRect(0, 0, width, height);
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, 'rgba(15,43,102,0.14)');
    grad.addColorStop(1, 'rgba(59,116,255,0.06)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Silhouette (simple “man”)
    const cx = width * 0.5;
    const headR = Math.min(width, height) * 0.12;
    const headY = height * 0.30;
    ctx.fillStyle = 'rgba(7,29,61,0.78)';
    ctx.beginPath();
    ctx.arc(cx, headY, headR, 0, Math.PI * 2);
    ctx.fill();

    // Body
    const bodyTop = headY + headR * 0.9;
    const bodyBottom = height * 0.82;
    const bodyW = Math.min(width, height) * 0.22;
    ctx.fillStyle = 'rgba(15,43,102,0.75)';
    ctx.beginPath();
    ctx.roundRect(cx - bodyW / 2, bodyTop, bodyW, bodyBottom - bodyTop, Math.min(width, height) * 0.08);
    ctx.fill();

    // Arms
    ctx.strokeStyle = 'rgba(15,43,102,0.62)';
    ctx.lineWidth = Math.max(2, Math.floor(Math.min(width, height) * 0.03));
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx - bodyW / 2, bodyTop + (bodyBottom - bodyTop) * 0.25);
    ctx.lineTo(cx - bodyW * 0.75, bodyTop + (bodyBottom - bodyTop) * 0.38);
    ctx.moveTo(cx + bodyW / 2, bodyTop + (bodyBottom - bodyTop) * 0.25);
    ctx.lineTo(cx + bodyW * 0.75, bodyTop + (bodyBottom - bodyTop) * 0.38);
    ctx.stroke();

    // Glow ring
    ctx.beginPath();
    ctx.arc(cx, headY + headR * 0.2, headR * 2.15, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(59,116,255,0.18)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  return (
    <main>
      <DarkHero />

      <section className="stack-showcase">
        <div className="container stack-cluster-grid">
          <div className="stack-copy">
            <span className="workflow-kicker">LIVE WORKFLOW / 01</span>
            <h2 className="section-title">AI tools that support your business</h2>
            <p className="stack-copy-text">
              From customer support to data processing, I build AI features that fit the way your team works.
            </p>
            <Link to="/services" className="stack-copy-cta">
              Learn more about AI products →
            </Link>
          </div>

          <div className="stack-cluster workflow-canvas" aria-label="AI workflow tools">
            <div className="workflow-scanline" aria-hidden="true" />
            <svg className="workflow-wires" viewBox="0 0 640 440" aria-hidden="true" preserveAspectRatio="none">
              <path d="M320 220 C220 170 150 110 90 80" />
              <path d="M320 220 C430 160 510 100 565 76" />
              <path d="M320 220 C205 245 130 255 64 266" />
              <path d="M320 220 C445 250 515 270 594 286" />
              <path d="M320 220 C275 310 250 365 228 404" />
              <path d="M320 220 C380 310 425 365 466 405" />
            </svg>
            <div className="cluster-center workflow-core" aria-hidden="true">
              <span className="workflow-core-pulse" />
              <FaMagic className="cluster-center-icon" />
              <small>AI CORE</small>
            </div>
            <div className="cluster-grid workflow-nodes">
              {clusterItems.map((item, index) => (
                <div key={item.brand} className={`cluster-item item-${index + 1}`}>
                  <div className={`cluster-badge brand-${item.brand} workflow-node`}>
                    <WorkflowLogo item={item} />
                    
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do-masonry">

        <div className="container">
          <div className="what-we-do-head">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="what-we-do-title">
              Services built around <span className="what-we-do-title-em">your goals</span>
            </h2>
            <p className="what-we-do-sub">
              Explore web development, Bubble applications, AI automation, and data tools built around real business needs.
            </p>
          </div>

          <div className="masonry-grid" role="list">
            {whatWeDoCards.map((card) => (
              <WhatWeDoCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>


      <section className="why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-text">
              <SectionLabel>Why Taseel</SectionLabel>
              <h2>The right tool for<br />the right problem.</h2>
              <p>
                Every project has different needs. I combine visual development, custom code, and automation to create a solution that fits your goals and budget.
              </p>
              <p>
                We start by understanding your users, your workflow, and the result you want to achieve.
              </p>
              <Link to="/about" className="btn-ghost">
                My Philosophy →
              </Link>
            </div>
            <div className="why-features">
              {featureItems.map((feature) => (
                <div key={feature.title} className="feature-item">
                  <div className="feature-check">✓</div>
                  <div>
                    <strong>{feature.title}</strong>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <SectionLabel>Client Reviews</SectionLabel>
          <h2 className="section-title">Words from those<br />we've <em>worked with</em></h2>
          <TestimonialCards />
        </div>
      </section>

      <PremiumLetsTalkSection />

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <h2>Have a project in mind?</h2>
            <p>Every project starts with a conversation. Let's have ours.</p>
            <Link to="/contact" className="btn-primary btn-lg">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


function TestimonialCards() {
  const cardDetails = [
    { avatar: '/avatar-male.svg', company: 'Workflow Studio', role: 'Founder', accent: 'blue' },
    { avatar: '/avatar-male.svg', company: 'ScaleOps', role: 'Operations Lead', accent: 'gold' },
    { avatar: '/avatar-female.svg', company: 'Northline Digital', role: 'Business Owner', accent: 'rose' },
    { avatar: '/avatar-male.svg', company: 'Vertex Systems', role: 'Product Manager', accent: 'teal' }
  ];

  return (
    <div className="testimonials-showcase">
      <p className="testimonials-kicker">Feedback from clients on Upwork.</p>
      <div className="testimonials-grid">
        {testimonials.slice(0, 3).map((item, index) => {
          const detail = cardDetails[index % cardDetails.length];
          return (
            <div key={item.author} className={`testi-card accent-${detail.accent}`}>
              <div className="testi-card-glow" aria-hidden="true" />
              <img className="testi-photo" src={detail.avatar} alt={`${item.author} placeholder portrait`} loading="lazy" />
              <div className="testi-meta">
                <h3>{item.author}</h3>
                <span>{item.role}</span>
              </div>
              <p className="testi-quote">"{item.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{item.initials}</div>
                <strong>Verified Upwork Client</strong>
              </div>
            </div>
          );
        })}
      </div>
      <div className="upwork-badge">
        <a href="https://www.upwork.com/freelancers/~01af62dd25502a2237" target="_blank" rel="noreferrer">
          View my Upwork profile →
        </a>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return undefined;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [paused, total]);

  return (
    <div className="testimonials-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="testimonials-grid" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {testimonials.map((item) => (
          <div key={item.author} className="testi-card">
            <div className="testi-stars">{item.stars}</div>
            <p>{item.quote}</p>
            <div className="testi-author">
              <div className="testi-avatar">{item.initials}</div>
              <div>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-controls">
        <div className="testimonial-counter">{String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
        <div className="testimonial-buttons">
          <button className="testimonial-nav" type="button" onClick={() => setActiveIndex((prev) => (prev - 1 + total) % total)}>
            ←
          </button>
          <button className="testimonial-nav" type="button" onClick={() => setActiveIndex((prev) => (prev + 1) % total)}>
            →
          </button>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`testimonial-dot${index === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
      <div className="upwork-badge">
        <a href="https://www.upwork.com/freelancers/~01af62dd25502a2237" target="_blank" rel="noreferrer">
          View my Upwork profile →
        </a>
      </div>
    </div>
  );
}

const whatWeDoCards = [
  {
    id: 'card-1',
    to: '/portfolio',
    category: 'AI Automation',
    meta: 'Connected flows',
    title: 'AI Automation systems that run the routine work for you',
    description:
      'Triggers, agents, and smart handoffs that keep operations moving while your team focuses on more valuable work.',
    sizeClass: 'size-xl',
    offsetClass: 'offset-a',
    visualType: 'automation'
  },
  {
    id: 'card-2',
    to: '/services#nocode',
    category: 'Bubble Development',
    meta: 'Bubble applications',
    title: 'Bubble Development for fast, flexible product launches',
    description:
      'Build marketplaces, customer portals, and applications tailored to your users.',
    sizeClass: 'size-lg',
    offsetClass: 'offset-b',
    visualType: 'bubble'
  },
  {
    id: 'card-3',
    to: '/services#automation',
    category: 'Automation',
    meta: 'Connected workflows',
    title: 'Automation that connects your apps and data',
    description:
      'Connect business tools, move data between systems, and reduce manual tasks.',
    sizeClass: 'size-md',
    offsetClass: 'offset-c',
    visualType: 'flow'
  },
  {
    id: 'card-4',
    to: '/services#data',
    category: 'Webflow',
    meta: 'Web design',
    title: 'Webflow websites designed for your business',
    description:
      'A website with a clear structure and responsive layouts.',
    sizeClass: 'size-md',
    offsetClass: 'offset-d',
    visualType: 'webflow'
  },
  {
    id: 'card-5',
    to: '/portfolio',
    category: 'Web Applications',
    meta: 'Frontend to backend',
    title: 'Web applications connected to your business tools',
    description:
      'Interfaces, backend services, and integrations built to support your product.',
    sizeClass: 'size-lg',
    offsetClass: 'offset-e',
    visualType: 'stack'
  },
  {
    id: 'card-6',
    to: '/services#automation',
    category: 'Startup MVP',
    meta: 'Launch ready',
    title: 'MVP development for your first launch',
    description:
      'A focused first version of your product, built around the features your users need.',
    sizeClass: 'size-md',
    offsetClass: 'offset-f',
    visualType: 'mvp'
  }
];

function ServiceVisual({ type }) {
  if (type === 'automation') {
    return (
      <div className="masonry-visual-shell visual-automation">
        <span className="visual-orb orb-a" />
        <span className="visual-orb orb-b" />
        <svg viewBox="0 0 220 160" aria-hidden="true" className="visual-network">
          <path className="visual-line line-1" d="M26 92 C64 92, 72 58, 110 58 S156 92, 194 92" />
          <path className="visual-line line-2" d="M26 122 C68 122, 80 90, 110 90 S154 122, 194 122" />
        </svg>
        <div className="visual-node node-a">AI</div>
        <div className="visual-node node-b">Flow</div>
        <div className="visual-node node-c">Ops</div>
      </div>
    );
  }

  if (type === 'bubble') {
    return (
      <div className="masonry-visual-shell visual-bubble">
        <div className="visual-screen screen-large">
          <div className="screen-top" />
          <div className="screen-body">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="visual-screen screen-small screen-a" />
        <div className="visual-screen screen-small screen-b" />
      </div>
    );
  }

  if (type === 'flow') {
    return (
      <div className="masonry-visual-shell visual-flow">
        <div className="visual-flow-core">n8n</div>
        <div className="visual-flow-arm arm-left" />
        <div className="visual-flow-arm arm-right" />
        <div className="visual-flow-node flow-a">Trigger</div>
        <div className="visual-flow-node flow-b">Route</div>
        <div className="visual-flow-node flow-c">Deliver</div>
      </div>
    );
  }

  if (type === 'webflow') {
    return (
      <div className="masonry-visual-shell visual-webflow">
        <div className="browser-window">
          <div className="browser-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="browser-grid">
            <span className="grid-line grid-h" />
            <span className="grid-line grid-v" />
            <span className="grid-card card-a" />
            <span className="grid-card card-b" />
            <span className="grid-card card-c" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'stack') {
    return (
      <div className="masonry-visual-shell visual-stack">
        <div className="stack-side stack-front">UI</div>
        <div className="stack-side stack-back">API</div>
        <div className="stack-connector connector-a" />
        <div className="stack-connector connector-b" />
        <div className="stack-pulse" />
      </div>
    );
  }

  return (
    <div className="masonry-visual-shell visual-mvp">
      <div className="mvp-glow" aria-hidden="true" />
      <svg className="mvp-arc-svg" viewBox="0 0 260 180" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mvpGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.9)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.9)" />
          </linearGradient>
        </defs>
        <path className="mvp-arc-path" d="M 30 155 Q 80 60, 200 22" />
        {/* Step marker dots */}
        <circle cx="30" cy="155" r="4" fill="rgba(99,102,241,0.6)" />
        <circle cx="120" cy="82" r="4" fill="rgba(120,100,241,0.7)" />
        <circle cx="200" cy="22" r="4" fill="rgba(168,85,247,0.8)" />
      </svg>
      <div className="mvp-path" aria-hidden="true" />
      <div className="mvp-rocket">🚀</div>
      <div className="mvp-step step-a">Idea</div>
      <div className="mvp-step step-b">Build</div>
      <div className="mvp-step step-c">Launch</div>
    </div>
  );
}

function WhatWeDoCard({ card }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    setPointer({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <Link
      to={card.to}
      className={`masonry-card ${card.sizeClass} ${card.offsetClass} fade-up`}
      role="listitem"
      aria-label={`${card.category}: ${card.title}`}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setPointer({ x: 50, y: 50 })}
      style={{ '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%` }}
    >
      <div className="masonry-card-media" aria-hidden="true">
        <ServiceVisual type={card.visualType} />
      </div>

      <div className="masonry-card-content">
        <div className="masonry-card-top">
          <span className="masonry-card-category">{card.category}</span>
          <span className="masonry-card-meta">{card.meta}</span>
        </div>

        <h3 className="masonry-card-title">{card.title}</h3>
        <p className="masonry-card-desc">{card.description}</p>

        <div className="masonry-card-cta" aria-hidden="true">
          <span>View service</span>
          <span className="masonry-card-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}


const serviceToolDescriptions = {
  'Bubble.io': 'Marketplaces and web applications built visually.',
  'Webflow': 'Responsive websites with a manageable content system.',
  'Retool': 'Internal tools connected to your business data.',
  'WordPress': 'Content websites your team can maintain.',
  'Lovable / Base44': 'AI assisted prototypes and application development.',
  'n8n': 'Flexible workflows connecting APIs and business tools.',
  'Zapier': 'App integrations that handle repetitive tasks.',
  'AI Automation': 'AI steps integrated into everyday business workflows.',
  'Custom Pipelines': 'Data transformation and routing between systems.',
  'React / Angular': 'Interactive frontends for web applications.',
  'Python / Django': 'Backend services and database applications.',
  'Java': 'Custom software and backend development.',
  'Vibe Coding': 'AI assisted development guided by engineering judgment.',
  'Web Apps & SaaS': 'Custom applications built around your product requirements.',
  'Software & APIs': 'Application logic and integrations between services.',
  'Power BI / Tableau': 'Business dashboards that make data easier to read.',
  'Python / R Visualisation': 'Custom analysis and visual explanations of your data.',
  'BigQuery': 'Querying and analysis for your business datasets.',
  'AI Chatbots': 'Conversational interfaces for your product or workflow.',
  'AI Agents': 'AI tools connected to specific business tasks.'
};

const serviceToolBrands = {
  'Bubble.io': [['Bubble', 'bubble']], 'Webflow': [['Webflow', 'webflow']],
  'Retool': [['Retool', 'retool']], 'WordPress': [['WordPress', 'wordpress']],
  'Lovable / Base44': [['Lovable', 'lovable'], ['Base44', 'base44']],
  'n8n': [['n8n', 'n8n']], 'Zapier': [['Zapier', 'zapier']],
  'AI Automation': [['OpenAI', 'openai']],
  'Custom Pipelines': [['Python', 'python'], ['n8n', 'n8n']],
  'React / Angular': [['React', 'react'], ['Angular', 'angular']],
  'Python / Django': [['Python', 'python'], ['Django', 'django']],
  'Java': [['Java', 'java']], 'Vibe Coding': [['Cursor', 'cursor']],
  'Web Apps & SaaS': [['React', 'react'], ['Supabase', 'supabase']],
  'Software & APIs': [['Python', 'python'], ['Django', 'django']],
  'Power BI / Tableau': [['Power BI', 'power-bi'], ['Tableau', 'tableau']],
  'Python / R Visualisation': [['Python', 'python'], ['R', 'r']],
  'BigQuery': [['BigQuery', 'google-bigquery']], 'AI Chatbots': [['OpenAI', 'openai']],
  'AI Agents': [['OpenAI', 'openai'], ['n8n', 'n8n']]
};
const serviceBrandColors = {
  webflow: '#146EF5', wordpress: '#21759B', zapier: '#FF4A00', react: '#087EA4',
  angular: '#DD0031', python: '#3776AB', django: '#092E20', java: '#E76F00',
  supabase: '#248553', 'power-bi': '#BD9100', tableau: '#E97627',
  'google-bigquery': '#4285F4', r: '#276DC3'
};
function ServiceToolCard({ tool }) {
  return <article className="svc-tool">
    <div className="svc-tool-brands">{serviceToolBrands[tool.name].map(([name, slug]) => {
      const Icon = slug === 'r' ? SiR : techIconMap[slug];
      const image = slug === 'bubble' ? 'https://cdn.worldvectorlogo.com/logos/bubble-io.svg'
        : slug === 'base44' ? '/brands/services/base44.png'
        : ['retool', 'n8n', 'cursor', 'lovable'].includes(slug) ? `/brands/services/${slug}.svg` : null;
      return <div className="svc-tool-brand" key={slug}>
        <span className="svc-tool-logo" style={{ color: serviceBrandColors[slug] || '#17171b' }}>
          {image ? <img src={image} alt="" width="28" height="28" loading="lazy" /> : <Icon aria-hidden="true" />}
        </span><span>{name}</span>
      </div>;
    })}</div>
    <h3>{tool.name}</h3><p>{serviceToolDescriptions[tool.name]}</p>
  </article>;
}

function ServicesPage() {
  const titles = ['From idea to working product', 'Give repetitive work a better system', 'Software built for the way you work', 'Make your data useful'];
  const icons = [FiLayers, FiZap, BsCursorText, TbBrandGoogleBigQuery];
  return <main className="svc">
    <section className="svc-hero svc-wrap">
      <p className="svc-eyebrow">Services / Taseel Anwar</p>
      <div className="svc-intro"><h1>Web development and<br /><span>automation services.</span></h1><div><p>I build web applications, automate workflows, and create data tools for founders and businesses.</p><Link className="svc-button" to="/contact">Let's talk about your project <span>↗</span></Link></div></div>
      <nav className="svc-index" aria-label="Service categories">{servicesSections.map((section,i)=><a href={`#${section.id}`} key={section.id}><span>0{i+1}</span>{section.label}<span>↓</span></a>)}</nav>
    </section>
    <div className="svc-wrap">{servicesSections.map((section,i)=>{const Icon=icons[i];return <section className="svc-section" id={section.id} key={section.id}>
      <header className="svc-heading"><span className="svc-num">0{i+1}</span><div><p className="svc-eyebrow">{section.label}</p><h2>{titles[i]}</h2><p className="svc-summary">{section.description}</p><Link to="/contact" className="svc-link">Discuss this service ↗</Link></div><Icon className="svc-category-icon" aria-hidden="true" /></header>
      <div className="svc-tools">{section.tools.map(tool=><ServiceToolCard tool={tool} key={tool.name} />)}</div>
    </section>})}</div>
    <section className="svc-contact"><div className="svc-wrap"><p className="svc-eyebrow">Have a project in mind?</p><h2>Let's find the right<br />way to build it.</h2><Link to="/contact" className="svc-button">Tell me what you're working on <span>↗</span></Link></div></section>
  </main>;
}

function PortfolioItem({ item, reverse }) {
  return (
    <div className={`portfolio-item${reverse ? ' reverse' : ''}`}>
      <div className={`portfolio-visual${reverse ? ' reverse' : ''}`}>
        {item.image ? <a className="portfolio-real-image" href={item.image} target="_blank" rel="noreferrer" aria-label={`View ${item.title} screenshot`}><img src={item.image} alt={`${item.title} project screenshot`} loading="lazy" /></a> : <div className="portfolio-placeholder">
          <div className="placeholder-label">Thumbnail coming soon</div>
          <p>Project preview coming soon.</p>
        </div>}
        <div className="portfolio-tags-visual">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-number">{item.number}</div>
        <h2>{item.title}</h2>
        <p className="portfolio-role">{item.role}</p>
        <p>{item.description}</p>
        <div className="portfolio-tech">
          {item.tags.map((tag) => (
            <div key={tag} className="tech-tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="portfolio-outcome">
          <span className="outcome-label">Includes:</span> {item.outcome}
        </div>
        {item.source && <a className="portfolio-source" href={item.source} target="_blank" rel="noreferrer">{item.sourceLabel || 'View on Upwork'} ↗</a>}
      </div>
    </div>
  );
}

function PortfolioPage() {
  return (
    <main>
      <PageHero
        label="Our Work"
        title="Web apps and automation projects"
        subtitle="Explore Bubble apps, SaaS products, dashboards, and n8n workflows built for real business needs."
      />
      <section className="portfolio-section">
        <div className="container">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.title} item={{...item, number: String(index + 1).padStart(2, '0')}} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <h2>Have a project in mind?</h2>
            <p>Tell me what you want to build, connect, or improve.</p>
            <Link to="/contact" className="btn-primary btn-lg">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <PageHero
        label="About Me"
        title="Meet Taseel Anwar, developer and automation specialist"
        subtitle="Based in Lahore, I work with founders and businesses worldwide to turn ideas into useful digital products."
      />
      <section className="about-mission">
        <div className="container">
          <div className="mission-inner">
            <div className="mission-quote">
              <blockquote>
                I help businesses turn ideas into working software. Each project starts with a clear understanding of the problem, then moves forward with tools that fit the people who will use it.
              </blockquote>
              <cite>Taseel Anwar, Lahore</cite>
            </div>
            <div className="mission-pillars">
              {aboutPillars.map((pillar) => (
                <div key={pillar.number} className="pillar">
                  <div className="pillar-num">{pillar.number}</div>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="difference-section">
        <div className="container">
          <SectionLabel>What Makes Me Different</SectionLabel>
          <h2 className="section-title">I speak every layer of the modern stack.</h2>
          <div className="stack-visual">
            {stackLayers.map((layer, index) => (
              <div key={layer.label} className="stack-layer">
                <div className="stack-label">{layer.label}</div>
                <div className="stack-tools">{layer.tools}</div>
              </div>
            ))}
          </div>
          <p className="stack-caption">
            I work across interfaces, applications, automation, and data. That breadth helps me choose a suitable approach for each project.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="container">
          <SectionLabel>My Values</SectionLabel>
          <h2 className="section-title">How I work</h2>
          <div className="values-grid">
            {valueCards.map((card) => (
              <div key={card.title} className="value-card">
                <div className="value-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <h2>Let's discuss your project.</h2>
            <p>Tell me what you want to build or improve, and we can discuss the next step.</p>
            <Link to="/contact" className="btn-primary btn-lg">
              Let's Connect →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Project inquiry from ${formState.name}`;
    const body = [`Name: ${formState.name}`, `Email: ${formState.email}`, `Service: ${formState.service || 'Not specified'}`, `Budget: ${formState.budget || 'Not specified'}`, '', formState.message].join('\n');
    window.location.href = `mailto:taseel.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main>
      <PageHero
        label="Get in Touch"
        title="Tell me about your project."
        subtitle="Looking for a Bubble developer, web application, or automation? Share your goals and we can discuss the right approach."
      />
      <section className="contact-section">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-form-wrap">
              <h2>Send me a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      required
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" value={formState.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option>No Code Development (Bubble.io / Webflow / Retool)</option>
                    <option>Automation (n8n / Zapier / AI workflows)</option>
                    <option>Web / App Development (React / Django / Python)</option>
                    <option>Data Visualisation (Power BI / Tableau / BigQuery)</option>
                    <option>AI Chatbot or Agent</option>
                    <option>Vibe Coding / AI Assisted Development</option>
                    <option>Not sure, I need advice</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" value={formState.budget} onChange={handleChange}>
                    <option value="">Select a range...</option>
                    <option>Under $1,000</option>
                    <option>$1,000 to $5,000</option>
                    <option>$5,000 to $15,000</option>
                    <option>$15,000 to $50,000</option>
                    <option>$50,000+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell me about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe your idea, the problem you want to solve, and any details you already have."
                    required
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn-primary btn-full">
                  {sent ? 'Open email draft again' : 'Continue to email →'}
                </button>
                {sent && <div className="form-success">Your email app will open with your message. Please send it from there.</div>}
              </form>
            </div>
            <div className="contact-info">
              <h2>Other ways to get in touch</h2>
              {contactCards.map(({ Icon, title, content, secondary, href }) => (
                <div key={title} className="contact-card">
                  <div className="contact-card-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer">
                        {content}
                      </a>
                    ) : (
                      <span>{content}</span>
                    )}
                    <p>{secondary}</p>
                  </div>
                </div>
              ))}
              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-grid">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" className="social-btn">
                      <Icon size={16} style={{ marginRight: 6 }} /> {label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="response-note">
                <div className="rn-icon">⏱</div>
                <div>
                  <strong>Let’s start a conversation</strong>
                  <p>Share a few details about your project and I will get back to you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  const [, setFit] = useState(0);

  useEffect(() => {
    function fitWatermark() {
      const svg = document.getElementById('watermarkSvg');
      const text = document.getElementById('watermarkText');
      if (!svg || !text) return;
      try {
        const bbox = text.getBBox();
        svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      } catch (e) {}
      setFit(f => f + 1);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWatermark);
    } else {
      window.addEventListener('load', fitWatermark);
    }
    window.addEventListener('resize', fitWatermark);
    return () => window.removeEventListener('resize', fitWatermark);
  }, []);

  return (
    <section className="footer-section">
      <div className="footer-wrapper">

        {/* LEFT CARD */}
        <div className="footer-left">
          <video className="footer-left-video" autoPlay muted loop playsInline preload="auto">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4" type="video/mp4" />
          </video>
          <div className="footer-logo">
            <img src="/ta-monogram.png" alt="Taseel Anwar" className="footer-logo-svg" />
            <span className="footer-logo-name">Taseel Anwar</span>
          </div>
          <div className="footer-tagline-container">
            <p className="footer-tagline">
              Web developer and automation specialist,<br /><span>building fast, modern digital products.</span>
            </p>
          </div>
          <div className="footer-social-row">
            <span className="footer-social-label">Stay in touch!</span>
            <div className="footer-social-icons">
              <a href="https://github.com/Taseel-Anwar" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <SiGithub size={15} color="white" />
              </a>
              <a href="https://www.linkedin.com/in/taseel" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <SiLinkedin size={15} color="white" />
              </a>
              <a href="https://www.upwork.com/freelancers/~01af62dd25502a2237" target="_blank" rel="noreferrer" className="social-icon" aria-label="Upwork">
                <SiUpwork size={15} color="white" />
              </a>
              <a href="mailto:taseel.work@gmail.com" className="social-icon" aria-label="Email">
                <FiMail size={15} color="white" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="footer-right">
          <div className="footer-lucky-graphic">
            <div className="lucky-cube">
              <img src="/ta-monogram.png" alt="Taseel Anwar" className="lucky-cube-favicon" />
            </div>
            <div className="lucky-text-row">
              <svg className="lucky-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20 C 6 14, 10 9, 18 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 5 L 12 5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 5 L 18 11" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="lucky-text">Feeling lucky?</span>
            </div>
          </div>

          <div className="footer-right-top">
            <div className="footer-nav-cols">
              <div className="footer-col">
                <div className="footer-col-title">Navigation</div>
                <Link to="/services">Services</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="footer-col">
                <div className="footer-col-title">Services</div>
                <a href="/services#nocode">No Code</a>
                <a href="/services#automation">Automation</a>
                <a href="/services#code">Development</a>
                <a href="/services#data">Data &amp; AI</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">&copy; {new Date().getFullYear()} Taseel Anwar. All rights reserved.</span>
            <div className="footer-cta-mini">
              <h4>Let's connect.<br /><strong>Work with Taseel.</strong></h4>
              <div className="footer-subscribe-row">
                <input type="email" placeholder="Enter email address" aria-label="Email address" />
                <button type="button" onClick={() => { window.location.href = 'mailto:taseel.work@gmail.com'; }}>
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Watermark */}
      <div className="footer-watermark" aria-hidden="true">
        <svg id="watermarkSvg" viewBox="62 95 876 175" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgba(99,102,241,0)" />
              <stop offset="20%"  stopColor="rgba(99,102,241,0.09)" />
              <stop offset="50%"  stopColor="rgba(168,85,247,0.12)" />
              <stop offset="80%"  stopColor="rgba(99,102,241,0.09)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0)" />
            </linearGradient>
          </defs>
          <text id="watermarkText" x="500" y="240" textAnchor="middle" fontSize="320" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="600" fontStyle="italic" letterSpacing="-0.02em" fill="url(#wmGrad)">Taseel</text>
        </svg>
      </div>
    </section>
  );
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  useScrollTop();

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, '') || '/';
    const seo = pageSeo[path];
    if (!seo) return;
    document.title = seo.title;
    const setMeta = (selector, attribute, name, content) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', `${siteUrl}${path === '/' ? '/' : path}`);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${siteUrl}${path === '/' ? '/' : path}`;
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-shell">
      {!isHome && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

