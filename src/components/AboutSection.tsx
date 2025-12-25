import { GraduationCap, Code, Cloud, Terminal, Zap, Database, Server, Brain } from 'lucide-react';
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

  const skills = [
    { icon: Zap, name: 'Fast Learner', desc: 'Quickly adapt to new technologies and frameworks' },
    { icon: Database, name: 'Data-Driven', desc: 'Strong foundation in databases and data modeling' },
    { icon: Server, name: 'Backend Expert', desc: 'Building scalable microservices and APIs' },
    { icon: Brain, name: 'AI Enthusiast', desc: 'Experience with RAG, LLMs, and AI integration' },
  ];

  return (
    <section id="about" className="py-32 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-l from-secondary/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-96 bg-gradient-to-r from-primary/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="glow" className="mb-4">Who Am I</Badge>
            <h2 className="text-headline font-mono font-bold mb-4">
              Crafting <span className="gradient-text">Digital Experiences</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer who bridges the gap between innovative design and robust engineering.
            </p>
          </div>
        </AnimatedSection>

        {/* Who Am I Story */}
        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-card rounded-2xl p-8 md:p-12 border-glow">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Hey there! I'm <span className="text-primary font-semibold">Lakshya Prasad</span>, a Computer Science student at the University of Western Ontario with a burning passion for building things that matter. I thrive at the intersection of <span className="text-secondary font-semibold">cloud architecture</span>, <span className="text-primary font-semibold">full-stack development</span>, and <span className="text-neon-green font-semibold">DevOps engineering</span>.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  With <span className="text-primary font-semibold">4+ internships</span> under my belt at companies like Dayforce, RBC, and Intact Insurance, I've had the privilege of working on enterprise-scale applications, AI-powered platforms, and production-grade microservices. I don't just write code—I architect solutions that scale, perform, and make a real impact.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  When I'm not pushing commits, you'll find me exploring the latest in <span className="text-secondary font-semibold">AI/ML</span>, contributing to open source, or diving deep into system design. I believe in writing clean, maintainable code and constantly pushing the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Competencies */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
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

        {/* Additional Skills */}
        <AnimatedSection delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {skills.map((skill) => (
              <div key={skill.name} className="text-center p-4 rounded-xl glass hover:bg-primary/5 transition-all duration-300 group">
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-mono text-sm font-bold mb-1">{skill.name}</h4>
                <p className="text-xs text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

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
