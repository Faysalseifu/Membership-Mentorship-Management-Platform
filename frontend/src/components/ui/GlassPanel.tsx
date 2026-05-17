import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassPanel({ children, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "bg-surface-overlay backdrop-blur-md border border-white/30 rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  if (!label) {
    return <hr className={cn("border-black/[0.06]", className)} />;
  }
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex-1 h-px bg-black/[0.06]" />
      <span className="text-xs font-medium text-text-muted uppercase tracking-wider px-2 py-0.5 bg-surface-0 rounded-full border border-black/[0.06]">
        {label}
      </span>
      <div className="flex-1 h-px bg-black/[0.06]" />
    </div>
  );
}
