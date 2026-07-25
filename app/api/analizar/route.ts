import { NextResponse } from "next/server";

// Analizador de webs con Google PageSpeed Insights (Lighthouse).
// Requiere PAGESPEED_API_KEY en las variables de entorno (gratis en Google Cloud).
// Funciona sin clave con límites más bajos, pero se recomienda ponerla.

export const maxDuration = 60; // el análisis puede tardar

function normalizeUrl(input: string): string | null {
  let url = input.trim();
  if (!url) return null;
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  try {
    const u = new URL(url);
    if (!/^https?:$/.test(u.protocol)) return null;
    return u.href;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const target = normalizeUrl(String(body?.url ?? ""));
    if (!target) {
      return NextResponse.json({ ok: false, error: "url_invalida" }, { status: 400 });
    }

    const key = process.env.PAGESPEED_API_KEY;
    const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
    api.searchParams.set("url", target);
    api.searchParams.set("strategy", "mobile");
    ["performance", "accessibility", "best-practices", "seo"].forEach((c) =>
      api.searchParams.append("category", c)
    );
    if (key) api.searchParams.set("key", key);

    const res = await fetch(api.toString(), { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "no_analizable" },
        { status: 502 }
      );
    }
    const data = await res.json();

    const cat = data?.lighthouseResult?.categories ?? {};
    const audits = data?.lighthouseResult?.audits ?? {};
    const score = (c: any) =>
      c?.score != null ? Math.round(c.score * 100) : null;

    const scores = {
      rendimiento: score(cat["performance"]),
      accesibilidad: score(cat["accessibility"]),
      practicas: score(cat["best-practices"]),
      seo: score(cat["seo"]),
    };

    // Métricas clave y comprobaciones propias derivadas del análisis
    const lcpMs = audits["largest-contentful-paint"]?.numericValue ?? null;
    // Un audit se considera "aprobado" si su score es 1.
    // Si el audit no existe (undefined), damos beneficio de la duda (no lo marcamos en rojo).
    const passes = (id: string) => {
      const s = audits[id]?.score;
      return s == null ? true : s === 1;
    };

    const checks = [
      { id: "https", ok: passes("is-on-https"), label: "Certificado de seguridad (HTTPS)" },
      { id: "movil", ok: passes("viewport"), label: "Preparada para el móvil" },
      { id: "titulo", ok: passes("document-title"), label: "Título para Google" },
      { id: "meta", ok: passes("meta-description"), label: "Descripción para Google" },
      {
        id: "velocidad",
        ok: lcpMs != null ? lcpMs < 2500 : true,
        label: "Carga rápida (menos de 2,5s)",
      },
    ];

    return NextResponse.json({
      ok: true,
      url: target,
      scores,
      checks,
      lcpSeconds: lcpMs != null ? Math.round((lcpMs / 1000) * 10) / 10 : null,
    });
  } catch {
    return NextResponse.json({ ok: false, error: "error" }, { status: 500 });
  }
}
