"use client";

import React from "react";
import { X, Phone, Ambulance, ShieldCheck, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface AmbulanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AmbulanceModal({ isOpen, onClose }: AmbulanceModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ambulance-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-500 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Emergency Red Header */}
        <div className="bg-red-600 text-white p-5 flex items-start justify-between relative overflow-hidden">
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-md">
              <Ambulance className="w-7 h-7 stroke-[2.2] animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span className="text-[11px] font-bold tracking-wider uppercase text-red-100">
                  24x7 Emergency Service
                </span>
              </div>
              <h3 id="ambulance-title" className="text-xl font-black tracking-tight text-white">
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

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-neutral-600 leading-relaxed font-medium">
            Immediate dispatch of GPS-tracked <strong>Advanced Life Support (ALS)</strong> ambulances across Jabalpur &amp; Mahakoshal region with onboard ventilator &amp; paramedic team.
          </p>

          {/* Primary Landline Hotline */}
          <a
            href={`tel:${siteConfig.phone1Raw || "07612626123"}`}
            className="flex items-center justify-between p-4 rounded-xl bg-red-50 border-2 border-red-200 hover:border-red-500 hover:bg-red-100/70 transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-white" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-red-700 uppercase tracking-wider">
                  Ambulance Line (24x7)
                </p>
                <p className="text-lg font-black text-neutral-900 group-hover:text-red-600 transition-colors">
                  {siteConfig.phone1 || "0761-2626123"}
                </p>
              </div>
            </div>
            <span className="text-xs font-black text-red-600 bg-white px-3 py-1.5 rounded-lg border border-red-200 shadow-xs uppercase tracking-wide group-hover:bg-red-600 group-hover:text-white transition-all">
              Call Now
            </span>
          </a>

          {/* Secondary Mobile Emergency Line */}
          <a
            href={`tel:${siteConfig.phone2Raw || "+917648998668"}`}
            className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-500 hover:bg-emerald-100/70 transition-all group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#046F47] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-white" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Trauma Mobile Line
                </p>
                <p className="text-base font-extrabold text-neutral-900 group-hover:text-[#046F47] transition-colors">
                  {siteConfig.phone2 || "+91 76489-98668"}
                </p>
              </div>
            </div>
            <span className="text-xs font-black text-[#046F47] bg-white px-3 py-1.5 rounded-lg border border-emerald-200 shadow-xs uppercase tracking-wide group-hover:bg-[#046F47] group-hover:text-white transition-all">
              Call Direct
            </span>
          </a>

          {/* Quick Details Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-100 text-[11px] text-neutral-600 text-center font-semibold">
            <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-200/80">
              <Clock className="w-4 h-4 text-red-600 mx-auto mb-1" />
              <span>Instant 24x7</span>
            </div>
            <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-200/80">
              <ShieldCheck className="w-4 h-4 text-[#046F47] mx-auto mb-1" />
              <span>ALS Ventilator</span>
            </div>
            <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-200/80">
              <MapPin className="w-4 h-4 text-red-600 mx-auto mb-1" />
              <span>Jabalpur Wide</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-neutral-50 px-6 py-3 border-t border-neutral-200 text-center text-[11px] text-neutral-500 font-medium">
          MP Hospital &amp; Trauma Centre • Beoharbagh, Jabalpur
        </div>
      </div>
    </div>
  );
}

