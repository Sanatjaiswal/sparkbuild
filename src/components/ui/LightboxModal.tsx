"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxModalProps {
  imageSrc: string | null;
  title?: string;
  onClose: () => void;
}

export default function LightboxModal({
  imageSrc,
  title,
  onClose,
}: LightboxModalProps) {
  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-[#fff200] transition-colors"
          aria-label="Close image"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-xl overflow-hidden shadow-2xl bg-black">
          <Image
            src={imageSrc}
            alt={title || "Project Preview"}
            fill
            className="object-contain"
          />
        </div>

        {title && (
          <p className="mt-3 text-white text-center text-sm font-semibold tracking-wide">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}

