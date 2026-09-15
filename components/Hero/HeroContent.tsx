import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroContent = () => {
  const technologies = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ];

  return (
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
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-gray-400 transition duration-300 hover:border-purple-400/40 hover:text-white"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;