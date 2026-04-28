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
      mask,
      prompt,
      strength
    } = body;

    // ⭐ Unified provider-based inpainting
    const result = await modelRouter({
      model: "image-inpaint",
      input: {
        image,
        mask,
        prompt,
        strength
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Image inpaint failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url,
      inpainted: result.inpainted || null
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Image inpaint error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
