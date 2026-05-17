"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { FloatCard } from "@/components/ui/FloatCard";

export default function MemberDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Welcome back, User"
        description="Here is your current membership status and upcoming activities."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="Current Level"
          value="Level 2"
          trend={{ value: 45, label: "to Level 3", isPositive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          }
        />
        <StatCard
          label="Total Activities"
          value="14"
          trend={{ value: 2, label: "this month", isPositive: true }}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          }
        />
        <StatCard
          label="Next Evaluation"
          value="Oct 15"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FloatCard className="flex flex-col gap-4">
          <h3 className="font-display font-semibold text-lg text-text-primary">Recent Activities</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 py-2 border-b border-black/[0.04] last:border-0">
              <div className="w-10 h-10 rounded-lg bg-brand-teal-l flex items-center justify-center text-brand-teal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-text-primary text-sm">Monthly Report Submitted</h4>
                <p className="text-text-muted text-xs">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2 border-b border-black/[0.04] last:border-0">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center text-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-text-primary text-sm">Mentor Meeting</h4>
                <p className="text-text-muted text-xs">1 week ago</p>
              </div>
            </div>
          </div>
        </FloatCard>
        
        <FloatCard className="flex flex-col gap-4 bg-brand-teal text-white">
          <h3 className="font-display font-semibold text-lg text-white">Next Steps</h3>
          <p className="text-brand-teal-l text-sm mb-4">
            You are 45% of the way to Level 3. Complete these tasks to be eligible for promotion.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-white/20 p-1">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">Submit community service proof</span>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <div className="mt-0.5 rounded-full border border-white/40 p-1 w-5 h-5"></div>
              <span className="text-sm">Attend 2 more skill workshops</span>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <div className="mt-0.5 rounded-full border border-white/40 p-1 w-5 h-5"></div>
              <span className="text-sm">Complete Q3 Evaluation</span>
            </li>
          </ul>
        </FloatCard>
      </div>
    </div>
  );
}
