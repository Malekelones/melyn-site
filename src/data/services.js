/* ============================================================
   MELYN — Services Data (Bilingual fr/en)
   ============================================================ */

const services = [
    {
        id: 'ia',
        title: { fr: 'Intelligence Artificielle', en: 'Artificial Intelligence', ar: 'الذكاء الاصطناعي' },
        shortDesc: {
            fr: 'Agents copilotes pour automatiser, accélérer et fiabiliser vos opérations.',
            en: 'Copilot agents to automate, accelerate and secure your operations.',
            ar: 'وكلاء مساعدون لأتمتة وتسريع وتأمين عملياتك.'
        },
        heroImage: '/public/assets/img/bg-ia.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/></svg>`,
        tags: ['GPT', 'Mistral', 'LLM', 'RAG', 'Copilots'],
        scope: {
            fr: [
                'Modèles LLM/SLM personnalisés (GPT, Mistral, Llama)',
                'RAG sur vos documents internes',
                'Assistants IA & agents copilotes',
                'Intégration API & sécurité'
            ],
            en: [
                'Custom LLM/SLM models (GPT, Mistral, Llama)',
                'RAG on your internal documents',
                'AI assistants & copilot agents',
                'API integration & security'
            ],
            ar: [
                'نماذج LLM/SLM مخصصة (GPT، Mistral، Llama)',
                'RAG على مستنداتك الداخلية',
                'مساعدو الذكاء الاصطناعي ووكلاء مساعدون',
                'تكامل واجهة البرامج والأمان'
            ]
        },
        results: {
            fr: [
                'Automatisation de tâches répétitives (–40 % de temps)',
                'Réponses contextuelles & fiables',
                'Adoption accélérée par les métiers'
            ],
            en: [
                'Automation of repetitive tasks (–40% time saved)',
                'Contextual & reliable answers',
                'Accelerated adoption by business teams'
            ],
            ar: [
                'أتمتة المهام المتكررة (توفير 40٪ من الوقت)',
                'إجابات سياقية وموثوقة',
                'تسريع التبني من قبل فرق العمل'
            ]
        },
        ctaTitle: {
            fr: "Prêt·e à déployer l'IA dans votre entreprise ?",
            en: "Ready to deploy AI in your business?",
            ar: "هل أنت مستعد لنشر الذكاء الاصطناعي في عملك؟"
        },
        ctaDesc: {
            fr: "Parlons de vos cas d'usage et construisons une trajectoire IA sécurisée et rentable.",
            en: "Let's discuss your use cases and build a secure, profitable AI trajectory.",
            ar: "دعنا نناقش حالات الاستخدام الخاصة بك ونبني مساراً آمناً ومربحاً للذكاء الاصطناعي."
        }
    },
    {
        id: 'automatisation',
        title: { fr: 'Automatisation', en: 'Automation', ar: 'الأتمتة' },
        shortDesc: {
            fr: 'RPA + low-code pour des workflows bout-en-bout mesurables.',
            en: 'RPA + low-code for measurable end-to-end workflows.',
            ar: 'RPA + low-code لسير عمل متكامل وقابل للقياس.'
        },
        heroImage: '/public/assets/img/bg-automatisation.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="7" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="17" r="2"/><path d="M8 7h3M7 9v4h5M14 12h3M12 14v3h4"/></svg>`,
        tags: ['UiPath', 'Power Automate', 'n8n', 'RPA', 'Low-Code'],
        scope: {
            fr: [
                'UiPath, Power Automate, n8n',
                'Orchestration et monitoring',
                'Réduction des délais de traitement',
                'Intégration avec vos systèmes existants'
            ],
            en: [
                'UiPath, Power Automate, n8n',
                'Orchestration and monitoring',
                'Reduced processing times',
                'Integration with your existing systems'
            ],
            ar: [
                'UiPath، Power Automate، n8n',
                'التنسيق والمراقبة',
                'تقليل أوقات المعالجة',
                'التكامل مع أنظمتك الحالية'
            ]
        },
        results: {
            fr: [
                'Réduction de 60 % du temps de traitement',
                'Zéro erreurs sur les tâches automatisées',
                'ROI mesurable dès le premier trimestre'
            ],
            en: [
                '60% reduction in processing time',
                'Zero errors on automated tasks',
                'Measurable ROI from the first quarter'
            ],
            ar: [
                'تقليل وقت المعالجة بنسبة 60٪',
                'صفر أخطاء في المهام المؤتمتة',
                'عائد استثمار ملموس من الربع الأول'
            ]
        },
        ctaTitle: {
            fr: "Prêt·e à automatiser vos processus ?",
            en: "Ready to automate your processes?",
            ar: "هل أنت مستعد لأتمتة عملياتك؟"
        },
        ctaDesc: {
            fr: "Identifions ensemble les workflows à automatiser pour un impact maximal.",
            en: "Let's identify the workflows to automate for maximum impact.",
            ar: "دعنا نحدد معاً تدفقات العمل التي يجب أتمتتها لتحقيق أقصى تأثير."
        }
    },
    {
        id: 'data',
        title: { fr: 'Gestion des Données', en: 'Data Management', ar: 'إدارة البيانات' },
        shortDesc: {
            fr: 'Migration et qualité des données, conformité et traçabilité.',
            en: 'Data migration and quality, compliance and traceability.',
            ar: 'هجرة البيانات وجودتها، الامتثال والتتبع.'
        },
        heroImage: '/public/assets/img/bg-data.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>`,
        tags: ['ETL/ELT', 'Snowflake', 'Databricks', 'Data Lake', 'Governance'],
        scope: {
            fr: [
                'ETL/ELT Talend, Azure Data Factory',
                'Data Lake/Lakehouse (Snowflake, Databricks)',
                'Réconciliation & UAT',
                'Gouvernance et catalogue de données'
            ],
            en: [
                'ETL/ELT Talend, Azure Data Factory',
                'Data Lake/Lakehouse (Snowflake, Databricks)',
                'Reconciliation & UAT',
                'Governance and data catalog'
            ],
            ar: [
                'ETL/ELT Talend، Azure Data Factory',
                'Data Lake/Lakehouse (Snowflake، Databricks)',
                'المصالحة و UAT',
                'حوكمة البيانات وكتاالوج البيانات'
            ]
        },
        results: {
            fr: [
                'Données fiables et réconciliées à 99,5 %',
                'Migration sans interruption de service',
                'Conformité RGPD & traçabilité complète'
            ],
            en: [
                '99.5% reliable and reconciled data',
                'Migration without service interruption',
                'GDPR compliance & full traceability'
            ],
            ar: [
                'بيانات موثوقة ومصالحة بنسبة 99.5٪',
                'هجرة البيانات دون انقطاع في الخدمة',
                'الامتثال لـ GDPR وتتبع كامل'
            ]
        },
        ctaTitle: {
            fr: "Prêt·e à maîtriser vos données ?",
            en: "Ready to master your data?",
            ar: "هل أنت مستعد للسيطرة على بياناتك؟"
        },
        ctaDesc: {
            fr: "Construisons ensemble une architecture data solide, évolutive et conforme.",
            en: "Let's build a solid, scalable, and compliant data architecture together.",
            ar: "دعنا نبني معاً بنية بيانات قوية وقابلة للتوسع ومتوافقة."
        }
    },
    {
        id: 'bi',
        title: { fr: 'Business Intelligence', en: 'Business Intelligence', ar: 'ذكاء الأعمال' },
        shortDesc: {
            fr: 'Reporting interactif et KPIs temps réel pour piloter la performance.',
            en: 'Interactive reporting and real-time KPIs to drive performance.',
            ar: 'تقارير تفاعلية ومؤشرات أداء في الوقت الفعلي لقيادة الأداء.'
        },
        heroImage: '/public/assets/img/bg-bi.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V5"/><rect x="6" y="12" width="3" height="7" rx="1"/><rect x="11" y="8" width="3" height="11" rx="1"/><rect x="16" y="4" width="3" height="15" rx="1"/></svg>`,
        tags: ['Power BI', 'Tableau', 'Looker', 'KPI', 'Self-Service'],
        scope: {
            fr: [
                'Power BI, Tableau, Looker Studio',
                'Alerting et storytelling data',
                'Self-service BI sécurisé',
                'Dashboards temps réel'
            ],
            en: [
                'Power BI, Tableau, Looker Studio',
                'Data alerting and storytelling',
                'Secure self-service BI',
                'Real-time dashboards'
            ],
            ar: [
                'Power BI، Tableau، Looker Studio',
                'تنبيهات البيانات وسرد القصص بالبيانات',
                'ذكاء أعمال ذاتي الخدمة آمن',
                'لوحات تحكم في الوقت الفعلي'
            ]
        },
        results: {
            fr: [
                'Décisions 3x plus rapides grâce aux données',
                'Adoption self-service par les métiers',
                'Alertes proactives sur les KPIs critiques'
            ],
            en: [
                '3x faster decisions powered by data',
                'Self-service adoption by business teams',
                'Proactive alerts on critical KPIs'
            ],
            ar: [
                'قرارات أسرع بـ 3 مرات بفضل البيانات',
                'تبني الخدمة الذاتية من قبل فرق العمل',
                'تنبيهات استباقية بشأن مؤشرات الأداء الهامة'
            ]
        },
        ctaTitle: {
            fr: "Prêt·e à piloter par la donnée ?",
            en: "Ready to be data-driven?",
            ar: "هل أنت مستعد للقيادة من خلال البيانات؟"
        },
        ctaDesc: {
            fr: "Parlons de vos indicateurs clés et créons vos dashboards sur mesure.",
            en: "Let's discuss your key metrics and create custom dashboards.",
            ar: "دعنا نتحدث عن مؤشراتك الرئيسية وننشئ لوحات تحكم مخصصة لك."
        }
    },
    {
        id: 'cloud',
        title: { fr: 'Cloud & Intégration', en: 'Cloud & Integration', ar: 'السحابة والتكامل' },
        shortDesc: {
            fr: 'Architectures Azure, AWS, GCP. APIs, microservices et CI/CD.',
            en: 'Azure, AWS, GCP architectures. APIs, microservices and CI/CD.',
            ar: 'هندسة Azure و AWS و GCP. واجهات البرامج والميكروسيرفيس و CI/CD.'
        },
        heroImage: '/public/assets/img/bg-cloud.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17a4 4 0 0 1 0-8c.3-2.9 2.6-5 5.5-5 3.1 0 5.5 2.5 5.5 5.6a4.5 4.5 0 0 1-1 8.9H9"/><circle cx="9" cy="19.5" r="1.2"/><circle cx="13" cy="19.5" r="1.2"/><path d="M10.2 19.5h1.6"/></svg>`,
        tags: ['Azure', 'AWS', 'GCP', 'Docker', 'CI/CD'],
        scope: {
            fr: [
                'Migration vers le cloud',
                'APIM & intégrations',
                'Conteneurs & pipelines CI/CD',
                'Architecture microservices'
            ],
            en: [
                'Cloud migration',
                'APIM & integrations',
                'Containers & CI/CD pipelines',
                'Microservices architecture'
            ],
            ar: [
                'الهجرة إلى السحابة',
                'APIM والتكامل',
                'الحاويات وخطوط أنابيب CI/CD',
                'هندسة الميكروسيرفيس'
            ]
        },
        results: {
            fr: [
                'Réduction de 40 % des coûts d\'infrastructure',
                'Déploiements automatisés en < 15 min',
                'Disponibilité 99,9 % garantie'
            ],
            en: [
                '40% reduction in infrastructure costs',
                'Automated deployments in < 15 min',
                '99.9% guaranteed availability'
            ],
            ar: [
                'تقليل تكاليف البنية التحتية بنسبة 40٪',
                'عمليات نشر مؤتمتة في أقل من 15 دقيقة',
                'توفر مضمون بنسبة 99.9٪'
            ]
        },
        ctaTitle: {
            fr: "Prêt·e à migrer vers le cloud ?",
            en: "Ready to migrate to the cloud?",
            ar: "هل أنت مستعد للهجرة إلى السحابة؟"
        },
        ctaDesc: {
            fr: "Concevons ensemble votre architecture cloud sécurisée et évolutive.",
            en: "Let's design your secure, scalable cloud architecture together.",
            ar: "دعنا نصمم معاً بنية سحابية آمنة وقابلة للتوسع."
        }
    },
    {
        id: 'securite',
        title: { fr: 'Sécurité & Conformité', en: 'Security & Compliance', ar: 'الأمان والامتثال' },
        shortDesc: {
            fr: 'RGPD, ISO 27001, exigences banque/assurance et observabilité.',
            en: 'GDPR, ISO 27001, banking/insurance requirements and observability.',
            ar: 'GDPR، ISO 27001، متطلبات الخدمات المصرفية/التأمين والملاحظة.'
        },
        heroImage: '/public/assets/img/bg-securite.jpg',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="url(#iconGrad)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 5-3.3 9.2-7 10-3.7-.8-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
        tags: ['GDPR', 'ISO 27001', 'SOC 2', 'SIEM', 'Zero Trust'],
        scope: {
            fr: [
                'Audit & durcissement',
                'Gestion des accès & secrets',
                'Elastic/Kibana, Log Analytics',
                'Conformité RGPD, ISO 27001, SOC 2'
            ],
            en: [
                'Audit & hardening',
                'Access & secrets management',
                'Elastic/Kibana, Log Analytics',
                'GDPR, ISO 27001, SOC 2 compliance'
            ],
            ar: [
                'التدقيق والتقوية',
                'إدارة الوصول والأسرار',
                'Elastic/Kibana، Log Analytics',
                'الامتثال لـ GDPR و ISO 27001 و SOC 2'
            ]
        },
        results: {
            fr: [
                'Conformité certifiée en < 3 mois',
                'Détection d\'incidents en temps réel (MTTD < 5 min)',
                'Réduction de 80 % de la surface d\'attaque'
            ],
            en: [
                'Certified compliance in < 3 months',
                'Real-time incident detection (MTTD < 5 min)',
                '80% reduction in attack surface'
            ],
            ar: [
                'الامتثال المعتمد في أقل من 3 أشهر',
                'كشف الحوادث في الوقت الفعلي (MTTD < 5 دقائق)',
                'تقليل سطح الهجوم بنسبة 80٪'
            ]
        },
        ctaTitle: {
            fr: "Prêt·e à sécuriser votre SI ?",
            en: "Ready to secure your IT?",
            ar: "هل أنت مستعد لتأمين نظام معلوماتك؟"
        },
        ctaDesc: {
            fr: "Parlons de vos enjeux de conformité et construisons votre stratégie de sécurité.",
            en: "Let's discuss your compliance challenges and build your security strategy.",
            ar: "دعنا نتحدث عن تحديات الامتثال الخاصة بك ونبني استراتيجية الأمان الخاصة بك."
        }
    }
];

export default services;
