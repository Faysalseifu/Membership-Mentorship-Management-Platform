"use client";

import React from "react";
import Link from "next/link";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatCard } from "@/components/ui/StatCard";

export default function PublicHomepage() {
  return (
    <div className="flex flex-col gap-20 w-full max-w-7xl mx-auto px-6">
      {/* Full-Viewport Hero with Floating Stat Counters */}
      <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-semibold self-start shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            Empowering Muslim Youth Across Ethiopia
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-text-primary tracking-tight leading-[1.1]">
            Structured Mentorship. <br />
            <span className="text-brand-teal">Active Leadership.</span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
            The Muslim Students League (MSL) connects students with dedicated mentors, tracks academic and community service progress, and builds the next generation of ethical leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/join"
              className="h-12 px-8 rounded-xl bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base group"
            >
              Apply for Membership
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <Link
              href="/auth/login"
              className="h-12 px-8 rounded-xl bg-surface-1 border border-black/[0.08] text-text-primary hover:bg-black/[0.02] transition-colors font-medium flex items-center justify-center text-base shadow-sm"
            >
              Member Portal Login
            </Link>
          </div>
        </div>

        {/* Hero Floating Cards Drift Simulation */}
        <div className="relative w-full lg:w-1/2 flex flex-col gap-6 sm:px-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/5 to-transparent rounded-3xl -z-10 blur-2xl" />

          <div className="flex flex-col sm:flex-row gap-6 items-end">
            <FloatCard elevated className="p-6 flex-1 border-t-4 border-t-brand-teal animate-float shadow-lg">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-text-muted uppercase font-semibold tracking-wider">Active Members</span>
                <span className="text-4xl font-display font-bold text-text-primary">1,120+</span>
                <span className="text-xs text-success font-medium">+14% this quarter</span>
              </div>
            </FloatCard>

            <FloatCard elevated className="p-6 flex-1 border-t-4 border-t-brand-amber animate-float shadow-xl" style={{ animationDelay: "2s" }}>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-text-muted uppercase font-semibold tracking-wider">Dedicated Mentors</span>
                <span className="text-4xl font-display font-bold text-text-primary">85</span>
                <span className="text-xs text-brand-amber font-medium">Across 6 branches</span>
              </div>
            </FloatCard>
          </div>

          <FloatCard elevated className="p-6 border-t-4 border-t-info animate-float shadow-md" style={{ animationDelay: "4s" }}>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-text-muted uppercase font-semibold tracking-wider">Community Impact</span>
                <span className="text-2xl font-display font-bold text-text-primary">12,450 Hours</span>
                <span className="text-xs text-text-secondary">Logged community service & tutoring</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-info/10 text-info flex items-center justify-center font-bold text-xl shadow-sm shrink-0">
                ✨
              </div>
            </div>
          </FloatCard>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.04] pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Curriculum & Growth</span>
            <h2 className="text-3xl font-display font-bold text-text-primary">Core Development Programs</h2>
          </div>
          <Link href="/programs" className="text-sm font-semibold text-brand-teal hover:underline flex items-center gap-1">
            Explore All Programs
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Level 1: Foundation", desc: "Introductory curriculum focusing on essential Islamic ethics, personal discipline, and core academic excellence.", color: "teal" },
            { title: "Level 2: Intermediate", desc: "Active community involvement, pairing with senior mentors, and leading local neighborhood service projects.", color: "amber" },
            { title: "Level 3: Advanced", desc: "Leadership training, regional workshop facilitation, and preparing to become certified MSL mentors.", color: "info" },
          ].map((prog, idx) => (
            <FloatCard key={idx} elevated className="p-8 flex flex-col justify-between gap-6 hover:border-brand-teal/30 transition-all group">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal-l text-brand-teal flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors">{prog.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{prog.desc}</p>
              </div>
              <Link href="/programs" className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1 pt-4 border-t border-black/[0.04]">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </FloatCard>
          ))}
        </div>
      </section>

      {/* News Strip Section */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.04] pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Stay Updated</span>
            <h2 className="text-3xl font-display font-bold text-text-primary">Latest News & Announcements</h2>
          </div>
          <Link href="/news" className="text-sm font-semibold text-brand-teal hover:underline flex items-center gap-1">
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Annual Youth Leadership Conference Announced for July 2026", date: "May 15, 2026", excerpt: "Join over 500 students and delegates from across Ethiopia for 3 days of intensive leadership workshops and keynote lectures." },
            { title: "Dire Dawa Branch Celebrates 200th Member Milestone", date: "May 10, 2026", excerpt: "Our regional office in Dire Dawa has officially enrolled its 200th active student mentee, marking a historic achievement in regional expansion." },
          ].map((news, idx) => (
            <FloatCard key={idx} className="p-6 flex flex-col justify-between gap-4 hover:bg-black/[0.01] transition-colors group">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-text-muted font-medium">{news.date}</span>
                <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors">{news.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{news.excerpt}</p>
              </div>
              <Link href="/news" className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1 pt-2 border-t border-black/[0.04]">
                Read Article
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </FloatCard>
          ))}
        </div>
      </section>
    </div>
  );
}
