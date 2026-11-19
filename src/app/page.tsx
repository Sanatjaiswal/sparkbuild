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
import CertificatesSection from "@/components/home/CertificatesSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import WhyHospital from "@/components/home/WhyHospital";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import LightboxModal from "@/components/ui/LightboxModal";
import { useCMS } from "@/context/CMSContext";

export default function HomePage() {
  const { data } = useCMS();
  const showMarquee = data?.siteConfig?.showMarquee ?? false;
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ src: string; title: string } | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Top Contact Bar (Emerald Green brand color, always on top) */}
      <TopBar />

      {/* 2. Navigation Bar (Clean Hospital White Header) */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* 3. Hero Carousel */}
      <HeroSlider />

      {/* Trust & Stats Bar */}
      <StatsBanner />

      {/* Continuous Marquee Banner (Customizable via Admin, disabled by default as requested) */}
      {showMarquee && <MarqueeTicker />}

      {/* About Section */}
      <AboutSection />

      {/* 4 Specialties Cards Section */}
      <ServicesGrid />

      {/* Built to Last CTA Banner */}
      <DreamCtaSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* 4-Step Care Process */}
      <ProcessSection />

      {/* Featured Hospital Facilities / Infrastructure Tabs */}
      <PortfolioTabs
        onOpenLightbox={(src, title) => setLightboxData({ src, title })}
      />

      {/* Awards & Certificates */}
      <CertificatesSection />

      {/* Written Patient Testimonials */}
      <TestimonialSlider />

      {/* Why Choose MP Hospital */}
      <WhyHospital />

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
