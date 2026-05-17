"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Select } from "@/components/ui/Input";
import { StatusBadge, LevelBadge, TierBadge } from "@/components/ui/Badge";
import { Member } from "@/types";

const mockMentorMembers: Member[] = [
  {
    id: "mem_1",
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    phone: "+251 911 234 567",
    gender: "male",
    region: "Addis Ababa",
    status: "active",
    level: 2,
    tier: "gold",
    joinedAt: "2025-01-15T10:00:00Z",
  },
  {
    id: "mem_2",
    name: "Sara Bekele",
    email: "sara.b@example.com",
    phone: "+251 912 345 678",
    gender: "female",
    region: "Addis Ababa",
    status: "active",
    level: 2,
    tier: "silver",
    joinedAt: "2025-02-20T10:00:00Z",
  },
  {
    id: "mem_4",
    name: "Feven Tefera",
    email: "feven.t@example.com",
    phone: "+251 914 567 890",
    gender: "female",
    region: "Addis Ababa",
    status: "active",
    level: 1,
    tier: "silver",
    joinedAt: "2026-05-12T10:00:00Z",
  },
  {
    id: "mem_5",
    name: "Yosef Mamo",
    email: "yosef.m@example.com",
    phone: "+251 915 678 901",
    gender: "male",
    region: "Oromia",
    status: "inactive",
    level: 2,
    tier: "silver",
    joinedAt: "2025-06-10T10:00:00Z",
  },
];

export default function MentorMembersPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const filteredMembers = useMemo(() => {
    return mockMentorMembers.filter((m) => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
      const matchLevel = !levelFilter || m.level === Number(levelFilter);
      return matchSearch && matchLevel;
    });
  }, [search, levelFilter]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PageHeader
        title="My Assigned Mentees"
        description="View your active student roster, track individual progress, and conduct evaluations."
      />

      <FloatCard className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-80">
          <Input
            placeholder="Search mentees by name, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftIcon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            }
          />
        </div>
        <div className="w-full sm:w-48">
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
      </FloatCard>

      {/* Mentees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((m) => (
          <FloatCard
            key={m.id}
            elevated
            className="p-6 flex flex-col gap-6 hover:border-brand-teal/30 transition-all cursor-pointer group"
            onClick={() => router.push(`/dashboard/mentor/members/${m.id}`)}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-base shadow-sm shrink-0">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-semibold text-text-primary group-hover:text-brand-teal transition-colors truncate">{m.name}</h3>
                  <span className="text-xs text-text-muted truncate">{m.email}</span>
                </div>
              </div>
              <LevelBadge level={m.level} />
            </div>

            <div className="flex flex-col gap-2 text-xs text-text-secondary">
              <div className="flex items-center justify-between">
                <span>Branch Region:</span>
                <span className="font-medium text-text-primary">{m.region}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Phone Contact:</span>
                <span className="font-medium text-text-primary">{m.phone}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-black/[0.04]">
                <span>Status & Tier:</span>
                <div className="flex items-center gap-1.5">
                  <StatusBadge status={m.status} />
                  {m.tier && <TierBadge tier={m.tier} />}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-black/[0.04]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/dashboard/mentor/members/${m.id}`);
                }}
                className="flex-1 h-9 rounded-xl bg-surface-1 border border-black/[0.06] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all shadow-sm flex items-center justify-center"
              >
                View Profile & Logs
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/dashboard/mentor/evaluations");
                }}
                className="h-9 px-3 rounded-xl bg-brand-teal text-white text-xs font-semibold hover:bg-brand-teal/90 transition-all shadow-sm flex items-center justify-center gap-1"
              >
                Evaluate
              </button>
            </div>
          </FloatCard>
        ))}
      </div>
    </div>
  );
}
