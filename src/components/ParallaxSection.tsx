import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  id?: string;
}

const ParallaxSection = ({ children, className = '', speed = 0.5, id }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !backgroundRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Only apply parallax when section is in view
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const yPos = (scrolled - sectionTop) * speed;
        backgroundRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background layer */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        {/* Red glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-crimson/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;