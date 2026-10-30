"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { siteConfig } from "@/data/siteData";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Star } from "lucide-react";

export default function ContactPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        const list = JSON.parse(localStorage.getItem("sparkbuild_contacts") || "[]");
        list.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem("sparkbuild_contacts", JSON.stringify(list));
      } catch (err) {
        console.error(err);
      }
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mp-hospital-building.jpg"
            alt="Contact MP Hospital"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Contact Hospital
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Get In Touch With <span className="text-[#fff200]">MP Hospital</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital) – 24x7 Emergency Line: 0761-2626123, OPD Appointments &amp; Trauma Resuscitation in Jabalpur.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-20 bg-neutral-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                  24x7 Emergency Care
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                  We’re Here When You Need Us Most
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Located in Beoharbagh near Ghamapur Chowk, Jabalpur. Reach out for OPD appointments with Dr. Abhishek Jain, accidental trauma admissions, ambulance services, or cashless TPA guidance.
                </p>
              </div>

              {/* Rating Card */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">4.9 of 5 Stars</h4>
                  <p className="text-xs text-gray-500">450+ Verified Patient Reviews</p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fff200] text-black flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Call Us Directly
                    </h4>
                    <a
                      href={`tel:${siteConfig.phone1Raw}`}
                      className="block text-base font-extrabold text-black hover:text-amber-600"
                    >
                      {siteConfig.phone1}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone2Raw}`}
                      className="block text-sm font-bold text-gray-700 hover:text-amber-600"
                    >
                      {siteConfig.phone2}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fff200] text-black flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Send Email
                    </h4>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-bold text-black hover:text-amber-600 break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fff200] text-black flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Office Address
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl">
              <h3 className="text-2xl font-black text-black mb-2">Send Us a Direct Message</h3>
              <p className="text-xs text-gray-500 mb-8">
                We respond within 2-4 business hours with initial structural feedback.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Message Received!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.firstName}</strong>. Our project coordinator will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#fff200] hover:text-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97133 37277"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                      Your Message / Project Scope *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your plot location, size, residential, commercial or hospital requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Submit Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 h-[400px]">
            <iframe
              src={siteConfig.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sparkbuild Jabalpur Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}

