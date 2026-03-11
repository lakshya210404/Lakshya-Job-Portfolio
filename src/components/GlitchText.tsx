import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className }: GlitchTextProps) => {
  return (
    <span className={cn("glitch relative inline-block", className)} data-text={text}>
      {text}
    </span>
  );
};

export default GlitchText;
