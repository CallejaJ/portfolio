import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Calleja Portfolio",
  description: "Web3 Developer | Blockchain Specialist | Prompt Engineer",
  generator: "v0.dev",
  icons: {
    icon: [
      {
        url: "/jorgecallejaicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/jorgecallejaicon.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/jorgecallejaicon.png",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/jorgecallejaicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/jorgecallejaicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/jorgecallejaicon.png' sizes='any' />
        <link
          rel='icon'
          href='/jorgecallejaicon.png'
          sizes='16x16'
          type='image/png'
        />
        <link
          rel='icon'
          href='/jorgecallejaicon.png'
          sizes='32x32'
          type='image/png'
        />
        <link rel='apple-touch-icon' href='/jorgecallejaicon.png' />
        <link rel='shortcut icon' href='/jorgecallejaicon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
