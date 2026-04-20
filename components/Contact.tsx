import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-[#1c1b1b] px-6 py-28 text-[#E5E2E1] sm:px-10 sm:py-36 lg:px-16 lg:py-40"
    >
      <div className="mx-auto flex w-full max-w-[54rem] flex-col items-center text-center">
        <span
          className={`${inter.className} mb-5 block text-[0.75rem] uppercase tracking-[0.3em] text-[#F2CA50]`}
        >
          Contact Us
        </span>
        <h2
          className={`${manrope.className} text-[2.7rem] font-extrabold uppercase tracking-[-0.03em] sm:text-[3.35rem]`}
        >
          Let&apos;s discuss your next story.
        </h2>

        {/* Replace this static form handler with Firebase or an API submission flow later. */}
        <form className="mt-14 w-full text-left">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <label className="block">
              <span
                className={`${inter.className} text-[0.72rem] uppercase tracking-[0.22em] text-[#D0C5AF]`}
              >
                Name
              </span>
              <input
                type="text"
                placeholder="Enter your full name"
                className={`${inter.className} mt-4 w-full border-b border-[rgba(77,70,53,0.35)] bg-transparent pb-4 text-[1rem] text-[#E5E2E1] outline-none transition duration-300 placeholder:text-[#99907C] focus:border-[#F2CA50] focus:shadow-[0_10px_24px_-20px_rgba(242,202,80,0.75)]`}
              />
            </label>

            <label className="block">
              <span
                className={`${inter.className} text-[0.72rem] uppercase tracking-[0.22em] text-[#D0C5AF]`}
              >
                Email
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                className={`${inter.className} mt-4 w-full border-b border-[rgba(77,70,53,0.35)] bg-transparent pb-4 text-[1rem] text-[#E5E2E1] outline-none transition duration-300 placeholder:text-[#99907C] focus:border-[#F2CA50] focus:shadow-[0_10px_24px_-20px_rgba(242,202,80,0.75)]`}
              />
            </label>
          </div>

          <label className="mt-12 block">
            <span
              className={`${inter.className} text-[0.72rem] uppercase tracking-[0.22em] text-[#D0C5AF]`}
            >
              Contact Number
            </span>
            <input
              type="tel"
              placeholder="Enter your contact number"
              className={`${inter.className} mt-4 w-full border-b border-[rgba(77,70,53,0.35)] bg-transparent pb-4 text-[1rem] text-[#E5E2E1] outline-none transition duration-300 placeholder:text-[#99907C] focus:border-[#F2CA50] focus:shadow-[0_10px_24px_-20px_rgba(242,202,80,0.75)]`}
            />
          </label>

          <label className="mt-12 block">
            <span
              className={`${inter.className} text-[0.72rem] uppercase tracking-[0.22em] text-[#D0C5AF]`}
            >
              Message
            </span>
            <textarea
              rows={5}
              placeholder="Tell us about your project or vision"
              className={`${inter.className} mt-4 w-full resize-none border-b border-[rgba(77,70,53,0.35)] bg-transparent pb-4 text-[1rem] text-[#E5E2E1] outline-none transition duration-300 placeholder:text-[#99907C] focus:border-[#F2CA50] focus:shadow-[0_10px_24px_-20px_rgba(242,202,80,0.75)]`}
            />
          </label>

          <div className="mt-14 flex justify-center">
            <button
              type="submit"
              className={`${manrope.className} px-12 py-4 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#3C2F00] transition-transform duration-300 hover:scale-[0.98] active:scale-[0.96]`}
              style={{
                backgroundImage: "linear-gradient(135deg, #F2CA50 0%, #D4AF37 100%)",
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
