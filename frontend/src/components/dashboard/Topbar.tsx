"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TopbarProps {
  className?: string;
  onMenuClick?: () => void;
}

export function Topbar({ className, onMenuClick }: TopbarProps) {
  return (
    <header
      className={cn(
        "h-16 flex items-center justify-between px-6 bg-surface-overlay backdrop-blur-md border-b border-black/[0.04]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="hidden md:flex relative w-64">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search (⌘K)"
            className="w-full h-9 pl-9 pr-4 bg-black/[0.03] border border-transparent rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:bg-surface-1 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="relative text-text-secondary hover:text-text-primary transition-colors w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.03]"
          aria-label="Notifications"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-danger rounded-full border border-surface-1"></span>
        </button>
      </div>
    </header>
  );
}
