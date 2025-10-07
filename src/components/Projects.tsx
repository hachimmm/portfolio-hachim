import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const projects = [
    {
      id: "wordpress-monitoring",
      title: t.project1.title,
      description: t.project1.description,
      tags: ["WordPress", "WP-CLI", "Bash", "Docker", "Cron", "Microsoft Teams"],
      github: "#",
      live: "#",
    },
    {
      id: "azure-migration",
      title: t.project2.title,
      description: t.project2.description,
      tags: ["Azure Container Apps", "Docker", "Sidecar Pattern", "Filebeat", "Nginx"],
      github: "#",
      live: "#",
    },
    {
      id: "wordpress-pipeline",
      title: t.project3.title,
      description: t.project3.description,
      tags: ["Kubernetes", "EKS", "ArgoCD", "GitLab CI/CD", "Terraform", "Docker"],
      github: "#",
      live: "#",
    },
    {
      id: "terraform-iac",
      title: t.project4.title,
      description: t.project4.description,
      tags: ["Golang", "Cobra", "PocketBase", "JWT", "Docker"],
      github: "#",
      live: "#",
    },
    {
      id: "cicd-azure",
      title: t.project5.title,
      description: t.project5.description,
      tags: ["Azure DevOps", "YAML", "SonarQube", "Docker", "GitHub Actions"],
      github: "#",
      live: "#",
    },
    {
      id: "observability-stack",
      title: t.project6.title,
      description: t.project6.description,
      tags: ["Elasticsearch", "Grafana", "Kibana", "Filebeat", "UptimeRobot"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            <span className="text-gradient">
              {t.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group card-glass hover:border-primary/50 transition-all duration-500 hover-lift flex flex-col overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-foreground text-xl font-bold font-heading group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6 pt-2 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 border border-primary/10 hover:border-primary/30 transition-all duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center pt-4 border-t border-border/30">
                  <Link to={`/documentation/${project.id}`}>
                    <Button 
                      size="sm" 
                      className="gap-2 bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.demo}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
