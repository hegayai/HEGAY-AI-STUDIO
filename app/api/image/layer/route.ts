import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { layers } = body;

  const res = await fetch(process.env.IMAGE_LAYER_API_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ layers }),
  });

  const data = await res.json();

  return NextResponse.json({
    image: {
      url: data.url,
      meta: data.meta,
    },
  });
}
