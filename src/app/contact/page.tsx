"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, CheckCircle2, Star } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import ConsultationModal from "@/components/ui/ConsultationModal";
import { useCMS } from "@/context/CMSContext";

export default function ContactPage() {
  const { data } = useCMS();
  const siteConfig = data.siteConfig;
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
        const existing = JSON.parse(localStorage.getItem("mphospital_messages") || "[]");
        existing.push({
          ...formData,
          id: Date.now().toString(),
          date: new Date().toISOString(),
        });
        localStorage.setItem("mphospital_messages", JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Header Banner */}
      <section className="relative py-20 sm:py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mp-hospital-building.jpg"
            alt="Contact MP Hospital"
            fill
            priority
            className="object-cover opacity-90 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
            Contact Hospital
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Get In Touch With <span className="text-red-400">MP Hospital</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            MP Hospital &amp; Trauma Centre – 24x7 Emergency Line: 0761-2626123, OPD Appointments &amp; Trauma Resuscitation in Jabalpur.
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
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 px-3.5 py-1 bg-orange-50 rounded-full border border-orange-200">
                  24x7 Emergency Care
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                  We’re Here When You Need Us Most
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Located in Beoharbagh near Ghamapur Chowk, Jabalpur. Reach out for OPD appointments with{" "}
                  <span className="bg-orange-50 text-orange-600 px-2.5 py-0.5 rounded font-black border border-orange-200 shadow-xs">
                    Dr. Abhishek Jain
                  </span>
                  , accidental trauma admissions, ambulance services, or cashless TPA guidance.
                </p>
              </div>

              {/* Dr. Abhishek Jain OPD Timing Card */}
              <div className="p-4 rounded-2xl bg-orange-50/70 border-2 border-orange-300 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FB923C] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                  OPD
                </div>
                <div>
                  <h4 className="text-sm font-black text-neutral-900">Dr. Abhishek Jain OPD Timings</h4>
                  <p className="text-xs text-neutral-800 font-medium">Mon - Sat: 10:30 AM - 1:30 PM &amp; 5:30 PM - 8:30 PM</p>
                  <p className="text-[11px] text-orange-700 font-bold mt-0.5">Emergency Trauma Consultation: 24x7 Available</p>
                </div>
              </div>

              {/* Rating Card */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">4.9 of 5 Stars</h4>
                  <p className="text-xs text-gray-500">450+ Verified Patient Reviews</p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Call Us Directly
                    </h4>
                    <a
                      href={`tel:${siteConfig.phone1Raw}`}
                      className="block text-base font-extrabold text-neutral-900 hover:text-red-600"
                    >
                      {siteConfig.phone1}
                    </a>
                    <a
                      href={`tel:${siteConfig.phone2Raw}`}
                      className="block text-sm font-bold text-gray-700 hover:text-red-600"
                    >
                      {siteConfig.phone2}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FB923C] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Send Email
                    </h4>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-bold text-neutral-900 hover:text-red-600 break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50/70 via-white to-red-50/30 border-2 border-red-200 shadow-md flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs font-black text-red-600 uppercase tracking-wider">
                        Hospital Location &amp; Campus
                      </h4>
                      <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                        Jabalpur, MP
                      </span>
                    </div>
                    <p className="text-xs text-neutral-900 leading-relaxed font-semibold">
                      {siteConfig.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=MP+Hospital+and+Trauma+Centre+Beoharbagh+Jabalpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-red-600 hover:text-red-700 hover:underline pt-1"
                    >
                      <span>Get Live Driving Directions on Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl">
              <h3 className="text-2xl font-black text-neutral-900 mb-2">Send Us a Direct Message</h3>
              <p className="text-xs text-gray-500 mb-8">
                We respond promptly for appointments, emergency admissions, and medical inquiries.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Message Received!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.firstName}</strong>. Our patient care desk will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-red-600 text-white rounded-full font-semibold text-sm hover:bg-red-700 transition-colors cursor-pointer"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                      Your Message / Health Query *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your symptoms, joint issue, trauma details, or inquiry for Dr. Abhishek Jain..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
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
              title="MP Hospital & Trauma Centre Jabalpur Location"
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
