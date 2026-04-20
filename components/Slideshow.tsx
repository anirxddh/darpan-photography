"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type SlideshowProps = {
  images: string[];
};

export default function Slideshow({ images }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    // Change this value to control how long each image stays on screen.
    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return <div className="absolute inset-0 bg-black" aria-hidden="true" />;
  }

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden" aria-hidden="true">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentImage}
          className="absolute inset-0 will-change-transform"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.55, ease: "easeInOut" }}
        >
          <Image
            src={currentImage}
            alt=""
            fill
            priority
            className="object-cover object-center scale-[0.985]"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={`overlay-${currentIndex}`}
        className="pointer-events-none absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.16, 0] }}
        transition={{ duration: 1.55, ease: "easeInOut" }}
      />

      {/* Change or expand this slideshow by passing a different array of image paths into the `images` prop. */}
      {/* Example paths for files in /public: ["/photo1.JPG", "/photo2.JPG", "/photo3.JPG"] */}
      {/* Change the dissolve timing in the `transition.duration` values above. */}
      {/* Change the animation intensity by adjusting the `scale` values and overlay opacity peak. */}
    </div>
  );
}
