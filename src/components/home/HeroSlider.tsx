"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface HeroSliderProps {
  onOpenConsultation: () => void;
}

export default function HeroSlider({ onOpenConsultation }: HeroSliderProps) {
  const { data } = useCMS();
  const heroSlides = data.heroSlides;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!heroSlides || heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides]);

  if (!heroSlides || heroSlides.length === 0) return null;

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-[680px] sm:h-[780px] lg:h-[860px] overflow-hidden bg-black select-none">
      {/* Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background image with full overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover scale-105 transition-transform duration-7000 ease-out"
            />
            {/* Cinematic dark overlay so centered white text is crisp */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Slide Text Content - 100% CENTERED with top offset for transparent header */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pt-32 sm:pt-40 lg:pt-44 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
              <div className="space-y-6 sm:space-y-7 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-6 duration-700">
                {/* Yellow badge pill - CENTERED */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#fff200] text-black font-black text-xs sm:text-sm tracking-wider uppercase shadow-xl mx-auto">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>24x7 Emergency Trauma &amp; Orthopedic Care</span>
                </div>

                {/* Big Heading - CENTERED */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight text-center max-w-4xl mx-auto">
                  <span className="text-[#fff200] block mb-2 sm:mb-3 text-4xl sm:text-6xl lg:text-7xl font-mono font-black tracking-tight">
                    {slide.highlightNumber}
                  </span>
                  <span className="block">{slide.title}</span>
                </h1>

                {/* Subtitle / Description - CENTERED */}
                <p className="text-base sm:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl mx-auto text-center">
                  {slide.description}
                </p>

                {/* Action CTA Buttons - CENTERED */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-3 sm:pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-md border border-white/30 transition-all duration-200 active:scale-95"
                  >
                    <span>Hospital Facilities</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#fff200] text-white hover:text-black border border-white/20 transition-all active:scale-90 hidden sm:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-[#fff200] text-white hover:text-black border border-white/20 transition-all active:scale-90 hidden sm:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dots Indicator - CENTERED at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? "w-8 h-2.5 bg-[#fff200]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
