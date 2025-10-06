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
      id: "project-1",
      title: t.project1.title,
      description: t.project1.description,
      tags: ["Kubernetes", "ArgoCD", "Terraform", "AWS"],
      github: "#",
      live: "#",
    },
    {
      id: "project-2",
      title: t.project2.title,
      description: t.project2.description,
      tags: ["GitLab CI", "Jenkins", "Docker", "Ansible"],
      github: "#",
      live: "#",
    },
    {
      id: "project-3",
      title: t.project3.title,
      description: t.project3.description,
      tags: ["Prometheus", "Grafana", "Node Exporter", "AlertManager"],
      github: "#",
      live: "#",
    },
    {
      id: "project-4",
      title: t.project4.title,
      description: t.project4.description,
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
      github: "#",
      live: "#",
    },
    {
      id: "project-5",
      title: t.project5.title,
      description: t.project5.description,
      tags: ["Trivy", "SonarQube", "OWASP", "Vault"],
      github: "#",
      live: "#",
    },
    {
      id: "project-6",
      title: t.project6.title,
      description: t.project6.description,
      tags: ["Elasticsearch", "Logstash", "Kibana", "Filebeat"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 flex-1">
                    <Github className="w-4 h-4" />
                    {t.code}
                  </Button>
                  <Link to={`/documentation/${project.id}`} className="flex-1">
                    <Button size="sm" className="gap-2 w-full">
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
