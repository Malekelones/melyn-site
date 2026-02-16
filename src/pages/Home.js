/* ============================================================
   MELYN — Home Page
   ============================================================ */

import { renderHeader, initHeader } from '../components/Header.js';
import { renderHero, initHero } from '../components/Hero.js';
import { renderFooter, initFooter } from '../components/Footer.js';
import { renderServiceCard } from '../components/ServiceCard.js';
import { initScrollAnimator } from '../components/ScrollAnimator.js';
import { initStatsCounter } from '../components/StatsCounter.js';
import services from '../data/services.js';
import { t, localized } from '../i18n.js';

export function renderHome() {
  const app = document.getElementById('app');
  const serviceCards = services.map((s, i) => renderServiceCard(s, i)).join('');

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
    ${renderHero()}

    <!-- About -->
    <section class="section" id="section-about" style="padding-top:calc(var(--space-4xl) + 1rem);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${t('about.label')}</span>
          <h2 class="section-title">${t('about.title')}</h2>
          <p class="section-desc">${t('about.desc')}</p>
        </div>

        <div class="about-grid" style="margin-bottom: var(--space-2xl);">
          <div class="reveal">
            <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.8;margin-bottom:var(--space-lg);white-space: pre-line;">
              ${t('about.melynStory')}
            </p>
            <div class="about-features">
              <div class="about-feature">
                <div class="about-feature-dot"></div>
                <div class="about-feature-text">${t('about.feature1')}</div>
              </div>
              <div class="about-feature">
                <div class="about-feature-dot"></div>
                <div class="about-feature-text">${t('about.feature2')}</div>
              </div>
              <div class="about-feature">
                <div class="about-feature-dot"></div>
                <div class="about-feature-text">${t('about.feature3')}</div>
              </div>
            </div>
          </div>

          <div class="about-slideshow-container reveal delay-2">
            <div class="about-slide active" style="background-image:url('/public/assets/img/Team.PNG')"></div>
            <div class="about-slide" style="background-image:url('/public/assets/img/Team1.JPG')"></div>
            <div class="about-slide" style="background-image:url('/public/assets/img/Team2.PNG')"></div>
            <div class="about-slideshow-overlay"></div>
          </div>
        </div>

        <div class="reveal" id="section-team" style="margin-top: var(--space-2xl);">
           
           <div class="glass-card" style="padding:var(--space-xl); text-align: center; margin-bottom: var(--space-xl);">
             <h3 class="about-team-heading" style="margin-bottom: var(--space-md);">${t('about.teamHeading')}</h3>
             <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.8;">
               ${t('about.teamDetails')}
             </p>
           </div>

           <div class="team-grid-enhanced">
             ${(t('about.members') || []).map(member => `
               <div class="team-card-enhanced reveal">
                 <div class="team-avatar-wrapper">
                   <img src="${member.avatar}" alt="${member.name}" class="team-avatar-enhanced" loading="lazy" />
                   <div class="team-badge">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                       <path d="M12 15l-3-3m0 0l3-3m-3 3h8M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
                     </svg>
                   </div>
                 </div>
                  <h4 class="team-name-enhanced">
                    ${member.name === t('ceoPage.title').split(' — ')[1] || member.name === 'ملاك الانس' ? `<a href="#/ceo" style="color:inherit;text-decoration:none;">${member.name}</a>` : member.name}
                  </h4>
                  <div class="team-role-enhanced">
                    ${member.name === t('ceoPage.title').split(' — ')[1] || member.name === 'ملاك الانس' ? `<a href="#/ceo" style="color:var(--color-cyan);text-decoration:none;">${member.role}</a>` : member.role}
                  </div>
                 <div class="team-location-enhanced">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;">
                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                     <circle cx="12" cy="10" r="3" />
                   </svg>
                   ${member.location}
                 </div>
                 <p class="team-bio-enhanced">${member.bio}</p>
                 <div class="team-socials-enhanced">
                   <a href="${member.linkedin}" class="team-social-btn" aria-label="LinkedIn">
                     <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                   </a>
                   <a href="${member.email}" class="team-social-btn" aria-label="Email">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                   </a>
                 </div>
               </div>
             `).join('')}
           </div>
        </div>

      </div>
    </section>

    <!-- Services -->
    <section class="section" id="section-services">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${t('services.label')}</span>
          <h2 class="section-title">${t('services.title')}</h2>
          <p class="section-desc">${t('services.desc')}</p>
        </div>
        <div class="services-grid">
          ${serviceCards}
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section" id="section-stats">
      <div class="container">
        <div class="divider"></div>
        <div class="stats-grid" style="margin-top:var(--space-2xl);">
          <div class="stat-item reveal">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
            </div>
            <div class="stat-number" data-target="50">0</div>
            <div class="stat-label">${t('stats.projects')}</div>
          </div>
          <div class="stat-item reveal delay-1">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="stat-number" data-target="30">0</div>
            <div class="stat-label">${t('stats.clients')}</div>
          </div>
          <div class="stat-item reveal delay-2">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="stat-number" data-target="10">0</div>
            <div class="stat-label">${t('stats.experience')}</div>
          </div>
          <div class="stat-item reveal delay-3">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div class="stat-number" data-target="20">0</div>
            <div class="stat-label">${t('stats.technologies')}</div>
          </div>
        </div>
        <div class="divider" style="margin-top:var(--space-2xl);"></div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-section reveal-scale">
          <h2 class="cta-title">${t('cta.title')}</h2>
          <p class="cta-desc">
            ${t('cta.desc')}
          </p>
          <div class="cta-actions">
            <a href="#" class="btn btn-white" id="ctaDemoBtn">${t('cta.demo')}</a>
            <a href="tel:+33620015297" class="btn btn-outline">🇫🇷 +33 6 20 01 52 97</a>
            <a href="tel:+21629994532" class="btn btn-outline">🇹🇳 +216 29 994 532</a>
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;

  // Init all interactive bits
  initHeader();
  initHero();
  initFooter();
  initScrollAnimator();
  initStatsCounter();
  initAboutSlideshow();

  // CTA Calendly
  const ctaDemoBtn = document.getElementById('ctaDemoBtn');
  if (ctaDemoBtn) {
    ctaDemoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = 'https://calendly.com/onesmalek-benamor/30min';
      if (window.Calendly && window.Calendly.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: url + '?hide_gdpr_banner=1&primary_color=1E66F5' });
      } else {
        window.open(url, '_blank');
      }
    });
  }

  // Smooth scroll for anchor navigation from hash
  const hash = window.location.hash;
  if (hash.includes('/about') || hash.includes('/services') || hash.includes('/contact')) {
    const sectionId = hash.replace('#/', '');
    setTimeout(() => {
      const section = document.getElementById('section-' + sectionId);
      if (section) {
        const headerH = document.getElementById('mainHeader')?.offsetHeight || 72;
        const y = section.getBoundingClientRect().top + window.pageYOffset - headerH;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }
}

/**
 * Logic for About Section Slideshow
 */
function initAboutSlideshow() {
  const container = document.querySelector('.about-slideshow-container');
  if (!container) return;

  const slides = container.querySelectorAll('.about-slide');
  if (slides.length <= 1) return;

  let currentIdx = 0;
  setInterval(() => {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');
  }, 5000);
}
