"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";

export default function MentorAlertsPage() {
  const alerts = [
    {
      id: "al_1",
      type: "warning",
      title: "Roster Capacity Reached",
      message: "You have reached your maximum mentee capacity (15/15). New member pairings have been paused.",
      date: "2 hours ago",
    },
    {
      id: "al_2",
      type: "info",
      title: "Pending Quarterly Evaluations",
      message: "You have 4 mentees awaiting Q3 evaluation scoring. Please complete them before Friday.",
      date: "1 day ago",
    },
    {
      id: "al_3",
      type: "success",
      title: "Promotion Approved: Abduse Taye",
      message: "The Admin board has approved your promotion recommendation for Abduse Taye to Level 2.",
      date: "3 days ago",
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
      <PageHeader
        title="System Alerts & Notifications"
        description="Stay updated on mentee activity submissions, workload capacity changes, and admin board decisions."
      />

      <FloatCard className="p-6 flex flex-col gap-4">
        {alerts.map((al) => {
          const styles = {
            warning: "bg-brand-amber-l/40 border-brand-amber/20 text-brand-amber",
            info: "bg-info/10 border-info/20 text-info",
            success: "bg-success/10 border-success/20 text-success",
          };

          return (
            <div key={al.id} className={`flex items-start gap-4 p-4 rounded-2xl border ${styles[al.type as keyof typeof styles]}`}>
              <div className="mt-0.5 shrink-0">
                {al.type === "warning" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                {al.type === "info" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>}
                {al.type === "success" && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-text-primary text-sm">{al.title}</h4>
                  <span className="text-xs text-text-muted shrink-0">{al.date}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{al.message}</p>
              </div>
            </div>
          );
        })}
      </FloatCard>
    </div>
  );
}
