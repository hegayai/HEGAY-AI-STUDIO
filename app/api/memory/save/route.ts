import { NextResponse } from "next/server";
import { prisma } from "@/core/db/client";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { content, type } = await req.json();

    if (!content || !type) {
      return NextResponse.json(
        { error: "Missing memory content or type" },
        { status: 400 }
      );
    }

    const saved = await prisma.memory.create({
      data: {
        userId: user.id,
        content,
        type,
      },
    });

    return NextResponse.json({
      success: true,
      memory: saved,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to save memory" },
      { status: 500 }
    );
  }
}
