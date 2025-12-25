import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate towards the end
        const increment = prev < 70 ? Math.random() * 15 + 5 : Math.random() * 8 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Start exit animation
      setTimeout(() => setIsExiting(true), 300);
      // Complete after animation
      setTimeout(onComplete, 800);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />

      {/* Logo / Name */}
      <div className="relative z-10 mb-12">
        <h1 
          className="text-4xl md:text-6xl font-mono font-bold gradient-text-animated"
          style={{
            textShadow: '0 0 30px hsl(var(--primary) / 0.5)',
          }}
        >
          LP
        </h1>
        
        {/* Rotating ring */}
        <div className="absolute -inset-8 border-2 border-primary/30 rounded-full animate-spin-slow" />
        <div 
          className="absolute -inset-12 border border-primary/20 rounded-full animate-spin-slow"
          style={{ animationDirection: 'reverse', animationDuration: '15s' }}
        />
      </div>

      {/* Loading text */}
      <div className="relative z-10 mb-8">
        <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
          Initializing
          <span className="inline-flex w-8">
            <span className="animate-pulse">.</span>
            <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
          </span>
        </p>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-64 md:w-80">
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-primary to-neon-crimson transition-all duration-300 ease-out"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 20px hsl(var(--primary) / 0.8)',
            }}
          />
        </div>
        
        {/* Progress percentage */}
        <div className="mt-3 text-center">
          <span className="font-mono text-xs text-primary">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Scan line effect */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground) / 0.03) 2px, hsl(var(--foreground) / 0.03) 4px)',
        }}
      />
      
      {/* Moving scan line */}
      <div 
        className="absolute left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.1), transparent)',
          animation: 'scan 2s linear infinite',
        }}
      />

      <style>{`
        @keyframes scan {
          0% { top: -128px; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
