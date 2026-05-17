"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FloatCard } from "@/components/ui/FloatCard";
import { Input } from "@/components/ui/Input";
import { useToastStore } from "@/store/toastStore";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { addToast } = useToastStore();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    addToast({
      type: "success",
      title: "OTP Sent",
      message: `A verification code was sent to ${email}`,
    });
    setStep(2);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate verifying OTP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    if (otp === "123456" || otp.length === 6) {
      addToast({
        type: "success",
        title: "Code Verified",
        message: "Please enter your new password.",
      });
      setStep(3);
    } else {
      addToast({
        type: "error",
        title: "Invalid Code",
        message: "Please enter a valid 6-digit verification code.",
      });
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate resetting password
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    addToast({
      type: "success",
      title: "Password Reset Successful",
      message: "You can now log in with your new password.",
    });
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-surface-0 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-amber/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-md relative z-10">
        <FloatCard elevated className="p-8 md:p-10 flex flex-col gap-8 overflow-hidden">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white font-bold font-display text-2xl mb-2">
              M
            </div>
            <h1 className="text-2xl font-display font-semibold text-text-primary">
              Reset Password
            </h1>
            <p className="text-text-secondary text-sm">
              {step === 1 && "Enter your email to receive a verification code"}
              {step === 2 && "Enter the 6-digit code sent to your email"}
              {step === 3 && "Create a secure new password"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleEmailSubmit}
                className="flex flex-col gap-5"
              >
                <Input
                  label="Email Address"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                />
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
                    "Send OTP Code"
                  )}
                </button>
                <div className="text-center mt-2">
                  <button
                    type="button"
                    onClick={() => router.push("/auth/login")}
                    className="text-xs font-medium text-text-secondary hover:text-brand-teal transition-colors"
                  >
                    Back to Login
                  </button>
                </div>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleOtpSubmit}
                className="flex flex-col gap-5"
              >
                <Input
                  label="Verification Code (OTP)"
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="123456"
                  hint={`Sent to ${email}`}
                />
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
                    "Verify Code"
                  )}
                </button>
                <div className="flex items-center justify-between mt-2 text-xs font-medium text-text-secondary">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="hover:text-brand-teal transition-colors"
                  >
                    Change Email
                  </button>
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="text-brand-teal hover:underline"
                  >
                    Resend Code
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
              <motion.form
                key="step-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handlePasswordSubmit}
                className="flex flex-col gap-5"
              >
                <Input
                  label="New Password"
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  hint="Must be at least 8 characters long"
                />
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
                    "Reset Password"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </FloatCard>
      </div>
    </div>
  );
}
