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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-44 sm:h-14 sm:w-52">
              <Image
                src="/images/sparkbuild-logo.png"
                alt="Sparkbuild Logo"
                fill
                sizes="(max-width: 640px) 180px, 220px"
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
                      ? "text-black bg-[#fff200]/40 font-bold"
                      : "text-neutral-700 hover:text-black hover:bg-neutral-100"
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-white flex flex-col p-6 overflow-y-auto border-t border-neutral-200 shadow-2xl animate-in slide-in-from-top duration-300">
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
                      : "text-neutral-800 hover:bg-neutral-100"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-neutral-200 flex flex-col gap-3">
            <Link
              href="/contact"
              className="w-full text-center py-3 rounded-full bg-[#fff200] text-black font-bold text-sm shadow-md"
            >
              Get In Touch
            </Link>
            <a
              href={`tel:${siteConfig.phone1Raw}`}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-neutral-900 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#fff200]" />
              <span>Call Us: {siteConfig.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

