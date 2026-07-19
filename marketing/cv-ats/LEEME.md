# CV que pasan los ATS — nueva rama de negocio

Material de campaña Meta (FB + IG) para el servicio de optimización de CVs para ATS. Misma mecánica que la rama web: gancho gratuito ("análisis ATS gratis en 24h") → WhatsApp → presupuesto cerrado.

## Estructura

- `01-prompts-nano-banana/` — prompts para generar los fondos de las creatividades con Nano Banana (paleta de marca). Guarda los resultados en `fondos/`.
- `fondos/` — aquí van las imágenes generadas con Nano Banana (`concepto-1.png` … `concepto-6.png`, y `-v` para verticales).
- `02-copies/` — textos de anuncio para Meta Ads en ES y EN (textos principales, titulares, descripciones, CTAs).
- `03-campana-meta/` — estructura de campaña, segmentación y presupuesto.
- `04-oferta/` — definición de la oferta: gancho, paquetes y precios.
- `05-web/` — dónde ubicarlo en jorgecalleja.dev + copy de la landing ES/EN.
- `gen-cv-ads.mjs` — generador que monta los textos overlay (ES/EN) sobre los fondos, con tu marca (faro, tag, CTA WhatsApp). Mismo pipeline que `07-generadores`.

## Flujo de trabajo

1. Genera los fondos con los prompts de `01-prompts-nano-banana/` y guárdalos en `fondos/`.
2. Ejecuta `node marketing/cv-ats/gen-cv-ads.mjs` (requiere `npm i sharp`).
3. Salen las creatividades finales en `salida/es/` y `salida/en/`, listas para Meta Ads.
4. Copies para el administrador de anuncios: `02-copies/`.
