// Generador de creatividades CV-ATS — mismo pipeline que 07-generadores
// Uso: node marketing/cv-ats/gen-cv-ads.mjs   (desde la raíz del repo, requiere `npm i sharp`)
// Entrada: marketing/cv-ats/fondos/concepto-N.png (1080x1080) y concepto-N-v.png (1080x1920)
// Salida:  marketing/cv-ats/salida/es/ y salida/en/
import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync } from "fs";

const DIR = "marketing/cv-ats";
const IN = ["06-fondos", "fondos"].map((d) => `${DIR}/${d}`).find(existsSync);
const files = IN ? readdirSync(IN).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)) : [];

// Busca el fondo del concepto N: el nombre debe contener el número.
// Vertical si además contiene "v", "vert", "story" o "9x16" tras el número.
function findFondo(n, vertical) {
  const isVert = (f) => /(-v|vert|story|9x16|1920)/i.test(f);
  const match = files.filter((f) => {
    const nums = f.match(/\d+/g) || [];
    return nums.includes(String(n)) || f.includes(`concepto-${n}`);
  });
  const found = match.find((f) => (vertical ? isVert(f) : !isVert(f)));
  return found ? `${IN}/${found}` : null;
}

const faro = (x, y, s) => `
<g transform="translate(${x},${y}) scale(${s})">
  <linearGradient id="fl" x1="24" y1="4" x2="24" y2="40" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#9333ea"/>
  </linearGradient>
  <path d="M20 13 L2 5 L2 12 Z" fill="#22d3ee" opacity="0.55"/>
  <path d="M28 13 L46 5 L46 12 Z" fill="#22d3ee" opacity="0.55"/>
  <path d="M18.5 10 L29.5 10 L24 3.5 Z" fill="url(#fl)"/>
  <rect x="20" y="10" width="8" height="5.5" rx="1.2" fill="#0f0a1e"/>
  <circle cx="24" cy="12.8" r="2.1" fill="#22d3ee"/>
  <rect x="17.8" y="15.2" width="12.4" height="1.8" rx="0.9" fill="#e9e4f8" opacity="0.3"/>
  <path d="M19 17 L29 17 L31.5 40 L16.5 40 Z" fill="url(#fl)"/>
  <path d="M18.45 22 L29.55 22 L30 26 L18 26 Z" fill="#e9e4f8" opacity="0.9"/>
  <path d="M17.5 31 L30.5 31 L30.95 35 L17.05 35 Z" fill="#e9e4f8" opacity="0.9"/>
  <rect x="22.4" y="35.5" width="3.2" height="4.5" rx="1.5" fill="#0f0a1e"/>
  <rect x="14.5" y="40" width="19" height="3" rx="1.5" fill="#e9e4f8" opacity="0.35"/>
</g>`;

const whatsapp = (x, y, s) => `
<g transform="translate(${x},${y}) scale(${s})">
  <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
</g>`;

async function makeAd({ concepto, vertical, name, lang, tag, headline, sub, cta, phone }) {
  const src = findFondo(concepto, vertical);
  if (!src) { console.log(`SKIP (falta fondo concepto ${concepto}${vertical ? " vertical" : ""})`); return; }
  const meta = await sharp(src).metadata();
  const W = 1080, H = meta.height / meta.width > 1.3 ? 1920 : 1080;
  const photo = await sharp(src).resize(W, H, { fit: "cover" }).toBuffer();

  // Bloque de texto anclado abajo (tercio inferior libre en los fondos)
  const base = H - 374; // inicio del titular
  const hlLines = headline.map((l, i) =>
    `<text x="60" y="${base + i * 74}" font-family="Liberation Sans" font-size="72" font-weight="bold" fill="${l.c || "white"}">${l.t}</text>`
  ).join("");

  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#150d26" stop-opacity="0"/>
        <stop offset="0.5" stop-color="#150d26" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#150d26" stop-opacity="0.97"/>
      </linearGradient>
      <linearGradient id="topfade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#150d26" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#150d26" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#dark)"/>
    <rect width="${W}" height="200" fill="url(#topfade)"/>
    ${faro(60, 48, 1.4)}
    <text x="135" y="92" font-family="Liberation Sans" font-size="32" font-weight="bold" fill="#e9e4f8">jorgecalleja.dev/cv-ats</text>
    <rect x="60" y="${base - 166}" width="${tag.length * 17 + 44}" height="52" rx="26" fill="#9333ea"/>
    <text x="82" y="${base - 131}" font-family="Liberation Sans" font-size="26" font-weight="bold" fill="white">${tag}</text>
    ${hlLines}
    <text x="62" y="${base + headline.length * 74 + 2}" font-family="Liberation Sans" font-size="31" fill="#d8cff0">${sub}</text>
    <rect x="60" y="${H - 118}" width="500" height="86" rx="43" fill="#25D366"/>
    ${whatsapp(104, H - 96, 1.85)}
    <text x="347" y="${H - 66}" font-family="Liberation Sans" font-size="29" font-weight="bold" fill="white" text-anchor="middle">${cta}</text>
    <text x="592" y="${H - 66}" font-family="Liberation Sans" font-size="25" fill="#d8cff0">${phone}</text>
  </svg>`;

  const out = `${DIR}/salida/${lang}`;
  mkdirSync(out, { recursive: true });
  await sharp(photo).composite([{ input: Buffer.from(overlay), top: 0, left: 0 }]).png().toFile(`${out}/${name}.png`);
  console.log("OK", lang, name);
}

const ES = { lang: "es", cta: "Análisis ATS GRATIS · 24h", phone: "649 53 00 22" };
const EN = { lang: "en", cta: "FREE ATS check · 24h", phone: "649 53 00 22" };

const ads = [
  // Concepto 1 — robot
  { ...ES, concepto: 1, name: "cv-1-robot", tag: "FILTROS ATS",
    headline: [{ t: "Tu CV lo lee un robot" }, { t: "antes que un humano.", c: "#fbbf24" }],
    sub: "El 75% de los currículums se descartan sin que nadie los vea." },
  { ...EN, concepto: 1, name: "cv-1-robot", tag: "ATS FILTERS",
    headline: [{ t: "A robot reads your CV" }, { t: "before any human.", c: "#fbbf24" }],
    sub: "75% of resumes are rejected before anyone sees them." },
  // Concepto 2 — antes/después
  { ...ES, concepto: 2, name: "cv-2-antes-despues", tag: "ANTES / DESPUÉS",
    headline: [{ t: "Mismo candidato." }, { t: "Distinto resultado.", c: "#4ade80" }],
    sub: "La diferencia no es tu experiencia: es cómo la lee el software." },
  { ...EN, concepto: 2, name: "cv-2-before-after", tag: "BEFORE / AFTER",
    headline: [{ t: "Same candidate." }, { t: "Different outcome.", c: "#4ade80" }],
    sub: "It's not your experience — it's how the software reads it." },
  // Concepto 3 — el montón
  { ...ES, concepto: 3, name: "cv-3-monton", tag: "100 CANDIDATOS",
    headline: [{ t: "¿Por qué siempre" }, { t: "eligen a otros?", c: "#fbbf24" }],
    sub: "De 100 CVs, la mayoría nunca llega a ojos humanos." },
  { ...EN, concepto: 3, name: "cv-3-pile", tag: "100 APPLICANTS",
    headline: [{ t: "Why do they always" }, { t: "pick someone else?", c: "#fbbf24" }],
    sub: "Out of 100 CVs, most never reach human eyes." },
  // Concepto 4 — rechazado en segundos
  { ...ES, concepto: 4, name: "cv-4-segundos", tag: "6 SEGUNDOS",
    headline: [{ t: "Rechazado" }, { t: "en segundos.", c: "#ef4444" }],
    sub: "El ATS decide antes de que el recruiter abra tu candidatura." },
  { ...EN, concepto: 4, name: "cv-4-seconds", tag: "6 SECONDS",
    headline: [{ t: "Rejected" }, { t: "in seconds.", c: "#ef4444" }],
    sub: "The ATS decides before the recruiter even opens your file." },
  // Concepto 5 — puntuación
  { ...ES, concepto: 5, name: "cv-5-puntuacion", tag: "PUNTUACIÓN ATS",
    headline: [{ t: "Tu CV tiene una nota" }, { t: "y no la conoces.", c: "#4ade80" }],
    sub: "Descúbrela gratis: análisis ATS en 24h por WhatsApp." },
  { ...EN, concepto: 5, name: "cv-5-score", tag: "ATS SCORE",
    headline: [{ t: "Your CV has a score" }, { t: "you've never seen.", c: "#4ade80" }],
    sub: "Find out free: ATS analysis in 24h via WhatsApp." },
  // Concepto 6 — embudo
  { ...ES, concepto: 6, name: "cv-6-embudo", tag: "EL FILTRO",
    headline: [{ t: "Muchos aplican." }, { t: "Pocos pasan.", c: "#22d3ee" }],
    sub: "Haz que tu CV esté entre los que salen del embudo." },
  { ...EN, concepto: 6, name: "cv-6-funnel", tag: "THE FILTER",
    headline: [{ t: "Many apply." }, { t: "Few get through.", c: "#22d3ee" }],
    sub: "Make sure your CV comes out of the funnel." },
];

// Verticales: mismos textos sobre concepto-N-v.png
const vertical = ads.map(a => ({
  ...a,
  vertical: true,
  name: a.name + "-story",
}));

for (const ad of [...ads, ...vertical]) await makeAd(ad);
console.log("Hecho. Revisa marketing/cv-ats/salida/");
