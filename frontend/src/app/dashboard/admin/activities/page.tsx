"use client";

import React, { useState, useMemo } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { DataTable } from "@/components/ui/DataTable";
import { Modal } from "@/components/ui/Modal";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

interface AdminActivity {
  id: string;
  title: string;
  type: string;
  date: string;
  organizer: string;
  attendanceCount: number;
  status: "upcoming" | "completed" | "cancelled";
}

const initialActivities: AdminActivity[] = [
  {
    id: "act_101",
    title: "Regional Leadership Seminar",
    type: "workshop",
    date: "2026-11-10T09:00:00Z",
    organizer: "Ustaz Yunus Mohammed",
    attendanceCount: 45,
    status: "upcoming",
  },
  {
    id: "act_102",
    title: "Community Clean-up Drive",
    type: "community_service",
    date: "2026-10-25T08:00:00Z",
    organizer: "Ustaz Musab Ibrahim",
    attendanceCount: 32,
    status: "completed",
  },
  {
    id: "act_103",
    title: "Annual General Meeting",
    type: "meeting",
    date: "2026-09-15T14:00:00Z",
    organizer: "Admin Team",
    attendanceCount: 120,
    status: "completed",
  },
];

export default function AdminActivitiesPage() {
  const { addToast } = useToastStore();
  const [activities, setActivities] = useState<AdminActivity[]>(initialActivities);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    type: "workshop",
    date: "",
    organizer: "Ustaz Yunus Mohammed",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    const newAct: AdminActivity = {
      id: `act_${Date.now()}`,
      title: formData.title,
      type: formData.type,
      date: new Date(formData.date).toISOString(),
      organizer: formData.organizer,
      attendanceCount: 0,
      status: "upcoming",
    };

    setActivities((prev) => [newAct, ...prev]);
    setIsModalOpen(false);
    setFormData({ title: "", type: "workshop", date: "", organizer: "Ustaz Yunus Mohammed", description: "" });

    addToast({
      type: "success",
      title: "Activity Created",
      message: `Successfully scheduled "${newAct.title}".`,
    });
  };

  const columns = useMemo<ColumnDef<AdminActivity>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Activity Name",
        cell: (info) => (
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-text-primary truncate">{info.getValue() as string}</span>
            <span className="text-xs text-text-muted capitalize">{(info.row.original.type).replace("_", " ")}</span>
          </div>
        ),
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) => format(new Date(info.getValue() as string), "MMM d, yyyy"),
      },
      {
        accessorKey: "organizer",
        header: "Organizer",
        cell: (info) => <span className="text-sm text-text-secondary">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "attendanceCount",
        header: "Attendance",
        cell: (info) => <span className="text-sm font-medium text-text-primary">{info.getValue() as number} members</span>,
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info) => {
          const status = info.getValue() as string;
          const styles = {
            upcoming: "bg-brand-teal/10 text-brand-teal border-brand-teal/20",
            completed: "bg-success/10 text-success border-success/20",
            cancelled: "bg-danger/10 text-danger border-danger/20",
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
        cell: () => (
          <button className="px-3 py-1.5 rounded-lg bg-surface-1 border border-black/[0.06] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all shadow-sm">
            Attendance Sheet
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
          title="Activity Management"
          description="Schedule official platform events, workshops, and track attendance records."
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-10 px-5 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Schedule Activity
        </button>
      </div>

      <FloatCard className="p-0 overflow-hidden">
        <DataTable columns={columns} data={activities} />
      </FloatCard>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Schedule New Activity">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-4">
          <Input label="Activity Title" name="title" required value={formData.title} onChange={handleChange} placeholder="e.g. Regional Leadership Seminar" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Activity Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              options={[
                { value: "workshop", label: "Workshop/Training" },
                { value: "community_service", label: "Community Service" },
                { value: "meeting", label: "General Meeting" },
                { value: "other", label: "Other" },
              ]}
            />
            <Input label="Date" name="date" type="date" required value={formData.date} onChange={handleChange} />
          </div>
          <Select
            label="Organizer / Lead Mentor"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            options={[
              { value: "Ustaz Yunus Mohammed", label: "Ustaz Yunus Mohammed" },
              { value: "Ustaz Musab Ibrahim", label: "Ustaz Musab Ibrahim" },
              { value: "Ustaz Salman Ahmed", label: "Ustaz Salman Ahmed" },
            ]}
          />
          <Textarea label="Description" name="description" rows={3} value={formData.description} onChange={handleChange} placeholder="Provide an overview of the event objectives..." />
          <div className="flex justify-end gap-3 pt-4 border-t border-black/[0.04]">
            <button type="button" onClick={() => setIsModalOpen(false)} className="h-10 px-5 rounded-xl border border-black/[0.08] text-text-secondary hover:bg-black/[0.03] transition-colors text-sm font-medium">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="h-10 px-6 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[120px] shadow-sm">
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                "Schedule"
              )}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
