"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Bone, HeartPulse, Stethoscope } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

export default function AboutSection() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage with Certificates */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 border border-neutral-200 aspect-[4/3]">
              <Image
                src="/images/mp-hospital-building.jpg"
                alt="MP Hospital and Trauma Centre Building"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping secondary image */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-60 h-36 sm:h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 hidden sm:block">
              <Image
                src="/images/modular-ot.jpg"
                alt="Modular Operation Theatre"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating ISO Certificate Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-xl shadow">
                +
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase">NABH / ISO Standards</p>
                <p className="text-xs font-black text-black">24x7 Emergency Trauma</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[#046F47] text-xs font-black uppercase tracking-wider">
              <span>About MP Hospital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
              Premier Orthopedic, Trauma &amp; Surgical Centre in Jabalpur
            </h2>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              MP Hospital and Trauma Centre (Formerly Maxx Hospital) is dedicated to delivering clinical excellence in orthopedics, accidental trauma resuscitation, joint replacement, and sports medicine under the leadership of renowned surgeon{" "}
              <span className="bg-emerald-50 text-[#046F47] px-2.5 py-0.5 rounded font-black border border-emerald-200 shadow-xs">
                Dr. Abhishek Jain
              </span>
              . With advanced laminar airflow modular operation theatres, a dedicated 24x7 Trauma ICU, and rapid rehabilitation protocols, we restore patient mobility and save lives every day.
            </p>

            {/* Dr. Abhishek Jain Leadership Spotlight Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50/80 via-white to-emerald-50/60 border-2 border-red-200 flex items-center gap-4 shadow-sm group">
              <Award className="w-8 h-8 text-red-600 stroke-[2.2] shrink-0 group-hover:scale-110 transition-transform" />
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-black text-black">Dr. Abhishek Jain</h4>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-red-600 text-white shadow-xs">
                    Director &amp; Senior Orthopedic Surgeon
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-800">
                  MS (Orthopaedics) • Knee &amp; Hip Joint Replacement, Arthroscopy &amp; Trauma Specialist
                </p>
              </div>
            </div>

            {/* Feature Bullets with Bare Icons (NO boxes) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200 text-center space-y-1 hover:border-emerald-500 hover:shadow-md transition-all group">
                <Bone className="w-7 h-7 mx-auto mb-2 text-[#046F47] stroke-[2.2] group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-black text-black">{siteConfig.stats.projectsCount || "15,000+"}</h4>
                <p className="text-xs font-medium text-gray-600">Surgeries Performed</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200 text-center space-y-1 hover:border-red-500 hover:shadow-md transition-all group">
                <HeartPulse className="w-7 h-7 mx-auto mb-2 text-red-600 stroke-[2.2] group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-black text-black">24x7</h4>
                <p className="text-xs font-medium text-gray-600">Emergency &amp; Trauma</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200 text-center space-y-1 hover:border-emerald-500 hover:shadow-md transition-all group">
                <Stethoscope className="w-7 h-7 mx-auto mb-2 text-[#046F47] stroke-[2.2] group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-black text-black">{siteConfig.stats.yearsExperience || "10+ Years"}</h4>
                <p className="text-xs font-medium text-gray-600">Trusted Care</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-red-600 text-white hover:bg-red-700 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-600/20"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-neutral-300 hover:border-black font-semibold text-sm transition-all duration-200"
              >
                <span>Hospital Facilities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
