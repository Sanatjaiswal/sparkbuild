"use client";

import React from "react";
import { PhoneCall, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface FloatingConsultationProps {
  onOpenConsultation?: () => void;
}

export default function FloatingConsultation({
  onOpenConsultation,
}: FloatingConsultationProps) {
  const whatsappMessage = encodeURIComponent(
    "Hello MP Hospital team! I need orthopedic consultation / emergency medical assistance with Dr. Abhishek Jain."
  );
  const whatsappUrl = `https://wa.me/917648998668?text=${whatsappMessage}`;

  return (
    <>
      {/* ========================================================
          1. MOBILE DOCK: Sticky Bottom 3-Action Emergency Bar (< md)
         ======================================================== */}
      <aside
        aria-label="Mobile Emergency and Quick Actions"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#111111]/95 backdrop-blur-md border-t border-neutral-800 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] px-2.5 py-2"
        style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
      >
        <div className="max-w-lg mx-auto grid grid-cols-3 gap-2">
          {/* Action 1: 24x7 Emergency Call */}
          <a
            href={`tel:${siteConfig.phone1Raw || "07612626123"}`}
            aria-label="Call 24x7 Emergency Line"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-center shadow-md active:scale-95 transition-all select-none relative overflow-hidden"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0" />
              <PhoneCall className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] uppercase tracking-wider font-extrabold mt-0.5 leading-tight">
              24x7 Trauma
            </span>
            <span className="text-[9px] text-white/90 font-mono font-bold leading-tight">
              Call Direct
            </span>
          </a>

          {/* Action 2: WhatsApp Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-center shadow-md active:scale-95 transition-all select-none"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold mt-0.5 leading-tight">
              WhatsApp
            </span>
            <span className="text-[9px] text-white/95 font-medium leading-tight">
              Chat Online
            </span>
          </a>

          {/* Action 3: Book Doctor OPD Appointment */}
          <button
            onClick={onOpenConsultation}
            aria-label="Book Doctor OPD Appointment"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#fff200] hover:bg-[#e6da00] text-black font-black text-center shadow-md active:scale-95 transition-all select-none cursor-pointer"
          >
            <Calendar className="w-4 h-4 stroke-[2.5]" />
            <span className="text-[11px] uppercase tracking-wider font-black mt-0.5 leading-tight">
              Book OPD
            </span>
            <span className="text-[9px] text-black/85 font-bold leading-tight">
              Dr. Abhishek
            </span>
          </button>
        </div>
      </aside>

      {/* ========================================================
          2. DESKTOP FLOATING WIDGETS (md and up)
         ======================================================== */}
      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          Chat With Us
        </span>
      </a>

    </>
  );
}
