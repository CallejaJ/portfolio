// Generador extras CV-ATS: historias 9:16, miniatura de destacado y frames de reel
// Uso: node marketing/cv-ats/gen-cv-extras.mjs   (desde la raíz del repo)
// Luego los reels: ver comandos ffmpeg al final del script (o gen-cv-reel.sh)
import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync } from "fs";

const DIR = "marketing/cv-ats";
const IN = ["06-fondos", "fondos"].map((d) => `${DIR}/${d}`).find(existsSync);
const files = IN ? readdirSync(IN).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)) : [];
const W = 1080, H = 1920;

const findFondo = (n) => {
  const f = files.find((f) => (f.match(/\d+/g) || []).includes(String(n)));
  return f ? `${IN}/${f}` : null;
};

const faro = (x, y, s) => `
<g transform="translate(${x},${y}) scale(${s})">
  <linearGradient id="fl${x}" x1="24" y1="4" x2="24" y2="40" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#9333ea"/>
  </linearGradient>
  <path d="M20 13 L2 5 L2 12 Z" fill="#22d3ee" opacity="0.55"/>
  <path d="M28 13 L46 5 L46 12 Z" fill="#22d3ee" opacity="0.55"/>
  <path d="M18.5 10 L29.5 10 L24 3.5 Z" fill="url(#fl${x})"/>
  <rect x="20" y="10" width="8" height="5.5" rx="1.2" fill="#0f0a1e"/>
  <circle cx="24" cy="12.8" r="2.1" fill="#22d3ee"/>
  <rect x="17.8" y="15.2" width="12.4" height="1.8" rx="0.9" fill="#e9e4f8" opacity="0.3"/>
  <path d="M19 17 L29 17 L31.5 40 L16.5 40 Z" fill="url(#fl${x})"/>
  <path d="M18.45 22 L29.55 22 L30 26 L18 26 Z" fill="#e9e4f8" opacity="0.9"/>
  <path d="M17.5 31 L30.5 31 L30.95 35 L17.05 35 Z" fill="#e9e4f8" opacity="0.9"/>
  <rect x="22.4" y="35.5" width="3.2" height="4.5" rx="1.5" fill="#0f0a1e"/>
  <rect x="14.5" y="40" width="19" height="3" rx="1.5" fill="#e9e4f8" opacity="0.35"/>
</g>`;

const whatsapp = (x, y, s) => `
<g transform="translate(${x},${y}) scale(${s})">
  <path fill="white" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
</g>`;

const textBlock = ({ tag, headline, sub, cta, phone }) => {
  const base = H - 494; // más aire abajo para el sticker de enlace en stories
  const hlLines = headline.map((l, i) =>
    `<text x="60" y="${base + i * 74}" font-family="Liberation Sans" font-size="68" font-weight="bold" fill="${l.c || "white"}">${l.t}</text>`
  ).join("");
  return `
    ${faro(60, 60, 1.4)}
    <text x="135" y="104" font-family="Liberation Sans" font-size="32" font-weight="bold" fill="#e9e4f8">jorgecalleja.dev/cv</text>
    <rect x="60" y="${base - 160}" width="${tag.length * 17 + 44}" height="52" rx="26" fill="#9333ea"/>
    <text x="82" y="${base - 125}" font-family="Liberation Sans" font-size="26" font-weight="bold" fill="white">${tag}</text>
    ${hlLines}
    <text x="62" y="${base + headline.length * 74 + 2}" font-family="Liberation Sans" font-size="30" fill="#d8cff0">${sub}</text>
    <rect x="60" y="${H - 238}" width="500" height="86" rx="43" fill="#25D366"/>
    ${whatsapp(104, H - 216, 1.85)}
    <text x="347" y="${H - 186}" font-family="Liberation Sans" font-size="29" font-weight="bold" fill="white" text-anchor="middle">${cta}</text>
    <text x="592" y="${H - 186}" font-family="Liberation Sans" font-size="25" fill="#d8cff0">${phone}</text>`;
};

async function makeStory(ad, outDir) {
  const src = findFondo(ad.concepto);
  if (!src) { console.log("SKIP concepto", ad.concepto); return; }
  const photo = await sharp(src).resize(W, H, { fit: "cover" }).toBuffer();
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#150d26" stop-opacity="0.15"/>
        <stop offset="0.45" stop-color="#150d26" stop-opacity="0.4"/>
        <stop offset="1" stop-color="#150d26" stop-opacity="0.97"/>
      </linearGradient>
      <linearGradient id="topfade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#150d26" stop-opacity="0.85"/>
        <stop offset="1" stop-color="#150d26" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#dark)"/>
    <rect width="${W}" height="240" fill="url(#topfade)"/>
    ${textBlock(ad)}
  </svg>`;
  mkdirSync(outDir, { recursive: true });
  await sharp(photo).composite([{ input: Buffer.from(overlay) }]).png().toFile(`${outDir}/${ad.name}.png`);
  console.log("OK story", ad.name);
}

// Historia de oferta (sin fondo IA, solo diseño)
async function makeOfertaStory(lang, outDir) {
  const es = lang === "es";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <radialGradient id="bg" cx="0.5" cy="0.38" r="1">
        <stop offset="0" stop-color="#3f2d6b"/>
        <stop offset="0.55" stop-color="#1e1b4b"/>
        <stop offset="1" stop-color="#0f0a1e"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    ${faro(60, 60, 1.4)}
    <text x="135" y="104" font-family="Liberation Sans" font-size="32" font-weight="bold" fill="#e9e4f8">jorgecalleja.dev/cv</text>
    <!-- Documento con check -->
    <g transform="translate(390,430)">
      <rect x="0" y="0" width="300" height="400" rx="24" fill="none" stroke="#e9e4f8" stroke-width="14"/>
      <line x1="60" y1="90" x2="240" y2="90" stroke="#e9e4f8" stroke-width="14" stroke-linecap="round" opacity="0.75"/>
      <line x1="60" y1="160" x2="240" y2="160" stroke="#e9e4f8" stroke-width="14" stroke-linecap="round" opacity="0.75"/>
      <line x1="60" y1="230" x2="170" y2="230" stroke="#e9e4f8" stroke-width="14" stroke-linecap="round" opacity="0.75"/>
      <circle cx="240" cy="330" r="90" fill="#4ade80"/>
      <path d="M195 330 L228 363 L290 295" stroke="#0f0a1e" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="540" y="1080" font-family="Liberation Sans" font-size="72" font-weight="bold" fill="white" text-anchor="middle">${es ? "¿Tu CV pasa" : "Does your CV"}</text>
    <text x="540" y="1165" font-family="Liberation Sans" font-size="72" font-weight="bold" fill="#fbbf24" text-anchor="middle">${es ? "el filtro?" : "beat the filter?"}</text>
    <text x="540" y="1260" font-family="Liberation Sans" font-size="34" fill="#d8cff0" text-anchor="middle">${es ? "El 75% de los CVs los descarta un software." : "75% of CVs are rejected by software."}</text>
    <text x="540" y="1310" font-family="Liberation Sans" font-size="34" fill="#d8cff0" text-anchor="middle">${es ? "Descubre gratis si el tuyo pasa." : "Find out free if yours passes."}</text>
    <rect x="240" y="${H - 470}" width="600" height="96" rx="48" fill="#25D366"/>
    ${whatsapp(290, H - 446, 2)}
    <text x="560" y="${H - 408}" font-family="Liberation Sans" font-size="33" font-weight="bold" fill="white" text-anchor="middle">${es ? "Análisis ATS GRATIS · 24h" : "FREE ATS check · 24h"}</text>
    <text x="540" y="${H - 320}" font-family="Liberation Sans" font-size="28" fill="#a5b4fc" text-anchor="middle">649 53 00 22</text>
  </svg>`;
  mkdirSync(outDir, { recursive: true });
  await sharp(Buffer.from(svg)).png().toFile(`${outDir}/story-oferta.png`);
  console.log("OK story-oferta", lang);
}

// Miniatura de historia destacada (estilo 10-destacados: 1080x1080, icono + etiqueta)
async function makeDestacado(outDir) {
  const S = 1080;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
    <defs>
      <radialGradient id="bg" cx="0.5" cy="0.42" r="0.85">
        <stop offset="0" stop-color="#3f2d6b"/>
        <stop offset="0.6" stop-color="#241a4d"/>
        <stop offset="1" stop-color="#150d26"/>
      </radialGradient>
    </defs>
    <rect width="${S}" height="${S}" fill="url(#bg)"/>
    <g transform="translate(400,260)">
      <rect x="0" y="0" width="280" height="380" rx="22" fill="none" stroke="#e9e4f8" stroke-width="26"/>
      <line x1="60" y1="90" x2="220" y2="90" stroke="#e9e4f8" stroke-width="24" stroke-linecap="round"/>
      <line x1="60" y1="160" x2="220" y2="160" stroke="#e9e4f8" stroke-width="24" stroke-linecap="round"/>
      <line x1="60" y1="230" x2="150" y2="230" stroke="#e9e4f8" stroke-width="24" stroke-linecap="round"/>
      <circle cx="235" cy="325" r="95" fill="#150d26" stroke="#e9e4f8" stroke-width="24"/>
      <path d="M190 325 L222 357 L285 290" stroke="#e9e4f8" stroke-width="26" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <text x="540" y="810" font-family="Liberation Sans" font-size="96" font-weight="bold" fill="#e9e4f8" text-anchor="middle" letter-spacing="6">CV · ATS</text>
  </svg>`;
  mkdirSync(outDir, { recursive: true });
  await sharp(Buffer.from(svg)).png().toFile(`${outDir}/destacado-cv-ats.png`);
  console.log("OK destacado");
}

const ES = { cta: "Análisis ATS GRATIS · 24h", phone: "649 53 00 22" };
const EN = { cta: "FREE ATS check · 24h", phone: "649 53 00 22" };

const stories = {
  es: [
    { ...ES, concepto: 1, name: "story-1-robot", tag: "FILTROS ATS",
      headline: [{ t: "Tu CV lo lee un robot" }, { t: "antes que un humano.", c: "#fbbf24" }],
      sub: "El 75% se descarta sin que nadie lo vea." },
    { ...ES, concepto: 3, name: "story-2-monton", tag: "100 CANDIDATOS",
      headline: [{ t: "¿Por qué siempre" }, { t: "eligen a otros?", c: "#fbbf24" }],
      sub: "De 100 CVs, la mayoría no llega a ojos humanos." },
    { ...ES, concepto: 4, name: "story-3-segundos", tag: "6 SEGUNDOS",
      headline: [{ t: "Rechazado" }, { t: "en segundos.", c: "#ef4444" }],
      sub: "El ATS decide antes que el recruiter." },
    { ...ES, concepto: 2, name: "story-4-antes-despues", tag: "ANTES / DESPUÉS",
      headline: [{ t: "Mismo candidato." }, { t: "Distinto resultado.", c: "#4ade80" }],
      sub: "La diferencia es cómo lo lee el software." },
    { ...ES, concepto: 5, name: "story-5-puntuacion", tag: "PUNTUACIÓN ATS",
      headline: [{ t: "Tu CV tiene una nota" }, { t: "y no la conoces.", c: "#4ade80" }],
      sub: "Descúbrela gratis en 24h por WhatsApp." },
  ],
  en: [
    { ...EN, concepto: 1, name: "story-1-robot", tag: "ATS FILTERS",
      headline: [{ t: "A robot reads your CV" }, { t: "before any human.", c: "#fbbf24" }],
      sub: "75% are rejected before anyone sees them." },
    { ...EN, concepto: 3, name: "story-2-pile", tag: "100 APPLICANTS",
      headline: [{ t: "Why do they always" }, { t: "pick someone else?", c: "#fbbf24" }],
      sub: "Out of 100 CVs, most never reach human eyes." },
    { ...EN, concepto: 4, name: "story-3-seconds", tag: "6 SECONDS",
      headline: [{ t: "Rejected" }, { t: "in seconds.", c: "#ef4444" }],
      sub: "The ATS decides before the recruiter." },
    { ...EN, concepto: 2, name: "story-4-before-after", tag: "BEFORE / AFTER",
      headline: [{ t: "Same candidate." }, { t: "Different outcome.", c: "#4ade80" }],
      sub: "The difference is how the software reads it." },
    { ...EN, concepto: 5, name: "story-5-score", tag: "ATS SCORE",
      headline: [{ t: "Your CV has a score" }, { t: "you've never seen.", c: "#4ade80" }],
      sub: "Find out free in 24h via WhatsApp." },
  ],
};

for (const lang of ["es", "en"]) {
  const dir = `${DIR}/salida/02-historias/${lang}`;
  for (const ad of stories[lang]) await makeStory(ad, dir);
  await makeOfertaStory(lang, dir);
}
await makeDestacado(`${DIR}/salida/03-destacado`);
console.log("Hecho.");
