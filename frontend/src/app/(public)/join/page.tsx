"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Select, Textarea } from "@/components/ui/Input";

export default function PublicJoinPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "male",
    birthYear: "2005",
    city: "Addis Ababa",
    region: "Addis Ababa",
    institution: "",
    fieldOfStudy: "",
    academicYear: "1st Year",
    interestReason: "",
    volunteerExperience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 w-full max-w-2xl mx-auto text-center">
        <FloatCard elevated className="p-12 flex flex-col items-center gap-6 border-t-4 border-brand-teal">
          <div className="w-20 h-20 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-3xl shadow-sm animate-bounce">
            ✓
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-display font-bold text-text-primary">Application Submitted Successfully!</h1>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto">
              Thank you for applying to join the Muslim Students League. Your application has been queued for review by the regional administrative board.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] flex flex-col gap-1 w-full text-xs text-left">
            <span className="font-semibold text-text-primary">What happens next?</span>
            <span className="text-text-secondary">• Our intake team will review your academic background and interest responses.</span>
            <span className="text-text-secondary">• You will receive an interview invitation via email within 3-5 business days.</span>
            <span className="text-text-secondary">• Upon acceptance, you will be assigned a Level 1 status and paired with an academic mentor.</span>
          </div>

          <Link
            href="/"
            className="h-11 px-8 rounded-xl bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all text-sm shadow-sm flex items-center justify-center mt-2"
          >
            Return to Homepage
          </Link>
        </FloatCard>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 w-full max-w-3xl mx-auto px-6 pt-8">
      <div className="flex flex-col gap-4 text-center max-w-xl mx-auto">
        <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Join Our Roster</span>
        <h1 className="text-4xl font-display font-bold text-text-primary tracking-tight">Mentee Membership Application</h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Begin your journey of personal discipline, academic mentorship, and community service. Complete the 3-step intake application below.
        </p>
      </div>

      {/* Animated Step Indicator */}
      <div className="flex items-center justify-between max-w-md mx-auto w-full px-4">
        {[
          { num: 1, label: "Personal Info" },
          { num: 2, label: "Academic Profile" },
          { num: 3, label: "Motivation & Goals" },
        ].map((st) => (
          <div key={st.num} className="flex flex-col items-center gap-2 group flex-1">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center font-display font-bold text-sm transition-all shadow-sm ${
                step === st.num
                  ? "bg-brand-teal text-white scale-110 shadow-md ring-4 ring-brand-teal/20"
                  : step > st.num
                  ? "bg-success text-white"
                  : "bg-surface-1 border border-black/[0.08] text-text-muted"
              }`}
            >
              {step > st.num ? "✓" : st.num}
            </div>
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${step === st.num ? "text-brand-teal font-bold" : "text-text-muted"}`}>
              {st.label}
            </span>
          </div>
        ))}
      </div>

      <FloatCard className="p-8 sm:p-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {step === 1 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                Step 1: Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="First Name" name="firstName" required value={formData.firstName} onChange={handleChange} />
                <Input label="Last Name" name="lastName" required value={formData.lastName} onChange={handleChange} />
                <Input label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} />
                <Input label="Phone Number" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+251 911 234 567" />
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
                <Input label="Birth Year" name="birthYear" type="number" min="1995" max="2012" required value={formData.birthYear} onChange={handleChange} />
                <Input label="City / Town" name="city" required value={formData.city} onChange={handleChange} />
                <Select
                  label="Branch Region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  options={[
                    { value: "Addis Ababa", label: "Addis Ababa" },
                    { value: "Dire Dawa", label: "Dire Dawa" },
                    { value: "Oromia", label: "Oromia" },
                    { value: "Amhara", label: "Amhara" },
                  ]}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                Step 2: Academic Profile
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="Current Institution / School" name="institution" required value={formData.institution} onChange={handleChange} placeholder="Addis Ababa University" />
                <Input label="Field of Study / Department" name="fieldOfStudy" required value={formData.fieldOfStudy} onChange={handleChange} placeholder="Software Engineering" />
                <Select
                  label="Academic Year / Grade"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                  options={[
                    { value: "High School Grade 11", label: "High School Grade 11" },
                    { value: "High School Grade 12", label: "High School Grade 12" },
                    { value: "1st Year", label: "University 1st Year" },
                    { value: "2nd Year", label: "University 2nd Year" },
                    { value: "3rd Year", label: "University 3rd Year" },
                    { value: "4th Year+", label: "University 4th Year+" },
                  ]}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                Step 3: Motivation & Goals
              </h3>
              <Textarea
                label="Why are you interested in joining the Muslim Students League?"
                name="interestReason"
                rows={3}
                required
                value={formData.interestReason}
                onChange={handleChange}
                placeholder="Share your goals regarding personal development, mentorship, and community service..."
              />
              <Textarea
                label="Prior Volunteer or Leadership Experience (Optional)"
                name="volunteerExperience"
                rows={3}
                value={formData.volunteerExperience}
                onChange={handleChange}
                placeholder="Mention any past clubs, tutoring drives, or youth committees you have participated in..."
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-black/[0.04]">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="h-11 px-6 rounded-xl bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors font-medium text-sm shadow-sm"
              >
                Previous Step
              </button>
            ) : (
              <Link
                href="/auth/login"
                className="h-11 px-6 rounded-xl bg-surface-1 border border-black/[0.08] text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors font-medium text-sm shadow-sm flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Already have account?
              </Link>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="h-11 px-8 rounded-xl bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all text-sm shadow-sm flex items-center gap-2"
              >
                Next Step
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="h-11 px-10 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[160px] shadow-sm text-sm"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  "Submit Application"
                )}
              </button>
            )}
          </div>
        </form>
      </FloatCard>
    </div>
  );
}
