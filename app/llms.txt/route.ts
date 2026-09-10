import { LLMS_CONTENT } from "@/lib/llms-content";

// /llms.txt — versión plain text para humanos y crawlers (llmstxt.org)
export const dynamic = "force-static";

export function GET() {
  return new Response(LLMS_CONTENT, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
