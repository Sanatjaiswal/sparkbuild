"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";

export default function TestimonialSlider() {
  return (
    <section className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-black uppercase tracking-wider shadow-xs">
            Patient Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Words of Gratitude From Our Patients
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Real experiences from families and patients treated at MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-neutral-300 group-hover:text-red-600 transition-colors" />
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;
                  {item.text.includes("Dr. Abhishek Jain") ? (
                    <>
                      {item.text.split("Dr. Abhishek Jain")[0]}
                      <span className="font-black text-[#046F47] bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded not-italic">
                        Dr. Abhishek Jain
                      </span>
                      {item.text.split("Dr. Abhishek Jain")[1]}
                    </>
                  ) : item.text.includes("Dr. Jain") ? (
                    <>
                      {item.text.split("Dr. Jain")[0]}
                      <span className="font-black text-[#046F47] bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded not-italic">
                        Dr. Jain
                      </span>
                      {item.text.split("Dr. Jain")[1]}
                    </>
                  ) : (
                    item.text
                  )}
                  &rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200">
                <h4 className="text-base font-bold text-neutral-900">{item.name}</h4>
                <p className="text-xs text-[#046F47] font-semibold">{item.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
