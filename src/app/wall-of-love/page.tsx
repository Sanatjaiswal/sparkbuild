"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Play, Quote, ExternalLink, Calendar } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import ConsultationModal from "@/components/ui/ConsultationModal";
import VideoModal from "@/components/ui/VideoModal";
import { useCMS } from "@/context/CMSContext";

export default function WallOfLovePage() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;
  const videoTestimonials = data.videoTestimonials;
  const testimonials = data.testimonials;
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const extendedTestimonials = [
    ...testimonials,
    {
      name: "Suresh Patidar",
      project: "Accidental Polytrauma Recovery",
      text: "After a severe highway accident, MP Hospital’s emergency trauma surgeons acted with lightning speed. The 24x7 ICU care, modular OT surgery, and post-op rehabilitation brought me back to my feet within 3 months. Immense gratitude to Dr. Abhishek Jain.",
      rating: 5,
    },
    {
      name: "Meenakshi Tiwari",
      project: "Bilateral Knee Arthroplasty",
      text: "I was bedridden with severe osteoarthritis for 4 years. Dr. Abhishek Jain recommended bilateral knee replacement. The surgery in the modular OT was painless, and I walked with support on day two. Today I walk unassisted with zero pain.",
      rating: 5,
    },
    {
      name: "Karan Singhania",
      project: "Shoulder Arthroscopy & Rotator Cuff",
      text: "Top-class sports injury care right here in Jabalpur! Keyhole arthroscopy was done so cleanly with minimal incision. Within 6 weeks I regained full shoulder range of motion. MP Hospital is truly world-class.",
      rating: 5,
    },
    {
      name: "Radhika Agrawal",
      project: "Elderly Hip Fracture & Rehab",
      text: "My 78-year-old grandmother suffered a hip fracture. MP Hospital’s team admitted her late at night, stabilized her vitals, and completed successful hip replacement the next morning. Clean hospital environment and caring nursing staff.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medical-team.jpg"
            alt="Patient Reviews at MP Hospital"
            fill
            priority
            className="object-cover opacity-90 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
            Patient Stories
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Voices Behind <span className="text-red-400">Every Healing</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            At MP Hospital &amp; Trauma Centre, patient trust is proven through restored mobility, pain-free lives, and critical trauma rescues.
          </p>
        </div>
      </section>

      {/* Google Rating Banner */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-sky-700">
                Rated Across Jabalpur &amp; MP
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">
                Our Google Rating: 4.95 of 5
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
                Don’t just take our word for it — see what patients, families, and healthcare professionals are saying about their recovery at MP Hospital &amp; Trauma Centre.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="flex items-center gap-1.5 bg-white px-5 py-3 rounded-2xl border border-neutral-200 shadow-sm">
                <span className="text-2xl font-black text-neutral-900">4.95</span>
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                <span>Watch Video Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Stories Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-sky-700 px-3.5 py-1 bg-sky-50 rounded-full border border-sky-200">
              Verified Video Walkthroughs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900">
              Patient Recovery Stories &amp; Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((v) => (
              <div
                key={v.id}
                onClick={() => setActiveVideoId(v.youtubeId)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-neutral-200 transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative h-60 w-full bg-black">
                  <Image
                    src={v.thumbnail}
                    alt={v.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-red-700 transition-all">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5 text-neutral-900">
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-red-600 transition-colors line-clamp-1">
                    {v.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{v.clientName} • {v.location}</p>
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
              Verified Patient Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900">
              What Patients &amp; Families Share
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extendedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:shadow-lg hover:border-red-500 transition-all"
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
                    &ldquo;
                    {item.text.includes("Dr. Abhishek Jain") ? (
                      <>
                        {item.text.split("Dr. Abhishek Jain")[0]}
                        <span className="font-black text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded not-italic">
                          Dr. Abhishek Jain
                        </span>
                        {item.text.split("Dr. Abhishek Jain")[1]}
                      </>
                    ) : item.text.includes("Dr. Jain") ? (
                      <>
                        {item.text.split("Dr. Jain")[0]}
                        <span className="font-black text-sky-700 bg-sky-50 border border-sky-200 px-1.5 py-0.5 rounded not-italic">
                          Dr. Jain
                        </span>
                        {item.text.split("Dr. Jain")[1]}
                      </>
                    ) : (
                      item.text
                    )}
                    &rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200">
                  <h4 className="text-sm font-bold text-neutral-900">{item.name}</h4>
                  <p className="text-[11px] text-sky-700 font-semibold">{item.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section className="py-16 bg-gradient-to-r from-[#008EC7] to-[#00709e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl font-black text-white">Experience Compassionate Healthcare at MP Hospital</h3>
          <p className="text-sm text-sky-50">
            Join thousands of relieved patients across Madhya Pradesh who regained active, pain-free mobility. Book your appointment with Dr. Abhishek Jain today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setConsultationOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-sky-50 text-[#008ec7] font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Appointment</span>
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
