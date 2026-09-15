type ExperienceItem = {
  number: string;
  role: string;
  company: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

type ExperienceCardProps = {
  experience: ExperienceItem;
  index: number;
  isVisible: boolean;
};

const ExperienceCard = ({
  experience,
  index,
  isVisible,
}: ExperienceCardProps) => {
  return (
    <article
      className={`relative transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="grid gap-7 md:grid-cols-[90px_1fr] md:gap-8">
        {/* Timeline point */}
        <div className="relative hidden md:flex">
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/30 bg-zinc-950 text-sm font-semibold text-purple-300 transition duration-500 hover:border-purple-400/70 hover:bg-purple-500/10">
            {experience.number}
          </div>
        </div>

        {/* Experience content */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.035] md:p-9">
          {/* Accent glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/[0.06] blur-3xl transition duration-500 group-hover:bg-purple-500/[0.12]" />

          <div className="relative">
            {/* Mobile number */}
            <div className="mb-6 flex items-center gap-4 md:hidden">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-400/30 text-sm font-semibold text-purple-300">
                {experience.number}
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
            </div>

            {/* Top information */}
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                  {experience.type}
                </p>

                <h3 className="text-2xl font-semibold md:text-3xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-base text-gray-400">
                  {experience.company}
                </p>
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-500">
                Professional Experience
              </div>
            </div>

            <div className="my-7 h-px bg-gradient-to-r from-purple-500/30 via-blue-500/10 to-transparent" />

            <p className="max-w-3xl text-base leading-7 text-gray-400">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
                What I worked on
              </p>

              <div className="space-y-3">
                {experience.responsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-gray-500 transition duration-300 group-hover:text-gray-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/70" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs text-gray-500 transitionduration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;