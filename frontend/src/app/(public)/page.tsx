"use client";

import React from "react";
import Link from "next/link";
import { FloatCard } from "@/components/ui/FloatCard";
import { StatCard } from "@/components/ui/StatCard";

export default function PublicHomepage() {
  return (
    <div className="flex flex-col gap-20 w-full max-w-7xl mx-auto px-6">
      {/* Full-Viewport Hero with Modern Masonry Design */}
      <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-16 py-12 lg:py-20">
        
        {/* Left Content Column */}
        <div className="flex flex-col w-full lg:w-[45%] z-10">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-display font-bold text-[#1A1A24] tracking-tight leading-[1.05]">
            Turn Clicks into <br />
            Conversions
          </h1>
          
          <p className="text-lg text-text-secondary leading-relaxed max-w-md mt-6">
            With MSL, master the art of online persuasion as we harness data, creativity, and technology to transform your digital engagement strategy.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <Link
              href="/join"
              className="h-14 px-8 rounded-full bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all shadow-md flex items-center justify-center text-base"
            >
              Start Now
            </Link>
            <Link
              href="/learn-more"
              className="flex items-center gap-3 text-[#1A1A24] font-medium group"
            >
              <div className="w-14 h-14 rounded-full bg-[#1A1A24] text-white flex items-center justify-center shadow-md group-hover:bg-[#2A2A34] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0.5 -translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              Learn more
            </Link>
          </div>
          
          <div className="mt-20">
            <span className="text-sm text-text-muted font-medium mb-6 block">Powered by</span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-70">
              <span className="font-bold text-base flex items-center gap-2"><span className="text-[#FFB6C1]">❖</span> UrbanNest</span>
              <span className="font-bold text-base flex items-center gap-2"><span className="text-brand-amber">◮</span> Mountana</span>
              <span className="font-bold text-base text-[#FF7F50]">FactFix</span>
              <span className="font-bold text-base flex items-center gap-2"><span className="text-info">⬡</span> Log Trans</span>
              <span className="font-bold text-base flex items-center gap-2"><span className="text-warning">⊚</span> Excels</span>
              <span className="font-bold text-base flex items-center gap-1 text-[#FFA07A]"><span className="bg-[#FFA07A] text-white text-[10px] w-4 h-4 rounded-sm flex items-center justify-center">m</span> MeetHub</span>
            </div>
          </div>
        </div>

        {/* Right Masonry Layout Column */}
        <div className="relative w-full lg:w-[55%] flex flex-col gap-4 mt-12 lg:mt-0 pr-4 sm:pr-8">
          
          {/* Floating Stat Cards (Overlapping right edge) */}
          <div className="absolute -right-4 sm:-right-8 top-1/4 flex flex-col gap-4 z-30 pointer-events-none">
            <div className="bg-[#1C2333] text-white rounded-2xl p-4 shadow-xl w-40 border border-white/5 backdrop-blur-sm">
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-medium mb-1">satisfied rate</div>
              <div className="text-3xl font-display font-bold text-[#E26E43]">98%</div>
            </div>
            <div className="bg-[#1C2333] text-white rounded-2xl p-4 shadow-xl w-40 border border-white/5 backdrop-blur-sm">
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-medium mb-1">successful projects</div>
              <div className="text-3xl font-display font-bold text-[#E26E43]">14K</div>
            </div>
            <div className="bg-[#1C2333] text-white rounded-2xl p-4 shadow-xl w-40 border border-white/5 backdrop-blur-sm">
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-medium mb-1">clients served</div>
              <div className="text-3xl font-display font-bold text-[#E26E43]">5,8K</div>
            </div>
          </div>

          {/* Top Row */}
          <div className="flex gap-4">
            {/* Left Sub-column */}
            <div className="flex flex-col gap-4 w-[45%] relative z-10">
              {/* Top Green Card */}
              <div className="bg-brand-teal text-white rounded-[2rem] p-6 h-[260px] flex flex-col justify-between relative shadow-lg">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-surface-overlay border-[3px] border-brand-teal overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-overlay border-[3px] border-brand-teal overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-overlay border-[3px] border-brand-teal overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pb-2">
                  <div className="text-[2.5rem] font-bold font-display leading-none mb-2">124K+</div>
                  <div className="text-sm text-white/80 leading-snug">More than 2,000<br/>people has joined us</div>
                </div>
                
                {/* Watch Video Circular Button */}
                <button className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#1C2333] text-white rounded-full flex items-center justify-center shadow-xl z-20 border-[8px] border-surface-0 hover:scale-105 transition-transform cursor-pointer group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-[#E26E43] group-hover:text-white transition-colors"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-white/20 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                    <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text fontSize="10" fontWeight="bold" fill="currentColor" className="uppercase tracking-[0.15em] opacity-60">
                      <textPath href="#textPath" startOffset="0%">watch video of our action</textPath>
                    </text>
                  </svg>
                </button>
              </div>
              
              {/* Bottom Green Card */}
              <div className="bg-brand-teal text-white rounded-[2rem] p-6 h-[180px] flex flex-col justify-end relative shadow-lg overflow-hidden ml-4">
                <div className="text-xl font-display font-bold leading-tight z-10 mb-2">Successful<br/>growth</div>
                
                {/* Decorative Chart Graphic */}
                <div className="absolute inset-0 z-0">
                  <svg className="absolute bottom-0 right-0 w-32 h-32 text-white opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L0,60 Q25,80 50,40 T100,20 L100,100 Z" fill="currentColor" />
                    <polyline points="0,60 25,70 50,40 75,50 100,20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="25" cy="70" r="3" fill="currentColor" />
                    <circle cx="50" cy="40" r="3" fill="currentColor" />
                    <circle cx="75" cy="50" r="3" fill="currentColor" />
                    <circle cx="100" cy="20" r="3" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right Sub-column (Tall Image) */}
            <div className="w-[55%] rounded-[2rem] overflow-hidden relative shadow-lg h-[456px]">
              <img src="/professional_woman.png" alt="Professional Woman" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Bottom Row (Wide Image) */}
          <div className="w-[90%] rounded-[2rem] overflow-hidden relative shadow-lg h-[200px] ml-[5%]">
            <img src="/group_working.png" alt="Team Working" className="w-full h-full object-cover" />
          </div>
          
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
