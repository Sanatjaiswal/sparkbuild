"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Phone, Ambulance, ShieldCheck, MapPin, Clock } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/siteData";

interface AmbulanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AmbulanceModal({ isOpen, onClose }: AmbulanceModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when ambulance modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ambulance-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md max-h-[92vh] my-auto flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-500 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Emergency Red Header */}
        <div className="bg-red-600 text-white p-4 sm:p-5 flex items-start justify-between relative overflow-hidden shrink-0">
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-md">
              <Ambulance className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase text-red-100">
                  24x7 Emergency Service
                </span>
              </div>
              <h3 id="ambulance-title" className="text-lg sm:text-xl font-black tracking-tight text-white">
                Hospital Ambulance
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close ambulance modal"
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors relative z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body with Internal Scroll if Screen is Short */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" }}>
          <p className="text-xs text-neutral-600 leading-relaxed font-medium">
            Immediate dispatch of GPS-tracked <strong>Well-Equipped Life Support (ALS)</strong> ambulances across Jabalpur &amp; Mahakoshal region with onboard ventilator &amp; paramedic team.
          </p>

          {/* Primary Landline Hotline */}
          <a
            href={`tel:${siteConfig.phone1Raw || "07612626123"}`}
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-red-50 border-2 border-red-200 hover:border-red-500 hover:bg-red-100/70 transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-white" />
              </div>
              <div className="text-left">
                <p className="text-[10.5px] sm:text-[11px] font-bold text-red-700 uppercase tracking-wider">
                  Ambulance Line (24x7)
                </p>
                <p className="text-base sm:text-lg font-black text-neutral-900 group-hover:text-red-600 transition-colors">
                  {siteConfig.phone1 || "0761-2626123"}
                </p>
              </div>
            </div>
            <span className="text-[11px] sm:text-xs font-black text-red-600 bg-white px-3 py-1.5 rounded-lg border border-red-200 shadow-xs uppercase tracking-wide group-hover:bg-red-600 group-hover:text-white transition-all">
              Call Now
            </span>
          </a>

          {/* Secondary 24x7 Emergency Line */}
          <a
            href="tel:+917614037843"
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-red-50 border-2 border-red-200 hover:border-red-500 hover:bg-red-100/70 transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-white" />
              </div>
              <div className="text-left">
                <p className="text-[10.5px] sm:text-[11px] font-bold text-red-700 uppercase tracking-wider">
                  24x7 Emergency Line
                </p>
                <p className="text-base sm:text-lg font-black text-neutral-900 group-hover:text-red-600 transition-colors">
                  +91 7614037843
                </p>
              </div>
            </div>
            <span className="text-[11px] sm:text-xs font-black text-red-600 bg-white px-3 py-1.5 rounded-lg border border-red-200 shadow-xs uppercase tracking-wide group-hover:bg-red-600 group-hover:text-white transition-all">
              Call Now
            </span>
          </a>

          {/* WhatsApp Emergency & Location Sharing */}
          <a
            href={`https://wa.me/917648998668?text=${encodeURIComponent("EMERGENCY: Ambulance required at this location: ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-500 hover:bg-emerald-100/70 transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <WhatsappIcon className="w-5 h-5 fill-white text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10.5px] sm:text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  WhatsApp / Share Location
                </p>
                <p className="text-sm sm:text-base font-extrabold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                  +91 76489-98668
                </p>
              </div>
            </div>
            <span className="text-[11px] sm:text-xs font-black text-white bg-[#25D366] px-3 py-1.5 rounded-lg shadow-xs uppercase tracking-wide group-hover:bg-[#20bd5a] transition-all">
              Chat Live
            </span>
          </a>

          {/* Quick Details Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-100 text-[10.5px] sm:text-[11px] text-neutral-600 text-center font-semibold">
            <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-200/80">
              <Clock className="w-4 h-4 text-red-600 mx-auto mb-1" />
              <span>Instant 24x7</span>
            </div>
            <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-200/80">
              <ShieldCheck className="w-4 h-4 text-[#008EC7] mx-auto mb-1" />
              <span>ALS Ventilator</span>
            </div>
            <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-200/80">
              <MapPin className="w-4 h-4 text-red-600 mx-auto mb-1" />
              <span>Jabalpur Wide</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-neutral-50 px-6 py-2.5 sm:py-3 border-t border-neutral-200 text-center text-[10.5px] sm:text-[11px] text-neutral-500 font-medium shrink-0">
          MP Hospital &amp; Trauma Centre • Beoharbagh, Jabalpur
        </div>
      </div>
    </div>,
    document.body
  );
}

