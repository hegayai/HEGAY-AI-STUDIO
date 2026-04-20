import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(process.env.MARKETPLACE_LIST_API_URL!, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${process.env.MARKETPLACE_API_KEY}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
