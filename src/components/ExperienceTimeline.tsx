import { Briefcase, Calendar, Radio } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags?: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "Searidge Technologies",
    location: "Ottawa, ON",
    period: "Sep 2026 - Present",
    current: true,
    highlights: [
      "Developing and maintaining software for airport surface management and remote/digital tower systems",
      "Working with PTZ (pan-tilt-zoom) camera systems, including software that interfaces with and controls camera hardware",
      "Writing and debugging production code primarily in C++ and Python",
      "Investigating software behavior across camera, video, and system components to identify and resolve defects",
      "Working with existing large-scale codebases, debugging issues, testing fixes, and improving system reliability",
      "Collaborating with software engineers on features and bug fixes involving real-time systems, camera control, and aviation technology"
    ],
    tags: ["C++", "Python", "PTZ Cameras", "Computer Vision", "Camera Control", "Real-Time Systems", "Debugging", "Git", "Software Development"]
  },
  {
    title: "Product Support Analyst Intern",
    company: "D2L",
    location: "Kitchener, ON",
    period: "May 2026 - Aug 2026",
    highlights: [
      "Investigate and troubleshoot customer issues across Brightspace tools, analyzing product behavior, configuration, permissions, and user/course data to identify root causes",
      "Use SQL queries and internal database tools during training to inspect learning environment data, validate records, and understand relationships across LMS tables",
      "Document findings, case notes, timestamps, reproduction steps, and escalation details clearly to support accurate handoffs and faster resolution",
      "Support technical communication across cases, chats, and phone workflows while learning D2L support processes, product architecture, and customer impact patterns",
      "Collaborate with internal teams by escalating product defects, usability issues, and configuration concerns with structured evidence"
    ],
    tags: ["SQL", "Brightspace", "LMS", "Technical Support", "Debugging", "Case Management", "Product Triage", "Documentation"]
  },
  {
    title: "DevOps Engineer Intern",
    company: "Leavoda Technologies",
    location: "Quebec, ON",
    period: "2025 - 2026",
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
            <div className="relative flex gap-8 group">
              {/* Timeline node */}
              <div className="relative z-10 flex-shrink-0">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
                  "bg-card border-2",
                  exp.current ? "glow-primary border-primary" : "border-primary/50 group-hover:border-primary"
                )}>
                  <Briefcase className={cn(
                    "w-6 h-6",
                    exp.current ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
                {exp.current && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" style={{ animationDuration: '2s' }} />
                )}
              </div>

              {/* Content */}
              <div className={cn(
                "flex-1 glass-card rounded-xl p-6 transition-colors",
                exp.current
                  ? "border-primary/50 hover:border-primary shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]"
                  : "hover:border-primary/30"
              )}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-mono text-lg font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {exp.current && (
                      <Badge variant="purple" className="font-mono text-xs flex items-center gap-1.5 border-primary/50">
                        <Radio className="w-3 h-3 animate-pulse" />
                        Current
                      </Badge>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
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

                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/50">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary/90 border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
