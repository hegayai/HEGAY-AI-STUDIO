import { NextResponse } from "next/server";
import { prisma } from "@/core/db/client";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { message: "Invalid token." },
        { status: 400 }
      );
    }

    // TEMPORARY: token = email (mock verification)
    const user = await prisma.user.update({
      where: { email: token },
      data: { emailVerified: true },
    });

    return NextResponse.json({
      message: "Email verified. You can now log in.",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || "Verification failed" },
      { status: 500 }
    );
  }
}
