"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { careerJobs, CareerJob } from "@/data/siteData";
import { CheckCircle2, Briefcase, MapPin, ArrowRight, X, Upload, Check, User, Mail, Phone } from "lucide-react";

export default function CareersPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeJob, setActiveJob] = useState<CareerJob | null>(null);
  const [appData, setAppData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    coverNote: "",
  });
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleApply = (job: CareerJob) => {
    setActiveJob(job);
    setAppSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setAppSubmitted(true);
      try {
        const apps = JSON.parse(localStorage.getItem("mphospital_applications") || "[]");
        apps.push({
          ...appData,
          jobId: activeJob?.id,
          jobTitle: activeJob?.title,
          date: new Date().toISOString(),
        });
        localStorage.setItem("mphospital_applications", JSON.stringify(apps));
      } catch (err) {
        console.error(err);
      }
    }, 800);
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
            src="/images/medical-team.jpg"
            alt="MP Hospital Careers"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Careers at MP Hospital
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Heal With Compassion – <span className="text-[#fff200]">Grow With Us</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            Join MP Hospital &amp; Trauma Centre (Formerly Maxx Hospital) in Jabalpur. Shape the future of trauma care, nursing excellence, and orthopedic surgical support.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-amber-600 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                Healing With Clinical Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
                Why Build Your Healthcare Career With Us
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                At MP Hospital &amp; Trauma Centre (formerly Maxx Hospital), you’re more than an employee — you are a life-saver and care partner. We value your clinical skills, prioritize continuous learning, and foster a culture of medical excellence.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Collaborative, patient-first multidisciplinary medical team",
                  "Competitive healthcare compensation and performance bonuses",
                  "State-of-the-art laminar airflow modular OTs & advanced ICU",
                  "Continuous medical education (CME) and clinical skill workshops",
                  "Respectful, transparent, and ethical hospital work environment",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#fff200] text-black flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-sm font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] bg-neutral-900">
                <Image
                  src="/images/medical-team.jpg"
                  alt="MP Hospital Medical Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
              We&apos;re Hiring
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
              Open Hospital Positions
            </h2>
            <p className="text-sm text-gray-600">
              Explore opportunities for doctors, ICU nursing staff, OT technicians, and healthcare professionals in Jabalpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-bold text-gray-700">
                      {job.type}
                    </span>
                    <Briefcase className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>

                  <h3 className="text-2xl font-black text-black group-hover:text-amber-600 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <MapPin className="w-4 h-4 text-black" />
                    <span>{job.location}</span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {job.description}
                  </p>

                  <div className="pt-2">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Key Qualifications
                    </h5>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {job.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fff200] mt-1.5 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100">
                  <button
                    onClick={() => handleApply(job)}
                    className="w-full py-3 rounded-full bg-black hover:bg-[#fff200] hover:text-black text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {activeJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveJob(null)}
        >
          <div
            className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#111111] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b-4 border-[#fff200] shrink-0">
              <div>
                <span className="text-[11px] font-bold text-[#fff200] uppercase">
                  Job Application
                </span>
                <h3 className="text-lg sm:text-xl font-bold">{activeJob.title}</h3>
              </div>
              <button
                onClick={() => setActiveJob(null)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto">
              {appSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Application Submitted!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you, <strong>{appData.firstName}</strong>. Our HR and technical recruitment team will review your profile for <strong>{activeJob.title}</strong> and reach out shortly.
                  </p>
                  <button
                    onClick={() => setActiveJob(null)}
                    className="px-6 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#fff200] hover:text-black transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={appData.firstName}
                        onChange={(e) => setAppData({ ...appData, firstName: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={appData.lastName}
                        onChange={(e) => setAppData({ ...appData, lastName: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={appData.email}
                      onChange={(e) => setAppData({ ...appData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={appData.phone}
                      onChange={(e) => setAppData({ ...appData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Portfolio / Resume Link or Drive URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/... or LinkedIn"
                      value={appData.portfolioUrl}
                      onChange={(e) => setAppData({ ...appData, portfolioUrl: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Brief Experience Note
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Years of experience, hospital/clinical background, specialties..."
                      value={appData.coverNote}
                      onChange={(e) => setAppData({ ...appData, coverNote: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fff200]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-sm uppercase tracking-wider shadow-md transition-all disabled:opacity-50"
                    >
                      {submitting ? "Sending Application..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}

