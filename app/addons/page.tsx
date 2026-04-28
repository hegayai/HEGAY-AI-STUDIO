"use client";

export default function AddonsPage() {
  async function subscribe(plan) {
    const res = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("Checkout error:", data);
      alert("Checkout failed. Check console.");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Test AI Motion Checkout</h1>

      <button
        style={{ padding: "10px 20px", marginTop: 20 }}
        onClick={() => subscribe("motion_basic")}
      >
        Subscribe to AI Motion Basic
      </button>
    </div>
  );
}
