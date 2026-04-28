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
      lightDirection,
      intensity,
      color,
      softness,
      ambient,
      mode
    } = body;

    // ⭐ Unified provider-based relight call
    const result = await modelRouter({
      model: "image-relight",
      input: {
        image,
        lightDirection,
        intensity,
        color,
        softness,
        ambient,
        mode
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Image relight failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      relight: result.relight || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image relight error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
