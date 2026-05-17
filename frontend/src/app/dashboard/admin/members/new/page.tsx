"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";

export default function NewMemberPage() {
  const router = useRouter();
  const { addToast } = useToastStore();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "male",
    region: "Addis Ababa",
    // Step 2: Categorize
    status: "active",
    tier: "silver",
    notes: "",
    // Step 3: Level
    level: "1",
    // Step 4: Mentor
    mentorId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) setStep((prev) => (prev + 1) as any);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    addToast({
      type: "success",
      title: "Member Created",
      message: `${formData.firstName} ${formData.lastName} has been successfully added to the platform.`,
    });

    router.push("/dashboard/admin/members");
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-xl bg-surface-1 border border-black/[0.04] flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <PageHeader
          title="Add New Member"
          description="Register a new member in the platform through the 4-step intake process."
        />
      </div>

      {/* Step Indicator Bar */}
      <FloatCard className="p-6">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-black/[0.04] z-0" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-teal transition-all duration-500 z-0"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />

          {[
            { num: 1, label: "Personal Info" },
            { num: 2, label: "Categorize" },
            { num: 3, label: "Assign Level" },
            { num: 4, label: "Assign Mentor" },
          ].map((item) => {
            const isCompleted = step > item.num;
            const isCurrent = step === item.num;

            return (
              <div key={item.num} className="relative z-10 flex flex-col items-center gap-2 bg-surface-1 px-4 py-1 rounded-xl">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all shadow-sm ${
                    isCompleted
                      ? "bg-brand-teal text-white shadow-brand-teal/20"
                      : isCurrent
                      ? "bg-brand-teal text-white ring-4 ring-brand-teal/20"
                      : "bg-black/[0.04] text-text-muted"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    item.num
                  )}
                </div>
                <span className={`text-xs font-semibold ${isCurrent ? "text-brand-teal" : "text-text-secondary"}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </FloatCard>

      <FloatCard className="p-8 overflow-hidden">
        <form onSubmit={step === 4 ? handleSubmit : handleNext} className="flex flex-col gap-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                  Step 1: Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="First Name" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="Ahmed" />
                  <Input label="Last Name" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Ali" />
                  <Input label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="ahmed@example.com" />
                  <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+251 911 234 567" />
                  <Select
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ]}
                  />
                  <Select
                    label="Region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    options={[
                      { value: "Addis Ababa", label: "Addis Ababa" },
                      { value: "Dire Dawa", label: "Dire Dawa" },
                      { value: "Oromia", label: "Oromia" },
                      { value: "Amhara", label: "Amhara" },
                      { value: "Tigray", label: "Tigray" },
                      { value: "Somali", label: "Somali" },
                    ]}
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                  Step 2: Categorization & Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Initial Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                      { value: "active", label: "Active" },
                      { value: "pending", label: "Pending Verification" },
                      { value: "inactive", label: "Inactive" },
                    ]}
                  />
                  <Select
                    label="Membership Tier"
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                    options={[
                      { value: "silver", label: "Silver (Standard)" },
                      { value: "gold", label: "Gold (Advanced)" },
                      { value: "platinum", label: "Platinum (Special/Endorsed)" },
                    ]}
                  />
                </div>
                <Textarea
                  label="Administrative Notes (Optional)"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Add any internal onboarding notes or background context..."
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                  Step 3: Assign Initial Level
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {[
                    { level: "1", name: "Level 1 (Foundation)", desc: "New recruits and junior members learning the core curriculum." },
                    { level: "2", name: "Level 2 (Intermediate)", desc: "Active contributors participating in regular community service." },
                    { level: "3", name: "Level 3 (Advanced)", desc: "Senior members eligible for leadership and mentoring roles." },
                  ].map((item) => (
                    <label
                      key={item.level}
                      onClick={() => setFormData((prev) => ({ ...prev, level: item.level }))}
                      className={`flex flex-col gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.level === item.level
                          ? "border-brand-teal bg-brand-teal/5 shadow-md"
                          : "border-black/[0.06] bg-surface-1 hover:border-brand-teal/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-display font-bold text-text-primary">L{item.level}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          formData.level === item.level ? "border-brand-teal bg-brand-teal text-white" : "border-black/[0.1]"
                        }`}>
                          {formData.level === item.level && <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      </div>
                      <h4 className="font-semibold text-text-primary">{item.name}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                  Step 4: Assign Mentor
                </h3>
                <div className="flex flex-col gap-4 pt-2">
                  <Select
                    label="Select Mentor"
                    name="mentorId"
                    value={formData.mentorId}
                    onChange={handleChange}
                    options={[
                      { value: "", label: "Assign later (Unassigned)" },
                      { value: "mentor_1", label: "Sarah Mohammed (Senior Mentor • 12/15 members)" },
                      { value: "mentor_2", label: "Amanuel Kebede (Lead Mentor • 14/15 members)" },
                      { value: "mentor_3", label: "Fatima Noor (Mentor • 5/10 members)" },
                    ]}
                  />
                  {formData.mentorId && (
                    <div className="p-4 rounded-xl bg-brand-teal-l/30 border border-brand-teal/20 flex items-start gap-3 mt-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-teal text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs font-display">
                        SM
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h4 className="text-sm font-semibold text-text-primary">Sarah Mohammed</h4>
                        <p className="text-xs text-text-secondary">Assigned mentor will be notified automatically via email and platform alert upon submission.</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between pt-6 border-t border-black/[0.04]">
            <button
              type="button"
              onClick={() => setStep((prev) => (prev - 1) as any)}
              disabled={step === 1}
              className="h-11 px-6 rounded-xl border border-black/[0.08] text-text-secondary hover:bg-black/[0.03] transition-colors font-medium disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="h-11 px-8 rounded-xl bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all shadow-sm disabled:opacity-70 flex items-center justify-center min-w-[140px]"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : step === 4 ? (
                "Complete Registration"
              ) : (
                "Next Step"
              )}
            </button>
          </div>
        </form>
      </FloatCard>
    </div>
  );
}
