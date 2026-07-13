"use client";
import React, { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

// Barra fija inferior, solo móvil. Sustituye al botón flotante en pantallas pequeñas.
const MobileCtaBar = ({ t }: { t: any }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-5 py-3 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <span className="text-sm font-semibold text-foreground leading-tight">
          {t.mobileBar.text}
        </span>
        <a
          href={getWhatsAppLink(t.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-bold shrink-0"
        >
          <WhatsAppIcon size={16} />
          {t.mobileBar.button}
        </a>
      </div>
    </div>
  );
};

export default MobileCtaBar;
