"use client";

import { useEffect } from "react";

// Red de seguridad para "ChunkLoadError":
// cuando se despliega una versión nueva, una pestaña abierta con la versión
// antigua puede intentar cargar un archivo JS que ya no existe (404) y romper.
// Este componente detecta ese error y recarga la página una sola vez para
// que el visitante nunca vea la pantalla de "Application error".
const RELOAD_KEY = "chunk-reload-ts";

function isChunkError(msg?: string | null): boolean {
  if (!msg) return false;
  return (
    /Loading chunk [\w-]+ failed/i.test(msg) ||
    /ChunkLoadError/i.test(msg) ||
    /Loading CSS chunk/i.test(msg) ||
    /Failed to fetch dynamically imported module/i.test(msg) ||
    /error loading dynamically imported module/i.test(msg)
  );
}

export default function ChunkErrorReloader() {
  useEffect(() => {
    const reloadOnce = () => {
      try {
        const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
        // Evita bucles: no recargar más de una vez cada 10 segundos.
        if (Date.now() - last < 10000) return;
        sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
      } catch {
        // sessionStorage puede fallar (modo incógnito estricto); recargamos igual.
      }
      window.location.reload();
    };

    const onError = (e: ErrorEvent) => {
      if (isChunkError(e?.message) || isChunkError((e?.error as Error)?.message)) {
        reloadOnce();
      }
    };

    const onRejection = (e: PromiseRejectionEvent) => {
      const reason = e?.reason as { message?: string } | string | undefined;
      const msg = typeof reason === "string" ? reason : reason?.message;
      if (isChunkError(msg)) reloadOnce();
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
