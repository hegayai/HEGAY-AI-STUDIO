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
      scale,
      mode,
      enhanceFace,
      sharpen
    } = body;

    // ⭐ Unified provider-based upscale call
    const result = await modelRouter({
      model: "image-upscale",
      input: {
        image,
        scale,
        mode,
        enhanceFace,
        sharpen
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Image upscale failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      upscaled: result.upscaled || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image upscale error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
