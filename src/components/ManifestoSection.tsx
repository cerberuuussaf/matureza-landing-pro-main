import { Search, Scissors, Droplet } from "lucide-react";
import manifestoImage from "@/assets/manifesto-model.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ManifestoSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    {
      icon: Search,
      title: "Diagnóstico Profundo",
      description: "Análise completa da estrutura capilar"
    },
    {
      icon: Scissors,
      title: "Corte de Precisão",
      description: "Visagismo personalizado"
    },
    {
      icon: Droplet,
      title: "Coloração Pura & Tratamento",
      description: "Pigmentos premium e nutrição botânica"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div 
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={manifestoImage}
              alt="Modelo com cabelo vibrante"
              className="w-full h-auto rounded-lg shadow-elegant"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Cada Fio,<br />
              <span className="text-gradient-gold">Uma Pedra Preciosa</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Acreditamos que a verdadeira beleza é autêntica e natural. 
              Nosso processo se inicia com um diagnóstico capilar profundo, 
              analisando a estrutura e a pureza do seu fio. A partir daí, 
              nossos artistas lapidam um plano de visagismo e colorimetria, 
              utilizando pigmentos puros e tratamentos botânicos para garantir 
              que o resultado final seja uma obra de arte vibrante e saudável.
            </p>

            {/* Features */}
            <div className="grid gap-6 pt-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
