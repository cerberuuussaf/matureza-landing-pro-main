import { useEffect, useRef } from 'react';

type ScrollRevealOptions = {
  delay?: number;
  distance?: string;
  duration?: number;
  origin?: 'top' | 'bottom' | 'left' | 'right';
  easing?: string;
  scale?: number;
  reset?: boolean;
};

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const srPromise = import('scrollreveal');
    
    srPromise.then(srModule => {
      const sr = srModule.default({
        delay: options.delay || 200,
        distance: options.distance || '30px',
        duration: options.duration || 800,
        origin: options.origin || 'bottom',
        easing: options.easing || 'ease-in-out',
        scale: options.scale || 1,
        reset: options.reset || false,
      });

      if (elementRef.current) {
        sr.reveal(elementRef.current);
      }
    });
  }, [options]);

  // Type assertion to inform TypeScript about the ref's type
  return elementRef as React.RefObject<any>;
};
