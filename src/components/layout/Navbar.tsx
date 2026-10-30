"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
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
          ? "-mb-[74px] sm:-mb-[76px] relative z-30 bg-black/45 backdrop-blur-[2px] py-3.5 sm:py-4 border-b border-white/15"
          : "relative z-30 bg-black py-3.5 sm:py-4 border-b border-neutral-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-10 w-44 sm:h-11 sm:w-52">
              <Image
                src="/images/mp-hospital-logo-white.svg"
                alt="MP Hospital & Trauma Centre"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links: 6 Clean Items Matching Sparkbuild Screenshot */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm lg:text-[15px] font-semibold transition-colors duration-150 ${
                    isActive
                      ? "text-[#fff200] font-bold"
                      : "text-white hover:text-[#fff200]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Action Button: Yellow with rounded-md (Matches media_1793375380430_7499a50d.png) */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/appointment-letter"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap"
            >
              <span>Get In Touch</span>
            </Link>
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
                  className={`py-3 px-4 text-base font-semibold rounded-md transition-colors ${
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
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#fff200] text-black font-extrabold text-sm uppercase tracking-wider"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
