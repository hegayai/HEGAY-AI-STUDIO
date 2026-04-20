// app/api/image/depth-map/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    depthSmoothing,
    edgePreservation,
    depthRange,
    detailBoost,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_DEPTH_MAP_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      depthSmoothing,
      edgePreservation,
      depthRange,
      detailBoost,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    depthMap: data?.depthMap || null,
  });
}
