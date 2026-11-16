"use client";

import React from "react";
import Image from "next/image";
import { Ambulance, Stethoscope, Building2, ShieldCheck } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

const ICON_MAP: Record<string, any> = {
  Ambulance,
  Stethoscope,
  Building2,
  ShieldCheck,
};

export default function WhyHospital() {
  const { data } = useCMS();

  const points =
    data?.siteConfig?.whyHospitalPoints && data.siteConfig.whyHospitalPoints.length > 0
      ? data.siteConfig.whyHospitalPoints
      : [
          {
            iconName: "Ambulance",
            iconColor: "text-red-600",
            title: "24x7 Trauma Emergency",
            desc: "Immediate casualty reception, trauma surgeons, and round-the-clock ALS ambulance availability in Jabalpur.",
          },
          {
            iconName: "Stethoscope",
            iconColor: "text-[#008EC7]",
            title: "Senior Orthopedic Specialists",
            desc: "Experienced surgical team led by Dr. Abhishek Jain specializing in joint replacement, sports injury & complex trauma.",
          },
          {
            iconName: "Building2",
            iconColor: "text-red-600",
            title: "Modular Laminar Flow OT",
            desc: "Well-equipped cleanroom modular surgical theatres with HEPA filtration for ultra-sterile, infection-free surgeries.",
          },
          {
            iconName: "ShieldCheck",
            iconColor: "text-[#008EC7]",
            title: "Cashless Mediclaim & TPA",
            desc: "Hassle-free insurance pre-authorization desk supporting major mediclaim policies and corporate TPA coverage.",
          },
        ];

  return (
    <section className="py-24 bg-white text-neutral-900 border-t border-neutral-200 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-100">
              <Image
                src="/images/medical-team.jpg"
                alt="MP Hospital Medical Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Quick Stat Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-6 rounded-2xl bg-sky-50/80 border border-sky-200 text-center space-y-1 shadow-xs">
                <span className="text-2xl sm:text-3xl font-black text-[#008ec7] block">
                  Excellence
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  In Patient Care
                </p>
                <p className="text-[11px] text-neutral-500">Trusted in Mahakoshal</p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-red-50/80 border border-red-200 text-center space-y-1 shadow-xs">
                <span className="text-2xl sm:text-4xl font-light tracking-wider text-red-600">
                  24x7
                </span>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-700">
                  Trauma Emergency
                </p>
                <p className="text-[11px] text-neutral-500">0761-2626123</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-sm">
                Excellence in Healthcare
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight">
                Why Choose <span className="text-red-600">MP Hospital &amp; Trauma Centre</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                With a trusted legacy of clinical excellence, MP Hospital &amp; Trauma Centre is Jabalpur’s leading destination for orthopedic surgeries, joint replacement, spine stabilization, and emergency trauma care under{" "}
                <span className="text-[#008ec7] font-black">
                  Dr. Abhishek Jain
                </span>
                .
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => {
                const Icon = ICON_MAP[(pt as any).iconName] || (pt as any).icon || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-50/90 border border-neutral-200 space-y-3 hover:border-[#008EC7] hover:shadow-lg hover:shadow-[#008EC7]/10 transition-all group"
                  >
                    <Icon className={`w-8 h-8 ${pt.iconColor || "text-[#008EC7]"} stroke-[2.2] group-hover:scale-110 transition-transform`} />
                    <h3 className="text-lg font-black text-neutral-900">{pt.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {pt.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
