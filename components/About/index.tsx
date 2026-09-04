const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-zinc-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Building clean & meaningful digital experiences.
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg leading-8 text-gray-400 md:text-xl">
              I&apos;m a frontend developer with experience building modern
              web and mobile applications using React, React Native,
              TypeScript, and JavaScript.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
              I enjoy turning ideas into responsive, user-friendly
              interfaces while focusing on clean code, reusable components,
              and a smooth user experience.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black p-8 md:p-10">
            <h3 className="mb-6 text-xl font-semibold">Tech I Work With</h3>

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
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-500 hover:text-white"
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