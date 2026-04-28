import { NextResponse } from "next/server";

// ⭐ Import your provider
import { fal } from "@/app/ai/providers/fal";

// ⭐ Import your unified model router
import { modelRouter } from "@/src/core/model-router";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      video,
      style,
      motionStrength,
      colorGrade,
      detailEnhance,
      model,
      mode
    } = body;

    // ⭐ Unified provider-based video transform
    const result = await modelRouter({
      model: "video-transform",
      input: {
        video,
        style,
        motionStrength,
        colorGrade,
        detailEnhance,
        model,
        mode
      },
      provider: fal,
      type: "video"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Video transform failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Video transform error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
