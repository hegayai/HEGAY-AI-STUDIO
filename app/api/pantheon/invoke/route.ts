import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, invocation } = body;

  const res = await fetch(process.env.PANTHEON_INVOKE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.PANTHEON_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      invocation,
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
