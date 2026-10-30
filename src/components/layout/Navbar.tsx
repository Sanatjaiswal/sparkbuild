"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-md shadow-2xl py-3 border-b border-neutral-800"
          : isHome
          ? "bg-transparent py-4 text-white border-b border-white/10"
          : "bg-[#111111] py-4 text-white border-b border-neutral-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-52 sm:h-14 sm:w-64">
              <Image
                src="/images/mp-hospital-logo-white.svg"
                alt="MP Hospital & Trauma Centre"
                fill
                sizes="(max-width: 640px) 210px, 260px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-[#fff200] bg-white/10 font-bold"
                      : "text-white/90 hover:text-[#fff200] hover:bg-white/5"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/appointment-letter"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-[#111111] text-white flex flex-col p-6 overflow-y-auto border-t border-neutral-800 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 px-4 text-base font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#fff200] text-black font-bold"
                      : "text-gray-200 hover:bg-neutral-800"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-neutral-800 space-y-4">
            <Link
              href="/appointment-letter"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#fff200] text-black font-extrabold text-sm uppercase tracking-wider"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${siteConfig.phone2Raw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-extrabold text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>24x7 Emergency: {siteConfig.phone2}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
