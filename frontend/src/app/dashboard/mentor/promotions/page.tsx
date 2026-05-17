"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { LevelBadge } from "@/components/ui/Badge";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface MentorPromotionStatus {
  id: string;
  memberName: string;
  currentLevel: number;
  targetLevel: number;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  adminFeedback?: string;
}

const mockPromotions: MentorPromotionStatus[] = [
  {
    id: "p_1",
    memberName: "Ahmed Ali",
    currentLevel: 2,
    targetLevel: 3,
    submittedAt: "2026-07-15T10:00:00Z",
    status: "pending",
  },
  {
    id: "p_2",
    memberName: "Sara Bekele",
    currentLevel: 1,
    targetLevel: 2,
    submittedAt: "2026-05-10T10:00:00Z",
    status: "approved",
    adminFeedback: "Excellent attendance and workshop participation.",
  },
  {
    id: "p_3",
    memberName: "Yosef Mamo",
    currentLevel: 1,
    targetLevel: 2,
    submittedAt: "2026-04-12T10:00:00Z",
    status: "rejected",
    adminFeedback: "Community service requirement not met. Re-evaluate next quarter.",
  },
];

export default function MentorPromotionsPage() {
  const [promotions] = useState<MentorPromotionStatus[]>(mockPromotions);

  const columns = useMemo<ColumnDef<MentorPromotionStatus>[]>(
    () => [
      {
        accessorKey: "memberName",
        header: "Mentee Name",
        cell: (info) => <span className="font-semibold text-text-primary">{info.getValue() as string}</span>,
      },
      {
        id: "level_progression",
        header: "Requested Progression",
        cell: (info) => (
          <div className="flex items-center gap-2">
            <LevelBadge level={info.row.original.currentLevel} />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            <LevelBadge level={info.row.original.targetLevel} />
          </div>
        ),
      },
      {
        accessorKey: "submittedAt",
        header: "Submission Date",
        cell: (info) => format(new Date(info.getValue() as string), "MMM d, yyyy"),
      },
      {
        accessorKey: "status",
        header: "Approval Status",
        cell: (info) => {
          const status = info.getValue() as string;
          const styles = {
            approved: "bg-success/10 text-success border-success/20",
            pending: "bg-brand-amber/10 text-brand-amber border-brand-amber/20",
            rejected: "bg-danger/10 text-danger border-danger/20",
          };
          return (
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${styles[status as keyof typeof styles]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          );
        },
      },
      {
        accessorKey: "adminFeedback",
        header: "Admin Feedback",
        cell: (info) => (
          <span className="text-sm text-text-secondary italic">
            {(info.getValue() as string) || "Pending board review"}
          </span>
        ),
      },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PageHeader
        title="Promotion Recommendations"
        description="Track the status of level advancement requests submitted to the Admin board."
      />

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={promotions} />
      </FloatCard>
    </div>
  );
}
