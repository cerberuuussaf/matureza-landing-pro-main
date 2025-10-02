import { useState } from "react";
import { ArrowRight } from "lucide-react";
import quartzFumeImage from "@/assets/service-quartzo-fume.jpg";
import platinaPuraImage from "@/assets/service-platina-pura.jpg";
import nutricaoImage from "@/assets/service-nutricao.jpg";
import ametistaImage from "@/assets/service-ametista.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      title: "Quartzo Fumê",
      subtitle: "Morena Iluminada",
      description: "Técnica de colorimetria que revela tons caramelo e mel, criando profundidade e luminosidade natural.",
      image: quartzFumeImage
    },
    {
      title: "Platina Pura",
      subtitle: "Loiro Global",
      description: "Descoloração de precisão com tonalização personalizada para um loiro frio e impecável.",
      image: platinaPuraImage
    },
    {
      title: "Nutrição de Pedras Preciosas",
      subtitle: "Tratamento Intensivo",
      description: "Protocolo exclusivo com óleos botânicos raros e proteínas reconstrutoras para máximo brilho.",
      image: nutricaoImage
    },
    {
      title: "Reflexos de Ametista",
      subtitle: "Coloração Especial",
      description: "Tons roxos sofisticados que refletem luz de forma única, criando um visual contemporâneo.",
      image: ametistaImage
    }
  ];

  return (
    <section id="services" className="section-padding bg-primary">
      <div 
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground text-center mb-4">
          Rituais de Brilho e Cor
        </h2>
        <p className="text-center text-primary-foreground/80 mb-16 max-w-2xl mx-auto">
          Cada serviço é uma experiência única, desenhada para realçar sua beleza natural
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="font-serif text-2xl text-accent mb-1">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm uppercase tracking-wider mb-3">
                  {service.subtitle}
                </p>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <button className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide hover:gap-4 transition-all duration-300">
                  Conheça o Ritual
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
