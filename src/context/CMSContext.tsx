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
  lastUpdated?: string;
}

interface CMSContextType {
  data: CMSData;
  loading: boolean;
  saveData: (newData: Partial<CMSData>) => Promise<boolean>;
  updateSiteConfig: (key: string, value: any) => void;
  updateHeroSlide: (index: number, slide: Partial<HeroSlide>) => void;
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
};

const CMSContext = createContext<CMSContextType | null>(null);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CMSData>(defaultData);
  const [loading, setLoading] = useState(true);

  // Fetch initial content from server or fallback to localStorage
  useEffect(() => {
    async function loadCMS() {
      try {
        const res = await fetch("/api/content");
        if (res.ok) {
          const json = await res.json();
          setData({ ...defaultData, ...json });
          localStorage.setItem("sparkbuild_cms_cache", JSON.stringify(json));
        } else {
          const cached = localStorage.getItem("sparkbuild_cms_cache");
          if (cached) {
            setData({ ...defaultData, ...JSON.parse(cached) });
          }
        }
      } catch (err) {
        const cached = localStorage.getItem("sparkbuild_cms_cache");
        if (cached) {
          try {
            setData({ ...defaultData, ...JSON.parse(cached) });
          } catch (e) {
            console.error(e);
          }
        }
      } finally {
        setLoading(false);
      }
    }
    loadCMS();
  }, []);

  const saveData = async (newData: Partial<CMSData>): Promise<boolean> => {
    const merged = { ...data, ...newData, lastUpdated: new Date().toISOString() };
    setData(merged);
    localStorage.setItem("sparkbuild_cms_cache", JSON.stringify(merged));

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

  const updateHeroSlide = (index: number, slide: Partial<HeroSlide>) => {
    const slides = [...data.heroSlides];
    slides[index] = { ...slides[index], ...slide };
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
        updateHeroSlide,
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

