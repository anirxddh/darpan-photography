"use client";

import { useEffect } from "react";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer() {
  useEffect(() => {
    const handleAdminShortcut = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        window.location.href = "/admin";
      }
    };

    window.addEventListener("keydown", handleAdminShortcut);

    return () => window.removeEventListener("keydown", handleAdminShortcut);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] px-4 pb-24 pt-20 text-white sm:px-8 sm:pb-28 sm:pt-24 lg:px-16 lg:pb-32 lg:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-95"
        style={{
          // Tweak these gradient colors/stops to shift the cinematic warmth.
          background:
            "radial-gradient(circle at 20% 30%, rgba(242,202,80,0.25), transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 60% 80%, rgba(212,175,55,0.2), transparent 50%), #0A0A0A",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/16 backdrop-blur-[2.5px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-linear-to-b from-transparent via-[#0A0A0A]/45 to-[#0A0A0A]" />

      <div className="relative z-20 mx-auto w-full max-w-352 px-2 py-4 sm:px-4 lg:px-2">
        <div className="flex min-h-112 flex-col justify-between gap-14 sm:min-h-124 sm:gap-16 lg:min-h-92 lg:gap-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-136">
              <p
                className={`${inter.className} text-[0.98rem] leading-[1.55] text-white/72 sm:text-[1.05rem]`}
              >
                Cinematic storytelling for weddings, editorials, and live
                moments. Capturing things with calm direction, emotional detail, and a
                premium visual finish.
              </p>
            </div>

            <a
              href="mailto:hello@studio.com"
              className={`${manrope.className} text-[1.65rem] font-light tracking-[-0.04em] text-white underline underline-offset-8 decoration-white/18 transition-colors duration-300 hover:text-white sm:text-[2.3rem] lg:text-right`}
            >
              hello@studio.com
            </a>
          </div>

          <div
            className={`${inter.className} flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.72rem] uppercase tracking-[0.22em] text-white`}
          >
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>

          <div className="relative pt-6 sm:pt-8 lg:pt-4">
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end sm:gap-6">
              <p
                className={`${inter.className} text-[0.72rem] uppercase tracking-[0.22em] text-white/55`}
              >
                © 2026 DARPAN PHOTOGRAPHY
              </p>
              <p
                className={`${inter.className} text-[0.72rem] uppercase tracking-[0.22em] text-white/55`}
              >
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Control oversized text positioning from this wrapper and translate value. */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 justify-center overflow-hidden px-0 md:px-2 lg:px-2">
        {/* Adjust text scale/tracking here to keep the wide look while fitting each viewport. */}
        <h2
          className={`${manrope.className} mx-auto w-full max-w-[100vw] translate-y-[24%] whitespace-nowrap text-center text-[clamp(1.5rem,7.2vw,2.8rem)] font-extrabold uppercase leading-none tracking-[0.005em] text-white/10 select-none sm:max-w-[100vw] sm:translate-y-[25%] sm:text-[clamp(1.95rem,6.5vw,4.15rem)] sm:tracking-[0.01em] md:max-w-[95vw] md:translate-y-[26%] md:text-[clamp(1.95rem,5.3vw,3.85rem)] md:tracking-[0.01em] lg:max-w-[96vw] lg:translate-y-[28%] lg:text-[clamp(2.1rem,8.2vw,8.4rem)] lg:tracking-[0.02em]`}
        >
          DARPAN PHOTOGRAPHY
        </h2>
      </div>

      {/* Change the admin shortcut in the keydown handler above if a different trigger is needed. */}
      {/* The hidden admin redirect is handled by navigating to the /admin route. */}
    </footer>
  );
}
