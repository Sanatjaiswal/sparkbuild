"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { Check, ArrowRight, Calendar, Activity, ShieldCheck, HeartPulse, Plus } from "lucide-react";

export default function ServicesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Orthopedics & Trauma");

  const openForService = (name: string) => {
    setSelectedService(name);
    setConsultationOpen(true);
  };

  const detailedServices = [
    {
      title: "Orthopedic & Accidental Trauma Care",
      tag: "Fractures, Polytrauma & Emergency Surgery",
      image: "/images/modular-ot.jpg",
      desc: "MP Hospital & Trauma Centre (Formerly Maxx Hospital) provides comprehensive accidental trauma management under Dr. Abhishek Jain. With a round-the-clock emergency surgical setup, we stabilize and treat life-threatening injuries, compound fractures, and crush injuries with minimal delay.",
      benefits: [
        "24x7 Emergency Polytrauma & Fracture Resuscitation",
        "Complex Pelvic & Acetabular Reconstructive Surgeries",
        "Minimally Invasive Plate Osteosynthesis (MIPO)",
        "Pediatric and Geriatric Bone Fracture Care",
      ],
    },
    {
      title: "Joint Replacement & Arthroplasty",
      tag: "Total Knee, Hip & Shoulder Replacements",
      image: "/images/orthopedic-rehab.jpg",
      desc: "Specialized in advanced joint replacement surgeries designed to restore complete, pain-free mobility to patients suffering from severe osteoarthritis, rheumatoid arthritis, or joint trauma. Our fast-track surgical protocol enables patients to stand and mobilize within 24 to 48 hours.",
      benefits: [
        "Total Knee Replacement (TKR) with rapid mobility protocols",
        "Total Hip Replacement (THR) – Cemented and Uncemented",
        "Shoulder Joint Arthroplasty and Partial Joint Replacements",
        "Computer-Navigated & High-Flexion Implants for longevity",
      ],
    },
    {
      title: "Arthroscopy & Sports Injury Clinic",
      tag: "Keyhole Ligament & Joint Cartilage Surgery",
      image: "/images/arthroscopy-surgery.jpg",
      desc: "Using state-of-the-art 4K ultra-high definition arthroscopic surgical cameras, our sports medicine unit repairs torn ligaments and damaged joint cartilage through keyhole incisions with negligible blood loss and minimal postoperative pain.",
      benefits: [
        "ACL, PCL & Multi-Ligament Knee Reconstruction",
        "Meniscus Tear Repair & Cartilage Restoration",
        "Shoulder Arthroscopy for Rotator Cuff & Recurrent Dislocation",
        "Personalized Athletic Rehab & Conditioning Program",
      ],
    },
    {
      title: "24x7 Critical Care ICU & Emergency",
      tag: "Trauma Resuscitation & Intensive Life Support",
      image: "/images/emergency-trauma-icu.jpg",
      desc: "A fully equipped Intensive Care Unit (ICU) and Emergency Casualty department staffed by dedicated intensivists, critical care nurses, and on-call trauma surgeons. Outfitted with invasive mechanical ventilators, multi-parameter monitors, and an in-house pharmacy.",
      benefits: [
        "Dedicated Multi-Bed Trauma Intensive Care Unit (ICU)",
        "Advanced Mechanical Ventilators and Telemetric Monitors",
        "GPS-Enabled Advanced Life Support (ALS) Ambulance Network",
        "Cashless Mediclaim, Ayushman Bharat & TPA Assistance Desk",
      ],
    },
  ];

  const processSteps = [
    {
      num: "1",
      title: "Emergency Triage & Consultation",
      desc: "Immediate clinical assessment by trauma specialists, vitals stabilization, and high-resolution digital X-rays to accurately diagnose bone or ligament injury.",
    },
    {
      num: "2",
      title: "Modular Surgical Excellence",
      desc: "Precision surgical intervention performed inside sterile Class 10,000 modular operation theatres with laminar airflow, ensuring zero-infection outcomes.",
    },
    {
      num: "3",
      title: "Rehabilitation & Pain-Free Recovery",
      desc: "Dedicated physical therapy team initiates tailored mobilization exercises within 24-48 hours, ensuring quick return to normal life and active mobility.",
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
            src="/images/modular-ot.jpg"
            alt="MP Hospital Medical Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Clinical Specialties
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Medical <span className="text-[#fff200]">Specialties</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital) offers specialized orthopedic surgery, accidental trauma care, and intensive life support in Jabalpur.
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
                    Clinical Highlights &amp; Care
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
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-neutral-600 hover:text-black underline"
                  >
                    Contact Hospital
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
              Clinical Pathway
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Patient Care Pathway
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Clear clinical milestones from casualty triage to modular surgery and active rehabilitation.
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
              <span>Book Doctor Consultation</span>
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
