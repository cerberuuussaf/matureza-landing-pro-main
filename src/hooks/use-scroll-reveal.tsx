import { useEffect, useRef, MutableRefObject } from "react";
import scrollReveal from "scrollreveal";

/**
 * Hook personalizado para aplicar animações de scroll a um elemento.
 * @returns Uma referência React para ser anexada ao elemento do DOM que pretende animar.
 */
export function useScrollReveal<T extends HTMLElement>(): [MutableRefObject<T | null>] {
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    // Verifica se a referência ao elemento existe antes de aplicar o efeito
    if (sectionRef.current) {
      // Aplica o efeito de revelação com as opções padrão
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 400,
        origin: 'bottom',
        distance: '40px'
      });
    }
  }, []); // O array vazio garante que o efeito só é aplicado uma vez

  return [sectionRef];
}


