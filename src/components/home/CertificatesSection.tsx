import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";
import { awardsData } from "@/data/siteData";

export default function CertificatesSection() {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Our Certificates
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Our Proof Of Excellence
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Distinguished industry accolades celebrating innovation, architectural mastery, structural longevity, and safety compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-black font-mono px-3 py-1 bg-[#fff200] rounded-lg">
                    {award.year}
                  </span>
                  <Award className="w-7 h-7 text-neutral-400 group-hover:text-black transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-black group-hover:text-amber-600 transition-colors">
                  {award.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-neutral-500">
                <CheckCircle className="w-3.5 h-3.5 text-black" />
                <span>Verified Recognition</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Display Banner */}
        <div className="mt-14 bg-white rounded-3xl p-8 border border-neutral-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 shrink-0">
              <Image
                src="/images/image-spark-build-certificate.png"
                alt="Sparkbuild Certificate"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Official Certification
              </span>
              <h4 className="text-xl font-bold text-black">
                ISO 9001:2015 Quality Management Certified
              </h4>
              <p className="text-xs text-gray-600 max-w-xl">
                Sparkbuild adheres to strict global engineering protocols, standardized materials testing, and occupational health & safety compliances.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="px-5 py-2.5 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider">
              ISO Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

