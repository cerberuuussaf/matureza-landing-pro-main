import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CredibilityBar = () => {
  const { ref, isVisible } = useScrollReveal();
  const publications = [
    { name: "Vogue Brasil", opacity: "opacity-60 hover:opacity-100" },
    { name: "Casa Vogue", opacity: "opacity-60 hover:opacity-100" },
    { name: "Harper's Bazaar", opacity: "opacity-60 hover:opacity-100" },
  ];

  return (
    <section id="credibility" className="bg-secondary py-12">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-6">
          Destaque em
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {publications.map((pub) => (
            <div
              key={pub.name}
              className={`${pub.opacity} transition-opacity duration-300`}
            >
              <span className="font-serif text-2xl text-primary">
                {pub.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
