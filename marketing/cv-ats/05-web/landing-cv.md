# Dónde va en la web + copy de la landing

## Recomendación de ubicación

**Nueva ruta `app/cv-ats/page.tsx` → jorgecalleja.dev/cv-ats**, como landing independiente. No lo metas como quinta tarjeta en "Así lo arreglamos":

- Público distinto: la home vende B2B (dueños de negocio con web del Kit Digital); esto es B2C (candidatos). Mezclarlos diluye ambos mensajes y confunde a Google sobre de qué va tu home.
- Los anuncios deben apuntar **directo a /cv** (o a WhatsApp), nunca a la home: mensaje del anuncio = mensaje de la landing.
- En la home, solo un enlace discreto en el footer bajo "Servicios": "CVs que pasan los ATS →".

Detalles técnicos (mismo estándar que la home):
- Metadata propia + OG image propia (genera una con el concepto 5).
- Añadir `/cv-ats` a `app/sitemap.ts`.
- JSON-LD `Service` + `FAQPage`.
- Versión EN: con tu selector ES/EN actual, o ruta `/en/cv` si lo tienes por rutas.
- El píxel de Meta ya está (banner de cookies) → registra visitas a /cv-ats para retargeting.

## Copy de la landing — ES

**H1:** ¿Envías currículums y nadie te llama?

**Sub:** No es tu experiencia. El 75% de los CVs los descarta un software (ATS) antes de que los vea una persona. Mándame el tuyo, lo analizo gratis y te digo exactamente qué está fallando.

**CTA:** [Enviar mi CV por WhatsApp] · Análisis gratis en 24h

**Dolores (espejo de tu sección "¿Te suena algo de esto?"):**
1. *Aplicas a ofertas que encajan… y silencio.* — El ATS descartó tu CV por formato: columnas, tablas, iconos o un PDF que el software no puede leer.
2. *"Con tu perfil, ya te habrían llamado".* — Tu experiencia es buena; lo que falla es cómo la lee la máquina. Sin las palabras clave de la oferta, para el filtro no existes.
3. *Llevas años sin tocar el CV.* — Lo que funcionaba en 2015 hoy no pasa el primer filtro. Los ATS leen estructura, no diseño bonito.

**Cómo trabajo (idéntico patrón a la home):**
1. Me mandas tu CV por WhatsApp
2. Análisis ATS gratis en 24h: puntuación y qué falla
3. Precio cerrado según lo que necesites
4. Entrega en 48h con informe antes/después

**Paquetes:** (ver `04-oferta/oferta-y-precios.md`) — 49€ / 79€ / 129€

**Diferencial:** Soy desarrollador: sé cómo parsea un ATS por dentro. No te vendo una plantilla de coach; optimizo tu CV para el software y para el humano que viene después, con puntuación medible antes y después.

**FAQ sugeridas:** ¿Qué es un ATS? / ¿Cómo sé si mi CV no pasa el filtro? / ¿Cuánto cuesta? / ¿Cuánto se tarda? / ¿Funciona para mi sector? / ¿Y si ya tengo CV en inglés?

## Landing copy — EN

**H1:** Sending CVs and hearing nothing back?

**Sub:** It's not your experience. 75% of resumes are rejected by software (ATS) before a human sees them. Send me yours — I'll analyse it free and tell you exactly what's failing.

**CTA:** [Send my CV on WhatsApp] · Free analysis in 24h

**Pains:** same three as ES, translated.
**Process:** WhatsApp → free 24h ATS check → fixed quote → 48h delivery with before/after report.
**Packages:** ATS-proof CV tailored to one job post €49 / CV + cover letter (2 job posts) €79 / Total Visibility (CV + letter + LinkedIn) €129. English version of any package +€25.
