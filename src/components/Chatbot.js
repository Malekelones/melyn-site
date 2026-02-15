/* ============================================================
   MELYN — Custom Chatbot Component
   Intelligent, glassmorphism chatbot with KB matching,
   conversation context, timestamps, and session persistence
   ============================================================ */

import { matchIntent, getQuickReplies } from '../data/chatbotKB.js';

/* ── Session key ── */
const SESSION_KEY = 'melyn_chat_history';

export function renderChatbot() {
  return `
    <!-- Chatbot Bubble -->
    <button class="chatbot-bubble" id="chatbotBubble" aria-label="Ouvrir le chat">
      <svg class="chatbot-bubble-icon chatbot-icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 5-4 9-9 9a9.4 9.4 0 0 1-4-.9L3 21l1.9-5A9 9 0 0 1 12 2z"/>
        <circle cx="8.5" cy="11" r="0.8" fill="currentColor" stroke="none"/>
        <circle cx="12" cy="11" r="0.8" fill="currentColor" stroke="none"/>
        <circle cx="15.5" cy="11" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
      <svg class="chatbot-bubble-icon chatbot-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;">
        <path d="M18 6 6 18"/><path d="M6 6l12 12"/>
      </svg>
      <span class="chatbot-bubble-pulse"></span>
    </button>

    <!-- Chatbot Window -->
    <div class="chatbot-window" id="chatbotWindow">
      <div class="chatbot-header">
        <div class="chatbot-header-info">
          <div class="chatbot-avatar">
            <svg viewBox="0 0 40 40" fill="none">
              <defs>
                <linearGradient id="chatAvatarG1" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stop-color="#06B6D4"/>
                  <stop offset="100%" stop-color="#1E66F5"/>
                </linearGradient>
                <linearGradient id="chatAvatarG2" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stop-color="#1E66F5"/>
                  <stop offset="100%" stop-color="#7C3AED"/>
                </linearGradient>
              </defs>
              <rect x="4" y="12" width="8" height="18" rx="2.5" fill="url(#chatAvatarG1)" opacity="0.7"/>
              <rect x="16" y="6" width="8" height="28" rx="2.5" fill="url(#chatAvatarG1)"/>
              <rect x="28" y="2" width="8" height="36" rx="2.5" fill="url(#chatAvatarG2)"/>
            </svg>
          </div>
          <div>
            <div class="chatbot-header-name">MELYN Assistant</div>
            <div class="chatbot-header-status">
              <span class="chatbot-status-dot"></span>
              En ligne
            </div>
          </div>
        </div>
        <button class="chatbot-close" id="chatbotClose" aria-label="Fermer le chat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6 6 18"/><path d="M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="chatbot-messages" id="chatbotMessages">
        <!-- Messages will be injected here -->
      </div>

      <div class="chatbot-input-area">
        <form class="chatbot-form" id="chatbotForm">
          <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Posez votre question…" autocomplete="off" />
          <button type="submit" class="chatbot-send" aria-label="Envoyer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9l20-7z"/>
            </svg>
          </button>
        </form>
        <div class="chatbot-watermark">Powered by <strong>MELYN IA</strong></div>
      </div>
    </div>
    `;
}

export function initChatbot() {
  const bubble = document.getElementById('chatbotBubble');
  const window_ = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('chatbotClose');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  const messages = document.getElementById('chatbotMessages');
  const iconOpen = bubble?.querySelector('.chatbot-icon-open');
  const iconClose = bubble?.querySelector('.chatbot-icon-close');

  if (!bubble || !window_ || !form || !input || !messages) return;

  let isOpen = false;
  let hasGreeted = false;
  let lastIntent = null; // conversation context

  /* ── Restore session history ── */
  function restoreHistory() {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (!saved) return false;
      const history = JSON.parse(saved);
      if (!Array.isArray(history) || history.length === 0) return false;

      hasGreeted = true;
      history.forEach(entry => {
        if (entry.type === 'bot') {
          addBotMessage(entry.text, entry.time, true);
        } else if (entry.type === 'user') {
          addUserMessage(entry.text, entry.time, true);
        }
      });
      // Restore last intent from the last bot message
      const lastBot = [...history].reverse().find(e => e.intent);
      if (lastBot) lastIntent = lastBot.intent;
      return true;
    } catch { return false; }
  }

  function saveToHistory(type, text, time, intent) {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      const history = saved ? JSON.parse(saved) : [];
      history.push({ type, text, time, intent: intent || null });
      // Keep max 50 messages
      if (history.length > 50) history.splice(0, history.length - 50);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(history));
    } catch { /* silent */ }
  }

  /* ── Toggle ── */
  function toggle() {
    isOpen = !isOpen;
    window_.classList.toggle('chatbot-window--open', isOpen);
    bubble.classList.toggle('chatbot-bubble--active', isOpen);
    iconOpen.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';

    if (isOpen && !hasGreeted) {
      const hadHistory = restoreHistory();
      if (!hadHistory) {
        hasGreeted = true;
        setTimeout(() => {
          const greeting = `👋 Bonjour ! Je suis l'assistant **MELYN**.\n\nComment puis-je vous aider aujourd'hui ?`;
          const time = getTimestamp();
          addBotMessage(greeting, time);
          saveToHistory('bot', greeting, time, 'greeting');
          setTimeout(() => showQuickReplies(getQuickReplies('greeting')), 600);
        }, 400);
      } else {
        // Show quick replies based on last context
        setTimeout(() => showQuickReplies(getQuickReplies(lastIntent)), 300);
      }
    }

    if (isOpen) {
      setTimeout(() => input.focus(), 300);
    }
  }

  bubble.addEventListener('click', toggle);
  closeBtn.addEventListener('click', toggle);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) toggle();
  });

  /* ── Quick replies ── */
  function showQuickReplies(replies) {
    if (!replies || replies.length === 0) return;

    // Remove any existing quick replies
    messages.querySelectorAll('.quick-replies').forEach(el => el.remove());

    const quickRepliesContainer = document.createElement('div');
    quickRepliesContainer.className = 'quick-replies';

    replies.forEach((reply, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply';
      btn.dataset.msg = reply.msg;
      btn.textContent = reply.label;
      btn.style.animationDelay = `${idx * 0.08}s`;
      quickRepliesContainer.appendChild(btn);
    });

    messages.appendChild(quickRepliesContainer);
    scrollToBottom();

    quickRepliesContainer.querySelectorAll('.quick-reply').forEach(btn => {
      btn.addEventListener('click', () => {
        const msg = btn.dataset.msg;
        quickRepliesContainer.remove();
        handleUserMessage(msg);
      });
    });
  }

  /* ── Handle user message ── */
  function handleUserMessage(text) {
    const userTime = getTimestamp();
    addUserMessage(text, userTime);
    saveToHistory('user', text, userTime);
    showTypingIndicator();

    // Simulate thinking delay (400-900ms)
    const delay = 400 + Math.random() * 500;
    setTimeout(() => {
      removeTypingIndicator();
      const result = matchIntent(text);
      const botTime = getTimestamp();

      lastIntent = result.intent;
      addBotMessage(result.response, botTime);
      saveToHistory('bot', result.response, botTime, result.intent);

      // Show dynamic quick replies after response
      setTimeout(() => showQuickReplies(result.quickReplies), 500);
    }, delay);
  }

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    handleUserMessage(text);
  });

  /* ── Add bot message ── */
  function addBotMessage(text, time, silent) {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-message chat-message--bot' + (silent ? '' : ' chat-message--enter');

    const html = formatMessage(text);
    const timeStr = time || getTimestamp();

    wrapper.innerHTML = `
            <div class="chat-message-avatar">
                <svg viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="6" width="5" height="12" rx="1.5" fill="url(#chatAvatarG1)" opacity="0.7"/>
                    <rect x="9" y="3" width="5" height="18" rx="1.5" fill="url(#chatAvatarG1)"/>
                    <rect x="17" y="1" width="5" height="22" rx="1.5" fill="url(#chatAvatarG2)"/>
                </svg>
            </div>
            <div class="chat-message-content">
                <div class="chat-message-bubble">${html}</div>
                <span class="chat-message-time">${timeStr}</span>
            </div>
        `;
    messages.appendChild(wrapper);
    scrollToBottom();

    if (!silent) {
      requestAnimationFrame(() => {
        wrapper.classList.remove('chat-message--enter');
      });
      playNotificationSound();
    }
  }

  /* ── Add user message ── */
  function addUserMessage(text, time, silent) {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-message chat-message--user' + (silent ? '' : ' chat-message--enter');
    const timeStr = time || getTimestamp();

    wrapper.innerHTML = `
            <div class="chat-message-content">
                <div class="chat-message-bubble">${escapeHTML(text)}</div>
                <span class="chat-message-time">${timeStr}</span>
            </div>
        `;
    messages.appendChild(wrapper);
    scrollToBottom();

    if (!silent) {
      requestAnimationFrame(() => {
        wrapper.classList.remove('chat-message--enter');
      });
    }
  }

  /* ── Typing indicator ── */
  function showTypingIndicator() {
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.id = 'chatTyping';
    typing.innerHTML = `
            <div class="chat-message-avatar">
                <svg viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="6" width="5" height="12" rx="1.5" fill="url(#chatAvatarG1)" opacity="0.7"/>
                    <rect x="9" y="3" width="5" height="18" rx="1.5" fill="url(#chatAvatarG1)"/>
                    <rect x="17" y="1" width="5" height="22" rx="1.5" fill="url(#chatAvatarG2)"/>
                </svg>
            </div>
            <div class="chat-typing-bubble">
                <span class="chat-typing-text">réfléchit</span>
                <div class="chat-typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
    messages.appendChild(typing);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    document.getElementById('chatTyping')?.remove();
  }

  /* ── Format message (simple markdown → HTML) ── */
  function formatMessage(text) {
    return escapeHTML(text)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/• /g, '<span class="chat-bullet">•</span> ');
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }

  /* ── Timestamp ── */
  function getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  /* ── Notification sound (subtle, Web Audio API) ── */
  let audioCtx = null;
  function playNotificationSound() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.15);
    } catch { /* silent if audio not available */ }
  }
}
