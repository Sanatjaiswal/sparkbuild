"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { useCMS } from "@/context/CMSContext";

export default function Footer() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-neutral-700 border-t-4 border-red-600 select-none">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-3" aria-label="MP Hospital & Trauma Centre Jabalpur Home">
              <Image
                src="/images/mp-hospital-registered-logo.png"
                alt="MP Hospital & Trauma Centre"
                width={180}
                height={157}
                className="h-20 sm:h-24 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              MP Hospital &amp; Trauma Centre delivers advanced orthopedic, joint replacement, spine surgery, and 24x7 emergency trauma care under the expert direction of{" "}
              <strong className="text-[#008EC7] font-black">
                Dr. Abhishek Jain
              </strong>
              .
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-xs"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-neutral-900 font-extrabold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-sm"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Medical Services
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Doctors &amp; Specialists
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Hospital Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Support */}
          <div>
            <h4 className="text-neutral-900 font-extrabold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#008EC7] rounded-sm"></span>
              Patient Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/appointment-letter" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Book Doctor OPD
                </Link>
              </li>
              <li>
                <Link href="/wall-of-love" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Patient Stories &amp; Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Careers at MP Hospital
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-condition" className="text-neutral-600 hover:text-red-600 font-medium transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-neutral-900 font-extrabold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-sm"></span>
              Emergency &amp; Help
            </h4>

            {/* Phone */}
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">24x7 Emergency Line</p>
                <a
                  href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
                  className="block text-neutral-900 hover:text-red-600 font-extrabold text-sm"
                >
                  {siteConfig.phone1}
                </a>
                <a
                  href={`tel:${siteConfig.phone2Raw || siteConfig.phone2}`}
                  className="block text-neutral-700 hover:text-red-600 font-semibold text-xs mt-0.5"
                >
                  {siteConfig.phone2}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-5 h-5 text-[#008EC7] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Email Support</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-neutral-900 hover:text-red-600 font-semibold text-xs break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Address / Location Highlighted */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-red-50/90 via-white to-red-50/50 border border-red-200 shadow-xs flex items-start gap-3 text-sm transition-all hover:border-red-300">
              <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-red-600 font-black uppercase tracking-wider">Hospital Location</p>
                  <span className="text-[10px] font-bold text-[#008ec7] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Jabalpur, MP</span>
                </div>
                <p className="text-neutral-900 leading-relaxed text-xs font-semibold">
                  {siteConfig.address}
                </p>
                <a
                  href="https://maps.google.com/?q=MP+Hospital+and+Trauma+Centre+Beoharbagh+Jabalpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold text-red-600 hover:text-red-700 pt-0.5"
                >
                  <span>Open in Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rich Medical Cerulean Blue Bottom Strip */}
      <div id="footer-bottom-strip" className="bg-[#008EC7] text-white py-1 sm:py-1.5 px-4 sm:px-6 lg:px-8 border-t border-sky-400">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-2.5 text-xs text-sky-50 font-medium text-center lg:text-left">
          {/* Left: Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 lg:gap-5 shrink-0 text-center lg:text-left">
            <p className="shrink-0">
              © {new Date().getFullYear()} MP Hospital and Trauma Centre, Jabalpur. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 text-sky-100">
              <span className="hidden sm:inline text-sky-200/60">•</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-sky-200/60">•</span>
              <Link href="/terms-condition" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>

          {/* Right End: Tech by Dora IT Zone & Back to Top */}
          <div className="flex items-center justify-center lg:justify-end gap-3 shrink-0">
            {/* White BG Pill with Reduced Padding & Smaller Font */}
            <a
              href="https://doraitzone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 px-2.5 py-0.5 sm:px-3 sm:py-0.5 rounded-full shadow-xs border border-white hover:shadow-md transition-all whitespace-nowrap group"
              title="Dora IT Zone - Digital Marketing & Technology Solutions, Jabalpur"
            >
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-neutral-700 leading-none">
                tech by
              </span>
              <div className="relative h-3.5 w-[110px] sm:h-3.5 sm:w-[115px] shrink-0">
                <Image
                  src="/images/dora-it-zone-single-line-dark.png"
                  alt="Dora IT Zone"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            </a>

            {/* Back to Top with subtle blinking pulse */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold cursor-pointer border border-white/20 shadow-xs transition-all active:scale-95 animate-pulse"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
