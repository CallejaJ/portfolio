// ============================================
// TRADUCCIONES
// ============================================
// lib/translations.ts

// Primero define los tipos
export type ProjectKey =
  | "gaslessSwap"
  | "usdtStaking"
  | "nftLaunchpad"
  | "realEstate"
  | "tokenLaunchpad"
  | "web3Toolkit"
  | "faviconGenerator"
  | "retroGamehub"
  | "geoOptimization"
  | "cryptoTracker"
  | "docudid";

export interface ProjectData {
  title: string;
  description: string;
  metrics: string;
}

// Ahora exporta las traducciones
export const translations = {
  es: {
    title:
      "Web3 & Blockchain Developer | B2B SaaS Solutions | Generative experience optimization",
    description:
      "Desarrollador especializado en Web3 & Blockchain, B2B SaaS Solutions y Generative Experience Optimization. Combina arquitecturas descentralizadas con soluciones empresariales inteligentes, enfocándose en cómo la optimización de experiencias generativas puede revolucionar los procesos de desarrollo y la propuesta de valor para clientes B2B.",
    highlight:
      "Reducción del tiempo de desarrollo hasta un 40% mediante automatización con IA",
    viewProjects: "Ver Proyectos",
    contact: "Contactar",
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
      anaRodriguez: {
        title: "Ana Rodríguez Abogados - Plataforma de Servicios Legales",
        description:
          "Plataforma web profesional para despacho de abogados con sistema de reservas integrado, gestión de clientes y formularios de contacto. Implementa testing completo con Vitest, validación de formularios con Zod y componentes reutilizables con shadcn/ui.",
        metrics: "Sistema de reservas + Testing completo + UI moderna",
      },
      docudid: {
        title: "DOCUDID - AI Legal Assistant Platform",
        description:
          "Plataforma SaaS de gestión documental legal con IA especializada (Alexia AI) que automatiza análisis de contratos, investigación jurisprudencial y redacción legal. Sistema multi-tenant con soporte para 40+ idiomas y especialización en todas las ramas del derecho.",
        metrics: "847+ despachos, 95% satisfacción, 300% mejora eficiencia",
      },
      gaslessSwap: {
        title: "Gasless Token Swap Platform",
        description:
          "Plataforma DeFi avanzada que permite intercambios de tokens sin gas usando tecnología Account Abstraction. Implementé ZeroDev SDK v5.4 con EntryPoint V07 para transacciones patrocinadas.",
        metrics: "60% reducción en fricción de onboarding",
      },
      cryptoTracker: {
        title: "Crypto Portfolio Tracker",
        description:
          "Tracker profesional de portfolio de criptomonedas con precios en tiempo real via Binance API y WebSocket. Dashboard analytics completo con alertas inteligentes, gráficos interactivos y gestión de holdings avanzada.",
        metrics: "Real-time WebSocket + 8 cryptos soportadas",
      },
      usdtStaking: {
        title: "USDT Staking Platform",
        description:
          "Sistema completo de staking con contratos inteligentes ofreciendo 365% APY y gestión dinámica de fondos.",
        metrics: "365% APY con máxima seguridad",
      },
      nftLaunchpad: {
        title: "NFT Launchpad & Marketplace",
        description:
          "Plataforma Web3 completa con funcionalidad de lanzamiento de NFTs, marketplace con ofertas y royalties. Sistema de tokenización multichain para creadores.",
        metrics: "45% aumento en opciones de monetización",
      },
      realEstate: {
        title: "Real Estate Tokenization",
        description:
          "Plataforma para propiedad fraccionada de bienes raíces usando blockchain. Sistema que reduce las barreras tradicionales de inversión inmobiliaria.",
        metrics: "60% aumento en accesibilidad de inversión",
      },
      tokenLaunchpad: {
        title: "Token Launchpad Multichain",
        description:
          "dApp launchpad multichain con fases de precios diferenciadas y conexiones a contratos inteligentes. Integración con oráculos Chainlink.",
        metrics: "35% más conversiones con múltiples métodos de pago",
      },
      web3Toolkit: {
        title: "Web3 Toolkit",
        description:
          "Suite completa de herramientas para desarrolladores Web3 que incluye generadores de contratos, validadores de transacciones y utilidades de debugging. Acelera el desarrollo blockchain con templates predefinidos.",
        metrics: "50+ herramientas integradas",
      },
      faviconGenerator: {
        title: "Favicon Generator",
        description:
          "Generador avanzado de favicons que crea automáticamente todos los tamaños y formatos necesarios para aplicaciones web modernas. Incluye preview en tiempo real y optimización automática.",
        metrics: "Genera 15+ formatos automáticamente",
      },
      retroGamehub: {
        title: "Retro Gamehub",
        description:
          "Plataforma de juegos retro con integración de comentarios y rankings persistentes a través de Supabase. Permite a los usuarios interactuar y competir en un entorno clásico.",
        metrics: "Comunidad activa con 100+ usuarios",
      },
      geoOptimization: {
        title: "Geo Optimization",
        description:
          "La Optimización de Experiencia Generativa representa un cambio fundamental desde la optimización de motores de búsqueda tradicional hacia la optimización para motores generativos.",
        metrics: "SASS B2B con 20+ clientes",
      },
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Frontend Developer",
        company: "DocuDID",
        period: "May 2025 - current",
        location: "Remote",
        achievements: [
          "Lideré desarrollo frontend de plataforma legal SaaS con React, Next.js y TypeScript",
          "Construí dashboard de análisis legal en tiempo real con streaming de respuestas IA vía WebSocket",
          "Implementé sistema de internacionalización con i18next soportando 40+ idiomas",
          "Desarrollé biblioteca de componentes escalable con Tailwind CSS para arquitectura multi-tenant",
          "Optimicé rendimiento logrando 40% mejora y tiempos de respuesta de 30 segundos",
        ],
      },
      {
        title: "Web3 Developer",
        company: "ENO Network",
        period: "Nov 2024 – Apr 2025",
        location: "Remote",
        achievements: [
          "Lideré desarrollo frontend con ERC-721 NFT launchpad y marketplace",
          "Implementé técnicas de prompt engineering, reduciendo tiempo de desarrollo 40%",
          "Desarrollé sistema de integración de wallets multichain (IOTA, Arbitrum, ENO)",
        ],
      },
      {
        title: "Lead Developer",
        company: "Recomark",
        period: "May 2024 - Oct 2024",
        location: "Remote",
        achievements: [
          "Creé interfaces para marketplace inmobiliario con algoritmo blockchain multinivel",
          "Lideré equipo de 3 desarrolladores implementando metodologías Scrum",
          "Aceleré tiempo de desarrollo 35% mediante IA generativa estratégica",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "Polo Nacional Contenidos Digitales",
        period: "Mar 2023 - Oct 2023",
        location: "Málaga, Spain",
        achievements: [
          "Desarrollé marketplace inmobiliario con capacidades de renderizado 3D",
          "Implementé sistema de banco de tiempo online 24/7 para ciudadanos de Málaga",
        ],
      },
    ],
  },
  en: {
    title:
      "Web3 & Blockchain Developer | B2B SaaS Solutions | Generative experience optimization",
    description:
      "Developer specialized in Web3 & Blockchain, B2B SaaS Solutions, and Generative Experience Optimization. Combines decentralized architectures with intelligent enterprise solutions, focusing on how generative experience optimization can revolutionize development processes and value propositions for B2B clients.",
    highlight: "Up to 40% reduction in development time through AI automation",
    viewProjects: "View Projects",
    contact: "Contact",
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
      anaRodriguez: {
        title: "Ana Rodríguez Abogados - Legal Services Platform",
        description:
          "Professional website for law firm with integrated booking system, client management and contact forms. Features comprehensive testing with Vitest, form validation with Zod and reusable components with shadcn/ui.",
        metrics: "Booking system + Full testing coverage + Modern UI",
      },
      docudid: {
        title: "DOCUDID - AI Legal Assistant Platform",
        description:
          "Legal document management SaaS platform with specialized AI (Alexia AI) that automates contract analysis, jurisprudential research and legal drafting. Multi-tenant system supporting 40+ languages and specialization in all branches of law.",
        metrics: "847+ firms, 95% satisfaction, 300% efficiency improvement",
      },
      gaslessSwap: {
        title: "Gasless Token Swap Platform",
        description:
          "Advanced DeFi platform enabling gas-free token exchanges using Account Abstraction technology. Implemented ZeroDev SDK v5.4 with EntryPoint V07 for sponsored transactions.",
        metrics: "60% reduction in onboarding friction",
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
        title: "NFT Launchpad & Marketplace",
        description:
          "Complete Web3 platform with NFT launch functionality, marketplace with offers and royalties. Multichain tokenization system for creators.",
        metrics: "45% increase in monetization options",
      },
      realEstate: {
        title: "Real Estate Tokenization",
        description:
          "Platform for fractional property ownership using blockchain. System that reduces traditional barriers to real estate investment.",
        metrics: "60% increase in investment accessibility",
      },
      tokenLaunchpad: {
        title: "Multichain Token Launchpad",
        description:
          "Multichain dApp launchpad with differentiated price phases and smart contract connections. Integration with Chainlink oracles.",
        metrics: "35% more conversions with multiple payment methods",
      },
      web3Toolkit: {
        title: "Web3 Toolkit",
        description:
          "Complete suite of tools for Web3 developers including contract generators, transaction validators and debugging utilities.",
        metrics: "50+ integrated tools",
      },
      faviconGenerator: {
        title: "Favicon Generator",
        description:
          "Advanced favicon generator that automatically creates all sizes and formats needed for modern web applications.",
        metrics: "Generates 15+ formats automatically",
      },
      retroGamehub: {
        title: "Retro Gamehub",
        description:
          "Retro gaming platform with persistent comments and rankings integrated via Supabase.",
        metrics: "Active community with 100+ users",
      },
      geoOptimization: {
        title: "GEO Optimization",
        description:
          "Generative Experience Optimization represents a fundamental shift from traditional search engine optimization toward optimization for generative engines.",
        metrics: "B2B SaaS with 20+ clients",
      },
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Frontend Developer",
        company: "DocuDID",
        period: "May 2025 - current",
        location: "Remote",
        achievements: [
          "Led frontend development of legal SaaS platform with React, Next.js and TypeScript",
          "Built real-time legal analysis dashboard with AI response streaming via WebSocket",
          "Implemented internationalization system with i18next supporting 40+ languages",
          "Developed scalable component library with Tailwind CSS for multi-tenant architecture",
          "Optimized performance achieving 40% improvement and 30-second response times",
        ],
      },
      {
        title: "Web3 Developer",
        company: "ENO Network",
        period: "Nov 2024 – Apr 2025",
        location: "Remote",
        achievements: [
          "Led frontend development with ERC-721 NFT launchpad and marketplace",
          "Implemented prompt engineering techniques, reducing development time by 40%",
          "Developed multichain wallet integration system (IOTA, Arbitrum, ENO)",
        ],
      },
      {
        title: "Lead Developer",
        company: "Recomark",
        period: "May 2024 - Oct 2024",
        location: "Remote",
        achievements: [
          "Created interfaces for real estate marketplace with blockchain multilevel algorithm",
          "Led team of 3 developers implementing Scrum methodologies",
          "Accelerated development time by 35% through strategic generative AI",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "Polo Nacional Contenidos Digitales",
        period: "Mar 2023 - Oct 2023",
        location: "Málaga, Spain",
        achievements: [
          "Developed real estate marketplace with 3D rendering capabilities",
          "Implemented 24/7 online time bank system for Málaga citizens",
        ],
      },
    ],
  },
};
