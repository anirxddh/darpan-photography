import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const posts = [
  {
    title: "The Alchemy of Low-Light Photography",
    description:
      "A closer look at shadow, atmosphere, and how to preserve texture without losing emotion.",
    // Replace this placeholder blog thumbnail with the final journal cover image.
    image: "/photo2.JPG",
    meta: "Technical · July 2024",
  },
  {
    title: "The Weight of Silence in Visual Arts",
    description:
      "Why restraint, negative space, and visual stillness often create the strongest frame.",
    // Replace this placeholder blog thumbnail with the final journal cover image.
    image: "/photo3.JPG",
    meta: "Philosophy · June 2024",
  },
  {
    title: "Echoes of Florence: A Photo Essay",
    description:
      "Observing form, architecture, and atmosphere through a slower editorial travel lens.",
    // Replace this placeholder blog thumbnail with the final journal cover image.
    image: "/photo4.JPG",
    meta: "Travel · May 2024",
  },
];

export default function Blogs() {
  return (
    <section
      id="journal"
      className="scroll-mt-32 bg-[#131313] px-6 py-28 text-[#E5E2E1] sm:px-10 sm:py-36 lg:px-16 lg:py-40"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-14">
        <div className="max-w-[34rem]">
          <span
            className={`${inter.className} mb-5 block text-[0.75rem] uppercase tracking-[0.3em] text-[#F2CA50]`}
          >
            Journal
          </span>
          <h2
            className={`${manrope.className} text-[2.6rem] font-extrabold uppercase tracking-[-0.03em] sm:text-[3.2rem]`}
          >
            Notes on light, story, and atmosphere.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden bg-[#0e0e0e]">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1100}
                  height={1200}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p
                className={`${inter.className} mt-6 text-[0.72rem] uppercase tracking-[0.22em] text-[#F2CA50]`}
              >
                {post.meta}
              </p>
              <h3
                className={`${manrope.className} mt-4 text-[1.5rem] font-bold tracking-[-0.02em]`}
              >
                {post.title}
              </h3>
              <p
                className={`${inter.className} mt-4 text-[0.98rem] leading-[1.8] text-[#D0C5AF]`}
              >
                {post.description}
              </p>
              <button
                type="button"
                className={`${inter.className} mt-6 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.26em] text-[#E5E2E1] transition-colors duration-300 hover:text-[#F2CA50]`}
              >
                <span>Read More</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-4 flex justify-center sm:mt-6">
          <button
            type="button"
            className={`${inter.className} inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-[#E5E2E1] transition-colors duration-300 hover:text-[#F2CA50]`}
          >
            <span>View All Posts</span>
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}
