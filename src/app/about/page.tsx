"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { CheckCircle2, ShieldCheck, Target, Eye, Heart, Calendar, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

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
            src="/images/emergency-ambulance.jpg"
            alt="About MP Hospital"
            fill
            priority
            className="object-cover opacity-95 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider shadow-md">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Healing With Purpose, <span className="text-[#fff200]">Backed by Trust</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital) – Transforming Orthopedic, Trauma &amp; Critical Care in Jabalpur.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-neutral-500">
                Formerly Maxx Hospital &amp; Trauma Centre
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                Orthopedic Excellence &amp; 24x7 Trauma Resuscitation
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Originally established as Maxx Hospital &amp; Trauma Centre and now modernized as MP Hospital and Trauma Centre, our institution has been a beacon of surgical hope and trauma recovery across Jabalpur and the greater Mahakoshal region.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Under the clinical leadership of{" "}
                <span className="bg-[#fff200] text-black px-2.5 py-0.5 rounded font-black border border-black/15 shadow-xs">
                  Dr. Abhishek Jain
                </span>{" "}
                (Senior Orthopedic Surgeon &amp; Sports Injury Specialist), MP Hospital provides comprehensive services in complex accidental polytrauma, minimally invasive total knee and hip replacements, 4K arthroscopic reconstructions, spine surgery, and intensive critical care.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-100">
                <Image
                  src="/images/mp-hospital-building.jpg"
                  alt="MP Hospital and Trauma Centre Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-neutral-200 hidden sm:flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-2xl shadow">
                  +
                </div>
                <div>
                  <h4 className="text-base font-bold text-black">24x7 Emergency Care</h4>
                  <p className="text-xs text-gray-500">Beoharbagh, Jabalpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Numbers & Stats */}
      <section className="py-16 bg-neutral-900 text-white border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="space-y-3 pt-6 md:pt-0">
              <span className="text-5xl font-black text-[#fff200] font-mono">15,000+</span>
              <h3 className="text-lg font-bold">Surgeries Performed</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Successful orthopedic, joint reconstruction, and accidental trauma operations completed with infection-free outcomes.
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:pl-6">
              <span className="text-5xl font-black text-[#fff200] font-mono">99%+</span>
              <h3 className="text-lg font-bold">Patient Satisfaction</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Reflecting our dedicated nursing care, transparent billing, Ayushman / Cashless TPA support, and rapid patient recovery.
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:pl-6">
              <span className="text-5xl font-black text-[#fff200] font-mono">24x7</span>
              <h3 className="text-lg font-bold">Emergency Commitment</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Round-the-clock emergency casualty, standby surgeons, ICU ventilators, and ALS ambulance ready to respond at any minute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Vision, Mission &amp; Values
            </h2>
            <p className="text-sm text-gray-600">
              The ethical medical principles that guide our clinical practice, patient care, and surgical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:border-black transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#fff200] text-black flex items-center justify-center">
                  <Eye className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-bold text-black">Our Vision</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be Central India’s premier centre of excellence in orthopedics, joint reconstruction, and emergency trauma resuscitation, setting global benchmarks in patient safety.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:border-black transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#fff200] text-black flex items-center justify-center">
                  <Target className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-bold text-black">Our Mission</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To save lives during critical trauma emergencies and eliminate joint pain through advanced modular surgical technology, skilled specialists, and compassionate, accessible care.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:border-black transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#fff200] text-black flex items-center justify-center">
                  <Heart className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-xl font-bold text-black">Our Values</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Uncompromising surgical asepsis, ethical transparency, patient empathy, and rapid mobility rehabilitation so every patient walks out with renewed confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Foundation: What Drives Us */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/dr-abhishek-jain.jpg"
                alt="Dr. Abhishek Jain - Medical Director"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-neutral-500">
                CLINICAL LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                What Drives Us
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At MP Hospital &amp; Trauma Centre, every life entrusted to us receives rapid clinical intervention and personalized attention. Guided by{" "}
                <span className="bg-[#fff200] text-black px-2.5 py-0.5 rounded font-black border border-black/15 shadow-xs">
                  Dr. Abhishek Jain
                </span>
                , our multidisciplinary team of surgeons, intensivists, anesthesiologists, and rehabilitation therapists work tirelessly to deliver positive clinical outcomes.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Senior Orthopedic Surgeon & Trauma Specialist on site",
                  "Class 10,000 modular operation theatres with HEPA filtration",
                  "24x7 Emergency Casualty & Advanced Life Support (ALS) Ambulance",
                  "Full cashless insurance, Ayushman Bharat, and TPA pre-authorization support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black hover:bg-[#fff200] hover:text-black text-white font-extrabold text-sm uppercase tracking-wider transition-all"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
