"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Select } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";

export default function MemberProfilePage() {
  const { addToast } = useToastStore();
  const [loading, setLoading] = useState(false);

  // Mock initial data
  const [formData, setFormData] = useState({
    firstName: "Ahmed",
    lastName: "Ali",
    email: "member@example.com",
    phone: "+251 911 234 567",
    gender: "male",
    region: "Addis Ababa",
    bio: "Passionate about software engineering and community service.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    addToast({
      type: "success",
      title: "Profile Updated",
      message: "Your profile information has been successfully saved.",
    });
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
      <PageHeader
        title="My Profile"
        description="Manage your personal information and preferences."
      />

      <FloatCard className="p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          {/* Avatar Section */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-brand-teal-l flex items-center justify-center text-brand-teal text-3xl font-bold border-4 border-white shadow-sm overflow-hidden relative group cursor-pointer">
              <span>AA</span>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-text-primary">Profile Picture</h3>
              <p className="text-sm text-text-muted">JPG, GIF or PNG. Max size of 800K</p>
              <button type="button" className="text-sm font-medium text-brand-teal hover:underline self-start mt-1">
                Upload new picture
              </button>
            </div>
          </div>

          <hr className="border-black/[0.04]" />

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled
              hint="Contact an admin to change your email address."
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
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

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-primary">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-black/[0.06] text-text-primary text-sm placeholder:text-text-muted focus:bg-surface-1 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 transition-all resize-none outline-none"
              placeholder="Tell us a bit about yourself..."
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 h-11 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[120px]"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </FloatCard>
    </div>
  );
}
