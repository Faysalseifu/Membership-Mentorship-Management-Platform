"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FloatCard } from "@/components/ui/FloatCard";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 w-full">
      <FloatCard elevated className="max-w-md w-full p-8 flex flex-col items-center text-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-teal-l text-brand-teal flex items-center justify-center font-display font-bold text-3xl shadow-sm">
          404
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-display font-bold text-text-primary">Page Not Found</h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            The page you are looking for does not exist, has been removed, or is temporarily unavailable.
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
