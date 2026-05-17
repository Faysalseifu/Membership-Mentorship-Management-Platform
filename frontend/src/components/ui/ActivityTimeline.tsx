import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  date: string;
  color?: "teal" | "amber" | "info" | "danger" | "muted";
}

const dotColor = {
  teal: "bg-brand-teal border-brand-teal-l",
  amber: "bg-brand-amber border-brand-amber-l",
  info: "bg-info border-info/20",
  danger: "bg-danger border-danger/20",
  muted: "bg-text-muted border-black/[0.06]",
};

interface ActivityTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function ActivityTimeline({ events, className }: ActivityTimelineProps) {
  if (events.length === 0) {
    return (
      <p className="text-sm text-text-muted text-center py-8">No activity yet.</p>
    );
  }

  return (
    <ol className={cn("relative flex flex-col gap-0", className)}>
      {events.map((event, i) => {
        const color = event.color ?? "teal";
        const isLast = i === events.length - 1;
        return (
          <li key={event.id} className="relative flex gap-4 pl-6">
            {/* Vertical line */}
            {!isLast && (
              <span className="absolute left-[9px] top-5 bottom-0 w-px bg-black/[0.06]" />
            )}
            {/* Dot */}
            <span
              className={cn(
                "absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full border-2 shrink-0",
                dotColor[color]
              )}
            />
            {/* Content */}
            <div className={cn("flex flex-col gap-0.5 pb-6 min-w-0", isLast && "pb-0")}>
              <p className="text-sm font-medium text-text-primary leading-snug">{event.title}</p>
              {event.description && (
                <p className="text-xs text-text-secondary">{event.description}</p>
              )}
              <time className="text-xs text-text-muted mt-0.5">
                {format(new Date(event.date), "MMM d, yyyy")}
              </time>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
