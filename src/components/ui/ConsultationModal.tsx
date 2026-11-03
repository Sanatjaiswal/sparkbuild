"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Calendar, Phone, User, Mail, Building, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteData";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "Dr. Abhishek Jain (Orthopedics & Joint Replacement)",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: defaultService,
    projectScope: defaultService,
    preferredTime: "Morning (10:30 AM - 1:30 PM)",
    message: "",
  });

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        projectScope: defaultService,
        serviceType: defaultService,
      }));
    }
  }, [defaultService, isOpen]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // store in local storage for admin preview
      try {
        const existing = JSON.parse(localStorage.getItem("mphospital_inquiries") || "[]");
        existing.push({
          ...formData,
          id: Date.now().toString(),
          date: new Date().toISOString(),
          type: "Doctor Consultation",
        });
        localStorage.setItem("mphospital_inquiries", JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner - Light Orange with Medical Red Underline */}
        <div className="bg-[#FB923C] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b-4 border-red-600 shrink-0">
          <div>
            <span className="inline-block bg-white text-[#FB923C] text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full mb-1 shadow-xs">
              MP Hospital &amp; Trauma Centre
            </span>
            <h3 className="text-lg sm:text-xl font-bold">Book Doctor OPD Appointment</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body with Smooth Touch Scrolling */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Appointment Requested!</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our hospital reception desk will contact you at{" "}
                <strong>{formData.phone}</strong> to confirm your consultation slot for{" "}
                <span className="text-orange-600 font-black bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                  {formData.projectScope || "Dr. Abhishek Jain (Orthopedics)"}
                </span>
                .
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-red-600 text-white rounded-full font-bold text-sm hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Department / Specialty
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 bg-white"
                    >
                      <option value="Dr. Abhishek Jain (Orthopedics & Joint Replacement)">Dr. Abhishek Jain (Orthopedics &amp; Joint Replacement)</option>
                      <option value="Dr. Akshay Juriani (Medicine & Respiratory)">Dr. Akshay Juriani (Medicine &amp; Respiratory)</option>
                      <option value="Dr. Prashant Singh Kushwaha (Neurosurgery & Spine)">Dr. Prashant Singh Kushwaha (Neurosurgery &amp; Spine)</option>
                      <option value="Dr. Mazid Ansari (General & Laparoscopic Surgery)">Dr. Mazid Ansari (General Surgery)</option>
                      <option value="Dr. Deepesh Agrawal (Plastic & Reconstructive Surgery)">Dr. Deepesh Agrawal (Plastic &amp; Reconstructive)</option>
                      <option value="Dr. Swapnil Jain (Internal Medicine)">Dr. Swapnil Jain (Medicine)</option>
                      <option value="Dr. Sneha Methwani (Gynecology & Obstetrics)">Dr. Sneha Methwani (Gynecology &amp; Obstetrics)</option>
                      <option value="Dr. Himanshu Jain (Anesthesia & Critical Care ICU)">Dr. Himanshu Jain (Anesthesia / ICU)</option>
                      <option value="Dr. Nishit Kumar (Anesthesiology & Pain Management)">Dr. Nishit Kumar (Anesthesiology)</option>
                      <option value="Dr. Abhijeet Jain (Radiology & Imaging)">Dr. Abhijeet Jain (Radiology)</option>
                      <option value="Dr. Arjit Saraf (Pathology & Diagnostics)">Dr. Arjit Saraf (Pathology)</option>
                      <option value="Dr. Ruby Sonker (Neuro Physiotherapy)">Dr. Ruby Sonker (Neuro Physiotherapy)</option>
                      <option value="Dr. Ravi Rathode (Orthopedic Physiotherapy)">Dr. Ravi Rathode (Orthopedic Physiotherapy)</option>
                      <option value="24x7 Emergency Trauma Admission">24x7 Emergency Trauma Admission</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 bg-white"
                    >
                      <option value="Morning">Morning OPD (10:30 AM - 1:30 PM)</option>
                      <option value="Evening">Evening OPD (5:30 PM - 8:30 PM)</option>
                      <option value="Emergency">Immediate 24x7 Emergency</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Symptoms / Medical Concern
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe symptoms, duration of joint pain, accident details, or request an ambulance..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-[#FB923C] hover:bg-[#F97316] text-white font-extrabold text-sm tracking-wide shadow-md shadow-orange-900/30 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer uppercase"
                >
                  {loading ? "Booking Appointment..." : "Confirm Doctor Appointment"}
                </button>
              </div>

              <p className="text-[11px] text-gray-500 text-center">
                🔒 Fast confirmation. Emergency Trauma &amp; Ambulance Hotline: 0761-2626123 / +91 76489-98668.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
