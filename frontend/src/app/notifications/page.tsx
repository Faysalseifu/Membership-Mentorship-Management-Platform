"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";

export default function GlobalNotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: "notif_1",
      title: "New Activity Logged",
      message: "Ahmed Ali logged a new activity: 'Neighborhood Clean-up'. Requires verification.",
      time: "10 minutes ago",
      read: false,
      type: "activity",
    },
    {
      id: "notif_2",
      title: "Promotion Request Approved",
      message: "Your promotion recommendation for Sara Bekele has been approved by the Admin board.",
      time: "2 hours ago",
      read: false,
      type: "promotion",
    },
    {
      id: "notif_3",
      title: "Quarterly Evaluation Reminder",
      message: "Q3 evaluations are due in 5 days. You have 4 pending mentees.",
      time: "1 day ago",
      read: true,
      type: "system",
    },
    {
      id: "notif_4",
      title: "System Maintenance Scheduled",
      message: "Platform scheduled maintenance will occur on Saturday at 02:00 EAT.",
      time: "3 days ago",
      read: true,
      type: "system",
    },
  ]);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleToggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="Notifications & Activity Inbox"
          description="View all system alerts, mentee submissions, and administrative updates."
        />
        <button
          onClick={handleMarkAllRead}
          className="h-10 px-4 bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] rounded-xl font-medium transition-all text-xs shadow-sm shrink-0"
        >
          Mark all as read
        </button>
      </div>

      <FloatCard className="p-6 flex flex-col gap-4">
        {notifications.map((n) => {
          const styles = {
            activity: "bg-brand-teal-l/40 border-brand-teal/20 text-brand-teal",
            promotion: "bg-success/10 border-success/20 text-success",
            system: "bg-info/10 border-info/20 text-info",
          };

          return (
            <div
              key={n.id}
              onClick={() => handleToggleRead(n.id)}
              className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                n.read ? "opacity-60 bg-black/[0.01] border-black/[0.04]" : styles[n.type as keyof typeof styles]
              }`}
            >
              <div className="mt-0.5 shrink-0">
                <div className={`w-3 h-3 rounded-full ${n.read ? "bg-black/[0.1]" : "bg-brand-teal animate-pulse"}`} />
              </div>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-text-primary text-sm">{n.title}</h4>
                  <span className="text-xs text-text-muted shrink-0">{n.time}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{n.message}</p>
              </div>
            </div>
          );
        })}
      </FloatCard>
    </div>
  );
}
