"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";
import { ColumnDef } from "@tanstack/react-table";

interface SystemUser {
  id: string;
  name: string;
  email: string;
  role: "super_admin" | "admin" | "mentor" | "member";
  region: string;
}

const initialUsers: SystemUser[] = [
  { id: "usr_1", name: "Faysal Seifu", email: "faysal@msl.org", role: "super_admin", region: "Global" },
  { id: "usr_2", name: "Sarah Mohammed", email: "sarah.m@msl.org", role: "mentor", region: "Addis Ababa" },
  { id: "usr_3", name: "Amanuel Kebede", email: "amanuel.k@msl.org", role: "admin", region: "Addis Ababa" },
  { id: "usr_4", name: "Fatima Noor", email: "fatima.n@msl.org", role: "mentor", region: "Dire Dawa" },
  { id: "usr_5", name: "Ahmed Ali", email: "ahmed.ali@example.com", role: "member", region: "Addis Ababa" },
];

const permissionMatrix = [
  { perm: "Access Super Admin Governance Tools", super_admin: true, admin: false, mentor: false, member: false },
  { perm: "Manage All Platform Users & Roles", super_admin: true, admin: false, mentor: false, member: false },
  { perm: "Configure Level Evaluation Criteria", super_admin: true, admin: false, mentor: false, member: false },
  { perm: "Manage Regional Member Rosters", super_admin: true, admin: true, mentor: false, member: false },
  { perm: "Assign Mentors to Unassigned Members", super_admin: true, admin: true, mentor: false, member: false },
  { perm: "Schedule & Verify Platform Activities", super_admin: true, admin: true, mentor: false, member: false },
  { perm: "Conduct Quarterly Mentee Evaluations", super_admin: true, admin: true, mentor: true, member: false },
  { perm: "Recommend Members for Promotion", super_admin: true, admin: true, mentor: true, member: false },
  { perm: "Log Activities & Track Personal Progress", super_admin: true, admin: true, mentor: true, member: true },
];

export default function SuperAdminRolesPage() {
  const { addToast } = useToastStore();
  const [users, setUsers] = useState<SystemUser[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<SystemUser | null>(null);
  const [newRole, setNewRole] = useState<SystemUser["role"]>("member");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"users" | "matrix">("users");

  const handleOpenModal = (user: SystemUser) => {
    setSelectedUser(user);
    setNewRole(user.role);
  };

  const handleSubmitRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    setUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? { ...u, role: newRole } : u))
    );

    addToast({
      type: "success",
      title: "Role Modified",
      message: `Successfully updated ${selectedUser.name}'s permission role to "${newRole}".`,
    });

    setSelectedUser(null);
  };

  const columns = useMemo<ColumnDef<SystemUser>[]>(
    () => [
      {
        accessorKey: "name",
        header: "User",
        cell: (info) => (
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
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
        accessorKey: "region",
        header: "Branch Region",
        cell: (info) => <span className="text-sm text-text-secondary">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "role",
        header: "Permission Role",
        cell: (info) => {
          const role = info.getValue() as string;
          const styles = {
            super_admin: "bg-danger/10 text-danger border-danger/20",
            admin: "bg-brand-amber/10 text-brand-amber border-brand-amber/20",
            mentor: "bg-brand-teal/10 text-brand-teal border-brand-teal/20",
            member: "bg-surface-1 text-text-secondary border-black/[0.08]",
          };
          return (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border shadow-sm ${styles[role as keyof typeof styles]}`}>
              {role.replace("_", " ").toUpperCase()}
            </span>
          );
        },
      },
      {
        id: "actions",
        header: "Actions",
        cell: (info) => (
          <button
            onClick={() => handleOpenModal(info.row.original)}
            className="px-3 py-1.5 rounded-lg bg-surface-1 border border-black/[0.06] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all shadow-sm"
          >
            Modify Role
          </button>
        ),
      },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="Role-Based Access Control & Permissions"
          description="Manage system users, assign administrative roles, and inspect the global permission matrix."
        />
        <div className="flex items-center gap-2 p-1 bg-black/[0.04] rounded-xl shrink-0 self-start sm:self-center">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "users" ? "bg-white text-brand-teal shadow-sm" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            User Roles Table
          </button>
          <button
            onClick={() => setActiveTab("matrix")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "matrix" ? "bg-white text-brand-teal shadow-sm" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Permission Matrix
          </button>
        </div>
      </div>

      {activeTab === "users" ? (
        <FloatCard className="p-0 overflow-hidden">
          <DataTable columns={columns} data={users} />
        </FloatCard>
      ) : (
        <FloatCard className="p-0 overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-black/[0.04] bg-black/[0.02]">
                <th className="p-4 text-xs font-semibold text-text-muted uppercase tracking-wider">System Capability / Permission</th>
                <th className="p-4 text-xs font-semibold text-danger uppercase tracking-wider text-center">Super Admin</th>
                <th className="p-4 text-xs font-semibold text-brand-amber uppercase tracking-wider text-center">Admin</th>
                <th className="p-4 text-xs font-semibold text-brand-teal uppercase tracking-wider text-center">Mentor</th>
                <th className="p-4 text-xs font-semibold text-text-secondary uppercase tracking-wider text-center">Member</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.04]">
              {permissionMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-black/[0.01] transition-colors">
                  <td className="p-4 text-sm font-medium text-text-primary">{row.perm}</td>
                  <td className="p-4 text-center">
                    {row.super_admin ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-danger shadow-sm" /> : <span className="text-text-muted">-</span>}
                  </td>
                  <td className="p-4 text-center">
                    {row.admin ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-amber shadow-sm" /> : <span className="text-text-muted">-</span>}
                  </td>
                  <td className="p-4 text-center">
                    {row.mentor ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-teal shadow-sm" /> : <span className="text-text-muted">-</span>}
                  </td>
                  <td className="p-4 text-center">
                    {row.member ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-success shadow-sm" /> : <span className="text-text-muted">-</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FloatCard>
      )}

      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)} title="Modify User Permission Role">
        {selectedUser && (
          <form onSubmit={handleSubmitRole} className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-text-primary">{selectedUser.name}</span>
              <span className="text-xs text-text-muted">{selectedUser.email} • Region: {selectedUser.region}</span>
            </div>

            <Select
              label="Assign Permission Role"
              name="role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value as any)}
              options={[
                { value: "super_admin", label: "Super Admin (Full Global Governance)" },
                { value: "admin", label: "Admin (Regional Roster & Activity Management)" },
                { value: "mentor", label: "Mentor (Student Evaluations & Mentoring)" },
                { value: "member", label: "Member (Base Student Access)" },
              ]}
            />

            <div className="flex justify-end gap-3 pt-4 border-t border-black/[0.04]">
              <button type="button" onClick={() => setSelectedUser(null)} className="h-10 px-5 rounded-xl border border-black/[0.08] text-text-secondary hover:bg-black/[0.03] transition-colors text-sm font-medium">
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
