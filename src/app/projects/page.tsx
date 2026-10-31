"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import LightboxModal from "@/components/ui/LightboxModal";
import { Maximize2, Tag, Check, Calendar, ArrowRight } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

export default function ProjectsPage() {
  const { data } = useCMS();
  const projectsData = data.projectsData;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeStatus, setActiveStatus] = useState<string>("all");
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ src: string; title: string } | null>(null);

  const categories = [
    { id: "all", label: "All Facilities" },
    { id: "mega", label: "Modular OT & Surgical" },
    { id: "domestic", label: "Emergency & ICU" },
    { id: "facade", label: "Diagnostics & Fleet" },
    { id: "interior", label: "Inpatient & Rehab" },
  ];

  const statuses = [
    { id: "all", label: "All Units" },
    { id: "Completed", label: "Operational" },
    { id: "Upcoming", label: "Expanding" },
  ];

  const filtered = projectsData.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesStatus = activeStatus === "all" || p.status === activeStatus;
    return matchesCat && matchesStatus;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-20 sm:py-24 relative overflow-hidden flex items-center justify-center">
        {/* Soft, balanced light overlay - dark blur reduced so hospital photos are bright & clearly visible */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mp-hospital-building.jpg"
            alt="MP Hospital Facilities"
            fill
            priority
            className="object-cover opacity-95 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider shadow-md">
            Hospital Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Advanced Clinical <span className="text-[#fff200]">Facilities</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            Take a virtual tour of MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital) – Class 10,000 modular operation theatres, 24x7 trauma ICU, and modern patient recovery suites.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-neutral-100 border-b border-neutral-200 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-black text-[#fff200] shadow-md"
                    : "bg-white text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            {statuses.map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveStatus(st.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeStatus === st.id
                    ? "bg-[#fff200] text-black"
                    : "text-neutral-600 hover:text-black bg-white"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-neutral-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-neutral-200 transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <div
                  className="relative h-64 w-full bg-neutral-900 overflow-hidden cursor-pointer"
                  onClick={() => setLightboxData({ src: project.image, title: project.title })}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#fff200] text-[11px] font-bold uppercase tracking-wider">
                      {project.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#fff200] text-black text-[10px] font-extrabold uppercase">
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-black group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {project.specs}
                    </p>
                  </div>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Key Highlights
                      </p>
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-black shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => setLightboxData({ src: project.image, title: project.title })}
                      className="text-xs font-bold text-black hover:underline"
                    >
                      Enlarge Photo
                    </button>
                    <button
                      onClick={() => setConsultationOpen(true)}
                      className="px-4 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-[#fff200] hover:text-black transition-colors"
                    >
                      Book OPD / Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl font-black text-white">Need Clinical Care or Emergency Admission?</h3>
          <p className="text-sm text-gray-300">
            From joint replacement consultations with{" "}
            <span className="text-[#fff200] font-black underline decoration-yellow-400 decoration-2">
              Dr. Abhishek Jain
            </span>{" "}
            to 24x7 accidental polytrauma resuscitation and modular surgery, our medical team is ready to assist you.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <LightboxModal
        imageSrc={lightboxData?.src || null}
        title={lightboxData?.title}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}
