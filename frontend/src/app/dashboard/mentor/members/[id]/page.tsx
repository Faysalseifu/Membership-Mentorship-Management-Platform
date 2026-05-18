"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatusBadge, LevelBadge, TierBadge } from "@/components/ui/Badge";
import { ActivityTimeline } from "@/components/ui/ActivityTimeline";

export default function MentorMemberDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  // Mock mentee details
  const member = {
    id: params.id,
    name: "Abdi Ahmed",
    email: "abdi.ahmed@example.com",
    phone: "+251 911 234 567",
    gender: "male",
    region: "Addis Ababa",
    status: "active" as const,
    tier: "gold" as const,
    level: 2,
    joinedAt: "2025-01-15T10:00:00Z",
  };

  const mockTimeline = [
    {
      id: "act_1",
      title: "Activity Logged: Neighborhood Clean-up",
      description: "Submitted 4 hours of community service. Verified by mentor.",
      date: "2026-10-02T10:00:00Z",
      color: "teal" as const,
    },
    {
      id: "eval_1",
      title: "Q2 Quarterly Evaluation Completed",
      description: "Scored 88% aggregate. Recommended for Level 3 preparation.",
      date: "2026-07-15T10:00:00Z",
      color: "info" as const,
    },
    {
      id: "act_2",
      title: "Workshop: Regional Leadership Seminar",
      description: "Attended full-day training seminar.",
      date: "2026-05-10T10:00:00Z",
      color: "teal" as const,
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-xl bg-surface-1 border border-black/[0.04] flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <PageHeader
            title={member.name}
            description={`Mentee ID: ${member.id} • Assigned on Jan 15, 2025`}
          />
        </div>
        <button
          onClick={() => router.push("/dashboard/mentor/evaluations")}
          className="h-10 px-4 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          Conduct Evaluation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column — Mentee Summary */}
        <div className="flex flex-col gap-6">
          <FloatCard className="p-6 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-display font-bold shadow-md">
                AA
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <LevelBadge level={member.level} />
                  <StatusBadge status={member.status} />
                </div>
                <TierBadge tier={member.tier} />
              </div>
            </div>

            <hr className="border-black/[0.04]" />

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-muted">Email</span>
                <span className="font-medium text-text-primary">{member.email}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-muted">Phone</span>
                <span className="font-medium text-text-primary">{member.phone}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-muted">Region</span>
                <span className="font-medium text-text-primary">{member.region}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-text-muted">Gender</span>
                <span className="font-medium text-text-primary capitalize">{member.gender}</span>
              </div>
            </div>
          </FloatCard>
        </div>

        {/* Right Column — Activity & Evaluation Logs */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <FloatCard className="p-8 flex flex-col gap-6">
            <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
              Mentee Activity Log & Evaluation History
            </h3>
            <ActivityTimeline events={mockTimeline} />
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
