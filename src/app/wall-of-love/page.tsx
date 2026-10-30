"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import VideoModal from "@/components/ui/VideoModal";
import { Star, Quote, Play, ExternalLink, Calendar, CheckCircle } from "lucide-react";
import { testimonials, videoTestimonials, siteConfig } from "@/data/siteData";

export default function WallOfLovePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const extendedTestimonials = [
    ...testimonials,
    {
      name: "Er. Sandeep Choubey",
      project: "Township Master Plan & Villa",
      text: "Sparkbuild designed and constructed our residential layout with impeccable attention to soil mechanics and road gradients. Truly high-caliber professionals.",
      rating: 5,
    },
    {
      name: "Dr. Ananya Mishra",
      project: "Multi-Specialty Clinic Interior & Civil",
      text: "Setting up a medical clinic requires strict hygiene and specialized plumbing/electrical layout. Er. Pankaj Sen and his engineering team delivered it without a hitch.",
      rating: 5,
    },
    {
      name: "Vikas Patel",
      project: "Commercial Showroom Construction",
      text: "Delivered our commercial complex 3 weeks ahead of deadline! Their itemized pricing avoided any surprise cost overruns.",
      rating: 5,
    },
    {
      name: "Rameshwar Sen",
      project: "Luxury 4BHK Bungalow",
      text: "From 3D elevations to marble laying, their craftsmanship is unbeatable in Jabalpur. Everyone who visits compliments the elevation.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Trust-Image.png"
            alt="Wall of Love"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Wall of Love
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Voices Behind <span className="text-[#fff200]">The Builds</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            At Sparkbuild, trust is not just a principle—it’s proven through results. These testimonials highlight enduring relationships and impactful outcomes.
          </p>
        </div>
      </section>

      {/* Google Rating Banner */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-neutral-500">
                Rated Across Jabalpur &amp; MP
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black">
                Our Google Rating: 4.95 of 5
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
                Don’t just take our word for it — see what real homeowners, commercial developers, and healthcare administrators are saying about their experience with Sparkbuild.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="flex items-center gap-1.5 bg-white px-5 py-3 rounded-2xl border border-neutral-200 shadow-sm">
                <span className="text-2xl font-black text-black">4.95</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-500 ml-2">(260+ Reviews)</span>
              </div>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-[#fff200] hover:text-black text-white font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                <span>Watch Video Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-600">
              Verified Video Walkthroughs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black">
              Client Video Walkthroughs &amp; Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((v) => (
              <div
                key={v.id}
                onClick={() => setActiveVideoId(v.youtubeId)}
                className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative h-60 w-full bg-black">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#fff200] text-black flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 text-white">
                  <h3 className="text-base font-bold group-hover:text-[#fff200] transition-colors line-clamp-1">
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{v.clientName} • {v.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-neutral-500">
              Verified Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black">
              What Homeowners &amp; Developers Share
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extendedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-neutral-300" />
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200">
                  <h4 className="text-sm font-bold text-black">{item.name}</h4>
                  <p className="text-[11px] text-gray-500">{item.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl font-black text-white">Experience The Sparkbuild Difference</h3>
          <p className="text-sm text-gray-300">
            Join hundreds of satisfied clients across Madhya Pradesh. Schedule your one-on-one session with our civil engineers today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Free Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <VideoModal
        youtubeId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </div>
  );
}
