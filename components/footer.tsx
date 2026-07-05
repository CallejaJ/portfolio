// ============================================
// COMPONENTE: Footer
// ============================================

"use client";

import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import { RocketLogo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-button";
import { getWhatsAppLink, CONTACT_EMAIL } from "@/lib/site-config";

const Footer = ({ t }: any) => {
  const year = new Date().getFullYear();

  const navLinks = [
    { key: "painPoints", href: "#pain-points" },
    { key: "services", href: "#services" },
    { key: "process", href: "#process" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit">
              <RocketLogo
                size={36}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="font-bold text-lg tracking-tight">
                Jorge{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Calleja
                </span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Secciones */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {t.services.items.map((item: any, i: number) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppLink(t.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/callejaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CallejaJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Jorge Calleja Pérez. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacidad"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.privacy}
            </a>
            <a
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.cookies}
            </a>
          </div>
          <p className="text-xs text-muted-foreground">{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
