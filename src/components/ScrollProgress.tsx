import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/30">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-neon-crimson transition-all duration-150 ease-out"
        style={{ 
          width: `${progress}%`,
          boxShadow: progress > 0 
            ? '0 0 10px hsl(var(--primary) / 0.8), 0 0 20px hsl(var(--primary) / 0.4)' 
            : 'none',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
