"use client";

import React from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { siteConfig } from "@/data/siteData";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Legal Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-xs text-gray-400">Last updated: July 16, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral text-gray-700 space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-black mb-2">1. Introduction</h2>
            <p>
              At Sparkbuild, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website (www.sparkbuild.in), contact us, or engage with our civil engineering and construction services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, plot/site specifications, and any details you provide via contact, consultation, or job inquiry forms.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, device details, and usage metrics to optimize site performance.
              </li>
              <li>
                <strong>Cookies:</strong> Session tokens and preferences to ensure an interactive browsing experience.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">3. How We Use Your Information</h2>
            <p>Your information is used strictly to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to project inquiries and prepare structural quotations and 3D architectural proposals.</li>
              <li>Coordinate on-site inspections, surveys, and scheduled consultations.</li>
              <li>Comply with municipal, statutory, and Indian engineering regulatory requirements.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">4. Data Protection &amp; Security</h2>
            <p>
              We implement industry-standard physical, electronic, and procedural safeguards to secure your personal data against unauthorized access, loss, or alteration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">5. Sharing of Information</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal data. Information is shared only with verified internal engineering teams, municipal sanction coordinators, and as legally mandated by government authorities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-black mb-2">6. Contact Us</h2>
            <p>
              For questions regarding this policy or to request data removal, please reach out directly:
            </p>
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

