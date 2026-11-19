"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle, Phone, User, Calendar, Stethoscope, Clock, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const DOCTORS_LIST = [
  "Dr. Abhishek Jain (Director & Senior Orthopedic Surgeon)",
  "Dr. Akshay Juriani (Medicine & Chest Specialist)",
  "Dr. Prashant Singh Kushwaha (Neurosurgery & Spine)",
  "Dr. Mazid Ansari (General & Laparoscopic Surgery)",
  "Dr. Deepesh Agrawal (Plastic & Reconstructive Surgery)",
  "Dr. Swapnil Jain (Internal Medicine & Critical Care)",
  "Dr. Sneha Methwani (Gynecology & Obstetrics)",
  "Dr. Himanshu Jain (Critical Care ICU & Anesthesia)",
  "Dr. Nishit Kumar (Anesthesiology & Pain Management)",
  "Dr. Abhijeet Jain (Radiology & DMRE)",
  "Dr. Arjit Saraf (Pathology & Lab)",
  "Dr. Ruby Sonker (Neuro Physiotherapy)",
  "Dr. Ravi Rathode (Orthopedic Physiotherapy)",
  "24x7 Emergency Trauma & Casualty Admission",
];

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "Dr. Abhishek Jain (Director & Senior Orthopedic Surgeon)",
}: ConsultationModalProps) {
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    doctor: defaultService,
    preferredDate: todayStr,
    preferredTime: "Morning OPD (10:30 AM - 1:30 PM)",
    message: "",
  });

  const [token, setToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        doctor: defaultService,
      }));
    }
  }, [defaultService, isOpen]);

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

  if (!isOpen || !mounted) return null;

  const handlePhoneChange = (val: string) => {
    const digitsOnly = val.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      setPhoneError("Please enter valid 10-digit mobile number");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      setPhoneError("Valid 10-digit mobile number required");
      return;
    }
    setLoading(true);
    const generatedToken = "MP-OPD-" + Math.floor(100000 + Math.random() * 900000);
    setToken(generatedToken);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem("mphospital_inquiries") || "[]");
        existing.push({
          ...formData,
          token: generatedToken,
          id: Date.now().toString(),
          date: new Date().toISOString(),
          type: "Doctor Consultation",
        });
        localStorage.setItem("mphospital_inquiries", JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello MP Hospital Reception!\nI booked an OPD appointment online.\n\n*Token:* ${token}\n*Patient:* ${formData.name}\n*Phone:* ${formData.phone}\n*Doctor:* ${formData.doctor}\n*Date:* ${formData.preferredDate || "Earliest"}\n*Time:* ${formData.preferredTime}\n${formData.message ? `*Notes:* ${formData.message}` : ""}`
  );

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[92vh] my-auto flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner - Sky Blue with Medical Brand */}
        <div className="bg-[#008EC7] px-5 sm:px-6 py-4 text-white flex items-center justify-between border-b-4 border-red-600 shrink-0">
          <div>
            <span className="inline-block bg-white text-[#008EC7] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full mb-1 shadow-xs tracking-wider">
              MP Hospital &amp; Trauma Centre
            </span>
            <h3 className="text-base sm:text-lg font-black text-white">Book Doctor OPD Appointment</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-sky-100 p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body with Smooth Touch Scrolling */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-9 h-9 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider border border-emerald-200">
                  Appointment Confirmed
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-gray-900">Token: {token}</h4>
                <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our hospital reception desk will connect with you at{" "}
                  <strong>+91 {formData.phone}</strong> to confirm your slot.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 text-left space-y-2 text-xs text-neutral-800">
                <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                  <span className="font-semibold text-neutral-500">Doctor / Department:</span>
                  <span className="font-bold text-neutral-900 text-right truncate max-w-[200px]">{formData.doctor}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                  <span className="font-semibold text-neutral-500">Date &amp; Slot:</span>
                  <span className="font-bold text-neutral-900">{formData.preferredDate} ({formData.preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-500">Hospital Location:</span>
                  <span className="font-bold text-neutral-900">Beoharbagh, Jabalpur</span>
                </div>
              </div>

              {/* WhatsApp & Done Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/917648998668?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-extrabold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
                >
                  <WhatsappIcon className="w-4 h-4 fill-white text-white" />
                  <span>Send on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 bg-neutral-900 hover:bg-black text-white rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Contact Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Mobile"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                    />
                  </div>
                  {phoneError && <p className="text-[10px] text-red-600 font-bold mt-0.5">{phoneError}</p>}
                </div>
              </div>

              {/* Doctor / Specialty Selection */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Doctor / Specialty *
                </label>
                <div className="relative">
                  <Stethoscope className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 bg-white"
                  >
                    {DOCTORS_LIST.map((doc, idx) => (
                      <option key={idx} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    OPD Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 bg-white"
                    >
                      <option value="Morning OPD (10:30 AM - 1:30 PM)">Morning (10:30 AM - 1:30 PM)</option>
                      <option value="Evening OPD (5:30 PM - 8:30 PM)">Evening (5:30 PM - 8:30 PM)</option>
                      <option value="24x7 Emergency Casualty">24x7 Immediate Emergency</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Symptoms / Medical Concern */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Symptoms / Medical Concern (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe joint pain, accidental injury, fracture, or consultation requirement..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-[#008EC7] hover:bg-[#0077a8] text-white font-black text-xs sm:text-sm tracking-wider shadow-md shadow-sky-600/20 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer uppercase flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{loading ? "Confirming Slot..." : "Confirm Doctor Appointment"}</span>
                </button>
              </div>

              <p className="text-[10px] text-gray-500 text-center">
                🔒 Direct OPD confirmation by MP Hospital desk. 24x7 Emergency: 0761-2626123 / +91 7614037843.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
