import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { timeline } = await req.json();

  const res = await fetch(process.env.ORIGIN_TIMELINE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.ORIGIN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ timeline }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
