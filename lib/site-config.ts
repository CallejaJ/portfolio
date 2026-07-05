// ============================================
// CONFIGURACIÓN DEL SITIO
// Cambia aquí tu número de WhatsApp si hace falta
// ============================================

export const WHATSAPP_NUMBER = "34649530022"; // prefijo país + número, sin "+" ni espacios

export const CONTACT_EMAIL = "callejaj@proton.me";

// URL pública del sitio
export const SITE_URL = "https://jorgecalleja.dev";

// Datos del titular para textos legales
export const LEGAL = {
  name: "Jorge Calleja Pérez",
  nif: "31865985Z",
  city: "Málaga, España",
  email: CONTACT_EMAIL,
  phone: "+34 649 53 00 22",
};

export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
