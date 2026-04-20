// app/api/image/hdr/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    exposure,
    contrast,
    highlightRecovery,
    shadowBoost,
    saturation,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_HDR_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      exposure,
      contrast,
      highlightRecovery,
      shadowBoost,
      saturation,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    hdr: data?.hdr || null,
  });
}
