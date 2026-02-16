/* ============================================================
   MELYN — French Translations
   ============================================================ */

const fr = {
    /* --- Nav / Header --- */
    nav: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        team: 'Équipe',
        contact: 'Contact',
        cta: 'Prendre RDV',
        langLabel: 'EN',
        logoTagline: 'IA DATA CONSULTING',
    },

    /* --- Hero --- */
    hero: {
        badge: 'IA Data Consulting',
        title: 'Transformez vos données<br>en avantage stratégique',
        subtitle: 'Solutions IA, Data & Cloud sur mesure — de la stratégie à la mise en production, sécurisées et alignées sur vos enjeux métiers.',
        ctaPrimary: 'Découvrir nos services',
        ctaSecondary: 'Demander une démo',
    },

    /* --- About --- */
    about: {
        label: 'À propos',
        title: 'Pourquoi <span class="gradient-text">MELYN</span> ?',
        desc: 'Nous connectons vos sources de données, automatisons vos flux et mettons l\'IA au service du métier.',
        paragraph: 'Vous restez concentré sur les décisions, pendant que <strong style="color:var(--color-text-primary)">vos analytics</strong> prennent la place avant.',
        feature1: 'Delivery mesurable, sécurité & conformité intégrées',
        feature2: 'Architecture cloud prête pour la prod (Azure / AWS / GCP)',
        feature3: 'Intégration API & gouvernance de la donnée',
        teamHeading: 'Notre Équipe',
        melynStory: 'Depuis septembre 2024, MELYN se développe avec une approche end-to-end : cadrage, ateliers, spécifications technico-fonctionnelles, wireframes, pilotage delivery (dev/QA), recette/UAT, mise en production et amélioration continue. Objectif : simplifier les processus, fiabiliser les flux et livrer des solutions robustes, maintenables et orientées impact.',
        teamDetails: 'L’équipe MELYN réunit des profils développeurs issus de l’INSAT et d’ESPRIT, ainsi que des profils Business Analyst. Ensemble, nous intervenons auprès de clients sur les marchés de Dubaï et de France, en apportant une exécution fiable, une communication claire et une forte capacité d’adaptation aux contextes métier.',
        members: [
            {
                name: 'Malek Ben Amor',
                role: 'CEO & Fondatrice',
                bio: 'Consultante en transformation digitale spécialisée en data, automatisation et plateformes métiers, accompagnant des organisations internationales sur des projets complexes.',
                location: 'Paris / Tunis',
                avatar: '/assets/img/malek_ceo.png',
                linkedin: 'https://www.linkedin.com/in/malek-ben-amor-b76542159/',
                email: 'mailto:contact@melyn.ai'
            },
            {
                name: 'Sahar Sallah',
                role: 'Software Engineer',
                bio: 'Ingénieure dynamique avec une solide expérience dans les applications basées sur l\'IA et les technologies web modernes.',
                location: 'Tunis, Tunisie',
                avatar: '/assets/img/sahar.jpeg',
                linkedin: '#',
                email: 'mailto:contact@melyn.ai'
            },
            {
                name: 'Hassene Afif',
                role: 'Software Engineer',
                bio: 'Développeur expérimenté spécialisé dans les architectures évolutives et le développement full-stack.',
                location: 'Tunis, Tunisie',
                avatar: '/assets/img/Hassene.png',
                linkedin: '#',
                email: 'mailto:contact@melyn.ai'
            },
            {
                name: 'Mootez Baccouch',
                role: 'Software Engineer',
                bio: 'Développeur passionné issu de l\'INSAT/ESPRIT, concentré sur la livraison de solutions numériques à fort impact.',
                location: 'Tunis, Tunisie',
                avatar: '/assets/img/motez.png',
                linkedin: '#',
                email: 'mailto:contact@melyn.ai'
            }
        ]
    },

    /* --- Services section --- */
    services: {
        label: 'Nos services',
        title: 'Une offre complète',
        desc: 'Accélérez vos projets par la data et l\'IA avec une approche sécurisée et mesurable.',
        discover: 'Découvrir',
    },

    /* --- Stats --- */
    stats: {
        projects: 'Projets livrés',
        clients: 'Clients satisfaits',
        experience: 'Années d\'expérience',
        technologies: 'Technologies maîtrisées',
    },

    /* --- CTA --- */
    cta: {
        title: 'Prêt·e à transformer votre entreprise ?',
        desc: 'Parlons de vos objectifs et choisissez une trajectoire data/IA sécurisée et rentable.',
        demo: 'Demander une démo',
    },

    /* --- Service Detail --- */
    detail: {
        notFound: 'Service introuvable',
        backHome: 'Retour à l\'accueil',
        breadcrumbHome: 'Accueil',
        breadcrumbServices: 'Services',
        scope: 'Périmètre',
        results: 'Résultats',
        technologies: 'Technologies',
        prev: 'Précédent',
        next: 'Suivant',
        contactUs: 'Nous contacter',
        schedule: 'Planifier 30 min',
    },

    /* --- Footer --- */
    footer: {
        brandDesc: 'Votre partenaire pour une stratégie data & IA sur mesure — de l\'idée à la production.',
        stayInformed: 'Restez informé',
        newsletterDesc: 'Recevez nos derniers articles sur l\'IA, la data et le cloud.',
        emailPlaceholder: 'votre@email.com',
        servicesHeading: 'Services',
        resourcesHeading: 'Ressources',
        blog: 'Blog',
        caseStudies: 'Études de cas',
        whitepapers: 'Livres blancs',
        documentation: 'Documentation',
        contactHeading: 'Contact',
        labelParis: 'Paris',
        addressParis: '58 Rue de Monceau, 75008 Paris, France',
        labelTunis: 'Tunis',
        addressTunis: 'Centre Urbain Nord, Imm. Le Palace, 4ème étage, bureau 4-8 — CP 1082 Tunis',
        labelPhone: 'Téléphone',
        labelEmail: 'Email',
        copyright: `© ${new Date().getFullYear()} MELYN — IA Data Consulting. Tous droits réservés.`,
        privacy: 'Politique de confidentialité',
        legal: 'Mentions légales',
        terms: 'CGU',
    },

    /* --- Chatbot --- */
    chatbot: {
        title: 'Chatbot MELYN',
        placeholder: 'Tapez votre message…',
        greeting: '👋 Bonjour ! Je suis l\'assistant MELYN. Comment puis-je vous aider ?',
        thinking: 'réfléchit',
        watermark: 'Powered by MELYN IA',
    },
    ceoPage: {
        title: 'Profil CEO — Malek Ben Amor',
        subtitle: 'Consultante en Transformation Digitale & IA',
        intro: 'Consultante en transformation digitale, elle pilote des projets de bout en bout : cadrage, ateliers, rédaction de spécifications technico-fonctionnelles, pilotage delivery, recette/UAT et mise en production.',
        experience: 'Elle combine des certifications en IA avec une solide expérience en automatisation (workflows, orchestrations, intégrations, reporting) et une expertise éprouvée en migration de données et modernisation (mapping, qualité, reprise, cutover, sécurisation des flux).',
        international: 'Habituée aux environnements exigeants et multi-acteurs, elle a travaillé dans des contextes internationaux, notamment à Abu Dhabi, Madrid, Brésil, Maroc, Dubai, Paris, Milan et Copenhague.',
        approach: 'Son approche est orientée résultat : fiabiliser, automatiser, industrialiser et accélérer la valeur métier, avec un haut niveau d’exigence sur la qualité et la traçabilité.',
        backButton: 'Retour à l\'accueil',
        contactButton: 'Prendre rendez-vous'
    }
};

export default fr;
