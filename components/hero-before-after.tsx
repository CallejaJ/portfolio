"use client";
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// ============================================
// Antes/Después del hero: dos maquetas de navegador
// estilizadas (sin imágenes) que contrastan una web
// "en serie" rota con una web cuidada que vende.
// ============================================

const BrowserDots = () => (
  <div className="flex gap-1 shrink-0">
    <span className="w-2 h-2 rounded-full bg-red-400/70" />
    <span className="w-2 h-2 rounded-full bg-amber-400/70" />
    <span className="w-2 h-2 rounded-full bg-green-400/70" />
  </div>
);

const BrowserShell = ({
  url,
  score,
  scoreClass,
  children,
}: {
  url: string;
  score: string;
  scoreClass: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden shadow-xl">
    {/* Barra del navegador */}
    <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/40">
      <BrowserDots />
      <div className="flex-1 truncate rounded-full bg-background/70 border border-border px-3 py-0.5 text-[10px] text-muted-foreground">
        {url}
      </div>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${scoreClass}`}
      >
        {score}
      </span>
    </div>
    {/* Contenido de la "web" */}
    <div className="h-36 sm:h-40 p-3">{children}</div>
  </div>
);

const HeroBeforeAfter = ({ t, variants }: { t: any; variants: any }) => {
  const c = t.heroCompare;
  return (
    <motion.div
      variants={variants}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-14 px-2 text-left"
    >
      {/* ANTES — web en serie, rota */}
      <div>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          {c.beforeLabel}
        </p>
        <BrowserShell
          url={c.url}
          score={c.beforeScore}
          scoreClass="bg-red-500"
        >
          <div className="h-full flex flex-col gap-2">
            <div className="h-2.5 w-3/4 rounded bg-muted-foreground/40 -rotate-1" />
            <div className="h-1.5 w-full rounded bg-muted-foreground/25" />
            <div className="h-1.5 w-5/6 rounded bg-muted-foreground/25 ml-3" />
            {/* Imagen rota */}
            <div className="flex-1 min-h-8 rounded border-2 border-dashed border-muted-foreground/30 flex items-center justify-center gap-1 text-muted-foreground/50">
              <X size={14} />
              <span className="text-[9px] font-semibold">IMG</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block px-2.5 py-1 rounded bg-muted-foreground/40 text-[9px] font-semibold text-white -rotate-6 line-through decoration-red-500 decoration-2">
                {c.beforeCta}
              </span>
              <span className="text-[9px] font-bold text-red-500">
                Error 404
              </span>
            </div>
          </div>
        </BrowserShell>
      </div>

      {/* DESPUÉS — web cuidada que vende */}
      <div>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
          {c.afterLabel}
        </p>
        <BrowserShell
          url={c.url}
          score={c.afterScore}
          scoreClass="bg-[#25D366]"
        >
          <div className="h-full flex flex-col gap-2">
            <div className="h-2.5 w-1/2 rounded bg-primary/80" />
            <div className="h-1.5 w-full rounded bg-muted-foreground/25" />
            <div className="h-1.5 w-4/6 rounded bg-muted-foreground/25" />
            <div className="flex-1 min-h-8 grid grid-cols-2 gap-2">
              <div className="rounded border border-primary/30 bg-primary/10" />
              <div className="rounded border border-primary/30 bg-primary/10" />
            </div>
            <span className="inline-block self-start px-3 py-1 rounded-full bg-[#25D366] text-[9px] font-bold text-white shadow-[0_2px_10px_rgba(37,211,102,0.4)]">
              {c.afterCta}
            </span>
          </div>
        </BrowserShell>
      </div>
    </motion.div>
  );
};

export default HeroBeforeAfter;
