"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/data/siteData";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Only stick when scrolled past TopBar & Navbar (120px)
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`w-full text-white transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md shadow-2xl py-3 border-b border-neutral-800"
          : isHome
          ? "-mb-[74px] sm:-mb-[76px] relative z-30 bg-transparent py-4 border-none shadow-none"
          : "relative z-30 bg-black py-4 border-b border-neutral-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-9 w-40 sm:h-11 sm:w-52">
              <Image
                src="/images/mp-hospital-logo-white.svg"
                alt="MP Hospital & Trauma Centre"
                fill
                sizes="(max-width: 640px) 160px, 208px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links: 6 Clean Items (Responsive Spacing) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7 2xl:gap-8 shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs lg:text-[13px] xl:text-[15px] font-semibold transition-colors duration-150 ${
                    isActive
                      ? "text-[#fff200] font-bold"
                      : "text-white/90 hover:text-[#fff200]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Right Side in Navbar: Clean Rectangular Button (Matches media_1793384522144_0dd79b8f.png) */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 lg:px-7 rounded-md bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-md whitespace-nowrap"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#111111]/98 backdrop-blur-xl text-white flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative h-9 w-40">
              <Image
                src="/images/mp-hospital-logo-white.svg"
                alt="MP Hospital & Trauma Centre"
                fill
                className="object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-neutral-800"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-1 py-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 text-base font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#fff200] text-black font-bold"
                      : "text-gray-200 hover:bg-neutral-800/80 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Footer & Quick Actions */}
          <div className="mt-auto pt-4 border-t border-neutral-800 space-y-3">
            {/* Mobile Doctor Highlight */}
            <div className="p-3 rounded-lg bg-neutral-900 border border-[#fff200]/40 flex items-center justify-between text-xs">
              <span className="text-gray-300">Chief Orthopedic Specialist:</span>
              <span className="text-[#fff200] font-black tracking-wide">Dr. Abhishek Jain</span>
            </div>

            <a
              href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#fff200]" />
              <span>24x7 Helpline: {siteConfig.phone1}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#fff200] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
