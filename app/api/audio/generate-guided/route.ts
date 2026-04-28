import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      prompt,
      audio,
      strength,
      preserveTone,
      style,
      model,
      seed,
      mode
    } = body;

    // ⭐ Unified provider-based guided audio generation
    const result = await modelRouter({
      model: "audio-generate-guided",
      input: {
        prompt,
        audio,
        strength,
        preserveTone,
        style,
        model,
        seed,
        mode
      },
      provider: fal,
      type: "audio"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Guided audio generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Guided audio generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
