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
      strength,
      preserveDetail,
      mode
    } = body;

    // ⭐ Unified provider-based denoise call
    const result = await modelRouter({
      model: "image-denoise",
      input: {
        image,
        strength,
        preserveDetail,
        mode
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Image denoise failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      denoised: result.denoised || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image denoise error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
