"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingConsultation from "@/components/ui/FloatingConsultation";
import { BlogPost } from "@/data/siteData";
import { useCMS } from "@/context/CMSContext";
import { ArrowRight, Calendar, User, Clock, X, Tag } from "lucide-react";

export default function BlogPage() {
  const { data } = useCMS();
  const blogPosts = data.blogPosts;
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />



      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-20 sm:py-24 relative overflow-hidden flex items-center justify-center">
        {/* Soft, balanced light overlay - dark blur reduced so hospital photos are bright & clearly visible */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/diagnostic-center.jpg"
            alt="MP Hospital Health Blog"
            fill
            priority
            className="object-cover opacity-95 scale-105"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider shadow-md">
            Health &amp; Clinical Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Bone Health, Trauma &amp; <span className="text-[#fff200]">Active Living</span>
          </h1>
          <p className="text-base text-white/95 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
            Welcome to the MP Hospital Blog — expert guidance on knee &amp; hip replacement, accidental trauma recovery, sports injuries, and joint pain prevention from{" "}
            <span className="text-[#fff200] font-black underline decoration-yellow-400 decoration-2">
              Dr. Abhishek Jain
            </span>
            .
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-neutral-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-neutral-200 transition-all duration-300 flex flex-col group"
              >
                <div
                  className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider shadow">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                    </div>

                    <h2
                      onClick={() => setSelectedPost(post)}
                      className="text-2xl font-black text-black group-hover:text-amber-600 transition-colors cursor-pointer leading-snug"
                    >
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-2 font-black text-sm text-black group-hover:text-[#e6da00] transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-400 font-medium">4 min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Read Article Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80 w-full shrink-0 bg-neutral-900">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close article"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase">
                  {selectedPost.category}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>By {selectedPost.author}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-black">
                {selectedPost.title}
              </h2>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                {selectedPost.content}
              </p>

              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 mt-6 space-y-2">
                <h4 className="font-bold text-sm text-black">Need Orthopedic or Trauma Consultation?</h4>
                <p className="text-xs text-gray-600">
                  Consult{" "}
                  <strong className="text-black font-black underline decoration-yellow-400">
                    Dr. Abhishek Jain
                  </strong>{" "}
                  and our senior medical team at MP Hospital &amp; Trauma Centre for personalized bone, joint, or trauma evaluation.
                </p>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    setConsultationOpen(true);
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-xs uppercase tracking-wider"
                >
                  Book Doctor Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingConsultation onOpenConsultation={() => setConsultationOpen(true)} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
