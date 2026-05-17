"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatCard } from "@/components/ui/StatCard";
import { Select } from "@/components/ui/Input";

export default function AdminReportsPage() {
  const [reportType, setReportType] = useState("membership");
  const [regionFilter, setRegionFilter] = useState("all");

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Platform Reports & Analytics"
          description="Generate insights on membership growth, regional distribution, and mentor performance."
        />
        <div className="flex items-center gap-3 shrink-0">
          <Select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            options={[
              { value: "membership", label: "Membership Growth" },
              { value: "regional", label: "Regional Distribution" },
              { value: "mentorship", label: "Mentorship Engagement" },
            ]}
          />
          <Select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            options={[
              { value: "all", label: "All Regions" },
              { value: "Addis Ababa", label: "Addis Ababa" },
              { value: "Dire Dawa", label: "Dire Dawa" },
              { value: "Oromia", label: "Oromia" },
              { value: "Amhara", label: "Amhara" },
            ]}
          />
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Active Members" value="1,120" trend={{ value: 14, label: "vs last quarter", isPositive: true }} />
        <StatCard label="Average Attendance" value="84%" trend={{ value: 3, label: "stable rate", isPositive: true }} />
        <StatCard label="Mentorship Match Rate" value="96%" trend={{ value: 2, label: "unassigned reduced", isPositive: true }} />
        <StatCard label="Quarterly Promotions" value="48" trend={{ value: 12, label: "higher than Q2", isPositive: true }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FloatCard className="p-6 flex flex-col gap-6 h-96 justify-between">
          <div>
            <h3 className="font-display font-semibold text-text-primary text-base">Membership Growth Trend</h3>
            <p className="text-xs text-text-muted">New registrations over the past 6 months</p>
          </div>
          {/* Mock Bar / Line Chart representation */}
          <div className="flex items-end justify-between gap-4 h-52 pt-6 border-b border-black/[0.06] pb-2 px-4 bg-black/[0.01] rounded-xl">
            {[
              { month: "May", val: 40 },
              { month: "Jun", val: 55 },
              { month: "Jul", val: 70 },
              { month: "Aug", val: 65 },
              { month: "Sep", val: 90 },
              { month: "Oct", val: 110 },
            ].map((bar) => (
              <div key={bar.month} className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                <div 
                  className="w-full bg-brand-teal/80 group-hover:bg-brand-teal transition-all rounded-t-lg relative flex items-center justify-center text-[10px] text-white font-bold shadow-sm"
                  style={{ height: `${(bar.val / 120) * 100}%` }}
                >
                  <span className="absolute -top-5 text-text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                </div>
                <span className="text-xs text-text-muted font-medium">{bar.month}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <span>Total growth: +430 members</span>
            <button className="text-brand-teal font-semibold hover:underline">Download Report CSV</button>
          </div>
        </FloatCard>

        <FloatCard className="p-6 flex flex-col gap-6 h-96 justify-between">
          <div>
            <h3 className="font-display font-semibold text-text-primary text-base">Regional Distribution</h3>
            <p className="text-xs text-text-muted">Active members breakdown across branches</p>
          </div>
          {/* Mock Progress Bars representing distribution */}
          <div className="flex flex-col gap-4 overflow-y-auto pr-2 flex-1 py-2">
            {[
              { region: "Addis Ababa", count: 540, pct: 48 },
              { region: "Oromia", count: 280, pct: 25 },
              { region: "Amhara", count: 160, pct: 14 },
              { region: "Dire Dawa", count: 90, pct: 8 },
              { region: "Hawassa", count: 50, pct: 5 },
            ].map((item) => (
              <div key={item.region} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-text-primary">{item.region}</span>
                  <span className="text-text-secondary">{item.count} members ({item.pct}%)</span>
                </div>
                <div className="w-full bg-black/[0.04] rounded-full h-2 overflow-hidden">
                  <div className="bg-brand-amber h-full rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-text-secondary pt-2 border-t border-black/[0.04]">
            <span>Top performing branch: Addis Ababa</span>
            <button className="text-brand-teal font-semibold hover:underline">Export Branch Data</button>
          </div>
        </FloatCard>
      </div>
    </div>
  );
}
