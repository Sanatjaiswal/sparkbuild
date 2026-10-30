"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface ServicesGridProps {
  onOpenConsultation: () => void;
}



function TraumaEmergencyIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Shield */}
      <path d="M32 10L14 18v16c0 14 18 20 18 20s18-6 18-20V18L32 10z" />
      {/* Medical Cross */}
      <path d="M32 22v16M24 30h16" strokeWidth="3" />
    </svg>
  );
}

function JointOrthopedicsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Femur & Knee Hinge Representation */}
      <path d="M26 14a4 4 0 016 0v16a4 4 0 01-6 0z" />
      <circle cx="32" cy="32" r="5" strokeWidth="2.5" />
      <path d="M30 37v14a4 4 0 004 0V37" />
      {/* Mobility ring */}
      <path d="M18 32a14 14 0 0128 0" strokeDasharray="3 3" />
      <path d="M44 32l3 3 3-3" />
    </svg>
  );
}

function ArthroscopySportsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Keyhole Arthroscopy Camera Scope */}
      <circle cx="32" cy="32" r="16" />
      <circle cx="32" cy="32" r="6" />
      <path d="M32 10v6M32 48v6M10 32h6M48 32h6" />
      <path d="M44 44l10 10" strokeWidth="3" />
    </svg>
  );
}

function IcuDiagnosticsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Monitor screen */}
      <rect x="14" y="14" width="36" height="26" rx="3" />
      {/* ECG Heartbeat pulse line */}
      <path d="M20 27h6l3-6 5 12 4-8 3 2h5" strokeWidth="2.5" />
      {/* Stand & Base */}
      <path d="M32 40v8M22 48h20" />
    </svg>
  );
}

// 4 Cards matching MP Hospital Specialties
const hospitalCards = [
  {
    id: "trauma",
    title: "Accidental Trauma & Emergency Care",
    image: "/images/mp-hospital-building.jpg",
    icon: TraumaEmergencyIcon,
    items: [
      "24x7 Polytrauma & Resuscitation",
      "Advanced Emergency ICU & Monitoring",
      "High-Velocity Road Accident Care",
      "Rapid Mobile ALS Ambulance Support",
      "In-House Emergency CT & Digital X-Ray",
    ],
  },
  {
    id: "ortho",
    title: "Orthopedic Surgery & Joint Replacement",
    image: "/images/modular-ot.jpg",
    icon: JointOrthopedicsIcon,
    items: [
      "Total Knee & Hip Replacement (TKR/THR)",
      "Complex Fracture & Pelvic Reconstruction",
      "Computer-Assisted Minimally Invasive Surgery",
      "Geriatric & Pediatric Orthopedic Care",
      "Rapid Recovery Post-Op Mobilization",
    ],
  },
  {
    id: "arthroscopy",
    title: "Arthroscopy & Sports Injury Center",
    image: "/images/arthroscopy-surgery.jpg",
    icon: ArthroscopySportsIcon,
    items: [
      "4K Knee Arthroscopy & ACL / PCL Repair",
      "Shoulder Arthroscopy & Rotator Cuff Repair",
      "Meniscus Repair & Cartilage Restoration",
      "Sports Injury Rehabilitation & Conditioning",
      "Day Care Keyhole Minimally Invasive Surgery",
    ],
  },
  {
    id: "icu",
    title: "Critical Care ICU & Advanced Diagnostics",
    image: "/images/emergency-trauma-icu.jpg",
    icon: IcuDiagnosticsIcon,
    items: [
      "Multi-Parameter Mechanical Ventilator ICU",
      "Deluxe & General Patient Inpatient Rooms",
      "Round-the-Clock Emergency Pathology",
      "Comprehensive Post-Surgery Physiotherapy",
      "Ayushman Bharat & Cashless TPA Mediclaim",
    ],
  },
];



export default function ServicesGrid({ onOpenConsultation }: ServicesGridProps) {
  const { data } = useCMS();

  return (
    <section className="py-20 sm:py-24 bg-[#FEFCE8] border-y border-yellow-200/80 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-black text-[#fff200] text-xs font-black uppercase tracking-wider shadow-sm">
            Specialties &amp; Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Comprehensive Orthopedic &amp; Trauma Care
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-medium">
            MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital) – Led by Dr. Abhishek Jain, offering specialized orthopedics, trauma resuscitation, joint replacement, and sports surgery in Jabalpur.
          </p>
        </div>

        {/* 4 Cards Grid - 100% Exact match to original card layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {hospitalCards.map((card) => {
            const IconComp = card.icon;
            return (
              <div key={card.id} className="flex flex-col relative group">
                {/* 1. Top Image peeking out with rounded top corners */}
                <div className="relative h-44 sm:h-48 w-full rounded-t-[28px] overflow-hidden shadow-sm bg-neutral-900 border-x border-t border-neutral-300">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* 2. Overlapping White Card with Black 2px Border and Rounded Corners */}
                <div className="-mt-12 sm:-mt-14 relative z-10 mx-1.5 sm:mx-2 bg-white rounded-[26px] border-[2px] border-black p-5 sm:p-7 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center flex-1 justify-between min-h-[440px] sm:min-h-[460px]">
                  {/* Outline Vector Icon */}
                  <div className="w-14 h-14 mb-4 flex items-center justify-center text-black">
                    <IconComp className="w-12 h-12 text-black" />
                  </div>

                  {/* Centered Bold Title */}
                  <h3 className="text-lg sm:text-[19px] font-black text-black leading-snug mb-5 text-center min-h-[52px] flex items-center justify-center">
                    {card.title}
                  </h3>

                  {/* Bullet list with crisp checkmark ✔ */}
                  <ul className="space-y-3 w-full text-left mb-6 flex-1">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800 leading-snug"
                      >
                        <span className="text-black font-black text-sm shrink-0 mt-0.5 leading-none">
                          ✔
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Action CTA */}
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 px-4 rounded-full bg-black text-white hover:bg-[#fff200] hover:text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 mt-2 shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
