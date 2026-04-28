import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { image, method, intensity } = body;

    // ⭐ Unified provider-based normal map generation
    const result = await modelRouter({
      model: "image-normal-map",
      input: {
        image,
        method,
        intensity
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Normal map generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      normalMap: result.normalMap || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Normal map error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
