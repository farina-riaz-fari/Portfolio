const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-20 text-white md:px-10"
    >
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Building digital
            <br />
            experiences that
            <span className="text-gray-500"> matter.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I&apos;m Farina Riaz, a React and React Native developer focused on
            building responsive web and mobile applications with clean,
            maintainable code and thoughtful user experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-black transition duration-300 hover:bg-gray-200"
            >
              View Projects
              <span className="ml-2">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-700 px-7 py-3.5 font-medium text-white transition duration-300 hover:border-gray-500 hover:bg-white/[0.03]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <span>React</span>
            <span>React Native</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
