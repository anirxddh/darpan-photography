import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const testimonials = [
  {
    quote:
      "Darpan captured UTTHAAN exactly the way we experienced it — full of energy, chaos, and unforgettable moments. The photos didn’t just document the event, they brought it back to life.",
    name: "Organizing Committee, UTTHAAN",
    role: "BIT Deoghar",
  },
  {
    quote:
      "We didn’t just get wedding photos, we got memories that feel alive every time we look at them. Darpan has this ability to capture emotions in the most natural and elegant way.",
    name: "Rahul & Sania",
    role: "",
  },
  {
    quote:
      "The entire experience was effortless. From candid moments to group shots, everything felt natural and beautifully captured. It genuinely felt like having a storyteller, not just a photographer.",
    name: "Hiresh",
    role: "",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#131313] px-6 py-28 text-[#E5E2E1] sm:px-10 sm:py-36 lg:px-16 lg:py-40">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-14">
        <div className="flex items-center gap-6">
          <h2
            className={`${manrope.className} text-[1.9rem] font-extrabold uppercase tracking-[-0.02em]`}
          >
            Testimonials
          </h2>
          <div className="h-px flex-1 bg-[rgba(77,70,53,0.2)]" />
        </div>

        {/* Replace this static list with backend-driven testimonial data when CMS/API content is ready. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="group relative">
              <article className="relative bg-[#1c1b1b] px-8 py-9 transition duration-500 ease-out group-hover:translate-y-[-4px] group-hover:brightness-110 group-hover:shadow-[0_10px_24px_-20px_rgba(242,202,80,0.75)]">
                <span className="text-[2.5rem] leading-none text-[#D4AF37]/50">
                  &ldquo;
                </span>
                <p
                  className={`${inter.className} mt-4 text-[1.03rem] italic leading-[1.9] text-[#E5E2E1]`}
                >
                  {item.quote}
                </p>
                <div className="mt-10">
                  <p
                    className={`${manrope.className} text-[1rem] font-bold uppercase tracking-[-0.01em] text-[#E5E2E1]`}
                  >
                    {item.name}
                  </p>
                  {item.role ? (
                    <p
                      className={`${inter.className} mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-[#D0C5AF]`}
                    >
                      {item.role}
                    </p>
                  ) : null}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
