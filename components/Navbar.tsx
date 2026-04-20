"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const navItems = ["Portfolio", "Services", "About", "Journal"];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -18,
    scale: 0.985,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.055,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 0.99,
    filter: "blur(8px)",
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 1, 1],
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-6 text-[#E5E2E1] sm:px-6 lg:px-10 lg:pt-8">
      <div
        className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-6 py-5 backdrop-blur-[32px] sm:px-8 lg:px-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(58,57,57,0.22) 0%, rgba(42,42,42,0.12) 48%, rgba(229,226,225,0.06) 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(255,255,255,0.03), 0 18px 50px rgba(0,0,0,0.24)",
        }}
      >
        <div className={`${manrope.className} flex items-baseline gap-2 uppercase`}>
          <span className="text-[0.95rem] font-extrabold tracking-[0.28em] text-[#E5E2E1] sm:text-[1.08rem]">
            Darpan
          </span>
          <span
            className="text-[0.72rem] font-semibold tracking-[0.24em] text-transparent sm:text-[0.82rem]"
            style={{
              backgroundImage: "linear-gradient(135deg, #F2CA50 0%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Photography
          </span>
        </div>

        <nav
          className={`${inter.className} hidden items-center gap-8 lg:flex`}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <span
              key={item}
              className="cursor-default text-[0.68rem] uppercase tracking-[0.24em] text-[#99907C] transition-colors duration-500 hover:text-[#E5E2E1]"
            >
              {item}
            </span>
          ))}

          <button
            type="button"
            className={`${manrope.className} px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#3C2F00] transition-transform duration-300 hover:scale-[0.98]`}
            style={{
              backgroundImage: "linear-gradient(135deg, #F2CA50 0%, #D4AF37 100%)",
            }}
          >
            Inquire
          </button>
        </nav>

        <button
          type="button"
          className={`${inter.className} text-[0.68rem] uppercase tracking-[0.28em] text-[#F2CA50] lg:hidden`}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="mx-auto mt-3 w-full max-w-[88rem] px-1 lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative overflow-hidden px-6 py-5 backdrop-blur-[28px] sm:px-8"
              style={{
                background:
                  "linear-gradient(160deg, rgba(20,24,30,0.78) 0%, rgba(18,23,34,0.72) 45%, rgba(15,18,28,0.76) 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.34)",
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(229,226,225,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_100%)]" />

              <div className="relative flex flex-col gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item}
                    type="button"
                    variants={mobileItemVariants}
                    className={`${inter.className} py-3 text-left text-[0.74rem] uppercase tracking-[0.24em] text-[#E5E2E1] transition-colors duration-300 hover:text-[#F2CA50]`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.button>
                ))}

                <motion.button
                  type="button"
                  variants={mobileItemVariants}
                  className={`${manrope.className} mt-3 px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#3C2F00]`}
                  style={{
                    backgroundImage: "linear-gradient(135deg, #F2CA50 0%, #D4AF37 100%)",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inquire
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
