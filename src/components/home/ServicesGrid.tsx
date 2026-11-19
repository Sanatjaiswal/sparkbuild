"use client";

import React from "react";
import Image from "next/image";
import { HeartPulse, Bone, Crosshair, Activity, Dumbbell } from "lucide-react";

// 5 Cards matching MP Hospital Specialties
const hospitalCards = [
  {
    id: "trauma",
    title: "Accidental Trauma & Emergency Care",
    image: "/images/mp-hospital-building.jpg",
    icon: HeartPulse,
    iconColor: "text-red-600",
    items: [
      "24x7 Polytrauma & Resuscitation",
      "Well-Equipped Emergency ICU & Monitoring",
      "High-Velocity Road Accident Care",
      "Rapid Mobile ALS Ambulance Support",
      "In-House Emergency CT & Digital X-Ray",
    ],
  },
  {
    id: "ortho",
    title: "Orthopedic Surgery & Joint Replacement",
    image: "/images/surgery-wide.jpg",
    icon: Bone,
    iconColor: "text-[#008EC7]",
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
      "Keyhole Knee Arthroscopy & ACL / PCL Repair",
      "Shoulder Arthroscopy & Rotator Cuff Repair",
      "Meniscus Repair & Cartilage Restoration",
      "Sports Injury Rehabilitation & Conditioning",
      "Day Care Keyhole Minimally Invasive Surgery",
    ],
  },
  {
    id: "icu",
    title: "Critical Care ICU & Diagnostics",
    image: "/images/emergency-trauma-icu.jpg",
    icon: Activity,
    iconColor: "text-[#008EC7]",
    items: [
      "Multi-Parameter Mechanical Ventilator ICU",
      "Private & General Patient Inpatient Rooms",
      "Round-the-Clock Emergency Pathology",
      "Immediate Bedside Emergency Resuscitation",
      "Cashless TPA Mediclaim & Health Insurance",
    ],
  },
  {
    id: "physio",
    title: "Physiotherapy & Rehabilitation Center",
    image: "/images/physiotherapy-center.jpg",
    icon: Dumbbell,
    iconColor: "text-emerald-600",
    items: [
      "Senior Certified In-House Physiotherapists",
      "Post-Op Joint Mobilization & Fast Recovery",
      "Well-Equipped Ultrasound, TENS & Electrotherapy",
      "Sports Injury Conditioning & Muscle Rehab",
      "Spine, Back Pain & Gait Mobility Training",
    ],
  },
];



export default function ServicesGrid() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-neutral-50 to-white border-y border-neutral-200 relative overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-black uppercase tracking-wider shadow-xs">
            Specialties &amp; Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Comprehensive Orthopedic &amp; Trauma Care
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-medium">
            MP Hospital &amp; Trauma Centre – Led by Dr. Abhishek Jain and expert surgical consultants, offering specialized orthopedics, trauma resuscitation, joint replacement, sports surgery, and well-equipped physiotherapy in Jabalpur.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* 2. Overlapping White Card with Black 2px Border and Rounded Corners */}
                <div className="-mt-12 sm:-mt-14 relative z-10 mx-1 sm:mx-1.5 bg-white rounded-[26px] border-[2px] border-black p-4 sm:p-5 xl:p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center flex-1 justify-between min-h-[360px] sm:min-h-[380px]">
                  {/* Bare Icon without box or background */}
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <IconComp className={`w-10 h-10 ${card.iconColor} stroke-[2.2] group-hover:scale-110 transition-transform`} />
                  </div>

                  {/* Centered Bold Title */}
                  <h3 className="text-sm sm:text-base font-black text-black leading-snug mb-4 text-center min-h-[44px] flex items-center justify-center">
                    {card.title}
                  </h3>

                  {/* Bullet list with crisp checkmark ✔ */}
                  <ul className="space-y-2.5 w-full text-left flex-1 mb-2">
                    {card.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs font-semibold text-neutral-800 leading-snug"
                      >
                        <span className="text-[#008EC7] font-black text-xs shrink-0 mt-0.5 leading-none">
                          ✔
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
