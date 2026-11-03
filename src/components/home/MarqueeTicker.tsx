import React from "react";

export default function MarqueeTicker() {
  const items = [
    "24x7 Emergency & Trauma Centre",
    "Dr. Abhishek Jain (Orthopedic Specialist)",
    "Advanced Life Support Ambulance",
    "Total Knee & Hip Replacement",
    "Arthroscopy & Sports Medicine",
    "Class 10,000 Modular OT",
    "Trauma Critical Care ICU",
    "Digital X-Ray & Emergency Diagnostics",
    "Emergency Line: 0761-2626123",
    "Cashless Mediclaim & Ayushman TPA",
  ];

  return (
    <div className="bg-red-600 py-3 overflow-hidden border-y border-red-700 select-none shadow-sm text-white">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6">
            {text.includes("Dr. Abhishek Jain") ? (
              <span className="bg-white text-red-700 px-3 py-1 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase shadow-md border border-white">
                ⭐ {text}
              </span>
            ) : (
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase">
                {text}
              </span>
            )}
            <span className="ml-6 w-2 h-2 rounded-full bg-sky-200 inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

