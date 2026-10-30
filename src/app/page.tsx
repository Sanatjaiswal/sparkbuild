"use client";

import React, { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import StatsBanner from "@/components/home/StatsBanner";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import AboutSection from "@/components/home/AboutSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import DreamCtaSection from "@/components/home/DreamCtaSection";
import ProcessSection from "@/components/home/ProcessSection";
import PortfolioTabs from "@/components/home/PortfolioTabs";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import CertificatesSection from "@/components/home/CertificatesSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import WhySparkbuild from "@/components/home/WhySparkbuild";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import VideoModal from "@/components/ui/VideoModal";
import LightboxModal from "@/components/ui/LightboxModal";

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [lightboxData, setLightboxData] = useState<{ src: string; title: string } | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Yellow Contact Bar (Solid bright yellow, matches media_1793375927977_47bc6de4.png) */}
      <TopBar />

      {/* 2. Hero Section Container with Overlaid Translucent Navbar */}
      <div className="relative w-full overflow-hidden">
        {/* Translucent Navbar Overlaying the top of the Hero Section */}
        <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Hero Carousel (Extends full height from y=0 inside this relative container, behind the navbar) */}
        <HeroSlider onOpenConsultation={() => setConsultationOpen(true)} />
      </div>

      {/* Trust & Stats Bar */}
      <StatsBanner />

      {/* Continuous Marquee Banner */}
      <MarqueeTicker />

      {/* About Section */}
      <AboutSection />

      {/* 4 Cards Section (Matches Sparkbuild Card Design: Pale Yellow BG, Rounded Top Images, White Box With Black Border) */}
      <ServicesGrid onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Built to Last CTA Banner */}
      <DreamCtaSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* 4-Step Care Process */}
      <ProcessSection />

      {/* Featured Hospital Facilities / Infrastructure Tabs */}
      <PortfolioTabs
        onOpenLightbox={(src, title) => setLightboxData({ src, title })}
      />

      {/* Client / Patient Video Testimonials */}
      <VideoTestimonials onPlayVideo={(id) => setActiveVideoId(id)} />

      {/* Awards & Certificates */}
      <CertificatesSection />

      {/* Written Patient Testimonials */}
      <TestimonialSlider />

      {/* Why Choose MP Hospital */}
      <WhySparkbuild />

      {/* FAQs */}
      <FAQSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />

      {/* Floating Consultation Bottom Bar & WhatsApp */}
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* YouTube Video Modal Player */}
      <VideoModal
        youtubeId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />

      {/* Lightbox Modal */}
      {lightboxData && (
        <LightboxModal
          imageSrc={lightboxData.src}
          title={lightboxData.title}
          onClose={() => setLightboxData(null)}
        />
      )}
    </main>
  );
}
