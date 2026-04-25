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

    const { title } = await req.json();

    if (!title) {
      return NextResponse.json(
        { error: "Missing thread title" },
        { status: 400 }
      );
    }

    const thread = await prisma.thread.create({
      data: {
        title,
        userId: user.id,
      },
    });

    return NextResponse.json({
      success: true,
      thread,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to create thread" },
      { status: 500 }
    );
  }
}
