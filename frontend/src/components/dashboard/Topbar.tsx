"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/themeStore";

interface TopbarProps {
  className?: string;
  onMenuClick?: () => void;
}

export function Topbar({ className, onMenuClick }: TopbarProps) {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

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

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleTheme}
          className="relative text-text-secondary hover:text-text-primary transition-colors w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.03]"
          aria-label="Toggle theme"
          title={`Current theme: ${theme}`}
        >
          {theme === "light" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          )}
          {theme === "dark" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
          {theme === "system" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
          )}
        </button>

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
