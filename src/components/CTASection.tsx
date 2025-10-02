import { Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();
  const handleBooking = () => {
    // In a real implementation, this would open a booking form or redirect to scheduling
    alert("Funcionalidade de agendamento será implementada em breve!");
  };

  return (
    <section id="cta" className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div 
        ref={ref}
        className={`container mx-auto relative z-10 text-center max-w-4xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16 text-accent animate-pulse" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
          Sua Beleza é Única.<br />
          Seu Cabelo Também Deveria Ser.
        </h2>

        <p className="text-primary-foreground/80 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          Agende sua consulta de lapidação capilar e receba um mapa de visagismo 
          e cor criado exclusivamente para você. O primeiro passo para revelar sua melhor versão.
        </p>

        <button
          onClick={handleBooking}
          className="btn-hero text-lg px-12 py-5 shadow-[0_0_40px_hsl(var(--accent)/0.3)]"
        >
          Agendar Minha Lapidação Capilar
        </button>

        <p className="text-primary-foreground/60 text-sm mt-8">
          Vagas limitadas · Atendimento personalizado
        </p>
      </div>
    </section>
  );
};

export default CTASection;
