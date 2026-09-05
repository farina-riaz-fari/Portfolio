const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Mobile",
      skills: ["React Native", "React Navigation", "Expo"],
    },
    {
      title: "State Management",
      skills: ["Redux", "Zustand", "MobX", "Context API"],
    },
    {
      title: "Backend & APIs",
      skills: ["REST APIs", "Axios", "Firebase", "Postman"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Node.js", "Yarn"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
          What I Work With
        </p>

        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-600"
            >
              <h3 className="mb-5 text-xl font-semibold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
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