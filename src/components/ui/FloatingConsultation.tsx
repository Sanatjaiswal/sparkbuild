"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

interface FloatingConsultationProps {
  onOpenConsultation?: () => void;
}

export default function FloatingConsultation({
  onOpenConsultation,
}: FloatingConsultationProps) {
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
      {/* Floating WhatsApp Quick Connect Button (Stays strictly above the green footer div) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MP Hospital on WhatsApp"
        style={{ bottom: `${bottomOffset}px` }}
        className="fixed right-4 sm:right-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:p-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-[transform,shadow] duration-200 group cursor-pointer"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366] shrink-0" />

        {/* Desktop Expandable Label */}
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-1">
          Chat With Us
        </span>
      </a>
    </aside>
  );
}
