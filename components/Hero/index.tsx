import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 pt-24 text-white md:px-10"
    >
      {/* BACKGROUND DIAMONDS */}

      {/* Top-left purple diamond */}
      <div className="pointer-events-none absolute left-10 top-24 z-0 h-70 w-70 rotate-45 bg-purple-600/5 blur-3xl" />

      <div className="pointer-events-none absolute left-10 top-24 z-0 h-70 w-70 rotate-45 border border-purple-400/15" />

      {/* Center blue diamond */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-blue-400/10" />

      {/* Bottom-right cyan diamond */}
      <div className="pointer-events-none absolute bottom-10 right-10 z-0 h-76 w-76 rotate-45 bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-10 z-0 h-76 w-76 rotate-45 border border-cyan-400/15" />

      {/* MAIN CONTENT */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* LEFT */}
        <div className="hero-content">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-sm text-gray-400">
              Available for opportunities
            </span>
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Building digital
            <br />
            <span className="hero-gradient-text">
              experiences that matter.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I’m Farina Riaz, a frontend developer specializing in React,
            React Native, TypeScript, and JavaScript. I have experience
            building responsive web and mobile applications, integrating APIs,
            and developing user-focused interfaces.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
            >
              View Projects

              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "React",
              "React Native",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-gray-400 transition duration-300 hover:border-purple-400/40 hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-[350px] w-[350px] rounded-full bg-gradient-to-r from-purple-600/30 via-blue-500/20 to-cyan-400/20 blur-[80px]" />

          <div className="hero-image relative">
            <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-70" />

            <div className="relative h-[390px] w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900 md:h-[450px] md:w-[370px]">
              <Image
                src="/images/profile.png"
                alt="Profile"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 320px, 370px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-8 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md md:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                <FontAwesomeIcon icon={faCode} className="h-4 w-4" />
              </div>

              <div>
                <p className="text-xs text-gray-500">Specialized in</p>

                <p className="text-sm font-medium text-white">
                  React & TypeScript
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md md:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="h-4 w-4"
                />
              </div>

              <div>
                <p className="text-xs text-gray-500">Building for</p>

                <p className="text-sm font-medium text-white">
                  Web & Mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;