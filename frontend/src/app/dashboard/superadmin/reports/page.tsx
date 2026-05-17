"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatCard } from "@/components/ui/StatCard";
import { Select } from "@/components/ui/Input";

export default function SuperAdminReportsPage() {
  const [timeframe, setTimeframe] = useState("year");
  const [metric, setMetric] = useState("growth");

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Global System Reports & Analytics"
          description="High-level governance reporting across all regional branches, mentor networks, and system audits."
        />
        <div className="flex items-center gap-3 shrink-0">
          <Select
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
            options={[
              { value: "growth", label: "Global Member Growth" },
              { value: "performance", label: "Branch Performance Comparison" },
              { value: "evaluations", label: "Quarterly Evaluation Averages" },
            ]}
          />
          <Select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            options={[
              { value: "month", label: "Past Month" },
              { value: "quarter", label: "Past Quarter" },
              { value: "year", label: "Past Year" },
            ]}
          />
        </div>
      </div>

      {/* Global Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Platform Users" value="1,384" trend={{ value: 18, label: "vs last year", isPositive: true }} />
        <StatCard label="Global Match Rate" value="98.2%" trend={{ value: 4, label: "improved pairing", isPositive: true }} />
        <StatCard label="Level 3 Promotions" value="142" trend={{ value: 12, label: "graduated this year", isPositive: true }} />
        <StatCard label="Active Branches" value="6" trend={{ value: 0, label: "fully operational", isPositive: true }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FloatCard className="p-6 flex flex-col gap-6 h-96 justify-between">
          <div>
            <h3 className="font-display font-semibold text-text-primary text-base">Global Membership Growth</h3>
            <p className="text-xs text-text-muted">Aggregate new member registrations across all branches</p>
          </div>
          {/* Mock Chart representation */}
          <div className="flex items-end justify-between gap-4 h-52 pt-6 border-b border-black/[0.06] pb-2 px-4 bg-black/[0.01] rounded-xl">
            {[
              { label: "Q1", val: 120 },
              { label: "Q2", val: 180 },
              { label: "Q3", val: 240 },
              { label: "Q4", val: 310 },
            ].map((bar) => (
              <div key={bar.label} className="flex flex-col items-center gap-2 flex-1 h-full justify-end group">
                <div 
                  className="w-full bg-brand-teal/80 group-hover:bg-brand-teal transition-all rounded-t-lg relative flex items-center justify-center text-xs text-white font-bold shadow-sm"
                  style={{ height: `${(bar.val / 350) * 100}%` }}
                >
                  <span className="absolute -top-6 text-text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                </div>
                <span className="text-xs text-text-muted font-medium">{bar.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-text-secondary">
            <span>Annual cumulative growth: +850 members</span>
            <button className="text-brand-teal font-semibold hover:underline">Download Global CSV</button>
          </div>
        </FloatCard>

        <FloatCard className="p-6 flex flex-col gap-6 h-96 justify-between">
          <div>
            <h3 className="font-display font-semibold text-text-primary text-base">Branch Performance Comparison</h3>
            <p className="text-xs text-text-muted">Average evaluation scoring by branch region</p>
          </div>
          {/* Mock Progress Bars representing branch averages */}
          <div className="flex flex-col gap-4 overflow-y-auto pr-2 flex-1 py-2">
            {[
              { region: "Addis Ababa", avg: 88 },
              { region: "Oromia", avg: 85 },
              { region: "Dire Dawa", avg: 82 },
              { region: "Amhara", avg: 79 },
              { region: "Hawassa", avg: 76 },
            ].map((item) => (
              <div key={item.region} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-text-primary">{item.region}</span>
                  <span className="text-text-secondary">{item.avg}% Avg Score</span>
                </div>
                <div className="w-full bg-black/[0.04] rounded-full h-2 overflow-hidden">
                  <div className="bg-brand-teal h-full rounded-full" style={{ width: `${item.avg}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-text-secondary pt-2 border-t border-black/[0.04]">
            <span>Leading branch: Addis Ababa</span>
            <button className="text-brand-teal font-semibold hover:underline">Export Branch Comparison</button>
          </div>
        </FloatCard>
      </div>
    </div>
  );
}
