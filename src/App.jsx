import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { FiMail, FiMapPin, FiLayers, FiZap } from 'react-icons/fi';
import { BsCursorText } from 'react-icons/bs';
import { SlBubble } from 'react-icons/sl';
import { FaJava, FaMagic } from 'react-icons/fa';
import { TbBrandGoogleBigQuery } from 'react-icons/tb';
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
  SiWordpress
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
  { name: 'deepseek', brand: 'deepseek' },
  { name: 'OpenAI', brand: 'openai' },
  { name: 'Gemini', brand: 'gemini' },
  { name: 'MISTRAL AI_', brand: 'mistral' },
  { name: 'ANTHROPIC', brand: 'anthropic' },
  { name: 'Llama', brand: 'llama' }
];

const serviceCards = [
  {
    title: 'No-Code Solutions',
    description: 'Bubble.io, Webflow, Retool, WordPress, Lovable, Base44 — launch full products faster than ever.',
    link: '/services#nocode',
    slug: 'bubble'
  },
  {
    title: 'Automation',
    description: 'n8n, Zapier, and AI-native workflows that eliminate repetitive work and connect your business systems.',
    link: '/services#automation',
    slug: 'n8n'
  },
  {
    title: 'Code & Vibe Coding',
    description: 'React, Angular, Python, Django, Java — plus AI-assisted development with Cursor and Claude.',
    link: '/services#code',
    slug: 'react'
  },
  {
    title: 'Data & AI',
    description: 'Power BI, Tableau, BigQuery, Python dashboards and custom intelligence for modern decision-making.',
    link: '/services#data',
    slug: 'power-bi'
  }
];

const featureItems = [
  {
    title: 'Fast to market',
    description: 'MVPs and full products delivered in days to weeks, not months.'
  },
  {
    title: 'Budget-efficient',
    description: 'Modern tooling slashes development cost without sacrificing quality.'
  },
  {
    title: 'Scalable solutions',
    description: 'Built to grow — from startup MVP to enterprise-grade platform.'
  },
  {
    title: 'AI-native approach',
    description: 'We bake intelligence in from day one — chatbots, automation, analytics.'
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
    label: 'No-Code Solutions',
    title: 'Build without code. Launch without limits.',
    description: 'We are specialists in leading no-code platforms, chosen strategically for your specific use case.',
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
    description: 'We build automation pipelines that connect tools, trigger events, transform data, and route information automatically.',
    icon: '⟳',
    tools: [
      { name: 'n8n', slug: 'n8n' },
      { name: 'Zapier', slug: 'zapier' },
      { name: 'AI-powered Automation', slug: 'openai' },
      { name: 'Custom Pipelines', slug: 'power-bi' }
    ],
    accent: true
  },
  {
    id: 'code',
    label: 'Code & Vibe Coding',
    title: 'Full-stack development at AI-assisted velocity.',
    description: 'We combine traditional engineering with modern AI development tools to ship production-ready code in a fraction of the time.',
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
    description: 'We help businesses visualise data clearly and embed AI directly into workflows — from dashboards to custom agents.',
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
    number: '01',
    title: 'Sports Programs Marketplace',
    role: 'Lead Product Architect & No-Code Specialist',
    description: 'A centralised marketplace for local sports programs, camps, and verified athletic coaches — designed for parents and community organisers.',
    tags: ['Bubble.io', 'Marketplace', 'No-Code'],
    outcome: 'Full marketplace platform delivered rapidly with a polished user experience.'
  },
  {
    number: '02',
    title: 'Advanced Car Inspection Platform',
    role: 'Full-Stack Retool Application',
    description: 'A visual vehicle inspection workflow with live reports, API integrations, and dynamic status tracking for inspection teams.',
    tags: ['Retool', 'MongoDB', 'API'],
    outcome: 'Interactive inspection workflows with real-time data and automated report generation.'
  },
  {
    number: '03',
    title: 'Tradernode — Financial Management MVP',
    role: 'SaaS Platform for Prop Traders',
    description: 'A clean trading dashboard with P&L analytics, payout tracking, and portfolio monitoring for active traders.',
    tags: ['Bubble.io', 'SaaS', 'FinTech'],
    outcome: 'A fully functional financial MVP delivered without traditional development overhead.'
  },
  {
    number: '04',
    title: 'Taxi Service Dashboard Ecosystem',
    role: 'Admin Platform + Connected Apps',
    description: 'A comprehensive control system for taxi operations with role-based access, dispatch dashboards, and fleet analytics.',
    tags: ['Retool', 'MongoDB', 'RBAC'],
    outcome: 'One unified platform for operations, drivers, and dispatch management.'
  }
];

const aboutPillars = [
  {
    number: '01',
    title: 'Right tool, right problem',
    description: 'We prescribe the most efficient path based on your budget, timeline, and growth goals.'
  },
  {
    number: '02',
    title: 'Modern over traditional',
    description: 'Modern tooling often produces better outcomes for business problems — faster and cheaper.'
  },
  {
    number: '03',
    title: 'Speed without sacrifice',
    description: 'Faster delivery doesn\'t mean lower quality. It means clear scope and better tooling.'
  },
  {
    number: '04',
    title: 'Low cost, high impact',
    description: 'Enterprise-level thinking delivered with startup-friendly budgets.'
  }
];

const stackLayers = [
  {
    label: 'AI & Automation',
    tools: 'Claude · n8n · Zapier · LLMs · Custom Agents'
  },
  {
    label: 'No-Code / Low-Code',
    tools: 'Bubble.io · Webflow · Retool · Lovable · Base44 · WordPress'
  },
  {
    label: 'Vibe Coding',
    tools: 'Cursor · Claude · v0 · AI-assisted development'
  },
  {
    label: 'Full-Stack Code',
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
    description: 'We recommend the right solution, not the most expensive one.'
  },
  {
    icon: '∞',
    title: 'Always learning',
    description: 'The modern stack evolves weekly. We stay current so our clients benefit from the latest tools.'
  },
  {
    icon: '◈',
    title: 'Client-first delivery',
    description: 'We communicate clearly, deliver on time, and stay responsive throughout every engagement.'
  }
];

const contactCards = [
  {
    Icon: FiMail,
    title: 'Email',
    content: 'taseel.work@gmail.com',
    secondary: 'We respond within 24 hours',
    href: 'mailto:taseel.work@gmail.com'
  },
  {
    Icon: SiWhatsapp,
    title: 'WhatsApp',
    content: '+92 321 430 8899',
    secondary: 'Fastest way to reach us',
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
    content: 'View our profile',
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
          <img src="/favicon.svg" alt="Coderift" width="32" height="32" />
          <span>Coderift</span>
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

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg">
          <div className="grid-overlay" />
          <div className="orb orb1" />
          <div className="orb orb2" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" /> Modern Tech Solutions
          </div>
          <h1 className="hero-title">
            Rift Through
            <br />the <em>Ordinary.</em>
          </h1>
          <p className="hero-sub">
            We build fast, efficient digital products using the modern toolset — no-code, AI automation, and scalable web
            platforms. Your idea, live before competitors wake up.
          </p>
          <div className="hero-actions">
            <Link to="/portfolio" className="btn-primary">
              View Our Work
            </Link>
            <Link to="/services" className="btn-ghost">
              Explore Services
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">Case Studies</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">No-Code</span>
              <span className="stat-label">to Full-Stack</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">10×</span>
              <span className="stat-label">Faster Delivery</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="tb tb1" />
              <span className="tb tb2" />
              <span className="tb tb3" />
              <span className="terminal-title">coderift.sh</span>
            </div>
            <div className="terminal-body">
              <div className="t-line">
                <span className="t-prompt">$</span> <span className="t-cmd typing">init project --stack modern</span>
              </div>
              <div className="t-line t-out">✓ No-code layer initialized</div>
              <div className="t-line t-out">✓ AI automation connected</div>
              <div className="t-line t-out">✓ Vibe coding activated</div>
              <div className="t-line t-out">✓ Full-stack ready</div>
              <div className="t-line">
                <span className="t-prompt">$</span> <span className="t-cmd">deploy --fast --efficient</span>
              </div>
              <div className="t-line t-success">🚀 Product live. Budget saved.</div>
              <div className="t-cursor">_</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stack-showcase">
        <div className="container stack-cluster-grid">
          <div className="stack-copy">
            <h2 className="section-title">We use AI throughout our work</h2>
            <p className="stack-copy-text">
              We integrate AI into various parts of our process to streamline it, as well as into the products that we build.
            </p>
            <Link to="/services" className="stack-copy-cta">
              Learn more about AI products
            </Link>
          </div>

          <div className="stack-cluster">
            {clusterItems.map((item, index) => (
              <span key={`${item.brand}-line`} className={`cluster-line line-${index + 1}`} aria-hidden="true" />
            ))}
            <div className="cluster-center">
              <FaMagic className="cluster-center-icon" aria-label="AI" />
            </div>
            {clusterItems.map((item, index) => (
              <div key={item.brand} className={`cluster-item item-${index + 1}`}>
                <div className={`cluster-badge brand-${item.brand}`}>
                  <span className="brand-mark" aria-hidden="true" />
                  <span className="brand-name">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="section-title">Four pillars of<br />modern delivery</h2>
          <div className="services-grid">
            {serviceCards.map((service) => (
              <Link key={service.title} to={service.link} className="service-card">
                <div className="service-icon">
                  <TechLogo slug={service.slug} label={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-text">
              <SectionLabel>Why Coderift</SectionLabel>
              <h2>The right tool for<br />the right problem.</h2>
              <p>
                Traditional tech stacks are expensive and slow. We use the modern toolkit — no-code platforms, AI
                assistants, automation layers — to get you there in weeks, not quarters.
              </p>
              <p>
                We don\'t sell you a hammer and call everything a nail. We diagnose your problem first and prescribe the
                fastest solution.
              </p>
              <Link to="/about" className="btn-ghost">
                Our Philosophy →
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
          <TestimonialCarousel />
        </div>
      </section>

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
          View our Upwork profile →
        </a>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <main>
      <PageHero
        label="Our Services"
        title="Everything your business needs to move fast."
        subtitle="From zero-code MVPs to enterprise software, we build with what works best for your problem, timeline, and budget."
      />
      {servicesSections.map((section) => (
        <section key={section.id} className={`service-section${section.accent ? ' alt-bg' : ''}`} id={section.id}>
          <div className="container">
            <div className="service-section-inner">
              <div className="service-section-header">
                <div className="service-big-icon">{section.icon}</div>
                <div>
                  <SectionLabel>{section.label}</SectionLabel>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
              </div>
              <div className="tools-grid">
                {section.tools.map((tool) => (
                  <div key={tool.name} className="tool-card">
                    <div className="tool-card-icon">
                      <TechLogo slug={tool.slug} label={tool.name} />
                    </div>
                    <div className="tool-name">{tool.name}</div>
                    <p>{tool.description || 'Modern products built for your business, with the right technology at every step.'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <h2>Not sure which service you need?</h2>
            <p>Tell us your problem. We'll recommend the fastest path to your solution.</p>
            <Link to="/contact" className="btn-primary btn-lg">
              Talk to Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PortfolioItem({ item, reverse }) {
  return (
    <div className={`portfolio-item${reverse ? ' reverse' : ''}`}>
      <div className={`portfolio-visual${reverse ? ' reverse' : ''}`}>
        <div className="portfolio-placeholder">
          <div className="placeholder-label">Thumbnail coming soon</div>
          <p>Upload project image later.</p>
        </div>
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
          <span className="outcome-label">Outcome:</span> {item.outcome}
        </div>
      </div>
    </div>
  );
}

function PortfolioPage() {
  return (
    <main>
      <PageHero
        label="Our Work"
        title="Projects that prove the Coderift approach."
        subtitle="Real problems solved with the right tool — not the most expensive one."
      />
      <section className="portfolio-section">
        <div className="container">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.number} item={item} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <h2>Have a project in mind?</h2>
            <p>Upload the thumbnail later — we can build the experience first.</p>
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
        label="About Coderift"
        title="We exist to close the gap between idea and live product."
        subtitle="Lahore-based. Globally delivered. Built on the belief that the best solution isn\'t always the most complex one."
      />
      <section className="about-mission">
        <div className="container">
          <div className="mission-inner">
            <div className="mission-quote">
              <blockquote>
                People today need to run an idea as fast as possible. Traditional tech stacks require more budget and
                more time than most businesses have. We provide the right solution for the right problem — using modern
                tools that make development fast, efficient, and accessible.
              </blockquote>
              <cite>— Coderift, Lahore</cite>
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
          <SectionLabel>The Coderift Difference</SectionLabel>
          <h2 className="section-title">We speak every layer of the modern stack.</h2>
          <div className="stack-visual">
            {stackLayers.map((layer, index) => (
              <div key={layer.label} className="stack-layer">
                <div className="stack-label">{layer.label}</div>
                <div className="stack-tools">{layer.tools}</div>
              </div>
            ))}
          </div>
          <p className="stack-caption">
            Most agencies specialise in one layer. We operate across all five — which means we choose the optimal
            approach for your specific problem rather than defaulting to what we know.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="container">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="section-title">What we believe</h2>
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
            <h2>Work with a team that thinks differently.</h2>
            <p>We'd love to hear about your project, your problem, or just your idea.</p>
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
    setSent(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', service: '', budget: '', message: '' });
    }, 1000);
  };

  return (
    <main>
      <PageHero
        label="Get in Touch"
        title="Let's build something extraordinary."
        subtitle="Whether you have a clear brief or just a rough idea, we'd love to hear it. We'll come back with clarity."
      />
      <section className="contact-section">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-form-wrap">
              <h2>Send us a message</h2>
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
                    <option>No-Code Solution (Bubble.io / Webflow / Retool)</option>
                    <option>Automation (n8n / Zapier / AI workflows)</option>
                    <option>Web / App Development (React / Django / Python)</option>
                    <option>Data Visualisation (Power BI / Tableau / BigQuery)</option>
                    <option>AI Chatbot or Agent</option>
                    <option>Vibe Coding / AI-Assisted Development</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" value={formState.budget} onChange={handleChange}>
                    <option value="">Select a range...</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe your idea, problem, or goal. The more detail the better — but a rough sketch is fine too."
                    required
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn-primary btn-full">
                  {sent ? 'Message Sent ✓' : 'Send Message →'}
                </button>
                {sent && <div className="form-success">✓ Message sent! We'll get back to you within 24 hours.</div>}
              </form>
            </div>
            <div className="contact-info">
              <h2>Other ways to reach us</h2>
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
                <h4>Follow Us</h4>
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
                  <strong>Typical response time: &lt; 12 hours</strong>
                  <p>We take every inquiry seriously and respond thoughtfully to every message.</p>
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
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo">
              <img src="/favicon.svg" alt="Coderift" width="28" height="28" />
              <span>Coderift</span>
            </Link>
            <p>Modern tech solutions for businesses that refuse to move slow.</p>
            <div className="footer-socials">
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <a href="/services#nocode">No-Code</a>
            <a href="/services#automation">Automation</a>
            <a href="/services#code">Development</a>
            <a href="/services#data">Data & AI</a>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="mailto:taseel.work@gmail.com">taseel.work@gmail.com</a>
            <a href="https://wa.me/923214308899" target="_blank" rel="noreferrer">
              WhatsApp: +92 321 430 8899
            </a>
            <span>Lahore, Pakistan</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Coderift. All rights reserved.</span>
          <span>Rift through the ordinary.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const location = useLocation();
  useScrollTop();

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
      <Header />
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
