"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Check, X, RotateCcw, AlertCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

type Scores = {
  rendimiento: number | null;
  accesibilidad: number | null;
  practicas: number | null;
  seo: number | null;
};
type CheckItem = { id: string; ok: boolean; label: string };
type Result = {
  url: string;
  scores: Scores;
  checks: CheckItem[];
  lcpSeconds: number | null;
};

const colorFor = (score: number | null) => {
  if (score == null) return "#6b7280";
  if (score >= 90) return "#22c55e";
  if (score >= 50) return "#f59e0b";
  return "#ef4444";
};

// Medidor circular estilo Lighthouse
const Gauge = ({
  score,
  label,
  delay,
}: {
  score: number | null;
  label: string;
  delay: number;
}) => {
  const r = 52;
  const c = 2 * Math.PI * r;
  const pct = score == null ? 0 : score / 100;
  const color = colorFor(score);
  const gid = `g-${label.replace(/\s+/g, "")}`;
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          {/* halo suave del color, tras el aro */}
          <circle
            cx="60"
            cy="60"
            r={r}
            fill={color}
            opacity="0.08"
          />
          {/* carril: gris muy tenue que se integra con el fondo */}
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="currentColor"
            className="text-muted-foreground/15"
            strokeWidth="8"
          />
          {/* arco de progreso */}
          <motion.circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c - c * pct }}
            transition={{ duration: 1.1, delay, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 4px ${color}66)` }}
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center text-[2rem] font-bold tabular-nums"
          style={{ color }}
        >
          {score ?? "—"}
        </div>
      </div>
      <span className="text-sm font-medium text-muted-foreground text-center">
        {label}
      </span>
    </div>
  );
};

const AnalyzerSection = ({ t }: { t: any }) => {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorKey, setErrorKey] = useState<"invalid" | "failed">("failed");
  const [result, setResult] = useState<Result | null>(null);

  const analyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setState("loading");
    try {
      const res = await fetch("/api/analizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const json = await res.json();
      if (json.ok) {
        setResult(json);
        setState("done");
      } else {
        setErrorKey(json.error === "url_invalida" ? "invalid" : "failed");
        setState("error");
      }
    } catch {
      setErrorKey("failed");
      setState("error");
    }
  };

  const reset = () => {
    setState("idle");
    setResult(null);
    setUrl("");
  };

  const avg = result
    ? Math.round(
        (["rendimiento", "accesibilidad", "practicas", "seo"] as const)
          .map((k) => result.scores[k] ?? 0)
          .reduce((a, b) => a + b, 0) / 4
      )
    : 0;
  // Nº de comprobaciones que fallan (rojas)
  const failedChecks = result ? result.checks.filter((c) => !c.ok).length : 0;
  // "Muy bien" solo si la media es alta Y no hay ningún check en rojo.
  // Si hay fallos, no puede decir que va perfecta aunque la media sea alta.
  const resultMsg =
    avg >= 90 && failedChecks === 0
      ? t.analyzer.resultGood
      : avg >= 50 && failedChecks <= 1
      ? t.analyzer.resultOk
      : t.analyzer.resultBad;

  return (
    <section className="py-24 bg-secondary/5 relative" id="analizar">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.analyzer.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.analyzer.subtitle}
          </motion.p>
        </div>

        {/* Formulario */}
        {(state === "idle" || state === "error") && (
          <form onSubmit={analyze} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={t.analyzer.placeholder}
                className="flex-1 px-5 py-4 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <Search size={18} />
                {t.analyzer.button}
              </button>
            </div>
            {state === "error" && (
              <p className="mt-4 inline-flex items-center gap-2 text-red-400 font-medium text-sm">
                <AlertCircle size={16} />
                {errorKey === "invalid" ? t.analyzer.errorInvalid : t.analyzer.errorFailed}
              </p>
            )}
            <p className="mt-4 text-xs text-muted-foreground">
              {t.analyzer.disclaimer}
            </p>
          </form>
        )}

        {/* Cargando */}
        {state === "loading" && (
          <div className="text-center py-10">
            <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-5"></div>
            <p className="text-lg font-semibold text-foreground">{t.analyzer.analyzing}</p>
            <p className="text-sm text-muted-foreground mt-1">{t.analyzer.analyzingSub}</p>
          </div>
        )}

        {/* Resultado */}
        <AnimatePresence>
          {state === "done" && result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-border bg-card/60 p-6 md:p-10"
            >
              <p className="text-center text-sm text-muted-foreground mb-8 break-all">
                {result.url}
              </p>

              {/* Medidores */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <Gauge score={result.scores.rendimiento} label={t.analyzer.scoreLabels.rendimiento} delay={0} />
                <Gauge score={result.scores.accesibilidad} label={t.analyzer.scoreLabels.accesibilidad} delay={0.1} />
                <Gauge score={result.scores.practicas} label={t.analyzer.scoreLabels.practicas} delay={0.2} />
                <Gauge score={result.scores.seo} label={t.analyzer.scoreLabels.seo} delay={0.3} />
              </div>

              {/* Comprobaciones */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  {t.analyzer.checksTitle}
                </h3>
                <ul className="space-y-3">
                  {result.checks.map((c) => (
                    <li key={c.id} className="flex items-center gap-3">
                      <span
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                          c.ok
                            ? "bg-green-500/15 text-green-500"
                            : "bg-red-500/15 text-red-500"
                        }`}
                      >
                        {c.ok ? (
                          <Check size={15} strokeWidth={2.5} />
                        ) : (
                          <X size={15} strokeWidth={2.5} />
                        )}
                      </span>
                      <span
                        className={
                          c.ok
                            ? "text-foreground"
                            : "text-foreground/70 line-through decoration-red-500/40"
                        }
                      >
                        {c.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Veredicto + CTA */}
              <div className="text-center border-t border-border pt-8">
                <p className="text-lg md:text-xl font-semibold mb-6">{resultMsg}</p>
                <a
                  href={getWhatsAppLink(
                    `Hola Jorge, he analizado mi web (${result.url}) y quiero que me digas cómo mejorarla.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1fbd5a] text-white text-lg font-semibold shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105"
                >
                  <WhatsAppIcon size={22} />
                  {t.analyzer.cta}
                </a>
                <p className="text-sm text-muted-foreground mt-3">{t.analyzer.ctaSub}</p>
                <button
                  onClick={reset}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <RotateCcw size={14} />
                  {t.analyzer.again}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnalyzerSection;
