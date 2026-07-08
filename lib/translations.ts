// lib/translations.ts

export type ProjectKey =
  | "web3ArcadeShield"
  | "gaslessSwap"
  | "usdtStaking"
  | "nftLaunchpad"
  | "realEstate"
  | "instagoal"
  | "smartMeterDashboard"
  | "brandGenesis"
  | "retroGamehub"
  | "mementoAcademy"
  | "cryptoTracker"
  | "docudid"
  | "anaRodriguez"
  | "tuvozamiga"
  | "tuvozamiga"
  | "bachataAlAireLibre"
  | "twitterBot"
  | "legacyWallet"
  | "precioLuzHora"
  | "nitrileAffair"
  | "timeBankOnChain";

export interface ProjectData {
  title: string;
  description: string;
  metrics: string;
}

// Ahora exporta las traducciones
export const translations = {
  es: {
    title: "¿Te hicieron la web con el Kit Digital y sigue sin traerte clientes?",
    description:
      "No eres el único. A miles de negocios les entregaron una web hecha en serie: sin estructura, invisible en Google y con botones que no funcionan desde el móvil. Mándame tu enlace, la reviso gratis y te digo exactamente qué está fallando.",
    highlight:
      "Auditoría gratuita en 48h · Sin compromiso · Te lo explico sin tecnicismos",
    heroBadge: "Desarrollador web · Málaga · Respuesta en menos de 24h",
    heroStats: [
      { value: "20+", label: "webs y apps entregadas" },
      { value: "99/100", label: "velocidad en Google" },
      { value: "48h", label: "tu auditoría gratuita" },
      { value: "0€", label: "saber qué le pasa a tu web" },
    ],
    viewProjects: "Ver trabajos reales",
    viewCV: "Ver CV",
    downloadCV: "Descargar CV",
    contact: "Hablamos por WhatsApp",
    whatsappMessage:
      "Hola Jorge, me gustaría que le echaras un vistazo a mi web: ",
    nav: {
      painPoints: "El problema",
      services: "La solución",
      projects: "Trabajos",
      process: "Cómo trabajo",
      contact: "Contacto",
    },
    painPoints: {
      title: "¿Te suena algo de esto?",
      subtitle:
        "Si te hicieron la web con el Kit Digital y la sensación es que “ahí está, pero no hace nada”, probablemente sea por alguna de estas razones.",
      cta: "¿Te suena? Cuéntamelo por WhatsApp",
      items: [
        {
          title: "Te entregaron la web… y ahí se quedó",
          desc: "Con el Kit Digital muchas agencias hicieron webs en cadena: una plantilla, tus datos pegados con prisa y a otra cosa. Sin estructura, sin estrategia y sin nadie a quien llamar cuando algo falla. Tú cumpliste con tu parte; tu web no está cumpliendo con la suya.",
        },
        {
          title: "En Google no apareces ni buscándote por tu nombre",
          desc: "Una web sin estructura es invisible para Google: sin títulos bien puestos, sin textos que respondan a lo que busca tu cliente, sin lo básico técnico. ¿El resultado? Quien te busca acaba encontrando a tu competencia. Eso se arregla, y te lo demuestro con datos.",
        },
        {
          title: "Desde el móvil, los botones no funcionan",
          desc: "Haz la prueba ahora mismo: abre tu web desde el móvil e intenta llamar o enviar el formulario. Si el botón no responde, cada visita es un cliente que se va. Hoy 7 de cada 10 personas entran desde el móvil; una web que solo funciona en ordenador es media web.",
        },
        {
          title: "Tarda tanto en cargar que la gente se va antes de verla",
          desc: "Más de 3 segundos de carga y la mitad de tus visitas cierran la pestaña. Google además penaliza las webs lentas y las manda al fondo de los resultados. Yo trabajo con un objetivo claro: 99 sobre 100 en velocidad. Medible y comprobable.",
        },
      ],
    },
    services: {
      title: "Así lo arreglamos",
      subtitle:
        "Sin tecnicismos y sin letra pequeña. Tres formas de trabajar juntos, según lo que necesite tu negocio.",
      items: [
        {
          title: "Rescate de tu web del Kit Digital",
          desc: "Audito lo que te entregaron, recupero lo que sirva (tu dominio, tus textos, tus fotos) y reconstruyo el resto: estructura, velocidad y botones que funcionan. Sales con una web que por fin hace su trabajo.",
        },
        {
          title: "Web nueva pensada para vender",
          desc: "Diseñada desde cero para convertir visitas en llamadas y mensajes: mensaje claro, carga instantánea y un camino directo al contacto desde cualquier dispositivo, sobre todo el móvil.",
        },
        {
          title: "Posicionamiento y velocidad",
          desc: "Optimizo tu web para que Google la entienda y la muestre: SEO técnico, contenido con estructura y velocidad 99/100. Con informe de antes y después, para que veas la mejora con tus propios ojos.",
        },
        {
          title: "Que las IAs te recomienden",
          desc: "Cada vez más clientes preguntan a ChatGPT o Perplexity en vez de buscar en Google. Preparo tu web para que las IAs la entiendan y la citen (GEO): datos estructurados, contenido citable y visibilidad donde tu competencia todavía no está.",
        },
      ],
    },
    faq: {
      title: "Preguntas que me hacen a diario",
      subtitle: "Respuestas directas, sin rodeos. Si la tuya no está, pregúntamela por WhatsApp.",
      items: [
        {
          q: "¿Puedes arreglar la web que me hicieron con el Kit Digital?",
          a: "En la mayoría de los casos, sí. Primero la audito gratis: si merece la pena rescatarla, recupero tu dominio, textos y fotos y reconstruyo lo que falla. Si sale más a cuenta hacerla nueva, te lo digo con la misma claridad y conservamos todo lo aprovechable.",
        },
        {
          q: "¿Por qué mi web no aparece en Google?",
          a: "Casi siempre es una combinación de tres cosas: falta de estructura (títulos y textos que Google no entiende), lentitud de carga y ausencia de lo básico técnico (sitemap, datos estructurados, metadatos). En la auditoría gratuita te digo exactamente cuál es tu caso, con datos.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "Depende del estado de tu web y de lo que necesites. Por eso la auditoría es gratis: primero te digo qué falla y luego te paso un presupuesto cerrado, sin compromiso y sin sorpresas. Lo que acordamos es lo que pagas.",
        },
        {
          q: "¿Cuánto se tarda?",
          a: "Una landing nueva suele estar lista en 1-2 semanas. Un rescate depende del estado de la web, pero siempre trabajo con plazo cerrado que conoces antes de empezar.",
        },
        {
          q: "¿Pierdo mi dominio o mi contenido?",
          a: "No. Tu dominio es tuyo y se conserva. Los textos, fotos y todo lo que funcione de tu web actual se aprovecha. Solo se reconstruye lo que te está costando clientes.",
        },
        {
          q: "¿Qué es eso de aparecer en ChatGPT?",
          a: "Cuando alguien pregunta a una IA por un servicio, la IA recomienda webs que puede entender y citar. Se llama GEO (Generative Engine Optimization): datos estructurados, contenido con respuestas claras y señales de confianza. Casi nadie lo está trabajando en España, y esta misma web lo lleva incorporado.",
        },
      ],
    },
    process: {
      title: "Cómo trabajo",
      subtitle: "Cuatro pasos. Cero sorpresas.",
      steps: [
        {
          title: "Me escribes por WhatsApp",
          desc: "Me mandas el enlace de tu web o me cuentas qué necesitas. Sin formularios eternos ni llamadas comerciales.",
        },
        {
          title: "Auditoría gratuita en 48h",
          desc: "Reviso tu web y te mando un informe claro: qué falla, por qué te está costando clientes y qué haría yo. Gratis y sin compromiso.",
        },
        {
          title: "Presupuesto cerrado",
          desc: "Si te encaja, te paso precio cerrado y plazo concreto. Lo que acordamos es lo que pagas. Ni un euro más.",
        },
        {
          title: "Entrega, y te enseño a usarla",
          desc: "Publico tu web funcionando en todos los dispositivos, la comprobamos juntos, y te enseño a tocar lo básico para que no dependas de nadie.",
        },
      ],
    },
    finalCta: {
      title: "¿Le echo un vistazo a tu web?",
      desc: "Mándame el enlace por WhatsApp y en 48h te digo exactamente qué está fallando y cuánto costaría arreglarlo. Gratis, sin compromiso y sin jerga técnica.",
      button: "Enviar mi web por WhatsApp",
      secondary: "O si lo prefieres, escríbeme un email",
    },
    featuredProjects: "Trabajos reales, resultados reales",
    featuredProjectsDesc:
      "Webs de negocios como el tuyo: abogados, transporte, clases, servicios. Entra y compruébalas tú mismo.",
    footer: {
      tagline:
        "Webs rápidas, con estructura y pensadas para conseguir clientes. Si tu web no despega, hablamos.",
      navTitle: "Secciones",
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
      madeIn: "Hecho en Málaga con Next.js",
      privacy: "Privacidad",
      cookies: "Cookies",
    },
    techStack: "Stack Tecnológico",
    techStackDesc: "Tecnologías y herramientas especializadas",
    experience: "Experiencia Profesional",
    experienceDesc: "Liderando proyectos Web3 innovadores",
    readyToInnovate: "¿Listo para Innovar?",
    transformVision:
      "Transformemos tu visión en realidad con tecnología blockchain y IA",
    sendEmail: "Enviar Email",
    web3Blockchain: "Web3 y Blockchain",
    frontendDev: "Desarrollo Frontend",
    aiAutomation: "IA y Automatización",
    backendDb: "Backend y Base de Datos",
    featuredProject: "Proyecto Destacado",
    developedWith: "Desarrollado con React, Next.js y Tailwind CSS.",
    quote: '"La IA no reemplaza mi criterio, lo potencia."',
    projects: {
      web3ArcadeShield: {
        title: "Web3 Arcade Shield - Juego Web3 con IA",
        description:
          "Un juego arcade Web3 seguro impulsado por IA con transacciones sin gas (Gasless). Juega, puntúa y registra tus logros on-chain sin pagar comisiones, protegido por detección de trampas en tiempo real con Genkit y Gemini AI.",
        metrics: "Gasless (ZeroDev) + AI Anti-Cheat + Privy Auth",
      },
      anaRodriguez: {
        title: "Ana Rodríguez Abogados - Plataforma de Servicios Legales",
        description:
          "Plataforma web profesional para despacho de abogados con sistema de reservas integrado, gestión de clientes y formularios de contacto. Implementa testing completo con Vitest, validación de formularios con Zod y componentes reutilizables con shadcn/ui.",
        metrics: "Sistema de reservas + Testing completo + UI moderna",
      },
      docudid: {
        title: "LEXTY - Plataforma de Asistente Legal con IA",
        description:
          "Plataforma SaaS de gestión documental legal con IA especializada (Alexia AI) que automatiza análisis de contratos, investigación jurisprudencial y redacción legal. Sistema multi-tenant diseñado para escalabilidad global con soporte multilenguaje.",
        metrics: "SaaS Multi-tenant + AI Integration + i18n System",
      },
      gaslessSwap: {
        title: "Gasless Swap - Intercambio DeFi sin Gas",
        description:
          "Plataforma DeFi avanzada que permite intercambios de tokens sin gas usando tecnología Account Abstraction, eliminando la fricción del onboarding para nuevos usuarios.",
        metrics: "Reducción de fricción en onboarding",
      },
      cryptoTracker: {
        title: "Memento Tracker - Portfolio de Criptomonedas",
        description:
          "Tracker profesional de portfolio de criptomonedas con precios en tiempo real via Binance API y WebSocket. Dashboard analytics completo con alertas inteligentes, gráficos interactivos y gestión de holdings avanzada.",
        metrics: "Real-time WebSocket + 8 cryptos soportadas",
      },
      usdtStaking: {
        title: "Dubai Staking - Plataforma de Inversión USDT",
        description:
          "Sistema completo de staking con contratos inteligentes ofreciendo 365% APY y gestión dinámica de fondos.",
        metrics: "365% APY con máxima seguridad",
      },
      nftLaunchpad: {
        title: "Lumina - Plataforma NFT en IOTA",
        description:
          "WebApp descentralizada para crear y explorar NFTs en IOTA Rebased Testnet. Ofrece una experiencia sin gas (Gasless), generador de avatares on-chain y colecciones exclusivas. Integra zkLogin para autenticación fluida con Google y almacenamiento en IPFS (Pinata).",
        metrics: "Gasless + NFT Busts Generator + zkLogin + Move Contracts",
      },
      realEstate: {
        title: "TokenBricks - Tokenización de Bienes Raíces",
        description:
          "Plataforma para propiedad fraccionada de bienes raíces usando blockchain, facilitando el acceso a inversiones mediante tokenización de activos.",
        metrics: "Mayor accesibilidad de inversión",
      },
      instagoal: {
        title: "Instagoal - Plataforma de Automatización Instagram",
        description:
          "Aplicación híbrida premium para crecimiento orgánico en Instagram. Combina frontend Next.js 16 de alto rendimiento con backend Python/FastAPI para automatización inteligente. Implementa estrategias 'Sniper' para segmentación precisa de audiencia, estadísticas en tiempo real vía WebSocket y UI glassmorphism con animaciones fluidas.",
        metrics: "Real-time analytics + WebSocket + Targeting inteligente",
      },
      smartMeterDashboard: {
        title: "Smart e-Meter - Dashboard de Energía",
        description:
          "Monitoreo en tiempo real de infraestructura energética inteligente. Visualiza el consumo, estado y salud de todos los medidores conectados.",
        metrics: "Consumo real + Estado de salud + Recharts",
      },
      brandGenesis: {
        title: "BrandGenesis AI - Consultor de Marca Web3",
        description:
          "Consultor de marca Web3 impulsado por Gemini 2.0 Flash. Chatea con un experto IA para diseñar tu identidad visual (Logos, Colores) y mintéala como NFT en Sepolia sin costes de gas. Acceso a +1500 iconos dinámicos, previsualizaciones instantáneas y almacenamiento on-chain permanente.",
        metrics: "Gemini 2.0 Flash + 1500+ Icons + Gasless Minting",
      },
      retroGamehub: {
        title: "Retro Gamehub - Centro de Juegos Clásicos",
        description:
          "Plataforma de juegos retro con integración de comentarios y rankings persistentes a través de Supabase. Permite a los usuarios interactuar y competir en un entorno clásico.",
        metrics: "Comunidad activa con 100+ usuarios",
      },
      mementoAcademy: {
        title: "Memento Academy - Plataforma Educativa Web3",
        description:
          "Plataforma educativa gratuita para Web3. Infraestructura cloud completa en AWS (S3, CloudFront CDN, SES, CloudWatch) gestionada con Terraform IaC y CI/CD automatizado con GitHub Actions (OIDC). Cursos premium, sistema de logros gamificado y autenticación Web3 con Privy.",
        metrics: "AWS + Terraform IaC + GitHub Actions CI/CD",
      },
      tuvozamiga: {
        title: "TUVOZAMIGA - Compañía Virtual",
        description:
          "Una aplicación web diseñada para combatir la soledad proporcionando una voz amigable y escucha activa impulsada por IA. Disponible 24/7 con latencia ultra baja y escucha empática.",
        metrics: "Next.js 16 + Orga AI + Ultra-low Latency",
      },
      bachataAlAireLibre: {
        title: "Bachata al Aire Libre - Landing Page de Alto Rendimiento",
        description:
          "Landing page moderna y optimizada para clases de bachata y salsa al aire libre en Málaga. Alcanza puntuaciones excepcionales en rendimiento, accesibilidad y SEO. Incluye PWA, sistema multi-idioma, reproductor de música, galería de fotos animada, testimonios reales y integración con Google Maps.",
        metrics: "Alto Rendimiento + PWA + Multi-idioma + SEO",
      },
      malagaPremiumTransfers: {
        title: "Málaga Premium Transfers - Web Corporativa y SEO",
        description:
          "Web de alto rendimiento para servicio exclusivo de transporte privado en la Costa del Sol. Desarrollada con Astro y Tailwind CSS 4 para máxima velocidad (SSG). Incluye sistema de enrutamiento SEO dinámico para generación automática de landing pages por destino, catálogo de flota detallado y reserva directa.",
        metrics: "SSG Astro + SEO Dinámico + UI High-End",
      },
      twitterBot: {
        title: "Bot de Twitter Memento Academy",
        description:
          "Bot automatizado de marketing en Twitter/X que gestiona publicaciones programadas, promociones de cursos y engagement con la comunidad. Desplegado en Koyeb con Express.js, utiliza Node-cron para la programación inteligente de contenido bilingüe (ES/EN).",
        metrics: "Automated Marketing + Twitter API v2 + Koyeb",
      },
      legacyWallet: {
        title: "Legacy Wallet - Herencia Blockchain con Safe",
        description:
          "Módulo Safe para gestión de herencias digitales que combina validación notarial PKI (X.509), quórum multi-firma de herederos y reclamaciones gasless patrocinadas vía Safe Relay Kit (ERC-4337). Contratos en Solidity con Foundry, oráculo Node.js y dApp React desplegada en Ethereum Sepolia Testnet.",
        metrics: "Safe Module + PKI X.509 + Gasless ERC-4337 + Quórum Multi-firma",
      },
      precioLuzHora: {
        title: "Precio Luz Hora - Tracker PVPC y Optimizador",
        description:
          "Plataforma en tiempo real para rastrear el precio de la luz en España (PVPC) mediante la API de REE. Incluye gráficos interactivos, recomendaciones de ahorro y calculadoras de facturas de luz y gas. Destaca por su rendimiento excepcional (Astro 5) y optimización SEO/GEO avanzada.",
        metrics: "Astro 5 + SEO Avanzado + Lighthouse 99/100",
      },
      nitrileAffair: {
        title: "Nitrile Affair - Sitio de Artista Electrónico",
        description:
          "Landing page de una sola página para el proyecto musical Nitrile Affair, con reproductores de SoundCloud y Bandcamp embebidos, galería con lightbox, videos de YouTube e historial de directos verificado en Resident Advisor. Sin frameworks ni build step, con modo claro/oscuro persistente.",
        metrics: "Cero dependencias + Modo claro/oscuro + Embeds verificados",
      },
      timeBankOnChain: {
        title: "Time Bank on Chain - Banco del Tiempo",
        description:
          "Evolución en Next.js 16 del banco del tiempo original (React/Vite + Express + MySQL): los usuarios intercambian servicios usando el tiempo como moneda. Server Actions, transferencias de créditos atómicas con Prisma, autenticación JWT en cookie httpOnly y validación con Zod. Roadmap: créditos como token ERC-20 on-chain.",
        metrics: "Next.js 16 + Prisma + Transferencias Atómicas + Roadmap ERC-20",
      },
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Web3 Frontend Developer",
        company: "Freelance",
        period: "may. 2025 - actualidad",
        location: "España · En remoto",
        achievements: [
          "Desarrollo de plataformas Web3 de alto rendimiento con Next.js, logrando puntuaciones de 99/100 en Core Web Vitals.",
          "Implementación de arquitectura 'Gasless' vía Privy, reduciendo la tasa de abandono en onboarding del 60% al 15%.",
          "Infraestructura cloud AWS (S3, CloudFront, SES, CloudWatch, SNS) gestionada con Terraform IaC. CI/CD automatizado con GitHub Actions y autenticación OIDC.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "LEXTY",
        period: "jun. 2025 - nov. 2025",
        location: "En remoto",
        achievements: [
          "Ingeniería de SaaS legal multi-tenant escalable para soportar +50 firmas de abogados simultáneas.",
          "Integración de IA Generativa (Alexia) reduciendo el tiempo de análisis de contratos en un 75% mediante prompts optimizados.",
          "Desarrollé sistema i18n con soporte para +40 idiomas y librería de componentes reutilizables. CI/CD automatizado con Vercel y GitHub Actions.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "ENO Network",
        period: "oct. 2024 - abr. 2025",
        location: "En remoto",
        achievements: [
          "Desarrollé el frontend de una plataforma Web3 con Next.js y React, integrando ERC-721 NFT launchpad y marketplace.",
          "Arquitectura de wallets multichain (IOTA, Arbitrum, ENO) implementando abstracción de proveedores para una experiencia unificada.",
          "Integración de WebSockets para actualizaciones de estado en tiempo real, optimizando el rendimiento en redes de alta latencia.",
        ],
      },
      {
        title: "Lead Developer",
        company: "Real Estate Start-Up",
        period: "abr. 2024 - oct. 2024",
        location: "Málaga · En remoto",
        achievements: [
          "Lideré un equipo de 3 desarrolladores facilitando la comunicación y resolución de conflictos en un entorno remoto.",
          "Stack: Next.js, Node.js, web3.js, Sequelize.",
          "Impulsé la adopción de metodologías Scrum y herramientas de IA, mejorando la colaboración y eficiencia del equipo.",
        ],
      },
      {
        title: "Frontend Web Developer",
        company: "Freelancer.com",
        period: "nov. 2023 - jun. 2024",
        location: "Reino Unido · En remoto",
        achievements: [
          "Desarrollo de aplicaciones web utilizando React.js y Node.js, adaptándome a los requisitos cambiantes de clientes internacionales.",
        ],
      },
      {
        title: "Frontend Web Developer",
        company: "TUBLIAN",
        period: "jul. 2023 - mar. 2024",
        location: "Ohio · En remoto",
        achievements: [
          "Contribución activa a proyectos Open Source en MERN Stack, colaborando con desarrolladores de diferentes husos horarios.",
          "Implementación de componentes con React Hooks y contenedorización con Docker, aprendiendo y aplicando nuevas tecnologías sobre la marcha.",
        ],
      },
      {
        title: "Full Stack Developer Bootcamp",
        company: "Polo Nacional de Contenidos Digitales de Málaga",
        period: "mar. 2023 - oct. 2023",
        location: "Málaga · Presencial",
        achievements: [
          "Bootcamp de 600 horas de desarrollo web.",
          "Proyectos finales: ecommerce con renderizado 3D para arquitectura residencial y plataforma de gestión de banco del tiempo.",
          "Stack: React, Node.js, Express, MySQL, MongoDB, Docker, Jest, Cypress. Metodologías: Scrum y Kanban.",
        ],
      },
    ],
  },
  en: {
    title: "Got a “Kit Digital” website that still brings you no clients?",
    description:
      "You're not alone. Thousands of businesses received mass-produced websites through Spain's Kit Digital grant: no structure, invisible on Google, and buttons that don't work on mobile. Send me your link — I'll review it for free and tell you exactly what's failing.",
    highlight: "Free audit in 48h · No strings attached · Plain-language report",
    heroBadge: "Web developer · Málaga, Spain · Replies within 24h",
    heroStats: [
      { value: "20+", label: "websites & apps delivered" },
      { value: "99/100", label: "Google speed score" },
      { value: "48h", label: "for your free audit" },
      { value: "€0", label: "to know what's wrong" },
    ],
    viewProjects: "See real work",
    viewCV: "View CV",
    downloadCV: "Download CV",
    contact: "Chat on WhatsApp",
    whatsappMessage: "Hi Jorge, I'd like you to take a look at my website: ",
    nav: {
      painPoints: "The problem",
      services: "The fix",
      projects: "Work",
      process: "How I work",
      contact: "Contact",
    },
    painPoints: {
      title: "Does any of this sound familiar?",
      subtitle:
        "If you got your website through the Kit Digital program and it feels like “it's there, but it does nothing”, it's probably one of these.",
      cta: "Sound familiar? Tell me on WhatsApp",
      items: [
        {
          title: "They delivered your website… and disappeared",
          desc: "Many agencies churned out Kit Digital websites in bulk: a template, your details pasted in a hurry, and on to the next one. No structure, no strategy, and nobody to call when something breaks. You did your part; your website isn't doing its.",
        },
        {
          title: "You don't show up on Google — not even by name",
          desc: "A website without structure is invisible to Google: no proper titles, no content answering what your customers search for, none of the technical basics. The result? People looking for you end up finding your competitors. It's fixable — and I'll prove it with data.",
        },
        {
          title: "On mobile, the buttons simply don't work",
          desc: "Try it right now: open your website on your phone and tap the call button or submit the form. If nothing happens, every visit is a customer walking away. 7 out of 10 people browse on mobile today; a website that only works on desktop is half a website.",
        },
        {
          title: "It loads so slowly people leave before seeing it",
          desc: "Past 3 seconds of loading, half your visitors close the tab. Google also penalizes slow websites and buries them in the results. I work with one clear target: 99 out of 100 speed. Measurable and verifiable.",
        },
      ],
    },
    services: {
      title: "Here's how we fix it",
      subtitle:
        "No jargon, no fine print. Three ways to work together, depending on what your business needs.",
      items: [
        {
          title: "Rescue your Kit Digital website",
          desc: "I audit what you were given, keep what's worth keeping (your domain, copy, photos) and rebuild the rest: structure, speed, and buttons that actually work. You end up with a website that finally does its job.",
        },
        {
          title: "A new website built to sell",
          desc: "Designed from scratch to turn visits into calls and messages: a clear message, instant loading, and a direct path to contact from any device — especially mobile.",
        },
        {
          title: "Search ranking & speed",
          desc: "I optimize your website so Google understands and surfaces it: technical SEO, structured content, and 99/100 speed. With a before/after report so you see the improvement with your own eyes.",
        },
        {
          title: "Get recommended by AIs",
          desc: "More and more clients ask ChatGPT or Perplexity instead of searching Google. I prepare your website so AIs understand and cite it (GEO): structured data, quotable content, and visibility where your competitors aren't yet.",
        },
      ],
    },
    faq: {
      title: "Questions I get every day",
      subtitle: "Straight answers, no fluff. If yours isn't here, ask me on WhatsApp.",
      items: [
        {
          q: "Can you fix the website I got through the Kit Digital program?",
          a: "In most cases, yes. First I audit it for free: if it's worth rescuing, I keep your domain, copy and photos and rebuild what's failing. If starting fresh makes more sense, I'll tell you just as clearly — and we keep everything that's usable.",
        },
        {
          q: "Why doesn't my website show up on Google?",
          a: "It's almost always a combination of three things: missing structure (titles and content Google can't understand), slow loading, and missing technical basics (sitemap, structured data, metadata). The free audit tells you exactly which applies to you, with data.",
        },
        {
          q: "How much does it cost?",
          a: "It depends on the state of your website and what you need. That's why the audit is free: first I tell you what's failing, then you get a fixed quote — no strings, no surprises. What we agree is what you pay.",
        },
        {
          q: "How long does it take?",
          a: "A new landing page is usually ready in 1-2 weeks. A rescue depends on the website's condition, but I always work with a fixed deadline you know before we start.",
        },
        {
          q: "Do I lose my domain or my content?",
          a: "No. Your domain is yours and stays yours. The copy, photos and everything that works on your current website is reused. Only what's costing you clients gets rebuilt.",
        },
        {
          q: "What's this about showing up in ChatGPT?",
          a: "When someone asks an AI for a service, the AI recommends websites it can understand and cite. It's called GEO (Generative Engine Optimization): structured data, content with clear answers, and trust signals. Almost nobody is working on this in Spain — and this very website has it built in.",
        },
      ],
    },
    process: {
      title: "How I work",
      subtitle: "Four steps. Zero surprises.",
      steps: [
        {
          title: "You message me on WhatsApp",
          desc: "Send me your website link or tell me what you need. No endless forms, no sales calls.",
        },
        {
          title: "Free audit within 48h",
          desc: "I review your website and send you a clear report: what's failing, why it's costing you clients, and what I'd do. Free, no strings attached.",
        },
        {
          title: "Fixed quote",
          desc: "If it works for you, I send a fixed price and a concrete deadline. What we agree is what you pay. Not a euro more.",
        },
        {
          title: "Delivery — and I teach you the basics",
          desc: "I launch your website working on every device, we test it together, and I show you how to handle the basics so you don't depend on anyone.",
        },
      ],
    },
    finalCta: {
      title: "Want me to take a look at your website?",
      desc: "Send me the link on WhatsApp and within 48h I'll tell you exactly what's failing and what it would cost to fix. Free, no strings attached, no tech jargon.",
      button: "Send my website on WhatsApp",
      secondary: "Or if you prefer, send me an email",
    },
    featuredProjects: "Real work, real results",
    featuredProjectsDesc:
      "Websites for businesses like yours: law firms, transport, classes, local services. Go ahead and try them yourself.",
    footer: {
      tagline:
        "Fast, well-structured websites built to win clients. If your website isn't taking off, let's talk.",
      navTitle: "Sections",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      madeIn: "Made in Málaga with Next.js",
      privacy: "Privacy",
      cookies: "Cookies",
    },
    techStack: "Tech Stack",
    techStackDesc: "Specialized technologies and tools",
    experience: "Professional Experience",
    experienceDesc: "Leading innovative Web3 projects",
    readyToInnovate: "Ready to Innovate?",
    transformVision:
      "Let's transform your vision into reality with blockchain and AI technology",
    sendEmail: "Send Email",
    web3Blockchain: "Web3 & Blockchain",
    frontendDev: "Frontend Development",
    aiAutomation: "AI & Automation",
    backendDb: "Backend & Database",
    featuredProject: "Featured Project",
    developedWith: "Built with React, Next.js and Tailwind CSS.",
    quote: '"AI doesn\'t replace my judgment, it enhances it."',
    projects: {
      web3ArcadeShield: {
        title: "Web3 Arcade Shield - AI-Powered Web3 Game",
        description:
          "A secure, AI-powered Web3 arcade game with gasless transactions. Play, score, and submit your achievements on-chain without paying gas fees—protected by real-time anti-cheat detection using Genkit and Gemini AI.",
        metrics: "Gasless (ZeroDev) + AI Anti-Cheat + Privy Auth",
      },
      anaRodriguez: {
        title: "Ana Rodríguez Abogados - Legal Services Platform",
        description:
          "Professional website for law firm with integrated booking system, client management and contact forms. Features comprehensive testing with Vitest, form validation with Zod and reusable components with shadcn/ui.",
        metrics: "Booking system + Full testing coverage + Modern UI",
      },
      docudid: {
        title: "LEXTY - AI Legal Assistant Platform",
        description:
          "Legal document management SaaS platform with specialized AI (Alexia AI) that automates contract analysis and legal drafting. Multi-tenant system designed for global scalability with multi-language support.",
        metrics: "Multi-tenant SaaS + AI Integration + i18n System",
      },
      gaslessSwap: {
        title: "Gasless Swap - Gasless DeFi Exchange",
        description:
          "Advanced DeFi platform enabling gas-free token exchanges using Account Abstraction technology, eliminating onboarding friction for new users.",
        metrics: "Reduced onboarding friction",
      },
      cryptoTracker: {
        title: "Memento Tracker - Crypto Portfolio Tracker",
        description:
          "Professional cryptocurrency portfolio tracker with real-time prices via Binance API and WebSocket. Complete analytics dashboard with smart alerts, interactive charts, and advanced holdings management.",
        metrics: "Real-time WebSocket + 8 supported cryptos",
      },
      usdtStaking: {
        title: "Dubai Staking - USDT Investment Platform",
        description:
          "Comprehensive staking smart contract system with 365% APY and dynamic fund management.",
        metrics: "365% APY with maximum security",
      },
      nftLaunchpad: {
        title: "Lumina - IOTA NFT Platform",
        description:
          "Decentralized application for creating and exploring NFTs on the IOTA Rebased Testnet. Features a gas-less user experience, on-chain avatar generator, and exclusive collections. Integrated with zkLogin for frictionless onboarding and IPFS (Pinata) storage.",
        metrics: "Gasless + NFT Busts Generator + zkLogin + Move Contracts",
      },
      realEstate: {
        title: "TokenBricks - Real Estate Tokenization",
        description:
          "Platform for fractional property ownership using blockchain, facilitating investment access through asset tokenization.",
        metrics: "Increased investment accessibility",
      },
      instagoal: {
        title: "Instagoal - Instagram Automation Platform",
        description:
          "Premium hybrid application for organic Instagram growth. Combines high-performance Next.js 16 frontend with Python/FastAPI backend for smart automation. Features 'Sniper' strategies for precise audience targeting, real-time statistics via WebSocket, and glassmorphism UI with smooth animations.",
        metrics: "Real-time analytics + WebSocket + Smart targeting",
      },
      smartMeterDashboard: {
        title: "Smart e-Meter - Energy Dashboard",
        description:
          "Real-time monitoring of smart energy infrastructure. View consumption, status, and health of all connected meters.",
        metrics: "Real-time consumption + Health status + Recharts",
      },
      brandGenesis: {
        title: "BrandGenesis AI - Web3 Brand Consultant",
        description:
          "A comprehensive Web3 Brand Consultant powered by Gemini 2.0 Flash. Chat with an expert AI to design your brand identity and mint it as an NFT—completely gasless. Features 1500+ on-demand icons, instant previews, and permanent on-chain storage on Sepolia.",
        metrics: "Gemini 2.0 Flash + 1500+ Icons + Gasless Minting",
      },
      retroGamehub: {
        title: "Retro Gamehub - Classic Games Center",
        description:
          "Retro gaming platform with persistent comments and rankings integrated via Supabase.",
        metrics: "Active community with 100+ users",
      },
      mementoAcademy: {
        title: "Memento Academy - Web3 Educational Platform",
        description:
          "Free educational platform for Web3 newcomers. Full AWS cloud infrastructure (S3, CloudFront CDN, SES, CloudWatch) managed with Terraform IaC and automated CI/CD via GitHub Actions with OIDC keyless auth. Premium courses, gamified achievements, and Web3 auth with Privy.",
        metrics: "AWS + Terraform IaC + GitHub Actions CI/CD",
      },
      tuvozamiga: {
        title: "TUVOZAMIGA - Virtual Companion",
        description:
          "A web application designed to combat loneliness by providing a friendly voice and active listening powered by AI. Always available 24/7 with ultra-low latency and empathetic listening.",
        metrics: "Next.js 16 + Orga AI + Ultra-low Latency",
      },
      bachataAlAireLibre: {
        title: "Bachata al Aire Libre - High-Performance Landing Page",
        description:
          "Modern and optimized landing page for outdoor bachata and salsa classes in Malaga. Achieves exceptional scores in performance, accessibility, and SEO. Includes PWA, multi-language system, music player, animated photo gallery, real testimonials, and Google Maps integration.",
        metrics: "High Performance + PWA + Multi-language + SEO",
      },
      malagaPremiumTransfers: {
        title: "Málaga Premium Transfers - Corporate & SEO Website",
        description:
          "High-performance website for an exclusive private transport service in Costa del Sol. Built with Astro and Tailwind CSS 4 for maximum speed (SSG). Features dynamic SEO routing for automatic landing page generation by destination, detailed fleet catalog, and direct booking.",
        metrics: "Astro SSG + Dynamic SEO + High-End UI",
      },
      twitterBot: {
        title: "Memento Academy Twitter Bot",
        description:
          "Automated Twitter/X marketing bot handling scheduled posts, course promotions, and community engagement. Deployed on Koyeb with Express.js, leveraging Node-cron for smart bilingual content scheduling (ES/EN).",
        metrics: "Automated Marketing + Twitter API v2 + Koyeb",
      },
      legacyWallet: {
        title: "Legacy Wallet - Blockchain Inheritance with Safe",
        description:
          "A Safe module for digital inheritance management combining notarial PKI validation (X.509), multi-signature heir quorum, and gasless sponsored claims via Safe Relay Kit (ERC-4337). Solidity contracts with Foundry, Node.js oracle, and React dApp deployed on Ethereum Sepolia Testnet.",
        metrics: "Safe Module + PKI X.509 + Gasless ERC-4337 + Multi-sig Quorum",
      },
      precioLuzHora: {
        title: "Precio Luz Hora - PVPC Tracker & Optimizer",
        description:
          "Real-time platform to track Spanish electricity prices (PVPC) using the official REE API. Features interactive charts, smart energy-saving recommendations, and comprehensive bill calculators. Built for exceptional performance with Astro 5 and advanced SEO/GEO optimization.",
        metrics: "Astro 5 + Advanced SEO + Lighthouse 99/100",
      },
      nitrileAffair: {
        title: "Nitrile Affair - Electronic Artist Website",
        description:
          "Single-page site for the electronic music project Nitrile Affair, featuring embedded SoundCloud and Bandcamp players, a lightbox gallery, YouTube videos, and a live performance history verified via Resident Advisor. Zero frameworks, no build step, with persistent light/dark mode.",
        metrics: "Zero dependencies + Light/Dark mode + Verified embeds",
      },
      timeBankOnChain: {
        title: "Time Bank on Chain - Time-Based Exchange",
        description:
          "Next.js 16 evolution of the original time bank (React/Vite + Express + MySQL): users exchange services using time as currency. Server Actions, atomic credit transfers with Prisma, JWT auth in httpOnly cookies, and Zod validation. Roadmap: time credits as an on-chain ERC-20 token.",
        metrics: "Next.js 16 + Prisma + Atomic Transfers + ERC-20 Roadmap",
      },
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Web3 Frontend Developer",
        company: "Freelance",
        period: "May 2025 - Present",
        location: "Spain · Remote",
        achievements: [
          "Developing high-performance Web3 platforms with Next.js, achieving 99/100 Core Web Vitals scores.",
          "Implemented 'Gasless' architecture via Privy, modifying the onboarding flow to reduce drop-off rates from 60% to 15%.",
          "Architected AWS cloud infrastructure (S3, CloudFront, SES, CloudWatch, SNS) managed with Terraform IaC. Automated CI/CD with GitHub Actions using OIDC keyless authentication.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "LEXTY",
        period: "Jun 2025 - Nov 2025",
        location: "Remote",
        achievements: [
          "Engineered a scalable multi-tenant legal SaaS capable of supporting 50+ law firms simultaneously.",
          "Integrated Generative AI (Alexia) reducing contract analysis time by 75% through optimized prompting pipelines.",
          "Built i18n system supporting 40+ languages and a reusable component library. Configured automated CI/CD pipelines with Vercel and GitHub Actions.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "ENO Network",
        period: "Oct 2024 - Apr 2025",
        location: "Remote",
        achievements: [
          "Built the frontend of a Web3 platform with Next.js and React, integrating an ERC-721 NFT launchpad and marketplace.",
          "Multichain wallet architecture (IOTA, Arbitrum, ENO) implementing provider abstraction for a unified experience.",
          "WebSocket integration for real-time state updates, optimizing performance in high-latency networks.",
        ],
      },
      {
        title: "Lead Developer",
        company: "Real Estate Start-Up",
        period: "Apr 2024 - Oct 2024",
        location: "Málaga · Remote",
        achievements: [
          "Led a team of 3 developers facilitating communication and conflict resolution in a remote environment.",
          "Stack: Next.js, Node.js, web3.js, Sequelize.",
          "Championed the adoption of Scrum methodologies and AI tools, improving team collaboration and efficiency.",
        ],
      },
      {
        title: "Frontend Web Developer",
        company: "Freelancer.com",
        period: "Nov 2023 - Jun 2024",
        location: "United Kingdom · Remote",
        achievements: [
          "Development of web applications using React.js and Node.js, adapting to changing requirements of international clients.",
        ],
      },
      {
        title: "Frontend Web Developer",
        company: "TUBLIAN",
        period: "Jul 2023 - Mar 2024",
        location: "Ohio · Remote",
        achievements: [
          "Active contribution to Open Source projects in MERN Stack, collaborating with developers across different time zones.",
          "Implementation of components with React Hooks and containerization with Docker, learning and applying new technologies on the fly.",
        ],
      },
      {
        title: "Full Stack Developer Bootcamp",
        company: "Polo Nacional de Contenidos Digitales de Málaga",
        period: "Mar 2023 - Oct 2023",
        location: "Málaga · On-site",
        achievements: [
          "600-hour web development bootcamp.",
          "Final projects: ecommerce with 3D rendering for residential architecture and a time bank management platform.",
          "Stack: React, Node.js, Express, MySQL, MongoDB, Docker, Jest, Cypress. Methodologies: Scrum and Kanban.",
        ],
      },
    ],
  },
};