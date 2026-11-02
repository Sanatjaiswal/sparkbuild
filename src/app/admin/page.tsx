"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCMS } from "@/context/CMSContext";
import MediaLibraryModal from "@/components/admin/MediaLibraryModal";
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Building,
  Wrench,
  Users,
  HelpCircle,
  Settings,
  Mail,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle,
  ExternalLink,
  Search,
  Upload,
  RefreshCw,
  Phone,
  Calendar,
  AlertCircle,
  Eye,
  Lock,
  User,
  LogOut,
} from "lucide-react";
import { ProjectItem, BlogPost, TeamMember, ServiceItem } from "@/data/siteData";

export default function WordPressAdmin() {
  const {
    data,
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
  } = useCMS();

  // Active Sidebar Section
  const [activeMenu, setActiveMenu] = useState<
    "dashboard" | "pages" | "media" | "projects" | "services" | "team" | "blog" | "faqs" | "settings" | "leads"
  >("dashboard");

  // Media Library Modal state
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [mediaTargetCallback, setMediaTargetCallback] = useState<(url: string) => void>(() => () => {});

  // Notification Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const openMediaPicker = (callback: (url: string) => void) => {
    setMediaTargetCallback(() => callback);
    setMediaModalOpen(true);
  };

  // Temporary edit states
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editingMember, setEditingMember] = useState<{ index: number; member: TeamMember } | null>(null);

  // New Project Modal State
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState<ProjectItem>({
    id: `project-${Date.now()}`,
    title: "",
    category: "mega",
    type: "Healthcare",
    status: "Completed",
    specs: "",
    highlights: ["24x7 Emergency Care", "Modern Infrastructure"],
    image: "/images/modular-ot.jpg",
  });

  // New Post Modal State
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [newPost, setNewPost] = useState<BlogPost>({
    id: `${Date.now()}`,
    slug: "",
    title: "",
    category: "Orthopedics & Health",
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    author: "Dr. Abhishek Jain",
    image: "/images/modular-ot.jpg",
    excerpt: "",
    content: "",
  });

  // New Doctor Modal State
  const [isAddingDoctor, setIsAddingDoctor] = useState(false);
  const [newDoctor, setNewDoctor] = useState<TeamMember>({
    name: "",
    role: "Consultant Specialist",
    specialty: "Orthopedics & Joint Replacement",
    qualifications: "MBBS, M.S. (Ortho)",
    experience: "8+ Years",
    image: "/images/dr-abhishek-jain.jpg",
    bio: "Senior consultant specialist at MP Hospital & Trauma Centre, Jabalpur.",
  });

  // Admin Authentication & Login/Logout State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");

  // Real-time leads state
  const [patientInquiries, setPatientInquiries] = useState<any[]>([]);
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [jobApplications, setJobApplications] = useState<any[]>([]);

  const loadLeads = () => {
    if (typeof window !== "undefined") {
      try {
        setPatientInquiries(JSON.parse(localStorage.getItem("mphospital_inquiries") || "[]"));
        setContactMessages(JSON.parse(localStorage.getItem("mphospital_messages") || "[]"));
        setJobApplications(JSON.parse(localStorage.getItem("mphospital_applications") || "[]"));
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    const authSession = typeof window !== "undefined" ? sessionStorage.getItem("mphospital_admin_auth") : null;
    const authLocal = typeof window !== "undefined" ? localStorage.getItem("mphospital_admin_auth") : null;
    if (authSession === "true" || authLocal === "true") {
      setIsAuthenticated(true);
    }
    setIsAuthChecking(false);
  }, []);

  useEffect(() => {
    loadLeads();
  }, [activeMenu]);

  const deleteInquiry = (id: string) => {
    const updated = patientInquiries.filter((item) => item.id !== id);
    setPatientInquiries(updated);
    localStorage.setItem("mphospital_inquiries", JSON.stringify(updated));
    showToast("Inquiry removed.");
  };

  const deleteMessage = (id: string) => {
    const updated = contactMessages.filter((item) => item.id !== id);
    setContactMessages(updated);
    localStorage.setItem("mphospital_messages", JSON.stringify(updated));
    showToast("Message removed.");
  };

  const deleteApplication = (index: number) => {
    const updated = jobApplications.filter((_, idx) => idx !== index);
    setJobApplications(updated);
    localStorage.setItem("mphospital_applications", JSON.stringify(updated));
    showToast("Application removed.");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    const validPasswords = ["mphospital@2025", "admin123", "mphospital123", "admin"];
    const validUsernames = ["admin", "mphospital", "drabhishek"];

    const user = usernameInput.trim().toLowerCase();
    const pass = passwordInput.trim();

    if (validUsernames.includes(user) && validPasswords.includes(pass)) {
      sessionStorage.setItem("mphospital_admin_auth", "true");
      localStorage.setItem("mphospital_admin_auth", "true");
      setIsAuthenticated(true);
      showToast("Welcome to MP Hospital Admin Portal!");
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("mphospital_admin_auth");
    localStorage.removeItem("mphospital_admin_auth");
    setIsAuthenticated(false);
    setUsernameInput("");
    setPasswordInput("");
    setLoginError("");
    showToast("Logged out successfully.");
  };

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-[#f0f0f1] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#2271b1] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1d2327] via-neutral-900 to-[#111111] text-white flex flex-col items-center justify-center p-4 select-none">
        <div className="w-full max-w-sm bg-white text-neutral-900 rounded-2xl shadow-2xl p-8 border border-neutral-200">
          <div className="text-center space-y-2 mb-6">
            <div className="flex justify-center mb-2">
              <Image
                src="/images/mp-hospital-registered-logo.png"
                alt="MP Hospital & Trauma Centre"
                width={88}
                height={77}
                className="h-16 w-auto object-contain"
                priority
              />
            </div>
            <div className="pt-2">
              <h2 className="text-lg font-black text-neutral-900">Hospital Admin Portal</h2>
              <p className="text-xs text-neutral-500">Sign in to manage website content, doctors &amp; settings</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#046F47] focus:ring-1 focus:ring-[#046F47]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#046F47] focus:ring-1 focus:ring-[#046F47]"
                />
              </div>
              <p className="text-[10px] text-neutral-400 mt-1">Default credentials: admin / admin123</p>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#046F47] hover:bg-[#035939] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer mt-2"
            >
              Sign In to Admin
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-neutral-100 text-center">
            <Link
              href="/"
              className="text-xs text-neutral-500 hover:text-red-600 font-semibold transition-colors"
            >
              ← Back to MPHospital.in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f0f1] text-[#2c3338] flex flex-col font-sans select-none">
      {/* WordPress Top Admin Bar */}
      <header className="bg-[#1d2327] text-white h-8 px-4 flex items-center justify-between z-40 text-xs shrink-0 border-b border-[#2c3338]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#2271b1] text-white font-black text-xs flex items-center justify-center">
              W
            </span>
            <span className="font-semibold text-gray-200">
              {data.siteConfig.fullName || "MP Hospital & Trauma Centre"}
            </span>
          </div>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1 text-gray-300 hover:text-[#fff200] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Visit Site</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              saveData(data);
              showToast("Changes published live to website!");
            }}
            className="bg-[#2271b1] hover:bg-[#135e96] text-white px-3 py-0.5 rounded font-bold text-[11px] flex items-center gap-1 shadow"
          >
            <Save className="w-3 h-3" />
            <span>Publish Changes</span>
          </button>
          <span className="text-gray-300">Howdy, <strong className="text-white">Admin</strong></span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs text-red-400 hover:text-white hover:bg-red-600/80 px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 transition-all cursor-pointer font-bold shadow-xs"
            title="Log out of Admin Panel"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </header>

      {/* Main Admin Wrapper */}
      <div className="flex flex-1 overflow-hidden">
        {/* WordPress Left Navigation Sidebar */}
        <aside className="w-56 bg-[#1d2327] text-[#c3c4c7] flex flex-col shrink-0 overflow-y-auto">
          <div className="p-4 border-b border-[#2c3338] flex items-center gap-2.5">
            <div className="p-1 bg-white rounded-lg shrink-0">
              <Image
                src="/images/mp-hospital-registered-logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              MP Hospital CMS
            </span>
          </div>

          <nav className="py-2 flex-1 text-xs space-y-0.5">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "pages", label: "Pages & Hero", icon: FileText },
              { id: "media", label: "Media Library", icon: ImageIcon },
              { id: "projects", label: "Hospital Facilities", icon: Building },
              { id: "services", label: "Services", icon: Wrench },
              { id: "team", label: "Our Team", icon: Users },
              { id: "blog", label: "Blog Posts", icon: Edit },
              { id: "faqs", label: "FAQ's", icon: HelpCircle },
              { id: "settings", label: "Site Settings", icon: Settings },
              { id: "leads", label: "Inquiries & Leads", icon: Mail },
            ].map((menu) => {
              const Icon = menu.icon;
              const isActive = activeMenu === menu.id;
              return (
                <button
                  key={menu.id}
                  onClick={() => setActiveMenu(menu.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors font-medium ${
                    isActive
                      ? "bg-[#2271b1] text-white font-bold"
                      : "hover:bg-[#13171a] hover:text-[#fff200]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{menu.label}</span>
                </button>
              );
            })}
          </nav>

          <button
            onClick={handleLogout}
            className="w-full p-3.5 border-t border-[#2c3338] text-red-400 hover:text-white hover:bg-red-950/40 flex items-center gap-2.5 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-red-400" />
            <span>Log Out Admin</span>
          </button>
          <div className="p-3 border-t border-[#2c3338] text-[10px] text-gray-500 text-center">
            MP Hospital CMS v2.0
          </div>
        </aside>

        {/* Admin Content Canvas */}
        <main className="flex-1 bg-[#f0f0f1] overflow-y-auto p-6 lg:p-8">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed top-12 right-6 z-50 bg-[#1d2327] text-white px-5 py-3 rounded-lg shadow-2xl border-l-4 border-[#fff200] flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">{toastMessage}</span>
            </div>
          )}

          {/* ================= SECTION 1: DASHBOARD ================= */}
          {activeMenu === "dashboard" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Dashboard</h1>
                  <p className="text-xs text-gray-500">Welcome to your MP Hospital &amp; Trauma Centre Administration.</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/"
                    target="_blank"
                    className="px-4 py-2 bg-white border border-[#c3c4c7] hover:border-black text-xs font-bold text-gray-700 rounded shadow-sm flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Live Website</span>
                  </Link>
                  <button
                    onClick={() => {
                      saveData(data);
                      showToast("All site data saved successfully!");
                    }}
                    className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded shadow flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save All</span>
                  </button>
                </div>
              </div>

              {/* WordPress Welcome Box */}
              <div className="bg-white p-6 rounded-lg border border-[#c3c4c7] shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-[#1d2327]">
                  Welcome to MP Hospital Content Management!
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We’ve assembled shortcuts to help you change hero slides, edit project images, update text descriptions, and publish blog articles in real-time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#f0f0f1]">
                  <div>
                    <h3 className="font-bold text-sm text-[#1d2327] mb-2">Get Started</h3>
                    <button
                      onClick={() => setActiveMenu("pages")}
                      className="px-4 py-2 rounded bg-[#2271b1] text-white font-bold text-xs uppercase"
                    >
                      Customize Homepage
                    </button>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1d2327] mb-2">Next Steps</h3>
                    <ul className="space-y-1 text-xs text-[#2271b1]">
                      <li>
                        <button onClick={() => setActiveMenu("projects")} className="hover:underline">
                          • Add or edit portfolio projects ({data.projectsData.length})
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setActiveMenu("media")} className="hover:underline">
                          • Browse Media Library
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setActiveMenu("blog")} className="hover:underline">
                          • Write a new blog post
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1d2327] mb-2">More Actions</h3>
                    <ul className="space-y-1 text-xs text-[#2271b1]">
                      <li>
                        <button onClick={() => setActiveMenu("settings")} className="hover:underline">
                          • Change phone number & office address
                        </button>
                      </li>
                      <li>
                        <button onClick={() => setActiveMenu("team")} className="hover:underline">
                          • Update doctors &amp; medical team bios
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-lg border border-[#c3c4c7] shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase">Active Projects</span>
                  <div className="text-3xl font-black text-[#1d2327] mt-1">{data.projectsData.length}</div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-[#c3c4c7] shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase">Core Services</span>
                  <div className="text-3xl font-black text-[#1d2327] mt-1">{data.servicesData.length}</div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-[#c3c4c7] shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase">Team Members</span>
                  <div className="text-3xl font-black text-[#1d2327] mt-1">{data.teamMembers.length}</div>
                </div>
                <div className="bg-white p-5 rounded-lg border border-[#c3c4c7] shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase">Published Posts</span>
                  <div className="text-3xl font-black text-[#1d2327] mt-1">{data.blogPosts.length}</div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SECTION 2: PAGES & HERO SLIDER ================= */}
          {activeMenu === "pages" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Pages &amp; Homepage Hero Editor</h1>
                  <p className="text-xs text-gray-500">Edit titles, numbers, descriptions, and background images of the hero carousel.</p>
                </div>
              </div>

              <div className="space-y-6">
                {data.heroSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className="bg-white p-6 rounded-lg border border-[#c3c4c7] shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-[#f0f0f1] pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2271b1]">
                        Hero Slide #{idx + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Image Preview & Change */}
                      <div className="md:col-span-4 space-y-2">
                        <div className="relative h-44 rounded-lg overflow-hidden border border-[#c3c4c7] bg-black">
                          <Image
                            src={slide.bgImage}
                            alt={slide.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <button
                          onClick={() =>
                            openMediaPicker((newUrl) => {
                              updateHeroSlide(idx, { bgImage: newUrl });
                              showToast(`Updated Slide #${idx + 1} image!`);
                            })
                          }
                          className="w-full py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-[#2271b1] text-xs font-bold rounded flex items-center justify-center gap-1.5"
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>Change Background Image</span>
                        </button>
                      </div>

                      {/* Text Fields */}
                      <div className="md:col-span-8 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                              Highlight Number
                            </label>
                            <input
                              type="text"
                              value={slide.highlightNumber}
                              onChange={(e) => updateHeroSlide(idx, { highlightNumber: e.target.value })}
                              className="w-full p-2 text-sm border border-[#8c8f94] rounded focus:border-[#2271b1]"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                              Headline Title
                            </label>
                            <input
                              type="text"
                              value={slide.title}
                              onChange={(e) => updateHeroSlide(idx, { title: e.target.value })}
                              className="w-full p-2 text-sm border border-[#8c8f94] rounded focus:border-[#2271b1]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                            Description Subtitle
                          </label>
                          <textarea
                            rows={2}
                            value={slide.description}
                            onChange={(e) => updateHeroSlide(idx, { description: e.target.value })}
                            className="w-full p-2 text-sm border border-[#8c8f94] rounded focus:border-[#2271b1]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= SECTION 3: MEDIA LIBRARY ================= */}
          {activeMenu === "media" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Media Library</h1>
                  <p className="text-xs text-gray-500">Upload new assets and manage all photos used across the website.</p>
                </div>
                <button
                  onClick={() => openMediaPicker(() => {})}
                  className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded shadow flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload New Media</span>
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#c3c4c7] shadow-sm">
                <p className="text-sm text-gray-600 mb-4">
                  Click the button below to browse all site images, upload pictures from your computer, or copy their public URLs.
                </p>
                <button
                  onClick={() => openMediaPicker(() => {})}
                  className="px-6 py-3 rounded bg-[#1d2327] hover:bg-[#2271b1] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Open Hospital Media Library
                </button>
              </div>
            </div>
          )}

          {/* ================= SECTION 4: PROJECTS / PORTFOLIO ================= */}
          {activeMenu === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Hospital Facilities &amp; Infrastructure</h1>
                  <p className="text-xs text-gray-500">Add, edit titles, change photos, and categorize showcase facilities and hospital wings.</p>
                </div>
                <button
                  onClick={() => setIsAddingProject(true)}
                  className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded shadow flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Facility</span>
                </button>
              </div>

              {/* Add New Project Modal / Form */}
              {isAddingProject && (
                <div className="bg-white p-6 rounded-lg border-2 border-[#2271b1] shadow-md space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h3 className="font-bold text-base text-[#1d2327]">Add New Project</h3>
                    <button onClick={() => setIsAddingProject(false)} className="text-gray-400 hover:text-black">
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Project Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Jabalpur Hospital & Diagnostics"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        className="w-full p-2 text-sm border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Category</label>
                      <select
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                        className="w-full p-2 text-sm border rounded bg-white"
                      >
                        <option value="mega">Modular OT &amp; Surgical</option>
                        <option value="domestic">Emergency &amp; Trauma ICU</option>
                        <option value="facade">Diagnostics &amp; Fleet</option>
                        <option value="interior">Patient Rooms &amp; Rehab</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Type</label>
                      <select
                        value={newProject.type}
                        onChange={(e) => setNewProject({ ...newProject, type: e.target.value as any })}
                        className="w-full p-2 text-sm border rounded bg-white"
                      >
                        <option value="Healthcare">Healthcare Wing</option>
                        <option value="Institutional">ICU / Emergency Unit</option>
                        <option value="Commercial">Outpatient Clinic (OPD)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Status</label>
                      <select
                        value={newProject.status}
                        onChange={(e) => setNewProject({ ...newProject, status: e.target.value as any })}
                        className="w-full p-2 text-sm border rounded bg-white"
                      >
                        <option value="Completed">Completed</option>
                        <option value="Upcoming">Upcoming</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Specifications &amp; Details</label>
                      <textarea
                        rows={2}
                        placeholder="Square footage, structural features, timeline..."
                        value={newProject.specs}
                        onChange={(e) => setNewProject({ ...newProject, specs: e.target.value })}
                        className="w-full p-2 text-sm border rounded"
                      />
                    </div>

                    <div className="md:col-span-2 flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded border bg-black overflow-hidden shrink-0">
                        <Image src={newProject.image} alt="Preview" fill className="object-cover" />
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          openMediaPicker((url) => setNewProject({ ...newProject, image: url }))
                        }
                        className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 border text-xs font-bold text-[#2271b1]"
                      >
                        Choose Project Image
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      onClick={() => {
                        if (newProject.title) {
                          addProject(newProject);
                          setIsAddingProject(false);
                          showToast("Project added successfully!");
                        }
                      }}
                      className="px-6 py-2 rounded bg-[#2271b1] text-white text-xs font-bold uppercase"
                    >
                      Save &amp; Publish Project
                    </button>
                  </div>
                </div>
              )}

              {/* Projects Table */}
              <div className="bg-white rounded-lg border border-[#c3c4c7] shadow-sm overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#f6f7f7] border-b border-[#dcdcde] text-gray-700 uppercase">
                      <th className="p-3 w-16">Image</th>
                      <th className="p-3">Title</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f0f0f1]">
                    {data.projectsData.map((project) => (
                      <tr key={project.id} className="hover:bg-[#f6f7f7] transition-colors">
                        <td className="p-3">
                          <div
                            onClick={() =>
                              openMediaPicker((url) => {
                                updateProject(project.id, { image: url });
                                showToast("Updated project image!");
                              })
                            }
                            className="relative w-12 h-12 rounded overflow-hidden border cursor-pointer group shrink-0"
                            title="Click to change image"
                          >
                            <Image src={project.image} alt={project.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white">
                              <ImageIcon className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        </td>

                        <td className="p-3 font-semibold text-gray-900">
                          {editingProject?.id === project.id ? (
                            <input
                              type="text"
                              value={editingProject.title}
                              onChange={(e) =>
                                setEditingProject({ ...editingProject, title: e.target.value })
                              }
                              className="p-1 border rounded w-full text-xs"
                            />
                          ) : (
                            <div>
                              <span className="font-bold text-sm text-[#1d2327]">{project.title}</span>
                              <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{project.specs}</p>
                            </div>
                          )}
                        </td>

                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-[#2271b1] font-bold uppercase text-[10px]">
                            {project.category}
                          </span>
                        </td>

                        <td className="p-3 font-medium text-gray-600">{project.type}</td>

                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-green-50 text-green-700 font-bold uppercase text-[10px]">
                            {project.status}
                          </span>
                        </td>

                        <td className="p-3 text-right space-x-2">
                          <button
                            onClick={() =>
                              openMediaPicker((url) => {
                                updateProject(project.id, { image: url });
                                showToast("Updated image!");
                              })
                            }
                            className="text-[#2271b1] hover:underline text-xs"
                          >
                            Change Photo
                          </button>
                          <button
                            onClick={() => {
                              if (confirm("Are you sure you want to delete this project?")) {
                                deleteProject(project.id);
                                showToast("Project deleted.");
                              }
                            }}
                            className="text-red-600 hover:underline text-xs"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= SECTION 5: SERVICES ================= */}
          {activeMenu === "services" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Services Manager</h1>
                  <p className="text-xs text-gray-500">Edit service titles, bullet points, and showcase images.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.servicesData.map((svc) => (
                  <div
                    key={svc.id}
                    className="bg-white p-6 rounded-lg border border-[#c3c4c7] shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between border-b pb-2">
                      <h3 className="font-bold text-base text-[#1d2327]">{svc.title}</h3>
                      <button
                        onClick={() =>
                          openMediaPicker((newImg) => {
                            updateService(svc.id, { image: newImg });
                            showToast("Updated service image!");
                          })
                        }
                        className="text-xs font-bold text-[#2271b1] hover:underline"
                      >
                        Change Image
                      </button>
                    </div>

                    <div className="relative h-44 rounded-lg overflow-hidden border bg-neutral-900">
                      <Image src={svc.image} alt={svc.title} fill className="object-cover" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Service Title
                      </label>
                      <input
                        type="text"
                        value={svc.title}
                        onChange={(e) => updateService(svc.id, { title: e.target.value })}
                        className="w-full p-2 text-sm border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                        Service Items / Offerings (One per line)
                      </label>
                      <textarea
                        rows={4}
                        value={svc.items.join("\n")}
                        onChange={(e) =>
                          updateService(svc.id, { items: e.target.value.split("\n").filter(Boolean) })
                        }
                        className="w-full p-2 text-xs border rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= SECTION 6: TEAM ================= */}
          {activeMenu === "team" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Doctors &amp; Clinical Team Manager</h1>
                  <p className="text-xs text-gray-500">Edit Medical Director info, orthopedic surgeons, photos, specialties, and clinical qualifications.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAddingDoctor(true)}
                    className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Consultant</span>
                  </button>
                  <button
                    onClick={() => {
                      saveData(data);
                      showToast("All doctor profiles saved live!");
                    }}
                    className="px-4 py-2 bg-[#046F47] hover:bg-[#035939] text-white text-xs font-bold rounded shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save All</span>
                  </button>
                </div>
              </div>

              {/* Add New Doctor Form */}
              {isAddingDoctor && (
                <div className="bg-white p-6 rounded-lg border-2 border-[#2271b1] shadow-md space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between border-b pb-3">
                    <h3 className="font-bold text-sm text-[#1d2327]">Add New Consultant Profile</h3>
                    <button
                      onClick={() => setIsAddingDoctor(false)}
                      className="text-xs text-gray-500 hover:text-black font-bold"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Doctor Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Ramesh Patel"
                        value={newDoctor.name}
                        onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                        className="w-full p-2 text-sm border rounded font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Role / Designation</label>
                      <input
                        type="text"
                        placeholder="e.g. Senior Consultant Orthopedic Surgeon"
                        value={newDoctor.role}
                        onChange={(e) => setNewDoctor({ ...newDoctor, role: e.target.value })}
                        className="w-full p-2 text-sm border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Clinical Specialty</label>
                      <input
                        type="text"
                        placeholder="e.g. Spine Surgery & Joint Reconstruction"
                        value={newDoctor.specialty || ""}
                        onChange={(e) => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
                        className="w-full p-2 text-sm border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Medical Qualifications</label>
                      <input
                        type="text"
                        placeholder="e.g. MBBS, M.S. (Ortho)"
                        value={newDoctor.qualifications || ""}
                        onChange={(e) => setNewDoctor({ ...newDoctor, qualifications: e.target.value })}
                        className="w-full p-2 text-sm border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Clinical Experience</label>
                      <input
                        type="text"
                        placeholder="e.g. 10+ Years"
                        value={newDoctor.experience || ""}
                        onChange={(e) => setNewDoctor({ ...newDoctor, experience: e.target.value })}
                        className="w-full p-2 text-sm border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Doctor Photo URL</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newDoctor.image}
                          onChange={(e) => setNewDoctor({ ...newDoctor, image: e.target.value })}
                          className="w-full p-2 text-xs border rounded"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            openMediaPicker((url) => {
                              setNewDoctor({ ...newDoctor, image: url });
                            })
                          }
                          className="px-3 py-2 bg-gray-100 border text-xs font-bold rounded whitespace-nowrap"
                        >
                          Choose
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Professional Bio / Overview</label>
                      <textarea
                        rows={2}
                        value={newDoctor.bio || ""}
                        onChange={(e) => setNewDoctor({ ...newDoctor, bio: e.target.value })}
                        className="w-full p-2 text-xs border rounded"
                        placeholder="Brief summary of clinical expertise and hospital department..."
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t flex justify-end gap-2">
                    <button
                      onClick={() => {
                        if (newDoctor.name.trim()) {
                          addTeamMember(newDoctor);
                          setIsAddingDoctor(false);
                          showToast(`Added ${newDoctor.name} to team!`);
                        }
                      }}
                      className="px-6 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded shadow uppercase tracking-wide cursor-pointer"
                    >
                      Save New Consultant
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-lg border border-[#c3c4c7] shadow-sm space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="relative h-48 rounded-lg overflow-hidden border bg-black">
                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                        <button
                          onClick={() =>
                            openMediaPicker((url) => {
                              updateTeamMember(idx, { image: url });
                              showToast(`Updated photo for ${member.name}!`);
                            })
                          }
                          className="absolute bottom-2 right-2 px-3 py-1 bg-black/80 hover:bg-black text-white text-[11px] font-bold rounded shadow cursor-pointer"
                        >
                          Change Photo
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase">Full Name</label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => updateTeamMember(idx, { name: e.target.value })}
                          className="w-full p-1.5 text-sm border rounded font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase">Role / Title</label>
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => updateTeamMember(idx, { role: e.target.value })}
                          className="w-full p-1.5 text-xs border rounded"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase">Specialty</label>
                          <input
                            type="text"
                            value={member.specialty || ""}
                            onChange={(e) => updateTeamMember(idx, { specialty: e.target.value })}
                            className="w-full p-1.5 text-xs border rounded"
                            placeholder="Specialty"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase">Qualifications</label>
                          <input
                            type="text"
                            value={member.qualifications || ""}
                            onChange={(e) => updateTeamMember(idx, { qualifications: e.target.value })}
                            className="w-full p-1.5 text-xs border rounded"
                            placeholder="MBBS, MS"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase">Experience</label>
                        <input
                          type="text"
                          value={member.experience || ""}
                          onChange={(e) => updateTeamMember(idx, { experience: e.target.value })}
                          className="w-full p-1.5 text-xs border rounded"
                          placeholder="e.g. 10+ Years"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase">Bio / Description</label>
                        <textarea
                          rows={2}
                          value={member.bio || ""}
                          onChange={(e) => updateTeamMember(idx, { bio: e.target.value })}
                          className="w-full p-1.5 text-xs border rounded"
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t flex items-center justify-between">
                      <span className="text-[11px] text-gray-400 font-mono">#{idx + 1}</span>
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete ${member.name} from the clinical team?`)) {
                            deleteTeamMember(idx);
                            showToast(`Deleted ${member.name}.`);
                          }
                        }}
                        className="text-xs text-red-600 hover:text-red-800 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= SECTION 7: BLOG POSTS ================= */}
          {activeMenu === "blog" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Blog / Articles Manager</h1>
                  <p className="text-xs text-gray-500">Create, edit, and publish new articles.</p>
                </div>
                <button
                  onClick={() => setIsAddingPost(true)}
                  className="px-4 py-2 bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold rounded shadow flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write New Post</span>
                </button>
              </div>

              {/* Add New Post Editor */}
              {isAddingPost && (
                <div className="bg-white p-6 rounded-lg border-2 border-[#2271b1] shadow-lg space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h3 className="font-bold text-base text-[#1d2327]">New Post Editor</h3>
                    <button onClick={() => setIsAddingPost(false)} className="text-gray-400 hover:text-black">
                      Cancel
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Post Title</label>
                      <input
                        type="text"
                        placeholder="Enter post title here..."
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        className="w-full p-2.5 text-base font-bold border rounded"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Category</label>
                        <input
                          type="text"
                          placeholder="Orthopedics, Joint Care, Trauma Surgery..."
                          value={newPost.category}
                          onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                          className="w-full p-2 text-xs border rounded"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Author</label>
                        <input
                          type="text"
                          value={newPost.author}
                          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                          className="w-full p-2 text-xs border rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Short Excerpt</label>
                      <textarea
                        rows={2}
                        placeholder="Brief overview displayed on the blog card..."
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                        className="w-full p-2 text-xs border rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Post Content</label>
                      <textarea
                        rows={6}
                        placeholder="Full article content..."
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        className="w-full p-3 text-sm border rounded font-mono"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="relative w-24 h-16 rounded border bg-black overflow-hidden shrink-0">
                        <Image src={newPost.image} alt="Featured" fill className="object-cover" />
                      </div>
                      <button
                        type="button"
                        onClick={() => openMediaPicker((url) => setNewPost({ ...newPost, image: url }))}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border rounded text-xs font-bold text-[#2271b1]"
                      >
                        Set Featured Image
                      </button>
                    </div>

                    <div className="pt-3 border-t flex justify-end gap-2">
                      <button
                        onClick={() => {
                          if (newPost.title) {
                            addBlogPost(newPost);
                            setIsAddingPost(false);
                            showToast("Article published!");
                          }
                        }}
                        className="px-6 py-2 rounded bg-[#2271b1] text-white text-xs font-bold uppercase shadow"
                      >
                        Publish Post
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Posts List */}
              <div className="bg-white rounded-lg border border-[#c3c4c7] shadow-sm divide-y">
                {data.blogPosts.map((post) => (
                  <div key={post.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-12 rounded overflow-hidden border shrink-0 bg-neutral-900">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#1d2327]">{post.title}</h4>
                        <p className="text-xs text-gray-500">
                          {post.category} • {post.date} • By {post.author}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          openMediaPicker((url) => {
                            updateBlogPost(post.id, { image: url });
                            showToast("Updated featured image!");
                          })
                        }
                        className="text-xs text-[#2271b1] hover:underline"
                      >
                        Change Photo
                      </button>
                      <button
                        onClick={() => {
                          if (confirm("Delete article?")) {
                            deleteBlogPost(post.id);
                            showToast("Article deleted.");
                          }
                        }}
                        className="text-xs text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= SECTION 8: SITE SETTINGS ================= */}
          {activeMenu === "settings" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">General Site Settings</h1>
                  <p className="text-xs text-gray-500">Update company phone numbers, address, and email across all pages.</p>
                </div>
                <button
                  onClick={() => {
                    saveData(data);
                    showToast("Settings saved!");
                  }}
                  className="px-6 py-2 rounded bg-[#2271b1] hover:bg-[#135e96] text-white text-xs font-bold uppercase shadow"
                >
                  Save Settings
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#c3c4c7] shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Primary Phone
                    </label>
                    <input
                      type="text"
                      value={data.siteConfig.phone1}
                      onChange={(e) => updateSiteConfig("phone1", e.target.value)}
                      className="w-full p-2 text-sm border rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Secondary Phone
                    </label>
                    <input
                      type="text"
                      value={data.siteConfig.phone2}
                      onChange={(e) => updateSiteConfig("phone2", e.target.value)}
                      className="w-full p-2 text-sm border rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-red-600 uppercase mb-1 flex items-center gap-1.5">
                      <span>24x7 Ambulance Helpline</span>
                    </label>
                    <input
                      type="text"
                      value={data.siteConfig.ambulancePhone || data.siteConfig.phone1}
                      onChange={(e) => updateSiteConfig("ambulancePhone", e.target.value)}
                      className="w-full p-2 text-sm border-2 border-red-200 rounded font-bold"
                      placeholder="0761-2626123"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Emergency Trauma Mobile
                    </label>
                    <input
                      type="text"
                      value={data.siteConfig.emergencyPhone || data.siteConfig.phone2}
                      onChange={(e) => updateSiteConfig("emergencyPhone", e.target.value)}
                      className="w-full p-2 text-sm border rounded"
                      placeholder="+91 76489-98668"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Official Email
                    </label>
                    <input
                      type="email"
                      value={data.siteConfig.email}
                      onChange={(e) => updateSiteConfig("email", e.target.value)}
                      className="w-full p-2 text-sm border rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Years of Experience Badge
                    </label>
                    <input
                      type="text"
                      value={data.siteConfig.stats.yearsExperience}
                      onChange={(e) =>
                        updateSiteConfig("stats", {
                          ...data.siteConfig.stats,
                          yearsExperience: e.target.value,
                        })
                      }
                      className="w-full p-2 text-sm border rounded"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Physical Head Office Address (Jabalpur)
                    </label>
                    <textarea
                      rows={2}
                      value={data.siteConfig.address}
                      onChange={(e) => updateSiteConfig("address", e.target.value)}
                      className="w-full p-2 text-sm border rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= SECTION 9: INQUIRIES & LEADS ================= */}
          {activeMenu === "leads" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1d2327]">Patient Inquiries &amp; Appointments</h1>
                  <p className="text-xs text-gray-500">Real-time doctor appointment bookings and contact inquiries from patients.</p>
                </div>
                <button
                  onClick={loadLeads}
                  className="px-3 py-1.5 bg-[#f0f0f1] hover:bg-[#dcdcde] text-gray-700 text-xs font-bold rounded flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh Leads</span>
                </button>
              </div>

              {/* 1. Doctor Appointment Requests */}
              <div className="bg-white rounded-lg border border-[#c3c4c7] shadow-sm p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#1d2327] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      Doctor Appointment Requests ({patientInquiries.length})
                    </h3>
                    <p className="text-xs text-gray-500">
                      Submissions from &quot;Book Appointment&quot; modal and Doctor OPD booking page.
                    </p>
                  </div>
                </div>

                {patientInquiries.length === 0 ? (
                  <div className="p-8 text-center border-2 border-dashed rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500 font-medium">No new appointment requests yet.</p>
                    <p className="text-xs text-gray-400 mt-1">When patients submit the booking form, they will appear here instantly.</p>
                  </div>
                ) : (
                  <div className="border rounded divide-y text-xs">
                    <div className="p-3 bg-gray-50 grid grid-cols-1 md:grid-cols-4 font-bold text-gray-700 gap-2">
                      <span>Patient Details</span>
                      <span>Doctor / Specialty</span>
                      <span>Preferred Slot / Notes</span>
                      <span className="text-right">Action</span>
                    </div>
                    {patientInquiries.map((inq: any, idx: number) => (
                      <div key={inq.id || idx} className="p-4 grid grid-cols-1 md:grid-cols-4 gap-2 items-center hover:bg-gray-50/50">
                        <div>
                          <p className="font-bold text-sm text-neutral-900">{inq.name || "Patient"}</p>
                          <a href={`tel:${inq.phone}`} className="text-red-600 font-bold hover:underline block">{inq.phone}</a>
                          {inq.email && <p className="text-gray-500 text-[11px]">{inq.email}</p>}
                        </div>
                        <div>
                          <span className="px-2.5 py-1 bg-emerald-50 text-[#046F47] rounded font-bold border border-emerald-200 inline-block">
                            {inq.specialty || inq.projectScope || inq.serviceType || "Orthopedics"}
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-700 font-medium">{inq.preferredTime || inq.preferredDate || "General Slot"}</p>
                          {inq.symptoms && <p className="text-gray-500 text-[11px] line-clamp-1 italic">&ldquo;{inq.symptoms}&rdquo;</p>}
                        </div>
                        <div className="flex md:justify-end">
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Contact Page Messages */}
              <div className="bg-white rounded-lg border border-[#c3c4c7] shadow-sm p-6 space-y-4">
                <h3 className="font-bold text-base text-[#1d2327] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#046F47]" />
                  Contact Form Messages ({contactMessages.length})
                </h3>

                {contactMessages.length === 0 ? (
                  <div className="p-6 text-center border-2 border-dashed rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500 font-medium">No contact messages received yet.</p>
                  </div>
                ) : (
                  <div className="border rounded divide-y text-xs">
                    <div className="p-3 bg-gray-50 grid grid-cols-1 md:grid-cols-3 font-bold text-gray-700 gap-2">
                      <span>Sender</span>
                      <span>Message</span>
                      <span className="text-right">Action</span>
                    </div>
                    {contactMessages.map((msg: any, idx: number) => (
                      <div key={msg.id || idx} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2 items-center hover:bg-gray-50/50">
                        <div>
                          <p className="font-bold text-sm text-neutral-900">{msg.firstName} {msg.lastName}</p>
                          <a href={`tel:${msg.phone}`} className="text-red-600 font-bold hover:underline block">{msg.phone}</a>
                          {msg.email && <p className="text-gray-500 text-[11px]">{msg.email}</p>}
                        </div>
                        <div>
                          <p className="text-gray-700 italic">&ldquo;{msg.message}&rdquo;</p>
                        </div>
                        <div className="flex md:justify-end">
                          <button
                            onClick={() => deleteMessage(msg.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete Message"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Career Applications */}
              <div className="bg-white rounded-lg border border-[#c3c4c7] shadow-sm p-6 space-y-4">
                <h3 className="font-bold text-base text-[#1d2327] flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  Hospital Job Applications ({jobApplications.length})
                </h3>

                {jobApplications.length === 0 ? (
                  <div className="p-6 text-center border-2 border-dashed rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500 font-medium">No job applications submitted yet.</p>
                  </div>
                ) : (
                  <div className="border rounded divide-y text-xs">
                    <div className="p-3 bg-gray-50 grid grid-cols-1 md:grid-cols-3 font-bold text-gray-700 gap-2">
                      <span>Applicant</span>
                      <span>Position</span>
                      <span className="text-right">Action</span>
                    </div>
                    {jobApplications.map((app: any, idx: number) => (
                      <div key={idx} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2 items-center hover:bg-gray-50/50">
                        <div>
                          <p className="font-bold text-sm text-neutral-900">{app.firstName} {app.lastName}</p>
                          <a href={`tel:${app.phone}`} className="text-red-600 font-bold hover:underline block">{app.phone}</a>
                          {app.email && <p className="text-gray-500 text-[11px]">{app.email}</p>}
                        </div>
                        <div>
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-bold border border-blue-200">
                            {app.jobTitle || "Hospital Staff"}
                          </span>
                        </div>
                        <div className="flex md:justify-end">
                          <button
                            onClick={() => deleteApplication(idx)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete Application"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* WordPress Media Library Modal */}
      <MediaLibraryModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
        onSelectImage={(url) => {
          mediaTargetCallback(url);
          saveData(data);
        }}
      />
    </div>
  );
}
