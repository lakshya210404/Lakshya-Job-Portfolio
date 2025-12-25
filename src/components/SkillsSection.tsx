import { Badge } from '@/components/ui/badge';
import SkillOrbit from './SkillOrbit';
import AnimatedSection from './AnimatedSection';

// Skill icons using Simple Icons CDN
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C#', icon: 'https://cdn.simpleicons.org/csharp/512BD4' },
      { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
      { name: 'Go', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
      { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/4EAA25' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF' },
      { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
      { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: '.NET Core', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
      { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/openapi/6BA539' },
      { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/E10098' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' },
      { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
      { name: 'GCP', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/D24939' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'Azure OpenAI', icon: 'https://cdn.simpleicons.org/openai/412991' },
      { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
      { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
      { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
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
        <AnimatedSection delay={200} animation="scale">
          <div className="hidden lg:block mb-20">
            <SkillOrbit />
          </div>
        </AnimatedSection>

        {/* Skill categories grid with icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 100} animation="fade-up">
              <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                <h3 className="font-mono text-sm font-bold mb-4 uppercase tracking-wider text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group/skill"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-mono text-foreground/80 group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
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