"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Textarea } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";

interface LevelConfig {
  id: string;
  level: number;
  name: string;
  minPoints: number;
  attendanceWeight: number;
  participationWeight: number;
  disciplineWeight: number;
  description: string;
}

const initialLevels: LevelConfig[] = [
  {
    id: "lvl_1",
    level: 1,
    name: "Foundation",
    minPoints: 0,
    attendanceWeight: 40,
    participationWeight: 30,
    disciplineWeight: 30,
    description: "New recruits and junior members learning the core curriculum.",
  },
  {
    id: "lvl_2",
    level: 2,
    name: "Intermediate",
    minPoints: 100,
    attendanceWeight: 30,
    participationWeight: 40,
    disciplineWeight: 30,
    description: "Active contributors participating in regular community service.",
  },
  {
    id: "lvl_3",
    level: 3,
    name: "Advanced",
    minPoints: 250,
    attendanceWeight: 20,
    participationWeight: 50,
    disciplineWeight: 30,
    description: "Senior members eligible for leadership and mentoring roles.",
  },
];

export default function SuperAdminLevelsPage() {
  const { addToast } = useToastStore();
  const [levels, setLevels] = useState<LevelConfig[]>(initialLevels);
  const [selectedLevelId, setSelectedLevelId] = useState<string>("lvl_1");
  const [loading, setLoading] = useState(false);

  const selectedLevel = levels.find((l) => l.id === selectedLevelId)!;

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = Number(e.dataTransfer.getData("text/plain"));
    if (sourceIndex === targetIndex) return;

    const newLevels = [...levels];
    const [removed] = newLevels.splice(sourceIndex, 1);
    newLevels.splice(targetIndex, 0, removed);

    // Reassign level numbers based on new order
    const reordered = newLevels.map((l, idx) => ({ ...l, level: idx + 1 }));
    setLevels(reordered);
    setSelectedLevelId(reordered[targetIndex].id);

    addToast({
      type: "success",
      title: "Levels Reordered",
      message: "Successfully updated the level progression hierarchy.",
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLevels((prev) =>
      prev.map((l) => (l.id === selectedLevelId ? { ...l, [name]: isNaN(Number(value)) ? value : Number(value) } : l))
    );
  };

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    const totalWeight = selectedLevel.attendanceWeight + selectedLevel.participationWeight + selectedLevel.disciplineWeight;

    if (totalWeight !== 100) {
      addToast({
        type: "error",
        title: "Invalid Weighting",
        message: `Evaluation criteria weights must sum to exactly 100% (Current sum: ${totalWeight}%).`,
      });
      return;
    }

    addToast({
      type: "success",
      title: "Configuration Saved",
      message: `Successfully updated criteria for Level ${selectedLevel.level} (${selectedLevel.name}).`,
    });
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <PageHeader
        title="Level Hierarchy & Evaluation Criteria"
        description="Configure progression requirements, reorder level tiers, and adjust quarterly scoring weights."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column — Drag to Reorder Level List */}
        <FloatCard className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
            <h3 className="font-display font-semibold text-text-primary text-base">Level Hierarchy</h3>
            <span className="text-xs text-text-muted font-medium">Drag to reorder</span>
          </div>

          <div className="flex flex-col gap-3">
            {levels.map((lvl, index) => {
              const isSelected = selectedLevelId === lvl.id;

              return (
                <div
                  key={lvl.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                  onClick={() => setSelectedLevelId(lvl.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-grab active:cursor-grabbing transition-all ${
                    isSelected
                      ? "border-brand-teal bg-brand-teal/5 shadow-md"
                      : "border-black/[0.06] bg-surface-1 hover:border-brand-teal/30"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm font-display">
                      L{lvl.level}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-text-primary truncate">{lvl.name}</span>
                      <span className="text-xs text-text-muted truncate">Min Points: {lvl.minPoints}</span>
                    </div>
                  </div>
                  <div className="text-text-muted cursor-grab active:cursor-grabbing shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
                  </div>
                </div>
              );
            })}
          </div>
        </FloatCard>

        {/* Right Column — Level Criteria Editor */}
        <FloatCard className="p-6 lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
            <h3 className="font-display font-semibold text-text-primary text-base">
              Configure Level {selectedLevel.level}: {selectedLevel.name}
            </h3>
            <span className="text-xs text-brand-teal font-semibold">Active Selection</span>
          </div>

          <form onSubmit={handleSaveConfig} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Level Tier Name"
                name="name"
                required
                value={selectedLevel.name}
                onChange={handleFieldChange}
              />
              <Input
                label="Minimum Points Required"
                name="minPoints"
                type="number"
                min="0"
                required
                value={selectedLevel.minPoints}
                onChange={handleFieldChange}
                hint="Points needed to qualify for promotion into this tier."
              />
            </div>

            <Textarea
              label="Level Description & Objectives"
              name="description"
              rows={3}
              required
              value={selectedLevel.description}
              onChange={handleFieldChange}
            />

            <h4 className="font-display font-semibold text-text-primary text-sm pt-2 border-t border-black/[0.04]">
              Quarterly Evaluation Criteria Weighting (Must sum to 100%)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input
                label="Attendance Weight (%)"
                name="attendanceWeight"
                type="number"
                min="0"
                max="100"
                required
                value={selectedLevel.attendanceWeight}
                onChange={handleFieldChange}
              />
              <Input
                label="Participation Weight (%)"
                name="participationWeight"
                type="number"
                min="0"
                max="100"
                required
                value={selectedLevel.participationWeight}
                onChange={handleFieldChange}
              />
              <Input
                label="Discipline Weight (%)"
                name="disciplineWeight"
                type="number"
                min="0"
                max="100"
                required
                value={selectedLevel.disciplineWeight}
                onChange={handleFieldChange}
              />
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-black/[0.04]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Total Weight Sum:</span>
                <span className={`text-sm font-bold ${
                  selectedLevel.attendanceWeight + selectedLevel.participationWeight + selectedLevel.disciplineWeight === 100
                    ? "text-success"
                    : "text-danger"
                }`}>
                  {selectedLevel.attendanceWeight + selectedLevel.participationWeight + selectedLevel.disciplineWeight}%
                </span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="h-11 px-8 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[140px] shadow-sm"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  "Save Level Criteria"
                )}
              </button>
            </div>
          </form>
        </FloatCard>
      </div>
    </div>
  );
}
