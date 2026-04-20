// app/api/image/sketch/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    style,
    lineWeight,
    detailLevel,
    contrast,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_SKETCH_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      style,
      lineWeight,
      detailLevel,
      contrast,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    sketch: data?.sketch || null,
  });
}
