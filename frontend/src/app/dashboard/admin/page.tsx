"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatusBadge, LevelBadge } from "@/components/ui/Badge";

export default function AdminDashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Admin Dashboard"
          description="Overview of system activities, pending approvals, and member statistics."
        />
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => router.push("/dashboard/admin/members/new")}
            className="h-10 px-4 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add Member
          </button>
          <button
            onClick={() => router.push("/dashboard/admin/mentors/assign")}
            className="h-10 px-4 bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            Assign Mentors
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Members"
          value="1,248"
          trend={{ value: 12, label: "vs last month", isPositive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          }
        />
        <StatCard
          label="Active Mentors"
          value="64"
          trend={{ value: 4, label: "new this month", isPositive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
          }
        />
        <StatCard
          label="Pending Activities"
          value="28"
          trend={{ value: 5, label: "urgent review", isPositive: false }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          }
        />
        <StatCard
          label="Pending Promotions"
          value="15"
          trend={{ value: 8, label: "resolved recently", isPositive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Actions List */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <FloatCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-semibold text-text-primary">Pending Actions</h3>
              <button 
                onClick={() => router.push("/dashboard/admin/activities")}
                className="text-xs font-semibold text-brand-teal hover:underline"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-black/[0.04] bg-black/[0.01] hover:bg-surface-1 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-amber-l text-brand-amber flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">Activity Verification: Community Clean-up</h4>
                    <p className="text-xs text-text-secondary">Submitted by <span className="font-medium text-text-primary">Ahmed Ali</span> • 2 hours ago</p>
                    <span className="inline-block mt-1 text-xs text-brand-amber font-medium">Requires evidence review</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors">Approve</button>
                  <button className="px-3 py-1.5 rounded-lg bg-danger/10 text-danger text-xs font-semibold hover:bg-danger/20 transition-colors">Reject</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-black/[0.04] bg-black/[0.01] hover:bg-surface-1 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal-l text-brand-teal flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">Promotion Request: Level 2 to Level 3</h4>
                    <p className="text-xs text-text-secondary">Submitted by <span className="font-medium text-text-primary">Sara Bekele</span> • 1 day ago</p>
                    <span className="inline-block mt-1 text-xs text-brand-teal font-medium">All checklist items completed</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors">Review</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-black/[0.04] bg-black/[0.01] hover:bg-surface-1 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-info/10 text-info flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">Unassigned Member: Dawit Tadesse</h4>
                    <p className="text-xs text-text-secondary">Joined 3 days ago • Region: Dire Dawa</p>
                    <span className="inline-block mt-1 text-xs text-info font-medium">Needs mentor assignment</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button 
                    onClick={() => router.push("/dashboard/admin/mentors/assign")}
                    className="px-3 py-1.5 rounded-lg bg-brand-teal text-white text-xs font-semibold hover:bg-brand-teal/90 transition-colors"
                  >
                    Assign Mentor
                  </button>
                </div>
              </div>
            </div>
          </FloatCard>
        </div>

        {/* Recent Member Additions */}
        <div className="flex flex-col gap-6">
          <FloatCard className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.04]">
              <div>
                <h3 className="font-display font-semibold text-text-primary">Recent Members</h3>
                <p className="text-xs text-text-muted">Newly registered in the platform</p>
              </div>
              <button 
                onClick={() => router.push("/dashboard/admin/members")}
                className="text-xs font-semibold text-brand-teal hover:underline"
              >
                All Members
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div 
                onClick={() => router.push("/dashboard/admin/members/mem_1")}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.02] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm">
                    DT
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-brand-teal transition-colors">Dawit Tadesse</h4>
                    <p className="text-xs text-text-muted">Dire Dawa • Joined 3d ago</p>
                  </div>
                </div>
                <StatusBadge status="pending" />
              </div>

              <div 
                onClick={() => router.push("/dashboard/admin/members/mem_2")}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.02] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm">
                    FT
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-brand-teal transition-colors">Feven Tefera</h4>
                    <p className="text-xs text-text-muted">Addis Ababa • Joined 5d ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LevelBadge level={1} />
                  <StatusBadge status="active" />
                </div>
              </div>

              <div 
                onClick={() => router.push("/dashboard/admin/members/mem_3")}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.02] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm">
                    YM
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-brand-teal transition-colors">Yosef Mamo</h4>
                    <p className="text-xs text-text-muted">Hawassa • Joined 1w ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LevelBadge level={2} />
                  <StatusBadge status="active" />
                </div>
              </div>
            </div>
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
