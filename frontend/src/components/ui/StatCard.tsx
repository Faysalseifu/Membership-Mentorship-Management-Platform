import React from "react";
import { FloatCard } from "./FloatCard";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ label, value, trend, icon, className }: StatCardProps) {
  return (
    <FloatCard className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center justify-between">
        <span className="text-text-secondary text-sm font-medium">{label}</span>
        {icon && <div className="text-text-muted">{icon}</div>}
      </div>
      
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-display font-semibold text-text-primary">
          {value}
        </span>
        {trend && (
          <div
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              trend.isPositive
                ? "bg-brand-teal-l text-brand-teal"
                : "bg-brand-amber-l text-brand-amber"
            )}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}% {trend.label}
          </div>
        )}
      </div>
    </FloatCard>
  );
}
