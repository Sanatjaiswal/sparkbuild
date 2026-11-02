"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, HeartPulse, Bone, Crosshair, Activity } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface ServicesGridProps {
  onOpenConsultation: () => void;
}

// 4 Cards matching MP Hospital Specialties
const hospitalCards = [
  {
    id: "trauma",
    title: "Accidental Trauma & Emergency Care",
    image: "/images/mp-hospital-building.jpg",
    icon: HeartPulse,
    iconColor: "text-red-600",
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
    icon: Bone,
    iconColor: "text-[#046F47]",
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
    icon: Crosshair,
    iconColor: "text-red-600",
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
    icon: Activity,
    iconColor: "text-[#046F47]",
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
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-neutral-50 to-white border-y border-neutral-200 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-black uppercase tracking-wider shadow-xs">
            Specialties &amp; Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Comprehensive Orthopedic &amp; Trauma Care
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-medium">
            MP Hospital &amp; Trauma Centre – Led by{" "}
            <span className="bg-emerald-50 text-[#046F47] border border-emerald-200 px-2.5 py-0.5 rounded-full font-black shadow-xs">
              Dr. Abhishek Jain
            </span>
            , offering specialized orthopedics, trauma resuscitation, joint replacement, and sports surgery in Jabalpur.
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
                  {/* Bare Icon without box or background */}
                  <div className="w-14 h-14 mb-3 flex items-center justify-center">
                    <IconComp className={`w-11 h-11 ${card.iconColor} stroke-[2.2] group-hover:scale-110 transition-transform`} />
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
                        <span className="text-[#046F47] font-black text-sm shrink-0 mt-0.5 leading-none">
                          ✔
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Action CTA */}
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 px-4 rounded-full bg-[#046F47] hover:bg-[#035939] text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-200 mt-2 shadow-sm flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
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
