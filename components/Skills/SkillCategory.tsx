type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: string[];
};

type SkillCategoryProps = {
  group: SkillGroup;
  index: number;
  isVisible: boolean;
};

const SkillCategory = ({
  group,
  index,
  isVisible,
}: SkillCategoryProps) => {
  return (
    <div
      className={`relative pl-0 transition-all duration-1000 sm:pl-16 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 120 + 150}ms`,
      }}
    >
      {/* Timeline number */}
      <div className="absolute left-0 top-0 hidden sm:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/30 bg-black text-xs font-semibold text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.12)]">
          {group.number}
        </div>
      </div>

      {/* Mobile number */}
      <div className="mb-4 flex items-center gap-3 sm:hidden">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-400/30 bg-black text-[11px] font-semibold text-purple-300">
          {group.number}
        </div>

        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
      </div>

      {/* Skill group card */}
      <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.035] hover:shadow-[0_15px_50px_rgba(168,85,247,0.07)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Group information */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                {group.title}
              </h3>

              <span className="h-px w-6 bg-gradient-to-r from-purple-500/50 to-transparent opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
            </div>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {group.description}
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/[0.08] bg-black/60 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.07] hover:text-purple-100 hover:shadow-[0_8px_25px_rgba(168,85,247,0.12)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;
