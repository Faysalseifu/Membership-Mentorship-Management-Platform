"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Input";
import { StatusBadge, LevelBadge } from "@/components/ui/Badge";
import { useToastStore } from "@/store/toastStore";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface AlumniMember {
  id: string;
  name: string;
  email: string;
  graduatedAt: string;
  level: number;
  currentRole: string;
}

const initialAlumni: AlumniMember[] = [
  {
    id: "alum_1",
    name: "Maryam Ahmed",
    email: "maryam.a@example.com",
    graduatedAt: "2024-03-12T10:00:00Z",
    level: 3,
    currentRole: "Alumni (General)",
  },
  {
    id: "alum_2",
    name: "Ezadin Muzemil",
    email: "ezadin.m@example.com",
    graduatedAt: "2023-11-05T10:00:00Z",
    level: 3,
    currentRole: "Guest Lecturer / Advisor",
  },
  {
    id: "alum_3",
    name: "Khadija Omar",
    email: "khadija.o@example.com",
    graduatedAt: "2025-01-20T10:00:00Z",
    level: 3,
    currentRole: "Active Mentor",
  },
];

export default function AdminAlumniPage() {
  const { addToast } = useToastStore();
  const [alumni, setAlumni] = useState<AlumniMember[]>(initialAlumni);
  const [selectedAlum, setSelectedAlum] = useState<AlumniMember | null>(null);
  const [newRole, setNewRole] = useState("Active Mentor");
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (alum: AlumniMember) => {
    setSelectedAlum(alum);
    setNewRole(alum.currentRole);
  };

  const handleSubmitRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAlum) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    setAlumni((prev) =>
      prev.map((a) => (a.id === selectedAlum.id ? { ...a, currentRole: newRole } : a))
    );

    addToast({
      type: "success",
      title: "Role Updated",
      message: `Successfully updated role for ${selectedAlum.name} to "${newRole}".`,
    });

    setSelectedAlum(null);
  };

  const columns = useMemo<ColumnDef<AlumniMember>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Alumni Member",
        cell: (info) => (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-info/10 text-info flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              {(info.getValue() as string).split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-text-primary truncate">{info.getValue() as string}</span>
              <span className="text-xs text-text-muted truncate">{info.row.original.email}</span>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "level",
        header: "Graduated Level",
        cell: (info) => <LevelBadge level={info.getValue() as number} />,
      },
      {
        accessorKey: "graduatedAt",
        header: "Graduation Date",
        cell: (info) => format(new Date(info.getValue() as string), "MMM d, yyyy"),
      },
      {
        accessorKey: "currentRole",
        header: "Platform Role",
        cell: (info) => (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface-1 border border-black/[0.08] text-text-primary shadow-sm">
            {info.getValue() as string}
          </span>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: (info) => (
          <button
            onClick={() => handleOpenModal(info.row.original)}
            className="px-3 py-1.5 rounded-lg bg-surface-1 border border-black/[0.06] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all shadow-sm"
          >
            Assign Role
          </button>
        ),
      },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PageHeader
        title="Alumni Directory & Roles"
        description="Maintain engagement with graduated Level 3 members by assigning advisory, guest lecturing, or active mentoring roles."
      />

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={alumni} />
      </FloatCard>

      <Modal isOpen={!!selectedAlum} onClose={() => setSelectedAlum(null)} title="Assign Alumni Role">
        {selectedAlum && (
          <form onSubmit={handleSubmitRole} className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-text-primary">{selectedAlum.name}</span>
              <span className="text-xs text-text-muted">{selectedAlum.email} • Graduated Level {selectedAlum.level}</span>
            </div>

            <Select
              label="Assign Platform Role"
              name="role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              options={[
                { value: "Alumni (General)", label: "Alumni (General)" },
                { value: "Guest Lecturer / Advisor", label: "Guest Lecturer / Advisor" },
                { value: "Active Mentor", label: "Active Mentor" },
                { value: "Regional Ambassador", label: "Regional Ambassador" },
              ]}
            />

            <div className="flex justify-end gap-3 pt-4 border-t border-black/[0.04]">
              <button type="button" onClick={() => setSelectedAlum(null)} className="h-10 px-5 rounded-xl border border-black/[0.08] text-text-secondary hover:bg-black/[0.03] transition-colors text-sm font-medium">
                Cancel
              </button>
              <button type="submit" disabled={loading} className="h-10 px-6 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[120px] shadow-sm">
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  "Save Role"
                )}
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
