const About = () => {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Turning ideas into clean,
            <br />
            practical digital experiences.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Left content */}
          <div>
            <p className="text-lg leading-8 text-gray-400 md:text-xl">
              I&apos;m Farina Riaz, a frontend developer focused on building
              modern web and mobile applications using React, React Native,
              TypeScript, and JavaScript.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
              I enjoy transforming ideas into responsive, user-friendly
              interfaces with clean code, reusable components, and thoughtful
              user experiences.
            </p>

            <div className="mt-10 flex items-center gap-10">
              <div>
                <p className="text-3xl font-bold text-white">3</p>
                <p className="mt-1 text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

              <div className="h-12 w-px bg-zinc-800" />

              <div>
                <p className="text-3xl font-bold text-white">3</p>
                <p className="mt-1 text-sm text-gray-500">
                  Featured Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-2xl border border-zinc-800 bg-black p-8 md:p-10">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-gray-600">
              My Stack
            </p>

            <h3 className="mb-8 text-2xl font-semibold">
              Technologies I work with
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Tailwind CSS",
                "Redux",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-800 px-4 py-2.5 text-sm text-gray-400 transition duration-300 hover:border-zinc-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;