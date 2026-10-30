"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Compass, Building2, Factory, Milestone } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface ServicesGridProps {
  onOpenConsultation: () => void;
}

export default function ServicesGrid({ onOpenConsultation }: ServicesGridProps) {
  const { data } = useCMS();
  const servicesData = data.servicesData;

  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-6 h-6 text-black" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-black" />;
      case "Factory":
        return <Factory className="w-6 h-6 text-black" />;
      case "Milestone":
        return <Milestone className="w-6 h-6 text-black" />;
      default:
        return <Building2 className="w-6 h-6 text-black" />;
    }
  };

  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Our Full-Spectrum Construction Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            From initial blueprints to commercial skyscrapers, healthcare clinics, and mega infrastructure, Sparkbuild delivers engineering excellence across every discipline.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-200 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 sm:h-64 w-full bg-neutral-900 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#fff200] shadow-md">
                  {getIcon(service.iconName)}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card List Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#fff200] text-black flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-black group-hover:text-amber-600 transition-colors"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-gray-500 hover:text-black underline"
                  >
                    Learn Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
