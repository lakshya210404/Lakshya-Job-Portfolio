import { Badge } from '@/components/ui/badge';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';
import project7 from '@/assets/project-7.jpg';
import project8 from '@/assets/project-8.jpg';
import project9 from '@/assets/project-9.jpg';
import project10 from '@/assets/project-10.jpg';
import project11 from '@/assets/project-11.jpg';
import project12 from '@/assets/project-12.jpg';

const projects = [
  {
    title: "Jinder - Job Matching Web App",
    description: "Built a modern job application platform with swipe-based matching, connecting job seekers with opportunities through an intuitive interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
    highlights: [
      "Implemented swipe-based job matching interface for intuitive UX",
      "Built real-time job listings and application tracking",
      "Integrated authentication and user profile management",
      "Designed responsive UI with modern design system"
    ],
    image: project9,
    liveUrl: "https://jinder-ai-job-app.vercel.app/"
  },
  {
    title: "Internal Developer Platform & Tooling System",
    description: "Built an internal developer platform for service configuration, monitoring, and automation with a focus on developer productivity.",
    technologies: ["ASP.NET Core", "PostgreSQL", "Docker", "REST APIs", "Cloud"],
    highlights: [
      "Developed REST APIs for managing service metadata and deployment status",
      "Designed relational schemas and implemented data access layers",
      "Containerized backend services and deployed to cloud environments",
      "Implemented logging, error handling, and automated tests"
    ],
    image: project1
  },
  {
    title: "Enterprise AI Knowledge Assistant",
    description: "Built RAG-based natural-language search over enterprise documents, improving information retrieval accuracy by 30%.",
    technologies: ["Python", "Azure OpenAI", "LangGraph", "Vector DB", "RAG"],
    highlights: [
      "Implemented summarization, data chunking, and evaluation techniques",
      "Enhanced model reliability through advanced prompting strategies",
      "Built vector database integration for semantic search"
    ],
    image: project2
  },
  {
    title: "HR Integrations & Data Sync Microservice",
    description: "Designed HRIS/Employee-sync microservice enabling reliable user data synchronization with retry logic and rate-limiting.",
    technologies: ["Go", "Python", "GCP", "Docker", "Kubernetes", "Pub/Sub"],
    highlights: [
      "Built validation pipelines with retry logic",
      "Implemented rate-limiting and containerization",
      "Deployed on Minikube Kubernetes cluster"
    ],
    image: project3
  },
  {
    title: "Manufacturing Workflow Automation System",
    description: "Designed and developed a software automation system to simulate manufacturing-style workflows with data-driven process optimization.",
    technologies: ["Python", "SQL", "REST APIs", "Automation"],
    highlights: [
      "Built backend services to collect, process, and analyze operational data",
      "Implemented data-driven process optimization to reduce manual steps and improve efficiency",
      "Focused on testing, debugging, documentation, and system reliability"
    ],
    image: project10
  },
  {
    title: "Retail Inventory Monitoring System",
    description: "Engineered a full-stack Walmart-style inventory system with real-time alerts and anomaly detection.",
    technologies: ["Java", "Spring Boot", "Docker", "Node.js", "React"],
    highlights: [
      "Developed Spring Boot microservices for SKU tracking",
      "Implemented real-time alerting and anomaly detection",
      "Automated latency and error dashboards"
    ],
    image: project4
  },
  {
    title: "Vehicle Telemetry & Diagnostics Platform",
    description: "Built a vehicle telemetry ingestion and diagnostics system simulating EV data streams.",
    technologies: ["Python", "Java", "REST APIs", "Docker", "AWS", "React"],
    highlights: [
      "Implemented backend services for vehicle state and sensor data",
      "Designed REST APIs improving monitoring efficiency by 30%"
    ],
    image: project5
  },
  {
    title: "Real-Time Customer Support Dashboard",
    description: "Engineered a real-time customer support dashboard supporting 500+ concurrent users.",
    technologies: ["Vue.js", "WebSockets", "Node.js", "AWS", "Docker"],
    highlights: [
      "Built live communication updates with WebSockets",
      "Scalable Node.js backend with Docker-AWS deployment"
    ],
    image: project6
  },
  {
    title: "Next.js Health & Wellness Dashboard",
    description: "Built a modular health dashboard tracking prescriptions and appointments with WCAG AA compliance.",
    technologies: ["Next.js 14", "React", "TypeScript", "Node.js", "Tailwind", "Vercel"],
    highlights: [
      "Implemented server actions and secure authentication",
      "Ensured accessibility with keyboard navigation and aria-live regions"
    ],
    image: project7
  },
  {
    title: "HighVibeChat - WebRTC Platform",
    description: "Developed real-time WebRTC communication platform, reducing system downtime by 30%.",
    technologies: ["WebRTC", "Node.js", "Custom Signalling"],
    highlights: [
      "Built custom signalling server",
      "Documented architecture and debugging processes"
    ],
    image: project8,
    liveUrl: "https://highvibechat.ca/"
  },
  {
    title: "Java Bill Splitter",
    description: "A Java application for splitting bills among groups, handling tip calculations and uneven splits with a clean interface.",
    technologies: ["Java", "OOP", "Data Structures"],
    highlights: [
      "Implemented flexible bill splitting with tip and tax handling",
      "Built clean object-oriented architecture"
    ],
    image: project11
  },
  {
    title: "Java Mine Escape Game",
    description: "A maze-based escape game built in Java featuring pathfinding algorithms and interactive gameplay mechanics.",
    technologies: ["Java", "Algorithms", "Game Logic"],
    highlights: [
      "Implemented maze generation and pathfinding algorithms",
      "Built interactive game loop with player movement and hazard detection"
    ],
    image: project12
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-gradient-to-r from-primary/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <Badge variant="purple" className="mb-4">Projects</Badge>
            <h2 className="text-headline font-mono font-bold mb-4">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From enterprise platforms to real-time systems, here are some of the projects I've worked on.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 80} animation="scale">
              <ProjectCard {...project} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
