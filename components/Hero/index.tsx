import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-0 text-white md:px-10"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Building digital
            <br />
            experiences that matter.
          </h1>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:bg-gray-200 text-medium"
            >
              View Projects
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-700 px-7 py-3.5 font-medium text-white transition duration-300 hover:border-gray-500 hover:bg-white/[0.03]"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="lg:border-l lg:border-gray-800 lg:pl-12">
          <p className="mb-4 text-lg font-medium text-gray-300 md:text-xl">
            React & React Native Developer
          </p>

          <p className="max-w-xl text-base leading-8 text-gray-400 md:text-lg">
            I’m Farina Riaz, a frontend developer specializing in React, React Native, TypeScript, and JavaScript. I have experience building responsive web and mobile applications, integrating APIs, and developing user-focused interfaces. I enjoy turning ideas into clean, maintainable, and practical digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "React Native",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
