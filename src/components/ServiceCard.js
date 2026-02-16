/* ============================================================
   MELYN — Service Card Component
   ============================================================ */

import { t, localized } from '../i18n.js';

export function renderServiceCard(service, index) {
  const tags = service.tags.slice(0, 3).map(tag => `<span class="service-tag">${tag}</span>`).join('');

  return `
    <a href="#/services/${service.id}" class="glass-card service-card reveal delay-${(index % 3) + 1}">
      <div class="service-card-icon">
        ${service.icon}
      </div>
      <h3 class="service-card-title">${localized(service.title)}</h3>
      <p class="service-card-desc">${localized(service.shortDesc)}</p>
      <div class="service-card-tags">${tags}</div>
      <span class="service-card-arrow">${t('services.discover')} <span>→</span></span>
    </a>
  `;
}
