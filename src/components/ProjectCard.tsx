import { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  image: string;
  index: number;
}

const ProjectCard = ({ title, description, technologies, highlights, image, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt angles (max 15 degrees)
    const tiltX = ((y - centerY) / centerY) * -12;
    const tiltY = ((x - centerX) / centerX) * 12;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative glass-card rounded-xl overflow-hidden transition-all duration-300",
        "hover:border-primary/50 border-glow"
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glare effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, hsl(var(--primary) / 0.15) 0%, transparent 60%)`
            : 'none',
        }}
      />

      {/* Project Cover Image */}
      <div className="relative h-48 overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Project number overlay */}
        <span 
          className="absolute top-4 right-4 text-5xl font-mono font-bold text-white/20 group-hover:text-primary/30 transition-colors"
          style={{ transform: 'translateZ(40px)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 p-6" style={{ transform: 'translateZ(30px)' }}>
        {/* Title */}
        <h3 className="font-mono text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Expandable highlights */}
        {highlights && highlights.length > 0 && (
          <div className={cn(
            "overflow-hidden transition-all duration-500",
            isExpanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
          )}>
            <ul className="space-y-2">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, isExpanded ? technologies.length : 4).map((tech) => (
            <Badge key={tech} variant="glow" className="text-[10px]">
              {tech}
            </Badge>
          ))}
          {!isExpanded && technologies.length > 4 && (
            <Badge variant="outline" className="text-[10px]">
              +{technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {highlights && highlights.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs"
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
              <ChevronRight className={cn(
                "w-3 h-3 transition-transform",
                isExpanded && "rotate-90"
              )} />
            </Button>
          )}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ProjectCard;