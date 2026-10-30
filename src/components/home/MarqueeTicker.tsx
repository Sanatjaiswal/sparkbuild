import React from "react";

export default function MarqueeTicker() {
  const items = [
    "Residential Design",
    "Commercial Design",
    "Hospitality Design",
    "Educational Architecture",
    "Healthcare & Hospital Facilities",
    "Industrial Infrastructure",
    "Township Development",
    "Turnkey Civil Execution",
  ];

  return (
    <div className="bg-[#fff200] py-3.5 overflow-hidden border-y border-yellow-400 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-black font-black text-xs sm:text-sm tracking-widest uppercase">
              {text}
            </span>
            <span className="ml-6 w-2 h-2 rounded-full bg-black inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

