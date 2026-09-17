import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 text-white md:px-10 md:py-32
      bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.07),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.06),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.05),transparent_45%),linear-gradient(135deg,#17151f,#151721,#131722)]"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">
            A selection of web and mobile applications I&apos;ve worked on,
            focusing on clean interfaces, practical functionality, and
            user-focused experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 min-[768px]:grid-cols-2 min-[1150px]:grid-cols-6">
          {/* Coffee Shop */}
          <div className="min-[1150px]:col-span-2">
            <ProjectCard project={projects[0]} />
          </div>

          {/* Hava */}
          <div className="min-[1150px]:col-span-2">
            <ProjectCard project={projects[1]} />
          </div>

          {/* Multi-Company */}
          <div className="min-[1150px]:col-span-2">
            <ProjectCard project={projects[2]} />
          </div>

          {/* LinkGraph */}
          <div className="min-[1150px]:col-span-2 min-[1150px]:col-start-2">
            <ProjectCard project={projects[3]} />
          </div>

          {/* Rentaround */}
          <div className="min-[768px]:col-span-2 min-[1150px]:col-span-2">
            <div className="w-full min-[768px]:mx-auto min-[768px]:w-[calc(50%-0.875rem)] min-[1150px]:w-full">
              <ProjectCard project={projects[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
