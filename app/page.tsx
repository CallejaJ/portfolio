"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Code,
  Zap,
  TrendingUp,
  Shield,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { BlockchainBackground } from "@/components/blockchain-background";

// Definir tipos para mejor seguridad de tipos
type ProjectKey =
  | "gaslessSwap"
  | "usdtStaking"
  | "nftLaunchpad"
  | "realEstate"
  | "tokenLaunchpad"
  | "web3Toolkit"
  | "faviconGenerator"
  | "retroGamehub" // Nuevo proyecto
  | "mementoAcademy"; // Nuevo proyecto

interface ProjectData {
  title: string;
  description: string;
  metrics: string;
}

interface Project {
  id: number;
  titleKey: ProjectKey;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export default function JorgePortfolio() {
  // Añadir el hook useState para el idioma
  const [language, setLanguage] = useState("es");
  const t = {
    es: {
      // Personal Info
      title: "Web3 Developer | Blockchain Specialist | Prompt Engineer",
      description:
        "Blockchain developer que ha convertido la IA en su ventaja competitiva. Especialista en prompt engineering y cómo esta disciplina puede transformar los ciclos de desarrollo tradicionales.",
      highlight:
        "Reducción del tiempo de desarrollo hasta un 40% mediante automatización con IA",

      // Navigation
      viewProjects: "Ver Proyectos",
      contact: "Contactar",

      // Sections
      featuredProjects: "Proyectos Destacados",
      featuredProjectsDesc: "Soluciones Web3 innovadoras con impacto real",
      techStack: "Stack Tecnológico",
      techStackDesc: "Tecnologías y herramientas especializadas",
      experience: "Experiencia Profesional",
      experienceDesc: "Liderando proyectos Web3 innovadores",
      readyToInnovate: "¿Listo para Innovar?",
      transformVision:
        "Transformemos tu visión en realidad con tecnología blockchain y IA",
      sendEmail: "Enviar Email",

      // Skills
      web3Blockchain: "Web3 & Blockchain",
      frontendDev: "Frontend Development",
      aiAutomation: "AI & Automation",
      backendDb: "Backend & Database",

      // Projects
      featuredProject: "Proyecto Destacado",
      projects: {
        gaslessSwap: {
          title: "Gasless Token Swap Platform",
          description:
            "Plataforma DeFi avanzada que permite intercambios de tokens sin gas usando tecnología Account Abstraction. Implementé ZeroDev SDK v5.4 con EntryPoint V07 para transacciones patrocinadas.",
          metrics: "60% reducción en fricción de onboarding",
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
          // Nuevo proyecto
          title: "Retro Gamehub",
          description:
            "Plataforma de juegos retro con integración de comentarios y rankings persistentes a través de Supabase. Permite a los usuarios interactuar y competir en un entorno clásico.",
          metrics: "Comunidad activa con 100+ usuarios",
        },
        mementoAcademy: {
          // Nuevo proyecto
          title: "Memento Academy",
          description:
            "Plataforma educativa descentralizada para comunidades Web3. Ofrece cursos, foros y recursos sobre blockchain, DeFi y NFTs, con un sistema de recompensas basado en tokens.",
          metrics: "50+ cursos y 10+ comunidades",
        },
      } as Record<ProjectKey, ProjectData>,

      // Experience
      experienceItems: [
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

      // Footer
      developedWith: "Desarrollado con React, Next.js y Tailwind CSS.",
      quote: '"La IA no reemplaza mi criterio, lo potencia."',
    },
    en: {
      // Personal Info
      title: "Web3 Developer | Blockchain Specialist | Prompt Engineer",
      description:
        "Blockchain developer who has turned AI into his competitive advantage. Specialist in prompt engineering and how this discipline can transform traditional development cycles.",
      highlight:
        "Up to 40% reduction in development time through AI automation",

      // Navigation
      viewProjects: "View Projects",
      contact: "Contact",

      // Sections
      featuredProjects: "Featured Projects",
      featuredProjectsDesc: "Innovative Web3 solutions with real impact",
      techStack: "Tech Stack",
      techStackDesc: "Specialized technologies and tools",
      experience: "Professional Experience",
      experienceDesc: "Leading innovative Web3 projects",
      readyToInnovate: "Ready to Innovate?",
      transformVision:
        "Let's transform your vision into reality with blockchain and AI technology",
      sendEmail: "Send Email",

      // Skills
      web3Blockchain: "Web3 & Blockchain",
      frontendDev: "Frontend Development",
      aiAutomation: "AI & Automation",
      backendDb: "Backend & Database",

      // Projects
      featuredProject: "Featured Project",
      projects: {
        gaslessSwap: {
          title: "Gasless Token Swap Platform",
          description:
            "Advanced DeFi platform enabling gas-free token exchanges using Account Abstraction technology. Implemented ZeroDev SDK v5.4 with EntryPoint V07 for sponsored transactions.",
          metrics: "60% reduction in onboarding friction",
        },
        usdtStaking: {
          title: "USDT Staking Platform",
          description:
            "Comprehensive staking smart contract system with 365% APY and dynamic fund management. Implemented automatic distribution across 4 different wallets.",
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
            "Complete suite of tools for Web3 developers including contract generators, transaction validators and debugging utilities. Accelerates blockchain development with predefined templates.",
          metrics: "50+ integrated tools",
        },
        faviconGenerator: {
          title: "Favicon Generator",
          description:
            "Advanced favicon generator that automatically creates all sizes and formats needed for modern web applications. Includes real-time preview and automatic optimization.",
          metrics: "Generates 15+ formats automatically",
        },
        retroGamehub: {
          // Nuevo proyecto
          title: "Retro Gamehub",
          description:
            "Retro gaming platform with persistent comments and rankings integrated via Supabase. Allows users to interact and compete in a classic environment.",
          metrics: "Active community with 100+ users",
        },
        mementoAcademy: {
          // Nuevo proyecto
          title: "Memento Academy",
          description:
            "Decentralized educational platform for Web3 communities. Offers courses, forums, and resources on blockchain, DeFi, and NFTs, with a token-based reward system.",
          metrics: "50+ courses and 10+ communities",
        },
      } as Record<ProjectKey, ProjectData>,

      // Experience
      experienceItems: [
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

      // Footer
      developedWith: "Built with React, Next.js and Tailwind CSS.",
      quote: '"AI doesn\'t replace my judgment, it enhances it."',
    },
  }[language] || {
    // Fallback por defecto en español
    title: "Web3 Developer | Blockchain Specialist | Prompt Engineer",
    description:
      "Blockchain developer que ha convertido la IA en su ventaja competitiva.",
    highlight:
      "Reducción del tiempo de desarrollo hasta un 40% mediante automatización con IA",
    viewProjects: "Ver Proyectos",
    contact: "Contactar",
    featuredProjects: "Proyectos Destacados",
    featuredProjectsDesc: "Soluciones Web3 innovadoras con impacto real",
    techStack: "Stack Tecnológico",
    techStackDesc: "Tecnologías y herramientas especializadas",
    experience: "Experiencia Profesional",
    experienceDesc: "Liderando proyectos Web3 innovadores",
    readyToInnovate: "¿Listo para Innovar?",
    transformVision:
      "Transformemos tu visión en realidad con tecnología blockchain y IA",
    sendEmail: "Enviar Email",
    featuredProject: "Proyecto Destacado",
    projects: {
      gaslessSwap: {
        title: "Gasless Token Swap Platform",
        description: "Plataforma DeFi avanzada",
        metrics: "60% reducción",
      },
      usdtStaking: {
        title: "USDT Staking Platform",
        description: "Sistema completo de staking",
        metrics: "365% APY",
      },
      nftLaunchpad: {
        title: "NFT Launchpad & Marketplace",
        description: "Plataforma Web3 completa",
        metrics: "45% aumento",
      },
      realEstate: {
        title: "Real Estate Tokenization",
        description: "Plataforma para propiedad fraccionada",
        metrics: "60% aumento",
      },
      tokenLaunchpad: {
        title: "Token Launchpad Multichain",
        description: "dApp launchpad multichain",
        metrics: "35% más conversiones",
      },
      web3Toolkit: {
        title: "Web3 Toolkit",
        description: "Suite completa de herramientas",
        metrics: "50+ herramientas",
      },
      faviconGenerator: {
        title: "Favicon Generator",
        description: "Generador avanzado de favicons",
        metrics: "Genera 15+ formatos",
      },
      retroGamehub: {
        title: "Retro Gamehub",
        description: "Plataforma de juegos retro con Supabase",
        metrics: "Comunidad activa",
      },
      mementoAcademy: {
        title: "Memento Academy",
        description: "Plataforma educativa descentralizada",
        metrics: "50+ cursos",
      },
    } as Record<ProjectKey, ProjectData>,
    experienceItems: [
      {
        title: "Web3 Developer",
        company: "ENO Network",
        period: "Nov 2024 – Apr 2025",
        location: "Remote",
        achievements: [
          "Lideré desarrollo frontend",
          "Implementé técnicas de prompt engineering",
          "Desarrollé sistema de integración",
        ],
      },
    ],
    developedWith: "Desarrollado con React, Next.js y Tailwind CSS.",
    quote: '"La IA no reemplaza mi criterio, lo potencia."',
  };

  const personalInfo = {
    name: "Jorge Calleja Pérez",
    title: t.title,
    location: "Málaga, Spain",
    phone: "+34 649530022",
    email: "callejaj@proton.me",
    linkedin: "https://www.linkedin.com/in/callejaj",
    github: "https://github.com/CallejaJ",
    description: t.description,
    highlight: t.highlight,
  };

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "gaslessSwap",
      image: "/images/gasless_token_swap.jpg",
      technologies: [
        "Solidity",
        "React 18",
        "Next.js",
        "TypeScript",
        "ZeroDev SDK",
        "Account Abstraction",
      ],
      github: "https://github.com/CallejaJ",
      demo: "https://gaslesstokenswap.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      titleKey: "usdtStaking",
      image: "/images/usdt_staking.jpg",
      technologies: [
        "Solidity 0.8.20",
        "ReentrancyGuard",
        "SafeERC20",
        "React",
        "Web3.js",
      ],
      github: "https://github.com/CallejaJ",
      demo: "https://www.stakez.io",
      featured: true,
    },
    {
      id: 3,
      titleKey: "nftLaunchpad",
      image: "/images/nft3_launchpad.jpg",
      technologies: [
        "ERC-721",
        "Ethers.js",
        "RainbowKit",
        "Wagmi",
        "Tailwind CSS",
      ],
      github: "https://github.com/CallejaJ",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      titleKey: "realEstate",
      image: "/images/real_estate.jpg",
      technologies: [
        "Next.js",
        "Material UI",
        "Smart Contracts",
        "Tokenization",
      ],
      github: "https://github.com/CallejaJ",
      demo: "#",
      featured: false,
    },
    {
      id: 5,
      titleKey: "tokenLaunchpad",
      image: "/images/token_launchpad.jpg",
      technologies: [
        "ERC-20",
        "Chainlink",
        "Multichain Bridge",
        "React",
        "Tailwind CSS",
      ],
      github: "https://github.com/CallejaJ",
      demo: "#",
      featured: false,
    },
    {
      id: 6,
      titleKey: "web3Toolkit",
      image: "/images/web3_toolkit.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Ethers.js",
        "Hardhat",
        "Solidity Templates",
      ],
      github: "https://github.com/CallejaJ/migration-vite-to-next",
      demo: "https://memento-toolkit.vercel.app/",
      featured: false,
    },
    {
      id: 7,
      titleKey: "faviconGenerator",
      image: "/images/favicon_generator.jpg",
      technologies: [
        "Next.js",
        "Canvas API",
        "Sharp",
        "TypeScript",
        "File Processing",
      ],
      github: "https://github.com/CallejaJ/favicon-generator",
      demo: "https://memento-favicon-generator.vercel.app/",
      featured: false,
    },
    {
      id: 8,
      titleKey: "retroGamehub",
      image: "/images/retro_gamehub.jpg",
      technologies: [
        "React",
        "Next.js",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
        "REST API",
      ],
      github: "https://github.com/CallejaJ/retro-gamehub",
      demo: "https://retro-gamehub.vercel.app/",
      featured: false,
    },
    {
      id: 9,
      titleKey: "mementoAcademy",
      image: "/images/memento_academy.jpg",
      technologies: [
        "Next.js",
        "Solidity",
        "IPFS",
        "The Graph",
        "ERC-721",
        "Decentralized Storage",
      ],
      github: "https://github.com/CallejaJ/memento-academy",
      demo: "https://www.memento-academy.com",
      featured: false,
    },
  ];

  const skillCategories = [
    {
      title: "Web3 & Blockchain",
      icon: <Shield className='w-6 h-6' />,
      skills: [
        "Solidity 0.8.20+",
        "Ethers.js",
        "Web3.js",
        "Wagmi",
        "RainbowKit",
        "Smart Contracts",
        "ERC-20/721/1155",
        "DeFi Protocols",
        "Account Abstraction",
        "ZeroDev SDK",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className='w-6 h-6' />,
      skills: [
        "React.js 18",
        "Next.js 13/14",
        "TypeScript",
        "Tailwind CSS 3",
        "Material-UI",
        "Vite 3",
        "JavaScript ES6+",
      ],
    },
    {
      title: "AI & Automation",
      icon: <Cpu className='w-6 h-6' />,
      skills: [
        "Prompt Engineering",
        "Claude 3.7",
        "GPT-4o",
        "Deep Seek",
        "Grok 3",
        "NLP",
        "Development Acceleration",
        "AI-assisted Coding",
      ],
    },
    {
      title: "Backend & Database",
      icon: <TrendingUp className='w-6 h-6' />,
      skills: [
        "Node.js",
        "Express",
        "PHP 8",
        "MongoDB",
        "MariaDB",
        "MySQL",
        "REST APIs",
      ],
    },
  ];

  // Reemplazar la variable experience existente con:
  const experience = t.experienceItems;

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900'>
      <BlockchainBackground />

      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

        <div className='max-w-6xl mx-auto text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='flex items-center justify-center gap-2 mb-4'>
              <MapPin className='w-5 h-5 text-blue-600' />
              <span className='text-slate-600 dark:text-slate-300'>
                {personalInfo.location}
              </span>
            </div>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                {personalInfo.name}
              </span>
            </h1>

            <div className='flex flex-wrap justify-center gap-2 mb-6'>
              {t.title.split(" | ").map((role, index) => (
                <Badge
                  key={index}
                  variant='outline'
                  className='text-sm py-1 px-3'
                >
                  {role}
                </Badge>
              ))}
            </div>

            <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed'>
              {t.description}
            </p>

            <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-full inline-block mb-8 font-semibold text-xs md:text-sm lg:text-base max-w-[90%] mx-auto'>
              <Zap className='w-5 h-5 inline mr-2' />
              {t.highlight}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='flex flex-wrap justify-center gap-6 mb-8'
          >
            <Button
              size='lg'
              asChild
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <a href='#projects'>{t.viewProjects}</a>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-3 text-lg font-semibold bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <a href='mailto:callejaj@proton.me'>{t.contact}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex justify-center mb-8'
          >
            <div className='flex bg-white/20 backdrop-blur-sm rounded-full p-1'>
              <button
                onClick={() => setLanguage("es")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  language === "es"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  language === "en"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-wrap justify-center gap-6'
          >
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors'
            >
              <Github size={20} />
              <span className='hidden sm:inline'>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors'
            >
              <Linkedin size={20} />
              <span className='hidden sm:inline'>LinkedIn</span>
            </a>
            <a
              href='mailto:callejaj@proton.me'
              className='flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors'
            >
              <Mail size={20} />
              <span className='hidden sm:inline'>callejaj@proton.me</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className='flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors'
            >
              <Phone size={20} />
              <span className='hidden sm:inline'>{personalInfo.phone}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              {t.featuredProjects}
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300'>
              {t.featuredProjectsDesc}
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm'>
                  <div className='relative overflow-hidden rounded-t-lg'>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.titleKey}
                      className='w-full h-64 object-cover transition-transform duration-300 hover:scale-105'
                    />
                    {project.featured && (
                      <Badge className='absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 hidden sm:block'>
                        {t.featuredProject}
                      </Badge>
                    )}
                    {t.projects[project.titleKey].metrics && (
                      <Badge
                        variant='secondary'
                        className='absolute top-4 right-4'
                      >
                        {t.projects[project.titleKey].metrics}
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className='flex items-center justify-between text-xl'>
                      {t.projects[project.titleKey].title}
                      <div className='flex gap-2'>
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-slate-600 hover:text-blue-600 transition-colors'
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-slate-600 hover:text-blue-600 transition-colors'
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </CardTitle>
                    <CardDescription className='text-base leading-relaxed'>
                      {t.projects[project.titleKey].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant='outline' className='text-xs'>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20 px-4 bg-white/30 backdrop-blur-sm'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              {t.techStack}
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300'>
              {t.techStackDesc}
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='h-full border-0 bg-white/80 backdrop-blur-sm'>
                  <CardHeader>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
                      <div>
                        <CardTitle className='text-xl'>
                          {category.title}
                        </CardTitle>
                        <CardDescription className='text-lg font-semibold text-blue-600'>
                          {personalInfo.name}
                        </CardDescription>
                      </div>
                      <div className='text-right'>
                        <div className='text-sm text-slate-600'>
                          {personalInfo.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2'>
                      {category.skills.map((skill, i) => (
                        <li key={i} className='flex items-start gap-2'>
                          <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                          <span className='text-slate-700 dark:text-slate-300'>
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              {t.experience}
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300'>
              {t.experienceDesc}
            </p>
          </motion.div>

          <div className='space-y-8'>
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className='border-0 bg-white/80 backdrop-blur-sm'>
                  <CardHeader>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
                      <div>
                        <CardTitle className='text-xl'>{job.title}</CardTitle>
                        <CardDescription className='text-lg font-semibold text-blue-600'>
                          {job.company}
                        </CardDescription>
                      </div>
                      <div className='text-right'>
                        <div className='text-sm text-slate-600'>
                          {job.period}
                        </div>
                        <div className='text-sm text-slate-500'>
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2'>
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className='flex items-start gap-2'>
                          <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                          <span className='text-slate-700 dark:text-slate-300'>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              {t.readyToInnovate}
            </h2>
            <p className='text-xl mb-8 opacity-90'>{t.transformVision}</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button size='lg' variant='secondary' asChild>
                <a
                  href='mailto:callejaj@proton.me'
                  className='inline-flex items-center gap-2'
                >
                  <Mail size={20} />
                  {t.sendEmail}
                </a>
              </Button>
              <Button
                size='lg'
                variant='outline'
                asChild
                className='text-white border-white hover:bg-white hover:text-blue-600 bg-transparent'
              >
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2'
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-4 bg-slate-900 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-slate-400'>
            &copy; 2024 {personalInfo.name}. {t.developedWith}
          </p>
          <p className='text-slate-500 text-sm mt-2'>{t.quote}</p>
        </div>
      </footer>
    </div>
  );
}
