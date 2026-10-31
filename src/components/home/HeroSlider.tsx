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
    logo: "/images/mp-hospital-logo-white.svg",
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
    logo: "/images/mp-hospital-logo-white.svg",
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
    logo: "/images/mp-hospital-logo-white.svg",
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
    logo: "/images/mp-hospital-logo-white.svg",
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

  const heroSlides = hospitalHeroSlides;

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
          <div className="relative w-full h-full bg-neutral-950">
            <Image
              src={slide.bgImage}
              alt={slide.headingLine1}
              fill
              priority={idx === 0}
              className="object-cover opacity-90 scale-105 transition-transform duration-7000 ease-out"
            />
            {/* Soft, light balanced overlay - Dark blur reduced so images are clearly visible */}
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* Centered Content Stack: Clean, rock-solid equal alignment across all slides */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center justify-center">
              {/* 1. MP Hospital English Branding Graphic (Fixed Height) */}
              <div className="relative h-12 sm:h-16 lg:h-20 w-60 sm:w-80 lg:w-96 mb-2 sm:mb-3 flex items-center justify-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] shrink-0">
                <Image
                  src={slide.logo}
                  alt="MP Hospital & Trauma Centre"
                  fill
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>

              {/* Prominent Doctor Abhishek Jain Leadership Highlight Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/85 border border-[#fff200] text-white text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3 backdrop-blur-md shadow-xl shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#fff200] animate-pulse"></span>
                <span className="text-gray-200">Director:</span>
                <span className="text-[#fff200] font-black tracking-wide">Dr. Abhishek Jain</span>
              </div>

              {/* 2. Big High-Impact 2-Line Heading with Equal Fixed Height (Zero Vertical Shift) */}
              <div className="min-h-[76px] sm:min-h-[110px] lg:min-h-[135px] flex flex-col items-center justify-center w-full shrink-0">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-[1.08] tracking-tight text-center max-w-4xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                  <span className="block">{slide.headingLine1}</span>
                  <span className="block mt-1 sm:mt-2">{slide.headingLine2}</span>
                </h1>
              </div>

              {/* 3. Clean Subtitle with Equal Fixed Height (Zero Vertical Shift) */}
              <div className="min-h-[38px] sm:min-h-[44px] flex items-center justify-center w-full mt-2 shrink-0 px-2 sm:px-0">
                <p className="text-xs sm:text-sm lg:text-base text-white/95 font-medium leading-snug max-w-2xl mx-auto text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
                  {slide.description.includes("Dr. Abhishek Jain") ? (
                    <>
                      {slide.description.split("Dr. Abhishek Jain")[0]}
                      <span className="text-[#fff200] font-black underline decoration-yellow-400 decoration-2">
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
              <div className="h-6 flex items-center justify-center gap-2 my-3 sm:my-5 shrink-0">
                {heroSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrent(dotIdx)}
                    className={`transition-all duration-300 rounded-full ${
                      dotIdx === current
                        ? "w-2.5 h-2.5 bg-white scale-110 shadow-sm"
                        : "w-2 h-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* 5. Action CTA Buttons (Responsive Flow & Fixed Sizing) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto px-4 sm:px-0">
                {/* Yellow Primary Button: BOOK APPOINTMENT */}
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center h-10 sm:h-12 px-6 sm:px-8 rounded-md bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-xl whitespace-nowrap"
                >
                  <span>{slide.primaryCta}</span>
                </button>

                {/* Dark Outline Secondary Button: HOSPITAL FACILITIES / OUR SPECIALISTS */}
                <Link
                  href={slide.secondaryHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center h-10 sm:h-12 px-6 sm:px-8 rounded-md bg-black/60 hover:bg-black/80 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-white/80 hover:border-white transition-all duration-200 active:scale-95 shadow-xl whitespace-nowrap"
                >
                  <span>{slide.secondaryCta}</span>
                </Link>
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
