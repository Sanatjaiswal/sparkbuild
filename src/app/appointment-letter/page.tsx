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
    projectType: "Residential Villa / Bungalow",
    preferredDate: "",
    preferredTime: "Morning (9 AM - 12 PM)",
    budgetRange: "₹25 Lakh - ₹50 Lakh",
    cityLocation: "Jabalpur",
    requirements: "",
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
        const bookings = JSON.parse(localStorage.getItem("sparkbuild_appointments") || "[]");
        bookings.push({ ...formData, dateCreated: new Date().toISOString() });
        localStorage.setItem("sparkbuild_appointments", JSON.stringify(bookings));
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
            src="/images/Trust-Image.png"
            alt="Sparkbuild Consultation"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            FREE Consultation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Book Your FREE <span className="text-[#fff200]">Expert Consultation</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            Schedule a one-on-one session with our expert civil engineering &amp; design team. Get personalized insights, 3D guidance, and smart cost-saving ideas — at zero charge.
          </p>
        </div>
      </section>

      {/* Form & Benefits Section */}
      <section className="py-20 bg-neutral-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Why Book Free Consultation */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                  Why Sparkbuild?
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                  Why Book a Free Consultation?
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  Your first session with Sparkbuild experts is completely free — no hidden costs, no obligations. You’ll walk away with actionable insights that make your build smoother and far more cost-efficient.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Get tailored design ideas & 3D perspectives from licensed architects",
                  "Understand real-world material costing and avoid 20-30% common builder markups",
                  "Receive transparent structural advice backed by ISO 9001:2015 engineering",
                  "Plan soil testing, municipal approval bylaws, and construction schedules",
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
                  <span className="text-xs font-black uppercase tracking-wider">Zero Obligation</span>
                </div>
                <h4 className="text-lg font-bold">100% Free Consultation Guarantee</h4>
                <p className="text-xs text-gray-400">
                  Whether you decide to build with us or just explore your options, our advice is always unbiased, professional, and client-centric.
                </p>
              </div>
            </div>

            {/* Right: The Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Instant Confirmation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  Reserve Your Meeting Slot
                </h3>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Meeting Reserved!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. An official appointment confirmation and meeting link / location will be sent to <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#fff200] hover:text-black transition-colors"
                  >
                    Schedule Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97133 37277"
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
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Plot Location / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vijay Nagar, Jabalpur"
                        value={formData.cityLocation}
                        onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Project Scope *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] bg-white"
                      >
                        <option value="Residential Villa / Bungalow">Residential Villa / Bungalow</option>
                        <option value="Commercial Complex / Showroom">Commercial Complex / Showroom</option>
                        <option value="Hospital & Healthcare Facility">Hospital &amp; Healthcare Facility</option>
                        <option value="Township / Mega Infrastructure">Township / Mega Infrastructure</option>
                        <option value="Industrial Plant / Warehouse">Industrial Plant / Warehouse</option>
                        <option value="Complete Home Renovation">Complete Home Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] bg-white"
                      >
                        <option value="₹15 Lakh - ₹25 Lakh">₹15 Lakh - ₹25 Lakh</option>
                        <option value="₹25 Lakh - ₹50 Lakh">₹25 Lakh - ₹50 Lakh</option>
                        <option value="₹50 Lakh - ₹1 Crore">₹50 Lakh - ₹1 Crore</option>
                        <option value="₹1 Crore - ₹5 Crore">₹1 Crore - ₹5 Crore</option>
                        <option value="₹5 Crore+ (Mega Project)">₹5 Crore+ (Mega Project)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200] bg-white"
                      >
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Brief Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 2400 sq.ft plot, need 4BHK with duplex elevation and swimming pool..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{loading ? "Scheduling Session..." : "Confirm My Free Appointment"}</span>
                    </button>
                  </div>
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

