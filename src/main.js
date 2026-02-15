/* ============================================================
   MELYN — Main Entry Point
   ============================================================ */

// Styles
import './styles/base.css';
import './styles/components.css';

// Router & Pages
import router from './router.js';
import { renderHome } from './pages/Home.js';
import { renderServiceDetail } from './pages/ServiceDetail.js';

// Routes
router
    .on('/', renderHome)
    .on('/about', renderHome)
    .on('/services', renderHome)
    .on('/contact', renderHome)
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
    document.getElementById('chatbotBubble')?.remove();
    document.getElementById('chatbotWindow')?.remove();

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

