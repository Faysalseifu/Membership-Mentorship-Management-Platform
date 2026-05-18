"use client";

import React from "react";
import { FloatCard } from "@/components/ui/FloatCard";

export default function PublicAboutPage() {
  const timeline = [
    { year: "2022", title: "Foundation & Vision", desc: "Established in Addis Ababa by a group of dedicated student leaders and academic mentors." },
    { year: "2023", title: "First Regional Expansion", desc: "Opened the Dire Dawa and Oromia regional branch offices, onboarding over 300 active student mentees." },
    { year: "2024", title: "Curriculum Standardization", desc: "Partnered with AllCan Development Center to structure the 3-Tier Level Progression system." },
    { year: "2026", title: "Digital Platform Launch", desc: "Deployed the Anti-Gravity web portal for seamless member intake, mentor assignment, and evaluation tracking." },
  ];

  const leaders = [
    { name: "Faysal Seifu", role: "Executive Director & Super Admin", bio: "Leading global governance, expansion strategy, and institutional partnerships.", img: "FS" },
    { name: "Ustaz Yunus Mohammed", role: "Head of Mentorship Network", bio: "Overseeing mentor training, student pairings, and quarterly curriculum standards.", img: "YM" },
    { name: "Ustaz Musab Ibrahim", role: "Regional Operations Director", bio: "Managing branch logistics, activity verifications, and regional administrative compliance.", img: "MI" },
    { name: "Ustaz Salman Ahmed", role: "Director of Community Impact", bio: "Coordinating nationwide community service initiatives, tutoring drives, and public outreach.", img: "SA" },
  ];

  return (
    <div className="flex flex-col gap-20 w-full max-w-7xl mx-auto px-6">
      {/* Mission / Vision Split Layout */}
      <section className="flex flex-col lg:flex-row items-center gap-12 pt-8">
        <div className="flex flex-col gap-6 flex-1">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Our Purpose</span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary tracking-tight leading-[1.1]">
            Building an Ethical, <br />
            <span className="text-brand-teal">Empowered Generation.</span>
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            The Muslim Students League (MSL) is dedicated to fostering academic excellence, spiritual grounding, and active civic leadership among Muslim youth across Ethiopia. Through structured mentorship and community service, we bridge the gap between potential and impactful achievement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 flex-1 w-full">
          <FloatCard elevated className="p-8 flex flex-col gap-4 flex-1 border-t-4 border-brand-teal">
            <div className="w-12 h-12 rounded-2xl bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-xl shadow-sm">
              🎯
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">Our Mission</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              To provide a comprehensive, multi-tiered mentorship platform that equips students with essential moral values, leadership capabilities, and academic support.
            </p>
          </FloatCard>

          <FloatCard elevated className="p-8 flex flex-col gap-4 flex-1 border-t-4 border-brand-amber">
            <div className="w-12 h-12 rounded-2xl bg-brand-amber-l text-brand-amber flex items-center justify-center font-bold text-xl shadow-sm">
              👁️
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary">Our Vision</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              To be the premier youth development institution in East Africa, recognized for producing exemplary leaders who serve their communities with integrity.
            </p>
          </FloatCard>
        </div>
      </section>

      {/* Leadership Grid with Hover Cards */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 border-b border-black/[0.04] pb-6">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Executive Board</span>
          <h2 className="text-3xl font-display font-bold text-text-primary">Meet Our Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((lead, idx) => (
            <FloatCard key={idx} elevated className="p-6 flex flex-col gap-6 hover:border-brand-teal/30 transition-all group">
              <div className="w-20 h-20 rounded-2xl bg-brand-teal text-white flex items-center justify-center font-display font-bold text-2xl shadow-md group-hover:scale-105 transition-transform">
                {lead.img}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors">{lead.name}</h3>
                <span className="text-xs text-brand-teal font-medium">{lead.role}</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pt-2 border-t border-black/[0.04]">{lead.bio}</p>
            </FloatCard>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 border-b border-black/[0.04] pb-6">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Our Journey</span>
          <h2 className="text-3xl font-display font-bold text-text-primary">Milestones & History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-6 rounded-2xl bg-surface-1 border border-black/[0.06] hover:bg-black/[0.01] transition-colors shadow-sm">
              <span className="text-3xl font-display font-bold text-brand-teal">{item.year}</span>
              <h3 className="text-base font-display font-bold text-text-primary">{item.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
