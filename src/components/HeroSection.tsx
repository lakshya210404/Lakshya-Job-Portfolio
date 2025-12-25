import { ArrowDown, Mail, Linkedin, Github, MapPin, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlitchText from './GlitchText';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const roles = [
    'DevOps Engineer',
    'Full-Stack Developer',
    'Cloud Architect',
    'Software Engineer',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <Badge variant="neon" className="mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse" />
            Available for opportunities
          </Badge>

          {/* Main heading */}
          <h1 className="text-display font-mono font-bold mb-6 animate-fade-in stagger-1">
            <span className="text-foreground">Hi, I'm </span>
            <GlitchText text="Lakshya Prasad" className="gradient-text-animated" />
          </h1>

          {/* Typewriter subtitle */}
          <div className="text-headline font-mono mb-8 animate-fade-in stagger-2">
            <TypewriterText texts={roles} />
          </div>

          {/* Description */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in stagger-3">
            Computer Science student at the University of Western Ontario, building 
            <span className="text-primary"> production-grade </span> 
            cloud applications and crafting 
            <span className="text-secondary"> elegant solutions </span> 
            to complex problems.
          </p>

          {/* Location & Contact quick info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 animate-fade-in stagger-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">Canada</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">289-890-0608</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in stagger-5">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="neon" size="lg" asChild>
              <a href="/Lakshya_Prasad_Resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in stagger-6">
            <a
              href="mailto:lakshyasprasad21@gmail.com"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/lakshya-prasad-2104l/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
