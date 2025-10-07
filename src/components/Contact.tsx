import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              Contact
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            <span className="text-gradient">
              {t.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.subtitle}
          </p>
        </div>

        <Card className="card-glass animate-fade-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:hachim.assoumani@hotmail.com"
                className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow shadow-lg">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t.email}</h3>
                  <p className="text-sm text-muted-foreground">hachim.assoumani@hotmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/hachim-DevOps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow shadow-lg">
                  <Github className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t.github}</h3>
                  <p className="text-sm text-muted-foreground">@hachim-DevOps</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/hachim-assoumani-957168293/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-pulse-glow shadow-lg">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t.linkedin}</h3>
                  <p className="text-sm text-muted-foreground">hachim ASSOUMANI</p>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 glow-effect hover-lift font-medium px-8">
                {t.downloadResume}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
