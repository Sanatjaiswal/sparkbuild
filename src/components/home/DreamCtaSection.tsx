import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface DreamCtaSectionProps {
  onOpenConsultation: () => void;
}

export default function DreamCtaSection({ onOpenConsultation }: DreamCtaSectionProps) {
  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fff200]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#181818] rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
              24x7 Emergency &amp; Trauma Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Healing with Care. <span className="text-[#fff200]">Driven by Clinical Excellence.</span>
            </h2>
            <p className="text-base text-gray-300 leading-relaxed font-normal">
              Whether you need urgent trauma admission, joint replacement consultation with Dr. Abhishek Jain, or advanced orthopedic surgery, MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital) provides trusted care round the clock.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm uppercase tracking-wider border border-neutral-700 transition-all active:scale-95"
            >
              <span>Hospital Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

