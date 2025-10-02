import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-accent font-serif text-2xl font-bold tracking-wider">
            AS
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            Nossos Rituais
          </button>
          <button
            onClick={() => scrollToSection("specialists")}
            className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            Os Lapidadores
          </button>
          <button
            onClick={() => scrollToSection("space")}
            className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            O Refúgio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("cta")}
          className="hidden md:block btn-ghost text-sm py-2 px-6"
        >
          Agendar Consulta
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-accent/20">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide text-left"
            >
              Nossos Rituais
            </button>
            <button
              onClick={() => scrollToSection("specialists")}
              className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide text-left"
            >
              Os Lapidadores
            </button>
            <button
              onClick={() => scrollToSection("space")}
              className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide text-left"
            >
              O Refúgio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide text-left"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="btn-ghost text-sm py-2 px-6 mt-4"
            >
              Agendar Consulta
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
