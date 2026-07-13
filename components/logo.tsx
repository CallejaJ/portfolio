"use client";
import React from "react";

// ============================================
// LOGO CORPORATIVO: Faro (visibilidad / Lighthouse)
// Gradiente de marca azul → púrpura, luz cyan
// ============================================

export const FaroLogo = ({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="faro-tower" x1="24" y1="16" x2="24" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3b82f6" />
        <stop offset="1" stopColor="#9333ea" />
      </linearGradient>
      <linearGradient id="faro-roof" x1="19" y1="4" x2="29" y2="10" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3b82f6" />
        <stop offset="1" stopColor="#9333ea" />
      </linearGradient>
    </defs>

    {/* Haces de luz */}
    <path d="M20 13 L2 5 L2 12 Z" fill="#22d3ee" opacity="0.55" />
    <path d="M28 13 L46 5 L46 12 Z" fill="#22d3ee" opacity="0.55" />

    {/* Cúpula */}
    <path d="M18.5 10 L29.5 10 L24 3.5 Z" fill="url(#faro-roof)" />

    {/* Linterna con luz */}
    <rect x="20" y="10" width="8" height="5.5" rx="1.2" fill="#0f0a1e" />
    <circle cx="24" cy="12.8" r="2.1" fill="#22d3ee" />

    {/* Galería */}
    <rect x="17.8" y="15.2" width="12.4" height="1.8" rx="0.9" fill="#1e1b4b" />

    {/* Torre */}
    <path d="M19 17 L29 17 L31.5 40 L16.5 40 Z" fill="url(#faro-tower)" />

    {/* Franjas claras */}
    <path d="M18.45 22 L29.55 22 L30 26 L18 26 Z" fill="#e9e4f8" opacity="0.9" />
    <path d="M17.5 31 L30.5 31 L30.95 35 L17.05 35 Z" fill="#e9e4f8" opacity="0.9" />

    {/* Puerta */}
    <rect x="22.4" y="35.5" width="3.2" height="4.5" rx="1.5" fill="#0f0a1e" />

    {/* Base */}
    <rect x="14.5" y="40" width="19" height="3" rx="1.5" fill="#312e81" />

    {/* Olas */}
    <path d="M6 45.5 Q10 43 14 45.5" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M34 45.5 Q38 43 42 45.5" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.6" />
  </svg>
);

// Alias para compatibilidad con imports antiguos
export const RocketLogo = FaroLogo;

export default FaroLogo;
