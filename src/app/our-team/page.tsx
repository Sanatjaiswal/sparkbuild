"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { useCMS } from "@/context/CMSContext";
import { ArrowRight, Calendar, Award, Building, HardHat } from "lucide-react";

export default function OurTeamPage() {
  const { data } = useCMS();
  const teamMembers = data.teamMembers;
  const [consultationOpen, setConsultationOpen] = useState(false);

  const founder = teamMembers[0] || {
    name: "Dr. Abhishek Jain",
    role: "Medical Director & Chief Orthopedic Surgeon",
    image: "/images/dr-abhishek-jain.jpg",
    bio: "Renowned orthopedic surgeon and trauma specialist in Jabalpur with over a decade of surgical experience.",
  };

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
            src="/images/medical-team.jpg"
            alt="MP Hospital Medical Leadership"
            fill
            priority
            className="object-cover opacity-95 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider shadow-md">
            Our Specialists
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            The Specialists Behind <span className="text-[#fff200]">Every Recovery</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            Our multidisciplinary team of orthopedic surgeons, intensivists, anesthesiologists, and physiotherapists at MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital).
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-lg">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-neutral-900">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-black px-3 py-1 bg-[#fff200] rounded-full border border-black/10 shadow-xs">
                    {founder.role}
                  </span>
                  <span className="text-xs font-extrabold text-red-700 bg-red-100/80 border border-red-200 px-2.5 py-0.5 rounded-full">
                    Senior Trauma Specialist
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
                  {founder.name}
                </h2>
                <p className="text-sm sm:text-base font-bold text-neutral-800">
                  {founder.qualification || "MBBS, MS (Orthopaedics) • Joint Replacement & Sports Injury Specialist"}
                </p>
              </div>

              <blockquote className="text-base text-gray-700 leading-relaxed font-normal italic border-l-4 border-[#fff200] pl-4">
                &ldquo;At MP Hospital &amp; Trauma Centre (formerly Maxx Hospital), our clinical mission is clear: rapid emergency resuscitation to save lives, ultra-clean modular surgeries, and advanced joint reconstructions to restore active, pain-free mobility for our patients in Jabalpur and Mahakoshal.&rdquo;
              </blockquote>

              <p className="text-sm text-gray-600 leading-relaxed">
                {founder.bio}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white hover:bg-[#fff200] hover:text-black font-extrabold text-sm uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation With Dr. Jain</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Leadership & Clinical Specialists Grid */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
              Clinical Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Meet the Doctors &amp; Specialists
            </h2>
            <p className="text-sm text-gray-600">
              With deep surgical expertise and compassionate care in the Mahakoshal region of MP, our clinical team works collaboratively from pre-op diagnostics to post-operative rehabilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(1).map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-neutral-200 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-[#fff200] uppercase tracking-wider">
                      {member.role}
                    </p>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                  <div className="pt-2 border-t border-neutral-100 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {member.qualification || "Orthopedics & Emergency Care"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl font-black text-white">Join Our Clinical &amp; Caregiving Team</h3>
          <p className="text-sm text-gray-300">
            We are always seeking passionate medical officers, ICU staff nurses, OT technicians, and rehabilitation specialists. Explore career opportunities at MP Hospital.
          </p>
          <div className="pt-2">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <span>View Hospital Careers</span>
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
