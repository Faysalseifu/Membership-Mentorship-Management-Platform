"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FloatCard } from "@/components/ui/FloatCard";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 w-full">
      <FloatCard elevated className="max-w-md w-full p-8 flex flex-col items-center text-center gap-6 border-danger/20 bg-danger/5">
        <div className="w-16 h-16 rounded-2xl bg-danger/10 text-danger flex items-center justify-center shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-display font-bold text-text-primary">Access Denied</h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            You do not have the required role or security clearance to access this administrative dashboard. If you believe this is an error, please contact your lead mentor or the system super admin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full pt-4 border-t border-black/[0.04]">
          <button
            onClick={() => router.back()}
            className="flex-1 h-11 rounded-xl bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors font-medium text-sm shadow-sm"
          >
            Go Back
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            className="flex-1 h-11 rounded-xl bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all text-sm shadow-sm"
          >
            My Dashboard
          </button>
        </div>
      </FloatCard>
    </div>
  );
}
