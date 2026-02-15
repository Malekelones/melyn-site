/* ============================================================
   MELYN — Header Component
   ============================================================ */

export function renderHeader() {
  return `
    <div class="progress-bar" id="progressBar"></div>
    <header class="header" id="mainHeader">
      <div class="header-inner">
        <a href="#/" class="header-logo" aria-label="MELYN — Accueil">
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
            <span class="logo-tagline">IA DATA CONSULTING</span>
          </div>
        </a>
        <nav class="header-nav" aria-label="Navigation principale">
          <a href="#/" class="nav-link" data-nav="home">
            <span class="nav-link-text">Accueil</span>
          </a>
          <a href="#/about" class="nav-link" data-nav="about">
            <span class="nav-link-text">À propos</span>
          </a>
          <a href="#/services" class="nav-link" data-nav="services">
            <span class="nav-link-text">Services</span>
          </a>
          <a href="#/contact" class="nav-link" data-nav="contact">
            <span class="nav-link-text">Contact</span>
          </a>
        </nav>
        <a href="#" class="header-cta" id="headerCtaBtn">
          <span class="header-cta-dot"></span>
          Prendre RDV
        </a>
        <button class="menu-toggle" id="menuToggle" aria-label="Ouvrir le menu" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" id="menuIcon" />
          </svg>
        </button>
      </div>
      <div class="mobile-menu-overlay" id="menuOverlay"></div>
      <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-header">
          <div class="logo-mark" style="width:2rem;height:2rem;">
            <svg viewBox="0 0 40 40" fill="none"><rect x="2" y="8" width="10" height="24" rx="3" fill="url(#logoGrad1)" opacity="0.7"/><rect x="15" y="4" width="10" height="32" rx="3" fill="url(#logoGrad1)"/><rect x="28" y="0" width="10" height="40" rx="3" fill="url(#logoGrad2)"/></svg>
          </div>
          <span class="logo-name" style="font-size:1.1rem;">MELYN</span>
        </div>
        <a href="#/" class="mobile-nav-link" data-nav="home">
          <span class="mobile-nav-icon">⌂</span> Accueil
        </a>
        <a href="#/about" class="mobile-nav-link" data-nav="about">
          <span class="mobile-nav-icon">◈</span> À propos
        </a>
        <a href="#/services" class="mobile-nav-link" data-nav="services">
          <span class="mobile-nav-icon">◆</span> Services
        </a>
        <a href="#/contact" class="mobile-nav-link" data-nav="contact">
          <span class="mobile-nav-icon">✦</span> Contact
        </a>
        <a href="#" class="mobile-menu-cta" id="mobileCtaBtn">Prendre RDV</a>
      </div>
    </header>
  `;
}

export function initHeader() {
  const header = document.getElementById('mainHeader');
  const progressBar = document.getElementById('progressBar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');

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

  // Smooth scroll for anchor links on home page
  // CTA buttons → Calendly
  const openCalendly = (e) => {
    e.preventDefault();
    closeMenu();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/malek-benamor-melyn/30min' });
    }
  };
  document.getElementById('headerCtaBtn')?.addEventListener('click', openCalendly);
  document.getElementById('mobileCtaBtn')?.addEventListener('click', openCalendly);

  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const nav = link.dataset.nav;
      const currentHash = window.location.hash.slice(1) || '/';

      if (currentHash === '/' || currentHash === '') {
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
}
