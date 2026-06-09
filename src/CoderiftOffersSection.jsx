import React from 'react';
import { Link } from 'react-router-dom';

import {
  FiZap,
  FiLayers,
  FiGrid,
  FiCode,
  FiTool,
  FiSend
} from 'react-icons/fi';


const offers = [
  {
    id: 'ai-automation',
    featured: true,
    badge: 'Most Popular',
    title: 'AI Automation Systems',
    description:
      'Eliminate repetitive work and automate critical business processes using custom AI-powered workflows.',
    benefits: [
      'Reduce manual workload',
      'Increase operational efficiency',
      'Improve response times',
      'Scale without hiring'
    ],
    cta: 'Explore Automation',
    to: '/services#automation',
    icon: FiZap
  },
  {
    id: 'bubble-saas',
    title: 'Bubble.io SaaS Development',
    description:
      'Launch scalable SaaS products quickly without the cost and delays of traditional development.',
    benefits: ['Faster MVP launches', 'Lower development costs', 'Rapid iterations', 'Startup-friendly solutions'],
    cta: 'Build Your SaaS',
    to: '/services#nocode',
    icon: FiLayers
  },
  {
    id: 'webflow',
    title: 'Webflow Business Websites',
    description:
      'Modern, conversion-focused websites designed to showcase your brand and generate leads.',
    benefits: ['Premium design', 'Fast performance', 'SEO-friendly structure', 'Easy content management'],
    cta: 'View Website Solutions',
    to: '/services#nocode',
    icon: FiGrid
  },
  {
    id: 'fullstack',
    title: 'Custom Full-Stack Applications',
    description:
      'Build powerful web applications with custom functionality tailored to your business requirements.',
    benefits: ['Unlimited flexibility', 'Scalable architecture', 'Secure infrastructure', 'Future-ready solutions'],
    cta: 'Start Your Project',
    to: '/services#code',
    icon: FiCode
  },
  {
    id: 'nocode-lowcode',
    title: 'No-Code & Low-Code Solutions',
    description:
      'Reduce development expenses and accelerate delivery using modern no-code and low-code platforms.',
    benefits: ['Lower costs', 'Faster deployment', 'Easy maintenance', 'Rapid scaling'],
    cta: 'Learn More',
    to: '/services#nocode',
    icon: FiTool
  },
  {
    id: 'mvp-packages',
    title: 'Startup MVP Packages',
    description:
      'Validate ideas quickly with lean MVP development designed for startups and founders.',
    benefits: ['Faster time-to-market', 'Investor-ready products', 'Reduced risk', 'Cost-efficient development'],
    cta: 'Launch Your MVP',
    to: '/contact',
    icon: FiSend
  }
];


function OfferCard({ offer }) {
  const Icon = offer.icon;

  return (
    <Link
      to={offer.to}
      className={`offer-card${offer.featured ? ' offer-card-featured' : ''}${offer.id}`}
      aria-label={offer.title}
    >
      <div className="offer-card-inner">
        {offer.badge ? <div className="offer-badge">{offer.badge}</div> : null}

        <div className="offer-icon" aria-hidden="true">
          <Icon />
        </div>

        <h3 className="offer-title">{offer.title}</h3>
        <p className="offer-desc">{offer.description}</p>

        <ul className="offer-benefits" aria-label={`${offer.title} benefits`}>
          {offer.benefits.map((b) => (
            <li key={b}>
              <span className="offer-check" aria-hidden="true">
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="offer-cta" aria-hidden="true">
          <span>{offer.cta}</span>
          <span className="offer-cta-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function CoderiftOffersSection() {
  return (
    <section className="offers-section" aria-label="Coderift offers">
      <div className="container">
        <div className="offers-header">
          <h2 className="offers-title">Maximize Your Investment With Coderift</h2>
          <p className="offers-sub">
            From rapid MVP launches to AI-powered automations, our solutions help businesses reduce development
            costs, launch faster, and scale efficiently.
          </p>
        </div>

        <div className="offers-grid" role="list">
          {offers.map((offer) => (
            <div key={offer.id} role="listitem" className="offers-grid-item">
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


