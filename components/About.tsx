import Image from "next/image";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 bg-[#0e0e0e] px-6 py-28 text-[#E5E2E1] sm:px-10 sm:py-36 lg:px-16 lg:py-40"
    >
      <div className="mx-auto grid w-full max-w-[88rem] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="bg-[#1c1b1b] p-4 sm:p-5">
          {/* Replace this placeholder portrait with the final photographer image once the client shares it. */}
          <Image
            src="/photo1.JPG"
            alt="Darpan behind the camera"
            width={1100}
            height={1300}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Replace this image and copy here when final photographer bio content is ready. */}
        <div className="max-w-[40rem]">
          <span
            className={`${inter.className} mb-5 block text-[0.75rem] uppercase tracking-[0.3em] text-[#F2CA50]`}
          >
            The Man Himself
          </span>
          <h2
            className={`${manrope.className} text-[2.7rem] font-extrabold tracking-[-0.03em] sm:text-[3.35rem]`}
          >
            Meet Darpan
          </h2>
          <p
            className={`${inter.className} mt-8 text-[1rem] leading-[1.95] text-[#E5E2E1]`}
          >
            Darpan approaches photography as a form of quiet direction,
            building atmosphere through timing, light, and restraint rather
            than spectacle. The work is shaped to feel cinematic, but never
            distant from the people inside the frame.
          </p>
          <p
            className={`${inter.className} mt-8 text-[1rem] leading-[1.95] text-[#D0C5AF]`}
          >
            The result is a body of images that feels composed and premium
            while still preserving the emotional texture of real moments.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-10 pt-10">
            <div>
              <p className="text-[2.25rem] font-bold text-[#F2CA50]">12+</p>
              <p
                className={`${inter.className} mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-[#D0C5AF]`}
              >
                Years of Experience
              </p>
            </div>
            <div>
              <p className="text-[2.25rem] font-bold text-[#F2CA50]">450+</p>
              <p
                className={`${inter.className} mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-[#D0C5AF]`}
              >
                Number of Shoots
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
