"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Mail, Linkedin, MapPin, Phone, Code, Zap, TrendingUp, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const personalInfo = {
  name: "Jorge Calleja Pérez",
  title: "Web3 Developer | Blockchain Specialist | Prompt Engineer",
  location: "Málaga, Spain",
  phone: "+34 649530022",
  email: "callejaj@proton.me",
  linkedin: "https://www.linkedin.com/in/callejaj",
  github: "https://github.com/CallejaJ",
  description:
    "Blockchain developer que ha convertido la IA en su ventaja competitiva. Especialista en prompt engineering y cómo esta disciplina puede transformar los ciclos de desarrollo tradicionales.",
  highlight: "Reducción del tiempo de desarrollo hasta un 40% mediante automatización con IA",
}

const projects = [
  {
    id: 1,
    title: "Gasless Token Swap Platform",
    description:
      "Plataforma DeFi avanzada que permite intercambios de tokens sin gas usando tecnología Account Abstraction. Implementé ZeroDev SDK v5.4 con EntryPoint V07 para transacciones patrocinadas.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity", "React 18", "Next.js", "TypeScript", "ZeroDev SDK", "Account Abstraction"],
    github: "https://github.com/CallejaJ/gasless-swap",
    demo: "https://gasless-swap.vercel.app",
    featured: true,
    metrics: "60% reducción en fricción de onboarding",
  },
  {
    id: 2,
    title: "USDT Staking Platform",
    description:
      "Sistema completo de staking con contratos inteligentes ofreciendo 365% APY y gestión dinámica de fondos. Implementé distribución automática entre 4 wallets diferentes.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity 0.8.20", "ReentrancyGuard", "SafeERC20", "React", "Web3.js"],
    github: "https://github.com/CallejaJ/usdt-staking",
    demo: "https://usdt-staking.vercel.app",
    featured: true,
    metrics: "365% APY con máxima seguridad",
  },
  {
    id: 3,
    title: "NFT Launchpad & Marketplace",
    description:
      "Plataforma Web3 completa con funcionalidad de lanzamiento de NFTs, marketplace con ofertas y royalties. Sistema de tokenización multichain para creadores.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["ERC-721", "Ethers.js", "RainbowKit", "Wagmi", "Tailwind CSS"],
    github: "https://github.com/CallejaJ/nft-launchpad",
    demo: "https://nft-launchpad.vercel.app",
    featured: true,
    metrics: "45% aumento en opciones de monetización",
  },
  {
    id: 4,
    title: "Real Estate Tokenization",
    description:
      "Plataforma para propiedad fraccionada de bienes raíces usando blockchain. Sistema que reduce las barreras tradicionales de inversión inmobiliaria.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Material UI", "Smart Contracts", "Tokenization"],
    github: "https://github.com/CallejaJ/real-estate-tokens",
    demo: "https://realestate-tokens.vercel.app",
    featured: false,
    metrics: "60% aumento en accesibilidad de inversión",
  },
  {
    id: 5,
    title: "Token Launchpad Multichain",
    description:
      "dApp launchpad multichain con fases de precios diferenciadas y conexiones a contratos inteligentes. Integración con oráculos Chainlink.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["ERC-20", "Chainlink", "Multichain Bridge", "React", "Tailwind CSS"],
    github: "https://github.com/CallejaJ/token-launchpad",
    demo: "https://token-launchpad.vercel.app",
    featured: false,
    metrics: "35% más conversiones con múltiples métodos de pago",
  },
  {
    id: 6,
    title: "Web3 Toolkit",
    description:
      "Suite completa de herramientas para desarrolladores Web3 que incluye generadores de contratos, validadores de transacciones y utilidades de debugging. Acelera el desarrollo blockchain con templates predefinidos.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TypeScript", "Ethers.js", "Hardhat", "Solidity Templates"],
    github: "https://github.com/CallejaJ/web3-toolkit",
    demo: "https://web3-toolkit.vercel.app",
    featured: false,
    metrics: "50+ herramientas integradas",
  },
  {
    id: 7,
    title: "Favicon Generator",
    description:
      "Generador avanzado de favicons que crea automáticamente todos los tamaños y formatos necesarios para aplicaciones web modernas. Incluye preview en tiempo real y optimización automática.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Canvas API", "Sharp", "TypeScript", "File Processing"],
    github: "https://github.com/CallejaJ/favicon-generator",
    demo: "https://favicon-generator.vercel.app",
    featured: false,
    metrics: "Genera 15+ formatos automáticamente",
  },
]

const skillCategories = [
  {
    title: "Web3 & Blockchain",
    icon: <Shield className="w-6 h-6" />,
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
    icon: <Code className="w-6 h-6" />,
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
    icon: <Cpu className="w-6 h-6" />,
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
    icon: <TrendingUp className="w-6 h-6" />,
    skills: ["Node.js", "Express", "PHP 8", "MongoDB", "MariaDB", "MySQL", "REST APIs"],
  },
]

const experience = [
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
]

export default function JorgePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-slate-600 dark:text-slate-300">{personalInfo.location}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {personalInfo.title.split(" | ").map((role, index) => (
                <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                  {role}
                </Badge>
              ))}
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full inline-block mb-8 font-semibold">
              <Zap className="w-5 h-5 inline mr-2" />
              {personalInfo.highlight}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button size="lg" asChild>
              <a href="#projects">Ver Proyectos</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:callejaj@proton.me">Contactar</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href={personalInfo.github}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:callejaj@proton.me"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">callejaj@proton.me</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">{personalInfo.phone}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Soluciones Web3 innovadoras con impacto real</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={project.featured ? "lg:col-span-2" : ""}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600">
                        Proyecto Destacado
                      </Badge>
                    )}
                    {project.metrics && (
                      <Badge variant="secondary" className="absolute top-4 right-4">
                        {project.metrics}
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-xl">
                      {project.title}
                      <div className="flex gap-2">
                        <a href={project.github} className="text-slate-600 hover:text-blue-600 transition-colors">
                          <Github size={20} />
                        </a>
                        <a href={project.demo} className="text-slate-600 hover:text-blue-600 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
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
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stack Tecnológico</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Tecnologías y herramientas especializadas</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{category.icon}</div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm py-1">
                          {skill}
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

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiencia Profesional</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Liderando proyectos Web3 innovadores</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-blue-600">{job.company}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-600">{job.period}</div>
                        <div className="text-sm text-slate-500">{job.location}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Listo para Innovar?</h2>
            <p className="text-xl mb-8 opacity-90">
              Transformemos tu visión en realidad con tecnología blockchain y IA
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:callejaj@proton.me" className="inline-flex items-center gap-2">
                  <Mail size={20} />
                  Enviar Email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <a href={personalInfo.linkedin} className="inline-flex items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">
            &copy; 2024 {personalInfo.name}. Desarrollado con React, Next.js y Tailwind CSS.
          </p>
          <p className="text-slate-500 text-sm mt-2">"La IA no reemplaza mi criterio, lo potencia."</p>
        </div>
      </footer>
    </div>
  )
}
