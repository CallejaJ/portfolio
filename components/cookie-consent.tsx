"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { META_PIXEL_ID } from "@/lib/site-config";

const STORAGE_KEY = "cookie-consent-v1";

// Banner de consentimiento RGPD. El Meta Pixel SOLO se carga si el usuario acepta.
const CookieConsent = ({ t }: { t: any }) => {
  const [decision, setDecision] = useState<"unknown" | "accepted" | "rejected">(
    "unknown"
  );

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setDecision(stored);
    }
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setDecision(value);
  };

  return (
    <>
      {/* Meta Pixel: se inyecta únicamente tras aceptar */}
      {decision === "accepted" && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      <AnimatePresence>
        {decision === "unknown" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-3 left-3 right-3 md:left-auto md:right-6 md:max-w-md z-[60] rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-2xl p-5"
          >
            <p className="text-sm text-foreground leading-relaxed mb-4">
              {t.cookies.text}{" "}
              <a href="/cookies" className="underline hover:text-primary">
                {t.cookies.more}
              </a>
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => choose("accepted")}
                className="flex-1 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                {t.cookies.accept}
              </button>
              <button
                onClick={() => choose("rejected")}
                className="flex-1 px-4 py-2.5 rounded-full border border-border bg-transparent text-foreground text-sm font-semibold hover:bg-muted/50 transition-all"
              >
                {t.cookies.reject}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
