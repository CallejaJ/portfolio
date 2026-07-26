import sharp from "sharp";
import { readFileSync, mkdirSync } from "fs";
const OUT="/tmp/ads/framesA";mkdirSync(OUT,{recursive:true});
const full=readFileSync("/tmp/ads/faro-full.png");
const lines=(a,y0,size,color)=>a.map((l,i)=>`<text x="540" y="${y0+i*size*1.15}" font-family="Liberation Sans" font-size="${size}" font-weight="bold" fill="${l.c||color}" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">${l.t}</text>`).join("");
const gauge=(cx,cy,r,score,color,label,sw=16)=>{const th=(score/100)*2*Math.PI,ex=cx+r*Math.sin(th),ey=cy-r*Math.cos(th),lg=th>Math.PI?1:0;const arc=`<path d="M ${cx} ${cy-r} A ${r} ${r} 0 ${lg} 1 ${ex.toFixed(1)} ${ey.toFixed(1)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#0a0618" opacity="0.5"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#3a3f6b" stroke-width="${sw}"/>${arc}<text x="${cx}" y="${cy+r*0.22}" font-family="Liberation Sans" font-size="${r*0.72}" font-weight="bold" fill="${color}" text-anchor="middle">${score}</text>${label?`<text x="${cx}" y="${cy+r+52}" font-family="Liberation Sans" font-size="32" font-weight="bold" fill="white" text-anchor="middle">${label}</text>`:""}`;};
// Capa de contraste sobre la imagen: degradado violeta->cyan translúcido + oscurecido para leer texto
const overlayLayer=`<defs>
  <linearGradient id="tint" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4c1d95" stop-opacity="0.55"/><stop offset="1" stop-color="#0e7490" stop-opacity="0.55"/></linearGradient>
  <linearGradient id="darken" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0618" stop-opacity="0.45"/><stop offset="0.5" stop-color="#0a0618" stop-opacity="0.25"/><stop offset="1" stop-color="#0a0618" stop-opacity="0.7"/></linearGradient>
</defs>
<rect width="1080" height="1920" fill="url(#tint)"/><rect width="1080" height="1920" fill="url(#darken)"/>`;
async function frame(name,inner){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1920">${overlayLayer}${inner}</svg>`;
  await sharp(full).composite([{input:Buffer.from(svg),top:0,left:0}]).png().toFile(`${OUT}/${name}.png`);
  console.log("OK",name);
}
const R="#ff5a5a",O="#ffb020";
await frame("01",`${lines([{t:"¿Sabes qué nota"},{t:"le pone Google"},{t:"a tu web?"}],640,74,"white")}<text x="540" y="920" font-family="Liberation Sans" font-size="42" font-weight="bold" fill="#5eead4" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">Descúbrelo gratis.</text>`);
await frame("02",`<text x="540" y="300" font-family="Liberation Sans" font-size="54" font-weight="bold" fill="white" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">Muchas webs están así:</text>${gauge(300,560,145,42,R,"Velocidad")}${gauge(780,560,145,49,R,"Móvil")}${gauge(540,920,145,58,O,"SEO")}<text x="540" y="1170" font-family="Liberation Sans" font-size="42" font-weight="bold" fill="#ffcf4d" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">Rojo = pierdes clientes.</text>`);
await frame("03",`<text x="540" y="580" font-family="Liberation Sans" font-size="56" font-weight="bold" fill="white" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">Análisis</text><text x="540" y="705" font-family="Liberation Sans" font-size="130" font-weight="bold" fill="#4ade80" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="3">GRATUITO</text><text x="540" y="795" font-family="Liberation Sans" font-size="54" font-weight="bold" fill="white" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">de tu web</text><text x="540" y="880" font-family="Liberation Sans" font-size="36" fill="#e0d5ff" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">30 segundos · sin registro</text>`);
await frame("04",`${lines([{t:"Analiza tu web"},{t:"gratis, ahora.",c:"#4ade80"}],640,66,"white")}<text x="540" y="880" font-family="Liberation Sans" font-size="38" font-weight="bold" fill="#5eead4" text-anchor="middle" style="paint-order:stroke" stroke="#0a0618" stroke-width="2">El estándar real de Google.</text>`);
