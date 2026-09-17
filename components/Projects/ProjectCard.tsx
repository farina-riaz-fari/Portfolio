import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import type { Project } from "./projects";
import ProjectVisual from "./ProjectVisual";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group relative flex h-auto min-h-[662px] flex-col overflow-hidden rounded-[2rem] border border-white/[0.08] bg-zinc-950 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.16] hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      {/* Project Visual */}
      <div
        className={`relative h-[290px] shrink-0 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/15 blur-[90px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:35px_35px]" />

        {/* Project Icon */}
        <div className="absolute left-6 top-6 z-30 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
          <FontAwesomeIcon
            icon={project.icon}
            className={`h-4 w-4 ${project.iconStyle}`}
          />
        </div>

        {/* Project Type */}
        <span className="absolute right-6 top-6 z-30 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-xl">
          {project.type}
        </span>

        {/* Images */}
        <ProjectVisual images={project.images} title={project.title} />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7 md:p-8">
        {/* Title */}
        <h3 className="shrink-0 text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-7 flex shrink-0 flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        {project.github && (
          <div className="mt-auto pt-6 sm:pt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              View on GitHub

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
