import React from "react";
import { workProcess } from "@/data/siteData";

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Our Work Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Crafting Architectural Excellence
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            A methodical 4-step framework ensuring flawless coordination, zero delays, and transparent execution from concept to key handover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {workProcess.map((item, idx) => (
            <div
              key={item.step}
              className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200 hover:border-black hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Big Step Number */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-neutral-300 group-hover:text-black transition-colors font-mono">
                    {item.step}
                  </span>
                  <span className="w-3 h-3 rounded-full bg-[#fff200] group-hover:scale-150 transition-transform"></span>
                </div>

                <h3 className="text-2xl font-black text-black tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-black transition-colors">
                  Stage {idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

