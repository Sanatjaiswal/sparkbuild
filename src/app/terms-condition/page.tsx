"use client";

import React from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { siteConfig } from "@/data/siteData";

export default function TermsConditionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Terms &amp; Conditions</h1>
          <p className="text-xs text-gray-400">Last updated: July 16, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-gray-700 space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-black mb-2">1. Acceptance of Terms</h2>
            <p>
              Welcome to Sparkbuild! By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding. If you do not agree with these terms, you may not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">2. Services &amp; Scope</h2>
            <p>
              Sparkbuild provides turnkey civil construction, architectural design, hospital &amp; healthcare infrastructure, industrial development, and structural consultancy. All services are subject to site feasibility, soil mechanics testing, statutory municipal sanction, and a formal signed agreement between the client and Sparkbuild.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">3. Intellectual Property</h2>
            <p>
              All blueprints, 3D renderings, elevations, photographs, branding marks, and text published on sparkbuild.in are the exclusive intellectual property of Sparkbuild Construction. Unauthorized reproduction or commercial re-use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">4. Quotations and Project Estimates</h2>
            <p>
              All preliminary estimates provided during consultations are valid for the timeframe specified in the quotation. Final project milestones, escalation clauses, and payment schedules are governed by the formal bilateral construction contract.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">5. Contact and Inquiries</h2>
            <p>For questions or formal correspondence:</p>
            <p className="font-semibold text-black">
              Email: {siteConfig.email} <br />
              Phone: {siteConfig.phone1} <br />
              Address: {siteConfig.address}
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConsultation onOpenConsultation={() => {}} />
    </div>
  );
}

