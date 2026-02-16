/* ============================================================
   MELYN — Hero Component (Slideshow + Canvas particles + gradient orbs)
   ============================================================ */

import { t } from '../i18n.js';

const HERO_SLIDES = [
    '/assets/img/hero_slide_01.jpg',
    '/assets/img/hero_slide_02.jpg',
    '/assets/img/hero_slide_03.jpg',
    '/assets/img/hero_slide_04.jpg',
    '/assets/img/hero_slide_05.jpg',
    '/assets/img/hero_slide_06.jpg',
    '/assets/img/hero_slide_07.jpg',
];

export function renderHero() {
    const slidesHTML = HERO_SLIDES.map((src, i) =>
        `<div class="hero-slide ${i === 0 ? 'hero-slide--active' : ''}" style="background-image:url('${src}')"></div>`
    ).join('');

    return `
    <section class="hero" id="heroSection">
      <div class="hero-slideshow" id="heroSlideshow">
        ${slidesHTML}
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-bg">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
      </div>
      <canvas class="hero-canvas" id="heroCanvas" aria-hidden="true"></canvas>
      <div class="hero-content">
        <div class="hero-badge">
          ${t('hero.badge')}
        </div>
        <h1 class="hero-title">
          ${t('hero.title')}
        </h1>
        <p class="hero-subtitle">
          ${t('hero.subtitle')}
        </p>
        <div class="hero-actions">
          <a href="#/services" class="btn btn-primary">${t('hero.ctaPrimary')}</a>
          <a href="#/contact" class="btn btn-outline" id="demoBtn">${t('hero.ctaSecondary')}</a>
        </div>
      </div>
    </section>
  `;
}

export function initHero() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    function resize() {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function createParticles() {
        const count = Math.min(60, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000));
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                color: ['#06B6D4', '#1E66F5', '#ffffff'][Math.floor(Math.random() * 3)]
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

        // Draw links
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw dots
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Bounce
            if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
        });

        animId = requestAnimationFrame(drawParticles);
    }

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });

    // Pause when not visible
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            if (!animId) drawParticles();
        } else {
            cancelAnimationFrame(animId);
            animId = null;
        }
    });
    observer.observe(canvas);

    // Calendly integration
    const demoBtn = document.getElementById('demoBtn');
    if (demoBtn) {
        demoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const calendlyUrl = 'https://calendly.com/onesmalek-benamor/30min';
            if (window.Calendly && window.Calendly.initPopupWidget) {
                window.Calendly.initPopupWidget({
                    url: calendlyUrl + '?hide_gdpr_banner=1&primary_color=1E66F5'
                });
            } else {
                window.open(calendlyUrl, '_blank');
            }
        });
    }

    // ---- Hero Slideshow ----
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove('hero-slide--active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('hero-slide--active');
        }, 5000);
    }
}
