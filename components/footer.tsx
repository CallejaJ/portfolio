// ============================================
// COMPONENTE: Footer
// ============================================

"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Footer = ({ t }: any) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="py-8 px-4 bg-background text-foreground border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-3">
          {mounted && (
            <img
              src={
                resolvedTheme === "dark"
                  ? "/images/profile.jpg"
                  : "/images/profile-light.jpg"
              }
              alt="Jorge Calleja Profile"
              className="w-12 h-12 mx-auto mb-2 opacity-80 hover:opacity-100 transition-opacity rounded-full object-cover"
            />
          )}
        </div>
        <p className="text-muted-foreground">
          &copy; 2024 Jorge Calleja Pérez. {t.developedWith}
        </p>
        <p className="text-muted-foreground text-sm mt-2">{t.quote}</p>
      </div>
    </footer>
  );
};

export default Footer;
