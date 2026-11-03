"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Calendar, Phone, Sparkles } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingConsultation from "@/components/ui/FloatingConsultation";

export default function AppointmentLetterPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cityLocation: "",
    specialty: "Dr. Abhishek Jain (Orthopedics)",
    preferredTime: "Morning",
    preferredDate: "",
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
        const existing = JSON.parse(localStorage.getItem("mphospital_inquiries") || "[]");
        existing.push({
          ...formData,
          id: Date.now().toString(),
          date: new Date().toISOString(),
          type: "OPD Appointment Request",
        });
        localStorage.setItem("mphospital_inquiries", JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Navbar onOpenConsultation={() => {}} />

      {/* Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/orthopedic-rehab.jpg"
            alt="Doctor OPD Appointment"
            fill
            priority
            className="object-cover opacity-90 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
            OPD &amp; Emergency Booking
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Book Doctor <span className="text-red-400">Appointment</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            Schedule your in-person consultation with{" "}
            <span className="text-white font-black underline decoration-red-500 decoration-2">
              Dr. Abhishek Jain
            </span>{" "}
            (Senior Orthopedic &amp; Trauma Specialist) at MP Hospital &amp; Trauma Centre.
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
                <span className="text-xs font-black uppercase tracking-wider text-sky-700 px-3.5 py-1 bg-sky-50 rounded-full border border-sky-200">
                  Why MP Hospital?
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
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
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">
                      {item.includes("Dr. Abhishek Jain") ? (
                        <>
                          {item.split("Dr. Abhishek Jain")[0]}
                          <span className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded font-black border border-sky-200">
                            Dr. Abhishek Jain
                          </span>
                          {item.split("Dr. Abhishek Jain")[1]}
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-3xl bg-[#00BFFF] text-white space-y-2 border-2 border-sky-400 shadow-md">
                <div className="flex items-center gap-2 text-white">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-xs font-black uppercase tracking-wider">Emergency Line</span>
                </div>
                <h4 className="text-lg font-black text-white">24x7 Trauma Casualty Helpline</h4>
                <p className="text-xs text-sky-50">
                  For critical trauma, road accidents, or ambulance dispatch, call 0761-2626123 or +91 76489-98668 immediately.
                </p>
              </div>
            </div>

            {/* Right: The Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Quick Confirmation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900">
                  Reserve Your Doctor Consultation
                </h3>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Appointment Requested!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. An official appointment confirmation and token number will be shared on <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-red-600 text-white rounded-full font-semibold text-sm hover:bg-red-700 transition-colors cursor-pointer"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                      >
                        <option value="Dr. Abhishek Jain (Orthopedics & Joint Replacement)">Dr. Abhishek Jain - Orthopedics &amp; Joint Replacement</option>
                        <option value="Dr. Akshay Juriani (Medicine & Respiratory)">Dr. Akshay Juriani - Medicine &amp; Respiratory</option>
                        <option value="Dr. Prashant Singh Kushwaha (Neurosurgery & Spine)">Dr. Prashant Singh Kushwaha - Neurosurgery &amp; Spine</option>
                        <option value="Dr. Mazid Ansari (General Surgery)">Dr. Mazid Ansari - General &amp; Laparoscopic Surgery</option>
                        <option value="Dr. Deepesh Agrawal (Plastic & Reconstructive Surgery)">Dr. Deepesh Agrawal - Plastic &amp; Reconstructive</option>
                        <option value="Dr. Swapnil Jain (Internal Medicine)">Dr. Swapnil Jain - Internal Medicine</option>
                        <option value="Dr. Sneha Methwani (Gynecology & Obstetrics)">Dr. Sneha Methwani - Gynecology &amp; Obstetrics</option>
                        <option value="Dr. Himanshu Jain (Anesthesia & Critical Care ICU)">Dr. Himanshu Jain - Anesthesia / ICU</option>
                        <option value="Dr. Nishit Kumar (Anesthesiology & Pain Management)">Dr. Nishit Kumar - Anesthesiology</option>
                        <option value="Dr. Abhijeet Jain (Radiology & DMRE)">Dr. Abhijeet Jain - Radiology &amp; DMRE</option>
                        <option value="Dr. Arjit Saraf (Pathology & Lab)">Dr. Arjit Saraf - Pathology &amp; Lab</option>
                        <option value="Dr. Ruby Sonker (Neuro Physiotherapy)">Dr. Ruby Sonker - Neuro Physiotherapy</option>
                        <option value="Dr. Ravi Rathode (Orthopedic Physiotherapy)">Dr. Ravi Rathode - Orthopedic Physiotherapy</option>
                        <option value="24x7 Emergency Trauma Admission">24x7 Emergency Trauma Admission</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
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
                      className="w-full p-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
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
