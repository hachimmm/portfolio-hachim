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
      { role: 'DevOps Engineer', count: '1' }
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
      'Automated migration scripts',
      'Gradual rollout per application',
      'Automated rollback capability'
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
      en: 'Cloud Native DevOps Platform',
      fr: 'Plateforme DevOps Cloud Native'
    },
    context: {
      en: 'Complete cloud-native DevOps architecture evolving through 8 phases from a monolith to a containerized solution with EKS, GitOps CI/CD pipeline, ELK Stack monitoring and automated multi-environment management. Academic M2 project for student records management application.',
      fr: 'Architecture DevOps cloud native complète évoluant en 8 phases d\'un monolithe vers une solution containerisée avec EKS, pipeline CI/CD GitOps, monitoring ELK Stack et gestion multi-environnements automatisée. Projet académique M2 pour application de gestion des dossiers étudiants.'
    },
    objectives: {
      en: [
        'Migrate from monolithic to cloud native architecture',
        'Implement complete CI/CD pipeline with GitOps',
        'Deploy multi-environment infrastructure with Terraform',
        'Set up centralized monitoring with ELK Stack',
        'Ensure scalability and high availability'
      ],
      fr: [
        'Migrer d\'une architecture monolithique vers une solution cloud native',
        'Implémenter une pipeline CI/CD complète avec GitOps',
        'Déployer une infrastructure multi-environnements avec Terraform',
        'Mettre en place un monitoring centralisé avec la stack ELK',
        'Assurer la scalabilité et la haute disponibilité'
      ]
    },
    challenges: {
      en: [
        'Progressive migration without service interruption',
        'Multi-environment secrets management with AWS Secrets Manager',
        'Deployment orchestration with ArgoCD and GitLab CI',
        'Distributed monitoring configuration with ELK Stack',
        'Load and security testing automation'
      ],
      fr: [
        'Migration progressive sans interruption de service',
        'Gestion des secrets multi-environnements avec AWS Secrets Manager',
        'Orchestration des déploiements avec ArgoCD et GitLab CI',
        'Configuration du monitoring distribué avec ELK Stack',
        'Automatisation des tests de charge et de sécurité'
      ]
    },
    duration: '4 mois',
    startDate: '09/2023',
    endDate: '01/2024',
    team: [
      { role: 'DevOps Engineer', count: '1' }
    ],
    infrastructure: [
      'Amazon EKS (multi-AZ worker nodes)',
      'Amazon RDS MySQL (Multi-AZ in production)',
      'Dedicated VPC per environment (public/private subnets)',
      'Application Load Balancer with health checks',
      'Amazon ECR for Docker images',
      'AWS Secrets Manager per environment',
      'Dedicated EC2 instance for ELK Stack'
    ],
    mainTech: [
      'Docker & Kubernetes',
      'ArgoCD for GitOps',
      'GitLab CI/CD',
      'Helm charts',
      'Auto Scaling',
      'Node.js & Express.js (REST API)',
      'Terraform for Infrastructure as Code'
    ],
    observability: [
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
      'Filebeat for log forwarding',
      'Automated load testing (1000 concurrent requests)',
      'Real-time monitoring dashboards'
    ],
    pipeline: [
      '8-phase progressive evolution',
      'GitLab CI/CD with automated testing',
      'Automated deployments to dev',
      'Manual approvals for production',
      'GitOps with ArgoCD synchronization',
      'Automated security testing'
    ],
    metrics: [
      { label: { en: 'Load test requests', fr: 'Requêtes test de charge' }, value: '1000+' },
      { label: { en: 'Managed environments', fr: 'Environnements gérés' }, value: '3' },
      { label: { en: 'Evolution phases', fr: 'Phases d\'évolution' }, value: '8' },
      { label: { en: 'Target availability', fr: 'Disponibilité cible' }, value: '99.9%' }
    ],
    benefits: {
      en: [
        'Complete deployment automation with validation in dev',
        'Native Kubernetes auto-scaling replacing EC2 groups',
        'Centralized observability with real-time ELK monitoring',
        'Reproducible infrastructure with Terraform multi-environment',
        'Enhanced security with centralized secrets management'
      ],
      fr: [
        'Automatisation complète avec validation en dev',
        'Auto-scaling Kubernetes natif remplaçant les groupes EC2',
        'Observabilité centralisée avec monitoring temps réel ELK',
        'Infrastructure reproductible avec Terraform multi-environnements',
        'Sécurité renforcée avec gestion centralisée des secrets'
      ]
    },
    technicalValue: {
      en: [
        'Cloud-native architecture patterns',
        'GitOps deployment methodology',
        'Infrastructure as Code maturity',
        'Kubernetes orchestration in production'
      ],
      fr: [
        'Patterns d\'architecture cloud-native',
        'Méthodologie de déploiement GitOps',
        'Maturité Infrastructure as Code',
        'Orchestration Kubernetes en production'
      ]
    },
    technicalLearnings: {
      en: [
        'Amazon EKS Kubernetes orchestration in production',
        'GitOps pattern implementation with ArgoCD',
        'Multi-environment Infrastructure as Code with Terraform',
        'Advanced CI/CD pipeline configuration with automated testing',
        'Complete monitoring stack setup (ELK)',
        'AWS services integration for cloud native architecture'
      ],
      fr: [
        'Maîtrise de l\'orchestration Kubernetes en production avec Amazon EKS',
        'Implémentation du pattern GitOps avec ArgoCD pour le déploiement continu',
        'Gestion de l\'Infrastructure as Code multi-environnements avec Terraform',
        'Configuration avancée de pipelines CI/CD avec tests automatisés',
        'Mise en place d\'une stack de monitoring complète (ELK)',
        'Intégration des services AWS pour une architecture cloud native'
      ]
    },
    methodologicalLearnings: {
      en: [
        'Progressive phase-by-phase evolution approach',
        'Academic project management',
        'Architecture migration without interruption',
        'Testing and validation at each phase',
        'Infrastructure automation best practices'
      ],
      fr: [
        'Approche par phases d\'évolution progressive',
        'Gestion de projet académique',
        'Migration d\'architecture sans interruption',
        'Tests et validation à chaque phase',
        'Meilleures pratiques d\'automatisation d\'infrastructure'
      ]
    }
  },

  'terraform-iac': {
    id: 'terraform-iac',
    title: {
      en: 'Mamba CLI - Authentication Interface',
      fr: 'Mamba CLI - Interface d\'Authentification'
    },
    context: {
      en: 'Command-line interface developed in Go for integrating modern authentication solutions with PocketBase. Complete user management, permissions, and JWT tokens with robust and secure architecture.',
      fr: 'Interface en ligne de commande développée en Go pour l\'intégration de solutions d\'authentification modernes avec PocketBase. Gestion complète des utilisateurs, permissions et tokens JWT avec une architecture robuste et sécurisée.'
    },
    objectives: {
      en: [
        'Create users and administrators with role management',
        'Secure authentication system with JWT tokens',
        'Granular permission management (CRUD, consultation, search)',
        'Intuitive CLI interface with Cobra framework',
        'Scalable architecture with Docker containerization',
        'REST API integration with PocketBase as backend'
      ],
      fr: [
        'Création d\'utilisateurs et d\'administrateurs avec gestion des rôles',
        'Système d\'authentification sécurisé avec tokens JWT',
        'Gestion granulaire des permissions (CRUD, consultation, recherche)',
        'Interface CLI intuitive avec framework Cobra',
        'Architecture scalable avec containerisation Docker',
        'Intégration API REST avec PocketBase comme backend'
      ]
    },
    challenges: {
      en: [
        'Secure token management: JWT storage and rotation system implementation',
        'Permission architecture: Flexible role model design (super_user, user)',
        'Validation and security: Error handling and user input validation',
        'CLI user interface: Creating fluid user experience with Cobra',
        'Complete containerization: Multi-service deployment with Docker Compose'
      ],
      fr: [
        'Gestion sécurisée des tokens : Implémentation d\'un système de stockage et rotation des JWT',
        'Architecture de permissions : Conception d\'un modèle de rôles flexible (super_user, user)',
        'Validation et sécurité : Gestion des erreurs et validation des entrées utilisateur',
        'Interface utilisateur CLI : Création d\'une expérience utilisateur fluide avec Cobra',
        'Containerisation complète : Déploiement multi-services avec Docker Compose'
      ]
    },
    duration: '3 semaines',
    startDate: '09/2024',
    endDate: '10/2024',
    team: [
      { role: 'Principal Developer', count: '1' },
      { role: 'Academic Project', count: 'M1 DevOps' }
    ],
    infrastructure: [
      'Docker multi-service containerization',
      'mamba-cli main container with Go executable',
      'PocketBase authentication service and database',
      'Persistent volumes for user data storage',
      'Internal network for secure communication'
    ],
    mainTech: [
      'Golang for performance and simplicity',
      'Cobra CLI framework for optimal user interface',
      'PocketBase as Backend-as-a-Service',
      'SQLite embedded database via PocketBase',
      'Docker Compose for multi-service orchestration'
    ],
    observability: [
      'CLI command logging',
      'API request tracking',
      'Authentication event monitoring',
      'Container logs via Docker'
    ],
    pipeline: [
      'Docker multi-stage builds',
      'Automated testing with dockerized environment',
      'Auto-generated CLI documentation',
      'Alpine Linux lightweight images'
    ],
    metrics: [
      { label: { en: 'CLI commands implemented', fr: 'Commandes CLI implémentées' }, value: '25+' },
      { label: { en: 'Granular permissions', fr: 'Permissions granulaires' }, value: '5' },
      { label: { en: 'User roles', fr: 'Rôles utilisateur' }, value: '2' }
    ],
    benefits: {
      en: [
        'Automation of authentication processes',
        'Enhanced security with JWT, password hashing, and granular access control',
        'Scalability through containerized architecture',
        'Developer experience with complete documentation and auto-generated CLI',
        'Complete CRUD: Admin and user management with roles',
        'Secure password reset system via email with temporary tokens'
      ],
      fr: [
        'Automatisation des processus d\'authentification',
        'Sécurité renforcée avec JWT, hachage des mots de passe et contrôle d\'accès granulaire',
        'Scalabilité grâce à l\'architecture containerisée',
        'Expérience développeur avec documentation complète et CLI auto-générée',
        'CRUD complet : Gestion des administrateurs et utilisateurs avec rôles',
        'Système de réinitialisation de mot de passe sécurisé par email avec tokens temporaires'
      ]
    },
    technicalValue: {
      en: [
        'Modern CLI development patterns',
        'Secure authentication architecture',
        'Containerized microservices approach',
        'API-first design principles'
      ],
      fr: [
        'Patterns de développement CLI modernes',
        'Architecture d\'authentification sécurisée',
        'Approche microservices containerisée',
        'Principes de conception API-first'
      ]
    },
    technicalLearnings: {
      en: [
        'Mastery of Go ecosystem and advanced Cobra usage for professional CLIs',
        'Security architecture: Deep understanding of JWT, RBAC, and authentication best practices',
        'Integration testing with dockerized environment for complete workflow validation',
        'Technical documentation: Importance of user and technical docs for CLI tool adoption',
        'Layered architecture: Clear separation of concerns for maintainability and testability'
      ],
      fr: [
        'Maîtrise de l\'écosystème Go et utilisation avancée de Cobra pour des CLI professionnelles',
        'Architecture de sécurité : Compréhension approfondie des mécanismes JWT, RBAC et bonnes pratiques',
        'Integration testing : Tests d\'intégration avec environnement dockerisé pour validation complète',
        'Documentation technique : Importance de la documentation utilisateur et technique pour l\'adoption',
        'Architecture en couches : Séparation claire des responsabilités pour maintenabilité et testabilité'
      ]
    },
    methodologicalLearnings: {
      en: [
        'Academic project management within M1 DevOps curriculum',
        'Individual project execution and self-organization',
        'CLI/UX design principles for developer tools',
        'Iterative development with continuous testing',
        'Security-first development approach'
      ],
      fr: [
        'Gestion de projet académique dans le cursus M1 DevOps',
        'Exécution de projet individuel et auto-organisation',
        'Principes de design CLI/UX pour outils développeur',
        'Développement itératif avec tests continus',
        'Approche de développement security-first'
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
