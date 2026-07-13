import { NextResponse } from "next/server";

// Ruta de la auditoría por email.
// Requiere RESEND_API_KEY en las variables de entorno (resend.com, gratis hasta 100 emails/día)
// y AUDIT_TO_EMAIL con el email donde quieres recibir las solicitudes.

export async function POST(request: Request) {
  try {
    const { website, email } = await request.json();

    if (
      typeof website !== "string" ||
      typeof email !== "string" ||
      !email.includes("@") ||
      website.length < 4 ||
      website.length > 300 ||
      email.length > 200
    ) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.AUDIT_TO_EMAIL || "callejaj@proton.me";

    if (!apiKey) {
      console.error("RESEND_API_KEY no configurada");
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Auditorías <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Nueva auditoría solicitada: ${website}`,
        text: `Web a auditar: ${website}\nEmail del solicitante: ${email}\n\nEnviado desde el formulario de jorgecalleja.dev`,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
