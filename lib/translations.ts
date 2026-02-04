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
  | "bachataAlAireLibre";

export interface ProjectData {
  title: string;
  description: string;
  metrics: string;
}

// Ahora exporta las traducciones
export const translations = {
  es: {
    title:
      "Web3 Frontend Developer · React & TypeScript · Interfaces Descentralizadas",
    description:
      "Web3 Frontend Developer especializado en React y TypeScript. Construyo interfaces descentralizadas que absorben la complejidad de blockchain y la convierten en experiencias fluidas para el usuario: desde Account Abstraction y tokenización de activos hasta NFT marketplaces y DeFi. Generalista en el ecosistema Web3, pero siempre con foco en que el producto final sienta que es nativo web.",
    highlight: "Adaptabilidad · Trabajo en Equipo · Innovación Tecnológica",
    viewProjects: "Ver Proyectos",
    contact: "Contactar",
    nav: {
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Skills",
      contact: "Contacto",
    },
    featuredProjects: "Proyectos Destacados",
    featuredProjectsDesc:
      "Soluciones empresariales que revolucionan procesos mediante Web3 e IA",
    techStack: "Stack Tecnológico",
    techStackDesc: "Tecnologías y herramientas especializadas",
    experience: "Experiencia Profesional",
    experienceDesc: "Liderando proyectos Web3 innovadores",
    readyToInnovate: "¿Listo para Innovar?",
    transformVision:
      "Transformemos tu visión en realidad con tecnología blockchain y IA",
    sendEmail: "Enviar Email",
    web3Blockchain: "Web3 & Blockchain",
    frontendDev: "Frontend Development",
    aiAutomation: "AI & Automation",
    backendDb: "Backend & Database",
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
        title: "Plataforma de Intercambio de Tokens sin Gas",
        description:
          "Plataforma DeFi avanzada que permite intercambios de tokens sin gas usando tecnología Account Abstraction, eliminando la fricción del onboarding para nuevos usuarios.",
        metrics: "Reducción de fricción en onboarding",
      },
      cryptoTracker: {
        title: "Rastreador de Portfolio de Criptomonedas",
        description:
          "Tracker profesional de portfolio de criptomonedas con precios en tiempo real via Binance API y WebSocket. Dashboard analytics completo con alertas inteligentes, gráficos interactivos y gestión de holdings avanzada.",
        metrics: "Real-time WebSocket + 8 cryptos soportadas",
      },
      usdtStaking: {
        title: "Plataforma de Staking USDT",
        description:
          "Sistema completo de staking con contratos inteligentes ofreciendo 365% APY y gestión dinámica de fondos.",
        metrics: "365% APY con máxima seguridad",
      },
      nftLaunchpad: {
        title: "Plataforma de Minteo de NFTs en la Red IOTA",
        description:
          "Aplicación descentralizada (dApp) para crear y acuñar NFTs en IOTA Rebased Testnet. Aprovecha zkLogin para autenticación sin fricción usando cuentas de Google e IPFS (Pinata) para almacenamiento descentralizado de activos NFT. Implementa contratos inteligentes en Move con API backend para minting patrocinado.",
        metrics:
          "zkLogin OAuth + IPFS Pinata + Move contracts + Sponsored minting",
      },
      realEstate: {
        title: "Tokenización de Bienes Raíces",
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
        title: "Panel de Control de Medidor Inteligente",
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
        title: "Centro de Juegos Retro",
        description:
          "Plataforma de juegos retro con integración de comentarios y rankings persistentes a través de Supabase. Permite a los usuarios interactuar y competir en un entorno clásico.",
        metrics: "Comunidad activa con 100+ usuarios",
      },
      mementoAcademy: {
        title: "Memento Academy - Plataforma Educativa Web3",
        description:
          "Plataforma educativa gratuita diseñada para recién llegados a Web3. Simplificamos Criptomonedas, CBDCs y tecnología Blockchain con cero costos para la comunidad. Incluye cursos premium, sistema de logros gamificado y arquitectura serverless moderna.",
        metrics: "Next.js 15 + Prisma 7 + Supabase + Brevo API",
      },
      tuvozamiga: {
        title: "TUVOZAMIGA - Plataforma de Compañía Virtual con IA",
        description:
          "Aplicación web de compañía virtual que combate la soledad no deseada mediante escucha activa y conversación empática 24/7. Implementa procesamiento de audio en tiempo real con latencia ultra baja, visualizador de ondas reactivo usando Web Audio API y Canvas, todo con interfaz 100% en español optimizada para accesibilidad.",
        metrics:
          "Latencia ultra baja + Visualización audio real-time + IA empática",
      },
      bachataAlAireLibre: {
        title: "Bachata al Aire Libre - Landing Page de Alto Rendimiento",
        description:
          "Landing page moderna y optimizada para clases de bachata y salsa al aire libre en Málaga. Alcanza puntuaciones excepcionales en rendimiento, accesibilidad y SEO. Incluye PWA, sistema multi-idioma, reproductor de música, galería de fotos animada, testimonios reales y integración con Google Maps.",
        metrics: "Alto Rendimiento + PWA + Multi-idioma + SEO",
      },
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Web3 Frontend Developer",
        company: "Memento Academy",
        period: "may. 2025 - actualidad",
        location: "España · En remoto",
        achievements: [
          "Desarrollo de plataformas Web3 y landing pages de alto rendimiento con Next.js, TypeScript y Tailwind CSS.",
          "Implementación de integraciones blockchain mediante Privy y optimización SEO-GEO para proyectos descentralizados.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "LEXTY",
        period: "sept. 2025 - oct. 2025",
        location: "En remoto",
        achievements: [
          "Desarrollé el frontend de una plataforma SaaS legal multi-tenant con Next.js y React, demostrando capacidad para escalar arquitecturas complejas.",
          "Integré con éxito soluciones de IA generativa (Alexia AI) y colaboré estrechamente con el equipo para implementar un sistema i18n global.",
        ],
      },
      {
        title: "Web3 Developer",
        company: "ENO Network",
        period: "nov. 2024 - abr. 2025",
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
        period: "may. 2024 - oct. 2024",
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
        period: "mar. 2024 - abr. 2024",
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
    title:
      "Web3 Frontend Developer · React & TypeScript · Decentralized Interfaces",
    description:
      "Web3 Frontend Developer specialized in React and TypeScript. I build decentralized interfaces that absorb blockchain complexity and turn it into seamless user experiences: from Account Abstraction and asset tokenization to NFT marketplaces and DeFi. Generalist across the Web3 ecosystem, but always focused on making the end product feel natively web.",
    highlight: "Adaptability · Teamwork · Technological Innovation",
    viewProjects: "View Projects",
    contact: "Contact",
    nav: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    featuredProjects: "Featured Projects",
    featuredProjectsDesc:
      "Enterprise solutions that revolutionize processes through Web3 and AI",
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
        title: "Gasless Token Swap Platform",
        description:
          "Advanced DeFi platform enabling gas-free token exchanges using Account Abstraction technology, eliminating onboarding friction for new users.",
        metrics: "Reduced onboarding friction",
      },
      cryptoTracker: {
        title: "Memento Crypto Portfolio Tracker",
        description:
          "Professional cryptocurrency portfolio tracker with real-time prices via Binance API and WebSocket. Complete analytics dashboard with smart alerts, interactive charts, and advanced holdings management.",
        metrics: "Real-time WebSocket + 8 supported cryptos",
      },
      usdtStaking: {
        title: "USDT Staking Platform",
        description:
          "Comprehensive staking smart contract system with 365% APY and dynamic fund management.",
        metrics: "365% APY with maximum security",
      },
      nftLaunchpad: {
        title: "IOTA NFT dApp - Minting Platform with zkLogin",
        description:
          "Decentralized application (dApp) for creating and minting NFTs on IOTA Rebased Testnet. Leverages zkLogin for frictionless authentication using Google accounts and IPFS (Pinata) for decentralized storage of NFT assets. Implements Move smart contracts with backend API for sponsored minting.",
        metrics:
          "zkLogin OAuth + IPFS Pinata + Move contracts + Sponsored minting",
      },
      realEstate: {
        title: "Real Estate Tokenization",
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
        title: "Smart e-Meter Dashboard",
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
        title: "Retro Gamehub",
        description:
          "Retro gaming platform with persistent comments and rankings integrated via Supabase.",
        metrics: "Active community with 100+ users",
      },
      mementoAcademy: {
        title: "Memento Academy - Web3 Educational Platform",
        description:
          "Free educational platform designed for Web3 newcomers. We simplify Cryptocurrencies, CBDCs, and Blockchain technology with zero costs for the community. Features premium courses, gamified achievement system, and modern serverless architecture.",
        metrics: "Next.js 15 + Supabase + Brevo API",
      },
      tuvozamiga: {
        title: "TUVOZAMIGA - Virtual Companion Platform with AI",
        description:
          "Virtual companion web application that combats unwanted loneliness through active listening and empathetic conversation 24/7. Features ultra-low latency real-time audio processing, reactive waveform visualizer using Web Audio API and Canvas, all with 100% Spanish interface optimized for accessibility.",
        metrics:
          "Ultra-low latency + Real-time audio visualization + Empathetic AI",
      },
      bachataAlAireLibre: {
        title: "Bachata al Aire Libre - High-Performance Landing Page",
        description:
          "Modern, optimized landing page for outdoor bachata and salsa dance classes in Málaga. Achieves exceptional scores in performance and accessibility. Features PWA capabilities, multi-language support, music player, animated photo gallery, real testimonials and Google Maps integration.",
        metrics: "High Performance + PWA + Multi-language + SEO",
      },
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Web3 Frontend Developer",
        company: "Memento Academy",
        period: "May 2025 - Present",
        location: "Spain · Remote",
        achievements: [
          "Development of Web3 platforms and high-performance landing pages with Next.js, TypeScript and Tailwind CSS.",
          "Blockchain integrations via Privy and SEO-GEO optimization for decentralized projects.",
        ],
      },
      {
        title: "Frontend Developer",
        company: "LEXTY",
        period: "Sept 2025 - Oct 2025",
        location: "Remote",
        achievements: [
          "Built the frontend of a multi-tenant legal SaaS platform with Next.js and React, demonstrating ability to scale complex architectures.",
          "Successfully integrated generative AI solutions (Alexia AI) and collaborated closely with the team to implement a global i18n system.",
        ],
      },
      {
        title: "Web3 Developer",
        company: "ENO Network",
        period: "Nov 2024 - Apr 2025",
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
        period: "May 2024 - Oct 2024",
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
        period: "Mar 2024 - Apr 2024",
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
