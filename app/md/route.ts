import { LLMS_CONTENT } from "@/lib/llms-content";

// /md — representación markdown del sitio con el Content-Type que esperan
// los agentes. El middleware reescribe aquí la home cuando el request
// incluye `Accept: text/markdown`.
export const dynamic = "force-static";

export function GET() {
  return new Response(LLMS_CONTENT, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
