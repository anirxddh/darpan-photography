import { BookOpen, Camera, Clapperboard, Heart, Plane } from "lucide-react";
import { Inter, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const services = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Fine-art documentary coverage for high-end nuptials and intimate editorials.",
    action: "View Portfolio",
  },
  {
    icon: Clapperboard,
    title: "Cinematography",
    description:
      "Cinematic 4K short films that capture the movement and sound of your love story.",
    action: "View Films",
  },
  {
    icon: Plane,
    title: "Drone Coverage",
    description:
      "Epic aerial perspectives capturing the scale and grandeur of your venue.",
    action: "Learn More",
  },
  {
    icon: BookOpen,
    title: "Heirloom Albums",
    description:
      "Hand-crafted, Italian leather-bound albums designed to last for generations.",
    action: "Order Now",
  },
  {
    icon: Heart,
    title: "Wedding Coverage",
    description:
      "From pre wedding, haldi to reception, every memory captured with calm precision.",
    action: "Learn More",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-32 bg-[#1c1b1b] px-6 py-28 text-[#E5E2E1] sm:px-10 sm:py-36 lg:px-16 lg:py-40"
    >
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-6 lg:gap-7">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          <div className="flex min-h-[21rem] items-start bg-transparent px-2 py-4 sm:px-3 lg:px-0 lg:py-6">
            <div className="max-w-[18rem]">
              <h2
                className={`${manrope.className} text-[3rem] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-[#E5E2E1] sm:text-[3.65rem]`}
              >
                Our
                <br />
                Services
              </h2>
              <p
                className={`${inter.className} mt-8 text-[1rem] leading-[1.9] text-[#E5E2E1]`}
              >
                We don&apos;t just take pictures. We engineer emotions through
                visual storytelling.
              </p>
            </div>
          </div>

          {/* Update these titles, descriptions, actions, and icons here when service content changes later. */}
          {services.slice(0, 2).map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex min-h-[21rem] flex-col bg-[#131313] px-8 py-9 transition duration-500 ease-out hover:translate-y-[-4px] hover:brightness-110 sm:px-10 sm:py-10"
              >
                <Icon className="h-5 w-5 text-[#F2CA50]" strokeWidth={1.8} />
                <h3
                  className={`${manrope.className} mt-7 text-[1.42rem] font-bold tracking-[-0.02em] text-[#E5E2E1]`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${inter.className} mt-4 max-w-[18rem] text-[0.98rem] leading-[1.8] text-[#E5E2E1]`}
                >
                  {service.description}
                </p>
                <p
                  className={`${inter.className} mt-auto pt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#F2CA50]`}
                >
                  <span>{service.action}</span>
                  <span aria-hidden="true">→</span>
                </p>
              </article>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(2).map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex min-h-[21rem] flex-col bg-[#131313] px-8 py-9 transition duration-500 ease-out hover:translate-y-[-4px] hover:brightness-110 sm:px-10 sm:py-10"
              >
                <Icon className="h-5 w-5 text-[#F2CA50]" strokeWidth={1.8} />
                <h3
                  className={`${manrope.className} mt-7 text-[1.42rem] font-bold tracking-[-0.02em] text-[#E5E2E1]`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${inter.className} mt-4 max-w-[18rem] text-[0.98rem] leading-[1.8] text-[#E5E2E1]`}
                >
                  {service.description}
                </p>
                <p
                  className={`${inter.className} mt-auto pt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#F2CA50]`}
                >
                  <span>{service.action}</span>
                  <span aria-hidden="true">→</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
