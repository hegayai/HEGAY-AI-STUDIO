import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      text,          // SRT or plain text
      style,         // "cinematic" | "formal" | "casual" | "concise" | "emotional" | "tiktok" | "documentary" | "humorous" | "expanded" | "simple"
      language = "auto",
      format = "srt" // "srt" | "text"
    } = body;

    if (!text) {
      return NextResponse.json(
        { error: "Text or subtitles are required" },
        { status: 400 }
      );
    }

    if (!style) {
      return NextResponse.json(
        { error: "Rewrite style is required" },
        { status: 400 }
      );
    }

    const result = await modelRouter({
      model: "subtitle-rewrite",
      input: {
        text,
        style,
        language,
        format
      },
      provider: fal,
      type: "text"
    });

    if (!result?.output) {
      return NextResponse.json(
        { error: "Subtitle rewrite failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output: result.output
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Subtitle rewrite error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
