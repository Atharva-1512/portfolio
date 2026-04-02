import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

type ValidationResult =
  | {
      ok: true;
      data: {
        name: string;
        email: string;
        message: string;
      };
    }
  | {
      ok: false;
      error: string;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(payload: ContactPayload): ValidationResult {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }

  if (!emailPattern.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (message.length < 20) {
    return { ok: false, error: "Please share a little more detail in your message." };
  }

  return { ok: true, data: { name, email, message } };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validated = validatePayload(payload);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return NextResponse.json(
        {
          error:
            "Contact service is not configured yet. Add RESEND_API_KEY and CONTACT_TO_EMAIL."
        },
        { status: 500 }
      );
    }

  const { name, email, message } = validated.data;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      })
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();

      return NextResponse.json(
        { error: "Unable to send your message right now.", details },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. I'll get back to you soon."
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
