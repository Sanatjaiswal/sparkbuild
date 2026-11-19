import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface DreamCtaSectionProps {
  onOpenConsultation: () => void;
}

export default function DreamCtaSection({ onOpenConsultation }: DreamCtaSectionProps) {
  return (
    <section className="py-14 sm:py-18 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-xs">
              24x7 Emergency Casualty
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
              Emergency Trauma &amp; Doctor Consultation Desk
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Our 24x7 Casualty &amp; ALS Ambulance are always on standby for road accidents, fractures, and emergency trauma. For planned knee, hip, spine, and orthopedic consultations, book an appointment or visit our hospital in Beoharbagh, Jabalpur.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#008EC7] hover:bg-[#0077a8] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-sky-600/20 transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book OPD Appointment</span>
            </button>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-300 transition-all active:scale-95"
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
