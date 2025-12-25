import { Badge } from '@/components/ui/badge';
import SkillOrbit from './SkillOrbit';
import AnimatedSection from './AnimatedSection';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'Go', 'Bash'],
    color: 'primary',
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vue.js', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
    color: 'secondary',
  },
  {
    title: 'Backend & APIs',
    skills: ['.NET Core', 'ASP.NET', 'Node.js', 'Spring Boot', 'REST APIs', 'GraphQL'],
    color: 'primary',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
    color: 'secondary',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'SQL', 'Azure SQL', 'NoSQL', 'Vector DB'],
    color: 'primary',
  },
  {
    title: 'AI & ML',
    skills: ['Azure OpenAI', 'LangGraph', 'RAG', 'Prompt Engineering'],
    color: 'secondary',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="glow" className="mb-4">Skills</Badge>
            <h2 className="text-headline font-mono font-bold mb-4">
              Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning from low-level systems to cloud-native architectures.
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive orbit visualization - desktop only */}
        <AnimatedSection delay={200}>
          <div className="hidden lg:block mb-20">
            <SkillOrbit />
          </div>
        </AnimatedSection>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 100}>
              <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                <h3 className={`font-mono text-sm font-bold mb-4 uppercase tracking-wider ${
                  category.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={category.color === 'primary' ? 'neon' : 'purple'}
                      className="text-[10px] transition-transform hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
