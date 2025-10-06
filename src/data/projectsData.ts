export interface ProjectData {
  id: string;
  title: { en: string; fr: string };
  context: { en: string; fr: string };
  objectives: { en: string[]; fr: string[] };
  challenges: { en: string[]; fr: string[] };
  duration: string;
  startDate: string;
  endDate: string;
  team: { role: string; count: string }[];
  infrastructure: string[];
  mainTech: string[];
  observability: string[];
  pipeline: string[];
  iacTools: string[];
  cicdTools: string[];
  securityTools: string[];
  metrics: { label: { en: string; fr: string }; value: string }[];
  benefits: { en: string[]; fr: string[] };
  technicalValue: { en: string[]; fr: string[] };
  technicalLearnings: { en: string[]; fr: string[] };
  methodologicalLearnings: { en: string[]; fr: string[] };
}

export const projectsData: Record<string, ProjectData> = {
  'wordpress-monitoring': {
    id: 'wordpress-monitoring',
    title: {
      en: 'WordPress Updates Monitoring System',
      fr: 'Système de Surveillance WordPress'
    },
    context: {
      en: 'Automated surveillance system for WordPress core and plugin updates across multiple instances in production. Proactive notification system integrated with Microsoft Teams to ensure security patches are applied rapidly.',
      fr: 'Système automatisé de surveillance des mises à jour WordPress et plugins sur plusieurs instances en production. Système de notification proactif intégré à Microsoft Teams pour garantir l\'application rapide des correctifs de sécurité.'
    },
    objectives: {
      en: [
        'Automate WordPress and plugin update detection',
        'Centralize notifications via Microsoft Teams',
        'Provide detailed update reports with versions',
        'Integrate natively with Docker containers',
        'Monitor only production environments'
      ],
      fr: [
        'Automatiser la détection des mises à jour WordPress et plugins',
        'Centraliser les notifications via Microsoft Teams',
        'Fournir des rapports détaillés avec versions',
        'Intégrer nativement avec les conteneurs Docker',
        'Surveiller uniquement les environnements de production'
      ]
    },
    challenges: {
      en: [
        'Managing different Docker base images (nginx vs nginx-alpine)',
        'Implementing WP-CLI with appropriate permissions (--allow-root)',
        'Cron service integration across container types',
        'Environment-specific execution (production only)',
        'Error handling and logging for tracking'
      ],
      fr: [
        'Gestion de différentes images Docker de base (nginx vs nginx-alpine)',
        'Implémentation de WP-CLI avec permissions appropriées (--allow-root)',
        'Intégration du service cron selon types de conteneurs',
        'Exécution spécifique par environnement (production uniquement)',
        'Gestion des erreurs et logging pour traçabilité'
      ]
    },
    duration: '2 semaines',
    startDate: '03/2024',
    endDate: '03/2024',
    team: [
      { role: 'DevOps Engineer', count: '1' },
      { role: 'Security Team', count: '1 (review)' }
    ],
    infrastructure: [
      'Azure Container Apps',
      'Docker containers (nginx/nginx-alpine)',
      'Microsoft Teams Webhooks',
      'Azure Storage for WordPress media'
    ],
    mainTech: [
      'WP-CLI for WordPress management',
      'Bash scripting for automation',
      'dcron for Alpine Linux',
      'jq for JSON processing',
      'cURL for Teams notifications'
    ],
    observability: [
      'Microsoft Teams notification cards',
      'Container logs via stdout/stderr',
      'Cron execution logs',
      'Update history tracking'
    ],
    pipeline: [
      'Dockerfile integration',
      'Environment variable management',
      'Cron job configuration at runtime',
      'Automated script deployment'
    ],
    iacTools: [
      'Dockerfile modifications',
      'Azure Container Apps configuration',
      'Environment variables via Terraform',
      'Build arguments (ARG) to ENV conversion'
    ],
    cicdTools: [
      'Azure DevOps pipelines',
      'Container image builds',
      'Automated deployment',
      'Teams webhook integration'
    ],
    securityTools: [
      'WP-CLI security updates',
      'Plugin vulnerability detection',
      'Production-only execution',
      'Secure webhook endpoints'
    ],
    metrics: [
      { label: { en: 'Time saved per week', fr: 'Temps gagné par semaine' }, value: '~4h' },
      { label: { en: 'Update detection delay', fr: 'Délai de détection' }, value: '< 24h' },
      { label: { en: 'WordPress sites monitored', fr: 'Sites WordPress surveillés' }, value: '10+' }
    ],
    benefits: {
      en: [
        'Complete automation of update verification',
        'Proactive security posture',
        'Centralized visibility for the team',
        'Standardized and reproducible process',
        'Time freed for high-value tasks'
      ],
      fr: [
        'Automatisation complète de la vérification',
        'Posture de sécurité proactive',
        'Visibilité centralisée pour l\'équipe',
        'Processus standardisé et reproductible',
        'Temps libéré pour tâches à forte valeur'
      ]
    },
    technicalValue: {
      en: [
        'Containerized automation pattern',
        'Multi-environment management',
        'Bash scripting best practices',
        'Integration with communication tools'
      ],
      fr: [
        'Pattern d\'automatisation conteneurisé',
        'Gestion multi-environnements',
        'Bonnes pratiques de scripting Bash',
        'Intégration avec outils de communication'
      ]
    },
    technicalLearnings: {
      en: [
        'WP-CLI command-line interface mastery',
        'Cron service differences between Linux distributions',
        'Docker image specificities (Alpine vs Debian)',
        'JSON processing with jq'
      ],
      fr: [
        'Maîtrise de l\'interface en ligne de commande WP-CLI',
        'Différences des services cron entre distributions Linux',
        'Spécificités des images Docker (Alpine vs Debian)',
        'Traitement JSON avec jq'
      ]
    },
    methodologicalLearnings: {
      en: [
        'DevOps automation mindset',
        'Proactive vs reactive monitoring',
        'Documentation and knowledge sharing',
        'Continuous improvement approach'
      ],
      fr: [
        'Mentalité d\'automatisation DevOps',
        'Surveillance proactive vs réactive',
        'Documentation et partage de connaissances',
        'Approche d\'amélioration continue'
      ]
    }
  },

  'azure-migration': {
    id: 'azure-migration',
    title: {
      en: 'Azure Container Apps Migration',
      fr: 'Migration Azure Container Apps'
    },
    context: {
      en: 'Strategic migration of 10+ WordPress applications from Azure Web Apps to Azure Container Apps. Project aimed at modernizing infrastructure, improving log aggregation with sidecar pattern, and reducing operational costs by 30% through optimized resource usage.',
      fr: 'Migration stratégique de 10+ applications WordPress d\'Azure Web Apps vers Azure Container Apps. Projet visant à moderniser l\'infrastructure, améliorer l\'agrégation des logs avec pattern sidecar, et réduire les coûts opérationnels de 30% grâce à l\'usage optimisé des ressources.'
    },
    objectives: {
      en: [
        'Migrate 10+ applications to Container Apps',
        'Implement sidecar pattern for log forwarding',
        'Improve observability with centralized logging',
        'Reduce infrastructure costs by 30%',
        'Maintain zero downtime during migration',
        'Validate POC before production rollout'
      ],
      fr: [
        'Migrer 10+ applications vers Container Apps',
        'Implémenter le pattern sidecar pour forwarding logs',
        'Améliorer l\'observabilité avec logs centralisés',
        'Réduire les coûts d\'infrastructure de 30%',
        'Maintenir zero downtime pendant la migration',
        'Valider le POC avant déploiement production'
      ]
    },
    challenges: {
      en: [
        'Zero-downtime migration strategy',
        'Sidecar container configuration for Elasticsearch',
        'Networking and storage migration',
        'Cost optimization with consumption-based pricing',
        'Rollback strategy if issues occur',
        'Team training on new platform'
      ],
      fr: [
        'Stratégie de migration sans interruption',
        'Configuration du conteneur sidecar pour Elasticsearch',
        'Migration du réseau et du stockage',
        'Optimisation des coûts avec tarification à l\'usage',
        'Stratégie de rollback en cas de problème',
        'Formation de l\'équipe sur la nouvelle plateforme'
      ]
    },
    duration: '4 mois',
    startDate: '02/2024',
    endDate: '06/2024',
    team: [
      { role: 'DevOps Engineers', count: '2' },
      { role: 'Cloud Architect', count: '1' },
      { role: 'Application Teams', count: '3' }
    ],
    infrastructure: [
      'Azure Container Apps (destination)',
      'Azure Web Apps (source)',
      'Azure Container Registry',
      'Azure Virtual Networks',
      'Azure Storage Accounts',
      'Azure MySQL Flexible Server'
    ],
    mainTech: [
      'Docker multi-container setup',
      'Sidecar pattern implementation',
      'Filebeat for log forwarding',
      'Nginx web server',
      'PHP-FPM for WordPress'
    ],
    observability: [
      'Elasticsearch 8 for centralized logs',
      'Kibana for log visualization',
      'Grafana for metrics',
      'Azure Monitor integration',
      'UptimeRobot for availability'
    ],
    pipeline: [
      'Blue-green deployment strategy',
      'Automated migration scripts',
      'POC validation phase',
      'Gradual rollout per application',
      'Automated rollback capability'
    ],
    iacTools: [
      'Terraform for Container Apps',
      'Azure Resource Manager templates',
      'Infrastructure versioning',
      'Multi-environment configurations'
    ],
    cicdTools: [
      'Azure DevOps YAML pipelines',
      'Container image builds',
      'Automated testing in dev',
      'Production deployment approvals'
    ],
    securityTools: [
      'Azure managed identities',
      'Network security groups',
      'Private endpoints',
      'Key Vault integration'
    ],
    metrics: [
      { label: { en: 'Cost reduction', fr: 'Réduction des coûts' }, value: '-30%' },
      { label: { en: 'Log aggregation improvement', fr: 'Amélioration agrégation logs' }, value: '100%' },
      { label: { en: 'Applications migrated', fr: 'Applications migrées' }, value: '10+' },
      { label: { en: 'Downtime during migration', fr: 'Interruption pendant migration' }, value: '0min' }
    ],
    benefits: {
      en: [
        'Significant operational cost reduction',
        'Improved observability and troubleshooting',
        'Better scalability and resilience',
        'Consumption-based pricing model',
        'Simplified operations management',
        'Faster incident resolution'
      ],
      fr: [
        'Réduction significative des coûts opérationnels',
        'Observabilité et debugging améliorés',
        'Meilleure scalabilité et résilience',
        'Modèle de tarification à l\'usage',
        'Gestion des opérations simplifiée',
        'Résolution d\'incidents plus rapide'
      ]
    },
    technicalValue: {
      en: [
        'Modern cloud-native architecture',
        'Sidecar pattern for cross-cutting concerns',
        'Infrastructure as Code practices',
        'FinOps optimization'
      ],
      fr: [
        'Architecture cloud-native moderne',
        'Pattern sidecar pour préoccupations transversales',
        'Pratiques Infrastructure as Code',
        'Optimisation FinOps'
      ]
    },
    technicalLearnings: {
      en: [
        'Azure Container Apps vs Web Apps comparison',
        'Multi-container pod orchestration',
        'Sidecar pattern implementation',
        'Log aggregation at scale',
        'Migration strategy planning'
      ],
      fr: [
        'Comparaison Azure Container Apps vs Web Apps',
        'Orchestration de pods multi-conteneurs',
        'Implémentation du pattern sidecar',
        'Agrégation de logs à grande échelle',
        'Planification de stratégie de migration'
      ]
    },
    methodologicalLearnings: {
      en: [
        'POC validation before production',
        'Gradual rollout strategy',
        'Stakeholder communication',
        'Risk management and mitigation',
        'Post-migration monitoring'
      ],
      fr: [
        'Validation POC avant production',
        'Stratégie de déploiement progressif',
        'Communication avec parties prenantes',
        'Gestion et mitigation des risques',
        'Surveillance post-migration'
      ]
    }
  },

  'wordpress-pipeline': {
    id: 'wordpress-pipeline',
    title: {
      en: 'WordPress Site Deployment Pipeline',
      fr: 'Pipeline de Déploiement WordPress'
    },
    context: {
      en: 'Complete end-to-end deployment pipeline for WordPress sites at Citeo, from initial conception to production deployment. Includes Docker containerization, Azure DevOps CI/CD, Infrastructure as Code with Terraform, automated testing, and blue-green deployment strategy.',
      fr: 'Pipeline complet de bout en bout pour le déploiement de sites WordPress chez Citeo, de la conception initiale au déploiement en production. Inclut conteneurisation Docker, CI/CD Azure DevOps, Infrastructure as Code avec Terraform, tests automatisés et stratégie de déploiement blue-green.'
    },
    objectives: {
      en: [
        'Standardize WordPress deployment process',
        'Implement blue-green deployment pattern',
        'Automate testing and security scans',
        'Reduce deployment time by 70%',
        'Enable rapid rollback capability',
        'Ensure consistent environments (dev/staging/prod)'
      ],
      fr: [
        'Standardiser le processus de déploiement WordPress',
        'Implémenter le pattern de déploiement blue-green',
        'Automatiser les tests et scans de sécurité',
        'Réduire le temps de déploiement de 70%',
        'Activer capacité de rollback rapide',
        'Garantir cohérence des environnements (dev/staging/prod)'
      ]
    },
    challenges: {
      en: [
        'WordPress-specific containerization',
        'Database migration between environments',
        'Media storage synchronization',
        'Plugin compatibility testing',
        'Environment-specific configurations',
        'Blue-green traffic switching'
      ],
      fr: [
        'Conteneurisation spécifique WordPress',
        'Migration base de données entre environnements',
        'Synchronisation du stockage média',
        'Tests de compatibilité des plugins',
        'Configurations spécifiques par environnement',
        'Basculement de trafic blue-green'
      ]
    },
    duration: '3 mois',
    startDate: '01/2024',
    endDate: '03/2024',
    team: [
      { role: 'DevOps Engineer', count: '1' },
      { role: 'WordPress Developers', count: '2' },
      { role: 'QA Engineer', count: '1' }
    ],
    infrastructure: [
      'Azure Container Apps',
      'Azure MySQL Flexible Server',
      'Azure Storage (media files)',
      'Azure Application Gateway',
      'Azure Container Registry'
    ],
    mainTech: [
      'WordPress (PHP/MySQL)',
      'Docker & Docker Compose',
      'Nginx web server',
      'PHP-FPM',
      'WP-CLI for automation'
    ],
    observability: [
      'Application Insights',
      'Elasticsearch for logs',
      'Grafana dashboards',
      'UptimeRobot monitoring',
      'Custom alerting via Teams'
    ],
    pipeline: [
      'Git branching strategy',
      'Automated builds on commit',
      'SonarQube code quality scans',
      'Security vulnerability scanning',
      'Automated deployment to dev',
      'Manual approval for prod',
      'Blue-green traffic switch'
    ],
    iacTools: [
      'Terraform (Azure provider)',
      'Modular infrastructure code',
      'Environment parameterization',
      'State management in Azure Storage'
    ],
    cicdTools: [
      'Azure DevOps Pipelines',
      'YAML pipeline definitions',
      'Multi-stage pipelines',
      'Deployment approvals',
      'Pipeline templates'
    ],
    securityTools: [
      'SonarQube for code quality',
      'Trivy for container scanning',
      'Azure Key Vault for secrets',
      'WP security plugins',
      'SSL/TLS certificates'
    ],
    metrics: [
      { label: { en: 'Deployment time reduction', fr: 'Réduction temps déploiement' }, value: '-70%' },
      { label: { en: 'Deployment frequency', fr: 'Fréquence déploiements' }, value: '2-3/week' },
      { label: { en: 'Rollback time', fr: 'Temps de rollback' }, value: '< 5min' },
      { label: { en: 'Deployment success rate', fr: 'Taux succès déploiements' }, value: '98%' }
    ],
    benefits: {
      en: [
        'Rapid and reliable deployments',
        'Zero-downtime updates with blue-green',
        'Consistent environments across stages',
        'Fast incident recovery',
        'Developer productivity increase',
        'Reduced human errors'
      ],
      fr: [
        'Déploiements rapides et fiables',
        'Mises à jour sans interruption (blue-green)',
        'Environnements cohérents entre étapes',
        'Récupération rapide en cas d\'incident',
        'Augmentation productivité développeurs',
        'Réduction des erreurs humaines'
      ]
    },
    technicalValue: {
      en: [
        'Modern CI/CD pipeline architecture',
        'GitOps principles implementation',
        'Infrastructure as Code maturity',
        'DevOps best practices'
      ],
      fr: [
        'Architecture moderne de pipeline CI/CD',
        'Implémentation des principes GitOps',
        'Maturité Infrastructure as Code',
        'Meilleures pratiques DevOps'
      ]
    },
    technicalLearnings: {
      en: [
        'WordPress containerization patterns',
        'Blue-green deployment implementation',
        'Azure DevOps advanced features',
        'Multi-stage pipeline design',
        'Environment management strategies'
      ],
      fr: [
        'Patterns de conteneurisation WordPress',
        'Implémentation déploiement blue-green',
        'Fonctionnalités avancées Azure DevOps',
        'Conception pipeline multi-étapes',
        'Stratégies de gestion d\'environnements'
      ]
    },
    methodologicalLearnings: {
      en: [
        'Continuous Integration/Deployment practices',
        'Automated testing strategies',
        'Release management process',
        'Collaboration between Dev and Ops',
        'Documentation as code'
      ],
      fr: [
        'Pratiques Intégration/Déploiement continu',
        'Stratégies de tests automatisés',
        'Processus de gestion des releases',
        'Collaboration entre Dev et Ops',
        'Documentation as code'
      ]
    }
  },

  'terraform-iac': {
    id: 'terraform-iac',
    title: {
      en: 'Infrastructure as Code with Terraform',
      fr: 'Infrastructure as Code avec Terraform'
    },
    context: {
      en: 'Complete Azure infrastructure automation using Terraform for multi-environment deployments. Manages Container Apps, databases, storage, networking, and security. Eliminates manual Azure Portal operations, ensures consistency, and accelerates deployment cycles.',
      fr: 'Automatisation complète de l\'infrastructure Azure avec Terraform pour déploiements multi-environnements. Gère Container Apps, bases de données, stockage, réseau et sécurité. Élimine les opérations manuelles sur le Portail Azure, garantit la cohérence et accélère les cycles de déploiement.'
    },
    objectives: {
      en: [
        'Automate entire Azure infrastructure provisioning',
        'Enable multi-environment deployments (dev/staging/prod)',
        'Version control infrastructure changes',
        'Reduce provisioning time by 80%',
        'Eliminate manual configuration errors',
        'Enable infrastructure reusability'
      ],
      fr: [
        'Automatiser le provisioning complet de l\'infrastructure Azure',
        'Activer déploiements multi-environnements (dev/staging/prod)',
        'Versionner les changements d\'infrastructure',
        'Réduire temps de provisioning de 80%',
        'Éliminer erreurs de configuration manuelle',
        'Activer réutilisabilité de l\'infrastructure'
      ]
    },
    challenges: {
      en: [
        'Learning Terraform from scratch',
        'State management across teams',
        'Managing secrets securely',
        'Handling Azure provider complexity',
        'Environment-specific configurations',
        'Dependency management between resources'
      ],
      fr: [
        'Apprentissage Terraform from scratch',
        'Gestion du state entre équipes',
        'Gestion sécurisée des secrets',
        'Gestion de la complexité du provider Azure',
        'Configurations spécifiques par environnement',
        'Gestion des dépendances entre ressources'
      ]
    },
    duration: 'Continu',
    startDate: '09/2023',
    endDate: 'En cours',
    team: [
      { role: 'DevOps Engineers', count: '3' },
      { role: 'Cloud Architect', count: '1' },
      { role: 'Security Engineer', count: '1' }
    ],
    infrastructure: [
      'Azure Container Apps',
      'Azure MySQL Flexible Server',
      'Azure Storage Accounts',
      'Azure Virtual Networks',
      'Azure Application Gateway',
      'Azure Key Vault'
    ],
    mainTech: [
      'Terraform (Azure provider)',
      'HCL (HashiCorp Configuration Language)',
      'Azure CLI',
      'Terraform modules',
      'Remote state management'
    ],
    observability: [
      'Terraform plan outputs',
      'Azure Resource Graph queries',
      'Cost management dashboards',
      'Change tracking and audit logs'
    ],
    pipeline: [
      'Terraform init/plan/apply workflow',
      'Automated validation',
      'Manual approval for prod',
      'State locking mechanism',
      'Automated documentation generation'
    ],
    iacTools: [
      'Terraform workspaces',
      'Terraform modules',
      'tfvars for environment configs',
      'Azure Storage for state',
      'Terraform Cloud (planned)'
    ],
    cicdTools: [
      'Azure DevOps integration',
      'Git for version control',
      'Pull request reviews',
      'Automated terraform plan',
      'Deployment gates'
    ],
    securityTools: [
      'Azure Key Vault integration',
      'Service Principal authentication',
      'Azure managed identities',
      'tfsec for security scanning',
      'Sensitive data encryption'
    ],
    metrics: [
      { label: { en: 'Provisioning time reduction', fr: 'Réduction temps provisioning' }, value: '-80%' },
      { label: { en: 'Configuration errors', fr: 'Erreurs de configuration' }, value: '-90%' },
      { label: { en: 'Resources managed', fr: 'Ressources gérées' }, value: '200+' },
      { label: { en: 'Environments', fr: 'Environnements' }, value: '15+' }
    ],
    benefits: {
      en: [
        'Reproducible infrastructure',
        'Version-controlled changes',
        'Rapid environment creation',
        'Consistent configurations',
        'Disaster recovery capability',
        'Cost optimization tracking'
      ],
      fr: [
        'Infrastructure reproductible',
        'Changements versionnés',
        'Création rapide d\'environnements',
        'Configurations cohérentes',
        'Capacité de disaster recovery',
        'Suivi optimisation coûts'
      ]
    },
    technicalValue: {
      en: [
        'IaC maturity and best practices',
        'Declarative infrastructure approach',
        'Module reusability patterns',
        'Multi-cloud capability (extensible)'
      ],
      fr: [
        'Maturité IaC et meilleures pratiques',
        'Approche déclarative de l\'infrastructure',
        'Patterns de réutilisabilité modules',
        'Capacité multi-cloud (extensible)'
      ]
    },
    technicalLearnings: {
      en: [
        'Terraform language and workflow',
        'Azure resource management',
        'State management strategies',
        'Module design patterns',
        'Dependency graph understanding'
      ],
      fr: [
        'Langage et workflow Terraform',
        'Gestion des ressources Azure',
        'Stratégies de gestion du state',
        'Patterns de conception de modules',
        'Compréhension graphe de dépendances'
      ]
    },
    methodologicalLearnings: {
      en: [
        'Infrastructure as Code philosophy',
        'Immutable infrastructure concept',
        'Change management process',
        'Documentation as code practice',
        'Continuous infrastructure improvement'
      ],
      fr: [
        'Philosophie Infrastructure as Code',
        'Concept d\'infrastructure immutable',
        'Processus de gestion du changement',
        'Pratique documentation as code',
        'Amélioration continue infrastructure'
      ]
    }
  },

  'cicd-azure': {
    id: 'cicd-azure',
    title: {
      en: 'CI/CD Pipeline with Azure DevOps',
      fr: 'Pipeline CI/CD avec Azure DevOps'
    },
    context: {
      en: 'Comprehensive CI/CD pipelines using Azure DevOps with YAML configurations for automated builds, security scans with SonarQube, and deployments across multiple environments. Includes migration planning to GitHub Actions for enhanced DevEx.',
      fr: 'Pipelines CI/CD complets utilisant Azure DevOps avec configurations YAML pour builds automatisés, scans de sécurité avec SonarQube, et déploiements multi-environnements. Inclut planification migration vers GitHub Actions pour DevEx améliorée.'
    },
    objectives: {
      en: [
        'Automate build, test, and deployment',
        'Integrate security scanning in pipeline',
        'Enable multi-environment deployments',
        'Reduce deployment time to < 10 minutes',
        'Implement automated rollback',
        'Plan migration to GitHub Actions'
      ],
      fr: [
        'Automatiser build, test et déploiement',
        'Intégrer scanning sécurité dans pipeline',
        'Activer déploiements multi-environnements',
        'Réduire temps déploiement à < 10 minutes',
        'Implémenter rollback automatisé',
        'Planifier migration vers GitHub Actions'
      ]
    },
    challenges: {
      en: [
        'Complex YAML pipeline syntax',
        'Service Connection management',
        'Secret rotation automation',
        'Pipeline performance optimization',
        'Multi-repository dependencies',
        'Migration to GitHub without disruption'
      ],
      fr: [
        'Syntaxe YAML pipeline complexe',
        'Gestion des Service Connections',
        'Automatisation rotation des secrets',
        'Optimisation performance pipeline',
        'Dépendances multi-repositories',
        'Migration vers GitHub sans disruption'
      ]
    },
    duration: 'Continu',
    startDate: '09/2023',
    endDate: 'En cours',
    team: [
      { role: 'DevOps Engineers', count: '3' },
      { role: 'Development Teams', count: '8' },
      { role: 'Security Team', count: '1' }
    ],
    infrastructure: [
      'Azure DevOps Services',
      'Azure Container Registry',
      'Azure Pipelines agents',
      'Self-hosted agents',
      'GitHub (migration planned)'
    ],
    mainTech: [
      'YAML pipelines',
      'PowerShell scripting',
      'Bash scripting',
      'Docker builds',
      'Azure CLI'
    ],
    observability: [
      'Pipeline run analytics',
      'Build time metrics',
      'Deployment success rates',
      'Failure notifications via Teams',
      'Custom dashboards'
    ],
    pipeline: [
      'Multi-stage pipelines (Build/Test/Deploy)',
      'Parallel job execution',
      'Artifact management',
      'Deployment approvals',
      'Environment gates',
      'Template reusability'
    ],
    iacTools: [
      'Terraform deployment stages',
      'Infrastructure validation',
      'State management',
      'Automated terraform apply'
    ],
    cicdTools: [
      'Azure DevOps Pipelines',
      'YAML pipeline templates',
      'Variable groups',
      'Service connections',
      'Pipeline libraries',
      'GitHub Actions (planned)'
    ],
    securityTools: [
      'SonarQube code analysis',
      'Checkmarx SAST scanning',
      'Trivy container scanning',
      'Dependency vulnerability checking',
      'GitHub Advanced Security (planned)'
    ],
    metrics: [
      { label: { en: 'Deployment frequency', fr: 'Fréquence déploiements' }, value: '50+/week' },
      { label: { en: 'Build time', fr: 'Temps de build' }, value: '< 5min' },
      { label: { en: 'Deployment success rate', fr: 'Taux succès déploiements' }, value: '96%' },
      { label: { en: 'MTTR (Mean Time To Recovery)', fr: 'MTTR (Temps moyen récupération)' }, value: '< 15min' }
    ],
    benefits: {
      en: [
        'Fully automated deployment process',
        'Early security issue detection',
        'Faster feedback loops',
        'Reduced manual intervention',
        'Improved code quality',
        'Better collaboration between teams'
      ],
      fr: [
        'Processus déploiement entièrement automatisé',
        'Détection précoce problèmes sécurité',
        'Boucles de feedback plus rapides',
        'Intervention manuelle réduite',
        'Qualité code améliorée',
        'Meilleure collaboration entre équipes'
      ]
    },
    technicalValue: {
      en: [
        'CI/CD pipeline maturity',
        'DevSecOps integration',
        'Pipeline as Code approach',
        'Modern DevOps toolchain'
      ],
      fr: [
        'Maturité pipeline CI/CD',
        'Intégration DevSecOps',
        'Approche Pipeline as Code',
        'Chaîne d\'outils DevOps moderne'
      ]
    },
    technicalLearnings: {
      en: [
        'Azure DevOps advanced features',
        'YAML pipeline design',
        'Security scanning integration',
        'Pipeline optimization techniques',
        'Service Principal management'
      ],
      fr: [
        'Fonctionnalités avancées Azure DevOps',
        'Conception pipeline YAML',
        'Intégration scanning sécurité',
        'Techniques optimisation pipeline',
        'Gestion Service Principal'
      ]
    },
    methodologicalLearnings: {
      en: [
        'Continuous Integration practices',
        'Continuous Deployment strategies',
        'Shift-left security approach',
        'Pipeline maintainability',
        'Change management automation'
      ],
      fr: [
        'Pratiques Intégration Continue',
        'Stratégies Déploiement Continu',
        'Approche shift-left sécurité',
        'Maintenabilité des pipelines',
        'Automatisation gestion changements'
      ]
    }
  },

  'observability-stack': {
    id: 'observability-stack',
    title: {
      en: 'Observability Stack with ELK & Grafana',
      fr: 'Stack d\'Observabilité ELK & Grafana'
    },
    context: {
      en: 'Centralized monitoring and logging infrastructure using Elasticsearch, Grafana, and UptimeRobot for real-time application performance tracking and incident alerting via Microsoft Teams. Migration to Elasticsearch 8 in progress for enhanced features.',
      fr: 'Infrastructure centralisée de monitoring et logging utilisant Elasticsearch, Grafana et UptimeRobot pour suivi temps réel des performances applicatives et alertes incidents via Microsoft Teams. Migration vers Elasticsearch 8 en cours pour fonctionnalités améliorées.'
    },
    objectives: {
      en: [
        'Centralize logs from all applications',
        'Provide real-time monitoring dashboards',
        'Enable rapid troubleshooting',
        'Automate incident alerting',
        'Track application performance metrics',
        'Migrate to Elasticsearch 8'
      ],
      fr: [
        'Centraliser logs de toutes applications',
        'Fournir dashboards monitoring temps réel',
        'Activer troubleshooting rapide',
        'Automatiser alertes incidents',
        'Tracker métriques performance applicatives',
        'Migrer vers Elasticsearch 8'
      ]
    },
    challenges: {
      en: [
        'Log volume management at scale',
        'Elasticsearch cluster optimization',
        'Query performance tuning',
        'Index lifecycle policies',
        'Grafana dashboard design',
        'Alert fatigue prevention'
      ],
      fr: [
        'Gestion volume logs à l\'échelle',
        'Optimisation cluster Elasticsearch',
        'Tuning performance requêtes',
        'Politiques lifecycle des index',
        'Conception dashboards Grafana',
        'Prévention fatigue alertes'
      ]
    },
    duration: 'Continu',
    startDate: '09/2023',
    endDate: 'En cours',
    team: [
      { role: 'DevOps Engineers', count: '2' },
      { role: 'SRE', count: '1' },
      { role: 'Development Teams', count: '8' }
    ],
    infrastructure: [
      'Elasticsearch 7.x (8.x migration)',
      'Kibana for log exploration',
      'Grafana for metrics visualization',
      'UptimeRobot for external monitoring',
      'Azure Container Apps hosting'
    ],
    mainTech: [
      'Elasticsearch query DSL',
      'Logstash/Filebeat for ingestion',
      'Grafana dashboards',
      'PromQL for queries',
      'Microsoft Teams webhooks'
    ],
    observability: [
      'Centralized log aggregation',
      'Custom Grafana dashboards',
      'Performance metrics tracking',
      'Uptime monitoring',
      'Automated alerting via Teams',
      'Historical data analysis'
    ],
    pipeline: [
      'Log collection from containers',
      'Sidecar pattern for log forwarding',
      'Index pattern management',
      'Dashboard as code',
      'Alert rule configuration'
    ],
    iacTools: [
      'Terraform for ELK infrastructure',
      'Dashboard provisioning',
      'Alert rule automation',
      'Index template management'
    ],
    cicdTools: [
      'Automated dashboard deployment',
      'Configuration version control',
      'Testing monitoring queries'
    ],
    securityTools: [
      'Elasticsearch security features',
      'Role-based access control',
      'Audit logging',
      'Encrypted communications'
    ],
    metrics: [
      { label: { en: 'Logs ingested daily', fr: 'Logs ingérés quotidiennement' }, value: '50M+' },
      { label: { en: 'MTTD (Mean Time To Detect)', fr: 'MTTD (Temps moyen détection)' }, value: '< 2min' },
      { label: { en: 'Dashboard users', fr: 'Utilisateurs dashboards' }, value: '25+' },
      { label: { en: 'Uptime monitoring sites', fr: 'Sites monitorés uptime' }, value: '30+' }
    ],
    benefits: {
      en: [
        'Centralized visibility across all apps',
        'Faster incident detection and resolution',
        'Proactive monitoring and alerting',
        'Historical trend analysis',
        'Improved collaboration during incidents',
        'Data-driven decision making'
      ],
      fr: [
        'Visibilité centralisée toutes apps',
        'Détection et résolution incidents plus rapides',
        'Monitoring et alertes proactifs',
        'Analyse tendances historiques',
        'Collaboration améliorée pendant incidents',
        'Décisions basées sur données'
      ]
    },
    technicalValue: {
      en: [
        'Complete observability stack',
        'Scalable log management',
        'Custom visualization capabilities',
        'Integration with communication tools'
      ],
      fr: [
        'Stack observabilité complète',
        'Gestion logs scalable',
        'Capacités visualisation custom',
        'Intégration outils communication'
      ]
    },
    technicalLearnings: {
      en: [
        'Elasticsearch architecture and operations',
        'Kibana advanced features',
        'Grafana dashboard design',
        'Log aggregation patterns',
        'Alert rule optimization'
      ],
      fr: [
        'Architecture et opérations Elasticsearch',
        'Fonctionnalités avancées Kibana',
        'Conception dashboards Grafana',
        'Patterns agrégation logs',
        'Optimisation règles alertes'
      ]
    },
    methodologicalLearnings: {
      en: [
        'SRE principles and practices',
        'Observability vs monitoring distinction',
        'Incident management process',
        'On-call rotation best practices',
        'Post-mortem culture'
      ],
      fr: [
        'Principes et pratiques SRE',
        'Distinction observabilité vs monitoring',
        'Processus gestion incidents',
        'Meilleures pratiques rotation astreintes',
        'Culture post-mortem'
      ]
    }
  }
};
