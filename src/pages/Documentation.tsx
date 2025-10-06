import { useParams, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, Code2, Server, Eye, GitBranch, Shield, TrendingUp, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projectsData";

const Documentation = () => {
  const { projectId } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const doc = t.documentation;
  const location = useLocation();

  const project = projectsData[projectId || 'wordpress-monitoring'];
  
  const projectData = {
    title: project.title[language],
    context: project.context[language],
    objectives: project.objectives[language],
    challenges: project.challenges[language],
    duration: project.duration,
    startDate: project.startDate,
    endDate: project.endDate,
    team: project.team,
    infrastructure: project.infrastructure,
    kubernetes: project.mainTech,
    observability: project.observability,
    pipeline: project.pipeline,
    iacTools: project.iacTools,
    cicdTools: project.cicdTools,
    securityTools: project.securityTools,
    metrics: project.metrics.map(m => ({ label: m.label[language], value: m.value })),
    benefits: project.benefits[language],
    technicalValue: project.technicalValue[language],
    technicalLearnings: project.technicalLearnings[language],
    methodologicalLearnings: project.methodologicalLearnings[language]
  };

  const oldProjectData = {
    title: language === 'fr' ? 'Gestion Multi-Cluster Kubernetes' : 'Kubernetes Multi-Cluster Management',
    context: language === 'fr' 
      ? 'Mise en place d\'une infrastructure cloud-native complète pour gérer plusieurs clusters Kubernetes distribués géographiquement.'
      : 'Implementation of a complete cloud-native infrastructure to manage multiple geographically distributed Kubernetes clusters.',
    objectives: [
      language === 'fr' ? 'Automatiser le déploiement multi-cluster' : 'Automate multi-cluster deployment',
      language === 'fr' ? 'Assurer la haute disponibilité' : 'Ensure high availability',
      language === 'fr' ? 'Optimiser les coûts d\'infrastructure' : 'Optimize infrastructure costs',
      language === 'fr' ? 'Implémenter une stratégie GitOps' : 'Implement GitOps strategy'
    ],
    challenges: [
      language === 'fr' ? 'Synchronisation entre clusters distants' : 'Synchronization between remote clusters',
      language === 'fr' ? 'Gestion des secrets multi-environnements' : 'Multi-environment secrets management',
      language === 'fr' ? 'Mise en place de la surveillance centralisée' : 'Centralized monitoring setup',
      language === 'fr' ? 'Conformité et sécurité' : 'Compliance and security'
    ],
    duration: '6 mois',
    startDate: '01/2024',
    endDate: '06/2024',
    team: [
      { role: 'DevOps Lead', count: '1' },
      { role: 'Cloud Architects', count: '2' },
      { role: 'Security Engineer', count: '1' }
    ],
    infrastructure: [
      'Azure Kubernetes Service (AKS)',
      'Terraform for IaC',
      'Azure Virtual Networks',
      'Load Balancers & Ingress Controllers'
    ],
    kubernetes: [
      'Multi-cluster setup with ArgoCD',
      'Helm charts for package management',
      'Custom operators for automation',
      'Network policies and service mesh'
    ],
    observability: [
      'Prometheus & Grafana stack',
      'ELK Stack for log aggregation',
      'Distributed tracing with Jaeger',
      'Custom alerting rules'
    ],
    pipeline: [
      'GitLab CI/CD pipelines',
      'Automated testing & security scans',
      'Blue-green deployments',
      'Automated rollback mechanisms'
    ],
    iacTools: [
      'Terraform (Azure provider)',
      'Azure Resource Manager',
      'Ansible for configuration',
      'Packer for image building'
    ],
    cicdTools: [
      'GitLab CI/CD',
      'ArgoCD for GitOps',
      'FluxCD for synchronization',
      'Sealed Secrets for encryption'
    ],
    securityTools: [
      'Trivy for vulnerability scanning',
      'Falco for runtime security',
      'OPA for policy enforcement',
      'Azure Key Vault integration'
    ],
    metrics: [
      { label: language === 'fr' ? 'Réduction du temps de déploiement' : 'Deployment time reduction', value: '-70%' },
      { label: language === 'fr' ? 'Disponibilité du système' : 'System availability', value: '99.9%' },
      { label: language === 'fr' ? 'Économies d\'infrastructure' : 'Infrastructure savings', value: '-35%' }
    ],
    benefits: [
      language === 'fr' ? 'Déploiements automatisés et fiables' : 'Automated and reliable deployments',
      language === 'fr' ? 'Récupération rapide en cas d\'incident' : 'Fast incident recovery',
      language === 'fr' ? 'Observabilité complète de l\'infrastructure' : 'Complete infrastructure observability'
    ],
    technicalValue: [
      language === 'fr' ? 'Architecture cloud-native scalable' : 'Scalable cloud-native architecture',
      language === 'fr' ? 'Pratiques GitOps standardisées' : 'Standardized GitOps practices',
      language === 'fr' ? 'Sécurité intégrée dès la conception' : 'Security built-in from design'
    ],
    technicalLearnings: [
      language === 'fr' ? 'Maîtrise des architectures multi-cluster' : 'Multi-cluster architecture mastery',
      language === 'fr' ? 'Patterns de déploiement avancés' : 'Advanced deployment patterns',
      language === 'fr' ? 'Optimisation des performances Kubernetes' : 'Kubernetes performance optimization'
    ],
    methodologicalLearnings: [
      language === 'fr' ? 'Approche Infrastructure as Code' : 'Infrastructure as Code approach',
      language === 'fr' ? 'Collaboration DevOps efficace' : 'Effective DevOps collaboration',
      language === 'fr' ? 'Gestion des incidents en production' : 'Production incident management'
    ]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {doc.returnToPortfolio}
              </Button>
            </Link>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('overview')}>
                {doc.overview}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('architecture')}>
                {doc.architecture}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('technologies')}>
                {doc.technologies}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('results')}>
                {doc.results}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Project Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {projectData.title}
            </span>
          </h1>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{doc.overview}</h2>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">{doc.context}</h3>
              <p className="text-muted-foreground leading-relaxed">{projectData.context}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{doc.objectives}</h3>
                <ul className="space-y-2">
                  {projectData.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-muted-foreground">{obj}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{doc.technicalChallenges}</h3>
                <ul className="space-y-2">
                  {projectData.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Timeline & Team */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{doc.timeline}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{doc.duration}:</span>
                      <span className="font-semibold text-foreground">{projectData.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{doc.startDate}:</span>
                      <span className="font-semibold text-foreground">{projectData.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{doc.endDate}:</span>
                      <span className="font-semibold text-foreground">{projectData.endDate}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">{doc.teamRoles}</span>
                  </div>
                  <ul className="space-y-2">
                    {projectData.team.map((member, idx) => (
                      <li key={idx} className="flex justify-between text-muted-foreground">
                        <span>{member.role}</span>
                        <Badge variant="secondary">{member.count}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <Server className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{doc.architecture}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Server className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{doc.infrastructure}</h3>
                </div>
                <ul className="space-y-2">
                  {projectData.infrastructure.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{doc.kubernetesOrchestration}</h3>
                </div>
                <ul className="space-y-2">
                  {projectData.kubernetes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{doc.observability}</h3>
                </div>
                <ul className="space-y-2">
                  {projectData.observability.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{doc.devopsPipeline}</h3>
                </div>
                <ul className="space-y-2">
                  {projectData.pipeline.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{doc.technologies}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">{doc.iac}</h3>
                <ul className="space-y-2">
                  {projectData.iacTools.map((tool, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span className="text-muted-foreground text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">{doc.cicdGitOps}</h3>
                <ul className="space-y-2">
                  {projectData.cicdTools.map((tool, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span className="text-muted-foreground text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">{doc.securityTools}</h3>
                <ul className="space-y-2">
                  {projectData.securityTools.map((tool, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span className="text-muted-foreground text-sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results & Impact Section */}
        <section id="results" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{doc.resultsImpact}</h2>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">{doc.metrics}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {projectData.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{doc.benefits}</h3>
                <ul className="space-y-2">
                  {projectData.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{doc.technicalValue}</h3>
                <ul className="space-y-2">
                  {projectData.technicalValue.map((value, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{doc.keyLearnings}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{doc.technicalLearnings}</h3>
                <ul className="space-y-2">
                  {projectData.technicalLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">{doc.methodologicalLearnings}</h3>
                <ul className="space-y-2">
                  {projectData.methodologicalLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span className="text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-wrap justify-between gap-4">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {doc.previousProject}
              </Button>
            </Link>
            <Link to="/#contact">
              <Button variant="default">
                {doc.contact}
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline">
                {doc.nextProject}
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
