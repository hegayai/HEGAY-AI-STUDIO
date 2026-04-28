import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      platform,   // "tiktok" | "instagram" | "youtube" | "twitter" | "linkedin"
      topic,      // text or summary
      style = "default"
    } = body;

    if (!platform || !topic) {
      return NextResponse.json(
        { error: "Platform and topic are required" },
        { status: 400 }
      );
    }

    const result = await modelRouter({
      model: "social-generate",
      input: { platform, topic, style },
      provider: fal,
      type: "text"
    });

    if (!result?.content) {
      return NextResponse.json(
        { error: "Social content generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      content: result.content,
      hashtags: result.hashtags || []
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Social generation error", details: String(error) },
      { status: 500 }
    );
  }
}
