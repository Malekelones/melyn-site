/* ============================================================
   MELYN — Service Card Component
   ============================================================ */

export function renderServiceCard(service, index) {
    const tags = service.tags.slice(0, 3).map(t => `<span class="service-tag">${t}</span>`).join('');

    return `
    <a href="#/services/${service.id}" class="glass-card service-card reveal delay-${(index % 3) + 1}">
      <div class="service-card-icon">
        ${service.icon}
      </div>
      <h3 class="service-card-title">${service.title}</h3>
      <p class="service-card-desc">${service.shortDesc}</p>
      <div class="service-card-tags">${tags}</div>
      <span class="service-card-arrow">En savoir plus <span>→</span></span>
    </a>
  `;
}
