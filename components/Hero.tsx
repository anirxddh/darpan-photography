"use client";

import Slideshow from "@/components/Slideshow";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type HeroProps = {
  images?: string[];
};

const defaultImages = [
  // Replace these placeholder hero slideshow images with the final approved hero assets from the client.
  "/photo1.JPG",
  "/photo2.JPG",
  "/photo3.JPG",
  "/photo4.JPG",
  "/photo5.JPG",
];

export default function Hero({ images = defaultImages }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-32 overflow-hidden bg-[#131313] text-[#E5E2E1]"
    >
      <Slideshow images={images} />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,0.82)_0%,rgba(19,19,19,0.28)_26%,rgba(19,19,19,0.2)_62%,rgba(14,14,14,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(242,202,80,0.09),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.68),transparent_60%)]" />

      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(229, 226, 225, 0.35) 0, transparent 36%), url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[90rem] items-center justify-center px-6 pb-24 pt-36 sm:px-10 sm:pt-40 lg:px-16 lg:pb-28 lg:pt-44">
        <div className="flex max-w-[60rem] flex-col items-center text-center">
          <span
            className={`${inter.className} mb-6 block text-[0.72rem] uppercase tracking-[0.34em] text-[#F2CA50] sm:mb-8`}
          >
            Artistry in Motion
          </span>

          <h1
            className={`${manrope.className} max-w-[52rem] text-[2.9rem] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-[#E5E2E1] sm:text-[4.25rem] lg:text-[5.85rem]`}
          >
            Darpan
            <span
              className="block max-w-[92vw] whitespace-nowrap pb-[0.06em] font-light italic leading-[1.1] text-transparent sm:max-w-[88vw] lg:max-w-[56rem]"
              style={{
                fontSize: "clamp(2.2rem, 6.9vw, 4.85rem)",
                backgroundImage: "linear-gradient(135deg, #F2CA50 0%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
            Photography
            </span>
          </h1>

          <p
            className={`${inter.className} mt-8 max-w-[34rem] text-[0.98rem] leading-[1.75] text-[#D0C5AF] sm:mt-10 sm:text-[1.03rem]`}
          >
            Quietly storytelling through sculpted light, restrained
            motion, and frames that preserve the gravity of a fleeting moment.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:mt-14 sm:flex-row">
            <button
              type="button"
              className={`${manrope.className} min-w-[10.5rem] px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#3C2F00] transition-transform duration-300 hover:scale-[0.985]`}
              style={{
                backgroundImage: "linear-gradient(135deg, #F2CA50 0%, #D4AF37 100%)",
              }}
            >
              View Work
            </button>
            <button
              type="button"
              className={`${manrope.className} min-w-[10.5rem] bg-[rgba(42,42,42,0.7)] px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#E5E2E1] backdrop-blur-[18px] transition-colors duration-500 hover:bg-[rgba(53,53,52,0.85)]`}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-12">
        <span
          className={`${inter.className} text-[0.66rem] uppercase tracking-[0.3em] text-[#99907C]`}
        >
          Scroll
        </span>
        <span className="h-12 w-px bg-[linear-gradient(180deg,rgba(212,175,55,0.05)_0%,rgba(212,175,55,0.55)_100%)]" />
      </div>

      {/* Replace these default image paths with any files you add to /public, then pass them as the `images` prop if needed. */}
    </section>
  );
}
