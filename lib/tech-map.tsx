import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Cpu, 
  Box, 
  Zap, 
  Terminal, 
  Server,
  Palette,
  Shield,
  Coins,
  FileCode,
  Image,
  Gamepad2,
  Search,
  Mail,
  Smartphone,
  AudioWaveform,
  Brush,
  WalletCards
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import React from "react";

export interface TechItem {
  slug?: string; // Simple Icons slug
  path?: string; // Local icon path (e.g. /icons/logo.svg)
  icon?: LucideIcon | React.FC<any>; // Fallback Lucide icon or custom component
  color?: string; // Override color if needed
  label: string;
  isDarkLogo?: boolean; // If true, keep inverted in dark mode on hover
}

// Helper for Recharts which doesn't have a simple icon
function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

// Custom Icons
const OpenAIIcon = (props: any) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0462 6.0462 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a3.0758 3.0758 0 0 0 .89 2.7208 4.4362 4.4362 0 0 1-5.3465 7.4082zm-7.6942-3.6181a3.0758 3.0758 0 0 0-.89-2.7208 4.4755 4.4755 0 0 1-.9473-4.8741 4.4755 4.4755 0 0 1 5.3465-2.527l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a3.0758 3.0758 0 0 0 3.8237 1.0337zm1.1444-12.8687a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0804-4.7783 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369l-2.02-1.1686a3.0758 3.0758 0 0 0-.89-2.7208 4.4362 4.4362 0 0 1 5.3465-7.4082zm10.7075 3.5937a3.0758 3.0758 0 0 0 .89 2.7208 4.4755 4.4755 0 0 1 .9473 4.8741 4.4755 4.4755 0 0 1-5.3465 2.527l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a3.0758 3.0758 0 0 0-3.8237-1.0341zm-6.2201 1.7052a.7948.7948 0 0 0-.3927-.6813L6.0205 6.7441a3.0758 3.0758 0 0 0-3.8237-1.0337 4.4362 4.4362 0 0 1 5.3465-2.5341l.1419.0804 4.7783 2.7582a.7948.7948 0 0 0 .3927.6813v6.7369l-3.0458-1.7582v-3.3666a.7948.7948 0 0 0-.7925-.7929h-.0083zm-1.872 7.7289v-6.7369l3.0458 1.7582v3.3666a.7948.7948 0 0 0 .7925.7929h.0083a.7948.7948 0 0 0 .3927.6813l4.7783 2.7582a3.0758 3.0758 0 0 0 3.8237 1.0337 4.4362 4.4362 0 0 1-5.3465 2.5341l-.1419-.0804-4.7783-2.7582a.7948.7948 0 0 0-.3927-.6813z"/>
  </svg>
);

export const techMap: Record<string, TechItem> = {
  // Frameworks & Libraries
  "Next.js": { slug: "nextdotjs", label: "Next.js", isDarkLogo: true },
  "Next.js 14": { slug: "nextdotjs", label: "Next.js 14", isDarkLogo: true },
  "Next.js 15": { slug: "nextdotjs", label: "Next.js 15", isDarkLogo: true },
  "Next.js 16": { slug: "nextdotjs", label: "Next.js 16", isDarkLogo: true },
  "React": { slug: "react", label: "React" },
  "React 18": { slug: "react", label: "React 18" },
  "React 19": { slug: "react", label: "React 19" },
  "TypeScript": { slug: "typescript", label: "TypeScript" },
  "Tailwind CSS": { slug: "tailwindcss", label: "Tailwind CSS" },
  "Tailwind CSS 4": { slug: "tailwindcss", label: "Tailwind CSS 4" },
  "shadcn/ui": { slug: "shadcnui", icon: Layout, label: "shadcn/ui", isDarkLogo: true },
  "Framer Motion": { slug: "framer", label: "Framer Motion", isDarkLogo: true },
  "Material UI": { path: "/icons/material-ui.png", label: "Material UI" },
  "Three.js": { slug: "threedotjs", label: "Three.js", isDarkLogo: true },
  "Lucide React": { slug: "lucide", label: "Lucide React" },
  
  // Backend & Databases
  "Prisma": { slug: "prisma", label: "Prisma", isDarkLogo: true },
  "Prisma 7": { slug: "prisma", label: "Prisma 7", isDarkLogo: true },
  "Supabase": { slug: "supabase", label: "Supabase" },
  "PostgreSQL": { slug: "postgresql", label: "PostgreSQL" },
  "Vercel Edge": { slug: "vercel", label: "Vercel Edge", isDarkLogo: true },
  "Node.js": { slug: "nodedotjs", label: "Node.js" },
  
  // Crypto & Web3
  "Solidity": { slug: "solidity", label: "Solidity" },
  "Solidity 0.8.20": { slug: "solidity", label: "Solidity" },
  "Web3.js": { slug: "web3dotjs", label: "Web3.js" },
  "Ethers.js": { slug: "ethers", icon: Code2, label: "Ethers.js" },
  "Hardhat": { path: "/icons/hardhat.png", label: "Hardhat" },
  "RainbowKit": { path: "/icons/rainbowkit.svg", label: "RainbowKit" },
  "Wagmi": { path: "/icons/wagmi.png", label: "Wagmi", isDarkLogo: true },
  "Chainlink": { slug: "chainlink", label: "Chainlink" },
  "OpenAI API": { icon: OpenAIIcon, label: "OpenAI" },
  "Binance API": { slug: "binance", label: "Binance" },
  "ERC-721": { slug: "ethereum", label: "ERC-721" },
  "ERC-20": { slug: "ethereum", label: "ERC-20" },
  "Smart Contracts": { path: "/icons/smart-contract.png", label: "Smart Contracts" },
  "Account Abstraction": { icon: Shield, label: "Account Abstraction" },
  "OpenZeppelin": { icon: Shield, label: "OpenZeppelin" },
  "Viem": { slug: "viem", icon: Code2, label: "Viem", isDarkLogo: true },
  "TanStack Query": { slug: "reactquery", label: "TanStack Query" },
  "Privy": { path: "/icons/privy.avif", label: "Privy", isDarkLogo: true },
  "ZeroDev SDK": { path: "/icons/zerodev.png", label: "ZeroDev" },
  
  "Brevo": { slug: "brevo", label: "Brevo" },
  
  // Tools & APIs
  "IOTA dApp Kit": { path: "/icons/iota.webp", label: "IOTA dApp Kit" },
  "IOTA SDK": { path: "/icons/iota.webp", label: "IOTA SDK" },
  "Pinata Web3": { path: "/icons/pinata.png", label: "Pinata Web3" },
  "React Query": { slug: "reactquery", label: "React Query" },
  "PWA": { slug: "pwa", label: "PWA" },
  "Recharts": { icon: ActivityIcon, label: "Recharts" },
  "MUI": { slug: "mui", label: "MUI" },
  "Zod": { slug: "zod", label: "Zod" },
  "React Hook Form": { slug: "reacthookform", icon: FileCode, label: "React Hook Form" },
  "Nodemailer": { slug: "nodemailer", icon: Mail, label: "Nodemailer" },
  "Vitest": { slug: "vitest", label: "Vitest" },
  "Jest": { slug: "jest", label: "Jest" },
  "i18n": { slug: "i18next", label: "i18n" },
  "i18next": { slug: "i18next", label: "i18next" },
  "WebSocket": { path: "/icons/websocket.png", label: "WebSocket" },
  "Canvas API": { path: "/icons/canvas.svg", label: "Canvas" },
  "Web Audio API": { icon: AudioWaveform, label: "Web Audio" },
  "SerpAPI": { icon: Search, label: "SerpAPI" },
  "Apify SERP Scraper": { icon: Search, label: "Apify" },
  "DataForSEO": { icon: Database, label: "DataForSEO" },
  "Zenserp": { icon: Search, label: "Zenserp" },
  "Sharp": { icon: Image, label: "Sharp" },
  "ReentrancyGuard": { icon: Shield, label: "Security" },
  "SafeERC20": { icon: Shield, label: "Security" },
  "Multichain Bridge": { path: "/icons/bridge-stargate.webp", label: "Bridge" },
  "Tokenization": { icon: Coins, label: "Tokenization" },
  "REST API": { icon: Server, label: "REST API" },
  "File Processing": { icon: FileCode, label: "File Processing" },
  "Orga AI": { icon: Cpu, label: "Orga AI" },
  "Vite": { slug: "vite", label: "Vite" },
  "React Router": { slug: "reactrouter", label: "React Router" },
  "Zustand": { path: "/icons/zustand.webp", label: "Zustand" }, 
  "LayerZero": { icon: Layers, label: "LayerZero" },
  "Recharts D3": { path: "/icons/recharts-d3.png", label: "Recharts D3" },
  "Analytics": { slug: "vercel", label: "Vercel Analytics", isDarkLogo: true },
  "Vercel Analytics": { slug: "vercel", label: "Vercel Analytics", isDarkLogo: true },
  "Embla Carousel": { slug: "emblacarousel", label: "Embla Carousel" },
  "Sonner": { icon: Zap, label: "Sonner" },
  "Canvas Confetti": { icon: Zap, label: "Canvas Confetti" },
  "Vaul": { icon: Box, label: "Vaul" },
  "Axios": { slug: "axios", label: "Axios" },
  "Radix UI": { slug: "radixui", label: "Radix UI", isDarkLogo: true },
  "date-fns": { slug: "date-fns", label: "date-fns" },
};
