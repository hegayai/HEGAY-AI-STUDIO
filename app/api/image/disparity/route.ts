// app/api/image/disparity/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { mode, left, right, image } = body;

  const res = await fetch(process.env.IMAGE_DISPARITY_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mode,
      left,
      right,
      image,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    disparity: data?.disparity || null,
  });
}
