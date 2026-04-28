import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      image,
      temperature,
      tint,
      exposure,
      contrast,
      highlights,
      shadows,
      saturation,
      vibrance,
      gamma,
      mode
    } = body;

    // ⭐ Unified provider-based color grading
    const result = await modelRouter({
      model: "image-color-grading",
      input: {
        image,
        temperature,
        tint,
        exposure,
        contrast,
        highlights,
        shadows,
        saturation,
        vibrance,
        gamma,
        mode
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Color grading failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      graded: result.graded || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Color grading error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
