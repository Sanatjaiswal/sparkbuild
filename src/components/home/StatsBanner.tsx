import React from "react";
import { ShieldCheck, Award, ThumbsUp } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: ShieldCheck,
      title: "24x7 Trauma & Emergency",
      desc: "Immediate casualty reception, dedicated Trauma ICU, emergency triage, and round-the-clock ALS ambulance in Jabalpur.",
    },
    {
      icon: Award,
      title: "10+ Years Surgical Excellence",
      desc: "Led by Dr. Abhishek Jain with over 15,000+ successful orthopedic surgeries, trauma rescues, and 5,000+ joint replacements.",
    },
    {
      icon: ThumbsUp,
      title: "Class 10,000 Modular OT",
      desc: "Laminar airflow and sterile HEPA filtration surgical suites ensuring ultra-clean infection control and 99%+ patient satisfaction.",
    },
  ];

  return (
    <section className="bg-[#111111] text-white py-10 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 ${idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#fff200] text-black flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
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

