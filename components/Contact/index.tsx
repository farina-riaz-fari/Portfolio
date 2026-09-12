"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-10 md:py-32"
    >
      {/* CONTACT BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        {/* Central atmospheric glow */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.07] blur-[130px]" />

        {/* Secondary glows */}
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-blue-500/[0.04] blur-[100px]" />

        <div className="absolute bottom-[5%] right-[8%] h-72 w-72 rounded-full bg-cyan-500/[0.04] blur-[110px]" />

        {/* CENTRAL ORB */}

        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.07]">
          <div className="absolute inset-8 rounded-full border border-blue-400/[0.06]" />

          <div className="absolute inset-20 rounded-full border border-cyan-400/[0.06]" />

          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/[0.08] via-blue-500/[0.06] to-cyan-400/[0.08] blur-sm" />
        </div>

        {/* DECORATIVE CONTACT ICONS */}

        {/* Email */}
        <div className="absolute left-[7%] top-[18%] rotate-[-12deg] text-[7rem] text-purple-400/[0.035] md:left-[10%] md:text-[10rem]">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        {/* Phone */}
        <div className="absolute bottom-[12%] left-[12%] rotate-[12deg] text-[5rem] text-blue-400/[0.035] md:text-[8rem]">
          <FontAwesomeIcon icon={faPhone} />
        </div>

        {/* GitHub */}
        <div className="absolute right-[8%] top-[14%] rotate-[10deg] text-[7rem] text-cyan-400/[0.035] md:right-[12%] md:text-[10rem]">
          <FontAwesomeIcon icon={faGithub} />
        </div>

        {/* LinkedIn */}
        <div className="absolute bottom-[10%] right-[12%] rotate-[-10deg] text-[6rem] text-purple-400/[0.035] md:text-[9rem]">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>

        {/* SMALL FLOATING LIGHTS */}

        <div className="absolute left-[25%] top-[22%] h-1.5 w-1.5 rounded-full bg-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />

        <div className="absolute right-[28%] top-[24%] h-1 w-1 rounded-full bg-cyan-400/50 shadow-[0_0_18px_rgba(34,211,238,0.5)]" />

        <div className="absolute bottom-[24%] left-[30%] h-1 w-1 rounded-full bg-blue-400/40 shadow-[0_0_18px_rgba(59,130,246,0.5)]" />

        <div className="absolute bottom-[20%] right-[27%] h-1.5 w-1.5 rounded-full bg-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.4)]" />

        {/* Soft horizontal light */}
        <div className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/[0.08] to-transparent" />
      </div>

      {/* CONTENT */}

      <div
        className={`relative mx-auto max-w-6xl transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        {/* Label */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            Get In Touch
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          {/* Heading */}
          <div>
            <h2 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                meaningful.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              I&apos;m always open to discussing new projects, opportunities,
              and interesting ideas. If you have something in mind, let&apos;s
              talk.
            </p>
          </div>

          {/* Email CTA */}
          <div className="lg:justify-self-end">
            <a
              href="mailto:farinariaz573@gmail.com"
              className="group inline-flex items-center gap-4 rounded-full border border-purple-400/30 bg-purple-500/[0.08] px-7 py-4 font-medium text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/[0.15]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>

              <span>Email Me</span>

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-sm text-gray-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-cyan-500/10" />

        {/* Contact details */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Email + Phone */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="mailto:farinariaz573@gmail.com"
              className="group flex items-center gap-3 text-sm text-gray-500 transition duration-300 hover:text-white"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-purple-400/70 transition group-hover:text-purple-300"
              />

              farinariaz573@gmail.com
            </a>

            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <a
              href="tel:+923036740104"
              className="group flex items-center gap-3 text-sm text-gray-500 transition duration-300 hover:text-white"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="text-cyan-400/70 transition group-hover:text-cyan-300"
              />

              +92 303 6740104
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/farina-riaz-fari"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.08] hover:text-purple-300"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="mr-2 transition-transform duration-300 group-hover:scale-110"
              />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/farina-riaz-867066240/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/[0.08] hover:text-cyan-300"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="mr-2 transition-transform duration-300 group-hover:scale-110"
              />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom signature */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

          <span className="text-xs uppercase tracking-[0.3em] text-gray-700">
            Let&apos;s create something great
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
