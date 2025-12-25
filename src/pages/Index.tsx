import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = "Lakshya Prasad | DevOps Engineer & Full-Stack Developer";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lakshya Prasad - Computer Science student and DevOps Engineer building production-grade cloud applications. Expertise in React, Python, AWS, Azure, Docker, and Kubernetes.');
    }

    // Parallax scroll effect
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((el, index) => {
        const speed = 0.1 + (index * 0.05);
        const element = el as HTMLElement;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      <div ref={parallaxRef} className="relative min-h-screen bg-background noise">
        {/* Parallax background layers */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="parallax-bg absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="parallax-bg absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-crimson/8 rounded-full blur-[120px]" />
          <div className="parallax-bg absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="parallax-bg absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[180px]" />
        </div>

        {/* Particle background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
