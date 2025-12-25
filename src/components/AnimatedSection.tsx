import { useEffect, useRef, useState, ReactNode, Children, cloneElement, isValidElement } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur' | 'rotate' | 'none';
  stagger?: boolean;
  staggerDelay?: number;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-up',
  stagger = false,
  staggerDelay = 100,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
    };

    switch (animation) {
      case 'fade-up':
        return { ...base, transform: 'translateY(40px)' };
      case 'fade-down':
        return { ...base, transform: 'translateY(-40px)' };
      case 'fade-left':
        return { ...base, transform: 'translateX(40px)' };
      case 'fade-right':
        return { ...base, transform: 'translateX(-40px)' };
      case 'scale':
        return { ...base, transform: 'scale(0.9)' };
      case 'blur':
        return { ...base, filter: 'blur(10px)', transform: 'translateY(20px)' };
      case 'rotate':
        return { ...base, transform: 'rotate(-5deg) translateY(20px)' };
      case 'none':
        return {};
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => {
    return {
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1) rotate(0)',
      filter: 'blur(0)',
      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
    };
  };

  // Handle staggered children
  if (stagger && isVisible) {
    const staggeredChildren = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        return cloneElement(child as React.ReactElement<{ style?: React.CSSProperties }>, {
          style: {
            ...(child.props as { style?: React.CSSProperties }).style,
            animationDelay: `${index * staggerDelay}ms`,
          },
        });
      }
      return child;
    });

    return (
      <div
        ref={ref}
        className={cn(className)}
        style={isVisible ? getVisibleStyles() : getInitialStyles()}
      >
        {staggeredChildren}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;