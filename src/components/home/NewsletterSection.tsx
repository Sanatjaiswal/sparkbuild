"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Bell, ShieldCheck } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      try {
        const subscribers = JSON.parse(localStorage.getItem("mphospital_newsletter") || "[]");
        subscribers.push({ email, date: new Date().toISOString() });
        localStorage.setItem("mphospital_newsletter", JSON.stringify(subscribers));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0c2f4d] p-8 sm:p-12 lg:p-14 border border-sky-900/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-sky-100">
                <Bell className="w-3.5 h-3.5 text-amber-300" />
                <span>Hospital Health Advisory</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Stay Informed on Bone, Joint &amp; Spine Health
              </h2>

              <p className="text-sm sm:text-base text-sky-100/90 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Receive doctor-approved joint preservation guidance, post-surgery rehabilitation tips, and notifications for upcoming free orthopedic consultation camps in Jabalpur.
              </p>

              {/* Quick Trust Pillars */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-sky-100/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doctor-verified guidance</span>
                </div>
                <span className="text-sky-300/40 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>100% Free public service</span>
                </div>
                <span className="text-sky-300/40 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No spam</span>
                </div>
              </div>
            </div>

            {/* Right Column: Integrated Form Card */}
            <div className="lg:col-span-5 w-full">
              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/20 text-white shadow-lg text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">You&apos;re Subscribed!</h3>
                  <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-normal">
                    Thank you. You will receive regular joint wellness guidance directly from MP Hospital specialists.
                  </p>
                </div>
              ) : (
                <div className="p-2 sm:p-2.5 rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 pl-3 py-2 sm:py-0 flex-1 w-full">
                      <Mail className="w-4 h-4 text-[#008EC7] shrink-0" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent text-neutral-900 placeholder:text-neutral-400 text-sm font-medium focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Micro note below input */}
                  <div className="px-3 py-2 text-[11px] text-sky-100/70 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                    <span>Your privacy is respected. Unsubscribe anytime.</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
