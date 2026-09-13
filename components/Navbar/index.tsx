"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBars,
  faBriefcase,
  faCode,
  faFolderOpen,
  faHouse,
  faPhone,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", icon: faHouse },
    { label: "About", href: "#about", icon: faUser },
    { label: "Projects", href: "#projects", icon: faFolderOpen },
    { label: "Skills", href: "#skills", icon: faCode },
    { label: "Experience", href: "#experience", icon: faBriefcase },
    { label: "Contact", href: "#contact", icon: faPhone },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-96 -translate-x-1/2 rounded-full bg-purple-600/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Main navbar */}
        <div className="rounded-2xl border border-white/[0.08] bg-black/70 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl md:px-5">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className="group flex items-center gap-2"
            >
              <span className="text-lg font-semibold tracking-tight text-white">
                Farina Riaz
              </span>

              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.5)] transition duration-300 group-hover:scale-125" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(sectionId)}
                    className={`group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm transition duration-300 ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-gray-500 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`text-[11px] transition duration-300 ${
                        isActive
                          ? "text-purple-300"
                          : "text-gray-600 group-hover:text-purple-300"
                      }`}
                    />

                    <span>{item.label}</span>

                    {/* Active / Hover indicator */}
                    <span
                      className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 ${
                        isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`}
                    />

                    {/* Active glow */}
                    <span
                      className={`pointer-events-none absolute inset-0 -z-10 rounded-full bg-purple-500/5 blur-md transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className={`group hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 md:flex ${
                activeSection === "contact"
                  ? "border-purple-400/40 bg-purple-500/[0.15] text-purple-100"
                  : "border-purple-400/20 bg-purple-500/[0.08] text-purple-200 hover:border-purple-400/40 hover:bg-purple-500/[0.15]"
              }`}
            >
              <span>Let&apos;s Talk</span>

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs text-purple-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-400 transition duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.08] hover:text-white md:hidden"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faXmark : faBars}
                className="text-sm"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isMenuOpen
                ? "max-h-[420px] border-t border-white/[0.06] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 py-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(sectionId)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm transition duration-300 ${
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`w-4 text-[11px] transition duration-300 ${
                          isActive
                            ? "text-purple-300"
                            : "text-gray-600 group-hover:text-purple-300"
                        }`}
                      />

                      {item.label}
                    </span>

                    <span
                      className={`h-1.5 w-1.5 rounded-full transition duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                          : "bg-gray-700 group-hover:bg-purple-300"
                      }`}
                    />
                  </a>
                );
              })}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className={`mt-2 flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition duration-300 ${
                  activeSection === "contact"
                    ? "border-purple-400/40 bg-purple-500/[0.15] text-purple-100"
                    : "border-purple-400/20 bg-purple-500/[0.08] text-purple-200 hover:border-purple-400/40 hover:bg-purple-500/[0.14]"
                }`}
              >
                <FontAwesomeIcon icon={faPhone} className="text-xs" />

                <span>Let&apos;s Talk</span>

                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xs"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
