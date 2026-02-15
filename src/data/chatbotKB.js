/* ============================================================
   MELYN — Chatbot Knowledge Base
   Intentions, mots-clés, synonymes et réponses contextuelles
   ============================================================ */

const chatbotKB = [
    {
        intent: 'greeting',
        keywords: ['bonjour', 'salut', 'hello', 'hi', 'hey', 'bonsoir', 'coucou', 'yo', 'bjr', 'slt'],
        response: `👋 Bonjour ! Je suis l'assistant **MELYN**.\n\nJe peux vous renseigner sur nos **services**, vous aider à **demander un devis**, ou vous mettre en relation avec notre équipe.\n\nComment puis-je vous aider ?`,
        quickReplies: ['services', 'devis', 'contact', 'demo']
    },
    {
        intent: 'services_overview',
        keywords: ['services', 'offre', 'proposez', 'faites', 'expertise', 'compétences', 'quoi', 'catalogue', 'solutions', 'prestations', 'accompagnement'],
        response: `🚀 Chez MELYN, nous proposons **6 domaines d'expertise** :\n\n🤖 **Intelligence Artificielle** — LLM, RAG, agents copilotes\n⚙️ **Automatisation** — RPA, Power Automate, n8n\n🗄️ **Gestion des Données** — ETL, Data Lake, gouvernance\n📊 **Business Intelligence** — Power BI, Tableau, KPIs\n☁️ **Cloud & Intégration** — Azure, AWS, GCP, CI/CD\n🔒 **Sécurité & Conformité** — RGPD, ISO 27001, SIEM\n\nQuel domaine vous intéresse ?`,
        quickReplies: ['ia', 'automatisation', 'data', 'bi', 'cloud', 'securite']
    },
    {
        intent: 'ia',
        keywords: ['ia', 'intelligence artificielle', 'gpt', 'llm', 'mistral', 'rag', 'copilote', 'chatgpt', 'machine learning', 'ml', 'deep learning', 'nlp', 'chatbot', 'assistant', 'gemini', 'claude', 'openai', 'llama', 'agent'],
        response: `🤖 **Intelligence Artificielle**\n\nNous déployons des solutions IA sur mesure :\n• Modèles LLM/SLM (GPT, Mistral, Llama)\n• RAG sur vos documents internes\n• Assistants IA & agents copilotes\n• Intégration API sécurisée\n\n📈 **Résultat** : –40 % de temps sur les tâches répétitives\n\n👉 [Découvrir le service](#/services/ia)`,
        quickReplies: ['devis_service', 'demo', 'cas_usage']
    },
    {
        intent: 'automatisation',
        keywords: ['automatisation', 'rpa', 'automate', 'workflow', 'uipath', 'power automate', 'n8n', 'robot', 'process', 'automatiser', 'no-code', 'low-code', 'zapier'],
        response: `⚙️ **Automatisation**\n\nNous automatisons vos processus bout-en-bout :\n• UiPath, Power Automate, n8n\n• Orchestration et monitoring\n• Intégration avec vos systèmes existants\n\n📈 **Résultat** : –60 % de temps de traitement, zéro erreurs\n\n👉 [Découvrir le service](#/services/automatisation)`,
        quickReplies: ['devis_service', 'demo', 'cas_usage']
    },
    {
        intent: 'data',
        keywords: ['données', 'data', 'etl', 'migration', 'snowflake', 'databricks', 'lake', 'gouvernance', 'qualité', 'pipeline', 'warehouse', 'lakehouse', 'talend', 'dbt', 'ingestion'],
        response: `🗄️ **Gestion des Données**\n\nNous structurons et fiabilisons vos données :\n• ETL/ELT (Talend, Azure Data Factory)\n• Data Lake/Lakehouse (Snowflake, Databricks)\n• Gouvernance et catalogue de données\n\n📈 **Résultat** : données fiables à 99,5 %, conformité RGPD\n\n👉 [Découvrir le service](#/services/data)`,
        quickReplies: ['devis_service', 'demo', 'cas_usage']
    },
    {
        intent: 'bi',
        keywords: ['bi', 'business intelligence', 'reporting', 'dashboard', 'tableau', 'power bi', 'kpi', 'looker', 'indicateur', 'rapport', 'analyse', 'visualisation', 'dataviz', 'qlik'],
        response: `📊 **Business Intelligence**\n\nNous créons vos dashboards et KPIs :\n• Power BI, Tableau, Looker Studio\n• Alerting et storytelling data\n• Self-service BI sécurisé\n\n📈 **Résultat** : décisions 3x plus rapides, alertes proactives\n\n👉 [Découvrir le service](#/services/bi)`,
        quickReplies: ['devis_service', 'demo', 'cas_usage']
    },
    {
        intent: 'cloud',
        keywords: ['cloud', 'azure', 'aws', 'gcp', 'docker', 'kubernetes', 'ci/cd', 'devops', 'microservices', 'infrastructure', 'hébergement', 'terraform', 'serverless', 'conteneur', 'k8s', 'pipeline'],
        response: `☁️ **Cloud & Intégration**\n\nNous architecturons votre infrastructure cloud :\n• Migration vers Azure, AWS, GCP\n• APIM & intégrations\n• Conteneurs & pipelines CI/CD\n• Architecture microservices\n\n📈 **Résultat** : –40 % de coûts, déploiements en < 15 min\n\n👉 [Découvrir le service](#/services/cloud)`,
        quickReplies: ['devis_service', 'demo', 'cas_usage']
    },
    {
        intent: 'securite',
        keywords: ['sécurité', 'securite', 'rgpd', 'iso', 'conformité', 'audit', 'siem', 'cybersécurité', 'protection', 'soc', 'pentest', 'firewall', 'zero trust', 'chiffrement', 'gdpr'],
        response: `🔒 **Sécurité & Conformité**\n\nNous sécurisons votre SI :\n• Audit & durcissement\n• Gestion des accès & secrets\n• SIEM (Elastic/Kibana)\n• Conformité RGPD, ISO 27001, SOC 2\n\n📈 **Résultat** : conformité en < 3 mois, –80 % de surface d'attaque\n\n👉 [Découvrir le service](#/services/securite)`,
        quickReplies: ['devis_service', 'demo', 'cas_usage']
    },
    {
        intent: 'devis',
        keywords: ['devis', 'prix', 'tarif', 'coût', 'cout', 'combien', 'budget', 'estimation', 'facturer', 'facturation', 'pricing', 'gratuit', 'payant'],
        response: `💰 **Demande de devis**\n\nChaque projet est unique ! Nos tarifs dépendent de :\n• La complexité et la durée du projet\n• Les technologies requises\n• Le niveau d'accompagnement souhaité\n\n📞 Contactez-nous pour un devis personnalisé :\n• 🇫🇷 **Paris** : +33 6 20 01 52 97\n• 🇹🇳 **Tunis** : +216 29 994 532\n• **Email** : contact@melynia.com\n• Ou réservez directement un créneau 👇\n\n📅 [Planifier un appel](https://calendly.com/onesmalek-benamor/30min)`,
        quickReplies: ['demo', 'contact', 'services']
    },
    {
        intent: 'contact',
        keywords: ['contact', 'joindre', 'appeler', 'téléphone', 'telephone', 'email', 'mail', 'adresse', 'écrire', 'rencontrer', 'numéro', 'numero', 'coordonnées'],
        response: `📬 **Nous contacter**\n\n🇫🇷 **Paris** : 58 Rue de Monceau, 75008 Paris\n📞 +33 6 20 01 52 97\n\n🇹🇳 **Tunis** : Centre Urbain Nord, Imm. Le Palace, 4ème étage, bureau 4-8 — CP 1082\n📞 +216 29 994 532\n\n✉️ **Email** : contact@melynia.com\n💼 **LinkedIn** : [Malek Ben Amor](https://www.linkedin.com/in/malek-ben-amor-52691071/)\n\n📅 Vous pouvez aussi réserver un créneau directement :\n[Planifier un appel](https://calendly.com/onesmalek-benamor/30min)`,
        quickReplies: ['demo', 'devis', 'services']
    },
    {
        intent: 'demo',
        keywords: ['démo', 'demo', 'démonstration', 'rdv', 'rendez-vous', 'calendly', 'appel', 'call', 'réunion', 'planifier', 'réserver', 'reserver', 'créneau'],
        response: `📅 **Réserver une démo**\n\nPlanifiez un appel de 30 minutes avec notre fondateur Malek Ben Amor pour discuter de vos besoins :\n\n🔗 [Réserver maintenant sur Calendly](https://calendly.com/onesmalek-benamor/30min)\n\nNous vous présenterons nos solutions adaptées à votre contexte !`,
        quickReplies: ['services', 'devis', 'contact']
    },
    {
        intent: 'equipe',
        keywords: ['équipe', 'equipe', 'qui', 'fondateur', 'malek', 'ceo', 'team', 'cofondateur', 'directeur', 'consultant'],
        response: `👥 **Notre Équipe**\n\n**Malek Ben Amor** — CEO & Founder\n\n10+ ans d'expérience en data, IA et transformation digitale. Expert Azure, Power BI, et architectures cloud.\n\n💼 [Profil LinkedIn](https://www.linkedin.com/in/malek-ben-amor-52691071/)\n\n50+ projets livrés · 30+ clients satisfaits · 20+ technologies maîtrisées`,
        quickReplies: ['services', 'demo', 'contact']
    },
    {
        intent: 'process',
        keywords: ['méthodologie', 'methodologie', 'processus', 'comment ça marche', 'comment ca marche', 'fonctionnement', 'étapes', 'etapes', 'démarche', 'demarche', 'approche', 'comment travaillez'],
        response: `🔄 **Notre méthodologie**\n\nNous suivons une approche en **4 phases** :\n\n**1. Discovery** — Audit et cadrage de vos besoins\n**2. Design** — Architecture et prototype\n**3. Build** — Développement itératif (sprints agile)\n**4. Run** — Mise en production, monitoring et support\n\n⏱️ **Durée moyenne** : 4 à 12 semaines selon la complexité\n🤝 **Inclus** : transfert de compétences et documentation\n\nSouhaitez-vous en savoir plus sur un projet précis ?`,
        quickReplies: ['devis', 'demo', 'cas_usage']
    },
    {
        intent: 'cas_usage',
        keywords: ['cas', 'usage', 'référence', 'reference', 'étude de cas', 'etude de cas', 'exemple', 'portfolio', 'réalisation', 'realisation', 'client', 'projet', 'témoignage'],
        response: `📋 **Nos réalisations**\n\nQuelques exemples de projets livrés :\n\n🏦 **Bancaire** — Pipeline ETL temps réel + dashboards Power BI pour le suivi des risques\n🏭 **Industrie** — RPA avec UiPath, –70 % de saisies manuelles\n🏥 **Santé** — Chatbot IA interne basé sur RAG pour 500+ professionnels\n🛒 **Retail** — Data Lake Snowflake + modèle de prévision des ventes\n\n50+ projets livrés auprès de 30+ clients.\n\nEnvie d'un résultat similaire ?`,
        quickReplies: ['devis', 'demo', 'services']
    },
    {
        intent: 'localisation',
        keywords: ['où', 'ou', 'basé', 'base', 'localisation', 'bureau', 'paris', 'france', 'tunis', 'tunisie', 'remote', 'distance', 'sur site', 'géographie', 'pays'],
        response: `📍 **Nos bureaux**\n\n🇫🇷 **Paris** : 58 Rue de Monceau, 75008 Paris\n🇹🇳 **Tunis** : Centre Urbain Nord, Imm. Le Palace, 4ème étage, bureau 4-8 — CP 1082\n\nNous intervenons :\n• 🏢 **Sur site** à Paris, Tunis & régions\n• 🌐 **À distance** en France, Tunisie et à l'international\n• 🔀 **Mode hybride** selon vos préférences\n\nLa majorité de nos projets sont réalisés en mode hybride pour plus de flexibilité.`,
        quickReplies: ['contact', 'demo', 'devis']
    },
    {
        intent: 'recrutement',
        keywords: ['recrute', 'recrutement', 'embauche', 'travailler', 'candidature', 'cv', 'poste', 'carrière', 'carriere', 'rejoindre', 'freelance', 'stage', 'alternance', 'job'],
        response: `🚀 **Rejoindre MELYN**\n\nNous sommes toujours à la recherche de talents passionnés par la data et l'IA !\n\n📩 Envoyez votre candidature à : **contact@melynia.com**\n\nProfils recherchés :\n• Data Engineers & Analysts\n• Consultants IA / ML\n• Développeurs Cloud & DevOps\n• Freelances pour missions ponctuelles\n\n💼 [Voir le profil LinkedIn](https://www.linkedin.com/in/malek-ben-amor-52691071/)`,
        quickReplies: ['contact', 'equipe', 'services']
    },
    {
        intent: 'techstack',
        keywords: ['technologie', 'technologies', 'tech', 'stack', 'outil', 'outils', 'plateforme', 'logiciel', 'framework', 'langage', 'python', 'sql', 'javascript'],
        response: `🛠️ **Notre stack technologique**\n\n**IA & ML** : Python, TensorFlow, LangChain, OpenAI, Hugging Face\n**Data** : Snowflake, Databricks, dbt, Apache Spark, Talend\n**BI** : Power BI, Tableau, Looker Studio\n**Cloud** : Azure, AWS, GCP, Docker, Kubernetes\n**Automatisation** : UiPath, Power Automate, n8n\n**Sécurité** : Elastic SIEM, Vault, Azure AD\n\n20+ technologies maîtrisées et certifiées.`,
        quickReplies: ['services', 'devis', 'demo']
    },
    {
        intent: 'urgence',
        keywords: ['urgent', 'urgence', 'vite', 'retard', 'deadline', 'rapidement', 'immédiat', 'immediat', 'asap', 'rush', 'en panne', 'problème', 'probleme', 'blocage', 'bloqué'],
        response: `⚡ **Projet urgent ?**\n\nNous comprenons l'importance des délais ! Voici comment nous pouvons agir rapidement :\n\n• 📞 **Paris** : +33 6 20 01 52 97\n• 📞 **Tunis** : +216 29 994 532\n• 🚀 **Démarrage rapide** : mobilisation en 24-48h\n• 🏃 **Mode sprint** : livrables courts et fréquents\n\nAppelez-nous directement ou planifiez un appel dès maintenant :\n\n📅 [Réserver un créneau](https://calendly.com/onesmalek-benamor/30min)`,
        quickReplies: ['contact', 'demo', 'devis']
    },
    {
        intent: 'merci',
        keywords: ['merci', 'thanks', 'thank', 'super', 'parfait', 'génial', 'excellent', 'cool', 'top', 'bravo', 'nickel', 'impeccable'],
        response: `😊 Avec plaisir ! N'hésitez pas si vous avez d'autres questions.\n\nJe suis disponible pour vous guider vers le bon service ou vous mettre en relation avec notre équipe. 🚀`,
        quickReplies: ['services', 'devis', 'demo']
    },
    {
        intent: 'bye',
        keywords: ['au revoir', 'bye', 'à bientôt', 'bonne journée', 'ciao', 'adieu', 'a plus', 'bonne soirée'],
        response: `👋 À bientôt ! N'hésitez pas à revenir si vous avez des questions.\n\nBonne journée et à très vite chez MELYN ! 🚀`,
        quickReplies: []
    }
];

const defaultResponse = `🤔 Je ne suis pas sûr de comprendre votre demande.\n\nJe peux vous aider avec :\n• **Nos services** (IA, Data, Cloud…)\n• **Un devis** personnalisé\n• **Notre méthodologie** de travail\n• **Nos références** et études de cas\n• **Prendre contact** avec notre équipe\n• **Réserver une démo**\n\nEssayez l'un de ces sujets ou reformulez votre question !`;

/* ────────────────────────────────────────────────
   Quick reply definitions — reusable by intent
   ──────────────────────────────────────────────── */
const QUICK_REPLY_MAP = {
    services: { label: '🚀 Services', msg: 'Quels sont vos services ?' },
    devis: { label: '💰 Devis', msg: 'Je souhaite un devis' },
    contact: { label: '📬 Contact', msg: 'Comment vous contacter ?' },
    demo: { label: '📅 Démo', msg: 'Je veux réserver une démo' },
    ia: { label: '🤖 IA', msg: 'Parlez-moi de vos solutions IA' },
    automatisation: { label: '⚙️ Automatisation', msg: 'Parlez-moi de l\'automatisation' },
    data: { label: '🗄️ Data', msg: 'Parlez-moi de la gestion des données' },
    bi: { label: '📊 BI', msg: 'Parlez-moi du Business Intelligence' },
    cloud: { label: '☁️ Cloud', msg: 'Parlez-moi du Cloud' },
    securite: { label: '🔒 Sécurité', msg: 'Parlez-moi de la sécurité' },
    equipe: { label: '👥 Équipe', msg: 'Qui êtes-vous ?' },
    process: { label: '🔄 Méthodologie', msg: 'Quelle est votre méthodologie ?' },
    cas_usage: { label: '📋 Références', msg: 'Avez-vous des études de cas ?' },
    devis_service: { label: '💰 Devis pour ce service', msg: 'Je souhaite un devis' },
};

/**
 * Get quick reply buttons for a given intent
 */
export function getQuickReplies(intentName) {
    const entry = chatbotKB.find(e => e.intent === intentName);
    const keys = entry?.quickReplies || ['services', 'devis', 'contact', 'demo'];
    return keys.map(k => QUICK_REPLY_MAP[k]).filter(Boolean);
}

/* ────────────────────────────────────────────────
   NLP Matching — bi-gram scoring + bonus
   ──────────────────────────────────────────────── */

/**
 * Generate bi-grams from a string
 */
function bigrams(str) {
    const s = str.toLowerCase();
    const result = [];
    for (let i = 0; i < s.length - 1; i++) {
        result.push(s.substring(i, i + 2));
    }
    return result;
}

/**
 * Dice coefficient similarity between two strings (0–1)
 */
function diceCoefficient(a, b) {
    if (a === b) return 1;
    if (a.length < 2 || b.length < 2) return 0;
    const gramsA = bigrams(a);
    const gramsB = bigrams(b);
    let overlap = 0;
    const bCopy = [...gramsB];
    for (const gram of gramsA) {
        const idx = bCopy.indexOf(gram);
        if (idx >= 0) {
            overlap++;
            bCopy.splice(idx, 1);
        }
    }
    return (2 * overlap) / (gramsA.length + gramsB.length);
}

/**
 * Find the best matching intent for a user message
 * Uses exact keyword inclusion + fuzzy bi-gram matching
 */
export function matchIntent(message) {
    const normalized = message.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const words = normalized.split(/\s+/);

    let bestMatch = null;
    let bestScore = 0;

    for (const entry of chatbotKB) {
        let score = 0;

        for (const kw of entry.keywords) {
            const normalizedKw = kw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

            // Exact inclusion: strong signal
            if (normalized.includes(normalizedKw)) {
                score += normalizedKw.length * 2;
                continue;
            }

            // Fuzzy match each word against keyword
            for (const word of words) {
                if (word.length < 3) continue;
                const sim = diceCoefficient(word, normalizedKw);
                if (sim >= 0.55) {
                    score += normalizedKw.length * sim;
                }
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestMatch = entry;
        }
    }

    return {
        response: bestMatch ? bestMatch.response : defaultResponse,
        intent: bestMatch ? bestMatch.intent : null,
        quickReplies: bestMatch
            ? getQuickReplies(bestMatch.intent)
            : getQuickReplies(null)
    };
}

export default chatbotKB;
