"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle, Phone, User, Mail } from "lucide-react";
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when consultation modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !mounted) return null;

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

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[92vh] my-auto flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner - Sky Blue */}
        <div className="bg-[#008EC7] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b-4 border-red-600 shrink-0">
          <div>
            <span className="inline-block bg-white text-[#008EC7] text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full mb-1 shadow-xs">
              MP Hospital &amp; Trauma Centre
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">Book Doctor OPD Appointment</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-sky-100 p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body with Smooth Touch Scrolling */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Appointment Requested!</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our hospital reception desk will contact you at{" "}
                <strong>{formData.phone}</strong> to confirm your appointment consultation.
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
                  className="w-full py-3 rounded-full bg-[#008EC7] hover:bg-[#0077a8] text-white font-extrabold text-sm tracking-wide shadow-md shadow-sky-600/20 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer uppercase"
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
    </div>,
    document.body
  );
}
