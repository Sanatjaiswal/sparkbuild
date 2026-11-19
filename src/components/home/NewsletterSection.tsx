"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Bell, ShieldCheck, Sparkles } from "lucide-react";

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
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-neutral-50 to-white border-t border-neutral-200 select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062438] via-[#00527c] to-[#008EC7] p-8 sm:p-12 lg:p-16 shadow-[0_24px_70px_-15px_rgba(0,142,199,0.35)] border border-sky-400/20">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-400/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[100px] pointer-events-none" />

          {/* Geometric Dot Grid Background Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs text-xs font-black uppercase tracking-wider text-sky-100">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-amber-300" />
                  Health &amp; Wellness Bulletin
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Stay Informed on{" "}
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-sm">
                  Bone &amp; Joint Health
                </span>
              </h2>

              <p className="text-sm sm:text-base text-sky-100/90 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Subscribe for verified joint preservation tips, postoperative rehab advice from{" "}
                <strong className="text-white font-extrabold underline decoration-amber-400/60 decoration-2 underline-offset-4">
                  Dr. Abhishek Jain
                </strong>
                , and advance alerts for free community orthopedic camps.
              </p>

              {/* Quick Trust Pillars */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-sky-100/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No spam ever</span>
                </div>
                <span className="text-sky-300/40 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>100% Free medical tips</span>
                </div>
                <span className="text-sky-300/40 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>

            {/* Right Column: Integrated Interactive Form Card */}
            <div className="lg:col-span-5 w-full">
              {submitted ? (
                <div className="p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 text-white shadow-2xl text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-300 shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">You&apos;re Subscribed!</h3>
                  <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-normal">
                    Thank you for joining our health community. You will receive regular joint wellness guidance directly from MP Hospital specialists.
                  </p>
                </div>
              ) : (
                <div className="p-2 sm:p-2.5 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-white rounded-[26px] shadow-lg">
                    <div className="flex items-center gap-3 pl-4 py-2 sm:py-0 flex-1 w-full">
                      <Mail className="w-5 h-5 text-[#008EC7] shrink-0" />
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
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Micro note below input */}
                  <div className="px-4 py-2.5 text-[11px] text-sky-100/70 text-center flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Your privacy is protected. We will never share your email.</span>
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
