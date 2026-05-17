"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { LevelBadge } from "@/components/ui/Badge";
import { useToastStore } from "@/store/toastStore";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface AdminPromotion {
  id: string;
  memberName: string;
  email: string;
  currentLevel: number;
  targetLevel: number;
  requestedAt: string;
  mentorName: string;
  status: "pending" | "approved" | "rejected";
}

const initialPromotions: AdminPromotion[] = [
  {
    id: "promo_1",
    memberName: "Sara Bekele",
    email: "sara.b@example.com",
    currentLevel: 2,
    targetLevel: 3,
    requestedAt: "2026-05-15T10:00:00Z",
    mentorName: "Sarah Mohammed",
    status: "pending",
  },
  {
    id: "promo_2",
    memberName: "Bereket Alemu",
    email: "bereket.a@example.com",
    currentLevel: 1,
    targetLevel: 2,
    requestedAt: "2026-05-14T10:00:00Z",
    mentorName: "Amanuel Kebede",
    status: "pending",
  },
  {
    id: "promo_3",
    memberName: "Feven Tefera",
    email: "feven.t@example.com",
    currentLevel: 1,
    targetLevel: 2,
    requestedAt: "2026-05-10T10:00:00Z",
    mentorName: "Amanuel Kebede",
    status: "approved",
  },
];

export default function AdminPromotionsPage() {
  const { addToast } = useToastStore();
  const [promotions, setPromotions] = useState<AdminPromotion[]>(initialPromotions);

  const handleAction = (id: string, action: "approved" | "rejected") => {
    setPromotions((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: action } : p))
    );

    addToast({
      type: action === "approved" ? "success" : "error",
      title: `Promotion ${action.charAt(0).toUpperCase() + action.slice(1)}`,
      message: `The promotion request has been successfully ${action}.`,
    });
  };

  const columns = useMemo<ColumnDef<AdminPromotion>[]>(
    () => [
      {
        accessorKey: "memberName",
        header: "Member",
        cell: (info) => (
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-text-primary truncate">{info.getValue() as string}</span>
            <span className="text-xs text-text-muted truncate">{info.row.original.email}</span>
          </div>
        ),
      },
      {
        id: "level_change",
        header: "Promotion",
        cell: (info) => (
          <div className="flex items-center gap-2">
            <LevelBadge level={info.row.original.currentLevel} />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            <LevelBadge level={info.row.original.targetLevel} />
          </div>
        ),
      },
      {
        accessorKey: "mentorName",
        header: "Recommending Mentor",
        cell: (info) => <span className="text-sm text-text-secondary">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "requestedAt",
        header: "Requested Date",
        cell: (info) => format(new Date(info.getValue() as string), "MMM d, yyyy"),
      },
      {
        accessorKey: "status",
        header: "Status",
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
        id: "actions",
        header: "Actions",
        cell: (info) => {
          if (info.row.original.status !== "pending") {
            return <span className="text-xs text-text-muted italic">Resolved</span>;
          }
          return (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleAction(info.row.original.id, "approved")}
                className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold hover:bg-success/20 transition-colors shadow-sm"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction(info.row.original.id, "rejected")}
                className="px-3 py-1.5 rounded-lg bg-danger/10 text-danger text-xs font-semibold hover:bg-danger/20 transition-colors shadow-sm"
              >
                Reject
              </button>
            </div>
          );
        },
      },
    ],
    [handleAction]
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PageHeader
        title="Promotion Approvals"
        description="Review level promotion recommendations submitted by mentors after quarterly member evaluations."
      />

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={promotions} />
      </FloatCard>
    </div>
  );
}
