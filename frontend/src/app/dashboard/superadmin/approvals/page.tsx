"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { LevelBadge } from "@/components/ui/Badge";
import { useToastStore } from "@/store/toastStore";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface OverrideRequest {
  id: string;
  memberName: string;
  requestedBy: string;
  role: string;
  overrideType: string;
  reason: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
}

const mockOverrides: OverrideRequest[] = [
  {
    id: "ovr_1",
    memberName: "Dawit Tadesse",
    requestedBy: "Amanuel Kebede",
    role: "admin",
    overrideType: "Direct Level 2 Placement (Bypassing Min Points)",
    reason: "Prior extensive experience in regional youth association leadership.",
    submittedAt: "2026-05-16T14:30:00Z",
    status: "pending",
  },
  {
    id: "ovr_2",
    memberName: "Yosef Mamo",
    requestedBy: "Sarah Mohammed",
    role: "mentor",
    overrideType: "Attendance Requirement Waiver",
    reason: "Documented medical leave during Q2 workshop series.",
    submittedAt: "2026-05-15T11:00:00Z",
    status: "pending",
  },
  {
    id: "ovr_3",
    memberName: "Hana Assefa",
    requestedBy: "Faysal Seifu",
    role: "super_admin",
    overrideType: "Alumni Status Reinstatement",
    reason: "Returning from abroad to serve as active guest lecturer.",
    submittedAt: "2026-05-10T09:00:00Z",
    status: "approved",
  },
];

export default function SuperAdminApprovalsPage() {
  const { addToast } = useToastStore();
  const [overrides, setOverrides] = useState<OverrideRequest[]>(mockOverrides);

  const handleAction = (id: string, action: "approved" | "rejected") => {
    setOverrides((prev) =>
      prev.map((ov) => (ov.id === id ? { ...ov, status: action } : ov))
    );

    addToast({
      type: action === "approved" ? "success" : "error",
      title: `Override ${action.charAt(0).toUpperCase() + action.slice(1)}`,
      message: `The governance override request has been successfully ${action}.`,
    });
  };

  const columns = useMemo<ColumnDef<OverrideRequest>[]>(
    () => [
      {
        accessorKey: "memberName",
        header: "Target Member",
        cell: (info) => <span className="font-semibold text-text-primary">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "overrideType",
        header: "Requested Override",
        cell: (info) => (
          <div className="flex flex-col min-w-0 max-w-md">
            <span className="font-medium text-text-primary truncate">{info.getValue() as string}</span>
            <span className="text-xs text-text-secondary line-clamp-2 mt-0.5">{info.row.original.reason}</span>
          </div>
        ),
      },
      {
        accessorKey: "requestedBy",
        header: "Requested By",
        cell: (info) => (
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-text-primary truncate">{info.getValue() as string}</span>
            <span className="text-xs text-brand-teal capitalize">{(info.row.original.role).replace("_", " ")}</span>
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
        title="Super Admin Governance Override Queue"
        description="Review and adjudicate exceptional policy waiver requests and direct placement overrides submitted by regional admins."
      />

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={overrides} />
      </FloatCard>
    </div>
  );
}
