import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "Missing userId" },
        { status: 400 }
      );
    }

    const memory = await prisma.memory.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({ memory });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch memory" },
      { status: 500 }
    );
  }
}
