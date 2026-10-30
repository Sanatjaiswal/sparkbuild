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
              Welcome to MP Hospital &amp; Trauma Centre (formerly Maxx Hospital), Jabalpur. By accessing or using our website, requesting appointments, or utilizing our clinical services, you agree to comply with and be bound by these Terms and Conditions. Please review them carefully.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">2. Clinical Services &amp; Medical Consultations</h2>
            <p>
              MP Hospital provides specialized orthopedic surgery, joint replacement (TKR/THR), accidental polytrauma resuscitation, 4K arthroscopy, sports injury rehabilitation, and 24x7 emergency ICU care under <strong>Dr. Abhishek Jain</strong> and attending clinical specialists. Online appointment bookings are subject to OPD schedule confirmation and clinical triage.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">3. Emergency Medical Disclaimer</h2>
            <p>
              Information on this website is provided for educational and appointment coordination purposes only and does not substitute for emergency medical care. For life-threatening emergencies, accidental trauma, or acute injury, please visit our 24x7 Trauma Casualty in Beoharbagh, Jabalpur directly or call 0761-2626123.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">4. Intellectual Property</h2>
            <p>
              All photographs, medical write-ups, brand marks, logos, and digital assets published on mphospital.in are the exclusive property of MP Hospital &amp; Trauma Centre. Unauthorized reproduction or commercial use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">5. Insurance &amp; Cashless TPA Policy</h2>
            <p>
              Hospital admission, diagnostic estimates, and cashless mediclaim pre-authorizations are subject to individual insurer / TPA approval, policy terms, and clinical documentation submitted at the time of admission.
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

