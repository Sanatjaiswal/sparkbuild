"use client";

import React from "react";
import { useCMS } from "@/context/CMSContext";
import { defaultMarqueeItems } from "@/data/siteData";

export default function MarqueeTicker() {
  const { data } = useCMS();
  const items =
    data.marqueeItems && data.marqueeItems.length > 0
      ? data.marqueeItems
      : defaultMarqueeItems;

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

