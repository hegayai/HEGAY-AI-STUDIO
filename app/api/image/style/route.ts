// app/api/image/style/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    styleImage,
    strength,
    preserveColor,
  } = body;

  const res = await fetch(process.env.IMAGE_STYLE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      styleImage,
      strength,
      preserveColor,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    styled: data?.styled || null,
  });
}
