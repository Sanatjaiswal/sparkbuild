"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Calendar, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface FloatingConsultationProps {
  onOpenConsultation: () => void;
}

export default function FloatingConsultation({
  onOpenConsultation,
}: FloatingConsultationProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello Sparkbuild team! I want to consult regarding my construction project."
  );
  const whatsappUrl = `https://wa.me/919713337277?text=${whatsappMessage}`;

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

      {/* Sticky Bottom Consultation Banner */}
      {visible && !dismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#111111] text-white border-t-2 border-[#fff200] py-3 px-4 shadow-2xl animate-in slide-in-from-bottom duration-300 hidden sm:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fff200] text-black flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#fff200]">
                  Get Your FREE Expert Consultation
                </p>
                <p className="text-sm text-gray-200 font-medium">
                  Turn your construction vision into a cost-saving reality! Avoid costly mistakes & get itemized estimates.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book My Free Consultation</span>
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-neutral-800 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

