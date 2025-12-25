import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const expertise = [
    'Cloud Architecture',
    'DevOps & CI/CD',
    'Full-Stack Development',
    'API Development',
    'Infrastructure Automation',
  ];

  return (
    <footer className="py-16 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-mono text-xl font-bold gradient-text mb-4">
              Lakshya Prasad
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Building production-grade cloud applications and crafting elegant solutions to complex problems.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/lakshya-prasad-2104l/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Expertise
            </h4>
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li key={item} className="text-muted-foreground text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:lakshyasprasad21@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  lakshyasprasad21@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12898900608"
                  className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  289-890-0608
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Canada
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="text-center">
            <p className="font-mono text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lakshya Prasad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
