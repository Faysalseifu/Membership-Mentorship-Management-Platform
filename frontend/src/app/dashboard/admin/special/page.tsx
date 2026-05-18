"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { TierBadge, LevelBadge } from "@/components/ui/Badge";
import { ColumnDef } from "@tanstack/react-table";

interface SpecialMember {
  id: string;
  name: string;
  email: string;
  tier: "silver" | "gold" | "platinum";
  level: number;
  endorsement: string;
  endorsedBy: string;
}

const mockSpecialMembers: SpecialMember[] = [
  {
    id: "mem_201",
    name: "Dr. Alim Mohammed",
    email: "alim.m@example.com",
    tier: "platinum",
    level: 3,
    endorsement: "Academic excellence and national research contribution.",
    endorsedBy: "Super Admin Board",
  },
  {
    id: "mem_202",
    name: "Prof. Kamil Ahmed",
    email: "kamil.a@example.com",
    tier: "platinum",
    level: 3,
    endorsement: "Senior community advisory and mentorship lead.",
    endorsedBy: "Executive Committee",
  },
  {
    id: "mem_203",
    name: "Huzayfa Sultan",
    email: "huzayfa.s@example.com",
    tier: "gold",
    level: 2,
    endorsement: "Outstanding regional project leadership in Dire Dawa.",
    endorsedBy: "Regional Admin",
  },
];

export default function AdminSpecialMembersPage() {
  const router = useRouter();

  const columns = useMemo<ColumnDef<SpecialMember>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Member",
        cell: (info) => (
          <div 
            onClick={() => router.push(`/dashboard/admin/members/${info.row.original.id}`)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              {(info.getValue() as string).split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-text-primary group-hover:text-brand-teal transition-colors truncate">
                {info.getValue() as string}
              </span>
              <span className="text-xs text-text-muted truncate">{info.row.original.email}</span>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "tier",
        header: "Tier",
        cell: (info) => <TierBadge tier={info.getValue() as any} />,
      },
      {
        accessorKey: "level",
        header: "Level",
        cell: (info) => <LevelBadge level={info.getValue() as number} />,
      },
      {
        accessorKey: "endorsement",
        header: "Endorsement Reason",
        cell: (info) => (
          <div className="flex flex-col min-w-0 max-w-md">
            <span className="text-sm text-text-primary truncate">{info.getValue() as string}</span>
            <span className="text-xs text-brand-teal font-medium">Endorsed by: {info.row.original.endorsedBy}</span>
          </div>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: (info) => (
          <button
            onClick={() => router.push(`/dashboard/admin/members/${info.row.original.id}`)}
            className="px-3 py-1.5 rounded-lg bg-surface-1 border border-black/[0.06] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all shadow-sm"
          >
            View Profile
          </button>
        ),
      },
    ],
    [router]
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="Special Members & Endorsements"
          description="Manage elite members endorsed for advanced academic, research, or community leadership."
        />
        <button className="h-10 px-5 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          Endorse Member
        </button>
      </div>

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={mockSpecialMembers} />
      </FloatCard>
    </div>
  );
}
