import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projects = [
    {
      title: "Coffee Shop",
      description:
        "A React Native coffee shop application with authentication, favorites, notifications, cart functionality, and order management.",
      technologies: ["React Native", "TypeScript", "Firebase", "AsyncStorage"],
      github: "https://github.com/farina-riaz-fari/Coffee-Shop",
    },
    {
      title: "Hava Use Plus App",
      description:
        "A React Native mobile application for browsing and viewing products with a clean, responsive interface and smooth user experience.",
      technologies: ["React Native", "TypeScript"],
      github: "https://github.com/farina-riaz-fari/Hava-Use-Plus-App",
    },
    {
      title: "Multi-Company",
      description:
        "A React web application for managing companies, employees, partners, settings, and business information through a responsive interface.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "IndexedDB"],
      github: "https://github.com/farina-riaz-fari/Multi-Company",
    },
    {
      title: "LinkGraph",
      description:
        "Contributed to frontend development for a professional web application, including work on the Google Business Profile module and related features.",
      technologies: ["React", "JavaScript"],
    },
    {
      title: "Rentaround",
      description:
        "A React Native mobile application with separate buyer, seller, and admin workflows. Contributed to the development of the buyer-side application.",
      technologies: ["React Native", "JavaScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-6">
          {/* Top row - 3 projects */}
          {projects.slice(0, 3).map((project) => (
            <div key={project.title} className="lg:col-span-2">
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Bottom row - 2 centered projects */}
          <div className="lg:col-span-2 lg:col-start-2">
            <ProjectCard project={projects[3]} />
          </div>

          <div className="lg:col-span-2">
            <ProjectCard project={projects[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
  };
}) => {
  return (
    <article className="group flex min-h-[360px] flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 md:p-8">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-gray-400">
          {project.description}
        </p>
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-gray-400"
          >
            {technology}
          </span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition"
        >
          View on GitHub
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      )}
    </article>
  );
};

export default Projects;