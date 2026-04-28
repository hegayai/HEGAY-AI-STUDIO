import { NextResponse } from "next/server";
import { modelRouter } from "@/src/core/model-router";
import { fal } from "@/app/ai/providers/fal";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const title = form.get("title") as string | null;
    const style = (form.get("style") as string) || "youtube";
    // "youtube" | "tiktok" | "cinematic" | "bold" | "minimal" | "neon"
    const brandColor = (form.get("brandColor") as string) || "#FF0000";
    const image = form.get("image") as File | null; // optional face or frame

    if (!title) {
      return NextResponse.json(
        { error: "Title is required for thumbnail generation" },
        { status: 400 }
      );
    }

    let imageBuffer = null;

    if (image) {
      imageBuffer = Buffer.from(await image.arrayBuffer());
    }

    // ⭐ Provider-based thumbnail generation (Vercel-safe)
    const result = await modelRouter({
      model: "thumbnail-generate",
      input: {
        title,
        style,
        brandColor,
        image: imageBuffer,
        filename: image?.name
      },
      provider: fal,
      type: "image"
    });

    if (!result?.url) {
      return NextResponse.json(
        { error: "Thumbnail generation failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      url: result.url
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Thumbnail generation error",
        details: String(error)
      },
      { status: 500 }
    );
  }
}
