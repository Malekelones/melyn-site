/* ============================================================
   MELYN — Chatbot Knowledge Base (English)
   ============================================================ */

const intents_en = [
    {
        intent: 'greeting',
        keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon', 'greetings'],
        response: `👋 **Hello!**\n\nWelcome to MELYN — AI Data Consulting.\n\nHow can I help you today?\n• Learn about our **services**\n• Request a **quote**\n• **Contact** our team\n• Book a **demo**`,
        quickReplies: ['services', 'quote', 'contact', 'demo']
    },
    {
        intent: 'services',
        keywords: ['services', 'offer', 'offering', 'solutions', 'expertise', 'skills', 'what do you do', 'capabilities', 'consulting'],
        response: `🚀 **Our Services**\n\nWe cover the entire data & AI value chain:\n\n🤖 **Artificial Intelligence** — LLM, RAG, copilot agents\n⚙️ **Automation** — RPA, low-code, n8n\n🗄️ **Data Management** — ETL, Data Lake, governance\n📊 **Business Intelligence** — Power BI, Tableau, Looker\n☁️ **Cloud & Integration** — Azure, AWS, GCP, CI/CD\n🔒 **Security & Compliance** — GDPR, ISO 27001, SOC 2\n\nWhich area interests you?`,
        quickReplies: ['demo', 'quote', 'methodology', 'contact']
    },
    {
        intent: 'quote',
        keywords: ['quote', 'price', 'pricing', 'cost', 'how much', 'budget', 'estimate', 'billing', 'rate', 'free', 'paid'],
        response: `💰 **Quote Request**\n\nEvery project is unique! Our rates depend on:\n• Project complexity and duration\n• Required technologies\n• Level of support needed\n\n📞 Contact us for a custom quote:\n• 🇫🇷 **Paris**: +33 6 20 01 52 97\n• 🇹🇳 **Tunis**: +216 29 994 532\n• **Email**: contact@melynia.com\n• Or book a slot directly 👇\n\n📅 [Schedule a call](https://calendly.com/onesmalek-benamor/30min)`,
        quickReplies: ['demo', 'contact', 'services']
    },
    {
        intent: 'contact',
        keywords: ['contact', 'reach', 'call', 'phone', 'email', 'mail', 'address', 'write', 'meet', 'number', 'coordinates'],
        response: `📬 **Contact Us**\n\n🇫🇷 **Paris**: 58 Rue de Monceau, 75008 Paris\n📞 +33 6 20 01 52 97\n\n🇹🇳 **Tunis**: Centre Urbain Nord, Imm. Le Palace, 4th floor, office 4-8 — CP 1082\n📞 +216 29 994 532\n\n✉️ **Email**: contact@melynia.com\n💼 **LinkedIn**: [Malek Ben Amor](https://www.linkedin.com/in/malek-ben-amor-52691071/)\n\n📅 You can also book a slot directly:\n[Schedule a call](https://calendly.com/onesmalek-benamor/30min)`,
        quickReplies: ['demo', 'quote', 'services']
    },
    {
        intent: 'demo',
        keywords: ['demo', 'demonstration', 'see', 'show', 'test', 'try', 'proof of concept', 'poc', 'pilot', 'appointment', 'meeting', 'schedule', 'book', 'calendly'],
        response: `🎯 **Book a Demo**\n\nA 30-minute session to:\n• Understand your challenges and objectives\n• Present relevant solutions\n• Define a concrete action plan\n\n📅 Book your slot now:\n[Schedule 30 min](https://calendly.com/onesmalek-benamor/30min)\n\n100% free, no commitment.`,
        quickReplies: ['services', 'quote', 'references']
    },
    {
        intent: 'methodology',
        keywords: ['methodology', 'method', 'approach', 'process', 'how', 'steps', 'phases', 'way of working', 'agile', 'delivery', 'workflow'],
        response: `📋 **Our Methodology**\n\nA structured 4-phase approach:\n\n**1. 🔍 Design** (1-2 weeks)\nAudit, use-case identification, ROI estimation\n\n**2. 🛠️ Build** (4-12 weeks)\nAgile development, weekly demos, continuous integration\n\n**3. 🚀 Run** (ongoing)\nProduction deployment, monitoring, support\n\n**4. 📈 Optimize** (quarterly)\nPerformance analysis, continuous improvements\n\nEach phase includes security & compliance controls.`,
        quickReplies: ['quote', 'demo', 'references']
    },
    {
        intent: 'references',
        keywords: ['references', 'clients', 'portfolio', 'case study', 'case studies', 'examples', 'use case', 'success', 'project', 'experience'],
        response: `📂 **Our References**\n\nKey areas of expertise:\n\n🏦 **Banking & Insurance** — Risk scoring, fraud detection, regulatory compliance\n🏥 **Healthcare** — Patient data, medical BI, GDPR\n🏭 **Industry** — IoT pipelines, predictive maintenance\n🛒 **Retail** — Recommendation engines, demand forecasting\n🏛️ **Public Sector** — Data dashboards, license management\n\n50+ projects delivered, 30+ satisfied clients.\n\nWant to discuss a similar project?`,
        quickReplies: ['contact', 'demo', 'quote']
    },
    {
        intent: 'location',
        keywords: ['where', 'located', 'location', 'office', 'paris', 'france', 'tunis', 'tunisia', 'remote', 'on-site', 'geography', 'country'],
        response: `📍 **Our Offices**\n\n🇫🇷 **Paris**: 58 Rue de Monceau, 75008 Paris\n🇹🇳 **Tunis**: Centre Urbain Nord, Imm. Le Palace, 4th floor, office 4-8 — CP 1082\n\nWe operate:\n• 🏢 **On-site** in Paris, Tunis & regions\n• 🌐 **Remotely** across France, Tunisia and internationally\n• 🔀 **Hybrid mode** based on your preferences\n\nMost of our projects are delivered in hybrid mode for maximum flexibility.`,
        quickReplies: ['contact', 'demo', 'quote']
    },
    {
        intent: 'recruitment',
        keywords: ['join', 'recruit', 'hiring', 'job', 'career', 'work', 'team', 'position', 'vacancy', 'apply', 'cv', 'resume'],
        response: `🚀 **Join MELYN**\n\nWe're always looking for talent passionate about data and AI!\n\n📩 Send your application to: **contact@melynia.com**\n\nProfiles we're looking for:\n• Data Engineers & Analysts\n• AI / ML Consultants\n• Cloud & DevOps Developers\n• Freelancers for specific missions\n\n💼 [View LinkedIn profile](https://www.linkedin.com/in/malek-ben-amor-52691071/)`,
        quickReplies: ['contact', 'team', 'services']
    },
    {
        intent: 'techstack',
        keywords: ['technology', 'technologies', 'stack', 'tools', 'platform', 'language', 'framework', 'python', 'azure', 'aws', 'power bi', 'databricks', 'snowflake'],
        response: `🛠️ **Our Tech Stack**\n\n**AI & ML**: Python, TensorFlow, PyTorch, LangChain, OpenAI, Mistral\n**Data**: Spark, Databricks, Snowflake, dbt, Airflow\n**BI**: Power BI, Tableau, Looker Studio\n**Cloud**: Azure, AWS, GCP, Terraform, Docker, Kubernetes\n**Automation**: UiPath, Power Automate, n8n, Make\n**Security**: Elastic/Kibana, Vault, Azure Sentinel\n\n20+ technologies mastered by our team.`,
        quickReplies: ['services', 'demo', 'quote']
    },
    {
        intent: 'urgency',
        keywords: ['urgent', 'emergency', 'fast', 'delay', 'deadline', 'quickly', 'immediate', 'asap', 'rush', 'broken', 'problem', 'issue', 'blocked'],
        response: `⚡ **Urgent Project?**\n\nWe understand the importance of deadlines! Here's how we can act quickly:\n\n• 📞 **Paris**: +33 6 20 01 52 97\n• 📞 **Tunis**: +216 29 994 532\n• 🚀 **Quick start**: mobilization in 24-48h\n• 🏃 **Sprint mode**: short and frequent deliverables\n\nCall us directly or schedule a call now:\n\n📅 [Book a slot](https://calendly.com/onesmalek-benamor/30min)`,
        quickReplies: ['contact', 'demo', 'quote']
    },
];

const defaultResponse_en = `🤔 I'm not sure I understand your request.\n\nI can help you with:\n• **Our services** (AI, Data, Cloud…)\n• A custom **quote**\n• Our **methodology**\n• Our **references** and case studies\n• **Getting in touch** with our team\n• **Booking a demo**\n\nTry one of these topics or rephrase your question!`;

/* --- Fuzzy matching (Dice coefficient on bigrams) --- */
function bigrams(str) {
    const s = str.toLowerCase();
    const bg = new Set();
    for (let i = 0; i < s.length - 1; i++) bg.add(s.slice(i, i + 2));
    return bg;
}

function dice(a, b) {
    if (!a.size || !b.size) return 0;
    let inter = 0;
    a.forEach(bg => { if (b.has(bg)) inter++; });
    return (2 * inter) / (a.size + b.size);
}

const QUICK_REPLY_MAP_EN = {
    services: { label: '🚀 Services', msg: 'What services do you offer?' },
    quote: { label: '💰 Quote', msg: 'I\'d like a quote' },
    demo: { label: '🎯 Demo', msg: 'I want to book a demo' },
    contact: { label: '📬 Contact', msg: 'How can I contact you?' },
    methodology: { label: '📋 Methodology', msg: 'What is your methodology?' },
    references: { label: '📂 References', msg: 'Do you have references?' },
    team: { label: '👥 Team', msg: 'Tell me about your team' },
};

export function matchIntent_en(userMsg) {
    const msg = userMsg.toLowerCase().trim();

    let bestScore = 0;
    let bestEntry = null;

    for (const entry of intents_en) {
        for (const kw of entry.keywords) {
            if (msg.includes(kw)) {
                const score = kw.length / msg.length + 0.5;
                if (score > bestScore) { bestScore = score; bestEntry = entry; }
            }
        }

        // Fuzzy
        const msgBg = bigrams(msg);
        for (const kw of entry.keywords) {
            if (kw.length < 4) continue;
            const d = dice(msgBg, bigrams(kw));
            if (d > 0.45 && d > bestScore) { bestScore = d; bestEntry = entry; }
        }
    }

    const response = bestEntry?.response || defaultResponse_en;
    return { response, entry: bestEntry };
}

export function getQuickReplies_en(entry) {
    const keys = entry?.quickReplies || ['services', 'quote', 'contact', 'demo'];
    return keys
        .filter(k => QUICK_REPLY_MAP_EN[k])
        .map(k => ({ key: k, ...QUICK_REPLY_MAP_EN[k] }));
}
