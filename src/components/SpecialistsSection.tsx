import { useState } from "react";
import marianaImage from "@/assets/specialist-mariana.jpg";
import rafaelImage from "@/assets/specialist-rafael.jpg";
import julianaImage from "@/assets/specialist-juliana.jpg";
import pedroImage from "@/assets/specialist-pedro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SpecialistsSection = () => {
  const [hoveredSpecialist, setHoveredSpecialist] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const specialists = [
    {
      name: "Mariana Costa",
      specialty: "Especialista em Mechas Naturais",
      bio: "15 anos de experiência em colorimetria avançada",
      image: marianaImage
    },
    {
      name: "Rafael Mendes",
      specialty: "Master em Visagismo",
      bio: "Formação internacional em técnicas de corte de precisão",
      image: rafaelImage
    },
    {
      name: "Juliana Ferreira",
      specialty: "Expert em Tratamentos Capilares",
      bio: "Certificada em terapia capilar e tricologia",
      image: julianaImage
    },
    {
      name: "Pedro Silva",
      specialty: "Colorista Premium",
      bio: "Especialista em transformações de cor complexas",
      image: pedroImage
    }
  ];

  return (
    <section id="specialists" className="section-padding bg-secondary">
      <div 
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-center mb-4">
          Conheça Nossos Artistas
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Uma equipe de profissionais altamente qualificados, dedicados a revelar sua melhor versão
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredSpecialist(index)}
              onMouseLeave={() => setHoveredSpecialist(null)}
            >
              {/* Photo Container */}
              <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden mb-4 relative">
                <img 
                  src={specialist.image} 
                  alt={`${specialist.name} - ${specialist.specialty}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Overlay Info */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredSpecialist === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="font-serif text-2xl text-primary-foreground mb-1">
                    {specialist.name}
                  </h3>
                  <p className="text-accent text-sm uppercase tracking-wider">
                    {specialist.specialty}
                  </p>
                </div>
              </div>

              {/* Info Below */}
              <div className="text-center">
                <h3 className="font-serif text-xl text-primary mb-1">
                  {specialist.name}
                </h3>
                <p className="text-accent text-sm mb-2">
                  {specialist.specialty}
                </p>
                <p className="text-muted-foreground text-sm">
                  {specialist.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
