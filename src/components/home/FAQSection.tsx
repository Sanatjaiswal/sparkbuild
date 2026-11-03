"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

export default function FAQSection() {
  const { data } = useCMS();
  const faqsData = data.faqsData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-50 border border-orange-300 text-orange-600 text-xs font-black uppercase tracking-wider shadow-xs">
            FAQ&apos;s
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Everything you need to know about our orthopedic services, 24x7 trauma care, Dr. Abhishek Jain&apos;s OPD, and cashless mediclaim.
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-red-600 text-white rotate-180" : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 bg-white text-sm text-gray-600 leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
