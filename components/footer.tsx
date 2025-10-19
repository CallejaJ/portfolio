// ============================================
// COMPONENTE: Footer
// ============================================

"use client";

import React from "react";

const Footer = ({ t }: any) => {
  return (
    <footer className="py-8 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-3">
          <img
            src="/jorgecallejaicon.png"
            alt="Jorge Calleja Logo"
            className="w-12 h-12 mx-auto mb-2 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        <p className="text-slate-400">
          &copy; 2024 Jorge Calleja Pérez. {t.developedWith}
        </p>
        <p className="text-slate-500 text-sm mt-2">{t.quote}</p>
      </div>
    </footer>
  );
};

export default Footer;
