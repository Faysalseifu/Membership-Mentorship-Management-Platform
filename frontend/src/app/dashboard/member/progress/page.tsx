"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { LevelBadge } from "@/components/ui/Badge";

export default function MemberProgressPage() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full">
      <PageHeader
        title="My Progress"
        description="Track your journey and see what you need for your next promotion."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Current Status */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <FloatCard elevated className="bg-brand-teal text-white flex flex-col gap-6 overflow-hidden relative">
            {/* Decorative background */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <p className="text-brand-teal-l font-medium mb-1">Current Status</p>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-display font-bold">Level 2</h2>
                  <span className="px-2.5 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">Active</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg">
                <span className="text-2xl font-bold font-display">L2</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-white">Progress to Level 3</span>
                <span className="text-brand-teal-l">45%</span>
              </div>
              <div className="w-full bg-black/20 rounded-full h-3 overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-xs text-brand-teal-l mt-1 opacity-80">
                You need 55 more points to qualify for the next evaluation.
              </p>
            </div>
          </FloatCard>

          <FloatCard>
            <h3 className="text-lg font-display font-semibold mb-6">Score Breakdown</h3>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <ProgressBar label="Attendance & Punctuality" value={85} color="teal" showLabel />
                <ProgressBar label="Participation" value={60} color="info" showLabel />
                <ProgressBar label="Community Contribution" value={30} color="amber" showLabel />
                <ProgressBar label="Behavior & Discipline" value={90} color="success" showLabel />
              </div>
            </div>
          </FloatCard>

          <FloatCard>
            <h3 className="text-lg font-display font-semibold mb-4">Level Timeline</h3>
            <div className="relative border-l-2 border-black/[0.05] ml-3 flex flex-col gap-8 pb-4">
              <div className="relative pl-6">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-surface-1 border-2 border-black/[0.1] flex items-center justify-center"></span>
                <div className="flex items-center gap-3 mb-1">
                  <LevelBadge level={3} className="opacity-50 grayscale" />
                  <h4 className="font-semibold text-text-primary opacity-60">Level 3</h4>
                </div>
                <p className="text-sm text-text-muted">Target promotion (Est. Dec 2026)</p>
              </div>
              <div className="relative pl-6">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-teal border-2 border-brand-teal-l shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </span>
                <div className="flex items-center gap-3 mb-1">
                  <LevelBadge level={2} />
                  <h4 className="font-semibold text-brand-teal">Level 2</h4>
                </div>
                <p className="text-sm text-text-secondary mb-1">Promoted after Q2 Evaluation</p>
                <time className="text-xs text-text-muted">July 15, 2026</time>
              </div>
              <div className="relative pl-6">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-success border-2 border-success/20 flex items-center justify-center">
                   <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div className="flex items-center gap-3 mb-1">
                  <LevelBadge level={1} className="border-success text-success" />
                  <h4 className="font-semibold text-text-primary">Level 1</h4>
                </div>
                <p className="text-sm text-text-secondary mb-1">Initial placement</p>
                <time className="text-xs text-text-muted">January 10, 2026</time>
              </div>
            </div>
          </FloatCard>
        </div>

        {/* Right Column - Checklist */}
        <div className="flex flex-col gap-6">
          <FloatCard className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/[0.04]">
              <div className="w-10 h-10 rounded-xl bg-brand-amber-l text-brand-amber flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-text-primary">Promotion Checklist</h3>
                <p className="text-xs text-text-muted">Requirements for Level 3</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-0.5 shrink-0">
                  <div className="w-5 h-5 rounded bg-brand-teal text-white flex items-center justify-center shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary line-through opacity-60">Attend 10 weekly sessions</p>
                  <p className="text-xs text-text-muted opacity-60">12/10 completed</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-0.5 shrink-0">
                  <div className="w-5 h-5 rounded bg-brand-teal text-white flex items-center justify-center shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary line-through opacity-60">Complete introductory courses</p>
                  <p className="text-xs text-text-muted opacity-60">Verified by mentor</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-0.5 shrink-0">
                  <div className="w-5 h-5 rounded border-2 border-black/[0.1] group-hover:border-brand-teal/50 transition-colors"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Participate in community service</p>
                  <p className="text-xs text-brand-amber font-medium mt-0.5">0/1 activities</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-0.5 shrink-0">
                  <div className="w-5 h-5 rounded border-2 border-black/[0.1] group-hover:border-brand-teal/50 transition-colors"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Maintain 80% attendance rate</p>
                  <p className="text-xs text-text-muted mt-0.5">Currently at 85% (Needs to be maintained until evaluation)</p>
                </div>
              </label>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.04]">
              <button disabled className="w-full h-11 rounded-xl bg-black/[0.04] text-text-muted font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Request Promotion Review
              </button>
            </div>
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
