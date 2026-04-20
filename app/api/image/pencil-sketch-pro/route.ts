// app/api/image/pencil-sketch-pro/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    strokeIntensity,
    paperTexture,
    edgeSharpness,
    graphiteDepth,
    contrastBoost,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_PENCIL_SKETCH_PRO_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      strokeIntensity,
      paperTexture,
      edgeSharpness,
      graphiteDepth,
      contrastBoost,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    sketch: data?.sketch || null,
  });
}
