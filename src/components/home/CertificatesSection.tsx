import React from "react";
import { Building2, ShieldCheck, HeartPulse, CheckCircle2, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function CertificatesSection() {
  const clinicalStandards = [
    {
      icon: Building2,
      badge: "Clinical Registration",
      title: "Registered Trauma Hospital",
      description: "Officially registered healthcare establishment with dedicated casualty reception, 24x7 emergency beds, and round-the-clock medical staff in Jabalpur.",
    },
    {
      icon: ShieldCheck,
      badge: "Sterility & Asepsis",
      title: "Laminar Flow Operation Theatres",
      description: "Equipped with positive pressure cleanroom airflow and HEPA filtration to maintain international surgical sterility standards and prevent post-op infections.",
    },
    {
      icon: HeartPulse,
      badge: "Critical Care",
      title: "Dedicated Trauma ICU Suite",
      description: "Round-the-clock intensive care unit with advanced multi-para monitors, mechanical ventilators, central oxygen, and continuous critical monitoring.",
    },
    {
      icon: CheckCircle2,
      badge: "TPA Helpdesk",
      title: "Cashless Mediclaim Empanelment",
      description: "Hassle-free pre-authorization support for Star Health, HDFC ERGO, ICICI Lombard, Care Health, Niva Bupa, and leading corporate health insurance policies.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-50 border border-sky-300 text-sky-700 text-xs font-black uppercase tracking-wider shadow-xs">
            Hospital Standards &amp; Safety
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Quality Clinical Infrastructure &amp; Patient Safety
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Adhering to strict clinical asepsis, emergency readiness, and transparent patient care protocols in Jabalpur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicalStandards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:shadow-md hover:border-[#008EC7] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      {item.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#008EC7] shrink-0" />
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cashless Insurance & TPA Pre-Authorization Support Desk */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#008EC7] flex items-center justify-center shrink-0 border border-sky-200">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#008ec7]">
                Insurance Helpdesk • Pre-Authorization Assistance
              </span>
              <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                Cashless Mediclaim &amp; TPA Pre-Authorization Desk
              </h4>
              <p className="text-xs text-gray-600 max-w-2xl leading-relaxed">
                We assist patients and families with seamless cashless hospitalization, policy verification, and quick claim documentation. Available Monday through Saturday at the hospital reception.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${siteConfig.phone1Raw || siteConfig.phone1}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#008EC7] hover:bg-[#0077a8] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call TPA Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
