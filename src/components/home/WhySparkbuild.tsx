"use client";

import React from "react";
import Image from "next/image";
import { Shield, Users, Compass, HeartHandshake } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

export default function WhySparkbuild() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;

  const points = [
    {
      icon: Compass,
      title: "24x7 Trauma Emergency",
      desc: "Immediate casualty reception, trauma surgeons, and round-the-clock ALS ambulance availability in Jabalpur.",
    },
    {
      icon: Users,
      title: "Senior Orthopedic Specialists",
      desc: "Experienced surgical team led by Dr. Abhishek Jain with 10+ years in joint replacement, sports injury & complex trauma.",
    },
    {
      icon: Shield,
      title: "Modular Laminar Flow OT",
      desc: "Class 10,000 cleanroom modular surgical theatres with HEPA filtration for ultra-sterile, infection-free surgeries.",
    },
    {
      icon: HeartHandshake,
      title: "Cashless Mediclaim & TPA",
      desc: "Hassle-free insurance pre-authorization desk supporting major mediclaim policies and Ayushman Bharat coverage.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-700 aspect-[4/3] bg-neutral-800">
              <Image
                src="/images/medical-team.jpg"
                alt="MP Hospital Medical Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Quick Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#fff200]">
                  15,000+
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Patients Treated
                </p>
                <p className="text-[11px] text-gray-400">Trusted in Mahakoshal</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#fff200]">
                  24x7
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Trauma Emergency
                </p>
                <p className="text-[11px] text-gray-400">0761-2626123</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
                Excellence in Healthcare
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Why Choose <span className="text-[#fff200]">MP Hospital &amp; Trauma Centre</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Continuing the trusted 10+ year legacy of Maxx Hospital, MP Hospital &amp; Trauma Centre is Jabalpur’s leading destination for orthopedic surgeries, joint replacement, spine stabilization, and emergency trauma care under Dr. Abhishek Jain.
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-800/50 border border-neutral-700/60 space-y-2 hover:border-[#fff200] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fff200] text-black flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
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
