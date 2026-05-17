"use client";

import React, { useState, useMemo } from "react";
import { FloatCard } from "@/components/ui/FloatCard";
import { Modal } from "@/components/ui/Modal";

interface ProjectItem {
  id: string;
  title: string;
  category: "community" | "academic" | "leadership";
  location: string;
  impact: string;
  date: string;
  desc: string;
  fullDesc: string;
}

const mockProjects: ProjectItem[] = [
  {
    id: "proj_1",
    title: "Addis Ababa Youth Tutoring Initiative",
    category: "academic",
    location: "Addis Ababa",
    impact: "500+ High School Students Tutored",
    date: "Ongoing • Since 2024",
    desc: "A weekend tutoring program pairing university student mentors with local high school students in math, physics, and English.",
    fullDesc: "The Addis Ababa Youth Tutoring Initiative is one of MSL's flagship academic programs. Operating across 5 major community centers in the capital, university student volunteers provide free weekly tutoring, exam preparation sessions, and academic mentorship. The program has successfully helped over 500 students improve their national exam scores by an average of 22%.",
  },
  {
    id: "proj_2",
    title: "Dire Dawa Environmental Clean-up Drive",
    category: "community",
    location: "Dire Dawa",
    impact: "12 Tons of Waste Cleared",
    date: "Completed • March 2026",
    desc: "A massive multi-day community sanitation and tree-planting drive organized by Level 2 and Level 3 mentees.",
    fullDesc: "In partnership with the Dire Dawa municipal sanitation board, over 150 MSL mentees and mentors mobilized for a 3-day environmental restoration initiative. The team successfully cleared 12 tons of non-biodegradable waste from local riverbanks and planted 1,000 indigenous shade trees to combat urban heat island effects.",
  },
  {
    id: "proj_3",
    title: "Regional Ethics & Leadership Camp",
    category: "leadership",
    location: "Oromia Regional Center",
    impact: "120 Student Leaders Trained",
    date: "Completed • Jan 2026",
    desc: "An intensive 5-day retreat focusing on Islamic ethics, public speaking, conflict resolution, and project management.",
    fullDesc: "The Regional Ethics & Leadership Camp gathered top-performing Level 2 mentees for an immersive leadership training retreat. Led by certified senior mentors and guest lecturers from Addis Ababa University, the curriculum focused on ethical decision-making, effective public communication, and grassroots community organizing.",
  },
  {
    id: "proj_4",
    title: "Amhara Hospital Charity & Support Visit",
    category: "community",
    location: "Amhara Regional Center",
    impact: "300+ Patients Supported",
    date: "Completed • Nov 2025",
    desc: "A community welfare drive distributing care packages, medical supplies, and providing companionship to inpatients.",
    fullDesc: "MSL volunteers organized a regional hospital welfare visit, assembling and distributing care packages containing essential hygiene items, warm clothing, and nutritional supplements to over 300 pediatric and elderly patients.",
  },
];

export default function PublicProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return mockProjects;
    return mockProjects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto px-6 pt-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/[0.04] pb-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Our Impact</span>
          <h1 className="text-4xl font-display font-bold text-text-primary tracking-tight">Featured Community Projects</h1>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 p-1 bg-black/[0.04] rounded-xl shrink-0 overflow-x-auto max-w-full">
          {[
            { label: "All Projects", value: "all" },
            { label: "Community Service", value: "community" },
            { label: "Academic Tutoring", value: "academic" },
            { label: "Leadership Training", value: "leadership" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                filter === cat.value ? "bg-white text-brand-teal shadow-sm" : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <FloatCard
            key={proj.id}
            elevated
            className="p-6 flex flex-col justify-between gap-6 hover:border-brand-teal/30 transition-all cursor-pointer group"
            onClick={() => setSelectedProject(proj)}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-black/[0.04] text-[10px] font-semibold text-text-secondary uppercase tracking-wider">
                  {proj.category}
                </span>
                <span className="text-xs text-text-muted">{proj.location}</span>
              </div>

              <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors">{proj.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{proj.desc}</p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-black/[0.04]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-muted">Key Impact:</span>
                <span className="font-semibold text-brand-teal">{proj.impact}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-muted">Timeline:</span>
                <span className="font-medium text-text-primary">{proj.date}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(proj);
                }}
                className="mt-2 w-full h-9 rounded-xl bg-surface-1 border border-black/[0.08] text-xs font-semibold text-text-secondary hover:text-brand-teal hover:border-brand-teal/30 transition-all shadow-sm flex items-center justify-center gap-1"
              >
                View Project Details
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </FloatCard>
        ))}
      </div>

      {/* Project Detail Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title="Project Overview">
        {selectedProject && (
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex flex-col gap-2 pb-4 border-b border-black/[0.04]">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-brand-teal/10 text-brand-teal text-xs font-semibold uppercase tracking-wider shadow-sm">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-text-muted">• {selectedProject.location}</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary mt-1">{selectedProject.title}</h2>
              <span className="text-xs text-brand-teal font-semibold">{selectedProject.impact}</span>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
              {selectedProject.fullDesc}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] text-xs text-text-muted font-medium">
              <span>Status & Date: {selectedProject.date}</span>
              <span>Organized by MSL Mentees</span>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="h-10 px-6 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all text-sm shadow-sm"
              >
                Close Overview
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
