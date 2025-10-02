import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const testimonials = [
    {
      text: "A experiência no Ametista Studio foi transformadora. Saí de lá me sentindo uma versão melhorada de mim mesma. A atenção aos detalhes e o cuidado com cada fio fizeram toda a diferença.",
      author: "Fernanda L.",
      role: "Designer de Joias"
    },
    {
      text: "Nunca havia encontrado um lugar que compreendesse tão bem a minha visão. O resultado superou todas as minhas expectativas. Meu cabelo nunca teve tanto brilho e vida.",
      author: "Carolina M.",
      role: "Empresária"
    },
    {
      text: "A equipe do Ametista é simplesmente excepcional. Cada visita é uma experiência única, onde me sinto verdadeiramente cuidada. O ambiente é um refúgio de elegância e tranquilidade.",
      author: "Beatriz S.",
      role: "Arquiteta"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary">
      <div 
        ref={ref}
        className={`container mx-auto max-w-4xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground text-center mb-16">
          Joias da Casa
        </h2>

        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 -left-4 text-accent/20 text-9xl font-serif leading-none">
            "
          </div>

          {/* Testimonial Content */}
          <div className="relative z-10 text-center px-8 md:px-16">
            <p className="text-primary-foreground text-xl md:text-2xl font-light leading-relaxed mb-8 min-h-[200px] flex items-center justify-center">
              {testimonials[currentIndex].text}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Author */}
            <p className="text-accent font-semibold text-lg">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {testimonials[currentIndex].role}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-accent/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
