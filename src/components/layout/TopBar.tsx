"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useCMS } from "@/context/CMSContext";

export default function TopBar() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`text-xs py-2.5 px-4 transition-colors duration-300 ${
        isHome
          ? "bg-transparent text-gray-200 border-b border-white/15"
          : "bg-neutral-950 text-gray-300 border-b border-neutral-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Contact info */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
            className="flex items-center gap-1.5 hover:text-[#fff200] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#fff200]" />
            <span className="font-semibold">{siteConfig.phone1}</span>
          </a>
          <span className="hidden md:inline text-white/30">|</span>
          <a
            href={`tel:${siteConfig.phone2Raw || siteConfig.phone2}`}
            className="flex items-center gap-1.5 hover:text-[#fff200] transition-colors"
          >
            <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-black text-[10px] uppercase">
              24x7 Emergency
            </span>
            <span className="font-semibold">{siteConfig.phone2}</span>
          </a>
          <span className="hidden md:inline text-white/30">|</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden lg:flex items-center gap-1.5 hover:text-[#fff200] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#fff200]" />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <span className="text-gray-300 font-medium hidden sm:inline">Follow Us:</span>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-1 hover:text-[#fff200] transition-colors"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-1 hover:text-[#fff200] transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="p-1 hover:text-[#fff200] transition-colors"
          >
            <YoutubeIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1 hover:text-[#fff200] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
