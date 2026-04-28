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
      video,
      strength,
      preserveMotion,
      style,
      model,
      seed,
      steps,
      cfgScale,
      mode
    } = body;

    // ⭐ Unified provider-based guided video generation
    const result = await modelRouter({
      model: "video-generate-guided",
      input: {
        prompt,
        video,
        strength,
        preserveMotion,
        style,
        model,
        seed,
        steps,
        cfgScale,
        mode
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Guided video generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Guided video generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
