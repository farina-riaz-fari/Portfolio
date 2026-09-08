const Experience = () => {
  const experiences = [
    {
      company: "Enigmatix Pvt. Ltd.",
      role: "Frontend Developer",
      period: "May 2023 – Present",
      description:
        "Working on web and mobile applications using React, React Native, JavaScript, and TypeScript, with a focus on reliable, scalable, and user-friendly experiences.",
      achievements: [
        "Developed and maintained interactive web and mobile applications across multiple projects.",
        "Integrated APIs for seamless communication between frontend applications and backend services.",
        "Troubleshot bugs and production issues while improving application performance, scalability, and user experience.",
        "Participated in code reviews and used Git-based workflows to maintain code quality and support team collaboration.",
      ],
      technologies: [
        "React",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Redux",
        "MobX",
        "Git",
      ],
    },
    {
      company: "Enigmatix Pvt. Ltd.",
      role: "Intern Frontend Developer",
      period: "Internship",
      description:
        "Gained hands-on experience developing React and React Native applications while working with UI development, API integration, debugging, and performance optimization.",
      achievements: [
        "Worked on React and React Native application development.",
        "Contributed to UI implementation and API integration.",
        "Worked with Git-based version control and participated in code reviews.",
      ],
      technologies: [
        "React",
        "React Native",
        "JavaScript",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-zinc-950 px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 pl-8 md:pl-10">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.role}-${experience.company}`}
              className={index !== experiences.length - 1 ? "relative pb-12" : "relative"}
            >
              {/* Timeline dot */}
              <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-black bg-white md:-left-[45px]" />

              {/* Experience card */}
              <article className="rounded-2xl border border-zinc-800 bg-black p-7 transition duration-300 hover:border-zinc-600 md:p-8">
                <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                      {experience.company}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {experience.role}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full border border-zinc-800 px-4 py-2 text-xs text-gray-500">
                    {experience.period}
                  </span>
                </div>

                <p className="max-w-4xl leading-7 text-gray-400">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-7">
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Achievement */}
                {index === 0 && (
                  <div className="mt-8 border-t border-zinc-800 pt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                      Achievement
                    </p>

                    <p className="mt-2 text-sm text-gray-300">
                      Junior Frontend Developer Award
                    </p>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;