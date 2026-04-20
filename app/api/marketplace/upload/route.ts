import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, file } = await req.json();

  const res = await fetch(process.env.MARKETPLACE_UPLOAD_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MARKETPLACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      file,
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
