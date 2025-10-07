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
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95 backdrop-blur-sm" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-slide-in-left">
                DevOps Engineer
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight">
              <span className="text-gradient animate-shimmer bg-[length:200%_auto]" style={{
                backgroundImage: 'linear-gradient(90deg, hsl(199 89% 48%), hsl(270 90% 55%), hsl(199 89% 48%))'
              }}>
                Hachim ASSOUMANI
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 animate-slide-in-right">
              {t.title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {t.subtitle}
            </p>
          </div>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6 animate-fade-in animation-delay-400">
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-primary hover:opacity-90 glow-effect hover-lift font-medium px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5" />
              {t.getInTouch}
            </Button>
            <Button variant="outline" size="lg" className="gap-2 hover-lift backdrop-blur-sm bg-card/30 border-primary/30 hover:border-primary/50 font-medium px-8">
              <Github className="w-5 h-5" />
              {t.github}
            </Button>
            <Button variant="outline" size="lg" className="gap-2 hover-lift backdrop-blur-sm bg-card/30 border-primary/30 hover:border-primary/50 font-medium px-8" asChild>
              <a href="https://www.linkedin.com/in/hachim-assoumani-957168293/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                {t.linkedin}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2 backdrop-blur-sm bg-card/20">
          <div className="w-1 h-3 bg-gradient-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
