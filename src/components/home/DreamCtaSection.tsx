import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface DreamCtaSectionProps {
  onOpenConsultation: () => void;
}

export default function DreamCtaSection({ onOpenConsultation }: DreamCtaSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-red-50/80 via-white to-sky-50/80 rounded-3xl p-6 sm:p-10 lg:p-14 border-2 border-red-200/90 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#abe0f6] text-[#073854] text-xs font-black uppercase tracking-wider shadow-xs">
              24x7 Emergency &amp; Trauma Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight">
              Healing with Care. <span className="text-red-600">Driven by Clinical Excellence.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Whether you need urgent trauma admission, joint replacement consultation with{" "}
              <span className="text-[#0284c7] font-black underline decoration-red-500 decoration-2">
                Dr. Abhishek Jain
              </span>
              , or advanced orthopedic surgery, MP Hospital &amp; Trauma Centre provides trusted care round the clock.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#abe0f6] hover:bg-[#8ecef1] text-[#073854] font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-sky-900/15 transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-sm uppercase tracking-wider border-2 border-neutral-300 hover:border-neutral-800 transition-all active:scale-95"
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
