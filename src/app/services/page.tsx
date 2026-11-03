"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Calendar, HeartPulse, Bone, Crosshair, Building2 } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { useCMS } from "@/context/CMSContext";

export default function ServicesPage() {
  const { data } = useCMS();
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Orthopedic Consultation");

  const detailedServices = [
    {
      title: "24x7 Emergency Trauma & Accidental Care",
      icon: HeartPulse,
      iconColor: "text-red-600",
      tag: "Trauma Resuscitation",
      image: "/images/emergency-ambulance.jpg",
      desc: "Instant medical response for accidental polytrauma, fracture stabilization, crush injuries, and life-threatening emergencies. Featuring round-the-clock emergency casualty, standby orthopedic surgeons, ventilator ICU, and Advanced Life Support (ALS) ambulances.",
      benefits: [
        "Immediate Triage & Critical Care Resuscitation",
        "Round-the-clock Orthopedic & Trauma Surgeons",
        "Fully Equipped ALS Ambulance Fleet across Jabalpur",
        "Direct Linkage to Emergency OT & Digital Radiography",
      ],
    },
    {
      title: "Joint Replacement & Minimally Invasive Arthroplasty",
      icon: Bone,
      iconColor: "text-sky-600",
      tag: "Arthroplasty & Reconstruction",
      image: "/images/orthopedic-rehab.jpg",
      desc: "Advanced total knee replacement (TKR), total hip replacement (THR), and partial joint resurfacing performed by Dr. Abhishek Jain. Designed for rapid pain relief, precision implant alignment, and fast postoperative mobility.",
      benefits: [
        "Minimally Invasive Total Knee & Hip Replacement",
        "Computer-Assisted Precision Component Alignment",
        "Rapid Rehabilitation Protocol (Patients Walk within 24-48 Hours)",
        "Ultra-Clean Class 10,000 Modular Operation Theatres",
      ],
    },
    {
      title: "Arthroscopy & Sports Injury Center",
      icon: Crosshair,
      iconColor: "text-red-600",
      tag: "Keyhole Sports Surgery",
      image: "/images/arthroscopy-surgery.jpg",
      desc: "Minimally invasive keyhole arthroscopic diagnosis and reconstruction for athletic tears and joint instability. Covering 4K high-definition knee arthroscopy, ACL/PCL ligament reconstruction, and rotator cuff repairs.",
      benefits: [
        "4K HD Knee & Shoulder Arthroscopy",
        "Anatomic ACL, PCL & Meniscal Root Repairs",
        "Fast Recovery Day-Care Surgical Protocols",
        "Tailored Sports Rehabilitation & Return-to-Play Plans",
      ],
    },
    {
      title: "Modular Operation Theatres & Intensive Care ICU",
      icon: Building2,
      iconColor: "text-sky-600",
      tag: "Critical Care Infrastructure",
      image: "/images/modular-ot.jpg",
      desc: "NABH-compliant modular surgical suites featuring HEPA-filtered laminar airflow that guarantees sterile conditions. Backed by multi-parameter monitored Trauma ICU beds staffed by dedicated intensivists.",
      benefits: [
        "Class 10,000 Sterile Laminar Airflow Environment",
        "HEPA Air Filtration & Medical Gas Pipeline System",
        "Multi-Parameter Patient Monitors & Advanced Ventilators",
        "Zero-Infection Surgical Protocol for Implant Safety",
      ],
    },
  ];

  const processSteps = [
    {
      num: 1,
      title: "Emergency Triage & Evaluation",
      desc: "Rapid casualty assessment, bedside digital radiography, vital stabilization, and immediate pain management.",
    },
    {
      num: 2,
      title: "Modular Surgical Intervention",
      desc: "Sterile surgical precision in laminar airflow theatres with advanced implants and experienced surgical specialists.",
    },
    {
      num: 3,
      title: "Active Rehab & Discharge",
      desc: "Structured physiotherapy, early assisted mobilization, cashless insurance processing, and personalized home care guidance.",
    },
  ];

  const openForService = (serviceName: string) => {
    setSelectedService(serviceName);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/modular-ot.jpg"
            alt="Services at MP Hospital"
            fill
            priority
            className="object-cover opacity-90 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
            Clinical Specialties
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Our Medical <span className="text-red-400">Specialties</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            MP Hospital &amp; Trauma Centre offers specialized orthopedic surgery, accidental trauma care, and intensive life support in Jabalpur.
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
                className={`lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-100 ${
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
                <div className="flex items-center gap-3">
                  <service.icon className={`w-7 h-7 ${service.iconColor} stroke-[2.2] shrink-0`} />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700 px-3.5 py-1 bg-sky-50 rounded-full border border-sky-200">
                    {service.tag}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {service.desc.includes("Dr. Abhishek Jain") ? (
                    <>
                      {service.desc.split("Dr. Abhishek Jain")[0]}
                      <span className="bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded font-black border border-sky-200 shadow-xs">
                        Dr. Abhishek Jain
                      </span>
                      {service.desc.split("Dr. Abhishek Jain")[1]}
                    </>
                  ) : (
                    service.desc
                  )}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#008ec7]">
                    Clinical Highlights &amp; Care
                  </h4>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#00BFFF] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span className="text-sm font-semibold text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => openForService(service.title)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00BFFF] hover:bg-[#009fe3] text-white font-black text-sm uppercase tracking-wider shadow-md shadow-sky-500/25 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-neutral-600 hover:text-red-600 underline"
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
      <section className="py-24 bg-neutral-50 text-neutral-900 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-sky-50 border border-sky-300 text-sky-700 text-xs font-black uppercase tracking-wider shadow-xs">
              Clinical Pathway
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              Our Patient Care Pathway
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Clear clinical milestones from casualty triage to modular surgery and active rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm relative flex flex-col justify-between group hover:border-red-500 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <span className="text-5xl font-black text-red-600 font-mono">
                    0{step.num}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-red-600/30 transition-all active:scale-95 cursor-pointer"
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
