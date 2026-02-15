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
          <span class="section-label">À propos</span>
          <h2 class="section-title">Pourquoi <span class="gradient-text">MELYN</span> ?</h2>
          <p class="section-desc">Nous connectons vos sources de données, automatisons vos flux et mettons l'IA au service du métier.</p>
        </div>

        <div class="about-grid">
          <div class="reveal">
            <p style="font-size:var(--text-base);color:var(--color-text-secondary);line-height:1.8;margin-bottom:var(--space-lg);">
              Vous restez concentré sur les décisions, pendant que <strong style="color:var(--color-text-primary)">vos analytics</strong> prennent la place avant.
            </p>
            <div class="about-features">
              <div class="about-feature">
                <div class="about-feature-dot"></div>
                <div class="about-feature-text">Delivery mesurable, sécurité & conformité intégrées</div>
              </div>
              <div class="about-feature">
                <div class="about-feature-dot"></div>
                <div class="about-feature-text">Architecture cloud prête pour la prod (Azure / AWS / GCP)</div>
              </div>
              <div class="about-feature">
                <div class="about-feature-dot"></div>
                <div class="about-feature-text">Intégration API & gouvernance de la donnée</div>
              </div>
            </div>
          </div>

          <div class="about-logo-wrap reveal delay-2">
            <img src="/assets/img/melyn_logo_animated_transparent.svg" alt="MELYN logo" loading="lazy" />
          </div>
        </div>

        <!-- Team — separated -->
        <div class="about-team-section reveal">
          <div class="about-team-divider"></div>
          <h3 class="about-team-heading">Notre Équipe</h3>
          <div class="glass-card" style="padding:var(--space-lg);max-width:420px;">
            <div class="team-card">
              <a href="https://www.linkedin.com/in/malek-ben-amor-52691071/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/IMG_1924.PNG" alt="Malek Ben Amor" class="team-avatar" loading="lazy" />
              </a>
              <div>
                <div class="team-name">Malek Ben Amor</div>
                <div class="team-role">CEO & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section" id="section-services">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Nos services</span>
          <h2 class="section-title">Une offre complète</h2>
          <p class="section-desc">Accélérez vos projets par la data et l'IA avec une approche sécurisée et mesurable.</p>
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
            <div class="stat-label">Projets livrés</div>
          </div>
          <div class="stat-item reveal delay-1">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="stat-number" data-target="30">0</div>
            <div class="stat-label">Clients satisfaits</div>
          </div>
          <div class="stat-item reveal delay-2">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="stat-number" data-target="10">0</div>
            <div class="stat-label">Années d'expérience</div>
          </div>
          <div class="stat-item reveal delay-3">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div class="stat-number" data-target="20">0</div>
            <div class="stat-label">Technologies maîtrisées</div>
          </div>
        </div>
        <div class="divider" style="margin-top:var(--space-2xl);"></div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-section reveal-scale">
          <h2 class="cta-title">Prêt·e à transformer votre entreprise ?</h2>
          <p class="cta-desc">
            Parlons de vos objectifs et choisissez une trajectoire data/IA sécurisée et rentable.
          </p>
          <div class="cta-actions">
            <a href="#" class="btn btn-white" id="ctaDemoBtn">Demander une démo</a>
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
