"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatusBadge, LevelBadge, TierBadge } from "@/components/ui/Badge";
import { ActivityTimeline } from "@/components/ui/ActivityTimeline";

export default function AdminMemberDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  // Mock member details
  const member = {
    id: params.id,
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    phone: "+251 911 234 567",
    gender: "male",
    region: "Addis Ababa",
    status: "active" as const,
    tier: "gold" as const,
    level: 2,
    mentorName: "Sarah Mohammed",
    joinedAt: "2025-01-15T10:00:00Z",
    notes: "Highly active participant in regional workshops. Outstanding discipline.",
  };

  const mockTimeline = [
    {
      id: "ev_1",
      title: "Promoted to Level 2",
      description: "Successfully completed Q2 evaluation with an aggregate score of 88%.",
      date: "2026-07-15T10:00:00Z",
      color: "teal" as const,
    },
    {
      id: "ev_2",
      title: "Activity Verified: Leadership Workshop",
      description: "Attended the regional leadership training seminar.",
      date: "2026-09-15T10:00:00Z",
      color: "info" as const,
    },
    {
      id: "ev_3",
      title: "Joined Platform",
      description: "Assigned to Level 1 and paired with mentor Sarah Mohammed.",
      date: "2025-01-15T10:00:00Z",
      color: "muted" as const,
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
            description={`Member ID: ${member.id} • Registered on Jan 15, 2025`}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 px-4 rounded-xl bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors text-sm font-medium shadow-sm">
            Edit Member
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column — Member Summary & Mentor Card */}
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

            {member.notes && (
              <div className="p-4 rounded-xl bg-brand-amber-l/40 border border-brand-amber/20 flex flex-col gap-1">
                <span className="text-xs font-semibold text-brand-amber uppercase tracking-wider">Admin Notes</span>
                <p className="text-xs text-text-secondary leading-relaxed">{member.notes}</p>
              </div>
            )}
          </FloatCard>

          <FloatCard className="p-6 flex flex-col gap-4">
            <h3 className="font-display font-semibold text-text-primary text-base">Assigned Mentor</h3>
            <div className="flex items-center gap-4 p-3 rounded-xl bg-black/[0.02] border border-black/[0.04]">
              <div className="w-12 h-12 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold font-display text-base shadow-sm">
                SM
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-semibold text-text-primary truncate">{member.mentorName}</span>
                <span className="text-xs text-text-muted truncate">sarah.m@msl.org</span>
              </div>
            </div>
            <button 
              onClick={() => router.push("/dashboard/admin/mentors/assign")}
              className="w-full h-10 rounded-xl border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors text-sm font-medium shadow-sm"
            >
              Reassign Mentor
            </button>
          </FloatCard>
        </div>

        {/* Right Column — Activity Timeline & History */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <FloatCard className="p-8 flex flex-col gap-6">
            <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
              Activity & Level Timeline
            </h3>
            <ActivityTimeline events={mockTimeline} />
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
