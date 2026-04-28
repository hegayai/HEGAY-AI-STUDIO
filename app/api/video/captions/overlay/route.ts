import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const subtitles = form.get("subtitles") as string | null; // SRT or VTT
    const style = (form.get("style") as string) || "tiktok"; 
    // "tiktok" | "cinematic" | "karaoke" | "bold" | "neon" | "minimal"
    const language = (form.get("language") as string) || "auto";

    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }

    if (!subtitles) {
      return NextResponse.json(
        { error: "Subtitles (SRT or VTT) are required" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // ⭐ Provider-based caption overlay (Vercel-safe)
    const result = await modelRouter({
      model: "video-caption-overlay",
      input: {
        file: fileBuffer,
        filename: file.name,
        subtitles,
        style,
        language
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Caption overlay failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Caption overlay error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
