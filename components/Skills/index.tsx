"use client";

import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: "Building responsive and modern web interfaces.",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
      accent: "purple",
    },
    {
      number: "02",
      title: "Mobile",
      description: "Developing cross-platform mobile applications.",
      skills: ["React Native", "React Navigation", "React Native CLI"],
      accent: "cyan",
    },
    {
      number: "03",
      title: "State Management",
      description: "Managing application state with scalable solutions.",
      skills: ["Redux", "MobX", "Context API"],
      accent: "blue",
    },
    {
      number: "04",
      title: "Backend & APIs",
      description: "Working with APIs, data, and backend services.",
      skills: ["REST APIs", "Axios", "Firebase", "Postman"],
      accent: "purple",
    },
    {
      number: "05",
      title: "Tools",
      description: "Tools I use to build, test, and manage projects.",
      skills: ["Git", "GitHub", "Node.js", "Yarn"],
      accent: "cyan",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 md:py-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-600/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
              What I Work With
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Tools &{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                technologies
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-500">
            A practical stack focused on building clean, responsive, and
            maintainable digital experiences.
          </p>
        </div>

        {/* Skill map */}
        <div className="relative">
          {/* Vertical timeline */}
          <div className="pointer-events-none absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-cyan-500/40 md:block" />

          <div className="space-y-3">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative grid gap-6 border-b border-white/[0.07] py-6 md:grid-cols-[90px_220px_1fr] md:items-center md:gap-8">
                  {/* Number */}
                  <div className="relative flex items-center">
                    <span
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-black text-sm font-semibold transition duration-500 ${
                        group.accent === "purple"
                          ? "border-purple-400/30 text-purple-300 group-hover:border-purple-400/70 group-hover:bg-purple-500/10"
                          : group.accent === "cyan"
                            ? "border-cyan-400/30 text-cyan-300 group-hover:border-cyan-400/70 group-hover:bg-cyan-500/10"
                            : "border-blue-400/30 text-blue-300 group-hover:border-blue-400/70 group-hover:bg-blue-500/10"
                      }`}
                    >
                      {group.number}
                    </span>
                  </div>

                  {/* Category */}
                  <div>
                    <h3 className="text-xl font-semibold transition duration-300 group-hover:translate-x-1">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border bg-white/[0.015] px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 ${
                          group.accent === "purple"
                            ? "border-purple-400/15 text-gray-400 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-200"
                            : group.accent === "cyan"
                              ? "border-cyan-400/15 text-gray-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200"
                              : "border-blue-400/15 text-gray-400 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div
          className={`mt-14 flex items-center gap-4 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

          <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-600">
            Always learning · Always building
          </p>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Skills;