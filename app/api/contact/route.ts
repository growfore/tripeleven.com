import { NextResponse } from "next/server";

const RESEND_URL = "https://api.resend.com/emails";
const FROM = "TripEleven <noreply@tripeleven.com>";
const TO = "noreply@tripeleven.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid body" }, { status: 400 });
  }

  if (data._honey) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, agency, topic, message } = data;
  if (!name?.trim() || !email || !EMAIL_RE.test(email) || !message?.trim()) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: `TripEleven contact — ${topic ?? "General question"}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        agency ? `Agency: ${agency}` : null,
        topic ? `Topic: ${topic}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "send failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
