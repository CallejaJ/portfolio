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
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit">
              <RocketLogo
                size={36}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span className="font-bold text-lg tracki