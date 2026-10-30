"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useCMS } from "@/context/CMSContext";

export default function Footer() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-52 bg-white p-2 rounded-lg">
                <Image
                  src="/images/mp-hospital-logo.svg"
                  alt="MP Hospital & Trauma Centre"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              MP Hospital & Trauma Centre (Formerly Maxx Hospital) delivers advanced orthopedic, joint replacement, spine surgery, and 24x7 emergency trauma care under the expert direction of Dr. Abhishek Jain.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#fff200] hover:text-black transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#fff200] hover:text-black transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#fff200] hover:text-black transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#fff200] hover:text-black transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Menu */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#fff200] rounded-sm"></span>
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#fff200] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#fff200] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#fff200] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-[#fff200] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#fff200] transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#fff200] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Menu */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#fff200] rounded-sm"></span>
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/blog" className="hover:text-[#fff200] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#fff200] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/wall-of-love" className="hover:text-[#fff200] transition-colors">
                  Patient Stories &amp; Reviews
                </Link>
              </li>
              <li>
                <Link href="/appointment-letter" className="hover:text-[#fff200] transition-colors">
                  Book Doctor Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#fff200] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#fff200] rounded-sm"></span>
              Contact Us
            </h4>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-[#fff200] shrink-0 mt-1" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Call Us</p>
                <a href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`} className="block text-white hover:text-[#fff200] font-semibold">
                  {siteConfig.phone1}
                </a>
                <a href={`tel:${siteConfig.phone2Raw || siteConfig.phone2}`} className="block text-white hover:text-[#fff200] font-semibold">
                  {siteConfig.phone2}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-[#fff200] shrink-0 mt-1" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Send Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white hover:text-[#fff200] font-medium break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-[#fff200] shrink-0 mt-1" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Address</p>
                <p className="text-gray-300 leading-relaxed text-xs">
                  {siteConfig.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} MP Hospital and Trauma Centre (Formerly Maxx Hospital). All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-condition" className="hover:text-gray-300 transition-colors">
              Terms & Condition
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#fff200] hover:underline font-semibold"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
