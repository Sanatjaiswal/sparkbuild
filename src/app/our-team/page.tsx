"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Award,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  Activity,
  Phone,
  Building2,
  Clock,
  MapPin,
  Quote,
  Sparkles,
  Bone,
  Crosshair,
} from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { useCMS } from "@/context/CMSContext";

const CATEGORIES = [
  "All Specialists",
  "Orthopedics & Spine",
  "Neurosurgery",
  "Surgery & Plastic Surgery",
  "Medicine & Pulmonology",
  "Critical Care & ICU",
  "Radiology & Pathology",
  "Gynecology",
  "Physiotherapy & Rehab",
];

export default function OurTeamPage() {
  const { data } = useCMS();
  const teamMembers = data.teamMembers || [];
  const founder = teamMembers.find((m) => m.id === "dr-abhishek-jain") || teamMembers[0];

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Specialists");

  const filteredMembers = useMemo(() => {
    if (activeCategory === "All Specialists") return teamMembers;

    return teamMembers.filter((m) => {
      const dep = (m.department || "").toLowerCase();
      const role = (m.role || "").toLowerCase();
      const cat = activeCategory.toLowerCase();

      if (cat.includes("orthopedic")) {
        return dep.includes("orthoped") || role.includes("orthoped");
      }
      if (cat.includes("neuro")) {
        return dep.includes("neuro") || role.includes("neuro");
      }
      if (cat.includes("surgery") || cat.includes("plastic")) {
        return (
          dep.includes("surgery") ||
          role.includes("surgery") ||
          dep.includes("plastic") ||
          role.includes("plastic")
        );
      }
      if (cat.includes("medicine") || cat.includes("pulmonology")) {
        return (
          dep.includes("medicine") ||
          role.includes("physician") ||
          role.includes("chest") ||
          dep.includes("respiratory")
        );
      }
      if (cat.includes("critical care") || cat.includes("icu")) {
        return (
          dep.includes("anesthesia") ||
          dep.includes("critical care") ||
          role.includes("intensivist") ||
          role.includes("anesthesio")
        );
      }
      if (cat.includes("radiology") || cat.includes("pathology")) {
        return (
          dep.includes("pathology") ||
          dep.includes("radiology") ||
          role.includes("pathologist") ||
          role.includes("radiologist")
        );
      }
      if (cat.includes("gynecology")) {
        return dep.includes("gynecol") || dep.includes("obstetric") || role.includes("gynecol");
      }
      if (cat.includes("physiotherapy") || cat.includes("rehab")) {
        return dep.includes("physiotherap") || role.includes("physiotherap");
      }
      return true;
    });
  }, [activeCategory, teamMembers]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-neutral-900/80 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medical-team.jpg"
            alt="Medical Team at MP Hospital & Trauma Centre"
            fill
            priority
            className="object-cover opacity-60 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
            <Award className="w-3.5 h-3.5" />
            Medical Faculty &amp; Specialists
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md">
            Our Specialist <span className="text-red-500">Doctors</span> &amp;{" "}
            <span className="text-emerald-400">Surgeons</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
            Meet our panel of 13 senior consultants delivering expert emergency polytrauma care,
            robotic joint replacement, neurosurgery, critical care ICU, and multidisciplinary
            rehabilitation at MP Hospital &amp; Trauma Centre, Jabalpur.
          </p>
        </div>
      </section>

      {/* Lead Director Spotlight: Dr. Abhishek Jain (Executive Redesign) */}
      {founder && (
        <section className="py-12 sm:py-16 bg-neutral-50/80 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-neutral-200 shadow-xl relative overflow-hidden">
              {/* Brand Accent Top Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#046F47] via-red-600 to-[#046F47]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Doctor's Executive Portrait Card */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-neutral-100 group">
                    <Image
                      src={founder.image || "/images/dr-abhishek-jain.jpg"}
                      alt={founder.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-lg">
                        <Award className="w-3.5 h-3.5" />
                        Director &amp; Chief Surgeon
                      </span>
                    </div>

                    {/* Bottom Floating Glass Stats Bar */}
                    <div className="absolute bottom-4 inset-x-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-white/80 shadow-lg grid grid-cols-2 divide-x divide-neutral-200 text-center">
                      <div className="px-2">
                        <p className="text-base font-black text-neutral-900 leading-tight">15+ Years</p>
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5">Surgical Mastery</p>
                      </div>
                      <div className="px-2">
                        <p className="text-base font-black text-[#046F47] leading-tight">10,000+</p>
                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5">Trauma Surgeries</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Executive Clinical Profile */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category Pills & Name */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-white px-3 py-1 bg-red-600 rounded-full shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {founder.role}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#046F47] bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full">
                        <Stethoscope className="w-3.5 h-3.5" />
                        {founder.department}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
                      {founder.name}
                    </h2>

                    <p className="text-sm sm:text-base font-extrabold text-[#046F47]">
                      {founder.qualification} • Senior Joint Replacement &amp; Polytrauma Specialist
                    </p>
                  </div>

                  {/* Clinical Philosophy Quote */}
                  <div className="relative p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                    <Quote className="w-8 h-8 text-[#046F47]/20 absolute top-3 right-3" />
                    <blockquote className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium italic relative z-10">
                      &ldquo;At MP Hospital &amp; Trauma Centre (formerly Maxx Hospital), our clinical mission is rapid emergency resuscitation, zero-delay trauma surgeries, and precision robotic joint restorations to return every patient to active, pain-free mobility.&rdquo;
                    </blockquote>
                  </div>

                  {/* Clinical Expertise 4-Card Grid with Bare Icons (NO boxes) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-emerald-500/50 hover:bg-emerald-50/20 transition-all flex items-start gap-3.5 group/card shadow-xs">
                      <Bone className="w-5 h-5 text-[#046F47] stroke-[2.2] shrink-0 mt-0.5 group-hover/card:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs font-black text-neutral-900">Robotic Joint Replacement</h4>
                        <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">Total knee &amp; hip reconstruction with rapid recovery protocols.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-red-500/50 hover:bg-red-50/20 transition-all flex items-start gap-3.5 group/card shadow-xs">
                      <HeartPulse className="w-5 h-5 text-red-600 stroke-[2.2] shrink-0 mt-0.5 group-hover/card:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs font-black text-neutral-900">Complex Polytrauma Care</h4>
                        <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">24x7 accidental emergency, pelvic &amp; acetabular fixation.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-emerald-500/50 hover:bg-emerald-50/20 transition-all flex items-start gap-3.5 group/card shadow-xs">
                      <Crosshair className="w-5 h-5 text-[#046F47] stroke-[2.2] shrink-0 mt-0.5 group-hover/card:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs font-black text-neutral-900">4K Sports Arthroscopy</h4>
                        <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">Minimally invasive ACL, PCL &amp; meniscus sports restorations.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-red-500/50 hover:bg-red-50/20 transition-all flex items-start gap-3.5 group/card shadow-xs">
                      <Building2 className="w-5 h-5 text-red-600 stroke-[2.2] shrink-0 mt-0.5 group-hover/card:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs font-black text-neutral-900">Modular OT Complexes</h4>
                        <p className="text-[11px] text-neutral-500 leading-snug mt-0.5">Ultra-clean laminar airflow with zero-infection protocols.</p>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Timings & Emergency Trauma Line */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200 flex items-center gap-3 shadow-xs">
                      <Clock className="w-6 h-6 text-[#046F47] stroke-[2.2] shrink-0" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-[#046F47]">OPD Consultation Hours</p>
                        <p className="text-xs font-black text-neutral-900 mt-0.5">Mon – Sat: 10:30 AM – 1:30 PM &amp; 5:30 PM – 8:30 PM</p>
                      </div>
                    </div>

                    <a
                      href="tel:+917614004100"
                      className="p-4 rounded-2xl bg-red-50 hover:bg-red-100/80 border border-red-200 flex items-center gap-3 transition-colors group cursor-pointer shadow-xs"
                    >
                      <Phone className="w-6 h-6 text-red-600 stroke-[2.2] shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-red-600">24x7 Emergency Trauma Desk</p>
                        <p className="text-xs font-black text-neutral-900 mt-0.5">0761-4004100 • 24x7 On-Call</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Multidisciplinary Specialists Grid */}
      <section className="py-16 sm:py-20 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[#046F47] text-xs font-black uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              13 Senior Consultants
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Hospital Doctors &amp; Clinical Faculty
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Our multidisciplinary specialists collaborate seamlessly to ensure accurate diagnostics,
              safe modular surgeries, intensive critical monitoring, and rapid patient recovery.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#046F47] text-white shadow-md shadow-emerald-900/20"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredMembers.map((member) => {
              const isLead = member.id === "dr-abhishek-jain";
              const photoSrc = member.image || "/images/dr-abhishek-jain.jpg";

              return (
                <div
                  key={member.id || member.name}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                    isLead
                      ? "border-2 border-red-500 shadow-md hover:shadow-2xl"
                      : "border-neutral-200 shadow-sm hover:shadow-xl hover:border-emerald-600/50"
                  }`}
                >
                  {/* Card Header with Doctor Portrait Photo */}
                  <div>
                    <div className="relative aspect-[3/4] w-full bg-neutral-900 overflow-hidden">
                      <Image
                        src={photoSrc}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        {isLead ? (
                          <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow">
                            Director &amp; Chief
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full bg-[#046F47] text-white text-[10px] font-black uppercase tracking-wider shadow">
                            Consultant
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#046F47] text-[10px] font-extrabold uppercase tracking-wider shadow-xs border border-emerald-100">
                          {member.department || "Specialist"}
                        </span>
                      </div>

                      {/* Overlay Title at bottom of photo */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-[11px] font-extrabold text-emerald-300 uppercase tracking-wider">
                          {member.role}
                        </p>
                        <h3 className="text-xl font-black drop-shadow-sm">{member.name}</h3>
                      </div>
                    </div>

                    {/* Card Content Information */}
                    <div className="p-6 space-y-3.5">
                      {/* Qualification Pill */}
                      {member.qualification && (
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200/90 text-xs font-extrabold">
                            <Award className="w-3.5 h-3.5 text-red-600 shrink-0" />
                            {member.qualification}
                          </span>
                        </div>
                      )}

                      {/* Doctor Clinical Scope / Bio */}
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Clean Footer Status (NO appointment booking button) */}
                  <div className="px-6 pb-5 pt-0">
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-neutral-500">
                      <span className="flex items-center gap-1 text-[#046F47]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#046F47]" />
                        <span>Verified Specialist</span>
                      </span>
                      <span className="text-neutral-400">MP Hospital</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-200">
              <p className="text-base font-bold text-neutral-700">
                No specialists found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("All Specialists")}
                className="mt-3 px-5 py-2 rounded-full bg-[#046F47] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                View All 13 Specialists
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clinical Infrastructure & Credibility Banner */}
      <section className="py-14 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group">
              <HeartPulse className="w-8 h-8 text-red-600 stroke-[2.2] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-sm font-black text-neutral-900">24x7 Emergency Trauma</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Immediate surgical triage and advanced trauma life support.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group">
              <Building2 className="w-8 h-8 text-[#046F47] stroke-[2.2] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-sm font-black text-neutral-900">Modular OT Complexes</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  HEPA air-filtered laminar flow for zero-infection orthopedics.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group">
              <Activity className="w-8 h-8 text-red-600 stroke-[2.2] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-sm font-black text-neutral-900">Critical Care ICU</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Round-the-clock intensivist monitoring with multipara ventilators.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4 group">
              <ShieldCheck className="w-8 h-8 text-[#046F47] stroke-[2.2] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-sm font-black text-neutral-900">Diagnostics &amp; Rehab</h4>
                <p className="text-xs text-neutral-500 mt-1">
                  In-house digital radiography, pathology, and advanced neuro rehab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="py-14 bg-gradient-to-r from-[#046F47] via-emerald-800 to-emerald-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold uppercase tracking-wider">
            Hospital Careers
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Join Our Clinical &amp; Surgical Faculty
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
            We welcome passionate resident medical officers, ICU nurses, operation theatre
            technicians, and rehabilitation therapists to our growing team in Jabalpur.
          </p>
          <div className="pt-2">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-900/30 transition-all"
            >
              <span>Explore Career Openings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
