"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface PortfolioTabsProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export default function PortfolioTabs({ onOpenLightbox }: PortfolioTabsProps) {
  const { data } = useCMS();
  const projectsData = data.projectsData;
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Facilities" },
    { id: "rooms", label: "Patient Rooms (General, Semi, Private)" },
    { id: "emergency", label: "Casualty, ICU & OT" },
    { id: "facade", label: "Diagnostics & Fleet" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : activeTab === "rooms"
      ? projectsData.filter((p) =>
          ["general-inpatient-ward", "semi-private-ward", "private-deluxe-room"].includes(p.id)
        )
      : activeTab === "emergency" || activeTab === "domestic"
      ? projectsData.filter((p) =>
          ["emergency-casualty", "emergency-trauma-icu-suite", "modular-operation-theatre", "arthroscopy-minimally-invasive"].includes(p.id)
        )
      : activeTab === "interior"
      ? projectsData.filter((p) =>
          ["general-inpatient-ward", "semi-private-ward", "private-deluxe-room", "physiotherapy-rehab-center"].includes(p.id)
        )
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 sm:py-24 bg-neutral-50 border-t border-neutral-200 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#008EC7] text-xs font-black uppercase tracking-wider shadow-xs">
            Hospital Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Hospital Facilities &amp; Clinical Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Explore our cleanroom modular operation theatres, 24x7 Trauma ICU, digital radiology unit, and comfortable in-patient care rooms in Jabalpur.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#008EC7] text-white shadow-md shadow-[#008EC7]/20"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:border-[#008EC7] hover:text-[#008EC7] shadow-xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-[#008EC7] hover:shadow-xl hover:shadow-[#008EC7]/10 transition-all duration-300 flex flex-col group shadow-sm"
            >
              {/* Image & Lightbox trigger */}
              <div
                className="relative h-64 w-full bg-neutral-100 overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox(project.image, project.title)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Room Category & Status Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  {project.id === "general-inpatient-ward" && (
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      General Ward
                    </span>
                  )}
                  {project.id === "semi-private-ward" && (
                    <span className="px-3 py-1 rounded-full bg-[#008EC7] text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      Semi-Private Ward
                    </span>
                  )}
                  {project.id === "private-deluxe-room" && (
                    <span className="px-3 py-1 rounded-full bg-sky-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      Private Room
                    </span>
                  )}
                  {project.id === "emergency-casualty" && (
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      Casualty &amp; Triage
                    </span>
                  )}
                  {project.id === "emergency-trauma-icu-suite" && (
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      ICU Suite
                    </span>
                  )}
                  {project.id === "modular-operation-theatre" && (
                    <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      Well-Equipped OT
                    </span>
                  )}
                  {project.id === "physiotherapy-rehab-center" && (
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      Physiotherapy &amp; Rehab
                    </span>
                  )}
                  {project.id === "diagnostic-radiology-center" && (
                    <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-md">
                      OPD &amp; Reception
                    </span>
                  )}
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#008EC7] text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#008EC7] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.specs}
                  </p>
                </div>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                    <p className="text-[10.5px] font-bold text-[#008ec7] uppercase tracking-wider">
                      Key Highlights
                    </p>
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                        <span className="text-[#008EC7] font-bold text-sm leading-none">✓</span>
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#008EC7] hover:bg-[#00709e] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#008EC7]/25 transition-all active:scale-95"
          >
            <span>View All Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
