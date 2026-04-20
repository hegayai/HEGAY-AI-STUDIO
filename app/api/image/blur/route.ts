// app/api/image/blur/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    blurAmount,
    blurType,
    preserveEdges,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_BLUR_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      blurAmount,
      blurType,
      preserveEdges,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    blurred: data?.blurred || null,
  });
}
