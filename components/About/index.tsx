"use client";

import { useEffect, useRef, useState } from "react";

const About = () => {
  const technologies = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Git",
  ];

  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-10 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-purple-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              clean,
            </span>
            <br />
            practical digital experiences.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left content */}
          <div>
            <p className="text-lg leading-8 text-gray-400 md:text-xl">
              I&apos;m Farina Riaz, a frontend developer focused on building
              modern web and mobile applications using React, React Native,
              TypeScript, and JavaScript.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
              I enjoy transforming ideas into responsive, user-friendly
              interfaces with clean code, reusable components, and thoughtful
              user experiences.
            </p>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-4">
              <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/[0.05]">
                <p className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent">
                  3
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

              <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/[0.05]">
                <p className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
                  3
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Featured Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right stack card */}
          <div
            ref={cardRef}
            className={`group relative rounded-3xl border border-white/[0.08] bg-black/60 p-8 backdrop-blur-xl transition-all duration-1000 ease-out hover:border-purple-500/30 md:p-10 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-24 opacity-0"
            }`}
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

            <div className="relative">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-400">
                My Stack
              </p>

              <h3 className="mb-8 text-2xl font-semibold">
                Technologies I work with
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-4 py-2.5 text-sm transition duration-300 hover:-translate-y-1 ${
                      index % 3 === 0
                        ? "border-purple-500/30 text-purple-300 hover:border-purple-400 hover:bg-purple-500/10"
                        : index % 3 === 1
                          ? "border-blue-500/30 text-blue-300 hover:border-blue-400 hover:bg-blue-500/10"
                          : "border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Decorative line */}
              <div className="mt-10 h-px w-full bg-gradient-to-r from-purple-500/40 via-blue-500/20 to-transparent" />

              <p className="mt-6 text-sm leading-7 text-gray-500">
                Focused on building scalable interfaces, reusable components,
                and smooth digital experiences across web and mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;