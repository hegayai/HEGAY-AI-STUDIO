import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const file = form.get("file") as File | null;
    const mode = (form.get("mode") as string) || "summary"; 
    // "summary" | "bullet-points" | "actions" | "chapters"
    const language = (form.get("language") as string) || "auto";

    if (!file) {
      return NextResponse.json(
        { error: "No video file uploaded" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // ⭐ Unified provider-based video summarization
    const result = await modelRouter({
      model: "video-summarize",
      input: {
        file: fileBuffer,
        filename: file.name,
        mode,
        language
      },
      provider: fal,
      type: "video"
    });

    if (!result?.summary && !result?.items) {
      return NextResponse.json(
        { error: "Video summarization failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      summary: result.summary || null,
      items: result.items || null,
      language: result.language || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video summarization error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
