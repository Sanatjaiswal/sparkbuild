"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { CheckCircle2, Calendar, Phone, Mail, User, Building, Clock, ShieldCheck, Sparkles } from "lucide-react";

export default function AppointmentLetterPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "Dr. Abhishek Jain (Orthopedics & Joint Replacement)",
    preferredDate: "",
    preferredTime: "Morning OPD (10:30 AM - 1:30 PM)",
    cityLocation: "Jabalpur",
    symptoms: "",
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
        const bookings = JSON.parse(localStorage.getItem("mphospital_appointments") || "[]");
        bookings.push({ ...formData, dateCreated: new Date().toISOString() });
        localStorage.setItem("mphospital_appointments", JSON.stringify(bookings));
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dr-abhishek-jain.jpg"
            alt="Doctor OPD Appointment"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            OPD &amp; Emergency Booking
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Book Doctor <span className="text-[#fff200]">Appointment</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            Schedule your in-person consultation with Dr. Abhishek Jain (Senior Orthopedic &amp; Trauma Specialist) at MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital).
          </p>
        </div>
      </section>

      {/* Form & Benefits Section */}
      <section className="py-20 bg-neutral-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Why Book at MP Hospital */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                  Why MP Hospital?
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                  Trusted Orthopedic &amp; Trauma Care
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  Whether you are suffering from chronic knee stiffness, joint arthritis, ligament tear, or need immediate accidental fracture care, our specialist team ensures zero waiting time and precise diagnostic evaluation.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Consultation with Dr. Abhishek Jain (MS Ortho, Joint Replacement Specialist)",
                  "State-of-the-art digital X-ray and in-house diagnostic pathology",
                  "Class 10,000 modular operation theatres with HEPA filtration",
                  "24x7 emergency trauma ICU & round-the-clock ALS ambulance availability",
                  "Cashless mediclaim, Ayushman Bharat, and corporate insurance desk",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-3xl bg-neutral-900 text-white space-y-2">
                <div className="flex items-center gap-2 text-[#fff200]">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-wider">Emergency Line</span>
                </div>
                <h4 className="text-lg font-bold">24x7 Trauma Casualty Helpline</h4>
                <p className="text-xs text-gray-400">
                  For critical trauma, road accidents, or ambulance dispatch, call 0761-2626123 or +91 76489-98668 immediately.
                </p>
              </div>
            </div>

            {/* Right: The Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Quick Confirmation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  Reserve Your Doctor Consultation
                </h3>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Appointment Requested!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. An official appointment confirmation and token number will be shared on <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#fff200] hover:text-black transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Patient Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Patient's full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 76489 98668"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="patient@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Location / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Beoharbagh, Jabalpur"
                        value={formData.cityLocation}
                        onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Specialty / Doctor
                      </label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] bg-white"
                      >
                        <option value="Dr. Abhishek Jain (Orthopedics)">Dr. Abhishek Jain (Orthopedics &amp; Joint Care)</option>
                        <option value="Total Knee / Hip Replacement">Joint Replacement (Knee / Hip)</option>
                        <option value="Sports Injury & Arthroscopy">Arthroscopy &amp; Sports Injury</option>
                        <option value="Emergency Trauma">24x7 Emergency Trauma Admission</option>
                        <option value="Spine Surgery">Spine &amp; Neuro Trauma</option>
                        <option value="Physiotherapy">Physiotherapy &amp; Rehabilitation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] bg-white"
                      >
                        <option value="Morning">Morning OPD (10:30 AM - 1:30 PM)</option>
                        <option value="Evening">Evening OPD (5:30 PM - 8:30 PM)</option>
                        <option value="Emergency">24x7 Immediate Emergency Casualty</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Symptoms / Health Concern
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe knee/joint pain, duration, accidental fracture, or specific consultation requirement..."
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                      className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      {loading ? "Confirming Slot..." : "Confirm Doctor Appointment"}
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-500 text-center">
                    🔒 Direct confirmation by MP Hospital desk. 24x7 Emergency Line: 0761-2626123.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingConsultation onOpenConsultation={() => {}} />
    </div>
  );
}
