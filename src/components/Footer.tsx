import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-8">
      <div 
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-accent font-serif text-3xl font-bold tracking-wider mb-4">
              AS
            </div>
            <p className="text-primary-foreground/60 text-sm italic">
              "Arte em forma de cabelo"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-xl text-accent mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Nossos Rituais
                </a>
              </li>
              <li>
                <a href="#specialists" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Os Lapidadores
                </a>
              </li>
              <li>
                <a href="#space" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  O Refúgio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl text-accent mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua das Flores, 1234<br />
                  Jardins, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  (11) 9 9999-9999
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  contato@ametistastudio.com.br
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-serif text-xl text-accent mb-4">Conecte-se</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            <p className="text-primary-foreground/60 text-sm mb-3">
              Receba nossas curadorias de estilo
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-sm bg-primary-foreground/10 border border-accent/30 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-primary rounded-sm hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] transition-all duration-300 text-sm font-semibold"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Ametista Studio. Todos os direitos reservados.
          </p>
          <a
            href="#"
            className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
