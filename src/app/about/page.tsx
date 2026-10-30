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
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Drives-us-Img.png"
            alt="About Sparkbuild"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Building With Purpose, <span className="text-[#fff200]">Backed by Trust</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            Sparkbuild: Driving The Future Of Infrastructure & Transforming Construction Since 2016.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-neutral-500">
                Sparkbuild Constructs Your Dream
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                Engineering Excellence &amp; Turnkey Development
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                The company, Sparkbuild, has been innovating in the engineering and construction industry since 2016. It operates as an ISO-certified company, providing end-to-end services in architectural design, structural engineering consultancy, civil construction, hospital infrastructure, and real estate development.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                With a strong presence across Madhya Pradesh—centered in Jabalpur—and pan-India execution capability, Sparkbuild bridges aesthetic architectural vision with rigorous on-site structural safety.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Meeting</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-100">
                <Image
                  src="/images/About-Img-3.png"
                  alt="Sparkbuild Team and Site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-neutral-200 hidden sm:flex items-center gap-4">
                <ShieldCheck className="w-12 h-12 text-[#fff200] fill-black shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-black">ISO 9001:2015</h4>
                  <p className="text-xs text-gray-500">Quality Certified Standards</p>
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
              <span className="text-5xl font-black text-[#fff200] font-mono">1000+</span>
              <h3 className="text-lg font-bold">Our Projects</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Completed over 1000 residential and commercial projects across India with unmatched precision and professionalism.
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:pl-6">
              <span className="text-5xl font-black text-[#fff200] font-mono">95%+</span>
              <h3 className="text-lg font-bold">Client Satisfaction</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Through honest work, transparent communication, and quality construction, Sparkbuild has built lasting trust with its clients.
              </p>
            </div>

            <div className="space-y-3 pt-6 md:pt-0 md:pl-6">
              <span className="text-5xl font-black text-[#fff200] font-mono">110%</span>
              <h3 className="text-lg font-bold">Commitment</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Sparkbuild is committed to exceeding expectations, delivering full dedication to every project, client goal, and satisfaction from day one.
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
              The foundational pillars that guide our blueprints, structural integrity, and long-term partnerships.
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
                  Sparkbuild aims to be a leading provider of comprehensive infrastructural solutions across India and globally, setting benchmarks in modern engineering.
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
                  Sparkbuild is committed to making a significant contribution to India’s infrastructural growth and development through durable, eco-friendly, and timely builds.
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
                  Sparkbuild approaches every project with a sense of ownership, focusing on quality over shortcuts and an unwavering commitment to getting it right the first time.
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
                src="/images/Drives-us-Img.png"
                alt="What Drives Sparkbuild"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-neutral-500">
                REAL FOUNDATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                What Drives Us
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Sparkbuild is driven by a mission to contribute to India’s infrastructural development and a vision to become a premier provider of complete infrastructural solutions in India and beyond. The company operates on core values of quality, integrity, and professional delivery in every project.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Licensed, insured, and ISO-certified professionals",
                  "Customized Build Solutions tailored to your plot and budget",
                  "Reliable Timelines with strict penalty-backed delivery schedules",
                  "Clean, Organized & Safe Job Sites",
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

