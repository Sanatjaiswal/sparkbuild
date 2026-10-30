"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface FloatingConsultationProps {
  onOpenConsultation?: () => void;
}

export default function FloatingConsultation({
  onOpenConsultation,
}: FloatingConsultationProps) {
  const whatsappMessage = encodeURIComponent(
    "Hello MP Hospital team! I need orthopedic consultation / emergency medical assistance."
  );
  const whatsappUrl = `https://wa.me/917648998668?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          Chat With Us
        </span>
      </a>
    </>
  );
}
