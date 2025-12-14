# Jorge Calleja Pérez - Web3 & Full Stack Engineer

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Professional portfolio showcasing expertise in Blockchain development, Full Stack Engineering, and Prompt Engineering. This application demonstrates a modern, performance-oriented architecture using Next.js 14 and TypeScript.

## System Architecture & Features

- **Framework**: Next.js 14 with App Router for server-side rendering and streamlined routing.
- **Language**: TypeScript throughout for strict type safety and maintainable codebases.
- **Styling System**: Tailwind CSS for utility-first styling, complemented by shadcn/ui for accessible, composable component primitives.
- **State Management**: React Hooks and Context API (or Zustand/Redux where applicable) for efficient state handling.
- **Animation**: Framer Motion for hardware-accelerated, declarative animations.
- **Web3 Integration**: Architected to support dApp features including wallet connection (RainbowKit, Wagmi) and smart contract interaction (Ethers.js, Viem).

## Technology Stack

### Frontend Engineering
- **Core**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, PostCSS, Framer Motion
- **UI Library**: shadcn/ui (Radix UI primitives), Lucide React
- **Validation**: Zod

### Web3 & Blockchain
- **Smart Contracts**: Solidity (v0.8.20+), Hardhat
- **Interaction**: Ethers.js, Viem, Wagmi
- **Wallet Support**: RainbowKit, Account Abstraction
- **Security**: OpenZeppelin standard implementations

### Development Tools
- **Linting & Formatting**: ESLint, Prettier
- **Package Management**: npm/yarn/pnpm
- **Version Control**: Git

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router directory
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout definition
│   └── page.tsx          # Main entry point
├── components/           # Reusable React components
│   └── ui/               # Design system primitives (shadcn)
├── lib/                  # Utilities, data mapping, and helper functions
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- Package manager (npm, yarn, pnpm, or bun)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CallejaJ/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application at `http://localhost:3000`

## Deployment

### Vercel
This project is optimized for deployment on Vercel. Connect the GitHub repository to a Vercel project for automatic CI/CD pipelines.

### Docker
A Dockerfile can be included for containerized deployment.
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Contact Information

**Jorge Calleja Pérez**
- Email: callejaj@proton.me
- LinkedIn: https://www.linkedin.com/in/callejaj
- GitHub: https://github.com/CallejaJ
- Location: Málaga, Spain

---
*Developed with a focus on performance, accessibility, and modern software engineering practices.*
