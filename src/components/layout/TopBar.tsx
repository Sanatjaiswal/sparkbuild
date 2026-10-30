"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useCMS } from "@/context/CMSContext";

export default function TopBar() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;

  return (
    <div className="bg-[#fff200] text-black text-xs font-semibold h-10 px-4 sm:px-6 lg:px-8 border-b border-black/10 select-none relative z-40 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
        {/* Left Side: Contact Phone & Email */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
            className="flex items-center gap-1.5 text-black hover:text-black/80 font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-black text-black" />
            <span>{siteConfig.phone1}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 text-black hover:text-black/80 font-bold transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-black stroke-[2.2]" />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        {/* Right Side: Follow Us + Circular Social Icons (Matches media_1793375380430_7499a50d.png) */}
        <div className="flex items-center gap-2.5">
          <span className="text-black font-extrabold text-xs">Follow Us:</span>

          {/* Facebook: Blue Circle */}
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
          >
            <FacebookIcon className="w-3 h-3 fill-white text-white" />
          </a>

          {/* Instagram: Dark Circle */}
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
          >
            <InstagramIcon className="w-3 h-3 fill-white text-white" />
          </a>

          {/* YouTube: Red Circle */}
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-5 h-5 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
          >
            <YoutubeIcon className="w-3 h-3 fill-white text-white" />
          </a>

          {/* LinkedIn: Blue Circle */}
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-5 h-5 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
          >
            <LinkedinIcon className="w-3 h-3 fill-white text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
