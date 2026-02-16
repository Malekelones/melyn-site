/* ============================================================
   MELYN — Main Entry Point
   ============================================================ */

// Styles
import './styles/base.css';
import './styles/components.css';
import './styles/rtl.css';

// i18n (must be imported early so lang is set)
import './i18n.js';

// Router & Pages
import router from './router.js';
import { renderHome } from './pages/Home.js';
import { renderServiceDetail } from './pages/ServiceDetail.js';
import { renderCEO } from './pages/CEO.js';

// Routes
router
    .on('/', renderHome)
    .on('/about', renderHome)
    .on('/services', renderHome)
    .on('/contact', renderHome)
    .on('/ceo', renderCEO)
    .on('/services/:id', (id) => renderServiceDetail(id));

// Calendly script (async)
const calendlyScript = document.createElement('script');
calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
calendlyScript.async = true;
document.body.appendChild(calendlyScript);

// Custom MELYN Chatbot
import { renderChatbot, initChatbot } from './components/Chatbot.js';

// Inject chatbot into the DOM (global, outside of router)
function injectChatbot() {
    // Remove any existing chatbot
    document.getElementById('melynChatbot')?.remove();

    // Add chatbot HTML to body
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'melynChatbot';
    chatbotContainer.innerHTML = renderChatbot();
    document.body.appendChild(chatbotContainer);

    // Initialize chatbot logic
    initChatbot();
}

// Inject chatbot after first render
setTimeout(injectChatbot, 500);

// Re-inject chatbot when language changes
window.addEventListener('melyn-lang-change', () => {
    // Clear chat history on language change
    sessionStorage.removeItem('melyn_chat_history');
    setTimeout(injectChatbot, 100);
});
