import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-hair.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury hair with brilliant shine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-[blur-fade-in_1.2s_ease-out]">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-tight">
          Lapidando Sua Beleza:<br />
          <span className="text-gradient-gold">Onde a Cor Ganha Brilho Próprio</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          No Ametista Studio, tratamos cada cabelo como uma joia única. 
          Descubra a arte do visagismo e da colorimetria de precisão, 
          desenhada para refletir a sua essência.
        </p>

        <button
          onClick={() => scrollToSection("cta")}
          className="btn-hero"
        >
          Revele o Seu Brilho
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("credibility")}
            className="text-accent hover:text-accent/80 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={40} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
