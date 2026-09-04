const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          Frontend Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
          Hi, I&apos;m Farina Riaz
        </h1>

        <h2 className="mt-4 text-xl font-medium text-gray-300 md:text-2xl">
          React & React Native Developer
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          I&apos;m a frontend developer specializing in React, React Native,
          TypeScript, and JavaScript. I build responsive, user-focused web and
          mobile applications with clean, maintainable code and modern UI.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-white transition hover:border-gray-500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;