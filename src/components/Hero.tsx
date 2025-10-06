import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hachim ASSOUMANI
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              {t.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t.subtitle}
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 shadow-glow hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
              {t.getInTouch}
            </Button>
            <Button variant="secondary" size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Github className="w-5 h-5" />
              {t.github}
            </Button>
            <Button variant="secondary" size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Linkedin className="w-5 h-5" />
              {t.linkedin}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
