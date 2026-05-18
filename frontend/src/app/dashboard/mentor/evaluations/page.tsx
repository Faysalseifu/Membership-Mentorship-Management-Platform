"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { LevelBadge } from "@/components/ui/Badge";
import { useToastStore } from "@/store/toastStore";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface EvaluationRecord {
  id: string;
  memberName: string;
  level: number;
  date: string;
  attendanceScore: number;
  participationScore: number;
  disciplineScore: number;
  aggregateScore: number;
  recommendPromotion: boolean;
}

const initialEvaluations: EvaluationRecord[] = [
  {
    id: "eval_1",
    memberName: "Abdi Ahmed",
    level: 2,
    date: "2026-07-15T10:00:00Z",
    attendanceScore: 90,
    participationScore: 85,
    disciplineScore: 95,
    aggregateScore: 90,
    recommendPromotion: true,
  },
  {
    id: "eval_2",
    memberName: "Abduse Taye",
    level: 2,
    date: "2026-07-14T10:00:00Z",
    attendanceScore: 80,
    participationScore: 75,
    disciplineScore: 85,
    aggregateScore: 80,
    recommendPromotion: false,
  },
  {
    id: "eval_3",
    memberName: "Ezadin Muzemil",
    level: 1,
    date: "2026-06-10T10:00:00Z",
    attendanceScore: 95,
    participationScore: 90,
    disciplineScore: 90,
    aggregateScore: 92,
    recommendPromotion: true,
  },
];

export default function MentorEvaluationsPage() {
  const { addToast } = useToastStore();
  const [evaluations, setEvaluations] = useState<EvaluationRecord[]>(initialEvaluations);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    memberId: "Abdi Ahmed",
    level: "2",
    attendanceScore: 85,
    participationScore: 80,
    disciplineScore: 90,
    recommendPromotion: false,
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    const agg = Math.round((Number(formData.attendanceScore) + Number(formData.participationScore) + Number(formData.disciplineScore)) / 3);

    const newEval: EvaluationRecord = {
      id: `eval_${Date.now()}`,
      memberName: formData.memberId,
      level: Number(formData.level),
      date: new Date().toISOString(),
      attendanceScore: Number(formData.attendanceScore),
      participationScore: Number(formData.participationScore),
      disciplineScore: Number(formData.disciplineScore),
      aggregateScore: agg,
      recommendPromotion: formData.recommendPromotion,
    };

    setEvaluations((prev) => [newEval, ...prev]);
    setIsModalOpen(false);

    addToast({
      type: "success",
      title: "Evaluation Submitted",
      message: `Successfully evaluated ${newEval.memberName} (Score: ${agg}%).`,
    });
  };

  const columns = useMemo<ColumnDef<EvaluationRecord>[]>(
    () => [
      {
        accessorKey: "memberName",
        header: "Mentee",
        cell: (info) => <span className="font-semibold text-text-primary">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "level",
        header: "Level",
        cell: (info) => <LevelBadge level={info.getValue() as number} />,
      },
      {
        accessorKey: "date",
        header: "Evaluation Date",
        cell: (info) => format(new Date(info.getValue() as string), "MMM d, yyyy"),
      },
      {
        accessorKey: "aggregateScore",
        header: "Aggregate Score",
        cell: (info) => (
          <span className="text-sm font-bold text-text-primary">{info.getValue() as number}%</span>
        ),
      },
      {
        accessorKey: "recommendPromotion",
        header: "Promotion Recommended",
        cell: (info) => {
          const rec = info.getValue() as boolean;
          return rec ? (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-success/10 text-success border border-success/20">
              Recommended
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-black/[0.06] text-text-muted">
              Maintain Level
            </span>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="Mentee Evaluations"
          description="Conduct quarterly assessments and review past performance scoring for your assigned mentees."
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-10 px-5 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          New Evaluation
        </button>
      </div>

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={evaluations} />
      </FloatCard>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Conduct Mentee Evaluation">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-4">
          <Select
            label="Select Mentee"
            name="memberId"
            value={formData.memberId}
            onChange={handleChange}
            options={[
              { value: "Abdi Ahmed", label: "Abdi Ahmed (Level 2)" },
              { value: "Abduse Taye", label: "Abduse Taye (Level 2)" },
              { value: "Ezadin Muzemil", label: "Ezadin Muzemil (Level 1)" },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Attendance & Punctuality" name="attendanceScore" type="number" min="0" max="100" required value={formData.attendanceScore} onChange={handleChange} />
            <Input label="Participation & Activity" name="participationScore" type="number" min="0" max="100" required value={formData.participationScore} onChange={handleChange} />
            <Input label="Discipline & Behavior" name="disciplineScore" type="number" min="0" max="100" required value={formData.disciplineScore} onChange={handleChange} />
          </div>

          <label className="flex items-center gap-3 p-4 rounded-xl bg-black/[0.02] border border-black/[0.04] cursor-pointer hover:bg-black/[0.03] transition-colors">
            <input
              type="checkbox"
              name="recommendPromotion"
              checked={formData.recommendPromotion}
              onChange={handleChange}
              className="w-5 h-5 rounded border-black/[0.2] text-brand-teal focus:ring-brand-teal"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-text-primary">Recommend for Level Promotion</span>
              <span className="text-xs text-text-secondary">Submits a promotion request to the Admin board upon saving.</span>
            </div>
          </label>

          <Textarea label="Evaluation Notes & Feedback" name="notes" rows={3} value={formData.notes} onChange={handleChange} placeholder="Provide specific feedback on student growth and areas of improvement..." />

          <div className="flex justify-end gap-3 pt-4 border-t border-black/[0.04]">
            <button type="button" onClick={() => setIsModalOpen(false)} className="h-10 px-5 rounded-xl border border-black/[0.08] text-text-secondary hover:bg-black/[0.03] transition-colors text-sm font-medium">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="h-10 px-6 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[140px] shadow-sm">
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                "Save Evaluation"
              )}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
