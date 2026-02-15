/* ============================================================
   MELYN — Services Data
   ============================================================ */

const services = [
    {
        id: 'ia',
        title: 'Intelligence Artificielle',
        shortDesc: 'Agents copilotes pour automatiser, accélérer et fiabiliser vos opérations.',
        heroImage: '/assets/img/bg-ia.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/></svg>`,
        tags: ['GPT', 'Mistral', 'LLM', 'RAG', 'Copilotes'],
        scope: [
            'Modèles LLM/SLM personnalisés (GPT, Mistral, Llama)',
            'RAG sur vos documents internes',
            'Assistants IA & agents copilotes',
            'Intégration API & sécurité'
        ],
        results: [
            'Automatisation de tâches répétitives (–40 % de temps)',
            'Réponses contextuelles & fiables',
            'Adoption accélérée par les métiers'
        ],
        ctaTitle: "Prêt·e à déployer l'IA dans votre entreprise ?",
        ctaDesc: "Parlons de vos cas d'usage et construisons une trajectoire IA sécurisée et rentable."
    },
    {
        id: 'automatisation',
        title: 'Automatisation',
        shortDesc: 'RPA + low-code pour des workflows bout-en-bout mesurables.',
        heroImage: '/assets/img/bg-automatisation.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="7" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="17" r="2"/><path d="M8 7h3M7 9v4h5M14 12h3M12 14v3h4"/></svg>`,
        tags: ['UiPath', 'Power Automate', 'n8n', 'RPA', 'Low-Code'],
        scope: [
            'UiPath, Power Automate, n8n',
            'Orchestration et monitoring',
            'Réduction des délais de traitement',
            'Intégration avec vos systèmes existants'
        ],
        results: [
            'Réduction de 60 % du temps de traitement',
            'Zéro erreurs sur les tâches automatisées',
            'ROI mesurable dès le premier trimestre'
        ],
        ctaTitle: "Prêt·e à automatiser vos processus ?",
        ctaDesc: "Identifions ensemble les workflows à automatiser pour un impact maximal."
    },
    {
        id: 'data',
        title: 'Gestion des Données',
        shortDesc: 'Migration et qualité des données, conformité et traçabilité.',
        heroImage: '/assets/img/bg-data.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>`,
        tags: ['ETL/ELT', 'Snowflake', 'Databricks', 'Data Lake', 'Gouvernance'],
        scope: [
            'ETL/ELT Talend, Azure Data Factory',
            'Data Lake/Lakehouse (Snowflake, Databricks)',
            'Réconciliation & UAT',
            'Gouvernance et catalogue de données'
        ],
        results: [
            'Données fiables et réconciliées à 99,5 %',
            'Migration sans interruption de service',
            'Conformité RGPD & traçabilité complète'
        ],
        ctaTitle: "Prêt·e à maîtriser vos données ?",
        ctaDesc: "Construisons ensemble une architecture data solide, évolutive et conforme."
    },
    {
        id: 'bi',
        title: 'Business Intelligence',
        shortDesc: 'Reporting interactif et KPIs temps réel pour piloter la performance.',
        heroImage: '/assets/img/bg-bi.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V5"/><rect x="6" y="12" width="3" height="7" rx="1"/><rect x="11" y="8" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="15" rx="1"/></svg>`,
        tags: ['Power BI', 'Tableau', 'Looker', 'KPI', 'Self-Service'],
        scope: [
            'Power BI, Tableau, Looker Studio',
            'Alerting et storytelling data',
            'Self-service BI sécurisé',
            'Dashboards temps réel'
        ],
        results: [
            'Décisions 3x plus rapides grâce aux données',
            'Adoption self-service par les métiers',
            'Alertes proactives sur les KPIs critiques'
        ],
        ctaTitle: "Prêt·e à piloter par la donnée ?",
        ctaDesc: "Parlons de vos indicateurs clés et créons vos dashboards sur mesure."
    },
    {
        id: 'cloud',
        title: 'Cloud & Intégration',
        shortDesc: 'Architectures Azure, AWS, GCP. APIs, microservices et CI/CD.',
        heroImage: '/assets/img/bg-cloud.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17a4 4 0 0 1 0-8c.3-2.9 2.6-5 5.5-5 3.1 0 5.5 2.5 5.5 5.6a4.5 4.5 0 0 1-1 8.9H9"/><circle cx="9" cy="19.5" r="1.2"/><circle cx="13" cy="19.5" r="1.2"/><path d="M10.2 19.5h1.6"/></svg>`,
        tags: ['Azure', 'AWS', 'GCP', 'Docker', 'CI/CD'],
        scope: [
            'Migration vers le cloud',
            'APIM & intégrations',
            'Conteneurs & pipelines CI/CD',
            'Architecture microservices'
        ],
        results: [
            'Réduction de 40 % des coûts d\'infrastructure',
            'Déploiements automatisés en < 15 min',
            'Disponibilité 99,9 % garantie'
        ],
        ctaTitle: "Prêt·e à migrer vers le cloud ?",
        ctaDesc: "Concevons ensemble votre architecture cloud sécurisée et évolutive."
    },
    {
        id: 'securite',
        title: 'Sécurité & Conformité',
        shortDesc: 'RGPD, ISO 27001, exigences banque/assurance et observabilité.',
        heroImage: '/assets/img/bg-securite.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 5-3.3 9.2-7 10-3.7-.8-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
        tags: ['RGPD', 'ISO 27001', 'SOC 2', 'SIEM', 'Zero Trust'],
        scope: [
            'Audit & durcissement',
            'Gestion des accès & secrets',
            'Elastic/Kibana, Log Analytics',
            'Conformité RGPD, ISO 27001, SOC 2'
        ],
        results: [
            'Conformité certifiée en < 3 mois',
            'Détection d\'incidents en temps réel (MTTD < 5 min)',
            'Réduction de 80 % de la surface d\'attaque'
        ],
        ctaTitle: "Prêt·e à sécuriser votre SI ?",
        ctaDesc: "Parlons de vos enjeux de conformité et construisons votre stratégie de sécurité."
    }
];

export default services;
