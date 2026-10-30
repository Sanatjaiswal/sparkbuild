"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface HeroSliderProps {
  onOpenConsultation: () => void;
}

const defaultHeroSlides = [
  {
    id: 1,
    isoBadge: "ISO 9001-2015",
    hindiLogo: "/images/mp-hospital-hindi-logo.svg",
    headingLine1: "24x7 Emergency & Trauma",
    headingLine2: "Leading Healthcare in Jabalpur",
    description: "MP Hospital & Trauma Centre (Formerly Maxx Hospital) – Accidental trauma resuscitation, modular laminar OT & round-the-clock emergency care.",
    bgImage: "/images/mp-hospital-building.jpg",
    primaryCta: "Book Appointment",
    secondaryCta: "View Facilities",
    secondaryHref: "/projects",
  },
  {
    id: 2,
    isoBadge: "ISO 9001-2015",
    hindiLogo: "/images/mp-hospital-hindi-logo.svg",
    headingLine1: "15,000+ Surgeries",
    headingLine2: "Advanced Modular OT & Trauma Care",
    description: "State-of-the-art modular operation theatres with laminar airflow and HEPA filtration for infection-free orthopedic and joint surgeries.",
    bgImage: "/images/modular-ot.jpg",
    primaryCta: "Book Appointment",
    secondaryCta: "Our Specialists",
    secondaryHref: "/our-team",
  },
  {
    id: 3,
    isoBadge: "ISO 9001-2015",
    hindiLogo: "/images/mp-hospital-hindi-logo.svg",
    headingLine1: "5,000+ Joint Replacements",
    headingLine2: "TKR, THR & 4K Knee Arthroscopy",
    description: "Led by Dr. Abhishek Jain (Orthopedic & Sports Injury Specialist) — minimally invasive techniques and rapid post-op mobility.",
    bgImage: "/images/orthopedic-rehab.jpg",
    primaryCta: "Book Appointment",
    secondaryCta: "Explore Services",
    secondaryHref: "/services",
  },
  {
    id: 4,
    isoBadge: "ISO 9001-2015",
    hindiLogo: "/images/spark-hindi-logo-1024x333.png",
    headingLine1: "1000+ Projects",
    headingLine2: "Design/Construct in India",
    description: "Complete construction solutions for every space.",
    bgImage: "/images/Service-Image-1.png",
    primaryCta: "Get In Touch",
    secondaryCta: "View Our Work",
    secondaryHref: "/projects",
  },
];

export default function HeroSlider({ onOpenConsultation }: HeroSliderProps) {
  const { data } = useCMS();
  const [current, setCurrent] = useState(0);

  const heroSlides = defaultHeroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-[640px] sm:h-[720px] lg:h-[780px] overflow-hidden bg-black select-none">
      {/* Slides Carousel */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background image covering full height */}
          <div className="relative w-full h-full">
            <Image
              src={slide.bgImage}
              alt={slide.headingLine1}
              fill
              priority={idx === 0}
              className="object-cover scale-105 transition-transform duration-7000 ease-out"
            />
            {/* Cinematic dark overlay so hero typography is readable */}
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
          </div>

          {/* Centered Content Stack */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center justify-center">
              {/* 1. ISO Badge (Small centered text) */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                {slide.isoBadge}
              </div>

              {/* 2. Logo Emblem / Hindi Branding Graphic */}
              <div className="relative h-14 sm:h-20 w-60 sm:w-80 mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src={slide.hindiLogo}
                  alt="Brand Emblem"
                  fill
                  className="object-contain"
                  priority={idx === 0}
                />
              </div>

              {/* 3. Big Heading (2 Lines, Bold, Centered) */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight text-center max-w-3xl mx-auto">
                <span className="block">{slide.headingLine1}</span>
                <span className="block mt-1">{slide.headingLine2}</span>
              </h1>

              {/* 4. Subtitle Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto text-center mt-3 sm:mt-4">
                {slide.description}
              </p>

              {/* 5. Horizontal Pagination Dots (Centered) */}
              <div className="flex items-center justify-center gap-2 mt-6 mb-6">
                {heroSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrent(dotIdx)}
                    className={`transition-all duration-300 rounded-full ${
                      dotIdx === current
                        ? "w-2.5 h-2.5 bg-white scale-110"
                        : "w-2 h-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* 6. Action CTA Buttons (Rounded-md, Centered) */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Yellow Primary Button with rounded-md */}
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md"
                >
                  <span>{slide.primaryCta}</span>
                </button>

                {/* Dark Outline Secondary Button with rounded-md */}
                <Link
                  href={slide.secondaryHref}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-transparent hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider border border-white/60 hover:border-white transition-all duration-200 active:scale-95"
                >
                  <span>{slide.secondaryCta}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev Chevron Arrow (<) on Left Edge */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.8]" />
      </button>

      {/* Next Chevron Arrow (>) on Right Edge */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.8]" />
      </button>
    </div>
  );
}
