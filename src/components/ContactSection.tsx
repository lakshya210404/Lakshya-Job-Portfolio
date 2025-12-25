import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lakshyasprasad21@gmail.com',
      href: 'mailto:lakshyasprasad21@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '289-890-0608',
      href: 'tel:+12898900608',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Canada',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'lakshya-prasad-2104l',
      href: 'https://linkedin.com/in/lakshya-prasad-2104l/',
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <Badge variant="glow" className="mb-4">Contact</Badge>
            <h2 className="text-headline font-mono font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about tech.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 100}>
                <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-mono uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground font-medium hover:text-primary transition-colors animated-underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={400}>
            <div className="text-center glass-card rounded-2xl p-10 border-glow">
              <h3 className="font-mono text-2xl font-bold mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you have a project in mind or just want to chat, I'd love to hear from you.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:lakshyasprasad21@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send me a message
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
