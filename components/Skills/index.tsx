"use client";

import { useEffect, useRef, useState } from "react";
import SkillCategory from "./SkillCategory";
import { connections, nodes, skillGroups } from "./skills";

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
              <SkillCategory
                key={group.number}
                group={group}
                index={index}
                isVisible={isVisible}
              />
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
