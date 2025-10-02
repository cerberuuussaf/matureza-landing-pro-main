import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import fazCreativeImg from "@/assets/faz-creative.jpg.png";
import ametistaStudioImg from "@/assets/ametista-studio.jpg.png";
import maturezaImg from "@/assets/matureza.jpg.png";

const Index = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    portfolioSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      name: "Faz Creative",
      url: "http://landingpages.matureza.com.br/Faz-Creative",
      image: fazCreativeImg,
    },
    {
      name: "Ametista Studio",
      url: "/ametista-studio", // Updated URL
      image: ametistaStudioImg,
    },
    {
      name: "Matureza",
        url: "C:\Users\Moise\OneDrive\Documentos\site\portfolio\matureza-landing-pro-main\matureza\index.html",
      image: maturezaImg,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Landing Pages de{" "}
            <span className="text-primary">Alta Conversão</span>
          </h1>
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 neon-glow"
          >
            Conheça o meu trabalho
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-up">
            Portfólio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.url}
                className="group relative overflow-hidden rounded-lg bg-card border border-border card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Landing page do projeto ${project.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Project Name Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.name}
                  </h3>
                </div>
                
                {/* Neon border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg border-2 border-primary" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 Faz Creative - Landing Pages. Todos os direitos reservados.
          </p>
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="gap-2 hover:text-primary"
          >
            <ArrowUp className="w-4 h-4" />
            Voltar ao topo
          </Button>
        </div>
      </footer>
    </main>
  );
};

export default Index;