import React from "react";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";
import { awardsData } from "@/data/siteData";

export default function CertificatesSection() {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[#046F47] text-xs font-black uppercase tracking-wider shadow-xs">
            Accreditations &amp; Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Commitment to Clinical Excellence
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Distinguished healthcare milestones celebrating surgical accuracy, infection-free modular OTs, and compassionate community care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-white font-mono px-3.5 py-1 bg-red-600 rounded-lg shadow-xs">
                    {award.year}
                  </span>
                  <Award className="w-7 h-7 text-red-600 stroke-[2.2] group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                  {award.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-[#046F47]">
                <CheckCircle className="w-4 h-4 text-[#046F47]" />
                <span>Verified Recognition</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Display Banner */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <ShieldCheck className="w-10 h-10 text-red-600 stroke-[2.2] shrink-0" />
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#046F47]">
                Official Healthcare Standards
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-neutral-900">
                NABH Standards &amp; Trauma Centre Compliance
              </h4>
              <p className="text-xs text-gray-600 max-w-xl">
                MP Hospital &amp; Trauma Centre adheres to strict clinical asepsis, biomedical waste management, 24x7 blood bank / diagnostic linkage, and emergency patient safety protocols.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
            <div className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full bg-[#046F47] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm">
              24x7 Emergency Care
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
