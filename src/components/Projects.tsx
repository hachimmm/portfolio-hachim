import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
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
      tags: ["WordPress", "WP-CLI", "Bash", "Cron", "Docker", "Microsoft Teams"],
      github: "#",
      live: "#",
    },
    {
      id: "azure-migration",
      title: t.project2.title,
      description: t.project2.description,
      tags: ["Azure Container Apps", "Docker", "Azure Web Apps", "Migration", "FinOps"],
      github: "#",
      live: "#",
    },
    {
      id: "wordpress-pipeline",
      title: t.project3.title,
      description: t.project3.description,
      tags: ["WordPress", "Azure DevOps", "Docker", "Terraform", "CI/CD"],
      github: "#",
      live: "#",
    },
    {
      id: "terraform-iac",
      title: t.project4.title,
      description: t.project4.description,
      tags: ["Terraform", "Azure", "IaC", "Container Apps", "Automation"],
      github: "#",
      live: "#",
    },
    {
      id: "cicd-azure",
      title: t.project5.title,
      description: t.project5.description,
      tags: ["Azure DevOps", "YAML", "SonarQube", "Docker", "GitHub"],
      github: "#",
      live: "#",
    },
    {
      id: "observability-stack",
      title: t.project6.title,
      description: t.project6.description,
      tags: ["Elasticsearch", "Grafana", "UptimeRobot", "Kibana", "Monitoring"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 flex flex-col animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <CardHeader>
                <CardTitle className="text-foreground text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-6 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 flex-1 hover:border-primary/50 transition-all duration-300"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    {t.code}
                  </Button>
                  <Link to={`/documentation/${project.id}`} className="flex-1">
                    <Button 
                      size="sm" 
                      className="gap-2 w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300"
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
