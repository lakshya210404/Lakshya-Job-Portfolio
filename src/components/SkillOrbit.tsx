import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', category: 'Frontend', color: 'neon-cyan' },
  { name: 'TypeScript', category: 'Languages', color: 'neon-purple' },
  { name: 'Python', category: 'Languages', color: 'neon-green' },
  { name: 'Docker', category: 'DevOps', color: 'neon-cyan' },
  { name: 'AWS', category: 'Cloud', color: 'neon-pink' },
  { name: 'Azure', category: 'Cloud', color: 'neon-cyan' },
  { name: 'Go', category: 'Languages', color: 'neon-cyan' },
  { name: 'PostgreSQL', category: 'Database', color: 'neon-purple' },
  { name: 'Node.js', category: 'Backend', color: 'neon-green' },
  { name: 'Kubernetes', category: 'DevOps', color: 'neon-purple' },
  { name: 'Java', category: 'Languages', color: 'neon-pink' },
  { name: 'C#', category: 'Languages', color: 'neon-purple' },
];

const SkillOrbit = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Center core */}
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-10 glow-primary">
        <span className="font-mono text-sm font-bold text-primary-foreground">SKILLS</span>
      </div>

      {/* Orbit rings */}
      <div className="absolute w-48 h-48 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: '30s' }} />
      <div className="absolute w-72 h-72 rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
      <div className="absolute w-96 h-96 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDuration: '50s' }} />

      {/* Skill nodes */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const radius = 120 + (index % 3) * 60;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={skill.name}
            className={cn(
              "absolute transition-all duration-300 cursor-pointer",
              hoveredSkill === skill.name && "scale-125 z-20"
            )}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-mono font-medium",
                "border backdrop-blur-sm transition-all duration-300",
                skill.color === 'neon-cyan' && "border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan",
                skill.color === 'neon-purple' && "border-neon-purple/50 bg-neon-purple/10 text-neon-purple",
                skill.color === 'neon-pink' && "border-neon-pink/50 bg-neon-pink/10 text-neon-pink",
                skill.color === 'neon-green' && "border-neon-green/50 bg-neon-green/10 text-neon-green",
                hoveredSkill === skill.name && "shadow-lg"
              )}
              style={{
                boxShadow: hoveredSkill === skill.name 
                  ? `0 0 20px hsl(var(--${skill.color}) / 0.5)` 
                  : 'none'
              }}
            >
              {skill.name}
            </div>

            {hoveredSkill === skill.name && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted-foreground font-mono">
                {skill.category}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SkillOrbit;
