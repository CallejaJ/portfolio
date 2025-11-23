// lib/projects-data.ts

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
  | "docudid"
  | "anaRodriguez"
  | "tuvozamiga"
  | "bachataAlAireLibre";

export interface Project {
  id: number;
  titleKey: ProjectKey;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  // 4 proyectos más recientes primero
  {
    id: 14,
    titleKey: "bachataAlAireLibre",
    image: "/images/bachataalairelibre.png",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "PWA",
      "i18n",
    ],
    github: "https://github.com/CallejaJ/carlos-yepes-reyes",
    demo: "https://bachataalairelibre.com",
    featured: true,
  },
  {
    id: 13,
    titleKey: "tuvozamiga",
    image: "/images/tuvozamiga.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Audio API",
      "Canvas API",
      "Orga AI",
      "Vercel Edge",
    ],
    github: "https://github.com/CallejaJ/tuvozamiga",
    demo: "https://tuvozamiga.vercel.app",
    featured: true,
  },
  {
    id: 12,
    titleKey: "anaRodriguez",
    image: "/images/ana.png",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Prisma",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Tailwind CSS 4",
      "Nodemailer",
      "Vitest",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://anairodriguez.vercel.app/",
    featured: true,
  },
  {
    id: 11,
    titleKey: "geoOptimization",
    image: "/images/geo_optimization.jpg",
    technologies: [
      "Next.js",
      "SerpAPI",
      "Apify SERP Scraper",
      "DataForSEO",
      "Zenserp",
    ],
    github: "https://github.com/CallejaJ/geo",
    demo: "https://generative-optimization-geo.vercel.app/",
    featured: false,
  },
  // Proyectos anteriores
  {
    id: 1,
    titleKey: "docudid",
    image: "/images/docudid.jpg",
    technologies: [
      "React 18",
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "WebSocket",
      "i18next",
      "Tailwind CSS",
      "OpenAI API",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://docudid.com",
    featured: true,
  },
  {
    id: 2,
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
    id: 3,
    titleKey: "cryptoTracker",
    image: "/images/crypto_tracker.jpg",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Binance API",
      "WebSocket",
      "Tailwind CSS",
      "Recharts",
    ],
    github: "https://github.com/CallejaJ/crypto-tracker",
    demo: "https://crypto-tracker-memento.vercel.app",
    featured: true,
  },
  {
    id: 4,
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
    demo: "https://staking-dubai.vercel.app/",
    featured: true,
  },
  {
    id: 5,
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
    featured: false,
  },
  {
    id: 6,
    titleKey: "realEstate",
    image: "/images/TokenBricks.jpg",
    technologies: ["Next.js", "Material UI", "Smart Contracts", "Tokenization"],
    github: "https://github.com/CallejaJ/tokenbricks",
    demo: "https://tokenbricks.vercel.app/",
    featured: false,
  },
  {
    id: 7,
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
    id: 8,
    titleKey: "web3Toolkit",
    image: "/images/web3_toolkit.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Ethers.js",
      "Hardhat",
      "Solidity Templates",
    ],
    github: "https://github.com/CallejaJ/memento-web3-toolkit",
    demo: "https://memento-toolkit.vercel.app/",
    featured: false,
  },
  {
    id: 9,
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
    id: 10,
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
    github: "https://callejaj.github.io/retro-gamehub/",
    demo: "https://retro-gamehub.vercel.app/",
    featured: false,
  },
];
