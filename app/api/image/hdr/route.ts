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
      exposure,
      contrast,
      highlightRecovery,
      shadowBoost,
      saturation,
      mode
    } = body;

    // ⭐ Unified provider-based HDR processing
    const result = await modelRouter({
      model: "image-hdr",
      input: {
        image,
        exposure,
        contrast,
        highlightRecovery,
        shadowBoost,
        saturation,
        mode
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "HDR processing failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      hdr: result.hdr || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "HDR processing error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
