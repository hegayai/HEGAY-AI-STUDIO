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
      depthSmoothing,
      edgePreservation,
      depthRange,
      detailBoost,
      mode
    } = body;

    // ⭐ Unified provider-based depth map generation
    const result = await modelRouter({
      model: "image-depth-map",
      input: {
        image,
        depthSmoothing,
        edgePreservation,
        depthRange,
        detailBoost,
        mode
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Depth map generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      depthMap: result.depthMap || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Depth map error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
