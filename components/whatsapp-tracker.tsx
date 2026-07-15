"use client";
import { useEffect } from "react";
import { trackLead } from "@/lib/site-config";

// Rastreador global: cualquier clic en un enlace de WhatsApp (wa.me)
// dispara el evento "Lead" de Meta Pixel. Cubre todos los botones,
// presentes y futuros, sin tener que tocar cada componente.
const WhatsAppTracker = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href*="wa.me"]');
      if (link) trackLead();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};

export default WhatsAppTracker;
