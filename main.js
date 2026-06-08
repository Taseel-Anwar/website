// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.service-card, .testi-card, .tool-card, .portfolio-item, .value-card, .feature-item, .pillar, .portfolio-content, .portfolio-visual, .contact-card, .stack-layer'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Contact form simulation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      document.getElementById('form-success').style.display = 'block';
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#5aad6a';
    }, 1200);
  });
}

// Hero cursor movement parallax effect
const hero = document.querySelector('.hero');
const heroOrbs = document.querySelectorAll('.hero .orb');
const heroContent = document.querySelector('.hero-content');
const heroVisual = document.querySelector('.hero-visual');
let heroRaf = null;

if (hero && heroContent && heroVisual && heroOrbs.length) {
  hero.addEventListener('mousemove', (event) => {
    const rect = hero.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    if (heroRaf) return;
    heroRaf = requestAnimationFrame(() => {
      heroContent.style.transform = `translate3d(${offsetX * 16}px, ${offsetY * 12}px, 0)`;
      heroVisual.style.transform = `translate3d(${offsetX * 10}px, ${offsetY * 8}px, 0) rotate(${offsetX * 2}deg)`;
      heroOrbs[0].style.transform = `translate3d(${offsetX * 32}px, ${offsetY * 18}px, 0)`;
      heroOrbs[1].style.transform = `translate3d(${offsetX * 18}px, ${offsetY * 26}px, 0)`;
      heroRaf = null;
    });
  });

  hero.addEventListener('mouseleave', () => {
    heroContent.style.transform = '';
    heroVisual.style.transform = '';
    heroOrbs.forEach(orb => orb.style.transform = '');
  });
}
// Load service/tool icons (local fallback -> SimpleIcons CDN -> favicon)
function loadToolIcons() {
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c8a96e';
  const color = accent.replace('#','') || 'c8a96e';

  const loadFor = (el, slug) => {
    if (!slug) return;
    const img = document.createElement('img');
    img.className = 'svg-icon-img';
    img.alt = slug;
    // try CDN first
    img.src = `https://cdn.simpleicons.org/${slug}/${color}`;
    img.onload = () => {
      el.appendChild(img);
    };
    img.onerror = () => {
      // try local file
      img.src = `icons/${slug}.svg`;
      img.onload = () => el.appendChild(img);
      img.onerror = () => {
        // final fallback: site favicon
        const f = document.createElement('img');
        f.className = 'svg-icon-img';
        f.src = 'favicon.svg';
        f.alt = 'icon';
        el.appendChild(f);
      };
    };
  };

  document.querySelectorAll(
    '.tool-card[data-icon] .tool-card-icon, .service-card[data-icon] .service-icon, .stack-pill[data-icon] .stack-pill-icon'
  ).forEach(el => {
    const parent = el.closest('[data-icon]');
    const slug = parent && parent.getAttribute('data-icon');
    el.innerHTML = '';
    loadFor(el, slug);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadToolIcons();
  initTestimonialCarousel();
});

function initTestimonialCarousel() {
  const section = document.querySelector('.testimonials');
  if (!section) return;
  const carousel = section.querySelector('.testimonials-grid');
  const cards = section.querySelectorAll('.testi-card');
  const dotsContainer = section.querySelector('.testimonial-dots');
  const counter = section.querySelector('.testimonial-counter');
  const prevButton = section.querySelector('.testimonial-prev');
  const nextButton = section.querySelector('.testimonial-next');
  if (!carousel || !cards.length) return;

  let activeIndex = 0;
  let intervalId = null;
  const total = cards.length;

  const formatCounter = (value) => String(value).padStart(2, '0');

  const updateActive = (index) => {
    activeIndex = index;
    carousel.style.transform = `translateX(-${100 * index}%)`;
    if (counter) counter.textContent = `${formatCounter(index + 1)} / ${formatCounter(total)}`;
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.testimonial-dot').forEach((dot, idx) => dot.classList.toggle('active', idx === index));
    }
    cards.forEach((card, idx) => card.classList.toggle('active', idx === index));
  };

  const startCarousel = () => {
    stopCarousel();
    intervalId = setInterval(() => {
      updateActive((activeIndex + 1) % total);
    }, 6000);
  };

  const stopCarousel = () => {
    if (intervalId) clearInterval(intervalId);
  };

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `testimonial-dot${idx === 0 ? ' active' : ''}`;
      dot.addEventListener('click', () => {
        updateActive(idx);
        startCarousel();
      });
      dotsContainer.appendChild(dot);
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      updateActive((activeIndex - 1 + total) % total);
      startCarousel();
    });
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      updateActive((activeIndex + 1) % total);
      startCarousel();
    });
  }

  section.addEventListener('mouseenter', stopCarousel);
  section.addEventListener('mouseleave', startCarousel);

  updateActive(0);
  startCarousel();
}

// Smooth active nav on scroll for services page
// Add full parallax to every major page section across the site
document.querySelectorAll('.page-hero, .service-section, .why-section, .about-mission, .difference-section, .values-section, .stack-showcase, .testimonials, .cta-banner').forEach(section => {
  const container = section.querySelector('.container');
  if (!container) return;
  let rafId = null;

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      container.style.transform = `translate3d(${offsetX * 10}px, ${offsetY * 6}px, 0)`;
      rafId = null;
    });
  });

  section.addEventListener('mouseleave', () => {
    container.style.transform = '';
  });
});

if (window.location.pathname.includes('services')) {
  const sections = ['nocode', 'automation', 'code', 'data'];
  window.addEventListener('scroll', () => {
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      }
    });
  });
}
