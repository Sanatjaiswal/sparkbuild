"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useCMS } from "@/context/CMSContext";

interface VideoTestimonialsProps {
  onPlayVideo: (id: string) => void;
}

export default function VideoTestimonials({ onPlayVideo }: VideoTestimonialsProps) {
  const { data } = useCMS();
  const videoTestimonials = data.videoTestimonials;

  return (
    <section className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-black uppercase tracking-wider shadow-xs">
            Live Surgery &amp; Patient Recoveries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Live Surgical Procedures &amp; Success Stories
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Inside the Advanced Modular OT with{" "}
            <span className="bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded font-black border border-sky-200 shadow-xs">
              Dr. Abhishek Jain
            </span>
            {" "}– Watch authentic orthopedic surgeries, trauma resuscitations, and verified patient recovery walkthroughs.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video) => {
            const isSurgery = video.id.includes("surgery");

            return (
              <div
                key={video.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col ${
                  isSurgery
                    ? "border-2 border-red-500 shadow-red-500/10 hover:border-red-600"
                    : "border border-neutral-200"
                }`}
                onClick={() => onPlayVideo(video.youtubeId)}
              >
                {/* Thumbnail Container */}
                <div className="relative h-56 sm:h-64 w-full bg-black overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                  {/* Top Badges */}
                  {isSurgery ? (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10.5px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 z-10">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>Live OT Surgery</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider z-10">
                      Patient Recovery
                    </div>
                  )}

                  {/* Big Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ${
                        isSurgery ? "bg-red-600 group-hover:bg-red-700 ring-4 ring-white/30" : "bg-red-600 group-hover:bg-red-700"
                      }`}
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold">
                    {video.location}
                  </div>
                </div>

                {/* Title & Info */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white text-neutral-900">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#008EC7] transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 font-semibold">{video.clientName}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-sky-700 font-bold">
                    <span>{isSurgery ? "Watch Surgical Procedure" : "Watch Patient Story"}</span>
                    <span className="text-gray-400 font-normal">HD Video</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
