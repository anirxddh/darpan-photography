"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Inter, Manrope } from "next/font/google";

import { photos } from "@/data/photos";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const categoryTabs = [
  "All",
  "Pre Wedding",
  "Wedding",
  "Cinematography",
  "Photography",
  "College Fest",
] as const;

const galleryContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const galleryItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function normalizeCategory(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categoryTabs)[number]>("All");

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") {
      return photos;
    }

    return photos.filter(
      (photo) =>
        normalizeCategory(photo.category) === normalizeCategory(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section className="bg-[#131313] px-6 py-28 text-[#E5E2E1] sm:px-10 sm:py-36 lg:px-16 lg:py-40">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-16 lg:gap-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[36rem]">
            <span
              className={`${inter.className} mb-5 block text-[0.82rem] uppercase tracking-[0.32em] text-[#F2CA50]`}
            >
              Portfolio Gallery
            </span>
            <h2
              className={`${manrope.className} text-[2.7rem] font-extrabold uppercase tracking-[-0.03em] text-[#E5E2E1] sm:text-[3.35rem]`}
            >
              Curated Collection of My Best Work!
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:max-w-[34rem] lg:justify-end">
            {categoryTabs.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`${inter.className} text-[0.68rem] uppercase tracking-[0.24em] transition-colors duration-500 ${
                    isActive ? "text-[#F2CA50]" : "text-[#99907C] hover:text-[#E5E2E1]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Replace this static import with backend API data once the gallery is served dynamically. */}
        {/* Adjust luxury spacing via the grid gap classes and hover pacing through the transition duration below. */}
        <motion.div
          className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-16 xl:gap-y-20"
          variants={galleryContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {filteredPhotos.map((photo) => (
            <motion.article
              key={photo.id}
              className="group"
              variants={galleryItemVariants}
            >
              <div className="aspect-square overflow-hidden bg-[#0E0E0E]">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-[1.05]"
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, (max-width: 1535px) 33vw, 25vw"
                />
              </div>

              <div className="pt-6 sm:pt-7">
                <h3
                  className={`${manrope.className} text-[1.18rem] font-bold uppercase tracking-[-0.02em] text-[#E5E2E1]`}
                >
                  {photo.title}
                </h3>
                <p
                  className={`${inter.className} mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-[#99907C]`}
                >
                  {photo.category}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPhotos.length === 0 ? (
          <p
            className={`${inter.className} text-[0.92rem] leading-7 text-[#99907C]`}
          >
            No work is published in this category yet.
          </p>
        ) : null}

        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`${inter.className} inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#E5E2E1] transition-colors duration-300 hover:text-[#F2CA50]`}
          >
            <span>View All</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}
