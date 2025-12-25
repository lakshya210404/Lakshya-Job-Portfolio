import { useEffect, useState, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  const updateCursor = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
    // Add to trail
    setTrail(prev => {
      const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
      // Keep only last 12 trail points
      return newTrail.slice(-12);
    });

    // Check if hovering over clickable element
    const target = e.target as HTMLElement;
    const isClickable = 
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      !!target.closest('a') ||
      !!target.closest('button') ||
      window.getComputedStyle(target).cursor === 'pointer';
    
    setIsPointer(isClickable);
  }, []);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseenter', () => setIsHidden(false));
    window.addEventListener('mouseleave', () => setIsHidden(true));

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.style.cursor = 'auto';
    };
  }, [updateCursor]);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.filter(point => Date.now() - point.id < 300));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (isHidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Trail effect */}
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length * 0.6;
        const scale = (index + 1) / trail.length * 0.8;
        return (
          <div
            key={point.id}
            className="absolute rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: 8 * scale,
              height: 8 * scale,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, hsl(var(--primary) / ${opacity}) 0%, transparent 70%)`,
              boxShadow: `0 0 ${10 * scale}px hsl(var(--primary) / ${opacity * 0.8})`,
            }}
          />
        );
      })}

      {/* Main cursor dot */}
      <div
        className="absolute transition-transform duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isPointer ? 'w-6 h-6 bg-primary/20 border-2 border-primary' : 'w-3 h-3 bg-primary'
          }`}
          style={{
            boxShadow: isPointer 
              ? '0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--primary) / 0.4)'
              : '0 0 10px hsl(var(--primary) / 0.8), 0 0 20px hsl(var(--primary) / 0.4)',
          }}
        />
      </div>

      {/* Outer glow ring */}
      <div
        className="absolute transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.2 : 1})`,
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-primary/30"
          style={{
            boxShadow: '0 0 15px hsl(var(--primary) / 0.2)',
          }}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
