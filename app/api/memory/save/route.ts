import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, key, value } = await req.json();

    if (!userId || !key || typeof value === "undefined") {
      return NextResponse.json(
        { error: "Missing userId, key, or value" },
        { status: 400 }
      );
    }

    const saved = await prisma.memory.upsert({
      where: {
        userId_key: {
          userId,
          key,
        },
      },
      update: {
        value,
      },
      create: {
        userId,
        key,
        value,
      },
    });

    return NextResponse.json({ saved });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to save memory" },
      { status: 500 }
    );
  }
}
