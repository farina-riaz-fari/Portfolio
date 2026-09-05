const Projects = () => {
  const projects = [
    {
      title: "Coffee Shop",
      description:
        "A React Native coffee shop application with authentication, favorites, notifications, cart, and order management.",
      technologies: "React Native • TypeScript • Firebase",
      github: "https://github.com/farina-riaz-fari/Coffee-Shop",
    },
    {
      title: "Hava Use Plus App",
      description:
        "A React Native mobile application for browsing and viewing products with a clean and responsive interface.",
      technologies: "React Native • TypeScript",
      github: "https://github.com/farina-riaz-fari/Hava-Use-Plus-App",
    },
    {
      title: "Multi-Company",
      description:
        "A web application for managing companies, employees, partners, settings, and business information.",
      technologies: "React • JavaScript • Tailwind CSS",
      github: "https://github.com/farina-riaz-fari/Multi-Company",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
          My Work
        </p>

        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-gray-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-gray-600"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mb-6 flex-1 leading-7 text-gray-400">
                {project.description}
              </p>

              <p className="mb-6 text-sm text-gray-500">
                {project.technologies}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full border border-gray-700 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;