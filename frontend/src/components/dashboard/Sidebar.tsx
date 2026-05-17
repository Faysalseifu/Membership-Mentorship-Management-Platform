"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  items: NavItem[];
  className?: string;
}

export function Sidebar({ items, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-64 h-full flex flex-col bg-surface-overlay backdrop-blur-md border-r border-black/[0.04] p-4",
        className
      )}
    >
      <div className="flex items-center gap-3 px-2 py-4 mb-8">
        <div className="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center text-white font-bold font-display">
          M
        </div>
        <span className="font-display font-semibold text-text-primary tracking-tight">
          League
        </span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {items.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-brand-teal text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary hover:bg-black/[0.03]"
              )}
            >
              <div className={cn(isActive ? "text-white" : "text-text-muted")}>
                {item.icon}
              </div>
              {item.label}
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-auto px-2 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-1 border border-black/[0.04] flex items-center justify-center shadow-sm">
            <span className="text-sm font-bold text-brand-teal">U</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-text-primary">User</span>
            <span className="text-xs text-text-muted">Member</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
