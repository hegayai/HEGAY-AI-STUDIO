// app/api/image/sharpen/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    amount,
    radius,
    threshold,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_SHARPEN_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      amount,
      radius,
      threshold,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    sharpened: data?.sharpened || null,
  });
}
