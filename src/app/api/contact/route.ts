import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100) {
    return NextResponse.json(
      { error: "Name is required (max 100 chars)" },
      { status: 400 },
    );
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required" },
      { status: 400 },
    );
  }

  if (!message || message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 2000 characters" },
      { status: 400 },
    );
  }

  // In production, wire this up to an email service (Resend, SendGrid, etc.)
  // or persist to a database. For now we log it server-side.
  console.log("[contact] new message", { name, email, message });

  return NextResponse.json({ ok: true });
}
