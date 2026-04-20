import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, value } = await req.json();

  const res = await fetch(process.env.SETTINGS_API_KEYS_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.SETTINGS_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, value }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
