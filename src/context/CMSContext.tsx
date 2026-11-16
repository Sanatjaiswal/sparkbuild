"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  siteConfig as defaultSiteConfig,
  heroSlides as defaultHeroSlides,
  servicesData as defaultServicesData,
  projectsData as defaultProjectsData,
  teamMembers as defaultTeamMembers,
  videoTestimonials as defaultVideoTestimonials,
  testimonials as defaultTestimonials,
  awardsData as defaultAwardsData,
  faqsData as defaultFaqsData,
  blogPosts as defaultBlogPosts,
  careerJobs as defaultCareerJobs,
  defaultMarqueeItems,
  HeroSlide,
  ServiceItem,
  ProjectItem,
  TeamMember,
  VideoTestimonial,
  AwardItem,
  FAQItem,
  BlogPost,
  CareerJob,
} from "@/data/siteData";

export interface CMSData {
  siteConfig: typeof defaultSiteConfig;
  heroSlides: HeroSlide[];
  servicesData: ServiceItem[];
  projectsData: ProjectItem[];
  teamMembers: TeamMember[];
  videoTestimonials: VideoTestimonial[];
  testimonials: typeof defaultTestimonials;
  awardsData: AwardItem[];
  faqsData: FAQItem[];
  blogPosts: BlogPost[];
  careerJobs: CareerJob[];
  marqueeItems: string[];
  lastUpdated?: string;
}

interface CMSContextType {
  data: CMSData;
  loading: boolean;
  saveData: (newData: Partial<CMSData>) => Promise<boolean>;
  updateSiteConfig: (key: string, value: any) => void;
  addHeroSlide: (slide: HeroSlide) => void;
  updateHeroSlide: (index: number, slide: Partial<HeroSlide>) => void;
  deleteHeroSlide: (index: number) => void;
  moveHeroSlide: (fromIndex: number, toIndex: number) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  addProject: (project: ProjectItem) => void;
  updateProject: (id: string, project: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (index: number, member: Partial<TeamMember>) => void;
  deleteTeamMember: (index: number) => void;
  updateVideo: (id: string, video: Partial<VideoTestimonial>) => void;
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  updateFAQ: (index: number, faq: Partial<FAQItem>) => void;
  addFAQ: (faq: FAQItem) => void;
  deleteFAQ: (index: number) => void;
  moveFAQ: (fromIndex: number, toIndex: number) => void;
  addMarqueeItem: (item: string) => void;
  updateMarqueeItem: (index: number, text: string) => void;
  deleteMarqueeItem: (index: number) => void;
  moveMarqueeItem: (fromIndex: number, toIndex: number) => void;
  resetToDefaults: () => Promise<void>;
}

const defaultData: CMSData = {
  siteConfig: defaultSiteConfig,
  heroSlides: defaultHeroSlides,
  servicesData: defaultServicesData,
  projectsData: defaultProjectsData,
  teamMembers: defaultTeamMembers,
  videoTestimonials: defaultVideoTestimonials,
  testimonials: defaultTestimonials,
  awardsData: defaultAwardsData,
  faqsData: defaultFaqsData,
  blogPosts: defaultBlogPosts,
  careerJobs: defaultCareerJobs,
  marqueeItems: defaultMarqueeItems,
};

function sanitizeCMSData(cms: any): any {
  if (!cms) return cms;
  try {
    const str = JSON.stringify(cms);
    const cleanedStr = str
      .replace(/Advanced Modular/g, "Well-Equipped Modular")
      .replace(/advanced modular/g, "well-equipped modular")
      .replace(/Advanced/g, "Well-Equipped")
      .replace(/advanced/g, "well-equipped");
    return JSON.parse(cleanedStr);
  } catch {
    return cms;
  }
}

const CMSContext = createContext<CMSContextType | null>(null);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CMSData>(sanitizeCMSData(defaultData));
  const [loading, setLoading] = useState(true);

  // Fetch initial content from server or fallback to localStorage
  useEffect(() => {
    async function loadCMS() {
      // 1. Immediately hydrate from localStorage if available
      const cached = typeof window !== "undefined" ? localStorage.getItem("mphospital_cms_cache") : null;
      let localData: CMSData | null = null;
      if (cached) {
        try {
          localData = sanitizeCMSData(JSON.parse(cached));
          if (localData) {
            setData((prev) => ({ ...prev, ...localData }));
          }
        } catch (e) {
          console.error("Failed to parse cached CMS:", e);
        }
      }

      // 2. Fetch latest from server
      try {
        const res = await fetch("/api/content", { cache: "no-store" });
        if (res.ok) {
          const json = sanitizeCMSData(await res.json());
          // If local edits are newer (e.g. recently deleted or modified a slide), prioritize local!
          if (localData?.lastUpdated && json.lastUpdated) {
            const localTime = new Date(localData.lastUpdated).getTime();
            const serverTime = new Date(json.lastUpdated).getTime();
            if (localTime > serverTime) {
              setLoading(false);
              return;
            }
          }
          setData({ ...defaultData, ...json });
          localStorage.setItem("mphospital_cms_cache", JSON.stringify(json));
        }
      } catch (err) {
        console.error("Error loading server CMS:", err);
      } finally {
        setLoading(false);
      }
    }
    loadCMS();
  }, []);

  const saveData = async (newData: Partial<CMSData>): Promise<boolean> => {
    const merged = { ...data, ...newData, lastUpdated: new Date().toISOString() };
    setData(merged);
    localStorage.setItem("mphospital_cms_cache", JSON.stringify(merged));

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(merged),
      });
      return res.ok;
    } catch (err) {
      console.error("Failed to save to server API:", err);
      return false;
    }
  };

  const updateSiteConfig = (key: string, value: any) => {
    const updated = {
      ...data.siteConfig,
      [key]: value,
    };
    saveData({ siteConfig: updated });
  };

  const addHeroSlide = (slide: HeroSlide) => {
    const slides = [...(data.heroSlides || defaultHeroSlides)];
    saveData({ heroSlides: [...slides, slide] });
  };

  const updateHeroSlide = (index: number, slide: Partial<HeroSlide>) => {
    const slides = [...(data.heroSlides || defaultHeroSlides)];
    slides[index] = { ...(slides[index] || { id: Date.now() }), ...slide };
    saveData({ heroSlides: slides });
  };

  const deleteHeroSlide = (index: number) => {
    const slides = [...(data.heroSlides || defaultHeroSlides)];
    const updated = slides.filter((_, idx) => idx !== index);
    saveData({ heroSlides: updated });
  };

  const moveHeroSlide = (fromIndex: number, toIndex: number) => {
    const slides = [...(data.heroSlides || defaultHeroSlides)];
    if (toIndex < 0 || toIndex >= slides.length) return;
    const [moved] = slides.splice(fromIndex, 1);
    slides.splice(toIndex, 0, moved);
    saveData({ heroSlides: slides });
  };

  const updateService = (id: string, service: Partial<ServiceItem>) => {
    const services = data.servicesData.map((s) => (s.id === id ? { ...s, ...service } : s));
    saveData({ servicesData: services });
  };

  const addProject = (project: ProjectItem) => {
    saveData({ projectsData: [project, ...data.projectsData] });
  };

  const updateProject = (id: string, project: Partial<ProjectItem>) => {
    const updated = data.projectsData.map((p) => (p.id === id ? { ...p, ...project } : p));
    saveData({ projectsData: updated });
  };

  const deleteProject = (id: string) => {
    saveData({ projectsData: data.projectsData.filter((p) => p.id !== id) });
  };

  const addTeamMember = (member: TeamMember) => {
    saveData({ teamMembers: [...data.teamMembers, member] });
  };

  const updateTeamMember = (index: number, member: Partial<TeamMember>) => {
    const updated = [...data.teamMembers];
    updated[index] = { ...updated[index], ...member };
    saveData({ teamMembers: updated });
  };

  const deleteTeamMember = (index: number) => {
    saveData({ teamMembers: data.teamMembers.filter((_, i) => i !== index) });
  };

  const updateVideo = (id: string, video: Partial<VideoTestimonial>) => {
    const updated = data.videoTestimonials.map((v) => (v.id === id ? { ...v, ...video } : v));
    saveData({ videoTestimonials: updated });
  };

  const addBlogPost = (post: BlogPost) => {
    saveData({ blogPosts: [post, ...data.blogPosts] });
  };

  const updateBlogPost = (id: string, post: Partial<BlogPost>) => {
    const updated = data.blogPosts.map((b) => (b.id === id ? { ...b, ...post } : b));
    saveData({ blogPosts: updated });
  };

  const deleteBlogPost = (id: string) => {
    saveData({ blogPosts: data.blogPosts.filter((b) => b.id !== id) });
  };

  const updateFAQ = (index: number, faq: Partial<FAQItem>) => {
    const updated = [...data.faqsData];
    updated[index] = { ...updated[index], ...faq };
    saveData({ faqsData: updated });
  };

  const addFAQ = (faq: FAQItem) => {
    saveData({ faqsData: [...data.faqsData, faq] });
  };

  const deleteFAQ = (index: number) => {
    saveData({ faqsData: data.faqsData.filter((_, i) => i !== index) });
  };

  const moveFAQ = (fromIndex: number, toIndex: number) => {
    const list = [...(data.faqsData || [])];
    if (fromIndex < 0 || fromIndex >= list.length || toIndex < 0 || toIndex >= list.length) return;
    const [moved] = list.splice(fromIndex, 1);
    list.splice(toIndex, 0, moved);
    saveData({ faqsData: list });
  };

  const addMarqueeItem = (item: string) => {
    const list = [...(data.marqueeItems || defaultMarqueeItems), item];
    saveData({ marqueeItems: list });
  };

  const updateMarqueeItem = (index: number, text: string) => {
    const list = [...(data.marqueeItems || defaultMarqueeItems)];
    list[index] = text;
    saveData({ marqueeItems: list });
  };

  const deleteMarqueeItem = (index: number) => {
    const list = (data.marqueeItems || defaultMarqueeItems).filter((_, i) => i !== index);
    saveData({ marqueeItems: list });
  };

  const moveMarqueeItem = (fromIndex: number, toIndex: number) => {
    const list = [...(data.marqueeItems || defaultMarqueeItems)];
    if (fromIndex < 0 || fromIndex >= list.length || toIndex < 0 || toIndex >= list.length) return;
    const [moved] = list.splice(fromIndex, 1);
    list.splice(toIndex, 0, moved);
    saveData({ marqueeItems: list });
  };

  const resetToDefaults = async () => {
    await saveData(defaultData);
  };

  return (
    <CMSContext.Provider
      value={{
        data,
        loading,
        saveData,
        updateSiteConfig,
        addHeroSlide,
        updateHeroSlide,
        deleteHeroSlide,
        moveHeroSlide,
        updateService,
        addProject,
        updateProject,
        deleteProject,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        updateVideo,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        updateFAQ,
        addFAQ,
        deleteFAQ,
        moveFAQ,
        addMarqueeItem,
        updateMarqueeItem,
        deleteMarqueeItem,
        moveMarqueeItem,
        resetToDefaults,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
}

