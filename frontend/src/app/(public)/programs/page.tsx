"use client";

import React, { useState } from "react";
import { FloatCard } from "@/components/ui/FloatCard";
import { Drawer } from "@/components/ui/Drawer";

interface ProgramEvent {
  id: string;
  title: string;
  level: string;
  date: string;
  time: string;
  location: string;
  type: "workshop" | "seminar" | "assembly" | "community";
  desc: string;
  agenda: string[];
  image: string;
}

const mockEvents: ProgramEvent[] = [
  {
    id: "evt_1",
    title: "Level 1: Essential Islamic Ethics Workshop",
    level: "Level 1 Foundation",
    date: "Saturday, May 23, 2026",
    time: "09:00 - 12:30 EAT",
    location: "Addis Ababa Main Hall & Online Stream",
    type: "workshop",
    image: "/5.png",
    desc: "An interactive foundational workshop covering personal discipline, time management, and moral values for newly registered mentees.",
    agenda: [
      "09:00 - Registration & Opening Recitation",
      "09:30 - Keynote: The Role of Ethics in Academic Success",
      "10:45 - Breakout Group Discussions with Mentors",
      "11:45 - Q&A Panel & Action Item Assignment",
    ],
  },
  {
    id: "evt_2",
    title: "Level 2: Grassroots Community Organizing",
    level: "Level 2 Intermediate",
    date: "Sunday, May 24, 2026",
    time: "14:00 - 17:00 EAT",
    location: "Oromia Regional Center",
    type: "seminar",
    image: "/6.png",
    desc: "A training seminar equipping mentees with project management tools to successfully execute local neighborhood service drives.",
    agenda: [
      "14:00 - Introduction to Grassroots Mobilization",
      "14:45 - Case Study: Dire Dawa Sanitation Drive",
      "15:45 - Workshop: Drafting a Project Proposal",
      "16:30 - Pitch Review & Feedback Session",
    ],
  },
  {
    id: "evt_3",
    title: "Annual Youth Leadership Conference 2026",
    level: "All Levels & Public",
    date: "July 10 - 12, 2026",
    time: "Full Day Schedule",
    location: "Millennium Hall, Addis Ababa",
    type: "assembly",
    image: "/7.png",
    desc: "Our annual flagship gathering featuring prominent scholars, civic leaders, and over 500 student delegates from across Ethiopia.",
    agenda: [
      "Day 1 - Institutional Vision & Keynote Addresses",
      "Day 2 - Specialized Leadership Tracks & Mentorship Matchmaking",
      "Day 3 - Community Service Pledges & Closing Awards Ceremony",
    ],
  },
];

export default function PublicProgramsPage() {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [selectedEvent, setSelectedEvent] = useState<ProgramEvent | null>(null);

  return (
    <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto px-6 pt-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/[0.04] pb-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Curriculum & Schedule</span>
          <h1 className="text-4xl font-display font-bold text-text-primary tracking-tight">Programs & Upcoming Events</h1>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 p-1 bg-black/[0.04] rounded-xl shrink-0 self-start sm:self-center">
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "list" ? "bg-white text-brand-teal shadow-sm" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "calendar" ? "bg-white text-brand-teal shadow-sm" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Calendar Grid
          </button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="flex flex-col gap-6">
          {mockEvents.map((evt) => (
            <FloatCard
              key={evt.id}
              elevated
              className="p-0 overflow-hidden flex flex-col sm:flex-row items-stretch hover:border-brand-teal/30 transition-all cursor-pointer group"
              onClick={() => setSelectedEvent(evt)}
            >
              <div className="sm:w-48 md:w-56 shrink-0 overflow-hidden">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full min-h-[160px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-1 min-w-0">
              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-semibold uppercase tracking-wider shadow-sm">
                    {evt.level}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-black/[0.04] text-text-secondary text-xs font-medium uppercase tracking-wider">
                    {evt.type}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors mt-1">{evt.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">{evt.desc}</p>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-text-muted font-medium">
                  <span className="flex items-center gap-1">
                    📅 {evt.date}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏰ {evt.time}
                  </span>
                  <span className="flex items-center gap-1">
                    📍 {evt.location}
                  </span>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEvent(evt);
                }}
                className="h-11 px-6 rounded-xl bg-surface-1 border border-black/[0.08] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all shadow-sm shrink-0 flex items-center justify-center gap-1 self-stretch sm:self-center"
              >
                View Agenda & Details
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              </div>
            </FloatCard>
          ))}
        </div>
      ) : (
        <FloatCard className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center gap-4 border-dashed border-black/[0.1]">
          <div className="w-16 h-16 rounded-2xl bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold text-2xl shadow-sm">
            📅
          </div>
          <h3 className="text-lg font-display font-bold text-text-primary">Interactive Calendar View</h3>
          <p className="text-sm text-text-secondary max-w-md leading-relaxed">
            Calendar synchronization and monthly grid view are currently displaying in standard list mode. Switch back to List View to inspect upcoming workshop agendas.
          </p>
          <button
            onClick={() => setViewMode("list")}
            className="mt-2 h-10 px-6 rounded-xl bg-brand-teal text-white text-xs font-semibold hover:bg-brand-teal/90 transition-all shadow-sm"
          >
            Switch to List View
          </button>
        </FloatCard>
      )}

      {/* Event Detail Drawer */}
      <Drawer isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)} title="Event Details & Agenda">
        {selectedEvent && (
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-2 pb-4 border-b border-black/[0.04]">
              <span className="px-2.5 py-1 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-semibold uppercase tracking-wider self-start shadow-sm">
                {selectedEvent.level}
              </span>
              <h2 className="text-xl font-display font-bold text-text-primary mt-1">{selectedEvent.title}</h2>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">{selectedEvent.desc}</p>
            </div>

            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] text-xs">
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Date:</span>
                <span className="font-semibold text-text-primary">{selectedEvent.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Time:</span>
                <span className="font-semibold text-text-primary">{selectedEvent.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Location:</span>
                <span className="font-semibold text-text-primary">{selectedEvent.location}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <h3 className="font-display font-semibold text-text-primary text-sm">Workshop Schedule & Agenda</h3>
              <div className="flex flex-col gap-2.5">
                {selectedEvent.agenda.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-surface-1 border border-black/[0.06] shadow-sm text-xs text-text-secondary font-medium">
                    <span className="w-5 h-5 rounded-lg bg-brand-teal-l text-brand-teal flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="flex-1 mt-0.5">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 mt-auto border-t border-black/[0.04]">
              <button
                onClick={() => alert("Registration confirmed for " + selectedEvent.title)}
                className="h-11 rounded-xl bg-brand-teal text-white text-sm font-semibold hover:bg-brand-teal/90 transition-all shadow-sm flex items-center justify-center"
              >
                Register for Event
              </button>
              <button
                onClick={() => setSelectedEvent(null)}
                className="h-11 rounded-xl bg-surface-1 border border-black/[0.08] text-text-secondary text-sm font-semibold hover:text-text-primary transition-colors shadow-sm flex items-center justify-center"
              >
                Close Drawer
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
