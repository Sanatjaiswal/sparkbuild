import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");

// GET /api/upload - Returns list of all images available in public/images
export async function GET() {
  try {
    if (!fs.existsSync(IMAGES_DIR)) {
      return NextResponse.json({ images: [] });
    }
    const files = fs.readdirSync(IMAGES_DIR);
    const validExtensions = [".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif"];
    const images = files
      .filter((file) => validExtensions.includes(path.extname(file).toLowerCase()))
      .map((file) => ({
        filename: file,
        url: `/images/${file}`,
      }));
    return NextResponse.json({ images });
  } catch (err) {
    console.error("Error listing images:", err);
    return NextResponse.json({ images: [] });
  }
}

// POST /api/upload - Uploads a new image file into public/images
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const cleanName = file.name.replace(/[^a-zA-Z0-9_\.-]/g, "_");
    const uniqueName = `${Date.now()}_${cleanName}`;
    const filePath = path.join(IMAGES_DIR, uniqueName);

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      url: `/images/${uniqueName}`,
      filename: uniqueName,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

