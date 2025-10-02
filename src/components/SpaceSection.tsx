import salonImage from "@/assets/salon-interior.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SpaceSection = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="space" className="section-padding bg-background">
      <div 
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-center mb-4">
          Um Refúgio de Calma e Inspiração
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Nosso espaço foi pensado para proporcionar uma experiência completa de bem-estar
        </p>

        <div className="relative h-[70vh] rounded-lg overflow-hidden shadow-elegant">
          <img
            src={salonImage}
            alt="Interior do Ametista Studio"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay with text */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-primary-foreground text-xl md:text-2xl font-light mb-4">
                "Design biofílico para seu bem-estar."
              </p>
              <p className="text-primary-foreground/80 text-lg">
                Privacidade e conforto em cada detalhe.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent text-2xl">🌿</span>
            </div>
            <h3 className="font-serif text-xl text-primary mb-2">Design Biofílico</h3>
            <p className="text-muted-foreground text-sm">
              Elementos naturais integrados para promover relaxamento
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent text-2xl">✨</span>
            </div>
            <h3 className="font-serif text-xl text-primary mb-2">Privacidade Total</h3>
            <p className="text-muted-foreground text-sm">
              Atendimento personalizado em ambientes exclusivos
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent text-2xl">🎨</span>
            </div>
            <h3 className="font-serif text-xl text-primary mb-2">Arte & Sofisticação</h3>
            <p className="text-muted-foreground text-sm">
              Cada detalhe pensado para uma experiência única
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
