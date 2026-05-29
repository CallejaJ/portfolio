// scripts/generate-cv-pdf.mjs
// Genera los PDFs del CV a partir de los HTML en public/
import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const cvFiles = [
  {
    html: path.join(publicDir, "cv_es_ats.html"),
    pdf: path.join(publicDir, "cv_es_jorge_calleja.pdf"),
    name: "CV ES",
  },
  {
    html: path.join(publicDir, "cv_en_ats.html"),
    pdf: path.join(publicDir, "cv_en_jorge_calleja.pdf"),
    name: "CV EN",
  },
];

async function generatePDFs() {
  console.log("🚀 Iniciando generación de CVs en PDF...\n");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const cv of cvFiles) {
    try {
      if (!fs.existsSync(cv.html)) {
        console.error(`❌ No se encuentra: ${cv.html}`);
        continue;
      }

      console.log(`📄 Generando ${cv.name}...`);

      const page = await browser.newPage();
      const fileUrl = `file:///${cv.html.replace(/\\/g, "/")}`;
      await page.goto(fileUrl, { waitUntil: "networkidle0" });

      await page.pdf({
        path: cv.pdf,
        format: "A4",
        printBackground: true,
        margin: {
          top: "10mm",
          bottom: "10mm",
          left: "14mm",
          right: "14mm",
        },
      });

      await page.close();

      const sizeKB = Math.round(fs.statSync(cv.pdf).size / 1024);
      console.log(`   ✅ Generado: ${path.basename(cv.pdf)} (${sizeKB} KB)`);
    } catch (err) {
      console.error(`   ❌ Error generando ${cv.name}:`, err.message);
    }
  }

  await browser.close();
  console.log("\n✨ ¡PDFs generados correctamente en /public!");
}

generatePDFs().catch(console.error);
