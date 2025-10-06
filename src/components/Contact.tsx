import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.subtitle}
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:hachim.assoumani@hotmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.email}</h3>
                  <p className="text-sm text-muted-foreground">hachim.assoumani@hotmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/hachim-DevOps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <Github className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.github}</h3>
                  <p className="text-sm text-muted-foreground">@hachim-DevOps</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/hachim-assoumani-957168293/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t.linkedin}</h3>
                  <p className="text-sm text-muted-foreground">hachim ASSOUMANI</p>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="shadow-glow">
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
