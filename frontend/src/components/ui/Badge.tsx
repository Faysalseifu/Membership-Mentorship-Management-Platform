import React from "react";
import { cn } from "@/lib/utils";

type StatusType = "active" | "inactive" | "alumni" | "pending";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const styles: Record<StatusType, string> = {
    active: "bg-brand-teal-l text-brand-teal",
    inactive: "bg-gray-100 text-gray-500",
    alumni: "bg-info/10 text-info",
    pending: "bg-brand-amber-l text-brand-amber",
  };

  const labels: Record<StatusType, string> = {
    active: "Active",
    inactive: "Inactive",
    alumni: "Alumni",
    pending: "Pending",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        styles[status],
        className
      )}
    >
      {labels[status]}
    </span>
  );
}

interface LevelBadgeProps {
  level: number;
  className?: string;
}

export function LevelBadge({ level, className }: LevelBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold",
        "bg-surface-2 shadow-sm border border-black/[0.04] text-brand-teal",
        className
      )}
    >
      L{level}
    </span>
  );
}

type TierType = "silver" | "gold" | "platinum";

interface TierBadgeProps {
  tier: TierType;
  className?: string;
}

export function TierBadge({ tier, className }: TierBadgeProps) {
  const styles: Record<TierType, string> = {
    silver: "bg-gray-100 text-gray-700 border-gray-200",
    gold: "bg-amber-100 text-amber-800 border-amber-200",
    platinum: "bg-slate-100 text-slate-800 border-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border shadow-sm capitalize",
        styles[tier],
        className
      )}
    >
      {tier}
    </span>
  );
}
