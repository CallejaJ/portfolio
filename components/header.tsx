"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";
import { RocketLogo } from "./logo";

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
  t: any;
}

export const Header = ({ language, setLanguage, t }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "painPoints", href: "#pain-points" },
    { key: "services", href: "#services" },
    { key: "process", href: "#process" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <RocketLogo
            size={40}
            className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          />
          <span className="hidden sm:block font-bold text-foreground text-lg tracking-tight">
            Jorge{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Calleja
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-border mx-2"></div>

          <div className="flex bg-card/50 backdrop-blur-sm rounded-full p-0.5 border border-border">
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                language === "es"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                language === "en"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <ThemeToggle />

          <a
            href={getWhatsAppLink(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white text-sm font-semibold shadow-md transition-all duration-300 hover:scale-105"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex bg-card/50 backdrop-blur-sm rounded-full p-0.5 border border-border">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 rounded-full text-[10px] font-semibold transition-all duration-300 ${
                language === "es"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-full text-[10px] font-semibold transition-all duration-300 ${
                language === "en"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-1"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Web3 Style */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/70 backdrop-blur-xl border-b border-border shadow-2xl">
          <div className="relative">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

            <nav className="relative flex flex-col p-6 gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="group relative px-4 py-3 rounded-xl text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:bg-card/50 backdrop-blur-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{t.nav[item.key]}</span>
                  </div>
                  {/* Hover gradient border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}

              {/* WhatsApp CTA in mobile menu */}
              <a
                href={getWhatsAppLink(t.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white text-base font-semibold shadow-md"
              >
                <WhatsAppIcon size={18} />
                {t.contact}
              </a>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};
