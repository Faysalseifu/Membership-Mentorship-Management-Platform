"use client";

import React, { useState } from "react";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input, Textarea } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";

export default function PublicContactPage() {
  const { addToast } = useToastStore();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);

    addToast({
      type: "success",
      title: "Message Sent",
      message: "Thank you for reaching out. Our support team will respond within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col gap-20 w-full max-w-7xl mx-auto px-6 pt-8">
      {/* Header & Intro */}
      <div className="flex flex-col gap-4 text-center max-w-xl mx-auto">
        <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Get in Touch</span>
        <h1 className="text-4xl font-display font-bold text-text-primary tracking-tight">Contact Support & Headquarters</h1>
        <p className="text-sm text-text-secondary leading-relaxed">
          Have questions about our mentorship tiers, regional branch offices, or partnership opportunities? Send us a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <FloatCard className="p-8 sm:p-12 flex flex-col gap-8">
          <h2 className="text-2xl font-display font-bold text-text-primary border-b border-black/[0.04] pb-4">
            Send a Direct Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input label="Your Full Name" name="name" required value={formData.name} onChange={handleChange} placeholder="Ahmed Ali" />
            <Input label="Email Address" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="ahmed@example.com" />
            <Input label="Subject / Topic" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Mentorship Partnership Inquiry" />
            <Textarea label="Your Message" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Provide specific details regarding your inquiry..." />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-11 px-8 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all disabled:opacity-70 flex items-center justify-center min-w-[140px] shadow-sm text-sm"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                "Submit Message"
              )}
            </button>
          </form>
        </FloatCard>

        {/* Floating Map Card & Branch Info */}
        <div className="flex flex-col gap-8">
          <FloatCard elevated className="p-8 flex flex-col gap-6 border-t-4 border-brand-teal">
            <h3 className="text-xl font-display font-bold text-text-primary">Addis Ababa Headquarters</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Our central coordinating office oversees all nationwide mentorship pairings, curriculum development, and executive governance.
            </p>

            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] text-xs text-text-secondary font-medium">
              <span className="flex items-center gap-2">📍 Arat Kilo, Near Ministry of Education, Addis Ababa</span>
              <span className="flex items-center gap-2">📞 +251 11 123 4567 / +251 91 123 4567</span>
              <span className="flex items-center gap-2">✉️ contact@msl.org / support@msl.org</span>
            </div>

            {/* Simulated Floating Map Card */}
            <div className="w-full h-64 rounded-2xl bg-black/[0.03] border border-black/[0.06] flex flex-col items-center justify-center text-center gap-2 shadow-inner p-4">
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xl shadow-sm animate-pulse">
                📍
              </div>
              <span className="font-display font-semibold text-text-primary text-sm">Interactive Map Location</span>
              <span className="text-xs text-text-muted max-w-xs">Arat Kilo Square, Addis Ababa, Ethiopia</span>
            </div>
          </FloatCard>

          <FloatCard className="p-6 flex flex-col gap-4">
            <h4 className="font-display font-semibold text-text-primary text-sm">Regional Branch Contacts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-text-secondary font-medium pt-2 border-t border-black/[0.04]">
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-text-primary">Dire Dawa Branch</span>
                <span>diredawa@msl.org</span>
                <span>+251 25 112 3456</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-text-primary">Oromia Regional Office</span>
                <span>oromia@msl.org</span>
                <span>+251 22 112 3456</span>
              </div>
            </div>
          </FloatCard>
        </div>
      </div>

      {/* Partner Logos Strip */}
      <section className="flex flex-col items-center text-center gap-8 pt-12 border-t border-black/[0.04]">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Institutional Support</span>
          <h2 className="text-2xl font-display font-bold text-text-primary">Our Academic & Community Partners</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-70">
          {[
            "Addis Ababa University",
            "AllCan Development Center",
            "Ethiopian Youth Federation",
            "Dire Dawa City Administration",
            "Awash Foundation",
          ].map((partner, idx) => (
            <div key={idx} className="flex items-center gap-2 font-display font-bold text-base text-text-muted hover:text-brand-teal transition-colors cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-brand-teal/40" />
              {partner}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
