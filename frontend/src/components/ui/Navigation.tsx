"use client";

import React from "react";
import { cn } from "@/lib/utils";

// ─── TabBar ───────────────────────────────────────────────────────────────────

interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function TabBar({ tabs, activeTab, onChange, className }: TabBarProps) {
  return (
    <div className={cn("flex gap-0 border-b border-black/[0.06] relative", className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors",
              isActive
                ? "text-brand-teal"
                : "text-text-secondary hover:text-text-primary"
            )}
            aria-selected={isActive}
            role="tab"
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={cn(
                  "inline-flex items-center justify-center min-w-[1.25rem] h-5 rounded-full text-xs px-1.5",
                  isActive
                    ? "bg-brand-teal-l text-brand-teal"
                    : "bg-black/[0.05] text-text-muted"
                )}
              >
                {tab.count}
              </span>
            )}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal rounded-t-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─── FilterBar ────────────────────────────────────────────────────────────────

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  filters: FilterOption[];
  activeFilters: string[];
  onChange: (id: string) => void;
  onClearAll?: () => void;
  className?: string;
}

export function FilterBar({ filters, activeFilters, onChange, onClearAll, className }: FilterBarProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter.id);
        return (
          <button
            key={filter.id}
            onClick={() => onChange(filter.id)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all",
              isActive
                ? "bg-brand-teal text-white border-brand-teal shadow-sm"
                : "bg-surface-1 text-text-secondary border-black/[0.06] hover:border-brand-teal/30 hover:text-text-primary"
            )}
          >
            {filter.label}
          </button>
        );
      })}
      {activeFilters.length > 0 && onClearAll && (
        <button
          onClick={onClearAll}
          className="px-3 py-1.5 rounded-full text-xs font-medium text-text-muted hover:text-danger transition-colors"
        >
          Clear all
        </button>
      )}
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize?: number;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  className?: string;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50],
  className,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1
  );

  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-4", className)}>
      {/* Page size selector */}
      {onPageSizeChange && (
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="h-8 px-2 rounded-lg border border-black/[0.06] bg-surface-1 text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <span>per page</span>
        </div>
      )}

      {/* Page buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-text-secondary hover:bg-black/[0.04] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {visiblePages.map((p, i) => {
          const prevPage = visiblePages[i - 1];
          const showEllipsis = prevPage && p - prevPage > 1;
          return (
            <React.Fragment key={p}>
              {showEllipsis && (
                <span className="w-8 h-8 flex items-center justify-center text-text-muted text-sm">…</span>
              )}
              <button
                onClick={() => onPageChange(p)}
                className={cn(
                  "w-8 h-8 rounded-lg text-sm font-medium transition-colors",
                  p === page
                    ? "bg-brand-teal text-white shadow-sm"
                    : "text-text-secondary hover:bg-black/[0.04]"
                )}
                aria-current={p === page ? "page" : undefined}
              >
                {p}
              </button>
            </React.Fragment>
          );
        })}

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-text-secondary hover:bg-black/[0.04] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
