import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lakshya Prasad. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>and lots of</span>
            <span className="text-primary">☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
