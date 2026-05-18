"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { FloatCard } from "@/components/ui/FloatCard";

export default function SuperAdminDashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title="Super Admin Dashboard"
          description="Global system overview, infrastructure health monitoring, and high-level governance controls."
        />
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => router.push("/dashboard/superadmin/roles")}
            className="h-10 px-4 bg-brand-teal text-white rounded-xl font-medium shadow-sm hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
            Manage Roles
          </button>
          <button
            onClick={() => router.push("/dashboard/superadmin/levels")}
            className="h-10 px-4 bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            Configure Levels
          </button>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Registered Users" value="1,384" trend={{ value: 15, label: "vs last month", isPositive: true }} />
        <StatCard label="Active Branch Regions" value="6" trend={{ value: 1, label: "new branch opened", isPositive: true }} />
        <StatCard label="System Health" value="99.9%" trend={{ value: 0, label: "optimal performance", isPositive: true }} />
        <StatCard label="Pending Overrides" value="3" trend={{ value: 3, label: "requires attention", isPositive: false }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* System Health Widget */}
        <div className="flex flex-col gap-6">
          <FloatCard className="p-6 flex flex-col gap-6 h-full">
            <h3 className="font-display font-semibold text-text-primary text-base border-b border-black/[0.04] pb-4">
              System Health & Infrastructure
            </h3>

            <div className="flex flex-col gap-5 flex-1">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-text-primary">Database CPU Utilization</span>
                  <span className="text-success font-bold">24%</span>
                </div>
                <div className="w-full bg-black/[0.04] rounded-full h-2 overflow-hidden">
                  <div className="bg-success h-full rounded-full" style={{ width: '24%' }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-text-primary">Memory Usage</span>
                  <span className="text-brand-teal font-bold">58%</span>
                </div>
                <div className="w-full bg-black/[0.04] rounded-full h-2 overflow-hidden">
                  <div className="bg-brand-teal h-full rounded-full" style={{ width: '58%' }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-text-primary">API Latency (p95)</span>
                  <span className="text-brand-amber font-bold">142ms</span>
                </div>
                <div className="w-full bg-black/[0.04] rounded-full h-2 overflow-hidden">
                  <div className="bg-brand-amber h-full rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-text-primary">Storage Capacity</span>
                  <span className="text-text-secondary font-bold">42GB / 100GB</span>
                </div>
                <div className="w-full bg-black/[0.04] rounded-full h-2 overflow-hidden">
                  <div className="bg-brand-teal h-full rounded-full" style={{ width: '42%' }} />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-success/10 border border-success/20 flex items-center gap-3 mt-4">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse shrink-0" />
              <span className="text-xs font-semibold text-success">All microservices operational and synced.</span>
            </div>
          </FloatCard>
        </div>

        {/* Global Activity Feed */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <FloatCard className="p-6 flex flex-col gap-6 h-full">
            <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
              <h3 className="font-display font-semibold text-text-primary text-base">Global Activity & Audit Feed</h3>
              <button
                onClick={() => router.push("/dashboard/superadmin/audit")}
                className="text-xs font-semibold text-brand-teal hover:underline"
              >
                View Audit Logs
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {[
                { id: "log_1", user: "Admin (Ustaz Musab I)", action: "Approved promotion for Ezadin Muzemil to Level 2", time: "10 mins ago", type: "promo" },
                { id: "log_2", user: "Super Admin (You)", action: "Modified Level 2 evaluation criteria weighting", time: "1 hour ago", type: "config" },
                { id: "log_3", user: "System Auto", action: "Generated monthly regional performance reports", time: "3 hours ago", type: "system" },
                { id: "log_4", user: "Admin (Ustaz Salman A)", action: "Assigned 5 new members to mentor Ustaz Fuad Beshir", time: "5 hours ago", type: "assign" },
              ].map((log) => (
                <div key={log.id} className="flex items-start gap-4 p-4 rounded-xl border border-black/[0.04] bg-black/[0.01]">
                  <div className="w-8 h-8 rounded-full bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    {log.type.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-semibold text-text-primary text-sm truncate">{log.user}</h4>
                      <span className="text-xs text-text-muted shrink-0">{log.time}</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">{log.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
