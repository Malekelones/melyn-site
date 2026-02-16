import { renderHeader, initHeader } from '../components/Header.js';
import { renderFooter, initFooter } from '../components/Footer.js';
import { initScrollAnimator } from '../components/ScrollAnimator.js';
import { t } from '../i18n.js';

export function renderCEO() {
  const app = document.getElementById('app');

  // Trigger reveal animation manually if needed, or rely on global intersection observer
  app.innerHTML = `
    <!-- SVG Gradient Defs -->
    <svg width="0" height="0" style="position:absolute">
      <defs>
        <linearGradient id="iconGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#06B6D4"/>
          <stop offset="1" stop-color="#1E66F5"/>
        </linearGradient>
      </defs>
    </svg>

    ${renderHeader()}

    <main class="ceo-page">
      <section class="ceo-hero">
        <div class="container">
          <div class="ceo-hero-grid">
            <div class="ceo-image-wrap reveal">
              <div class="ceo-portrait-container">
                <img src="/assets/img/Malek.PNG" alt="Malek Ben Amor" class="ceo-portrait" />
                <div class="ceo-image-glow"></div>
              </div>
            </div>
            <div class="ceo-intro-wrap reveal delay-1">
              <span class="section-label">${t('ceoPage.subtitle')}</span>
              <h1 class="ceo-title">${t('ceoPage.title')}</h1>
              <p class="ceo-lead">${t('ceoPage.intro')}</p>
              <div class="ceo-actions">
                <a href="#/" class="btn btn-outline">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  ${t('ceoPage.backButton')}
                </a>
                <button id="ceoCalendlyBtn" class="btn btn-primary">
                  ${t('ceoPage.contactButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ceo-details section">
        <div class="container">
          <div class="ceo-details-grid">
            <div class="glass-card reveal">
              <h3 class="detail-title">Expertise & Parcours</h3>
              <p class="detail-text">${t('ceoPage.experience')}</p>
            </div>
            <div class="glass-card reveal delay-1">
              <h3 class="detail-title">Approche & Vision</h3>
              <p class="detail-text">${t('ceoPage.approach')}</p>
            </div>
          </div>

          <div class="glass-card ceo-international reveal delay-2" style="margin-top: var(--space-xl);">
            <h3 class="detail-title">Rayonnement International</h3>
            <p class="detail-text" style="margin-bottom: var(--space-lg);">${t('ceoPage.international')}</p>
            <div class="location-tags">
              ${['Abu Dhabi', 'Madrid', 'Brésil', 'Maroc', 'Dubai', 'Paris', 'Milan', 'Copenhague'].map(loc => `
                <span class="location-tag">${loc}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
  `;

  initHeader();
  initFooter();
  initScrollAnimator();
  initCEOEvents();

  // Re-trigger reveal observer if necessary
  window.dispatchEvent(new Event('scroll'));
}

function initCEOEvents() {
  const btn = document.getElementById('ceoCalendlyBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const url = 'https://calendly.com/onesmalek-benamor/30min';
      if (window.Calendly && window.Calendly.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: url + '?hide_gdpr_banner=1&primary_color=1E66F5' });
      } else {
        window.open(url, '_blank');
      }
    });
  }
}
