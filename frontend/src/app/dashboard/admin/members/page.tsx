"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { FilterBar } from "@/components/ui/Navigation";
import { StatusBadge, LevelBadge } from "@/components/ui/Badge";
import { Input, Select } from "@/components/ui/Input";
import { ColumnDef } from "@tanstack/react-table";
import { Member } from "@/types";

const mockMembers: Member[] = [
  {
    id: "mem_1",
    name: "Abdi Ahmed",
    email: "abdi.ahmed@example.com",
    phone: "+251 911 234 567",
    gender: "male",
    region: "Addis Ababa",
    status: "active",
    level: 2,
    mentorName: "Ustaz Yunus Mohammed",
    joinedAt: "2025-01-15T10:00:00Z",
  },
  {
    id: "mem_2",
    name: "Abduse Taye",
    email: "abduse.t@example.com",
    phone: "+251 912 345 678",
    gender: "male",
    region: "Addis Ababa",
    status: "active",
    level: 2,
    mentorName: "Ustaz Yunus Mohammed",
    joinedAt: "2025-02-20T10:00:00Z",
  },
  {
    id: "mem_3",
    name: "Amir Menu",
    email: "amir.m@example.com",
    phone: "+251 913 456 789",
    gender: "male",
    region: "Dire Dawa",
    status: "pending",
    level: 1,
    joinedAt: "2026-05-14T10:00:00Z",
  },
  {
    id: "mem_4",
    name: "Ezadin Muzemil",
    email: "ezadin.m@example.com",
    phone: "+251 914 567 890",
    gender: "male",
    region: "Addis Ababa",
    status: "active",
    level: 1,
    mentorName: "Ustaz Musab Ibrahim",
    joinedAt: "2026-05-12T10:00:00Z",
  },
  {
    id: "mem_5",
    name: "Huzayfa Sultan",
    email: "huzayfa.s@example.com",
    phone: "+251 915 678 901",
    gender: "male",
    region: "Oromia",
    status: "inactive",
    level: 2,
    mentorName: "Ustaz Abdulmejid Jemal",
    joinedAt: "2025-06-10T10:00:00Z",
  },
  {
    id: "mem_6",
    name: "Faysal Seifu",
    email: "faysal.s@example.com",
    phone: "+251 916 789 012",
    gender: "male",
    region: "Amhara",
    status: "alumni",
    level: 3,
    joinedAt: "2024-03-12T10:00:00Z",
  },
];

export default function AdminMembersPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [levelFilter, setLevelFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const handleStatusToggle = (id: string) => {
    setStatusFilter((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredMembers = useMemo(() => {
    return mockMembers.filter((m) => {
      const matchSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.email.toLowerCase().includes(search.toLowerCase()) ||
        (m.phone && m.phone.includes(search));
      const matchStatus = statusFilter.length === 0 || statusFilter.includes(m.status);
      const matchLevel = !levelFilter || m.level === Number(levelFilter);
      const matchRegion = !regionFilter || m.region === regionFilter;
      const matchGender = !genderFilter || m.gender === genderFilter;
      return matchSearch && matchStatus && matchLevel && matchRegion && matchGender;
    });
  }, [search, statusFilter, levelFilter, regionFilter, genderFilter]);

  const handleExport = () => {
    const csvContent = [
      ["ID", "Name", "Email", "Phone", "Gender", "Region", "Status", "Level", "Mentor"],
      ...filteredMembers.map((m) => [
        m.id,
        m.name,
        m.email,
        m.phone || "",
        m.gender,
        m.region,
        m.status,
        `Level ${m.level}`,
        m.mentorName || "Unassigned",
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `members_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = useMemo<ColumnDef<Member>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Member",
        cell: (info) => (
          <div 
            onClick={() => router.push(`/dashboard/admin/members/${info.row.original.id}`)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm shrink-0">
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
        accessorKey: "level",
        header: "Level",
        cell: (info) => <LevelBadge level={info.getValue() as number} />,
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info) => <StatusBadge status={info.getValue() as any} />,
      },
      {
        accessorKey: "region",
        header: "Region",
        cell: (info) => <span className="text-sm text-text-secondary">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "mentorName",
        header: "Mentor",
        cell: (info) => (
          <span className="text-sm text-text-secondary">
            {(info.getValue() as string) || <span className="text-brand-amber font-medium">Unassigned</span>}
          </span>
        ),
      },
      {
        id: "actions",
        header: "Actions",
        cell: (info) => (
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push(`/dashboard/admin/members/${info.row.original.id}`)}
              className="px-3 py-1.5 rounded-lg bg-surface-1 border border-black/[0.06] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all"
            >
              View Profile
            </button>
          </div>
        ),
      },
    ],
    [router]
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="Members Management"
          description="View, filter, search, and export all registered members in the platform."
        />
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleExport}
            className="h-10 px-4 bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Export CSV
          </button>
          <button
            onClick={() => router.push("/dashboard/admin/members/new")}
            className="h-10 px-4 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add Member
          </button>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <FloatCard className="p-6 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="w-full lg:w-72">
            <Input
              placeholder="Search members by name, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              }
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="w-40">
              <Select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                options={[
                  { value: "", label: "All Levels" },
                  { value: "1", label: "Level 1" },
                  { value: "2", label: "Level 2" },
                  { value: "3", label: "Level 3" },
                ]}
              />
            </div>
            <div className="w-40">
              <Select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                options={[
                  { value: "", label: "All Regions" },
                  { value: "Addis Ababa", label: "Addis Ababa" },
                  { value: "Dire Dawa", label: "Dire Dawa" },
                  { value: "Oromia", label: "Oromia" },
                  { value: "Amhara", label: "Amhara" },
                ]}
              />
            </div>
            <div className="w-36">
              <Select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                options={[
                  { value: "", label: "All Genders" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-black/[0.04]">
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Filter Status:</span>
          <FilterBar
            filters={[
              { id: "active", label: "Active" },
              { id: "pending", label: "Pending" },
              { id: "inactive", label: "Inactive" },
              { id: "alumni", label: "Alumni" },
            ]}
            activeFilters={statusFilter}
            onChange={handleStatusToggle}
            onClearAll={() => setStatusFilter([])}
          />
        </div>
      </FloatCard>

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={filteredMembers} />
      </FloatCard>
    </div>
  );
}
