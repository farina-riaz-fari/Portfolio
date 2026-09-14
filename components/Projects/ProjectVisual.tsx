import Image from "next/image";
import type { Project } from "./projects";

const ProjectVisual = ({
  images,
  title,
}: {
  images: Project["images"];
  title: string;
}) => {
  if (title === "Rentaround") {
    return (
      <div className="absolute inset-x-5 bottom-1 top-14">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[80px]" />

        <div className="absolute left-3 top-8 h-64 w-[43%] -rotate-[7deg] overflow-hidden rounded-[1.5rem] border border-white/15 bg-black shadow-2xl transition-all duration-700 group-hover:-translate-x-2 group-hover:-rotate-[9deg]">
          <Image
            src={images[2]}
            alt={`${title} splash screenshot`}
            fill
            className="object-cover object-top"
            sizes="220px"
          />
        </div>

        <div className="absolute left-1/2 top-0 z-10 h-72 w-[48%] -translate-x-1/2 rotate-1 overflow-hidden rounded-[1.5rem] borderborder-white/25 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:-translate-x-1/2 group-hover:-rotate-1">
          <Image
            src={images[0]}
            alt={`${title} home screenshot`}
            fill
            className="object-cover object-top"
            sizes="250px"
          />
        </div>

        <div className="absolute right-3 top-10 z-20 h-64 w-[43%] rotate-[7deg] overflow-hidden rounded-[1.5rem] border border-white/20 bg-black shadow-2xl transition-all duration-700 group-hover:translate-x-2 group-hover:rotate-[9deg]">
          <Image
            src={images[1]}
            alt={`${title} menu screenshot`}
            fill
            className="object-cover object-top"
            sizes="220px"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="absolute inset-x-5 bottom-2 top-16">
        <div className="absolute left-4 top-8 h-48 w-[45%] -rotate-6 overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl transition-transform duration-700 group-hover:-translate-x-2 group-hover:-rotate-8">
          <Image
            src={images[0]}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="200px"
          />
        </div>

        <div className="absolute right-4 top-2 h-52 w-[45%] rotate-6 overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl transition-transform duration-700 group-hover:translate-x-2 group-hover:rotate-8">
          <Image
            src={images[1]}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="200px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-x-5 bottom-1 top-14">
      {images[1] && (
        <div className="absolute left-2 top-8 h-48 w-[47%] -rotate-8 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl transition-all duration-700 group-hover:-translate-x-2 group-hover:-rotate-10">
          <Image
            src={images[1]}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="200px"
          />
        </div>
      )}

      <div className="absolute left-1/2 top-1 h-56 w-[55%] -translate-x-1/2 rotate-1 overflow-hidden rounded-2xl border border-white/25 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.55)] transition-transform duration-700 group-hover:-translate-x-1/2 group-hover:-rotate-1">
        <Image
          src={images[0]}
          alt={`${title} main screenshot`}
          fill
          className="object-cover object-top"
          sizes="300px"
        />
      </div>

      {images[2] && (
        <div className="absolute right-0 top-12 h-48 w-[43%] rotate-8 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl transition-all duration-700 group-hover:translate-x-2 group-hover:rotate-10">
          <Image
            src={images[2]}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="200px"
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0transition duration-700 group-hover:opacity-100" />
    </div>
  );
};

export default ProjectVisual;
