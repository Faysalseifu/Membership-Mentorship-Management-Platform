"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { FloatCard } from "@/components/ui/FloatCard";

interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: "announcement" | "milestone" | "curriculum";
  excerpt: string;
  featured?: boolean;
  image: string;
}

const mockArticles: NewsArticle[] = [
  {
    id: "news_1",
    slug: "annual-youth-leadership-conference-2026",
    title: "Annual Youth Leadership Conference Announced for July 2026",
    date: "May 15, 2026",
    author: "Faysal Seifu",
    category: "announcement",
    excerpt: "Join over 500 students and delegates from across Ethiopia for 3 days of intensive leadership workshops, keynote lectures, and mentorship matchmaking.",
    featured: true,
    image: "/8.png",
  },
  {
    id: "news_2",
    slug: "dire-dawa-branch-200th-member",
    title: "Dire Dawa Branch Celebrates 200th Member Milestone",
    date: "May 10, 2026",
    author: "Ustaz Salman Ahmed",
    category: "milestone",
    excerpt: "Our regional office in Dire Dawa has officially enrolled its 200th active student mentee, marking a historic achievement in regional expansion and youth outreach.",
    image: "/9.png",
  },
  {
    id: "news_3",
    slug: "level-3-curriculum-enhancements",
    title: "Level 3 Curriculum Enhancements & Advanced Mentor Training",
    date: "April 28, 2026",
    author: "Ustaz Yunus Mohammed",
    category: "curriculum",
    excerpt: "The mentorship network board has published updated guidelines for Level 3 advanced mentees, introducing specialized facilitation tracks and peer-evaluation models.",
    image: "/10.png",
  },
  {
    id: "news_4",
    slug: "addis-ababa-ramadan-tutoring-success",
    title: "Addis Ababa Ramadan Tutoring Drive Concludes with Exemplary Results",
    date: "April 15, 2026",
    author: "Ustaz Musab Ibrahim",
    category: "milestone",
    excerpt: "Over 400 high school students participated in our intensive Ramadan exam preparation camps across the capital, demonstrating exceptional dedication to academic growth.",
    image: "/11.png",
  },
];

export default function PublicNewsPage() {
  const [filter, setFilter] = useState<string>("all");

  const featuredArticle = mockArticles.find((a) => a.featured)!;

  const filteredArticles = useMemo(() => {
    const list = mockArticles.filter((a) => !a.featured);
    if (filter === "all") return list;
    return list.filter((a) => a.category === filter);
  }, [filter]);

  return (
    <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto px-6 pt-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/[0.04] pb-6">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">News & Insights</span>
          <h1 className="text-4xl font-display font-bold text-text-primary tracking-tight">Latest Platform Announcements</h1>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 p-1 bg-black/[0.04] rounded-xl shrink-0 overflow-x-auto max-w-full">
          {[
            { label: "All News", value: "all" },
            { label: "Announcements", value: "announcement" },
            { label: "Milestones", value: "milestone" },
            { label: "Curriculum Updates", value: "curriculum" },
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

      {/* Featured Story Hero Card */}
      {filter === "all" && featuredArticle && (
        <FloatCard elevated className="p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 border-t-4 border-brand-teal bg-gradient-to-tr from-brand-teal/5 to-transparent">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-lg bg-brand-teal/10 text-brand-teal font-semibold uppercase tracking-wider shadow-sm">
                Featured Story
              </span>
              <span className="text-text-muted">• {featuredArticle.date}</span>
              <span className="text-text-muted">• By {featuredArticle.author}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary leading-[1.2]">
              {featuredArticle.title}
            </h2>

            <p className="text-base text-text-secondary leading-relaxed">
              {featuredArticle.excerpt}
            </p>

            <Link
              href={`/news/${featuredArticle.slug}`}
              className="h-12 px-8 rounded-xl bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 self-start text-sm group"
            >
              Read Full Feature
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          <div className="w-full lg:w-96 h-64 rounded-2xl overflow-hidden shadow-inner shrink-0">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
          </div>
        </FloatCard>
      )}

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((art) => (
          <FloatCard
            key={art.id}
            elevated
            className="p-0 overflow-hidden flex flex-col justify-between hover:border-brand-teal/30 transition-all group"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-between gap-6 flex-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-black/[0.04] font-semibold text-text-secondary uppercase tracking-wider">
                  {art.category}
                </span>
                <span className="text-text-muted">{art.date}</span>
              </div>

              <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors mt-1">{art.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{art.excerpt}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-black/[0.04]">
              <span className="text-xs text-text-muted font-medium">By {art.author}</span>
              <Link
                href={`/news/${art.slug}`}
                className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
              >
                Read Article
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
            </div>
          </FloatCard>
        ))}
      </div>
    </div>
  );
}
