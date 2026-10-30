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
      title: "Local Knowledge",
      desc: "Deep understanding of regional codes, climate, soil types, and construction standards across Madhya Pradesh.",
    },
    {
      icon: Users,
      title: "Pro Team",
      desc: "Skilled, certified builders, structural engineers, and project managers committed to uncompromising quality.",
    },
    {
      icon: Shield,
      title: "Smart Designs",
      desc: "Modern layouts and bespoke architectural features built for comfort, function, energy efficiency, and flow.",
    },
    {
      icon: HeartHandshake,
      title: "Client Focus",
      desc: "Responsive service and transparent milestone communication — your absolute satisfaction is our benchmark.",
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
                src="/images/Why-Work-Image.png"
                alt="Why Work With Sparkbuild"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Quick Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#fff200]">
                  {siteConfig.stats.realEstateProjects || "100+"}
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Satisfied Clients
                </p>
                <p className="text-[11px] text-gray-400">Built with trust and excellence</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-black text-[#fff200]">
                  {siteConfig.stats.structuralWarranty || "10 Yrs."}
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Structural Warranty
                </p>
                <p className="text-[11px] text-gray-400">Coverage you can count on</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
                Long-Term Reliability
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Proven &amp; Trusted: <span className="text-[#fff200]">Backed by Results, Built on Relationships</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Sparkbuild has become a name homeowners and commercial developers trust. Whether it’s new construction or custom renovation, you’re in good company when you build with Sparkbuild. Our strong partnerships are a reflection of the confidence our clients place in us — project after project.
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
