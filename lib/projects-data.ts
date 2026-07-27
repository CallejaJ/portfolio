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
  | "malagaPremiumTransfers"
  | "precioLuzHora"
  | "nitrileAffair"
  | "timeBankOnChain"
  | "outdoorBachata"
  | "analizoTuCv";

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
    id: 17,
    titleKey: "legacyWallet",
    image: "/images/legacy-wallet.png",
    technologies: [
      "Solidity 0.8",
      "Safe (Smart Accounts)",
      "ERC-4337",
      "TypeScript",
      "React 18",
      "Node.js",
      "Foundry",
      "PKI X.509",
      "Ethereum Sepolia",
    ],
    github: "https://github.com/CallejaJ/legacy-wallet",
    demo: "https://legacy-wallet-uma.vercel.app/",
    featured: false,
  },
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
    featured: false,
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
    featured: false,
  },
  {
    id: 16,
    titleKey: "twitterBot",
    image: "/images/memento-academy.webp",
    technologies: ["Node.js", "Express.js", "Twitter API v2", "Koyeb", "Cron"],
    github: "https://github.com/CallejaJ/twitter-bot",
    demo: "https://memento-academy-bot.koyeb.app/",
    featured: false,
  },
  {
    id: 11,
    titleKey: "mementoAcademy",
    image: "/images/memento-academy.webp",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "AWS",
      "Terraform",
      "GitHub Actions",
      "Prisma",
      "Supabase",
      "Tailwind CSS",
    ],
    github: "https://github.com/Memento-Academy",
    demo: "https://memento-academy.com/",
    featured: false,
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
    featured: false,
  },
  {
    id: 5,
    titleKey: "nftLaunchpad",
    image: "/images/nft3_launchpad.jpg",
    technologies: [
      "Next.js 15",
      "Tailwind CSS",
      "Framer Motion",
      "IOTA Rebased SDK",
      "Move Language",
      "IPFS (Pinata)",
    ],
    github: "https://github.com/CallejaJ/lumina",
    demo: "https://luminanft.vercel.app",
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
  },

  // Enterprise & AI Solutions
  {
    id: 1,
    titleKey: "docudid",
    image: "/images/docudid.webp",
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
    demo: "https://lexty.vercel.app/",
    featured: false,
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
    featured: false,
  },
  {
    id: 13,
    titleKey: "tuvozamiga",
    image: "/images/tuvozamiga.webp",
    technologies: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "Orga AI",
      "Radix UI",
      "Lucide React",
    ],
    github: "https://github.com/CallejaJ/tuvozamiga",
    demo: "https://tuvozamiga.vercel.app",
    featured: false,
  },
  {
    id: 10,
    titleKey: "retroGamehub",
    image: "/images/retro-gamehub.webp",
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
    ],
    github: "https://github.com/CallejaJ/retro-gamehub",
    demo: "https://retrogamehub.vercel.app",
    featured: false,
  },
  {
    id: 12,
    titleKey: "anaRodriguez",
    image: "/images/ana.webp",
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
    featured: false,
  },

  // Other Projects
  {
    id: 18,
    titleKey: "malagaPremiumTransfers",
    image: "/images/malaga-premium-transfers.webp",
    technologies: [
      "Astro v5",
      "TypeScript",
      "Tailwind CSS 4",
      "Vite",
      "Vercel",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://malagapremiumtransfers.com",
    featured: true,
  },
  {
    id: 14,
    titleKey: "bachataAlAireLibre",
    image: "/images/bachataalairelibre.webp",
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
    featured: false,
  },
  {
    id: 20,
    titleKey: "precioLuzHora",
    image: "/images/precio-luz-hora.webp",
    technologies: [
      "Astro 5",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Recharts",
      "REE API",
    ],
    github: "https://github.com/CallejaJ/precio-luz-hora",
    demo: "https://precioluzhora.online",
    featured: false,
  },
  {
    id: 21,
    titleKey: "nitrileAffair",
    image: "/images/nitrile-affair.webp",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript Vanilla",
      "SoundCloud Widget",
      "Bandcamp Embed",
      "YouTube Embed",
    ],
    github: "https://github.com/CallejaJ/nitrile-affair",
    demo: "https://nitrileaffair.com",
    featured: false,
  },
  {
    id: 22,
    titleKey: "timeBankOnChain",
    image: "/images/timebank.webp",
    technologies: [
      "Next.js 16",
      "React 19",
      "Prisma 6",
      "PostgreSQL",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Zod",
      "JWT",
    ],
    github: "https://github.com/CallejaJ/timebankonchain",
    demo: "https://bancodeltiempomalaga.com",
    featured: true,
  },
  {
    id: 23,
    titleKey: "outdoorBachata",
    image: "/images/outdoor-bachata.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO internacional",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://www.outdoorbachatamalaga.eu",
    featured: false,
  },
  {
    id: 24,
    titleKey: "analizoTuCv",
    image: "/images/analizotucv.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "IA (LLM)",
      "SEO",
    ],
    github: "https://github.com/CallejaJ",
    demo: "https://analizotucv.com",
    featured: false,
  },
];
