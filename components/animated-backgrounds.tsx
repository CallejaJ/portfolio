"use client";

// ============================================
// FONDOS ANIMADOS orientados a visibilidad/ventas
// 4 variantes para elegir: liftoff, radar, growth, combined
// Todas: canvas ligero, respetan prefers-reduced-motion
// ============================================

import { useEffect, useRef } from "react";

const CANVAS_CLASS = "fixed inset-0 pointer-events-none z-0 bg-transparent";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useCanvasAnimation(
  draw: (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    t: number
  ) => void
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (reducedMotion()) return;

    let raf = 0;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const loop = () => {
      t += 1;
      draw(ctx, canvas.width, canvas.height, t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return canvasRef;
}

// ---------------------------------------------------------
// 1) LIFTOFF — partículas ascendentes con estelas (despegue)
// ---------------------------------------------------------
interface Particle {
  x: number;
  y: number;
  vy: number;
  wobble: number;
  size: number;
  hue: number;
  bright: boolean;
}

export function LiftoffBackground() {
  const particles = useRef<Particle[]>([]);

  const canvasRef = useCanvasAnimation((ctx, w, h, t) => {
    if (particles.current.length === 0) {
      const count = Math.floor((w * h) / 22000);
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vy: 0.3 + Math.random() * 0.9,
          wobble: Math.random() * Math.PI * 2,
          size: 1 + Math.random() * 2,
          hue: Math.random() > 0.5 ? 265 : 190, // púrpura o cyan
          bright: Math.random() > 0.85, // algunas son "cohetes"
        });
      }
    }

    ctx.clearRect(0, 0, w, h);

    for (const p of particles.current) {
      p.y -= p.vy * (p.bright ? 1.8 : 1);
      p.x += Math.sin(t / 60 + p.wobble) * 0.15;
      if (p.y < -30) {
        p.y = h + 20;
        p.x = Math.random() * w;
      }

      const alpha = p.bright ? 0.5 : 0.22;

      // Estela
      const trailLen = p.bright ? 26 : 10;
      const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + trailLen);
      grad.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${alpha})`);
      grad.addColorStop(1, `hsla(${p.hue}, 90%, 65%, 0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = p.size * 0.8;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x, p.y + trailLen);
      ctx.stroke();

      // Punto
      ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${alpha + 0.15})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return <canvas ref={canvasRef} className={CANVAS_CLASS} />;
}

// ---------------------------------------------------------
// 2) RADAR — ondas que "encuentran" nodos (visibilidad)
// ---------------------------------------------------------
interface RadarSource {
  x: number;
  y: number;
  period: number;
  offset: number;
}
interface RadarNode {
  x: number;
  y: number;
  glow: number;
}

export function RadarBackground() {
  const sources = useRef<RadarSource[]>([]);
  const nodes = useRef<RadarNode[]>([]);

  const canvasRef = useCanvasAnimation((ctx, w, h, t) => {
    if (sources.current.length === 0) {
      for (let i = 0; i < 3; i++) {
        sources.current.push({
          x: (0.2 + Math.random() * 0.6) * w,
          y: (0.2 + Math.random() * 0.6) * h,
          period: 420 + i * 160,
          offset: Math.random() * 400,
        });
      }
      const count = Math.floor((w * h) / 28000);
      for (let i = 0; i < count; i++) {
        nodes.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          glow: 0,
        });
      }
    }

    ctx.clearRect(0, 0, w, h);
    const maxR = Math.max(w, h) * 0.55;

    // Ondas expansivas
    for (const s of sources.current) {
      const progress = ((t + s.offset) % s.period) / s.period;
      const r = progress * maxR;
      const alpha = 0.28 * (1 - progress);

      ctx.strokeStyle = `hsla(265, 90%, 65%, ${alpha})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.stroke();

      // Nodos que se "encienden" al paso de la onda
      for (const n of nodes.current) {
        const d = Math.hypot(n.x - s.x, n.y - s.y);
        if (Math.abs(d - r) < 14) n.glow = 1;
      }
    }

    // Nodos
    for (const n of nodes.current) {
      n.glow = Math.max(0, n.glow - 0.015);
      const base = 0.12;
      const a = base + n.glow * 0.55;
      const size = 1.5 + n.glow * 2.5;
      ctx.fillStyle =
        n.glow > 0.05
          ? `hsla(190, 95%, 65%, ${a})`
          : `hsla(265, 60%, 65%, ${a})`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return <canvas ref={canvasRef} className={CANVAS_CLASS} />;
}

// ---------------------------------------------------------
// 3) GROWTH — gráficas ascendentes dibujándose (ventas)
// ---------------------------------------------------------
interface GrowthLine {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  hue: number;
  fade: number;
}

function makeLine(w: number, h: number): GrowthLine {
  const points = [];
  const startY = h * (0.55 + Math.random() * 0.35);
  const endY = h * (0.08 + Math.random() * 0.25);
  const steps = 7 + Math.floor(Math.random() * 4);
  for (let i = 0; i <= steps; i++) {
    const frac = i / steps;
    const base = startY + (endY - startY) * frac;
    const noise = (Math.random() - 0.35) * h * 0.07 * (i === 0 ? 0 : 1);
    points.push({ x: (w / steps) * i, y: base + noise });
  }
  return {
    points,
    progress: 0,
    speed: 0.0012 + Math.random() * 0.0012,
    hue: Math.random() > 0.5 ? 265 : 190,
    fade: 1,
  };
}

export function GrowthBackground() {
  const lines = useRef<GrowthLine[]>([]);

  const canvasRef = useCanvasAnimation((ctx, w, h) => {
    if (lines.current.length === 0) {
      lines.current = [makeLine(w, h), makeLine(w, h), makeLine(w, h)];
      lines.current.forEach((l, i) => (l.progress = i * 0.33));
    }

    ctx.clearRect(0, 0, w, h);

    for (let li = 0; li < lines.current.length; li++) {
      const line = lines.current[li];
      line.progress += line.speed;

      if (line.progress >= 1.35) {
        lines.current[li] = makeLine(w, h);
        continue;
      }
      const drawProgress = Math.min(1, line.progress);
      const fadeOut =
        line.progress > 1 ? Math.max(0, 1 - (line.progress - 1) / 0.35) : 1;

      const total = line.points.length - 1;
      const covered = drawProgress * total;
      const full = Math.floor(covered);
      const partial = covered - full;

      ctx.strokeStyle = `hsla(${line.hue}, 85%, 62%, ${0.22 * fadeOut})`;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(line.points[0].x, line.points[0].y);
      for (let i = 1; i <= full && i <= total; i++) {
        ctx.lineTo(line.points[i].x, line.points[i].y);
      }
      let tipX = line.points[Math.min(full, total)].x;
      let tipY = line.points[Math.min(full, total)].y;
      if (full < total) {
        const a = line.points[full];
        const b = line.points[full + 1];
        tipX = a.x + (b.x - a.x) * partial;
        tipY = a.y + (b.y - a.y) * partial;
        ctx.lineTo(tipX, tipY);
      }
      ctx.stroke();

      // Puntos de datos ya alcanzados
      for (let i = 0; i <= full && i <= total; i++) {
        ctx.fillStyle = `hsla(${line.hue}, 85%, 65%, ${0.3 * fadeOut})`;
        ctx.beginPath();
        ctx.arc(line.points[i].x, line.points[i].y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Punta brillante
      ctx.fillStyle = `hsla(${line.hue}, 95%, 70%, ${0.75 * fadeOut})`;
      ctx.beginPath();
      ctx.arc(tipX, tipY, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `hsla(${line.hue}, 95%, 70%, ${0.18 * fadeOut})`;
      ctx.beginPath();
      ctx.arc(tipX, tipY, 9, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return <canvas ref={canvasRef} className={CANVAS_CLASS} />;
}

// ---------------------------------------------------------
// 4) COMBINED — partículas ascendentes + ondas de radar
// ---------------------------------------------------------
export function CombinedBackground() {
  const particles = useRef<Particle[]>([]);
  const sources = useRef<RadarSource[]>([]);

  const canvasRef = useCanvasAnimation((ctx, w, h, t) => {
    if (particles.current.length === 0) {
      const count = Math.floor((w * h) / 32000);
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vy: 0.25 + Math.random() * 0.7,
          wobble: Math.random() * Math.PI * 2,
          size: 1 + Math.random() * 1.8,
          hue: Math.random() > 0.5 ? 265 : 190,
          bright: Math.random() > 0.88,
        });
      }
      for (let i = 0; i < 2; i++) {
        sources.current.push({
          x: (0.25 + Math.random() * 0.5) * w,
          y: (0.25 + Math.random() * 0.5) * h,
          period: 520 + i * 200,
          offset: Math.random() * 500,
        });
      }
    }

    ctx.clearRect(0, 0, w, h);
    const maxR = Math.max(w, h) * 0.5;

    // Ondas
    for (const s of sources.current) {
      const progress = ((t + s.offset) % s.period) / s.period;
      const r = progress * maxR;
      ctx.strokeStyle = `hsla(265, 90%, 65%, ${0.2 * (1 - progress)})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Partículas
    for (const p of particles.current) {
      p.y -= p.vy * (p.bright ? 1.6 : 1);
      p.x += Math.sin(t / 60 + p.wobble) * 0.12;
      if (p.y < -20) {
        p.y = h + 15;
        p.x = Math.random() * w;
      }
      const alpha = p.bright ? 0.4 : 0.18;
      ctx.fillStyle = `hsla(${p.hue}, 90%, 68%, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return <canvas ref={canvasRef} className={CANVAS_CLASS} />;
}
