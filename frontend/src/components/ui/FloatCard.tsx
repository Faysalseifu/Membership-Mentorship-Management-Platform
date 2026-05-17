import React from "react";
import { cn } from "@/lib/utils";

interface FloatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  elevated?: boolean;
  hover?: boolean;
}

export const FloatCard = React.forwardRef<HTMLDivElement, FloatCardProps>(
  ({ children, elevated = false, hover = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface-1 rounded-2xl p-6 border border-black/[0.04] transition-all duration-300 ease-out",
          elevated ? "shadow-lg" : "shadow-md",
          hover && "hover:-translate-y-1 hover:shadow-lg hover:border-black/[0.08]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FloatCard.displayName = "FloatCard";
