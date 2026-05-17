"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Select } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";

export default function GlobalSettingsPage() {
  const { addToast } = useToastStore();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "preferences" | "security">("profile");

  const [formData, setFormData] = useState({
    name: "Faysal Seifu",
    email: "faysal@msl.org",
    phone: "+251 911 234 567",
    language: "en",
    theme: "light",
    emailNotifications: true,
    smsAlerts: false,
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    addToast({
      type: "success",
      title: "Settings Saved",
      message: "Your preferences and account settings have been successfully updated.",
    });
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="Account Settings"
          description="Manage your personal profile, security credentials, and system notification preferences."
        />
        <div className="flex items-center gap-2 p-1 bg-black/[0.04] rounded-xl shrink-0 self-start sm:self-center">
          {(["profile", "preferences", "security"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                activeTab === tab ? "bg-white text-brand-teal shadow-sm" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <FloatCard className="p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {activeTab === "profile" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                Profile Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Full Name" name="name" required value={formData.name} onChange={handleChange} />
                <Input label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} disabled hint="Contact super admin to change primary email." />
                <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                System Preferences & Notifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Display Language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  options={[
                    { value: "en", label: "English (US)" },
                    { value: "am", label: "Amharic (አማርኛ)" },
                    { value: "ar", label: "Arabic (العربية)" },
                  ]}
                />
                <Select
                  label="Interface Theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  options={[
                    { value: "light", label: "Light Mode (Anti-Gravity Default)" },
                    { value: "dark", label: "Dark Mode" },
                    { value: "system", label: "System Default" },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-4 pt-4 border-t border-black/[0.04]">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={formData.emailNotifications}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-black/[0.2] text-brand-teal focus:ring-brand-teal"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-text-primary">Email Notifications</span>
                    <span className="text-xs text-text-secondary">Receive daily digests and urgent mentee evaluation alerts.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="smsAlerts"
                    checked={formData.smsAlerts}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-black/[0.2] text-brand-teal focus:ring-brand-teal"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-text-primary">SMS Security Alerts</span>
                    <span className="text-xs text-text-secondary">Receive instant text messages for password changes or unrecognized logins.</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-display font-semibold text-text-primary border-b border-black/[0.04] pb-4">
                Change Password
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Current Password" name="currentPassword" type="password" value={formData.currentPassword} onChange={handleChange} />
                <Input label="New Password" name="newPassword" type="password" value={formData.newPassword} onChange={handleChange} hint="Must be at least 8 characters long." />
              </div>
            </div>
          )}

          <div className="flex justify-end pt-4 border-t border-black/[0.04]">
            <button
              type="submit"
              disabled={loading}
              className="h-11 px-8 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[140px] shadow-sm"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
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
