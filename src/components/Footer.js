/* ============================================================
   MELYN — Footer Component
   ============================================================ */

import { t } from '../i18n.js';
import services from '../data/services.js';
import { localized } from '../i18n.js';

export function renderFooter() {
  const year = new Date().getFullYear();

  const serviceLinks = services.map(s => `
              <a href="#/services/${s.id}" class="footer-link">
                <span class="footer-link-arrow">→</span> ${localized(s.title)}
              </a>`).join('');

  return `
    <footer class="footer" id="section-contact">
      <!-- Gradient top border -->
      <div class="footer-glow-border"></div>

      <div class="container">
        <!-- Upper section: Brand + Newsletter -->
        <div class="footer-upper reveal">
          <div class="footer-brand-block">
            <a href="#/" class="footer-logo" aria-label="MELYN">
              <span class="footer-brand-name">MELYN</span>
              <span class="footer-brand-separator">·</span>
              <span class="footer-brand-sub">${t('hero.badge')}</span>
            </a>
            <p class="footer-brand-desc">
              ${t('footer.brandDesc')}
            </p>
            <div class="footer-socials">
              <a href="https://www.linkedin.com/in/malek-ben-amor-52691071/" target="_blank" rel="noopener noreferrer" class="social-link social-link--linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="social-link social-link--x" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" class="social-link social-link--github" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-newsletter">
            <h4 class="footer-heading">${t('footer.stayInformed')}</h4>
            <p class="footer-newsletter-desc">${t('footer.newsletterDesc')}</p>
            <form class="footer-newsletter-form" onsubmit="event.preventDefault();">
              <input type="email" placeholder="${t('footer.emailPlaceholder')}" class="footer-newsletter-input" />
              <button type="submit" class="footer-newsletter-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider"></div>

        <!-- Link columns -->
        <div class="footer-columns reveal">
          <!-- Services -->
          <div>
            <h4 class="footer-heading">${t('footer.servicesHeading')}</h4>
            <div class="footer-links">
              ${serviceLinks}
            </div>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="footer-heading">${t('footer.resourcesHeading')}</h4>
            <div class="footer-links">
              <span class="footer-link"><span class="footer-link-arrow">→</span> ${t('footer.blog')}</span>
              <span class="footer-link"><span class="footer-link-arrow">→</span> ${t('footer.caseStudies')}</span>
              <span class="footer-link"><span class="footer-link-arrow">→</span> ${t('footer.whitepapers')}</span>
              <span class="footer-link"><span class="footer-link-arrow">→</span> ${t('footer.documentation')}</span>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="footer-heading">${t('footer.contactHeading')}</h4>
            <div class="footer-contact-cards">
              <div class="footer-contact-item">
                <div class="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p class="footer-contact-label">${t('footer.labelParis')}</p>
                  <p class="footer-contact-value">${t('footer.addressParis')}</p>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p class="footer-contact-label">${t('footer.labelTunis')}</p>
                  <p class="footer-contact-value">${t('footer.addressTunis')}</p>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p class="footer-contact-label">${t('footer.labelPhone')}</p>
                  <a href="tel:+33620015297" class="footer-contact-value footer-contact-link">🇫🇷 +33 6 20 01 52 97</a>
                  <a href="tel:+21629994532" class="footer-contact-value footer-contact-link">🇹🇳 +216 29 994 532</a>
                </div>
              </div>
              <div class="footer-contact-item">
                <div class="footer-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p class="footer-contact-label">${t('footer.labelEmail')}</p>
                  <a href="mailto:contact@melynia.com" class="footer-contact-value footer-contact-link">contact@melynia.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
          <p>${t('footer.copyright')}</p>
          <div class="footer-bottom-links">
            <span class="footer-bottom-link">${t('footer.privacy')}</span>
            <span class="footer-bottom-link">${t('footer.legal')}</span>
            <span class="footer-bottom-link">${t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>

    <button class="back-to-top" id="backToTop" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  `;
}

export function initFooter() {
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
