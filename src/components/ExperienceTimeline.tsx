import { Briefcase, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: "DevOps Engineer Intern",
    company: "Leavoda Technologies",
    location: "Quebec, ON",
    period: "Current",
    highlights: [
      "Built production-grade cloud applications in Linux environments",
      "Developed CI/CD pipelines using GitHub Actions, Jenkins, Azure DevOps",
      "Deployed and monitored services across Azure and AWS"
    ]
  },
  {
    title: "UX/UI & Software Developer Intern",
    company: "A-Zone Gaming",
    location: "Toronto, ON",
    period: "Sep 2025 - Jan 2026",
    highlights: [
      "Developed JavaScript and React-based production applications",
      "Integrated REST APIs and validated functionality through testing",
      "Participated in Agile sprints and code reviews"
    ]
  },
  {
    title: "Frontend/Software Developer",
    company: "Sai Dham Food Bank",
    location: "Brampton, ON",
    period: "May 2025 - Aug 2025",
    highlights: [
      "Built and deployed user-facing software for real operational use",
      "Improved accessibility, performance, and system reliability"
    ]
  },
  {
    title: "HR/IT Intern",
    company: "PCHS",
    location: "Brampton, ON",
    period: "Apr 2024 - Aug 2024",
    highlights: [
      "Supported internal software systems and troubleshooting",
      "Assisted with hardware setup and secure access controls"
    ]
  }
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 100} animation="fade-right">
            <div className="relative flex gap-8">
              {/* Timeline node */}
              <div className="relative z-10 flex-shrink-0">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center",
                  "bg-card border-2 border-primary/50 group-hover:border-primary transition-colors",
                  index === 0 && "glow-primary border-primary"
                )}>
                  <Briefcase className={cn(
                    "w-6 h-6",
                    index === 0 ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                {index === 0 && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" style={{ animationDuration: '2s' }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-mono text-lg font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>

                <Badge variant="glass" className="mb-4">{exp.location}</Badge>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
