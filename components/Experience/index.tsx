"use client";

import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const experiences = [
    {
      number: "01",
      role: "Frontend Developer",
      company: "Enigmatix Pvt. Ltd.",
      type: "Professional Experience",
      description:
        "Worked on modern web and mobile applications, building responsive interfaces and maintaining production features.",
      responsibilities: [
        "Developed and maintained frontend interfaces using React and JavaScript.",
        "Worked on React Native applications and mobile user experiences.",
        "Integrated APIs and worked with application data and backend services.",
        "Fixed bugs and improved existing features across professional projects.",
      ],
      technologies: [
        "React",
        "React Native",
        "JavaScript",
        "TypeScript",
        "REST APIs",
      ],
    },
    {
      number: "02",
      role: "Frontend Development Intern",
      company: "Enigmatix Pvt. Ltd.",
      type: "Internship",
      description:
        "Started my professional development journey by working with frontend technologies and contributing to real-world projects.",
      responsibilities: [
        "Built responsive user interfaces with React.",
        "Worked with reusable components and frontend development practices.",
        "Learned professional development workflows and version control.",
      ],
      technologies: ["React", "JavaScript", "Git", "GitHub"],
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
      id="experience"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-10 md:py-32"
    >
      {/* ============================= */}
      {/* BACKGROUND */}
      {/* ============================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Large ghosted title */}
        <div className="absolute -right-10 top-20 select-none text-[8rem] font-black uppercase tracking-tighter text-white/[0.015] md:text-[14rem]">
          Experience
        </div>

        {/* Purple atmospheric glow */}
        <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/[0.06] blur-[120px]" />

        {/* Blue atmospheric glow */}
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

        {/* Cyan atmospheric glow */}
        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

        {/* Diagonal technical lines */}
        <div className="absolute -left-20 top-1/3 h-px w-[700px] rotate-[25deg] bg-gradient-to-r from-transparent via-purple-400/[0.08] to-transparent" />

        <div className="absolute -right-20 top-2/3 h-px w-[700px] -rotate-[25deg] bg-gradient-to-r from-transparent via-cyan-400/[0.07] to-transparent" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-purple-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Experience that{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              shaped my work.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
            A look at my professional journey, from starting as an intern to
            working as a frontend developer on real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="pointer-events-none absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-cyan-500/40 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className={`relative transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="grid gap-7 md:grid-cols-[90px_1fr] md:gap-8">
                  {/* Timeline point */}
                  <div className="relative hidden md:flex">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-zinc-950 text-sm font-semibold text-purple-300 transition duration-500 hover:border-purple-400/70 hover:bg-purple-500/10">
                      {experience.number}
                    </div>
                  </div>

                  {/* Experience content */}
                  <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.035] md:p-9">
                    {/* Accent glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/[0.06] blur-3xl transition duration-500 group-hover:bg-purple-500/[0.12]" />

                    <div className="relative">
                      {/* Mobile number */}
                      <div className="mb-6 flex items-center gap-4 md:hidden">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/30 text-sm font-semibold text-purple-300">
                          {experience.number}
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                      </div>

                      {/* Top information */}
                      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                        <div>
                          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                            {experience.type}
                          </p>

                          <h3 className="text-2xl font-semibold md:text-3xl">
                            {experience.role}
                          </h3>

                          <p className="mt-2 text-base text-gray-400">
                            {experience.company}
                          </p>
                        </div>

                        <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-500">
                          Professional Experience
                        </div>
                      </div>

                      <div className="my-7 h-px bg-gradient-to-r from-purple-500/30 via-blue-500/10 to-transparent" />

                      <p className="max-w-3xl text-base leading-7 text-gray-400">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mt-7">
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
                          What I worked on
                        </p>

                        <div className="space-y-3">
                          {experience.responsibilities.map((item) => (
                            <div
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-gray-500 transition duration-300 group-hover:text-gray-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/70" />

                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 flex flex-wrap gap-2.5">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs text-gray-500 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

          <span className="text-xs uppercase tracking-[0.3em] text-gray-700">
            Growing through experience
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Experience;