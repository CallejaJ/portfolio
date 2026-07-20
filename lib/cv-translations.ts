// lib/cv-translations.ts
// Traducciones de la landing /cv — CVs que pasan los ATS
// Estructura compatible con ProcessSection, FaqSection, FloatingWhatsApp,
// MobileCtaBar y CookieConsent (mismas claves que lib/translations.ts).

export const cvTranslations = {
  es: {
    whatsappMessage:
      "Hola Jorge, ¿me analizas el CV para ver si pasa los ATS?",
    contact: "Análisis ATS gratis por WhatsApp",
    hero: {
      badge: "Optimización de CV · Respuesta en menos de 24h",
      title: "¿Envías currículums y nadie te llama?",
      description:
        "No es tu experiencia. El 75% de los CVs los descarta un software (ATS) antes de que los vea una persona: columnas, tablas, iconos o un PDF mal exportado bastan para quedar fuera. Mándame el tuyo, lo analizo gratis y te digo exactamente qué está fallando.",
      cta: "Enviar mi CV por WhatsApp",
      stats: [
        { value: "75%", label: "de CVs descartados por software" },
        { value: "6 seg", label: "mira un recruiter tu CV" },
        { value: "24h", label: "tu análisis ATS gratuito" },
        { value: "0€", label: "saber qué le pasa a tu CV" },
      ],
    },
    pains: {
      title: "¿Te suena algo de esto?",
      subtitle:
        "Si llevas semanas aplicando a ofertas que encajan contigo y solo recibes silencio, probablemente sea por alguna de estas razones.",
      items: [
        {
          title: "Aplicas a ofertas que encajan… y silencio",
          desc: "El ATS descartó tu CV por formato: columnas, tablas, iconos o un PDF que el software no puede leer. El recruiter nunca llegó a verlo.",
        },
        {
          title: "«Con tu perfil, ya te habrían llamado»",
          desc: "Tu experiencia es buena; lo que falla es cómo la lee la máquina. Sin las palabras clave de la oferta, para el filtro no existes.",
        },
        {
          title: "Llevas años sin tocar el CV",
          desc: "Lo que funcionaba en 2015 hoy no pasa el primer filtro. Los ATS leen estructura, no diseño bonito.",
        },
      ],
    },
    process: {
      title: "Cómo trabajo",
      subtitle: "Cuatro pasos. Cero sorpresas.",
      steps: [
        {
          title: "Me mandas tu CV por WhatsApp",
          desc: "En PDF o Word, tal y como lo estés enviando ahora. Si quieres adaptarlo a una oferta concreta, mándame también el enlace o el texto de esa oferta. Sin formularios ni registros.",
        },
        {
          title: "Análisis ATS gratis en 24h",
          desc: "Lo paso por el mismo tipo de software que usan las empresas y te mando tu puntuación: qué bloquea el parseo y qué keywords faltan. Gratis y sin compromiso.",
        },
        {
          title: "Precio cerrado",
          desc: "Si quieres que lo arregle, te digo qué paquete encaja y cuánto cuesta. Lo que acordamos es lo que pagas.",
        },
        {
          title: "Entrega en 48h con informe",
          desc: "Recibes tu CV optimizado y el informe antes/después con la puntuación: mejora medible, no promesas.",
        },
      ],
    },
    packages: {
      title: "Paquetes y precios",
      subtitle: "Precios cerrados, sin letra pequeña.",
      popular: "Más elegido",
      items: [
        {
          name: "CV que pasa el filtro",
          price: "49€",
          desc: "Tu CV reescrito y adaptado a la oferta que tú elijas. Un CV genérico no convierte.",
          features: [
            "Formato ATS-friendly: una columna, jerarquía limpia, PDF parseable",
            "Adaptado a una oferta concreta: me envías la oferta y extraigo sus keywords",
            "Logros con métricas, no listas de tareas",
            "Entrega en 48h + una ronda de cambios",
          ],
          highlighted: false,
        },
        {
          name: "CV + Carta",
          price: "79€",
          desc: "Aplicas «armado»: CV y carta alineados con la misma oferta.",
          features: [
            "Todo lo del paquete anterior",
            "Carta de presentación adaptada a esa oferta",
            "Segunda oferta objetivo incluida (CV adaptado a dos candidaturas)",
            "Entrega en 48-72h",
          ],
          highlighted: true,
        },
        {
          name: "Pack Visibilidad Total",
          price: "129€",
          desc: "No solo pasas filtros: también te encuentran los recruiters.",
          features: [
            "Todo lo del paquete anterior",
            "Optimización completa de LinkedIn: titular, extracto y keywords",
            "Recomendaciones de foto y portada",
            "Entrega en 3-5 días",
          ],
          highlighted: false,
        },
      ],
      extras:
        "Extras: versión en inglés de cualquier paquete +25€ · oferta objetivo adicional +15€",
      cta: "Empezar gratis",
    },
    why: {
      title: "¿Por qué conmigo?",
      text: "Soy desarrollador web: sé cómo parsea un ATS por dentro, porque trabajo con software así todos los días. No te vendo una plantilla de coach; optimizo tu CV para el software y para el humano que viene después, con puntuación medible antes y después. Igual que mido mis webs con un 99/100 en Google, tu CV sale con su nota.",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Respuestas directas, sin rodeos.",
      items: [
        {
          q: "¿Qué es un ATS?",
          a: "Applicant Tracking System: el software que usan la mayoría de empresas y portales de empleo (InfoJobs, LinkedIn, Workday…) para filtrar candidaturas. Lee tu CV, extrae los datos y decide si llegas a la siguiente fase. Si no puede leerlo bien, te descarta automáticamente.",
        },
        {
          q: "¿Cómo sé si mi CV no pasa el filtro?",
          a: "La señal clásica: aplicas a ofertas que encajan con tu perfil y no recibes ni una llamada. Las causas más comunes son columnas, tablas, iconos, encabezados dentro de imágenes o PDFs exportados como imagen. Mándamelo y en 24h te digo gratis si pasa y qué falla.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "El análisis es gratis. Si quieres que lo arregle: CV optimizado y adaptado a una oferta concreta 49€, CV + carta 79€, y el pack completo con LinkedIn 129€. Precio cerrado, sin sorpresas.",
        },
        {
          q: "¿Cuánto se tarda?",
          a: "El análisis gratuito, 24h. El CV optimizado, 48h desde que confirmamos. El pack completo con LinkedIn, entre 3 y 5 días.",
        },
        {
          q: "¿Funciona para mi sector?",
          a: "Sí. La estructura ATS-friendly es común a todos los sectores; lo que cambia son las keywords, y esas se extraen de las ofertas reales de tu sector y de la oferta concreta a la que apliques.",
        },
        {
          q: "¿Y si necesito el CV en inglés?",
          a: "Cualquier paquete tiene versión en inglés por 25€ más, con las keywords del mercado internacional, no una traducción literal.",
        },
      ],
    },
    finalCta: {
      title: "¿Le echo un vistazo a tu CV?",
      subtitle:
        "Mándamelo por WhatsApp y en 24h te digo tu puntuación ATS y qué está fallando. Gratis, sin compromiso y sin jerga técnica.",
      button: "Enviar mi CV por WhatsApp",
    },
    mobileBar: {
      text: "Análisis ATS gratis en 24h",
      button: "Enviar CV",
    },
    cookies: {
      text: "Uso cookies de medición (Meta) para mejorar mis anuncios. Solo se activan si aceptas.",
      accept: "Aceptar",
      reject: "Rechazar",
      more: "Más info",
    },
    backHome: "← Volver a jorgecalleja.dev",
  },
  en: {
    whatsappMessage: "Hi Jorge, could you check if my CV passes ATS filters?",
    contact: "Free ATS check via WhatsApp",
    hero: {
      badge: "CV optimisation · Reply within 24h",
      title: "Sending CVs and hearing nothing back?",
      description:
        "It's not your experience. 75% of resumes are rejected by software (ATS) before a human ever sees them: columns, tables, icons or a badly exported PDF are enough to be filtered out. Send me yours — I'll analyse it free and tell you exactly what's failing.",
      cta: "Send my CV on WhatsApp",
      stats: [
        { value: "75%", label: "of CVs rejected by software" },
        { value: "6 sec", label: "a recruiter spends on your CV" },
        { value: "24h", label: "your free ATS analysis" },
        { value: "€0", label: "to know what's wrong with your CV" },
      ],
    },
    pains: {
      title: "Sound familiar?",
      subtitle:
        "If you've spent weeks applying to roles that match your profile and all you get is silence, it's probably one of these.",
      items: [
        {
          title: "You apply to matching roles… and silence",
          desc: "The ATS rejected your CV because of its format: columns, tables, icons or a PDF the software can't read. The recruiter never saw it.",
        },
        {
          title: "“With your profile, they'd have called by now”",
          desc: "Your experience is fine; the problem is how the machine reads it. Without the job post's keywords, you don't exist for the filter.",
        },
        {
          title: "You haven't touched your CV in years",
          desc: "What worked in 2015 doesn't pass today's first filter. ATS software reads structure, not pretty design.",
        },
      ],
    },
    process: {
      title: "How I work",
      subtitle: "Four steps. Zero surprises.",
      steps: [
        {
          title: "Send me your CV on WhatsApp",
          desc: "PDF or Word, exactly as you're sending it now. If you want it tailored to a specific job post, send me the link or text of that post too. No forms, no sign-ups.",
        },
        {
          title: "Free ATS analysis in 24h",
          desc: "I run it through the same kind of software companies use and send you your score: what blocks the parsing and which keywords are missing. Free, no strings attached.",
        },
        {
          title: "Fixed quote",
          desc: "If you want it fixed, I'll tell you which package fits and what it costs. What we agree is what you pay.",
        },
        {
          title: "48h delivery with report",
          desc: "You get your optimised CV plus a before/after report with the score: measurable improvement, not promises.",
        },
      ],
    },
    packages: {
      title: "Packages & pricing",
      subtitle: "Fixed prices, no small print.",
      popular: "Most popular",
      items: [
        {
          name: "ATS-proof CV",
          price: "€49",
          desc: "Your CV rewritten and tailored to the job post you choose. A generic CV doesn't convert.",
          features: [
            "ATS-friendly format: single column, clean hierarchy, parseable PDF",
            "Tailored to one specific job post: you send me the post and I extract its keywords",
            "Achievements with metrics, not task lists",
            "48h delivery + one revision round",
          ],
          highlighted: false,
        },
        {
          name: "CV + Cover letter",
          price: "€79",
          desc: "Apply fully armed: CV and cover letter aligned with the same job post.",
          features: [
            "Everything in the previous package",
            "Cover letter tailored to that job post",
            "Second target job post included (CV tailored to two applications)",
            "48-72h delivery",
          ],
          highlighted: true,
        },
        {
          name: "Total Visibility Pack",
          price: "€129",
          desc: "You don't just pass filters — recruiters find you.",
          features: [
            "Everything in the previous package",
            "Full LinkedIn optimisation: headline, about section and keywords",
            "Photo and banner recommendations",
            "3-5 day delivery",
          ],
          highlighted: false,
        },
      ],
      extras:
        "Extras: English version of any package +€25 · additional target job post +€15",
      cta: "Start free",
    },
    why: {
      title: "Why me?",
      text: "I'm a web developer: I know how an ATS parses from the inside, because I work with software like this every day. I'm not selling you a coach's template; I optimise your CV for the software and for the human who comes next, with a measurable before/after score. Just like I measure my websites at 99/100 on Google, your CV ships with its grade.",
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Straight answers, no fluff.",
      items: [
        {
          q: "What is an ATS?",
          a: "Applicant Tracking System: the software most companies and job boards (LinkedIn, Workday, InfoJobs…) use to filter applications. It reads your CV, extracts the data and decides whether you move forward. If it can't read it properly, you're automatically rejected.",
        },
        {
          q: "How do I know my CV isn't passing the filter?",
          a: "The classic sign: you apply to roles that match your profile and never get a call. The most common causes are columns, tables, icons, headings inside images, or PDFs exported as images. Send it over and within 24h I'll tell you for free whether it passes and what's failing.",
        },
        {
          q: "How much does it cost?",
          a: "The analysis is free. If you want it fixed: CV optimised and tailored to a specific job post €49, CV + cover letter €79, full pack with LinkedIn €129. Fixed price, no surprises.",
        },
        {
          q: "How long does it take?",
          a: "The free analysis, 24h. The optimised CV, 48h from confirmation. The full pack with LinkedIn, 3 to 5 days.",
        },
        {
          q: "Does it work for my sector?",
          a: "Yes. The ATS-friendly structure is common to every sector; what changes are the keywords, and those come from real job posts in your field and the specific role you're targeting.",
        },
        {
          q: "What if I need my CV in English (or Spanish)?",
          a: "Any package has a second-language version for €25 more, with the keywords of that market — not a literal translation.",
        },
      ],
    },
    finalCta: {
      title: "Want me to take a look at your CV?",
      subtitle:
        "Send it on WhatsApp and within 24h I'll tell you your ATS score and what's failing. Free, no strings attached, no jargon.",
      button: "Send my CV on WhatsApp",
    },
    mobileBar: {
      text: "Free ATS check in 24h",
      button: "Send CV",
    },
    cookies: {
      text: "I use measurement cookies (Meta) to improve my ads. They only activate if you accept.",
      accept: "Accept",
      reject: "Reject",
      more: "More info",
    },
    backHome: "← Back to jorgecalleja.dev",
  },
};
