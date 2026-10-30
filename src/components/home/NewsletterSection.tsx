"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      try {
        const subscribers = JSON.parse(localStorage.getItem("sparkbuild_newsletter") || "[]");
        subscribers.push({ email, date: new Date().toISOString() });
        localStorage.setItem("sparkbuild_newsletter", JSON.stringify(subscribers));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <section className="py-20 bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
              Health &amp; Wellness Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Stay Informed on <span className="text-[#fff200]">Bone &amp; Joint Health</span>
            </h2>
            <p className="text-sm text-gray-300 font-normal leading-relaxed">
              Subscribe to regular health tips, joint care advice from Dr. Abhishek Jain, and announcements for free community health camps at MP Hospital &amp; Trauma Centre.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
            {submitted ? (
              <div className="flex items-center gap-3 bg-neutral-800 p-4 rounded-2xl border border-green-500/30 text-green-400">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <p className="text-sm font-semibold">
                  Thank you for subscribing to MP Hospital health updates!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-full bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

