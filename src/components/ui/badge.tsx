import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono font-medium transition-all duration-300 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: 
          "border-border text-foreground",
        glow:
          "border-primary/50 bg-primary/10 text-primary",
        neon:
          "border-primary/50 bg-primary/10 text-primary hover:bg-primary/20",
        purple:
          "border-neon-crimson/50 bg-neon-crimson/10 text-neon-crimson hover:bg-neon-crimson/20",
        glass:
          "border-border/50 bg-card/50 backdrop-blur-sm text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };