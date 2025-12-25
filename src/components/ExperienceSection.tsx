import { Badge } from '@/components/ui/badge';
import ExperienceTimeline from './ExperienceTimeline';
import AnimatedSection from './AnimatedSection';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-l from-secondary/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="purple" className="mb-4">Experience</Badge>
            <h2 className="text-headline font-mono font-bold mb-4">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From IT support to DevOps engineering, each role has shaped my expertise in building scalable systems.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
