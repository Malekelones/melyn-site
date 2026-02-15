/* ============================================================
   MELYN — Service Detail Page
   ============================================================ */

import { renderHeader, initHeader } from '../components/Header.js';
import { renderFooter, initFooter } from '../components/Footer.js';
import { initScrollAnimator } from '../components/ScrollAnimator.js';
import services from '../data/services.js';

export function renderServiceDetail(serviceId) {
    const app = document.getElementById('app');
    const service = services.find(s => s.id === serviceId);

    if (!service) {
        app.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;">
        <h1 style="font-size:2rem;font-family:var(--font-display);">Service introuvable</h1>
        <a href="#/" class="btn btn-primary">Retour à l'accueil</a>
      </div>
    `;
        return;
    }

    const scopeItems = service.scope.map(item => `
    <div class="detail-list-item">
      <div class="detail-list-dot dot-cyan"></div>
      <div>${item}</div>
    </div>
  `).join('');

    const resultItems = service.results.map(item => `
    <div class="detail-list-item">
      <div class="detail-list-dot dot-blue"></div>
      <div>${item}</div>
    </div>
  `).join('');

    // Find prev/next services for navigation
    const currentIndex = services.findIndex(s => s.id === serviceId);
    const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
    const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

    app.innerHTML = `
    <svg width="0" height="0" style="position:absolute">
      <defs>
        <linearGradient id="iconGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#06B6D4"/>
          <stop offset="1" stop-color="#1E66F5"/>
        </linearGradient>
      </defs>
    </svg>

    ${renderHeader()}

    <!-- Service Hero -->
    <section class="service-hero">
      <div class="service-hero-bg" style="background-image:url('${service.heroImage}')"></div>
      <div class="service-hero-overlay"></div>
      <canvas class="service-hero-particles" id="serviceCanvas" aria-hidden="true"></canvas>
      <div class="service-hero-content">
        <nav class="breadcrumb reveal-left">
          <a href="#/">Accueil</a>
          <span class="sep">→</span>
          <a href="#/">Services</a>
          <span class="sep">→</span>
          <span class="current">${service.title}</span>
        </nav>
        <h1 class="hero-title" style="font-size:var(--text-4xl);margin-bottom:var(--space-sm);">${service.title}</h1>
        <p style="color:var(--color-text-secondary);font-size:var(--text-lg);max-width:600px;animation:fade-in-up 1s 0.3s var(--ease-out-expo) backwards;">${service.shortDesc}</p>
      </div>
    </section>

    <!-- Service Details -->
    <main style="padding-top:var(--space-4xl);">
      <div class="container">
        <div class="service-detail-grid" style="margin-bottom:var(--space-3xl);">
          <div class="glass-card reveal">
            <h2 style="font-family:var(--font-display);font-size:var(--text-xl);font-weight:600;margin-bottom:var(--space-lg);color:var(--color-cyan);">Périmètre</h2>
            <div class="detail-list">
              ${scopeItems}
            </div>
          </div>
          <div class="glass-card reveal delay-2">
            <h2 style="font-family:var(--font-display);font-size:var(--text-xl);font-weight:600;margin-bottom:var(--space-lg);color:var(--color-cyan);">Résultats</h2>
            <div class="detail-list">
              ${resultItems}
            </div>
          </div>
        </div>

        <!-- Tags -->
        <div class="reveal" style="margin-bottom:var(--space-3xl);">
          <h3 style="font-family:var(--font-display);font-size:var(--text-lg);font-weight:600;margin-bottom:var(--space-md);">Technologies</h3>
          <div class="service-card-tags" style="gap:var(--space-sm);">
            ${service.tags.map(t => `<span class="service-tag" style="font-size:var(--text-sm);padding:0.35rem 0.85rem;">${t}</span>`).join('')}
          </div>
        </div>

        <!-- Prev / Next Navigation -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-lg);margin-bottom:var(--space-3xl);">
          ${prevService ? `
            <a href="#/services/${prevService.id}" class="glass-card reveal" style="padding:var(--space-lg);display:flex;align-items:center;gap:var(--space-md);">
              <span style="font-size:1.5rem;color:var(--color-cyan);">←</span>
              <div>
                <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:0.25rem;">Précédent</div>
                <div style="font-family:var(--font-display);font-weight:600;">${prevService.title}</div>
              </div>
            </a>
          ` : '<div></div>'}
          ${nextService ? `
            <a href="#/services/${nextService.id}" class="glass-card reveal delay-1" style="padding:var(--space-lg);display:flex;align-items:center;justify-content:flex-end;gap:var(--space-md);text-align:right;">
              <div>
                <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:0.25rem;">Suivant</div>
                <div style="font-family:var(--font-display);font-weight:600;">${nextService.title}</div>
              </div>
              <span style="font-size:1.5rem;color:var(--color-cyan);">→</span>
            </a>
          ` : '<div></div>'}
        </div>

        <!-- CTA -->
        <div class="cta-section reveal-scale" style="margin-bottom:var(--space-4xl);">
          <h2 class="cta-title">${service.ctaTitle}</h2>
          <p class="cta-desc">${service.ctaDesc}</p>
          <div class="cta-actions">
            <a href="#" class="btn btn-white" id="serviceCtaBtn">Nous contacter</a>
            <a href="https://calendly.com/onesmalek-benamor/30min" target="_blank" rel="noopener" class="btn btn-outline">Planifier 30 min</a>
          </div>
        </div>
      </div>
    </main>

    ${renderFooter()}
  `;

    // Init
    initHeader();
    initFooter();
    initScrollAnimator();
    initServiceParticles();

    // Calendly CTA
    const serviceCtaBtn = document.getElementById('serviceCtaBtn');
    if (serviceCtaBtn) {
        serviceCtaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = 'https://calendly.com/onesmalek-benamor/30min';
            if (window.Calendly && window.Calendly.initPopupWidget) {
                window.Calendly.initPopupWidget({ url: url + '?hide_gdpr_banner=1&primary_color=1E66F5' });
            } else {
                window.open(url, '_blank');
            }
        });
    }

    // Update page title
    document.title = `${service.title} — MELYN`;
}

function initServiceParticles() {
    const canvas = document.getElementById('serviceCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];

    function resize() {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resize();

    const count = Math.min(30, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 20000));
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.25 + 0.05,
            color: ['#06B6D4', '#1E66F5', '#fff'][Math.floor(Math.random() * 3)]
        });
    }

    let animId;
    function draw() {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
        });
        animId = requestAnimationFrame(draw);
    }
    draw();

    window.addEventListener('resize', resize, { once: false });
}
