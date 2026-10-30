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
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Navigation */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Hero Carousel */}
      <HeroSlider onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Trust & Stats Bar */}
      <StatsBanner />

      {/* Continuous Marquee Banner */}
      <MarqueeTicker />

      {/* About Sparkbuild Section */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesGrid onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Built to Last CTA Banner */}
      <DreamCtaSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* 4-Step Work Process */}
      <ProcessSection />

      {/* Featured Projects with Tabs */}
      <PortfolioTabs
        onOpenLightbox={(src, title) => setLightboxData({ src, title })}
      />

      {/* Client Video Testimonials */}
      <VideoTestimonials onPlayVideo={(id) => setActiveVideoId(id)} />

      {/* Awards & Certificates */}
      <CertificatesSection />

      {/* Written Client Testimonials */}
      <TestimonialSlider />

      {/* Why Sparkbuild / Proven & Trusted */}
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

      {/* Image Lightbox Preview Modal */}
      <LightboxModal
        imageSrc={lightboxData?.src || null}
        title={lightboxData?.title}
        onClose={() => setLightboxData(null)}
      />
    </main>
  );
}
