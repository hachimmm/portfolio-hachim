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
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              {t.subtitle}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            <span className="text-gradient">
              {t.title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.title}
                className="group card-glass hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                
                <CardContent className="p-6 space-y-5 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow shadow-lg">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm bg-secondary/50 backdrop-blur-sm rounded-full text-secondary-foreground border border-primary/10 hover:border-primary/30 hover:bg-secondary/70 transition-all duration-200"
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
