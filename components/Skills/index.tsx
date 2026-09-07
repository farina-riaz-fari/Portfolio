const Skills = () => {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: "Building responsive and modern web interfaces.",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Mobile",
      description: "Developing cross-platform mobile applications.",
      skills: ["React Native", "React Navigation", "React Native CLI"],
    },
    {
      number: "03",
      title: "State Management",
      description: "Managing application state with scalable solutions.",
      skills: ["Redux", "MobX", "Context API"],
    },
    {
      number: "04",
      title: "Backend & APIs",
      description: "Working with APIs, data, and backend services.",
      skills: ["REST APIs", "Axios", "Firebase", "Postman"],
    },
    {
      number: "05",
      title: "Tools",
      description: "Tools I use to build, test, and manage projects.",
      skills: ["Git", "GitHub", "Node.js", "Yarn"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Tools & technologies
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 md:p-8"
            >
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-gray-400 transition duration-300 group-hover:border-zinc-700 group-hover:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;