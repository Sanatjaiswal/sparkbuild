"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useCMS } from "@/context/CMSContext";

export default function TopBar() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;

  return (
    <div className="bg-[#111111] text-gray-300 text-xs py-2 px-4 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Contact info */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <a
            href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
            className="flex items-center gap-1.5 hover:text-[#fff200] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#fff200]" />
            <span>{siteConfig.phone1}</span>
          </a>
          <span className="hidden md:inline text-neutral-600">|</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-[#fff200] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#fff200]" />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400 font-medium">Follow Us:</span>
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
