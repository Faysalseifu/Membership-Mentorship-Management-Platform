"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { useToastStore } from "@/store/toastStore";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface MentorApplication {
  id: string;
  name: string;
  email: string;
  experience: string;
  appliedAt: string;
  status: "pending" | "approved" | "rejected";
}

const initialApps: MentorApplication[] = [
  {
    id: "app_1",
    name: "Dr. Yonas B",
    email: "yonas.b@example.com",
    experience: "5 years lecturing at AAU. Former youth club lead.",
    appliedAt: "2026-05-16T10:00:00Z",
    status: "pending",
  },
  {
    id: "app_2",
    name: "Mekdes Tilahun",
    email: "mekdes.t@example.com",
    experience: "Senior software engineer with 3 years mentoring bootcamp students.",
    appliedAt: "2026-05-14T10:00:00Z",
    status: "pending",
  },
  {
    id: "app_3",
    name: "Kaleb Worku",
    email: "kaleb.w@example.com",
    experience: "Recent graduate with minimal leadership experience.",
    appliedAt: "2026-05-10T10:00:00Z",
    status: "rejected",
  },
];

export default function AdminMentorAppsPage() {
  const { addToast } = useToastStore();
  const [apps, setApps] = useState<MentorApplication[]>(initialApps);

  const handleAction = (id: string, action: "approved" | "rejected") => {
    setApps((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: action } : app))
    );

    addToast({
      type: action === "approved" ? "success" : "error",
      title: `Application ${action.charAt(0).toUpperCase() + action.slice(1)}`,
      message: `The mentor application has been successfully ${action}.`,
    });
  };

  const columns = useMemo<ColumnDef<MentorApplication>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Applicant",
        cell: (info) => (
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-text-primary truncate">{info.getValue() as string}</span>
            <span className="text-xs text-text-muted truncate">{info.row.original.email}</span>
          </div>
        ),
      },
      {
        accessorKey: "experience",
        header: "Background & Experience",
        cell: (info) => (
          <p className="text-sm text-text-secondary max-w-md line-clamp-2">{info.getValue() as string}</p>
        ),
      },
      {
        accessorKey: "appliedAt",
        header: "Applied Date",
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
        title="Mentor Applications"
        description="Review external and internal applications for mentoring positions within the platform."
      />

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={apps} />
      </FloatCard>
    </div>
  );
}
