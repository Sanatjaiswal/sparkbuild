"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface HeroSliderProps {
  onOpenConsultation?: () => void;
}

export default function HeroSlider({ onOpenConsultation }: HeroSliderProps) {
  const { data } = useCMS();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Dynamic hero slides from CMS or fallback to default slides
  const defaultSlides = [
    {
      id: 1,
      highlightNumber: "24x7",
      title: "Emergency & Trauma Care in Jabalpur",
      description:
        "MP Hospital & Trauma Centre – Dedicated accidental trauma resuscitation, advanced surgical infrastructure, and round-the-clock emergency team.",
      bgImage: "/images/mp-hospital-building.jpg",
    },
    {
      id: 2,
      highlightNumber: "Modular OT",
      title: "Advanced Surgical & Joint Replacement Suite",
      description:
        "Class 10,000 modular operation theatres with laminar airflow, HEPA filtration, and minimally invasive joint replacement by Dr. Abhishek Jain.",
      bgImage: "/images/modular-ot.jpg",
    },
  ];

  const heroSlides = data?.heroSlides && data.heroSlides.length > 0 ? data.heroSlides : defaultSlides;

  // Ensure current slide index is valid if slides count changes
  useEffect(() => {
    if (current >= heroSlides.length) {
      setCurrent(0);
    }
  }, [heroSlides.length, current]);

  // Auto-advance slides every 5.5s (pauses on hover)
  useEffect(() => {
    if (isPaused || heroSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, heroSlides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section
      className="relative w-full h-[580px] sm:h-[680px] lg:h-[750px] overflow-hidden bg-black select-none flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3 Slides Carousel */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id || idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background image */}
          <div className="relative w-full h-full bg-neutral-900">
            <Image
              src={slide.bgImage || "/images/mp-hospital-building.jpg"}
              alt={slide.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover opacity-100 scale-100"
            />
            {/* Soft, light balanced overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
          </div>

          {/* Centered Content Stack with equal fixed heights (Zero Vertical Shift) */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center justify-center">
              {/* Official Registered Trademark Logo Container */}
              <div className="mb-4 sm:mb-5 p-3 sm:p-4 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl inline-flex items-center justify-center shrink-0 border border-white/60">
                <Image
                  src="/images/mp-hospital-registered-logo.png"
                  alt="MP Hospital & Trauma Centre"
                  width={240}
                  height={209}
                  className="h-24 sm:h-32 lg:h-36 w-auto object-contain"
                  priority={idx === 0}
                  unoptimized
                />
              </div>

              {/* Big High-Impact Heading with fixed min-height */}
              <div className="min-h-[76px] sm:min-h-[105px] lg:min-h-[125px] flex flex-col items-center justify-center w-full shrink-0">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-[1.1] tracking-tight text-center max-w-4xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                  <span className="block">
                    <span className="font-light text-white/85">{slide.highlightNumber}</span>{" "}
                    {slide.title}
                  </span>
                </h1>
              </div>

              {/* Clean Subtitle Description with fixed min-height */}
              <div className="min-h-[44px] sm:min-h-[50px] flex items-center justify-center w-full mt-2 sm:mt-3 shrink-0 px-2 sm:px-0">
                <p className="text-xs sm:text-sm lg:text-base text-white/95 font-medium leading-relaxed max-w-2xl mx-auto text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
                  {slide.description}
                </p>
              </div>

              {/* 3 Pagination Dots */}
              <div className="h-6 flex items-center justify-center gap-2.5 mt-4 sm:mt-6 shrink-0">
                {heroSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrent(dotIdx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      dotIdx === current
                        ? "w-7 h-2.5 bg-red-600 shadow-md"
                        : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev Chevron Arrow (<) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition-all cursor-pointer drop-shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2]" />
      </button>

      {/* Next Chevron Arrow (>) */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition-all cursor-pointer drop-shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2]" />
      </button>
    </section>
  );
}
