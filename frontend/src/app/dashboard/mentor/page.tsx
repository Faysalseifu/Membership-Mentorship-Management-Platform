"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { FloatCard } from "@/components/ui/FloatCard";
import { AlertBanner } from "@/components/ui/AlertBanner";
import { StatusBadge, LevelBadge } from "@/components/ui/Badge";

export default function MentorDashboardPage() {
  const router = useRouter();
  const isOverloaded = true; // Simulating workload alert condition

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Mentor Dashboard"
          description="Manage your assigned mentees, conduct quarterly evaluations, and track student activities."
        />
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => router.push("/dashboard/mentor/evaluations")}
            className="h-10 px-4 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            New Evaluation
          </button>
        </div>
      </div>

      {isOverloaded && (
        <AlertBanner
          variant="warning"
          title="High Workload Alert"
          message="You are currently mentoring 14 members (Capacity: 15). Please review your pending evaluations or contact an admin if you need assistance balancing your roster."
          action={{
            label: "Request Workload Rebalance",
            onClick: () => alert("Workload rebalance request sent to Admin."),
          }}
        />
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Assigned Members"
          value="14/15"
          trend={{ value: 93, label: "of max capacity", isPositive: false }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          }
        />
        <StatCard
          label="Pending Evaluations"
          value="4"
          trend={{ value: 4, label: "due this week", isPositive: false }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          }
        />
        <StatCard
          label="Pending Activity Reviews"
          value="7"
          trend={{ value: 3, label: "submitted today", isPositive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          }
        />
        <StatCard
          label="Recommended Promotions"
          value="2"
          trend={{ value: 2, label: "awaiting admin approval", isPositive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Action Items */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <FloatCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-semibold text-text-primary">Action Required</h3>
              <button
                onClick={() => router.push("/dashboard/mentor/evaluations")}
                className="text-xs font-semibold text-brand-teal hover:underline"
              >
                View Evaluations
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-black/[0.04] bg-black/[0.01] hover:bg-surface-1 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-amber-l text-brand-amber flex items-center justify-center shrink-0 mt-0.5 font-bold font-display text-sm">
                    Q3
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">Quarterly Evaluation Due: Ahmed Ali</h4>
                    <p className="text-xs text-text-secondary">Level 2 • Last evaluated: July 15, 2026</p>
                    <span className="inline-block mt-1 text-xs text-brand-amber font-medium">Evaluation pending review</span>
                  </div>
                </div>
                <button
                  onClick={() => router.push("/dashboard/mentor/evaluations")}
                  className="px-4 py-2 rounded-xl bg-brand-teal text-white text-xs font-semibold hover:bg-brand-teal/90 transition-colors self-end sm:self-center shadow-sm"
                >
                  Start Evaluation
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-black/[0.04] bg-black/[0.01] hover:bg-surface-1 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal-l text-brand-teal flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">Activity Review: Neighborhood Clean-up</h4>
                    <p className="text-xs text-text-secondary">Submitted by <span className="font-medium text-text-primary">Sara Bekele</span> • 3 hours ago</p>
                    <span className="inline-block mt-1 text-xs text-brand-teal font-medium">Requires evidence verification</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors">Verify</button>
                  <button className="px-3 py-1.5 rounded-lg bg-danger/10 text-danger text-xs font-semibold hover:bg-danger/20 transition-colors">Request Info</button>
                </div>
              </div>
            </div>
          </FloatCard>
        </div>

        {/* Mentees Quick List */}
        <div className="flex flex-col gap-6">
          <FloatCard className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.04]">
              <div>
                <h3 className="font-display font-semibold text-text-primary">My Mentees</h3>
                <p className="text-xs text-text-muted">Assigned students</p>
              </div>
              <button
                onClick={() => router.push("/dashboard/mentor/members")}
                className="text-xs font-semibold text-brand-teal hover:underline"
              >
                View All (14)
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {[
                { id: "mem_1", name: "Ahmed Ali", level: 2, status: "active" as const, region: "Addis Ababa" },
                { id: "mem_2", name: "Sara Bekele", level: 2, status: "active" as const, region: "Addis Ababa" },
                { id: "mem_4", name: "Feven Tefera", level: 1, status: "active" as const, region: "Addis Ababa" },
                { id: "mem_5", name: "Yosef Mamo", level: 2, status: "inactive" as const, region: "Oromia" },
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => router.push(`/dashboard/mentor/members/${m.id}`)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.02] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm shadow-sm">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary group-hover:text-brand-teal transition-colors">{m.name}</h4>
                      <p className="text-xs text-text-muted">{m.region} • Level {m.level}</p>
                    </div>
                  </div>
                  <StatusBadge status={m.status} />
                </div>
              ))}
            </div>
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
