import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterText = ({
  texts,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2500,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = texts[currentIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, currentText, isDeleting, isPaused, pauseTime, texts.length]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    // Add slight randomness for more natural feel
    const randomSpeed = speed + Math.random() * 50;
    
    const timeout = setTimeout(tick, randomSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="relative">
        <span className="gradient-text font-bold">{displayText}</span>
        <span 
          className={cn(
            "ml-0.5 inline-block w-[3px] h-[1.1em] bg-primary rounded-sm align-middle",
            "animate-pulse"
          )}
          style={{
            animation: 'cursor-blink 1s ease-in-out infinite',
            boxShadow: '0 0 8px hsl(var(--primary) / 0.8)',
          }}
        />
      </span>
    </span>
  );
};

export default TypewriterText;