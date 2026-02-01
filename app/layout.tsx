import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Calleja Portfolio",
  description:
    "Web3 & Blockchain Developer | B2B SaaS Solutions | Generative experience optimization",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/images/profile-round.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/profile-round.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/profile-round.png",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/images/profile-round.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/images/profile-round.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/profile-round.png" sizes="any" />
        <link
          rel="icon"
          href="/images/profile-round.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/images/profile-round.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/images/profile-round.png" />
        <link rel="shortcut icon" href="/images/profile-round.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
