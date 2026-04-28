import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const { plan } = await req.json();

    // Map plan → price ID
    const priceMap: Record<string, string | undefined> = {
      motion_basic: process.env.STRIPE_PRICE_MOTION_BASIC,
      motion_pro: process.env.STRIPE_PRICE_MOTION_PRO,
      motion_creator: process.env.STRIPE_PRICE_MOTION_CREATOR,
      motion_studio: process.env.STRIPE_PRICE_MOTION_STUDIO,
    };

    const priceId = priceMap[plan];

    if (!priceId) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}
