import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      audio,
      style,
      enhance,
      model,
      mode
    } = body;

    // ⭐ Unified provider-based audio transform
    const result = await modelRouter({
      model: "audio-transform",
      input: {
        audio,
        style,
        enhance,
        model,
        mode
      },
      provider: fal,
      type: "audio"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Audio transform failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Audio transform error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
