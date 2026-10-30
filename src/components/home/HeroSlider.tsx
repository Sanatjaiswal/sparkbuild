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
    <div className="relative w-full h-[550px] sm:h-[620px] lg:h-[700px] overflow-hidden bg-black select-none">
      {/* Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background image with high contrast dark gradient overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.bgImage}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover scale-105 transition-transform duration-7000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Slide Text Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {/* Yellow badge pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff200] text-black font-extrabold text-xs tracking-wider uppercase shadow-md">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ISO Certified & Licensed Construction Partner</span>
                </div>

                {/* Big Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                  <span className="text-[#fff200] block mb-1">
                    {slide.highlightNumber}
                  </span>
                  <span>{slide.title}</span>
                </h1>

                {/* Subtitle / Description */}
                <p className="text-base sm:text-xl text-gray-200 font-medium leading-relaxed max-w-2xl">
                  {slide.description}
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-sm border border-white/30 transition-all duration-200 active:scale-95"
                  >
                    <span>View Our Work</span>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#fff200] text-white hover:text-black border border-white/20 transition-all active:scale-90"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#fff200] text-white hover:text-black border border-white/20 transition-all active:scale-90"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? "w-8 h-2.5 bg-[#fff200]"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
