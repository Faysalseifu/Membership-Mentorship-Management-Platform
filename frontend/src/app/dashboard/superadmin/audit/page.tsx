"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Input, Select } from "@/components/ui/Input";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface AuditLog {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  action: string;
  ipAddress: string;
  category: "auth" | "user_mgmt" | "criteria_config" | "system";
}

const mockAuditLogs: AuditLog[] = [
  {
    id: "aud_1",
    timestamp: "2026-05-17T18:30:00Z",
    actor: "Faysal Seifu",
    role: "super_admin",
    action: "Modified Level 2 evaluation criteria weighting (Attendance: 30%, Participation: 40%, Discipline: 30%)",
    ipAddress: "197.156.86.22",
    category: "criteria_config",
  },
  {
    id: "aud_2",
    timestamp: "2026-05-17T17:15:00Z",
    actor: "Amanuel Kebede",
    role: "admin",
    action: "Approved promotion for Feven Tefera from Level 1 to Level 2",
    ipAddress: "197.156.86.45",
    category: "user_mgmt",
  },
  {
    id: "aud_3",
    timestamp: "2026-05-17T14:20:00Z",
    actor: "System Auto",
    role: "system",
    action: "Generated monthly regional performance reports",
    ipAddress: "127.0.0.1",
    category: "system",
  },
  {
    id: "aud_4",
    timestamp: "2026-05-17T11:05:00Z",
    actor: "Sarah Mohammed",
    role: "mentor",
    action: "Submitted Q2 evaluation for Ahmed Ali (Aggregate: 90%)",
    ipAddress: "197.156.86.12",
    category: "user_mgmt",
  },
  {
    id: "aud_5",
    timestamp: "2026-05-16T09:00:00Z",
    actor: "Dawit Tadesse",
    role: "member",
    action: "Successful user login",
    ipAddress: "197.156.88.91",
    category: "auth",
  },
];

export default function SuperAdminAuditPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredLogs = useMemo(() => {
    return mockAuditLogs.filter((log) => {
      const matchSearch = log.actor.toLowerCase().includes(search.toLowerCase()) || log.action.toLowerCase().includes(search.toLowerCase());
      const matchCat = !categoryFilter || log.category === categoryFilter;
      return matchSearch && matchCat;
    });
  }, [search, categoryFilter]);

  const columns = useMemo<ColumnDef<AuditLog>[]>(
    () => [
      {
        accessorKey: "timestamp",
        header: "Timestamp",
        cell: (info) => format(new Date(info.getValue() as string), "MMM d, yyyy HH:mm:ss"),
      },
      {
        accessorKey: "actor",
        header: "Actor & Role",
        cell: (info) => (
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-text-primary truncate">{info.getValue() as string}</span>
            <span className="text-xs text-text-muted capitalize">{(info.row.original.role).replace("_", " ")}</span>
          </div>
        ),
      },
      {
        accessorKey: "action",
        header: "Action Description",
        cell: (info) => <span className="text-sm text-text-secondary">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: (info) => {
          const cat = info.getValue() as string;
          const styles = {
            auth: "bg-info/10 text-info border-info/20",
            user_mgmt: "bg-brand-teal/10 text-brand-teal border-brand-teal/20",
            criteria_config: "bg-brand-amber/10 text-brand-amber border-brand-amber/20",
            system: "bg-surface-1 text-text-secondary border-black/[0.08]",
          };
          return (
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${styles[cat as keyof typeof styles]}`}>
              {cat.replace("_", " ").toUpperCase()}
            </span>
          );
        },
      },
      {
        accessorKey: "ipAddress",
        header: "IP Address",
        cell: (info) => <span className="text-xs font-mono text-text-muted">{info.getValue() as string}</span>,
      },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PageHeader
        title="System Audit Logs"
        description="Immutable audit trail recording all administrative actions, permission changes, and security events."
      />

      <FloatCard className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-80">
          <Input
            placeholder="Search audit logs by actor, action..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            }
          />
        </div>
        <div className="w-full sm:w-56">
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            options={[
              { value: "", label: "All Categories" },
              { value: "auth", label: "Authentication" },
              { value: "user_mgmt", label: "User Management" },
              { value: "criteria_config", label: "Criteria Configuration" },
              { value: "system", label: "System Automated" },
            ]}
          />
        </div>
      </FloatCard>

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={filteredLogs} />
      </FloatCard>
    </div>
  );
}
