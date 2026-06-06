"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FloatCard } from "@/components/ui/FloatCard";
import { useToastStore } from "@/store/toastStore";

export default function LoginPage() {
  const router = useRouter();
  const { addToast } = useToastStore();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
    setLoading(false);
    
    if (res?.error) {
      addToast({
        type: "error",
        title: "Login Failed",
        message: "Invalid email or password",
      });
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-surface-0 flex flex-col relative overflow-hidden">
      {/* Navigation Header */}
      <header className="relative z-20 bg-white/70 backdrop-blur-md border-b border-black/[0.06] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-teal text-white flex items-center justify-center font-display font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-text-primary leading-none">Muslim Students League</span>
              <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider mt-0.5">Development Center</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              About
            </Link>
            <Link href="/programs" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Programs
            </Link>
            <Link href="/contact" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <Link
            href="/join"
            className="h-10 px-5 rounded-xl bg-brand-teal text-white hover:bg-brand-teal/90 transition-all text-xs font-semibold flex items-center justify-center shadow-sm"
          >
            Join Application
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        {/* Decorative blurred background shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-amber/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <FloatCard elevated className="p-8 md:p-10 flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white font-bold font-display text-2xl mb-2">
              M
            </div>
            <h1 className="text-2xl font-display font-semibold text-text-primary">
              Welcome back
            </h1>
            <p className="text-text-secondary text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text-primary" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-11 px-4 rounded-xl bg-black/[0.02] border border-black/[0.06] text-text-primary placeholder:text-text-muted focus:bg-surface-1 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-text-primary" htmlFor="password">
                  Password
                </label>
                <a href="/auth/reset" className="text-xs font-medium text-brand-teal hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="h-11 px-4 rounded-xl bg-black/[0.02] border border-black/[0.06] text-text-primary placeholder:text-text-muted focus:bg-surface-1 focus:border-brand-teal/30 focus:ring-2 focus:ring-brand-teal/20 transition-all outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-11 w-full bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal/90 focus:ring-4 focus:ring-brand-teal/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Registration Link */}
          <div className="flex items-center justify-center pt-6 border-t border-black/[0.04]">
            <p className="text-sm text-text-secondary">
              Don't have an account?{" "}
              <Link href="/join" className="font-semibold text-brand-teal hover:underline">
                Apply to join MSL
              </Link>
            </p>
          </div>
        </FloatCard>
      </motion.div>
      </div>
    </div>
  );
}
