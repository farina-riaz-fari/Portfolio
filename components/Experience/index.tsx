const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
          My Journey
        </p>

        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Experience
        </h2>

        <div className="relative border-l border-gray-800 pl-8">
          <div className="relative">
            <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-white" />

            <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
              <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Frontend Developer
                  </h3>
                  <p className="mt-1 text-gray-400">
                    Enigmatix Pvt. Ltd.
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  Professional Experience
                </span>
              </div>

              <p className="leading-7 text-gray-400">
                Worked on modern web and mobile applications using React,
                React Native, TypeScript, JavaScript, and related frontend
                technologies. Built reusable components, integrated REST APIs,
                worked with state management solutions, and collaborated with
                development teams to deliver scalable user interfaces.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React",
                  "React Native",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;