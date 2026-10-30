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
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Real Patient Recoveries &amp; Success Stories
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Listen to inspiring stories of patients walking pain-free post-surgery and emergency trauma recoveries under{" "}
            <span className="bg-[#fff200] text-black px-2.5 py-0.5 rounded font-black border border-black/10 shadow-xs">
              Dr. Abhishek Jain
            </span>
            .
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-200 group cursor-pointer flex flex-col"
              onClick={() => onPlayVideo(video.youtubeId)}
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 sm:h-64 w-full bg-black overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#fff200] text-black flex items-center justify-center shadow-2xl group-hover:scale-115 transition-all duration-300">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold">
                  {video.location}
                </div>
              </div>

              {/* Title & Info */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-neutral-900 text-white">
                <div>
                  <h3 className="text-base font-bold group-hover:text-[#fff200] transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{video.clientName}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-[#fff200] font-bold">
                  <span>Watch Patient Story</span>
                  <span className="text-gray-400 font-normal">HD Video</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
