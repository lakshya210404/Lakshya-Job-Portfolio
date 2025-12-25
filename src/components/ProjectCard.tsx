import { useState } from 'react';
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

  return (
    <div
      className={cn(
        "group relative glass-card rounded-xl overflow-hidden transition-all duration-500",
        "hover:border-primary/50 border-glow"
      )}
    >
      {/* Project Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Project number overlay */}
        <span className="absolute top-4 right-4 text-5xl font-mono font-bold text-white/20 group-hover:text-primary/30 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 p-6">
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
