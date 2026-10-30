"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, Tag } from "lucide-react";
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
    { id: "mega", label: "Surgical & Modular OT" },
    { id: "domestic", label: "Emergency & ICU" },
    { id: "facade", label: "Diagnostics & Fleet" },
    { id: "interior", label: "Inpatient & Rehab" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData.slice(0, 8)
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Hospital Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore Our World-Class Medical Facilities
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-normal">
            Equipped with laminar airflow modular OTs, intensive care trauma ICU, digital diagnostics, and compassionate patient care units.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#fff200] text-black shadow-lg"
                  : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
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
              className="bg-neutral-800/90 rounded-2xl overflow-hidden border border-neutral-700 hover:border-[#fff200] transition-all duration-300 flex flex-col group"
            >
              {/* Image & Lightbox trigger */}
              <div
                className="relative h-64 w-full bg-neutral-950 overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox(project.image, project.title)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#fff200] text-[11px] font-bold uppercase tracking-wider border border-[#fff200]/30">
                    {project.type}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#fff200] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-700/60 flex items-center justify-between text-xs text-gray-300">
                  <span className="font-semibold text-[#fff200]">Status: {project.status}</span>
                  <button
                    onClick={() => onOpenLightbox(project.image, project.title)}
                    className="inline-flex items-center gap-1 font-bold text-gray-300 hover:text-white"
                  >
                    <span>View Image</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
