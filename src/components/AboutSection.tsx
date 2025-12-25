import { GraduationCap, Code, Cloud, Terminal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Bachelor of Computer Science at University of Western Ontario',
      color: 'primary',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Docker, Kubernetes, CI/CD Pipelines',
      color: 'secondary',
    },
    {
      icon: Code,
      title: 'Full-Stack',
      description: 'React, Node.js, Python, Go, .NET Core',
      color: 'primary',
    },
    {
      icon: Terminal,
      title: 'Problem Solver',
      description: 'DSA, System Design, Production Debugging',
      color: 'secondary',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="glow" className="mb-4">About Me</Badge>
            <h2 className="text-headline font-mono font-bold mb-4">
              Crafting <span className="gradient-text">Digital Experiences</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer who bridges the gap between innovative design and robust engineering.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover-lift">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  item.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { value: '4+', label: 'Internships' },
              { value: '10+', label: 'Projects' },
              { value: '8+', label: 'Technologies' },
              { value: '2+', label: 'Years Coding' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-mono font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
