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
      "Auditoría gratuita en 24h · Sin compromiso · Te lo explico sin tecnicismos",
    heroBadge: "Desarrollador web · Málaga · Respuesta en menos de 24h",
    heroStats: [
      { value: "20+", label: "webs y apps entregadas" },
      { value: "99/100", label: "velocidad en Google" },
      { value: "24h", label: "tu auditoría gratuita" },
      { value: "0€", label: "saber qué le pasa a tu web" },
    ],
    viewProjects: "Ver trabajos reales",
    visitSite: "Ver la web",
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
          title: "Auditoría gratuita en 24h",
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
    testimonials: {
      title: "Lo que dicen mis clientes",
      reviewText: "¿Trabajamos juntos? Me ayudarías mucho dejando tu opinión.",
      reviewButton: "Deja tu reseña en Google",
      items: [
        {
          quote:
            "Necesitaba una web seria, que diera confianza y que mis clientes pudieran reservar cita sin llamar. Jorge la hizo rápido, me explicó todo sin tecnicismos y el resultado es justo lo que buscaba.",
          name: "Ana Rodríguez",
          business: "Ana Rodríguez Abogados · Toledo",
          url: "https://anarodriguezabogados.vercel.app",
        },
        {
          quote:
            "Nunca pensé que internet me generaría tantos clientes. Se han multiplicado los interesados en mis clases. Estoy muy feliz con el resultado.",
          name: "Carlos Yépez",
          business: "Bachata al Aire Libre · Málaga",
          url: "https://bachataalairelibre.com",
        },
      ],
    },
    caseStudy: {
      badge: "Caso real",
      title: "De invisible en Google a recibir reservas directas",
      client: "Málaga Premium Transfers · transporte privado en la Costa del Sol",
      story:
        "Un servicio de chófer privado con un problema clásico: los clientes no lo encontraban y las reservas llegaban por intermediarios que se llevaban comisión. Construimos una web donde cada destino tiene su propia página pensada para Google, con reserva directa por WhatsApp.",
      stats: [
        { value: "99/100", label: "velocidad en Google (Lighthouse)" },
        { value: "+30", label: "páginas de destino posicionándose" },
        { value: "0€", label: "en comisiones de intermediarios" },
      ],
      cta: "Quiero algo así para mi negocio",
    },
    about: {
      title: "Quién está detrás",
      name: "Jorge Calleja",
      role: "Desarrollador web · Málaga",
      paragraphs: [
        "Soy Jorge, desarrollador web en Málaga. Llevo años construyendo webs y aplicaciones para negocios reales: despachos, transporte, academias, artistas.",
        "Trabajo solo y eso es una ventaja para ti: hablas directamente con quien hace tu web, sin comerciales ni intermediarios. Te explico las cosas en tu idioma y te enseño a manejar lo básico para que no dependas de nadie.",
        "Si tu web no te está trayendo clientes, mándamela. Miro qué falla y te lo cuento claro, gratis.",
      ],
    },
    leadMagnet: {
      title: "¿Aún no quieres contratar a nadie? Llévate esto gratis",
      desc: "He preparado una checklist con las 10 cosas que tu web del Kit Digital debería tener y probablemente no tiene. Revísala tú mismo en 10 minutos.",
      button: "Descargar la checklist (PDF)",
      whatsapp: "¿Prefieres que revise yo tu web con la checklist en mano? Pídemelo por WhatsApp, es gratis.",
    },
    auditForm: {
      title: "¿Sin WhatsApp? Pide tu auditoría por email",
      desc: "Déjame la dirección de tu web y tu email, y en 24h te mando el informe.",
      urlPlaceholder: "https://tu-web.es",
      emailPlaceholder: "tu@email.com",
      button: "Pedir auditoría gratuita",
      sending: "Enviando…",
      success: "¡Recibido! En 24h tendrás tu informe en el email.",
      error: "No se pudo enviar. Escríbeme por WhatsApp o a hola@jorgecalleja.dev.",
    },
    mobileBar: {
      text: "Auditoría gratis en 24h",
      button: "WhatsApp",
    },
    cookies: {
      text: "Uso cookies de medición (Meta) para mejorar mis anuncios. Solo se activan si aceptas.",
      accept: "Aceptar",
      reject: "Rechazar",
      more: "Más info",
    },
    finalCta: {
      title: "¿Le echo un vistazo a tu web?",
      desc: "Mándame el enlace por WhatsApp y en 24h te digo exactamente qué está fallando y cuánto costaría arreglarlo. Gratis, sin compromiso y sin jerga técnica.",
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
      review: "Deja tu reseña",
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
        title: "Ana Rodríguez Abogados — Despacho de abogados",
        description:
          "Una web que trabaja sola: los clientes reservan cita online a cualquier hora, el formulario llega siempre y la imagen transmite la seriedad que un bufete necesita. Menos llamadas para agendar, más tiempo para ejercer.",
        metrics: "Reservas online 24/7",
      },
      docudid: {
        title: "LEXTY — Asistente legal con IA",
        description:
          "Plataforma para despachos donde la IA analiza contratos y redacta borradores en minutos en lugar de horas. Da servicio a decenas de despachos a la vez, en más de 40 idiomas, sin que el abogado toque nada técnico.",
        metrics: "75% menos tiempo por contrato",
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
        title: "Retro Gamehub — Sala de juegos online",
        description:
          "Una sala de juegos clásicos donde la gente compite, comenta y vuelve: rankings en vivo y una comunidad de más de 100 jugadores. La prueba de que una web puede ser un sitio al que apetece volver cada día.",
        metrics: "Comunidad de +100 jugadores",
      },
      mementoAcademy: {
        title: "Memento Academy — Academia online",
        description:
          "Academia digital gratuita con cursos, sistema de logros y comunidad. Montada sobre la nube de Amazon con infraestructura profesional: aguanta picos de alumnos sin caerse y los emails llegan siempre.",
        metrics: "Cursos + logros + emails automáticos",
      },
      tuvozamiga: {
        title: "TUVOZAMIGA — Compañía por voz con IA",
        description:
          "Una aplicación que conversa por voz con personas que pasan demasiado tiempo solas: escucha activa y charla empática a cualquier hora, con una interfaz 100% en español pensada para quien no se maneja con la tecnología.",
        metrics: "Conversación por voz 24/7",
      },
      bachataAlAireLibre: {
        title: "Bachata al Aire Libre — Clases de baile en Málaga",
        description:
          "Una landing que convierte curiosos en alumnos: carga al instante, suena la música, se ven las fotos y los testimonios reales, y el mapa te lleva a la clase. Disponible en varios idiomas para los alumnos extranjeros y se instala como app en el móvil.",
        metrics: "Carga instantánea + Multi-idioma",
      },
      malagaPremiumTransfers: {
        title: "Málaga Premium Transfers — Transporte privado",
        description:
          "Web construida para salir en Google: cada destino de la Costa del Sol tiene su propia página, generada automáticamente, que captura las búsquedas de ese trayecto. El cliente ve la flota y reserva directo, sin intermediarios ni comisiones.",
        metrics: "Una página por destino en Google",
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
        title: "Precio Luz Hora — Ahorro en la factura de la luz",
        description:
          "Web que muestra el precio de la luz hora a hora, directamente de la fuente oficial, y te dice cuándo poner la lavadora para pagar menos. Con calculadoras de factura y consejos de ahorro. Miles de visitas gracias a estar en primera página de Google.",
        metrics: "Precio de la luz en tiempo real",
      },
      nitrileAffair: {
        title: "Nitrile Affair — Web de artista musical",
        description:
          "La web de un artista electrónico con toda su música en un solo sitio: reproductores de SoundCloud y Bandcamp, vídeos, galería y su historial de directos verificado. Carga al instante en cualquier dispositivo.",
        metrics: "Toda su música en un solo enlace",
      },
      timeBankOnChain: {
        title: "Time Bank — Banco del tiempo",
        description:
          "Una comunidad donde los usuarios intercambian servicios usando el tiempo como moneda: das una hora de clases, recibes una hora de fontanería. Los créditos se transfieren de forma segura y el saldo nunca falla.",
        metrics: "Intercambio de servicios por horas",
      },
      outdoorBachata: {
        title: "Outdoor Bachata Málaga — Turismo de cruceros",
        description:
          "Web en inglés dirigida a los cruceristas que atracan en Málaga: bajan del barco y reservan una clase de bachata junto al puerto. El mismo negocio de baile, abierto a un público internacional que busca experiencias.",
        metrics: "Reservas de turistas internacionales",
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
    highlight: "Free audit in 24h · No strings attached · Plain-language report",
    heroBadge: "Web developer · Málaga, Spain · Replies within 24h",
    heroStats: [
      { value: "20+", label: "websites & apps delivered" },
      { value: "99/100", label: "Google speed score" },
      { value: "24h", label: "for your free audit" },
      { value: "€0", label: "to know what's wrong" },
    ],
    viewProjects: "See real work",
    visitSite: "Visit site",
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
          title: "Free audit within 24h",
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
    testimonials: {
      title: "What my clients say",
      reviewText: "Did we work together? A quick review would really help me out.",
      reviewButton: "Leave a Google review",
      items: [
        {
          quote:
            "I needed a serious website that inspired trust and let my clients book appointments without calling. Jorge built it fast, explained everything without jargon, and the result is exactly what I was looking for.",
          name: "Ana Rodríguez",
          business: "Ana Rodríguez Abogados · Toledo",
          url: "https://anarodriguezabogados.vercel.app",
        },
      ],
    },
    caseStudy: {
      badge: "Real case",
      title: "From invisible on Google to direct bookings",
      client: "Málaga Premium Transfers · private transport on the Costa del Sol",
      story:
        "A private chauffeur service with a classic problem: clients couldn't find it and bookings came through middlemen taking commissions. We built a website where every destination gets its own Google-ready page, with direct WhatsApp booking.",
      stats: [
        { value: "99/100", label: "Google speed score (Lighthouse)" },
        { value: "+30", label: "destination pages ranking" },
        { value: "€0", label: "in middleman commissions" },
      ],
      cta: "I want this for my business",
    },
    about: {
      title: "Who's behind this",
      name: "Jorge Calleja",
      role: "Web developer · Málaga, Spain",
      paragraphs: [
        "I'm Jorge, a web developer in Málaga. I've spent years building websites and apps for real businesses: law firms, transport, academies, artists.",
        "I work solo, and that's an advantage for you: you talk directly to the person building your website — no salespeople, no middlemen. I explain things in plain language and teach you the basics so you don't depend on anyone.",
        "If your website isn't bringing you clients, send it my way. I'll check what's failing and tell you straight, for free.",
      ],
    },
    leadMagnet: {
      title: "Not ready to hire anyone? Take this for free",
      desc: "I've put together a checklist of 10 things your Kit Digital website should have and probably doesn't. Review it yourself in 10 minutes.",
      button: "Download the checklist (PDF)",
      whatsapp: "Prefer me to review your website checklist in hand? Ask me on WhatsApp — it's free.",
    },
    auditForm: {
      title: "No WhatsApp? Request your audit by email",
      desc: "Leave your website address and your email, and you'll get the report within 24h.",
      urlPlaceholder: "https://your-website.com",
      emailPlaceholder: "you@email.com",
      button: "Request free audit",
      sending: "Sending…",
      success: "Got it! Your report will land in your inbox within 24h.",
      error: "Couldn't send. Message me on WhatsApp or at hola@jorgecalleja.dev.",
    },
    mobileBar: {
      text: "Free audit in 24h",
      button: "WhatsApp",
    },
    cookies: {
      text: "I use measurement cookies (Meta) to improve my ads. They only activate if you accept.",
      accept: "Accept",
      reject: "Reject",
      more: "More info",
    },
    finalCta: {
      title: "Want me to take a look at your website?",
      desc: "Send me the link on WhatsApp and within 24h I'll tell you exactly what's failing and what it would cost to fix. Free, no strings attached, no tech jargon.",
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
      review: "Leave a review",
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
        title: "Ana Rodríguez Abogados — Law firm",
        description:
          "A website that works on its own: clients book appointments online at any hour, the contact form always delivers, and the design conveys the seriousness a law firm needs. Fewer scheduling calls, more time to practice.",
        metrics: "Online booking 24/7",
      },
      docudid: {
        title: "LEXTY — AI legal assistant",
        description:
          "A platform for law firms where AI analyzes contracts and drafts documents in minutes instead of hours. Serves dozens of firms simultaneously, in over 40 languages, with zero technical work for the lawyer.",
        metrics: "75% less time per contract",
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
        title: "Retro Gamehub — Online arcade",
        description:
          "A classic games arcade where people compete, comment, and come back: live rankings and a community of 100+ players. Proof that a website can be a place people return to daily.",
        metrics: "Community of 100+ players",
      },
      mementoAcademy: {
        title: "Memento Academy — Online academy",
        description:
          "A free digital academy with courses, achievements, and community. Built on Amazon's cloud with professional infrastructure: it handles student traffic spikes without going down, and emails always arrive.",
        metrics: "Courses + achievements + automated emails",
      },
      tuvozamiga: {
        title: "TUVOZAMIGA — AI voice companion",
        description:
          "An application that holds voice conversations with people who spend too much time alone: active listening and empathetic chat at any hour, with an interface designed for non-technical users.",
        metrics: "Voice conversation 24/7",
      },
      bachataAlAireLibre: {
        title: "Bachata al Aire Libre — Dance classes in Málaga",
        description:
          "A landing page that turns visitors into students: it loads instantly, plays music, shows real photos and testimonials, and the map takes you to class. Available in several languages for foreign students and installable as a mobile app.",
        metrics: "Instant load + Multi-language",
      },
      malagaPremiumTransfers: {
        title: "Málaga Premium Transfers — Private transport",
        description:
          "A website built to rank on Google: every Costa del Sol destination gets its own automatically generated page that captures searches for that route. Clients browse the fleet and book directly — no middlemen, no commissions.",
        metrics: "One Google page per destination",
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
        title: "Precio Luz Hora — Save on electricity bills",
        description:
          "A website showing Spain's electricity price hour by hour, straight from the official source, telling you when to run appliances to pay less. With bill calculators and saving tips. Thousands of visits thanks to ranking on Google's first page.",
        metrics: "Real-time electricity prices",
      },
      nitrileAffair: {
        title: "Nitrile Affair — Music artist website",
        description:
          "An electronic artist's website with all his music in one place: SoundCloud and Bandcamp players, videos, gallery, and a verified live-performance history. Loads instantly on any device.",
        metrics: "All his music in one link",
      },
      timeBankOnChain: {
        title: "Time Bank — Time-based exchange",
        description:
          "A community where users trade services using time as currency: teach one hour of classes, receive one hour of plumbing. Credits transfer securely and balances never fail.",
        metrics: "Service exchange by the hour",
      },
      outdoorBachata: {
        title: "Outdoor Bachata Málaga — Cruise tourism",
        description:
          "An English-language site aimed at cruise passengers docking in Málaga: they step off the ship and book a bachata class right by the port. The same dance business, opened up to an international audience looking for experiences.",
        metrics: "International tourist bookings",
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