import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const mode = (form.get("mode") as string) || "chapters";
    // "chapters" | "scenes" | "highlights" | "beats"
    const language = (form.get("language") as string) || "auto";

    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // ⭐ Provider-based scene detection (Vercel-safe)
    const result = await modelRouter({
      model: "video-scene-detect",
      input: {
        file: fileBuffer,
        filename: file.name,
        mode,
        language
      },
      provider: fal,
      type: "video"
    });

    if (!result?.scenes && !result?.chapters && !result?.highlights) {
      return NextResponse.json(
        { error: "Scene detection failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      scenes: result.scenes || null,
      chapters: result.chapters || null,
      highlights: result.highlights || null,
      language: result.language || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Scene detection error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
