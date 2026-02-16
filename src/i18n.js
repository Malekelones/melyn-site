/* ============================================================
   MELYN — i18n (Internationalization)
   ============================================================ */

import fr from './data/translations/fr.js';
import en from './data/translations/en.js';
import ar from './data/translations/ar.js';

const translations = { fr, en, ar };
const STORAGE_KEY = 'melyn-lang';
const SUPPORTED = ['fr', 'en', 'ar'];

/** Detect initial language: localStorage > browser > default (fr) */
function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;

    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : 'fr';
}

let currentLang = detectLang();

/** Get current language code */
export function getLang() {
    return currentLang;
}

/** Set language and reload the page */
export function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    currentLang = lang;

    // Set direction and lang attribute
    const isRtl = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    // Re-render by triggering hashchange
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    // Re-inject chatbot
    window.dispatchEvent(new CustomEvent('melyn-lang-change', { detail: lang }));
}

/**
 * Translate a key. Supports nested keys with dot notation:
 *   t('hero.title') → translations[lang].hero.title
 */
export function t(key) {
    const keys = key.split('.');
    let val = translations[currentLang];
    for (const k of keys) {
        if (val == null) return key;
        val = val[k];
    }
    return val ?? key;
}

/** Helper to get localized text from a bilingual object { fr, en, ar } */
export function localized(obj) {
    if (typeof obj === 'string') return obj;
    return obj?.[currentLang] ?? obj?.fr ?? '';
}

/** Set initial html lang and dir attributes */
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

