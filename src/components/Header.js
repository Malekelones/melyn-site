/* ============================================================
   MELYN — Header Component
   ============================================================ */

import { t, getLang, setLang } from '../i18n.js';

export function renderHeader() {
  const lang = getLang();
  const nextLang = lang === 'fr' ? 'en' : (lang === 'en' ? 'ar' : 'fr');

  return `
    <div class="progress-bar" id="progressBar"></div>
    <header class="header" id="mainHeader">
      <div class="header-inner">
        <a href="#/" class="header-logo" aria-label="MELYN — ${t('nav.home')}">
          <div class="logo-mark">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad1" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stop-color="#06B6D4"/>
                  <stop offset="100%" stop-color="#1E66F5"/>
                </linearGradient>
                <linearGradient id="logoGrad2" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stop-color="#1E66F5"/>
                  <stop offset="100%" stop-color="#7C3AED"/>
                </linearGradient>
              </defs>
              <rect x="2" y="8" width="10" height="24" rx="3" fill="url(#logoGrad1)" opacity="0.7"/>
              <rect x="15" y="4" width="10" height="32" rx="3" fill="url(#logoGrad1)"/>
              <rect x="28" y="0" width="10" height="40" rx="3" fill="url(#logoGrad2)"/>
            </svg>
          </div>
          <div class="logo-text">
            <span class="logo-name">MELYN</span>
            <span class="logo-tagline">${t('nav.logoTagline')}</span>
          </div>
        </a>
        <nav class="header-nav" aria-label="Navigation">
          <a href="#/" class="nav-link" data-nav="home">
            <span class="nav-link-text">${t('nav.home')}</span>
          </a>
          <a href="#/about" class="nav-link" data-nav="about">
            <span class="nav-link-text">${t('nav.about')}</span>
          </a>
          <a href="#/services" class="nav-link" data-nav="services">
            <span class="nav-link-text">${t('nav.services')}</span>
          </a>
          <a href="#/team" class="nav-link" data-nav="team">
            <span class="nav-link-text">${t('nav.team')}</span>
          </a>
          <a href="#/contact" class="nav-link" data-nav="contact">
            <span class="nav-link-text">${t('nav.contact')}</span>
          </a>
          <button class="lang-switch" id="langSwitchDesktop" data-lang="${nextLang}" aria-label="Switch language">
            <span class="lang-flag">${nextLang === 'ar' ? '<img src="/assets/img/arab-league.svg" alt="AR" class="flag-img">' : (nextLang === 'en' ? '🇬🇧' : '🇫🇷')}</span>
            <span class="lang-label">${t('nav.langLabel')}</span>
          </button>
        </nav>
        <a href="#" class="header-cta" id="headerCtaBtn">
          <span class="header-cta-dot"></span>
          ${t('nav.cta')}
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="Menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" id="menuIcon" />
          </svg>
        </button>
      </div>
    </header>
    <div class="mobile-menu-overlay" id="menuOverlay"></div>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mobile-menu-header">
        <div class="logo-mark" style="width:2rem;height:2rem;">
          <svg viewBox="0 0 40 40" fill="none"><rect x="2" y="8" width="10" height="24" rx="3" fill="url(#logoGrad1)" opacity="0.7"/><rect x="15" y="4" width="10" height="32" rx="3" fill="url(#logoGrad1)"/><rect x="28" y="0" width="10" height="40" rx="3" fill="url(#logoGrad2)"/></svg>
        </div>
        <span class="logo-name" style="font-size:1.1rem;">MELYN</span>
      </div>
      <a href="#/" class="mobile-nav-link" data-nav="home">
        <span class="mobile-nav-icon">⌂</span> ${t('nav.home')}
      </a>
      <a href="#/about" class="mobile-nav-link" data-nav="about">
        <span class="mobile-nav-icon">◈</span> ${t('nav.about')}
      </a>
      <a href="#/services" class="mobile-nav-link" data-nav="services">
        <span class="mobile-nav-icon">◆</span> ${t('nav.services')}
      </a>
      <a href="#/team" class="mobile-nav-link" data-nav="team">
        <span class="mobile-nav-icon">◈</span> ${t('nav.team')}
      </a>
      <a href="#/contact" class="mobile-nav-link" data-nav="contact">
        <span class="mobile-nav-icon">✦</span> ${t('nav.contact')}
      </a>
      <button class="lang-switch mobile-lang-switch" id="langSwitchMobile" data-lang="${nextLang}">
        <span class="lang-flag">${nextLang === 'ar' ? '<img src="/assets/img/arab-league.svg" alt="AR" class="flag-img">' : (nextLang === 'en' ? '🇬🇧' : '🇫🇷')}</span>
        <span class="lang-label">${t('nav.langLabel')}</span>
      </button>
      <a href="#" class="mobile-menu-cta" id="mobileCtaBtn">${t('nav.cta')}</a>
    </div>
    <button class="back-to-top" id="backToTop" aria-label="Return to menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    </button>
  `;
}

export function initHeader() {
  const header = document.getElementById('mainHeader');
  const progressBar = document.getElementById('progressBar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  // Move mobile menu & overlay to body so position:fixed works correctly
  // (backdrop-filter and transform on ancestor elements create containing blocks)
  if (mobileMenu && mobileMenu.parentElement !== document.body) {
    document.body.appendChild(menuOverlay);
    document.body.appendChild(mobileMenu);
  }

  // Scroll effects
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Header shrink
        if (header) header.classList.toggle('scrolled', window.scrollY > 60);

        // Progress bar
        if (progressBar) {
          const h = document.documentElement;
          const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
          progressBar.style.width = pct + '%';
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Mobile menu
  const closeMenu = () => {
    mobileMenu?.classList.remove('open');
    menuOverlay?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    mobileMenu?.classList.add('open');
    menuOverlay?.classList.add('open');
    menuToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  menuOverlay?.addEventListener('click', closeMenu);

  // Auto-close mobile menu when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Language switcher
  document.querySelectorAll('.lang-switch').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      closeMenu();
      setLang(lang);
    });
  });

  // CTA buttons → Calendly
  const openCalendly = (e) => {
    e.preventDefault();
    closeMenu();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/onesmalek-benamor/30min' });
    }
  };
  document.getElementById('headerCtaBtn')?.addEventListener('click', openCalendly);
  document.getElementById('mobileCtaBtn')?.addEventListener('click', openCalendly);

  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const nav = link.dataset.nav;
      const currentHash = window.location.hash.slice(1) || '/';

      if (currentHash === '/' || currentHash === '' || currentHash === '#/') {
        // Already on home page, scroll to section
        if (nav !== 'home') {
          e.preventDefault();
          closeMenu();
          const section = document.getElementById('section-' + nav);
          if (section) {
            const headerHeight = header?.offsetHeight || 72;
            const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
            return;
          }
        }
      }
    });
  });

  // Back to top logic
  let backToTop = document.getElementById('backToTop');
  if (backToTop && backToTop.parentElement !== document.body) {
    document.body.appendChild(backToTop);
  }

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      if (window.location.hash !== '#/' && window.location.hash !== '') {
        window.location.hash = '#/';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
