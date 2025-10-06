import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSelector />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2025 {t.footer.copyright}</p>
      </footer>
    </div>
  );
};

export default Index;
