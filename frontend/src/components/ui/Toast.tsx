"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useToastStore, ToastType } from "@/store/toastStore";
import { FloatCard } from "./FloatCard";
import { cn } from "@/lib/utils";

const toastStyles: Record<ToastType, string> = {
  success: "border-success bg-brand-teal-l/30 text-success",
  error: "border-danger bg-danger/5 text-danger",
  info: "border-info bg-info/5 text-info",
  warning: "border-warning bg-warning/5 text-warning",
};

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-0 right-0 z-[100] p-6 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto"
          >
            <FloatCard
              hover={false}
              className={cn(
                "p-4 border-l-4 rounded-xl shadow-lg relative overflow-hidden",
                toastStyles[toast.type]
              )}
            >
              <div className="flex flex-col gap-1 pr-6">
                <h4 className="font-semibold text-sm">{toast.title}</h4>
                {toast.message && (
                  <p className="text-sm opacity-90">{toast.message}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </FloatCard>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
