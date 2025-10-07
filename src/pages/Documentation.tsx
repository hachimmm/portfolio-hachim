import { useParams, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Target, Code2, Server, Eye, GitBranch, Shield, TrendingUp, Lightbulb, Expand } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projectsData";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Documentation = () => {
  const { projectId } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const doc = t.documentation;
  const location = useLocation();
  const [openImageDialog, setOpenImageDialog] = useState(false);

  const project = projectsData[projectId || 'wordpress-monitoring'];
  
  // Mapping des images d'architecture par projet
  const architectureImages: Record<string, string> = {
    'wordpress-monitoring': `${import.meta.env.BASE_URL}archi_doc_surveillance_wp.png`,
    'azure-migration': `${import.meta.env.BASE_URL}archi_doc_migration.png`,
    'wordpress-pipeline': `${import.meta.env.BASE_URL}archi_doc_aws.png`
  };
  
  const currentArchImage = architectureImages[projectId || 'wordpress-monitoring'];
  
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
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-background via-card/95 to-background backdrop-blur-md border-b border-border/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/">
              <Button variant="ghost" className="gap-2 hover:gap-3 transition-all duration-300 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">{doc.returnToPortfolio}</span>
              </Button>
            </Link>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => scrollToSection('overview')}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                {doc.overview}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => scrollToSection('architecture')}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                {doc.architecture}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => scrollToSection('results')}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                {doc.results}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Project Title */}
        <div className="mb-16 relative animate-fade-in">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent rounded-full"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
              {projectData.title}
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-20 scroll-mt-24 animate-fade-in">
          <div className="flex items-center gap-3 mb-8 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{doc.overview}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
          </div>

          <Card className="mb-6 border-l-4 border-l-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                {doc.context}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{projectData.context}</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-t-2 border-t-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary text-sm">🎯</span>
                  </div>
                  {doc.objectives}
                </h3>
                <ul className="space-y-3">
                  {projectData.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-primary mt-1 text-lg">▸</span>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{obj}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-t-2 border-t-accent/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-accent text-sm">⚡</span>
                  </div>
                  {doc.technicalChallenges}
                </h3>
                <ul className="space-y-3">
                  {projectData.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 text-lg">▸</span>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Timeline & Team */}
          <Card className="relative overflow-hidden hover:shadow-glow transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{doc.timeline}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <span className="text-muted-foreground font-medium">{doc.duration}:</span>
                    <Badge variant="secondary" className="text-base px-4 py-1">{projectData.duration}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <span className="text-muted-foreground font-medium">{doc.startDate}:</span>
                    <Badge variant="secondary" className="text-base px-4 py-1">{projectData.startDate}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <span className="text-muted-foreground font-medium">{doc.endDate}:</span>
                    <Badge variant="secondary" className="text-base px-4 py-1">{projectData.endDate}</Badge>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-semibold text-foreground text-lg">{doc.teamRoles}</span>
                  </div>
                  <ul className="space-y-3">
                    {projectData.team.map((member, idx) => (
                      <li key={idx} className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-muted hover:translate-x-1 transition-all group">
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{member.role}</span>
                        <Badge variant="secondary" className="group-hover:scale-110 transition-transform">{member.count}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="mb-20 scroll-mt-24 animate-fade-in">
          <div className="flex items-center gap-3 mb-8 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors group-hover:rotate-3 transition-transform">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{doc.architecture}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
          </div>

          {/* Architecture Diagram */}
          {currentArchImage && (
            <Card className="mb-6 overflow-hidden group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-0">
                <Dialog open={openImageDialog} onOpenChange={setOpenImageDialog}>
                  <DialogTrigger asChild>
                    <div className="relative cursor-pointer">
                      <img 
                        src={currentArchImage} 
                        alt={`${projectData.title} - Architecture`}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 rounded-full p-4">
                          <Expand className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {language === 'fr' ? 'Cliquer pour agrandir' : 'Click to enlarge'}
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-2">
                    <img 
                      src={currentArchImage} 
                      alt={`${projectData.title} - Architecture`}
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-6 relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{doc.infrastructure}</h3>
                </div>
                <ul className="space-y-3">
                  {projectData.infrastructure.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-6 relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{doc.kubernetesOrchestration}</h3>
                </div>
                <ul className="space-y-3">
                  {projectData.kubernetes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 text-lg">•</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-6 relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{doc.observability}</h3>
                </div>
                <ul className="space-y-3">
                  {projectData.observability.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-primary mt-1 text-lg">•</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-6 relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                    <GitBranch className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{doc.devopsPipeline}</h3>
                </div>
                <ul className="space-y-3">
                  {projectData.pipeline.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 text-lg">•</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Results & Impact Section */}
        <section id="results" className="mb-20 scroll-mt-24 animate-fade-in">
          <div className="flex items-center gap-3 mb-8 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors group-hover:rotate-12 transition-transform">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{doc.resultsImpact}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
          </div>

          <Card className="mb-6 relative overflow-hidden hover:shadow-glow transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardContent className="pt-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                {doc.metrics}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {projectData.metrics.map((metric, idx) => (
                  <div 
                    key={idx} 
                    className="text-center p-6 rounded-lg bg-gradient-to-br from-muted/50 to-muted/20 hover:from-muted to-muted/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary">✓</span>
                  </div>
                  {doc.benefits}
                </h3>
                <ul className="space-y-3">
                  {projectData.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-primary mt-1 text-xl">✓</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-accent/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-accent">✓</span>
                  </div>
                  {doc.technicalValue}
                </h3>
                <ul className="space-y-3">
                  {projectData.technicalValue.map((value, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 text-xl">✓</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-20 animate-fade-in">
          <div className="flex items-center gap-3 mb-8 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Lightbulb className="w-6 h-6 text-primary group-hover:animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{doc.keyLearnings}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-6 relative">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary">💡</span>
                  </div>
                  {doc.technicalLearnings}
                </h3>
                <ul className="space-y-3">
                  {projectData.technicalLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-primary mt-1 text-lg">→</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-6 relative">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-accent">📚</span>
                  </div>
                  {doc.methodologicalLearnings}
                </h3>
                <ul className="space-y-3">
                  {projectData.methodologicalLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-accent mt-1 text-lg">→</span>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="border-t border-border/50 pt-8 mt-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <Link to="/">
              <Button variant="outline" className="group hover:shadow-lg transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">{doc.previousProject}</span>
              </Button>
            </Link>
            <Link to="/#contact">
              <Button className="group hover:shadow-glow transition-all duration-300 hover:scale-105">
                <span className="font-medium">{doc.contact}</span>
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="group hover:shadow-lg transition-all duration-300">
                <span className="font-medium">{doc.nextProject}</span>
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
