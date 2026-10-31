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
    <section className="py-20 sm:py-24 bg-neutral-50 border-t border-neutral-200 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-black uppercase tracking-wider shadow-xs">
            Hospital Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Explore Our World-Class Medical Facilities
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Equipped with laminar airflow modular OTs, intensive care trauma ICU, digital diagnostics, and compassionate patient care units.
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
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:border-red-500 hover:text-red-600 shadow-xs"
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
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col group shadow-sm"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                    {project.type}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-red-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.specs}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-700">
                  <span className="font-bold text-[#046F47]">Status: {project.status}</span>
                  <button
                    onClick={() => onOpenLightbox(project.image, project.title)}
                    className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-700"
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/25 transition-all active:scale-95"
          >
            <span>View All Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
