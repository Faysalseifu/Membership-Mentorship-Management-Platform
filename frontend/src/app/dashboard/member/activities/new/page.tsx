"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";

export default function NewActivityPage() {
  const router = useRouter();
  const { addToast } = useToastStore();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    
    addToast({
      type: "success",
      title: "Activity Logged",
      message: "Your activity has been submitted and is pending review.",
    });
    
    router.push("/dashboard/member/activities");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-xl bg-surface-1 border border-black/[0.04] flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <PageHeader
          title="Log Activity"
          description="Submit a new activity to count towards your progression."
        />
      </div>

      <FloatCard className="p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Select
            label="Activity Type"
            name="type"
            required
            options={[
              { value: "workshop", label: "Workshop/Training" },
              { value: "community_service", label: "Community Service" },
              { value: "meeting", label: "General Meeting" },
              { value: "other", label: "Other" },
            ]}
            placeholder="Select the type of activity"
          />

          <Input
            label="Activity Title"
            name="title"
            required
            placeholder="e.g. Regional Leadership Workshop"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Date"
              name="date"
              type="date"
              required
            />
            <Input
              label="Duration (Hours)"
              name="duration"
              type="number"
              min="0.5"
              step="0.5"
              placeholder="e.g. 2.5"
            />
          </div>

          <Textarea
            label="Description & Reflection"
            name="description"
            rows={4}
            required
            placeholder="Describe what you did and what you learned..."
            hint="Please provide enough detail for your mentor to evaluate this activity."
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-primary">Evidence (Optional)</label>
            <div className="w-full border-2 border-dashed border-black/[0.1] rounded-xl p-8 flex flex-col items-center justify-center gap-2 hover:bg-black/[0.01] hover:border-brand-teal/30 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-black/[0.04] flex items-center justify-center text-text-muted group-hover:text-brand-teal group-hover:bg-brand-teal-l transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <p className="text-sm font-medium text-text-primary">Click to upload or drag and drop</p>
              <p className="text-xs text-text-muted">PDF, JPG, or PNG (max 5MB)</p>
            </div>
          </div>

          <div className="flex justify-end pt-4 mt-2 border-t border-black/[0.04]">
            <button
              type="submit"
              disabled={loading}
              className="px-6 h-11 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[140px]"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Submit Activity"
              )}
            </button>
          </div>
        </form>
      </FloatCard>
    </div>
  );
}
