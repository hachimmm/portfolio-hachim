import { Card, CardContent } from "@/components/ui/card";
import { Server, Cloud, Container, GitBranch, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skills = [
    {
      icon: Cloud,
      title: t.cloudIac,
      items: ["AWS", "Azure", "Terraform", "Ansible"],
    },
    {
      icon: Container,
      title: t.containerization,
      items: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
    },
    {
      icon: GitBranch,
      title: t.cicd,
      items: ["GitLab CI", "GitHub Actions", "ArgoCD"],
    },
    {
      icon: Server,
      title: t.monitoring,
      items: ["Prometheus", "Grafana", "ELK Stack"],
    },
    {
      icon: Shield,
      title: t.security,
      items: ["Vault", "SonarQube", "Trivy", "OWASP"],
    },
    {
      icon: Users,
      title: t.softSkills,
      items: ["Méthodes Agiles", "CALMS", "SAFe"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dark">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
