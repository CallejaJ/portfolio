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
  | "legacyWallet";

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
      "Web3 Full Stack Engineer enfocado en escalabilidad de producto. Arquitecto aplicaciones descentralizadas que abstraen la complejidad blockchain usando Account Abstraction y agentes de IA, entregando experiencias de usuario fluidas y de alta conversión.",
    highlight:
      "Arquitectura Blockchain · Agentes IA · Optimización de Rendimiento",
    viewProjects: "Ver Proyectos",
    viewCV: "Ver CV",
    downloadCV: "Descargar CV",
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
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Web3 Frontend Developer",
        company: "Memento Academy",
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
        period: "nov. 2023 - abr. 2024",
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
      "Web3 Full Stack Engineer focused on product scalability. I architect decentralized applications that abstract blockchain complexity using Account Abstraction and AI agents, delivering seamless, high-conversion user experiences.",
    highlight: "Blockchain Architecture · AI Agents · Performance Optimization",
    viewProjects: "View Projects",
    viewCV: "View CV",
    downloadCV: "Download CV",
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
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Web3 Frontend Developer",
        company: "Memento Academy",
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
        period: "Nov 2023 - Apr 2024",
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
