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
    name: "Er. Pankaj Sen",
    role: "Founder and Director",
    image: "/images/Founder-Image.png",
    bio: "Pioneering leader with a visionary commitment to shaping Central India's infrastructure since 2016.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Founder-Image.png"
            alt="Sparkbuild Leadership"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            The People Behind <span className="text-[#fff200]">Every Project</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            Behind every successful project is a team driven by expertise, dedication, and a shared commitment to engineering excellence.
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
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                  {founder.role}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-black">
                  {founder.name}
                </h2>
                <p className="text-sm font-semibold text-gray-500">
                  {founder.qualification || "B.E. Civil Engineering • Visionary Leader"}
                </p>
              </div>

              <blockquote className="text-base text-gray-700 leading-relaxed font-normal italic border-l-4 border-[#fff200] pl-4">
                &ldquo;When I founded Sparkbuild in 2016, our vision was simple yet absolute: deliver uncompromised construction quality with honesty, transparent pricing, and cutting-edge engineering. Today, every milestone we achieve in Madhya Pradesh is a tribute to that foundational promise.&rdquo;
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
                  <span>Consult with Leadership</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team Grid */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Meet the Team Driving Excellence
            </h2>
            <p className="text-sm text-gray-600">
              With strong technical expertise and deep local understanding of the Mahakaushal region of MP, our team works collaboratively from 2D drafting to on-site concrete pours.
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
                    {member.qualification || "Civil Engineering"}
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
          <h3 className="text-3xl font-black text-white">Want to Build With Us?</h3>
          <p className="text-sm text-gray-300">
            We are always seeking passionate civil engineers, site supervisors, and 3D architects. Explore current career openings at Sparkbuild.
          </p>
          <div className="pt-2">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <span>View Career Openings</span>
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
