import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faMobileScreenButton,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projects = [
    {
      title: "Coffee Shop",
      description:
        "A React Native coffee shop application with authentication, favorites, notifications, cart functionality, and order management.",
      technologies: ["React Native", "TypeScript", "Firebase", "AsyncStorage"],
      github: "https://github.com/farina-riaz-fari/Coffee-Shop",
      type: "Mobile App",
      icon: faMobileScreenButton,
      gradient: "from-purple-500/20 via-blue-500/10 to-transparent",
      iconStyle: "bg-purple-500/15 text-purple-300",
    },
    {
      title: "Hava Use Plus App",
      description:
        "A React Native mobile application for browsing and viewing products with a clean, responsive interface and smooth user experience.",
      technologies: ["React Native", "TypeScript"],
      github: "https://github.com/farina-riaz-fari/Hava-Use-Plus-App",
      type: "Mobile App",
      icon: faMobileScreenButton,
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      iconStyle: "bg-blue-500/15 text-blue-300",
    },
    {
      title: "Multi-Company",
      description:
        "A React web application for managing companies, employees, partners, settings, and business information through a responsive interface.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "IndexedDB"],
      github: "https://github.com/farina-riaz-fari/Multi-Company",
      type: "Web App",
      icon: faGlobe,
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      iconStyle: "bg-cyan-500/15 text-cyan-300",
    },
    {
      title: "LinkGraph",
      description:
        "Contributed to frontend development for a professional web application, including work on the Google Business Profile module and related features.",
      technologies: ["React", "JavaScript"],
      type: "Web App",
      icon: faCode,
      gradient: "from-purple-500/15 via-pink-500/10 to-transparent",
      iconStyle: "bg-purple-500/15 text-purple-300",
    },
    {
      title: "Rentaround",
      description:
        "A React Native mobile application with separate buyer, seller, and admin workflows. Contributed to the development of the buyer-side application.",
      technologies: ["React Native", "JavaScript"],
      type: "Mobile App",
      icon: faMobileScreenButton,
      gradient: "from-blue-500/15 via-purple-500/10 to-transparent",
      iconStyle: "bg-blue-500/15 text-blue-300",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 md:py-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of web and mobile applications I&apos;ve worked on,
            focusing on clean interfaces, practical functionality, and
            user-focused experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${
                index < 3
                  ? "lg:col-span-2"
                  : "lg:col-span-3"
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
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
    type: string;
    icon: typeof faCode;
    gradient: string;
    iconStyle: string;
  };
}) => {
  return (
    <article className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.18] hover:shadow-2xl">
      {/* Project visual */}
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="absolute left-7 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
          <FontAwesomeIcon
            icon={project.icon}
            className={`h-5 w-5 ${project.iconStyle}`}
          />
        </div>

        <span className="absolute right-6 top-7 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-md">
          {project.type}
        </span>

        {/* Decorative shapes */}
        <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full border border-white/10 transition duration-700 group-hover:scale-125" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full border border-white/[0.05] transition duration-700 group-hover:scale-110" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="text-2xl font-semibold tracking-tight transition duration-300 group-hover:text-white md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* GitHub */}
        {project.github && (
          <div className="mt-auto pt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              View on GitHub

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default Projects;