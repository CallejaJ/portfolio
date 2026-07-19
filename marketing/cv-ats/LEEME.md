# CV que pasan los ATS — nueva rama de negocio

Material de campaña Meta (FB + IG) para el servicio de optimización de CVs para ATS. Misma mecánica que la rama web: gancho gratuito ("análisis ATS gratis en 24h") → WhatsApp → presupuesto cerrado.

## Estructura

- `01-prompts-nano-banana/` — prompts para generar los fondos de las creatividades con Nano Banana (paleta de marca). Guarda los resultados en `06-fondos/`.
- `06-fondos/` — aquí van las imágenes generadas con Nano Banana (`concepto-1.png` … `concepto-6.png`, y `-v` para verticales).
- `02-copies/` — textos de anuncio para Meta Ads en ES y EN (textos principales, titulares, descripciones, CTAs).
- `03-campana-meta/` — estructura de campaña, segmentación y presupuesto.
- `04-oferta/` — definición de la oferta: gancho, paquetes y precios.
- `05-web/` — dónde ubicarlo en jorgecalleja.dev + copy de la landing ES/EN.
- `gen-cv-ads.mjs` — generador que monta los textos overlay (ES/EN) sobre los fondos, con tu marca (faro, tag, CTA WhatsApp). Mismo pipeline que `07-generadores`.

## Salida (material listo para publicar)

- `salida/01-posts-cuadrados/es|en` — 6 anuncios 1080×1080 para feed FB/IG y Meta Ads.
- `salida/02-historias/es|en` — 5 historias 1080×1920 + `story-oferta` (con espacio abajo para el sticker de enlace).
- `salida/03-destacado/` — miniatura de historia destacada "CV · ATS" (copiada también a `../10-destacados/`).
- `salida/04-reels/` — reel ES y EN (15,5 s, fundidos). Sin audio: añade la música desde la app de Instagram.

## Generadores

1. Fondos con los prompts de `01-prompts-nano-banana/` → guárdalos en `06-fondos/` (basta que el nombre contenga el nº de concepto).
2. `node marketing/cv-ats/gen-cv-ads.mjs` → posts cuadrados ES/EN.
3. `node marketing/cv-ats/gen-cv-extras.mjs` → historias + destacado.
4. `bash marketing/cv-ats/gen-cv-reel.sh` → reels (requiere ffmpeg).
5. Copies para el administrador de anuncios: `02-copies/`.
