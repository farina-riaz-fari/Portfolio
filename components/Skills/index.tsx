"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and maintainable web interfaces.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Mobile",
    description: "Creating practical cross-platform mobile experiences.",
    skills: ["React Native", "React Navigation", "React Native CLI"],
  },
  {
    number: "03",
    title: "State Management",
    description: "Managing application state with reliable patterns.",
    skills: ["Redux", "MobX", "Context API"],
  },
  {
    number: "04",
    title: "Backend & APIs",
    description: "Working with APIs, authentication, and connected services.",
    skills: ["REST APIs", "Axios", "Firebase", "Postman"],
  },
  {
    number: "05",
    title: "Tools",
    description: "Using modern tools for development and collaboration.",
    skills: ["Git", "GitHub", "Node.js", "Yarn"],
  },
];

const nodes = [
  { left: "7%", top: "18%", type: "purple", delay: "0s" },
  { left: "20%", top: "10%", type: "cyan", delay: "1.5s" },
  { left: "32%", top: "24%", type: "purple", delay: "2.5s" },
  { left: "47%", top: "12%", type: "cyan", delay: "0.8s" },
  { left: "61%", top: "22%", type: "purple", delay: "2s" },
  { left: "76%", top: "11%", type: "cyan", delay: "1s" },
  { left: "91%", top: "25%", type: "purple", delay: "2.8s" },

  { left: "12%", top: "48%", type: "cyan", delay: "2s" },
  { left: "28%", top: "58%", type: "purple", delay: "0.5s" },
  { left: "43%", top: "45%", type: "cyan", delay: "1.8s" },
  { left: "58%", top: "62%", type: "purple", delay: "2.7s" },
  { left: "73%", top: "48%", type: "cyan", delay: "0.7s" },
  { left: "88%", top: "59%", type: "purple", delay: "2.2s" },

  { left: "8%", top: "83%", type: "purple", delay: "1.2s" },
  { left: "24%", top: "91%", type: "cyan", delay: "2.5s" },
  { left: "41%", top: "79%", type: "purple", delay: "0.3s" },
  { left: "57%", top: "91%", type: "cyan", delay: "1.7s" },
  { left: "74%", top: "82%", type: "purple", delay: "2.4s" },
  { left: "91%", top: "90%", type: "cyan", delay: "0.9s" },
];

const connections = [
  ["7%", "18%", "20%", "10%"],
  ["20%", "10%", "32%", "24%"],
  ["32%", "24%", "47%", "12%"],
  ["47%", "12%", "61%", "22%"],
  ["61%", "22%", "76%", "11%"],
  ["76%", "11%", "91%", "25%"],

  ["12%", "48%", "28%", "58%"],
  ["28%", "58%", "43%", "45%"],
  ["43%", "45%", "58%", "62%"],
  ["58%", "62%", "73%", "48%"],
  ["73%", "48%", "88%", "59%"],

  ["8%", "83%", "24%", "91%"],
  ["24%", "91%", "41%", "79%"],
  ["41%", "79%", "57%", "91%"],
  ["57%", "91%", "74%", "82%"],
  ["74%", "82%", "91%", "90%"],

  ["20%", "10%", "43%", "45%"],
  ["47%", "12%", "58%", "62%"],
  ["61%", "22%", "73%", "48%"],
  ["28%", "58%", "41%", "79%"],
  ["58%", "62%", "74%", "82%"],
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
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
      className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-32"
    >
      {/* Tech Network Background */}
]
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Very soft ambient glows */}
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-purple-600/[0.055] blur-[140px]" />

        <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/[0.045] blur-[140px]" />

        {/* Network */}
        <div className="absolute inset-0 opacity-80">
          {connections.map((connection, index) => {
            const [x1, y1, x2, y2] = connection;

            return (
              <span
                key={index}
                className="network-line"
                style={
                  {
                    "--x1": x1,
                    "--y1": y1,
                    "--x2": x2,
                    "--y2": y2,
                    animationDelay: `${index * 0.15}s`,
                  } as React.CSSProperties
                }
              />
            );
          })}

          {nodes.map((node, index) => (
            <span
              key={index}
              className={`network-node ${
                node.type === "purple"
                  ? "network-node-purple"
                  : "network-node-cyan"
              }`}
              style={{
                left: node.left,
                top: node.top,
                animationDelay: node.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tools & technologies
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            A practical stack focused on building clean, responsive, and
            maintainable digital experiences.
          </p>
        </div>

        {/* Skills Timeline */}

        <div className="relative mt-16">
          {/* Timeline */}
          <div className="absolute left-[17px] top-0 hidden h-full w-px bg-gradient-to-b from-purple-500/50 via-purple-500/15 to-transparent sm:block" />

          <div className="space-y-10 sm:space-y-12">
            {skillGroups.map((group, index) => (
              <div
                key={group.number}
                className={`relative pl-0 transition-all duration-1000 sm:pl-16 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 120 + 150}ms`,
                }}
              >
                {/* Timeline number */}
                <div className="absolute left-0 top-0 hidden sm:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/30 bg-black text-xs font-semibold text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.12)]">
                    {group.number}
                  </div>
                </div>

                {/* Mobile number */}
                <div className="mb-4 flex items-center gap-3 sm:hidden">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-400/30 bg-black text-[11px] font-semibold text-purple-300">
                    {group.number}
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                </div>

                {/* Skill group card */}
                <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.035] hover:shadow-[0_15px_50px_rgba(168,85,247,0.07)] sm:p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Group information */}
                    <div className="max-w-md">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                          {group.title}
                        </h3>

                        <span className="h-px w-6 bg-gradient-to-r from-purple-500/50 to-transparent opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
                      </div>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {group.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/[0.08] bg-black/60 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.07] hover:text-purple-100 hover:shadow-[0_8px_25px_rgba(168,85,247,0.12)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-sm tracking-wide text-zinc-600">
            Always learning{" "}
            <span className="mx-2 text-purple-400">·</span>
            Always building
          </p>
        </div>
      </div>

      {/* Network Animation */}

      <style jsx>{`
        .network-line {
          position: absolute;
          left: var(--x1);
          top: var(--y1);
          width: 0;
          height: 1px;
          transform-origin: left center;
          transform: rotate(
            calc(
              atan2(
                calc(var(--y2) - var(--y1)),
                calc(var(--x2) - var(--x1))
              )
            )
          );
          opacity: 0.13;
          background: linear-gradient(
            90deg,
            rgba(168, 85, 247, 0),
            rgba(168, 85, 247, 0.35),
            rgba(34, 211, 238, 0.2),
            rgba(34, 211, 238, 0)
          );
          animation: networkLine 8s ease-in-out infinite;
        }

        /*
         * Instead of relying on complex geometry for the lines,
         * use pseudo-elements positioned between the network points.
         */

        .network-node {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          transform: translate(-50%, -50%);
          animation: nodePulse 5s ease-in-out infinite;
        }

        .network-node-purple {
          background: rgba(168, 85, 247, 0.75);
          box-shadow:
            0 0 7px rgba(168, 85, 247, 0.6),
            0 0 18px rgba(168, 85, 247, 0.2);
        }

        .network-node-cyan {
          background: rgba(34, 211, 238, 0.75);
          box-shadow:
            0 0 7px rgba(34, 211, 238, 0.6),
            0 0 18px rgba(34, 211, 238, 0.2);
        }

        @keyframes nodePulse {
          0%,
          100% {
            opacity: 0.25;
            transform: translate(-50%, -50%) scale(0.75);
          }

          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes networkLine {
          0%,
          100% {
            opacity: 0.05;
          }

          50% {
            opacity: 0.16;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .network-node,
          .network-line {
            animation: none;
          }

          .network-node {
            opacity: 0.45;
          }

          .network-line {
            opacity: 0.1;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;