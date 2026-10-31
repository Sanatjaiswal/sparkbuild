"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Phone, Ambulance } from "lucide-react";
import { navItems, siteConfig } from "@/data/siteData";
import AmbulanceModal from "@/components/ui/AmbulanceModal";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAmbulanceOpen, setIsAmbulanceOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`w-full bg-white text-neutral-900 transition-all duration-300 border-b border-neutral-200/90 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 shadow-md py-2.5 bg-white/98 backdrop-blur-md"
          : "relative z-30 py-3 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-10 w-44 sm:h-12 sm:w-60">
              <Image
                src="/images/mp-hospital-nav-logo.png"
                alt="MP Hospital & Trauma Centre"
                fill
                sizes="(max-width: 640px) 176px, 240px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links: Clean High-Contrast Dark Text */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8 shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs lg:text-[13px] xl:text-[15px] font-bold transition-colors duration-150 ${
                    isActive
                      ? "text-red-600 font-extrabold"
                      : "text-neutral-800 hover:text-red-600"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Right Side in Navbar: Ambulance + Book Appointment */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* 24x7 Ambulance Button */}
            <button
              onClick={() => setIsAmbulanceOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-10 px-3.5 sm:px-4 rounded-md bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-md shadow-red-900/20 whitespace-nowrap cursor-pointer group"
              title="24x7 Emergency Ambulance Service"
            >
              <Ambulance className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Ambulance</span>
            </button>

            {/* Book Appointment Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center h-10 px-4 sm:px-6 lg:px-7 rounded-md bg-[#046F47] hover:bg-[#035939] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-md shadow-emerald-900/20 whitespace-nowrap cursor-pointer"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-800 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer Menu using React Portal directly on document.body */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-neutral-950/98 backdrop-blur-2xl text-white flex flex-col h-[100dvh] w-screen overflow-hidden animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 shrink-0 bg-neutral-900/95">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="relative h-10 w-48">
                <Image
                  src="/images/mp-hospital-logo-white.svg"
                  alt="MP Hospital & Trauma Centre"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 border border-neutral-700"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              {/* Navigation Links */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400 px-3 pb-1">
                  Menu
                </p>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-4 text-base font-bold rounded-xl transition-all ${
                        isActive
                          ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                          : "text-neutral-200 hover:bg-neutral-800/80 hover:text-white"
                      }`}
                    >
                      <span>{item.title}</span>
                      <span className="text-xs opacity-60">→</span>
                    </Link>
                  );
                })}
              </div>

              {/* Quick Action Buttons: Ambulance & Book Appointment */}
              <div className="pt-2 space-y-2.5">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400 px-3 pb-1">
                  Emergency &amp; Booking
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsAmbulanceOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-red-900/30 active:scale-95 transition-all cursor-pointer"
                  >
                    <Ambulance className="w-4 h-4" />
                    <span>Ambulance</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation?.();
                    }}
                    className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-[#046F47] hover:bg-[#035939] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/30 active:scale-95 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book OPD</span>
                  </button>
                </div>
              </div>

              {/* Doctor Leadership Spotlight */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-emerald-950/40 border border-neutral-800 text-xs">
                <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Director &amp; Senior Surgeon</p>
                <p className="text-white font-black text-sm mt-0.5">Dr. Abhishek Jain</p>
                <p className="text-[11px] text-emerald-400 font-medium">MS (Orthopaedics) • Joint &amp; Trauma Specialist</p>
              </div>

              {/* Direct 24x7 Helpline */}
              <div className="space-y-2 pb-6">
                <a
                  href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold text-sm hover:border-red-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>24x7 Emergency: {siteConfig.phone1}</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Ambulance Emergency Hotline Modal */}
      <AmbulanceModal isOpen={isAmbulanceOpen} onClose={() => setIsAmbulanceOpen(false)} />
    </nav>
  );
}
