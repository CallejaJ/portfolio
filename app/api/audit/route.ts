import { NextResponse } from "next/server";

// Ruta de la auditoría por email.
// Requiere RESEND_API_KEY en las variables de entorno (resend.com, gratis hasta 100 emails/día)
// y AUDIT_TO_EMAIL con el email donde quieres recibir las solicitudes.

export async function POST(request: Request) {
  try {
    const { website, email } = await request.json();

    // Email real: sin espacios ni caracteres de control, con dominio y TLD
    const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/;
    if (
      typeof website !== "string" ||
      typeof email !== "string" ||
      !EMAIL_RE.test(email.trim()) ||
      website.trim().length < 4 ||
      website.trim().length > 300
    ) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.AUDIT_TO_EMAIL || "hola@jorgecalleja.dev";

    if (!apiKey) {
      console.error("RESEND_API_KEY no configurada");
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    // Escapa el input del usuario antes de meterlo en el HTML del email
    const esc = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    const safeWebsite = esc(website.trim());
    const safeEmail = esc(email.trim());

    const html = `<!DOCTYPE html>
<html lang="es">
<body style="margin:0;padding:0;background:#f4f4f8;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:linear-gradient(90deg,#2563eb,#9333ea);padding:24px 32px;">
            <p style="margin:0;color:#ffffff;font-size:20px;font-weight:bold;">Nueva auditoría solicitada</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">Jorge Calleja · Web — jorgecalleja.dev</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8f7fc;border:1px solid #e6e2f2;border-radius:10px;">
              <tr><td style="padding:16px 20px;border-bottom:1px solid #e6e2f2;">
                <p style="margin:0;font-size:11px;color:#7c7390;text-transform:uppercase;letter-spacing:0.06em;">Web a auditar</p>
                <p style="margin:4px 0 0;font-size:15px;"><a href="${safeWebsite}" style="color:#7c3aed;">${safeWebsite}</a></p>
              </td></tr>
              <tr><td style="padding:16px 20px;">
                <p style="margin:0;font-size:11px;color:#7c7390;text-transform:uppercase;letter-spacing:0.06em;">Email del solicitante</p>
                <p style="margin:4px 0 0;font-size:15px;"><a href="mailto:${safeEmail}" style="color:#7c3aed;">${safeEmail}</a></p>
              </td></tr>
            </table>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 0 4px;">
              <a href="mailto:${safeEmail}?subject=Tu%20auditor%C3%ADa%20web%20-%20jorgecalleja.dev" style="display:inline-block;background:#7c3aed;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 28px;border-radius:999px;">Responder al solicitante</a>
            </td></tr></table>
          </td>
        </tr>
        <tr><td style="padding:16px 32px 24px;">
          <p style="margin:0;font-size:12px;color:#9a93ab;text-align:center;">Enviado desde el formulario de <a href="https://jorgecalleja.dev" style="color:#7c3aed;text-decoration:none;">jorgecalleja.dev</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jorge Calleja · Web <onboarding@resend.dev>",
        to: [to],
        reply_to: safeEmail,
        subject: `🔍 Auditoría: ${website.trim()}`,
        text: `Web a auditar: ${website.trim()}\nEmail del solicitante: ${email.trim()}\n\nEnviado desde el formulario de jorgecalleja.dev`,
        html,
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
