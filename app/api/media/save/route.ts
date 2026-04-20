import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { type, url, prompt } = await req.json();

    if (!type || !url || !prompt) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const item = await prisma.media.create({
      data: { type, url, prompt },
    });

    return NextResponse.json({ success: true, item });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save media", details: String(error) },
      { status: 500 }
    );
  }
}
