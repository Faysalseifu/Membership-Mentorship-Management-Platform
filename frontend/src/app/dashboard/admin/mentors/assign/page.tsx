"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useToastStore } from "@/store/toastStore";

export default function AssignMentorsPage() {
  const { addToast } = useToastStore();
  const [selectedMentor, setSelectedMentor] = useState<string | null>("mentor_1");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const mentors = [
    { id: "mentor_1", name: "Sarah Mohammed", email: "sarah.m@msl.org", count: 12, max: 15 },
    { id: "mentor_2", name: "Amanuel Kebede", email: "amanuel.k@msl.org", count: 14, max: 15 },
    { id: "mentor_3", name: "Fatima Noor", email: "fatima.n@msl.org", count: 5, max: 10 },
    { id: "mentor_4", name: "Elias Tilahun", email: "elias.t@msl.org", count: 10, max: 10 },
  ];

  const unassignedMembers = [
    { id: "mem_101", name: "Dawit Tadesse", region: "Dire Dawa", joined: "3 days ago" },
    { id: "mem_102", name: "Kidist Belay", region: "Addis Ababa", joined: "4 days ago" },
    { id: "mem_103", name: "Bereket Alemu", region: "Hawassa", joined: "1 week ago" },
    { id: "mem_104", name: "Mahlet Worku", region: "Bahir Dar", joined: "2 weeks ago" },
  ];

  const handleToggleMember = (id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleAssign = async () => {
    if (!selectedMentor || selectedMembers.length === 0) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    const mentorName = mentors.find((m) => m.id === selectedMentor)?.name;

    addToast({
      type: "success",
      title: "Mentors Assigned",
      message: `Successfully assigned ${selectedMembers.length} member(s) to ${mentorName}.`,
    });

    setSelectedMembers([]);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PageHeader
        title="Assign Mentors"
        description="Balance mentor workloads by pairing unassigned members with active mentors."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column — Mentors List */}
        <FloatCard className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
            <h3 className="font-display font-semibold text-text-primary text-base">Select Mentor</h3>
            <span className="text-xs text-text-muted font-medium">{mentors.length} active mentors</span>
          </div>

          <div className="flex flex-col gap-4">
            {mentors.map((m) => {
              const isSelected = selectedMentor === m.id;
              const isAtCapacity = m.count >= m.max;

              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedMentor(m.id)}
                  className={`flex flex-col gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? "border-brand-teal bg-brand-teal/5 shadow-md"
                      : "border-black/[0.06] bg-surface-1 hover:border-brand-teal/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-sm shrink-0">
                        {m.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-text-primary truncate">{m.name}</span>
                        <span className="text-xs text-text-muted truncate">{m.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        isAtCapacity ? "bg-danger/10 text-danger" : "bg-success/10 text-success"
                      }`}>
                        {m.count}/{m.max} Members
                      </span>
                    </div>
                  </div>

                  <ProgressBar
                    value={m.count}
                    max={m.max}
                    color={isAtCapacity ? "danger" : m.count / m.max > 0.8 ? "amber" : "teal"}
                    size="sm"
                  />
                </div>
              );
            })}
          </div>
        </FloatCard>

        {/* Right Column — Unassigned Members */}
        <FloatCard className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
            <h3 className="font-display font-semibold text-text-primary text-base">Unassigned Members</h3>
            <span className="text-xs text-text-muted font-medium">{unassignedMembers.length} unassigned</span>
          </div>

          <div className="flex flex-col gap-4">
            {unassignedMembers.map((mem) => {
              const isSelected = selectedMembers.includes(mem.id);

              return (
                <div
                  key={mem.id}
                  onClick={() => handleToggleMember(mem.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? "border-brand-teal bg-brand-teal/5 shadow-md"
                      : "border-black/[0.06] bg-surface-1 hover:border-brand-teal/30"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? "border-brand-teal bg-brand-teal text-white" : "border-black/[0.1]"
                    }`}>
                      {isSelected && <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-text-primary truncate">{mem.name}</span>
                      <span className="text-xs text-text-muted truncate">{mem.region} • Joined {mem.joined}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-black/[0.04]">
            <button
              onClick={handleAssign}
              disabled={loading || !selectedMentor || selectedMembers.length === 0}
              className="w-full h-11 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                `Assign ${selectedMembers.length} Member(s) to Mentor`
              )}
            </button>
          </div>
        </FloatCard>
      </div>
    </div>
  );
}
