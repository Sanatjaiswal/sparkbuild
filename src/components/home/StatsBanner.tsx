import React from "react";
import { ShieldCheck, Award, ThumbsUp } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: ShieldCheck,
      title: "ISO Certified",
      desc: "We follow international quality and safety standards to ensure reliable, compliant, and high-quality construction services.",
    },
    {
      icon: Award,
      title: "9+ Years of Expertise",
      desc: "With over nine years of experience, we deliver strong planning, skilled execution, and dependable construction results.",
    },
    {
      icon: ThumbsUp,
      title: "95%+ Satisfaction Rate",
      desc: "Our focus on quality work and timely delivery ensures consistent client satisfaction and long-term trust.",
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

