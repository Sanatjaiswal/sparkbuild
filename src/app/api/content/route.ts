import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import {
  siteConfig,
  heroSlides,
  servicesData,
  projectsData,
  teamMembers,
  videoTestimonials,
  testimonials,
  awardsData,
  faqsData,
  blogPosts,
  careerJobs,
} from "@/data/siteData";

const DATA_FILE = path.join(process.cwd(), "data", "cms_content.json");

function getDefaultData() {
  return {
    siteConfig,
    heroSlides,
    servicesData,
    projectsData,
    teamMembers,
    videoTestimonials,
    testimonials,
    awardsData,
    faqsData,
    blogPosts,
    careerJobs,
    lastUpdated: new Date().toISOString(),
  };
}

export async function GET() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
      return NextResponse.json(JSON.parse(fileContent));
    } else {
      const initial = getDefaultData();
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), "utf-8");
      return NextResponse.json(initial);
    }
  } catch (error) {
    console.error("Error reading CMS content:", error);
    return NextResponse.json(getDefaultData());
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = {
      ...body,
      lastUpdated: new Date().toISOString(),
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");
    return NextResponse.json({ success: true, lastUpdated: updated.lastUpdated });
  } catch (error) {
    console.error("Error saving CMS content:", error);
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 });
  }
}

