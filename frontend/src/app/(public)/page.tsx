"use client";

import React from "react";
import Link from "next/link";
import { FloatCard } from "@/components/ui/FloatCard";

const featuredProjects = [
  {
    title: "Addis Ababa Youth Tutoring Initiative",
    category: "Academic",
    impact: "500+ students tutored",
    image: "/1.png",
    href: "/projects",
  },
  {
    title: "Dire Dawa Environmental Clean-up Drive",
    category: "Community",
    impact: "12 tons of waste cleared",
    image: "/2.png",
    href: "/projects",
  },
  {
    title: "Regional Ethics & Leadership Camp",
    category: "Leadership",
    impact: "120 student leaders trained",
    image: "/4.png",
    href: "/projects",
  },
];

const upcomingEvents = [
  {
    title: "Level 1: Essential Islamic Ethics Workshop",
    date: "May 23, 2026",
    location: "Addis Ababa Main Hall",
    image: "/5.png",
  },
  {
    title: "Level 2: Grassroots Community Organizing",
    date: "May 24, 2026",
    location: "Oromia Regional Center",
    image: "/6.png",
  },
  {
    title: "Annual Youth Leadership Conference 2026",
    date: "July 10–12, 2026",
    location: "Millennium Hall, Addis Ababa",
    image: "/7.png",
  },
];

const latestNews = [
  {
    title: "Annual Youth Leadership Conference Announced for July 2026",
    date: "May 15, 2026",
    excerpt: "Join over 500 students and delegates from across Ethiopia for 3 days of intensive leadership workshops and keynote lectures.",
    image: "/8.png",
    slug: "annual-youth-leadership-conference-2026",
  },
  {
    title: "Dire Dawa Branch Celebrates 200th Member Milestone",
    date: "May 10, 2026",
    excerpt: "Our regional office in Dire Dawa has officially enrolled its 200th active student mentee, marking a historic achievement in regional expansion.",
    image: "/9.png",
    slug: "dire-dawa-branch-200th-member",
  },
];

const aboutHighlights = [
  { label: "Active Mentees", value: "1,120+" },
  { label: "Regional Branches", value: "6" },
  { label: "Certified Mentors", value: "180+" },
  { label: "Community Projects", value: "45+" },
];

export default function PublicHomepage() {
  return (
    <div className="flex flex-col gap-20 w-full max-w-7xl mx-auto px-6">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-16 py-12 lg:py-20">
        <div className="flex flex-col w-full lg:w-[45%] z-10">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-display font-bold text-[#1A1A24] tracking-tight leading-[1.05]">
            Structured Mentorship. <br />
            <span className="text-brand-teal">Active Leadership.</span>
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed max-w-md mt-6">
            The Muslim Students League (MSL) connects students with dedicated mentors, tracks academic progress, and builds the next generation of ethical leaders across Ethiopia.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-10">
            <Link
              href="/join"
              className="h-14 px-8 rounded-full bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all shadow-md flex items-center justify-center text-base"
            >
              Start Now
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 text-[#1A1A24] font-medium group"
            >
              <div className="w-14 h-14 rounded-full bg-[#1A1A24] text-white flex items-center justify-center shadow-md group-hover:bg-[#2A2A34] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-0.5 -translate-y-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
              Learn more
            </Link>
          </div>

          <div className="mt-20">
            <span className="text-sm text-text-muted font-medium mb-6 block">Trusted by partners across Ethiopia</span>
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

        <div className="relative w-full lg:w-[55%] flex flex-col gap-4 mt-12 lg:mt-0 pr-4 sm:pr-8">
          <div className="absolute -right-4 sm:-right-8 top-1/4 flex flex-col gap-4 z-30 pointer-events-none">
            <div className="bg-[#1C2333] text-white rounded-2xl p-4 shadow-xl w-40 border border-white/5 backdrop-blur-sm">
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-medium mb-1">success rate</div>
              <div className="text-3xl font-display font-bold text-[#E26E43]">98%</div>
            </div>
            <div className="bg-[#1C2333] text-white rounded-2xl p-4 shadow-xl w-40 border border-white/5 backdrop-blur-sm">
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-medium mb-1">completed sessions</div>
              <div className="text-3xl font-display font-bold text-[#E26E43]">14K+</div>
            </div>
            <div className="bg-[#1C2333] text-white rounded-2xl p-4 shadow-xl w-40 border border-white/5 backdrop-blur-sm">
              <div className="text-[11px] text-white/70 uppercase tracking-wide font-medium mb-1">hours logged</div>
              <div className="text-3xl font-display font-bold text-[#E26E43]">12.4K</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-[45%] relative z-10">
              <div className="bg-brand-teal text-white rounded-[2rem] p-6 h-[260px] flex flex-col justify-between relative shadow-lg">
                <div className="flex -space-x-3">
                  {["A", "S", "M"].map((initial) => (
                    <div key={initial} className="w-10 h-10 rounded-full bg-white/20 border-[3px] border-brand-teal flex items-center justify-center text-xs font-bold">
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="pb-2">
                  <div className="text-[2.5rem] font-bold font-display leading-none mb-2">1,120+</div>
                  <div className="text-sm text-white/80 leading-snug">Active mentees<br />across 6 branches</div>
                </div>

                <button className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#1C2333] text-white rounded-full flex items-center justify-center shadow-xl z-20 border-[8px] border-surface-0 hover:scale-105 transition-transform cursor-pointer group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-[#E26E43] group-hover:text-white transition-colors"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-white/20 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                    <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text fontSize="10" fontWeight="bold" fill="currentColor" className="uppercase tracking-[0.15em] opacity-60">
                      <textPath href="#textPath" startOffset="0%">watch video of</textPath>
                    </text>
                  </svg>
                </button>
              </div>

              <div className="bg-brand-teal text-white rounded-[2rem] p-6 h-[180px] flex flex-col justify-end relative shadow-lg overflow-hidden ml-4">
                <div className="text-xl font-display font-bold leading-tight z-10 mb-2">Community<br />impact</div>
                <div className="absolute inset-0 z-0">
                  <svg className="absolute bottom-0 right-0 w-32 h-32 text-white opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L0,60 Q25,80 50,40 T100,20 L100,100 Z" fill="currentColor" />
                    <polyline points="0,60 25,70 50,40 75,50 100,20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-[55%] rounded-[2rem] overflow-hidden relative shadow-lg h-[456px]">
              <img src="/professional_woman.png" alt="MSL mentor guiding a student" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          <div className="w-[90%] rounded-[2rem] overflow-hidden relative shadow-lg h-[200px] ml-[5%]">
            <img src="/group_working.png" alt="MSL members collaborating on a community project" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.04] pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl font-display font-bold text-text-primary">About the Muslim Students League</h2>
          </div>
          <Link href="/about" className="text-sm font-semibold text-brand-teal hover:underline flex items-center gap-1">
            Learn Our Full Story
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-base text-text-secondary leading-relaxed">
              Founded in Addis Ababa, MSL is a nationwide youth development institution dedicated to academic excellence, spiritual grounding, and active civic leadership. We pair every mentee with a certified mentor and track their progress through a structured three-tier curriculum.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              From weekend tutoring drives to regional leadership camps, our platform empowers students to grow into ethical leaders who serve their communities with integrity — backed by technology that makes mentorship transparent and measurable.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {aboutHighlights.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 p-4 rounded-2xl bg-surface-1 border border-black/[0.06] shadow-sm">
                  <span className="text-2xl font-display font-bold text-brand-teal">{stat.value}</span>
                  <span className="text-xs text-text-muted font-medium leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-square max-h-[480px]">
              <img src="/13.png" alt="MSL students at a regional gathering" className="w-full h-full object-cover" />
            </div>
            <FloatCard elevated className="absolute -bottom-6 -left-6 p-5 max-w-[220px] hidden sm:flex flex-col gap-1 border-t-4 border-brand-amber">
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Since 2022</span>
              <p className="text-sm font-display font-bold text-text-primary leading-snug">Building leaders across 6 regional branches</p>
            </FloatCard>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.04] pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Our Impact</span>
            <h2 className="text-3xl font-display font-bold text-text-primary">Featured Community Projects</h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-brand-teal hover:underline flex items-center gap-1">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((proj) => (
            <Link key={proj.title} href={proj.href} className="group">
              <FloatCard elevated className="p-0 overflow-hidden flex flex-col h-full hover:border-brand-teal/30 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-teal/10 text-brand-teal text-[10px] font-semibold uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="text-xs text-brand-teal font-semibold">{proj.impact}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-semibold text-brand-teal flex items-center gap-1 mt-auto pt-2">
                    View Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </div>
              </FloatCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Programs Preview */}
      <section id="programs" className="flex flex-col gap-8">
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

        {/* Upcoming Events */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Upcoming Events</span>
            <h3 className="text-2xl font-display font-bold text-text-primary">Programs & Events Calendar</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <Link key={evt.title} href="/programs" className="group">
                <FloatCard className="p-0 overflow-hidden flex flex-col h-full hover:border-brand-teal/30 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <span className="text-xs text-text-muted font-medium">{evt.date}</span>
                    <h4 className="text-base font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors leading-snug">
                      {evt.title}
                    </h4>
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {evt.location}
                    </span>
                  </div>
                </FloatCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="flex flex-col gap-8">
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
          {latestNews.map((news) => (
            <FloatCard key={news.slug} className="p-0 overflow-hidden flex flex-col md:flex-row hover:border-brand-teal/30 transition-all group">
              <div className="md:w-[200px] shrink-0 aspect-square md:aspect-auto md:h-auto overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover min-h-[180px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between gap-4 flex-1">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-text-muted font-medium">{news.date}</span>
                  <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-brand-teal transition-colors leading-snug">{news.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{news.excerpt}</p>
                </div>
                <Link href={`/news/${news.slug}`} className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1 pt-2 border-t border-black/[0.04]">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </FloatCard>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="flex flex-col lg:flex-row gap-10 items-center rounded-[2rem] overflow-hidden bg-gradient-to-br from-brand-teal/10 via-surface-1 to-brand-amber/5 border border-black/[0.06] shadow-lg">
        <div className="w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
          <img src="/14.png" alt="MSL community outreach team" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-6 p-8 lg:p-12 flex-1">
          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl font-display font-bold text-text-primary leading-tight">
            Ready to join or have questions about our programs?
          </h2>
          <p className="text-base text-text-secondary leading-relaxed max-w-lg">
            Whether you are a student looking for mentorship, a professional interested in becoming a mentor, or an organization seeking partnership — our team at the Addis Ababa headquarters responds within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Arat Kilo, Addis Ababa
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +251 11 123 4567
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              contact@msl.org
            </span>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="h-12 px-8 rounded-xl bg-brand-teal text-white font-medium hover:bg-brand-teal/90 transition-all shadow-md flex items-center justify-center text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/join"
              className="h-12 px-8 rounded-xl border border-black/[0.08] bg-white text-text-primary font-medium hover:bg-black/[0.02] transition-all shadow-sm flex items-center justify-center text-sm"
            >
              Apply to Join
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
