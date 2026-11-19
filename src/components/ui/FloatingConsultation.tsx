"use client";

import React, { useState, useEffect } from "react";
import { OfficialWhatsappIcon } from "@/components/ui/SocialIcons";

interface FloatingConsultationProps {
  onOpenConsultation?: () => void;
}

export default function FloatingConsultation({
  onOpenConsultation: _onOpenConsultation,
}: FloatingConsultationProps = {}) {
  const [bottomOffset, setBottomOffset] = useState<number>(20);

  useEffect(() => {
    const handleScroll = () => {
      const greenStrip = document.getElementById("footer-bottom-strip");
      if (!greenStrip) return;
      const rect = greenStrip.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the top edge of the green footer strip enters the viewport:
      if (rect.top < windowHeight) {
        const overlap = windowHeight - rect.top;
        // Keep message icon at least 16px above the green div
        setBottomOffset(overlap + 16);
      } else {
        setBottomOffset(window.innerWidth < 640 ? 20 : 24);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello MP Hospital team! I need orthopedic consultation / emergency medical assistance with Dr. Abhishek Jain."
  );
  const whatsappUrl = `https://wa.me/917648998668?text=${whatsappMessage}`;

  return (
    <aside aria-label="Quick Connect on WhatsApp">
      {/* Floating WhatsApp Quick Connect Button (Strictly circular with icon dead-centered) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MP Hospital on WhatsApp"
        style={{ bottom: `${bottomOffset}px` }}
        className="fixed right-4 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center p-0 shadow-[0_6px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer select-none"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Authentic Official WhatsApp Icon with Handset - Exactly in the center */}
        <OfficialWhatsappIcon className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-md group-hover:rotate-6 transition-transform duration-300" />

        {/* Desktop Tooltip Pill floating on the left (doesn't affect button centering) */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="bg-neutral-900/95 backdrop-blur-xs text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <span className="w-2 h-2 bg-neutral-900/95 rotate-45 -ml-1" />
        </div>
      </a>
    </aside>
  );
}
