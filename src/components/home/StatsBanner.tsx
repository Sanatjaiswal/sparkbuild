import React from "react";
import { HeartPulse, Award, Building2 } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: HeartPulse,
      iconColor: "text-red-600",
      title: "24x7 Trauma & Emergency",
      desc: "Immediate casualty reception, dedicated Trauma ICU, emergency triage, and round-the-clock ALS ambulance in Jabalpur.",
    },
    {
      icon: Award,
      iconColor: "text-[#046F47]",
      title: "10+ Years Surgical Excellence",
      desc: "Led by Dr. Abhishek Jain with over 15,000+ successful orthopedic surgeries, trauma rescues, and 5,000+ joint replacements.",
    },
    {
      icon: Building2,
      iconColor: "text-red-600",
      title: "Class 10,000 Modular OT",
      desc: "Laminar airflow and sterile HEPA filtration surgical suites ensuring ultra-clean infection control and 99%+ patient satisfaction.",
    },
  ];

  return (
    <section className="bg-white text-neutral-900 py-10 border-y border-neutral-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 group ${idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
              >
                <Icon className={`w-8 h-8 ${item.iconColor} stroke-[2.2] shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                <div className="space-y-1.5">
                  <h3 className="text-base font-extrabold text-neutral-900 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc.includes("Dr. Abhishek Jain") ? (
                      <>
                        {item.desc.split("Dr. Abhishek Jain")[0]}
                        <span className="text-red-600 font-black underline decoration-red-500 decoration-1">
                          Dr. Abhishek Jain
                        </span>
                        {item.desc.split("Dr. Abhishek Jain")[1]}
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

