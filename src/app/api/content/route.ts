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
  defaultMarqueeItems,
} from "@/data/siteData";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DATA_FILE = path.join(process.cwd(), "data", "cms_content.json");
const TMP_FILE = path.join("/tmp", "cms_content.json");

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
    marqueeItems: defaultMarqueeItems,
    lastUpdated: new Date().toISOString(),
  };
}

export async function GET() {
  try {
    if (fs.existsSync(TMP_FILE)) {
      try {
        const fileContent = fs.readFileSync(TMP_FILE, "utf-8");
        return NextResponse.json(JSON.parse(fileContent), {
          headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
        });
      } catch (e) {
        console.error("Error reading TMP_FILE:", e);
      }
    }
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
      return NextResponse.json(JSON.parse(fileContent), {
        headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
      });
    } else {
      const initial = getDefaultData();
      try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), "utf-8");
      } catch {}
      return NextResponse.json(initial, {
        headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
      });
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
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");
    } catch {
      try {
        fs.writeFileSync(TMP_FILE, JSON.stringify(updated, null, 2), "utf-8");
      } catch (tmpErr) {
        console.error("Failed to write to TMP_FILE:", tmpErr);
      }
    }
    return NextResponse.json({ success: true, lastUpdated: updated.lastUpdated });
  } catch (error) {
    console.error("Error saving CMS content:", error);
    return NextResponse.json({ success: false, error: "Failed to save" }, { status: 500 });
  }
}

