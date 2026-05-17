"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Activity } from "@/types";

const mockActivities: Activity[] = [
  {
    id: "act_1",
    memberId: "2",
    type: "workshop",
    title: "Leadership Workshop",
    description: "Attended the regional leadership training seminar.",
    date: "2026-09-15T10:00:00Z",
    status: "approved",
    createdAt: "2026-09-16T10:00:00Z",
  },
  {
    id: "act_2",
    memberId: "2",
    type: "community_service",
    title: "Neighborhood Clean-up",
    date: "2026-10-02T08:00:00Z",
    status: "pending",
    createdAt: "2026-10-03T10:00:00Z",
  },
  {
    id: "act_3",
    memberId: "2",
    type: "meeting",
    title: "Monthly General Assembly",
    date: "2026-08-20T14:00:00Z",
    status: "approved",
    createdAt: "2026-08-21T10:00:00Z",
  },
  {
    id: "act_4",
    memberId: "2",
    type: "training",
    title: "Incomplete Project Submission",
    date: "2026-07-10T09:00:00Z",
    status: "rejected",
    createdAt: "2026-07-12T10:00:00Z",
  },
];

export default function MemberActivitiesPage() {
  const router = useRouter();

  const columns = useMemo<ColumnDef<Activity>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Activity",
        cell: (info) => (
          <div className="flex flex-col">
            <span className="font-medium text-text-primary">{info.getValue() as string}</span>
            <span className="text-xs text-text-muted capitalize">{(info.row.original.type).replace("_", " ")}</span>
          </div>
        ),
      },
      {
        accessorKey: "date",
        header: "Date",
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
    ],
    []
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="Activities"
          description="Log and track your participation in events, workshops, and community service."
        />
        <button
          onClick={() => router.push("/dashboard/member/activities/new")}
          className="h-10 px-5 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Log Activity
        </button>
      </div>

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={mockActivities} />
      </FloatCard>
    </div>
  );
}
