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
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Blog-1.png"
            alt="Sparkbuild Blog"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-3xl space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fff200] text-black text-xs font-black uppercase tracking-wider">
            Our Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Insights, Ideas &amp; <span className="text-[#fff200]">Building Smarter</span>
          </h1>
          <p className="text-base text-gray-300 font-normal">
            Welcome to the Sparkbuild Blog — your go-to resource for construction tips, architectural inspiration, civil engineering advice, and smart building solutions.
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

            <div className="p-8 overflow-y-auto space-y-4">
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
                <h4 className="font-bold text-sm text-black">Need Expert Structural Consulting?</h4>
                <p className="text-xs text-gray-600">
                  Our team of licensed civil engineers and architects in Jabalpur can guide your project from initial design to final execution.
                </p>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    setConsultationOpen(true);
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#fff200] hover:bg-[#e6da00] text-black font-extrabold text-xs uppercase tracking-wider"
                >
                  Book Free Consultation
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
