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
  // Web3 Projects (Priority)
  {
    id: 15,
    titleKey: "web3ArcadeShield",
    image: "/images/web3arcade.png",
    technologies: [
      "Next.js 15",
      "React 19",
      "Privy",
      "ZeroDev",
      "Genkit AI",
      "Gemini",
    ],
    github: "https://github.com/CallejaJ/web3-arcade-shield",
    demo: "https://web3arcade.xyz/",
    featured: true,
  },
  {
    id: 9,
    titleKey: "brandGenesis",
    image: "/images/favicon_generator.jpg",
    technologies: [
      "Next.js 15",
      "React 19",
      "Gemini 2.0 Flash",
      "Ethereum Sepolia",
      "Privy Auth",
      "ZeroDev (Gasless)",
      "Tailwind CSS",
      "Lucide Icons",
    ],
    github: "https://github.com/CallejaJ/brand-genesis-ai",
    demo: "https://brand-genesis-ai.vercel.app/",
    featured: true,
  },
  {
    id: 11,
    titleKey: "mementoAcademy",
    image: "/images/memento-academy.png",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Brevo",
      "Radix UI",
      "Lucide React",
      "Framer Motion",
    ],
    github: "https://github.com/Memento-Academy",
    demo: "https://memento-academy.com/",
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
      "Privy",
    ],
    github: "https://github.com/CallejaJ/token-swap",
    demo: "https://gasless-token-swap.vercel.app/",
    featured: true,
  },
  {
    id: 5,
    titleKey: "nftLaunchpad",
    image: "/images/nft3_launchpad.jpg",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "IOTA SDK",
      "Pinata Web3",
      "React Query",
      "Zod",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://iota-nft-platform.vercel.app",
    featured: true,
  },
  {
    id: 6,
    titleKey: "realEstate",
    image: "/images/TokenBricks.jpg",
    technologies: [
      "Next.js 15",
      "TanStack Query",
      "Tailwind CSS 4",
      "RainbowKit",
      "Wagmi",
      "Zod",
      "Lucide React",
      "Recharts",
    ],
    github: "https://github.com/CallejaJ/tokenbricks",
    demo: "https://tokenbricks.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    titleKey: "usdtStaking",
    image: "/images/usdt_staking.jpg",
    technologies: [
      "Hardhat",
      "Jest",
      "Wagmi",
      "Solidity",
      "Next.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://staking-dubai.vercel.app/",
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

  // Enterprise & AI Solutions
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
    demo: "https://docudid.vercel.app",
    featured: true,
  },
  {
    id: 7,
    titleKey: "instagoal",
    image: "/images/instagoal.png",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "FastAPI",
      "Python",
      "Instagrapi",
      "WebSocket",
      "Lucide React",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://instagoal.vercel.app/",
    featured: true,
  },
  {
    id: 13,
    titleKey: "tuvozamiga",
    image: "/images/tuvozamiga.png",
    technologies: [
      "Next.js 16",
      "Canvas API",
      "Tailwind CSS 4",
      "Lucide React",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Web Audio API",
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
    demo: "https://anarodriguezabogados.vercel.app/",
    featured: true,
  },

  // Other Projects
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
    id: 8,
    titleKey: "smartMeterDashboard",
    image: "/images/smart-meter.png",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "Recharts D3",
      "shadcn/ui",
      "Zustand",
      "date-fns",
    ],
    github: "https://github.com/CallejaJ/smart-meter-dashboard",
    demo: "https://smart-emeter-dashboard.vercel.app/",
    featured: true,
  },

  {
    id: 10,
    titleKey: "retroGamehub",
    image: "/images/retro_gamehub.jpg",
    technologies: [
      "Next.js 15",
      "React 19",
      "Supabase",
      "Tailwind CSS 4",
      "Lucide React",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
    ],
    github: "https://callejaj.github.io/retro-gamehub/",
    demo: "https://retro-gamehub.vercel.app/",
    featured: false,
  },
];
