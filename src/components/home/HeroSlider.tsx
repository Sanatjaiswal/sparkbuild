"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface HeroSliderProps {
  onOpenConsultation: () => void;
}

// 100% MP Hospital & Trauma Centre Slides
const hospitalHeroSlides = [
  {
    id: 1,
    logo: "/images/mp-hospital-registered-logo.png",
    headingLine1: "24x7 Emergency &",
    headingLine2: "Trauma Care Centre",
    description: "Premier Orthopedic, Accidental Polytrauma & Emergency Healthcare in Jabalpur",
    bgImage: "/images/mp-hospital-building.jpg",
    primaryCta: "Book Appointment",
    secondaryCta: "Hospital Facilities",
    secondaryHref: "/projects",
  },
  {
    id: 2,
    logo: "/images/mp-hospital-registered-logo.png",
    headingLine1: "15,000+ Surgeries",
    headingLine2: "Modular OT & Trauma Care",
    description: "Class 10,000 Modular OTs with Laminar Airflow & Sterile HEPA Filtration",
    bgImage: "/images/modular-ot.jpg",
    primaryCta: "Book Appointment",
    secondaryCta: "Our Specialists",
    secondaryHref: "/our-team",
  },
  {
    id: 3,
    logo: "/images/mp-hospital-registered-logo.png",
    headingLine1: "5,000+ Joint Replacements",
    headingLine2: "TKR, THR & 4K Arthroscopy",
    description: "Minimally Invasive Joint Care & Rapid Post-Op Rehabilitation by Dr. Abhishek Jain",
    bgImage: "/images/orthopedic-rehab.jpg",
    primaryCta: "Book Appointment",
    secondaryCta: "Clinical Specialties",
    secondaryHref: "/services",
  },
  {
    id: 4,
    logo: "/images/mp-hospital-registered-logo.png",
    headingLine1: "Critical Care ICU &",
    headingLine2: "24x7 Life Support",
    description: "Multi-Parameter ICU, Digital X-Ray Diagnostics & Cashless Ayushman / TPA Support",
    bgImage: "/images/emergency-trauma-icu.jpg",
    primaryCta: "Book Appointment",
    secondaryCta: "Emergency Contact",
    secondaryHref: "/contact",
  },
];

export default function HeroSlider({ onOpenConsultation }: HeroSliderProps) {
  const { data } = useCMS();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides =
    data?.heroSlides && data.heroSlides.length > 0
      ? data.heroSlides.map((slide, idx) => ({
          id: slide.id || idx + 1,
          logo: "/images/mp-hospital-registered-logo.png",
          headingLine1: (slide as any).headingLine1 || slide.highlightNumber || "24x7 Emergency &",
          headingLine2: (slide as any).headingLine2 || slide.title || "Trauma Care Centre",
          description: slide.description,
          bgImage: slide.bgImage || "/images/mp-hospital-building.jpg",
        }))
      : hospitalHeroSlides;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, heroSlides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div
      className="relative w-full h-[580px] sm:h-[680px] lg:h-[750px] overflow-hidden bg-black select-none flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Carousel */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background image: Bright, clear, vivid hospital photos with reduced dark overlay */}
          <div className="relative w-full h-full bg-neutral-900">
            <Image
              src={slide.bgImage}
              alt={slide.headingLine1}
              fill
              priority={idx === 0}
              className="object-cover opacity-100 scale-105 transition-transform duration-7000 ease-out"
            />
            {/* Soft, light balanced overlay - Top where navbar/logo sits has ZERO dark shadow, bottom has subtle gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
          </div>

          {/* Centered Content Stack: Clean, rock-solid equal alignment across all slides */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center justify-center">
              {/* 1. Official Registered Trademark Logo (Large & Clear) */}
              <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl inline-flex items-center justify-center shrink-0 border border-white/60">
                <Image
                  src={slide.logo}
                  alt="MP Hospital & Trauma Centre"
                  width={240}
                  height={209}
                  className="h-24 sm:h-32 lg:h-36 w-auto object-contain"
                  priority={idx === 0}
                  unoptimized
                />
              </div>

              {/* Prominent Doctor Abhishek Jain Leadership Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-neutral-900 border border-orange-400 shadow-2xl mb-2 sm:mb-3 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-neutral-700 text-xs font-bold uppercase tracking-wider">Director:</span>
                <span className="text-red-600 font-black text-xs sm:text-sm tracking-wide">Dr. Abhishek Jain</span>
              </div>

              {/* 2. Big High-Impact 2-Line Heading with Equal Fixed Height (Zero Vertical Shift) */}
              <div className="min-h-[76px] sm:min-h-[110px] lg:min-h-[135px] flex flex-col items-center justify-center w-full shrink-0">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-[1.08] tracking-tight text-center max-w-4xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                  <span className="block">
                    {slide.headingLine1.includes("24x7") ? (
                      <>
                        <span className="font-light text-white/85">24x7</span>{" "}
                        {slide.headingLine1.replace("24x7", "").trim()}
                      </>
                    ) : (
                      slide.headingLine1
                    )}
                  </span>
                  <span className="block mt-1 sm:mt-2">
                    {slide.headingLine2.includes("24x7") ? (
                      <>
                        <span className="font-light text-white/85">24x7</span>{" "}
                        {slide.headingLine2.replace("24x7", "").trim()}
                      </>
                    ) : (
                      slide.headingLine2
                    )}
                  </span>
                </h1>
              </div>

              {/* 3. Clean Subtitle with Equal Fixed Height (Zero Vertical Shift) */}
              <div className="min-h-[38px] sm:min-h-[44px] flex items-center justify-center w-full mt-2 shrink-0 px-2 sm:px-0">
                <p className="text-xs sm:text-sm lg:text-base text-white/95 font-medium leading-snug max-w-2xl mx-auto text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
                  {slide.description.includes("Dr. Abhishek Jain") ? (
                    <>
                      {slide.description.split("Dr. Abhishek Jain")[0]}
                      <span className="text-white font-black underline decoration-red-500 decoration-2">
                        Dr. Abhishek Jain
                      </span>
                      {slide.description.split("Dr. Abhishek Jain")[1]}
                    </>
                  ) : (
                    slide.description
                  )}
                </p>
              </div>

              {/* 4. Horizontal Pagination Dots (Fixed Height) */}
              <div className="h-6 flex items-center justify-center gap-2 mt-4 sm:mt-6 shrink-0">
                {heroSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrent(dotIdx)}
                    className={`transition-all duration-300 rounded-full ${
                      dotIdx === current
                        ? "w-3 h-3 bg-red-600 scale-110 shadow-sm"
                        : "w-2 h-2 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev Chevron Arrow (<) on Left Edge - Hidden on small mobile to avoid text overlap */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors cursor-pointer drop-shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      {/* Next Chevron Arrow (>) on Right Edge - Hidden on small mobile to avoid text overlap */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors cursor-pointer drop-shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>
    </div>
  );
}
