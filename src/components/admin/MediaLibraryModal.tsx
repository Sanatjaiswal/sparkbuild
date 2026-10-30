"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Upload, Check, Search, Image as ImageIcon, Loader2 } from "lucide-react";

interface MediaLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (imageUrl: string) => void;
  title?: string;
}

export default function MediaLibraryModal({
  isOpen,
  onClose,
  onSelectImage,
  title = "Select Image from WordPress Media Library",
}: MediaLibraryModalProps) {
  const [tab, setTab] = useState<"library" | "upload">("library");
  const [images, setImages] = useState<{ filename: string; url: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadImages();
    }
  }, [isOpen]);

  const loadImages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/upload");
      if (res.ok) {
        const data = await res.json();
        setImages(data.images || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setImages((prev) => [data, ...prev]);
        setSelectedImage(data.url);
        setTab("library");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  const filteredImages = images.filter((img) =>
    img.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[85vh] bg-[#f0f0f1] text-[#2c3338] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#c3c4c7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WordPress-like Modal Top Bar */}
        <div className="bg-white px-6 py-4 border-b border-[#dcdcde] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1d2327] text-white flex items-center justify-center font-bold text-sm">
              W
            </div>
            <h3 className="text-lg font-semibold text-[#1d2327]">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black p-1 rounded-md"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-nav Tabs */}
        <div className="bg-white px-6 border-b border-[#dcdcde] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("library")}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-all ${
                tab === "library"
                  ? "border-[#2271b1] text-[#2271b1]"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Media Library ({images.length})
            </button>
            <button
              onClick={() => setTab("upload")}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-all ${
                tab === "upload"
                  ? "border-[#2271b1] text-[#2271b1]"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Upload Files
            </button>
          </div>

          {tab === "library" && (
            <div className="relative w-64 py-2">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-4" />
              <input
                type="text"
                placeholder="Search media files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#8c8f94] rounded shadow-inner focus:outline-none focus:border-[#2271b1]"
              />
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden flex">
          {tab === "upload" ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white m-6 rounded-lg border-2 border-dashed border-[#c3c4c7] text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#2271b1] flex items-center justify-center">
                <Upload className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-[#1d2327]">Drop files anywhere to upload</h4>
                <p className="text-xs text-gray-500">or click button below to select from your device</p>
              </div>

              <div>
                <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow">
                  <Upload className="w-4 h-4" />
                  <span>{uploading ? "Uploading Image..." : "Select Files"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
              </div>
              <p className="text-[11px] text-gray-400">Maximum upload file size: 64 MB.</p>
            </div>
          ) : (
            <>
              {/* Media Grid */}
              <div className="flex-1 overflow-y-auto p-6 bg-white">
                {loading ? (
                  <div className="flex items-center justify-center h-64 gap-2 text-gray-500 text-sm">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Loading media library...</span>
                  </div>
                ) : filteredImages.length === 0 ? (
                  <div className="text-center py-20 text-gray-500 text-sm">
                    No images match your search.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {filteredImages.map((img) => {
                      const isSelected = selectedImage === img.url;
                      return (
                        <div
                          key={img.filename}
                          onClick={() => setSelectedImage(img.url)}
                          className={`relative aspect-square rounded-md overflow-hidden bg-neutral-100 border-2 cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#2271b1] ring-2 ring-[#2271b1]"
                              : "border-[#dcdcde] hover:border-gray-400"
                          }`}
                        >
                          <Image
                            src={img.url}
                            alt={img.filename}
                            fill
                            sizes="(max-width: 768px) 120px, 160px"
                            className="object-cover"
                          />
                          {isSelected && (
                            <div className="absolute top-1 right-1 w-5 h-5 bg-[#2271b1] text-white rounded-full flex items-center justify-center shadow">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Sidebar with Image Details */}
              <div className="w-72 bg-[#f0f0f1] border-l border-[#dcdcde] p-5 overflow-y-auto hidden sm:block text-xs space-y-4">
                <h4 className="font-bold uppercase tracking-wider text-gray-600">Attachment Details</h4>
                {selectedImage ? (
                  <div className="space-y-3">
                    <div className="relative aspect-video rounded-md overflow-hidden border border-[#c3c4c7] bg-white">
                      <Image
                        src={selectedImage}
                        alt="Selected"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 block">File URL:</span>
                      <p className="text-[11px] text-gray-500 font-mono break-all bg-white p-2 rounded border border-[#dcdcde] mt-1 select-all">
                        {selectedImage}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">Click an image from the library to inspect or select it.</p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Bottom Footer Actions */}
        <div className="bg-white px-6 py-3.5 border-t border-[#dcdcde] flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {selectedImage ? (
              <span>Selected: <strong>{selectedImage}</strong></span>
            ) : (
              <span>No image selected</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300"
            >
              Cancel
            </button>
            <button
              disabled={!selectedImage}
              onClick={() => {
                if (selectedImage) {
                  onSelectImage(selectedImage);
                  onClose();
                }
              }}
              className="px-6 py-2 rounded bg-[#2271b1] hover:bg-[#135e96] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider shadow"
            >
              Select Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

