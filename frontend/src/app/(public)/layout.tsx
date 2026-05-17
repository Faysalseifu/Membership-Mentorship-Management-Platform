"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Programs & Events", href: "/programs" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface-0 text-text-primary selection:bg-brand-teal selection:text-white">
      {/* Sticky Frosted Glass Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md border-b border-black/[0.06] shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-teal text-white flex items-center justify-center font-display font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-text-primary leading-none">Muslim Students League</span>
              <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider mt-0.5">Development Center</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] p-1 rounded-2xl border border-black/[0.04]">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? "bg-white text-brand-teal shadow-sm"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/auth/login"
              className="h-10 px-5 rounded-xl border border-black/[0.08] bg-surface-1 text-text-secondary hover:text-text-primary hover:bg-black/[0.02] transition-colors text-xs font-semibold flex items-center justify-center shadow-sm"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              className="h-10 px-5 rounded-xl bg-brand-teal text-white hover:bg-brand-teal/90 transition-all text-xs font-semibold flex items-center justify-center shadow-sm hover:shadow-md"
            >
              Join Application
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-surface-1 border border-black/[0.06] flex items-center justify-center text-text-secondary shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/[0.06] shadow-lg p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === item.href ? "bg-brand-teal/10 text-brand-teal" : "text-text-secondary hover:bg-black/[0.02]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-black/[0.04]">
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="h-11 rounded-xl border border-black/[0.08] bg-surface-1 text-text-primary text-sm font-semibold flex items-center justify-center shadow-sm"
              >
                Sign In
              </Link>
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="h-11 rounded-xl bg-brand-teal text-white text-sm font-semibold flex items-center justify-center shadow-sm"
              >
                Join Application
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Wrapper */}
      <main className="flex-1 pt-24 pb-16">
        {children}
      </main>

      {/* Shared Public Footer */}
      <footer className="bg-white border-t border-black/[0.06] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-teal text-white flex items-center justify-center font-display font-bold text-sm shadow-sm">
                M
              </div>
              <span className="font-display font-bold text-base tracking-tight text-text-primary">MSL Platform</span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Empowering Muslim students through structured mentorship, leadership development, and active community service across Ethiopia.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-text-primary text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2 text-xs text-text-secondary">
              <Link href="/about" className="hover:text-brand-teal transition-colors">About Us</Link>
              <Link href="/projects" className="hover:text-brand-teal transition-colors">Our Projects</Link>
              <Link href="/programs" className="hover:text-brand-teal transition-colors">Programs & Events</Link>
              <Link href="/news" className="hover:text-brand-teal transition-colors">News & Insights</Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-text-primary text-sm">Legal & Portal</h4>
            <div className="flex flex-col gap-2 text-xs text-text-secondary">
              <Link href="/auth/login" className="hover:text-brand-teal transition-colors">Member Portal Login</Link>
              <Link href="/join" className="hover:text-brand-teal transition-colors">Join Application</Link>
              <Link href="/contact" className="hover:text-brand-teal transition-colors">Contact Support</Link>
              <span className="text-text-muted">Privacy Policy</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-text-primary text-sm">Regional Branches</h4>
            <div className="flex flex-col gap-1.5 text-xs text-text-secondary">
              <span>Addis Ababa (Headquarters)</span>
              <span>Dire Dawa Branch</span>
              <span>Oromia Regional Office</span>
              <span>Amhara Regional Office</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>© 2026 Muslim Students League. All rights reserved.</span>
          <span>Designed & Built by AllCan Development Center</span>
        </div>
      </footer>
    </div>
  );
}
