import { NextResponse } from "next/server";

// Provider architecture
import { fal } from "@/app/ai/providers/fal";

// Unified model router
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      text,
      from = "auto",   // auto-detect by default
      to,               // target language (any worldwide language)
      format = "srt"    // "srt" | "text"
    } = body;

    if (!text) {
      return NextResponse.json(
        { error: "Text or subtitles are required" },
        { status: 400 }
      );
    }

    if (!to) {
      return NextResponse.json(
        { error: "Target language 'to' is required" },
        { status: 400 }
      );
    }

    // Unified provider-based subtitle translation
    const result = await modelRouter({
      model: "subtitle-translate",
      input: {
        text,
        from,
        to,
        format
      },
      provider: fal,
      type: "text"
    });

    if (!result?.translated) {
      return NextResponse.json(
        { error: "Subtitle translation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      translated: result.translated,
      detectedLanguage: result.detectedLanguage || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Subtitle translation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
