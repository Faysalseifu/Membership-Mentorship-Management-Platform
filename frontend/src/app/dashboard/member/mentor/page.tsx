"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";

export default function MemberMentorPage() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
      <PageHeader
        title="My Mentor"
        description="Connect with your assigned mentor and view your session history."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mentor Profile Card */}
        <div className="md:col-span-1">
          <FloatCard className="flex flex-col items-center text-center gap-4 p-8">
            <div className="w-24 h-24 rounded-full bg-brand-teal text-white flex items-center justify-center text-3xl font-display font-bold shadow-md">
              <span>SM</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-display font-semibold text-text-primary">Sarah Mohammed</h2>
              <p className="text-sm text-text-secondary">Senior Mentor</p>
            </div>

            <div className="flex gap-2 w-full mt-2">
              <button className="flex-1 h-10 rounded-xl bg-brand-teal text-white text-sm font-medium hover:bg-brand-teal/90 transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Contact
              </button>
              <button className="h-10 px-4 rounded-xl border border-black/[0.08] text-text-secondary hover:bg-black/[0.03] transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </button>
            </div>

            <div className="w-full flex flex-col gap-3 mt-4 pt-4 border-t border-black/[0.04] text-left">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-muted">Email</span>
                <span className="text-sm font-medium text-text-primary">sarah.m@msl.org</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-muted">Mentoring Since</span>
                <span className="text-sm font-medium text-text-primary">August 2024</span>
              </div>
            </div>
          </FloatCard>
        </div>

        {/* Session History */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <FloatCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-semibold text-text-primary">Recent Sessions</h3>
              <button className="text-sm font-medium text-brand-teal hover:underline">
                Request Meeting
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-black/[0.04] hover:border-black/[0.08] transition-colors bg-black/[0.01]">
                <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-white border border-black/[0.04] shadow-sm">
                  <span className="text-xs font-medium text-danger uppercase tracking-wider">Sep</span>
                  <span className="text-lg font-display font-bold text-text-primary">12</span>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-text-primary">Q3 Performance Review</h4>
                    <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-semibold shrink-0">Completed</span>
                  </div>
                  <p className="text-sm text-text-secondary">Discussed progress towards Level 3 and identified key areas for community contribution.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-black/[0.04] hover:border-black/[0.08] transition-colors bg-black/[0.01]">
                <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-white border border-black/[0.04] shadow-sm">
                  <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Aug</span>
                  <span className="text-lg font-display font-bold text-text-primary">05</span>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-text-primary">Check-in & Goal Setting</h4>
                    <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-semibold shrink-0">Completed</span>
                  </div>
                  <p className="text-sm text-text-secondary">Set objectives for the upcoming semester.</p>
                </div>
              </div>
            </div>
          </FloatCard>
          
          <FloatCard className="bg-brand-teal-l/30 border-brand-teal/10">
            <h3 className="text-lg font-display font-semibold text-text-primary mb-2">Mentor Feedback</h3>
            <p className="text-sm text-text-secondary italic border-l-2 border-brand-teal pl-4 py-1">
              "Ahmed has shown excellent dedication to the program. I've noted significant improvement in his public speaking skills during the last workshop. Keep up the great work towards Level 3!"
            </p>
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
