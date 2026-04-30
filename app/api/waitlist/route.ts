import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const KIT_FORM_ID = process.env.KIT_FORM_ID;

    if (!KIT_FORM_ID) {
      console.log(`[DEV] Waitlist signup: ${email} (source: ${source})`);
      return NextResponse.json({ success: true });
    }

    // Correct endpoint — still uses convertkit.com domain
    const kitRes = await fetch(
      `https://app.convertkit.com/forms/${KIT_FORM_ID}/subscriptions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_address: email }),
      }
    );

    console.log("Kit response status:", kitRes.status);

    if (!kitRes.ok) {
      const errorText = await kitRes.text();
      console.error("Kit API error:", errorText);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}