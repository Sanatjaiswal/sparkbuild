"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { useCMS } from "@/context/CMSContext";

export default function TopBar() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;

  return (
    <div className="bg-[#fff200] text-black text-xs font-semibold h-10 px-3 sm:px-6 lg:px-8 border-none shadow-none select-none relative z-40 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 overflow-hidden">
        {/* Left Side: Contact Phone & Email */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <a
            href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
            className="flex items-center gap-1.5 text-black hover:text-black/80 font-bold transition-colors text-xs whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 fill-black text-black shrink-0" />
            <span>{siteConfig.phone1}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden md:flex items-center gap-1.5 text-black hover:text-black/80 font-bold transition-colors text-xs whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 text-black stroke-[2.2] shrink-0" />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        {/* Center Highlight: Dr. Abhishek Jain (Director) */}
        <div className="hidden lg:flex items-center gap-1.5 text-black text-xs">
          <span className="text-black/90 font-black uppercase tracking-wider">Director:</span>
          <span className="bg-black text-[#fff200] px-2.5 py-0.5 rounded-full font-black tracking-wide shadow-xs">
            Dr. Abhishek Jain
          </span>
        </div>

        {/* Right Side: Follow Us + Social Icons (Facebook & Instagram) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <span className="text-black font-extrabold text-xs hidden sm:inline">Follow Us:</span>

          {/* Facebook */}
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
          >
            <FacebookIcon className="w-3 h-3 fill-white text-white" />
          </a>

          {/* Instagram */}
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
          >
            <InstagramIcon className="w-3 h-3 fill-white text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
