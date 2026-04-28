import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      text,          // raw text or SRT
      action,        // "segment" | "merge" | "retime" | "rewrite" | "clean"
      language,      // optional
      style,         // for rewrite: "cinematic" | "formal" | "casual" | "concise" | "emotional"
      maxLength,     // max characters per subtitle line
      maxDuration    // max seconds per subtitle block
    } = body;

    if (!text) {
      return NextResponse.json(
        { error: "Text or subtitles are required" },
        { status: 400 }
      );
    }

    // Unified provider-based subtitle editing
    const result = await modelRouter({
      model: "subtitle-editor",
      input: {
        text,
        action,
        language,
        style,
        maxLength,
        maxDuration
      },
      provider: fal,
      type: "text"
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Subtitle editor failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Subtitle editor error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
