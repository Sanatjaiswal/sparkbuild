"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { Check, ArrowRight, Calendar, Compass, Building2, Wrench, ShieldCheck, HeartPulse } from "lucide-react";

export default function ServicesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Construction");

  const openForService = (name: string) => {
    setSelectedService(name);
    setConsultationOpen(true);
  };

  const detailedServices = [
    {
      title: "Residential Construction",
      tag: "Villas, Duplexes & Townships",
      image: "/images/Service-Image-1.png",
      desc: "Sparkbuild provides end-to-end residential construction services, driven by engineering expertise and a comprehensive approach. With a portfolio of over 250 minor and major projects, Sparkbuild has executed residential projects for clients and local agencies valued at over ₹5 crore.",
      benefits: [
        "Tailored custom floor plans & 3D architecture",
        "Township planning, drainage, and layout bylaws",
        "Contemporary interior and exterior facade elevations",
        "Turnkey execution from foundation excavation to final painting",
      ],
    },
    {
      title: "Commercial & Office Buildings",
      tag: "Showrooms, Plazas & IT Parks",
      image: "/images/Service-Image-2.png",
      desc: "Sparkbuild specializes in creating efficient, functional, and durable commercial spaces to help businesses thrive. The company has been innovating in the engineering and construction industry since 2016, executing multi-story complexes.",
      benefits: [
        "RCC structural design for high-traffic commercial loads",
        "Glass facades, ACP cladding, and storefront design",
        "RERA compliance, fire safety, and ADA accessible layouts",
        "Structures customized to maximize rental return and brand appeal",
      ],
    },
    {
      title: "Healthcare & Hospital Construction",
      tag: "Hospitals, Clinics & Diagnostic Centers",
      image: "/images/WhatsApp-Image-2026-03-17-at-16.45.26-12.jpeg",
      desc: "Specialized engineering solutions for hospitals, multi-specialty healthcare facilities, and outpatient dental/medical clinics. We design hygienic, infection-controlled environments with medical gas pipeline integration and radiation-shielded X-ray zones.",
      benefits: [
        "Medical-grade antibacterial anti-static wall & floor finishes",
        "Sterilization suites, OT layouts, and patient ward zoning",
        "Heavy backup electrical distribution & HVAC ventilation",
        "Compliance with National Building Code (NBC) for Healthcare",
      ],
    },
    {
      title: "Renovation & Remodeling",
      tag: "Structural Strengthening & Interior Redesign",
      image: "/images/Service-Image-3.png",
      desc: "Sparkbuild provides services that can breathe new life into outdated homes and commercial properties, making them more functional, stylish, structurally resilient, and valuable.",
      benefits: [
        "Whole-home structural upgrades and cosmetic renewals",
        "Retrofitting, waterproofing, and beam strengthening",
        "Modern modular kitchen & luxury bathroom overhauls",
        "Facade modernization without disturbing original foundation",
      ],
    },
  ];

  const processSteps = [
    {
      num: "1",
      title: "Plan & Discover",
      desc: "Sparkbuild starts with an in-depth consultation to align with your vision, goals, and budget, followed by a site visit and strategic planning advice.",
    },
    {
      num: "2",
      title: "Design & Quote",
      desc: "Sparkbuild delivers a customized design proposal, material guidance, and a transparent, itemized quotation—so every single rupee is clear from the start.",
    },
    {
      num: "3",
      title: "Build & Deliver",
      desc: "Sparkbuild’s expert on-site team brings your project to life with regular milestone reports, concluding with a detailed final walkthrough and pristine handover.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Project-Img-1.png"
            alt="Sparkbuild Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Construction <span className="text-[#fff200]">Solutions</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            Sparkbuild offers expert construction solutions tailored to fit your exact residential, commercial, industrial, and healthcare needs.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {detailedServices.map((service, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-900 ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className={`lg:col-span-6 space-y-6 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                  {service.tag}
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {service.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Key Services &amp; Benefits
                  </h4>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#fff200] text-black flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span className="text-sm font-semibold text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => openForService(service.title)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-neutral-600 hover:text-black underline"
                  >
                    Contact Team
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24 bg-neutral-900 text-white border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
              3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Process, Made Simple
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Sparkbuild believes that exceptional construction starts with effective communication. Built on transparency, trust, and timely execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-neutral-800/90 rounded-2xl p-8 border border-neutral-700 relative flex flex-col justify-between group hover:border-[#fff200] transition-colors"
              >
                <div className="space-y-4">
                  <span className="text-5xl font-black text-[#fff200] font-mono">
                    0{step.num}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-xl transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Free Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />
      <ConsultationModal
        isOpen={consultationOpen}
        defaultService={selectedService}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}

