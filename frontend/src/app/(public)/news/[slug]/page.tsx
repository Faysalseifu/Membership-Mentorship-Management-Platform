"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FloatCard } from "@/components/ui/FloatCard";

export default function PublicArticleDetailsPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  // Mock article data
  const article = {
    slug: params.slug,
    title: params.slug.includes("conference")
      ? "Annual Youth Leadership Conference Announced for July 2026"
      : "Dire Dawa Branch Celebrates 200th Member Milestone",
    date: "May 15, 2026",
    author: "Faysal Seifu",
    role: "Executive Director & Super Admin",
    category: "Announcement",
    content: `The Muslim Students League (MSL) is thrilled to announce the dates for our upcoming Annual Youth Leadership Conference, scheduled for July 10 - 12, 2026, at the Millennium Hall in Addis Ababa.

    This year's theme, "Structured Mentorship, Active Leadership," highlights our core commitment to bridging academic excellence with grassroots community service across Ethiopia. Over 500 student delegates, lead mentors, and regional ambassadors from all six branch offices will convene for three days of intensive workshops, keynote lectures, and peer networking.

    Key Highlights of the 2026 Conference:
    1. Institutional Vision & Expansion Strategy: Unveiling our roadmap for onboarding 2,000 active mentees by 2027.
    2. Specialized Leadership Tracks: Tailored breakout seminars for Level 2 intermediate mentees preparing for advanced mentor certification.
    3. Mentorship Matchmaking: Live interactive pairing sessions connecting students with academic and career mentors in engineering, medicine, law, and social sciences.

    Registration for student delegates will open on June 1, 2026, through the member portal. We look forward to welcoming our vibrant student community to Addis Ababa for an inspiring and transformative weekend.`,
  };

  return (
    <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto px-6 pt-8">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-1 border border-black/[0.06] text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors self-start shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to All News
      </Link>

      <FloatCard className="p-8 sm:p-12 flex flex-col gap-8">
        <div className="flex flex-col gap-4 pb-6 border-b border-black/[0.04]">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-lg bg-brand-teal/10 text-brand-teal font-semibold uppercase tracking-wider shadow-sm">
              {article.category}
            </span>
            <span className="text-text-muted">• {article.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary leading-[1.2]">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-display font-bold text-sm shadow-sm">
              {article.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-text-primary">{article.author}</span>
              <span className="text-xs text-text-muted">{article.role}</span>
            </div>
          </div>
        </div>

        <div className="text-base text-text-secondary leading-relaxed space-y-6 whitespace-pre-line">
          {article.content}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-4 border-t border-black/[0.04]">
          <div className="flex items-center gap-2 text-xs text-text-muted font-medium">
            <span>Share Article:</span>
            <button onClick={() => alert("Link copied!")} className="text-brand-teal font-semibold hover:underline">Copy Link</button>
          </div>
          <button
            onClick={() => router.push("/join")}
            className="h-11 px-6 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 transition-all text-sm shadow-sm"
          >
            Apply for Membership
          </button>
        </div>
      </FloatCard>
    </div>
  );
}
