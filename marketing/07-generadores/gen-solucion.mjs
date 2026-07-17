import sharp from "sharp";
const S = "/sessions/busy-inspiring-curie/mnt/portfolio/public/images/success";
const OUT = "/tmp/ads/out";

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

// pos: posición del recorte (top / centre) para encuadrar bien la cara
async function makeAd({ img, name, tag, headline, sub, cta, pos }) {
  const W = 1080, H = 1080;
  const photo = await sharp(`${S}/${img}`)
    .resize(W, H, { fit: "cover", position: pos || "centre" })
    .modulate({ saturation: 0.2, brightness: 0.95 })
    .tint({ r: 124, g: 58, b: 237 })
    .toBuffer();

  const hlLines = headline.map((l, i) =>
    `<text x="60" y="${700 + i * 74}" font-family="Liberation Sans" font-size="70" font-weight="bold" fill="${l.c || "white"}">${l.t}</text>`
  ).join("");

  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="dark" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#150d26" stop-opacity="0.1"/>
        <stop offset="0.45" stop-color="#150d26" stop-opacity="0.42"/>
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
    <text x="135" y="92" font-family="Liberation Sans" font-size="32" font-weight="bold" fill="#e9e4f8">jorgecalleja.dev</text>
    <rect x="60" y="540" width="${tag.length * 15 + 44}" height="50" rx="25" fill="#22d3ee"/>
    <text x="82" y="573" font-family="Liberation Sans" font-size="24" font-weight="bold" fill="#0f0a1e">${tag}</text>
    ${hlLines}
    <text x="62" y="${700 + headline.length * 74 + 2}" font-family="Liberation Sans" font-size="31" fill="#d8cff0">${sub}</text>
    <rect x="60" y="962" width="${cta.length * 18 + 150}" height="86" rx="43" fill="#25D366"/>
    ${whatsapp(104, 984, 1.85)}
    <text x="${145 + (cta.length * 18 + 150 - 85) / 2}" y="1014" font-family="Liberation Sans" font-size="30" font-weight="bold" fill="white" text-anchor="middle">${cta}</text>
  </svg>`;

  await sharp(photo).composite([{ input: Buffer.from(overlay), top: 0, left: 0 }]).png().toFile(`${OUT}/${name}.png`);
  console.log("OK", name);
}

const ads = [
  { img: "it-works.png", name: "sol-1-funciona", tag: "ASÍ SE VE", pos: "centre",
    headline: [{ t: "Una web que sí" }, { t: "trabaja para ti.", c: "#4ade80" }],
    sub: "Rápida, clara y lista para vender desde el primer día.",
    cta: "La quiero así" },
  { img: "clients-messages.png", name: "sol-2-mensajes", tag: "RESULTADO", pos: "top",
    headline: [{ t: "Despiertas y ya" }, { t: "tienes mensajes.", c: "#4ade80" }],
    sub: "Tu web capta clientes mientras tú haces tu trabajo.",
    cta: "Quiero eso" },
  { img: "first-google.png", name: "sol-3-google", tag: "SEO", pos: "centre",
    headline: [{ t: "El primero que ve" }, { t: "tu cliente: tú.", c: "#4ade80" }],
    sub: "Una web pensada para salir arriba en Google.",
    cta: "Quiero salir arriba" },
  { img: "customer-success2.png", name: "sol-4-clientes", tag: "TU NEGOCIO", pos: "centre",
    headline: [{ t: "Más clientes" }, { t: "en tu puerta.", c: "#4ade80" }],
    sub: "Menos tiempo persiguiéndolos, más tiempo atendiéndolos.",
    cta: "Hablamos" },
];
for (const a of ads) await makeAd(a);
