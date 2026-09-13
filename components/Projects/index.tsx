import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faMobileScreenButton,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Coffee Shop",
    description:
      "A React Native coffee shop application with authentication, favorites, notifications, cart functionality, and order management.",
    technologies: ["React Native", "TypeScript", "Firebase", "AsyncStorage"],
    github: "https://github.com/farina-riaz-fari/Coffee-Shop",
    type: "Mobile App",
    icon: faMobileScreenButton,
    gradient: "from-purple-500/30 via-blue-500/15 to-cyan-500/10",
    iconStyle: "bg-purple-500/15 text-purple-300",
    images: [
      "/projects/coffee-shop/coffeeShopHome.png",
      "/projects/coffee-shop/coffeeShopProductDetail.png",
      "/projects/coffee-shop/coffeeShopProducts.png",
    ],
  },
  {
    title: "Hava Use Plus App",
    description:
      "A React Native mobile application for browsing and viewing products with a clean, responsive interface and smooth user experience.",
    technologies: ["React Native", "TypeScript"],
    github: "https://github.com/farina-riaz-fari/Hava-Use-Plus-App",
    type: "Mobile App",
    icon: faMobileScreenButton,
    gradient: "from-blue-500/30 via-cyan-500/15 to-purple-500/10",
    iconStyle: "bg-blue-500/15 text-blue-300",
    images: [
      "/projects/hava-use-plus/home.png",
      "/projects/hava-use-plus/products.png",
    ],
  },
  {
    title: "Multi-Company",
    description:
      "A React web application for managing companies, employees, partners, settings, and business information through a responsive interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "IndexedDB"],
    github: "https://github.com/farina-riaz-fari/Multi-Company",
    type: "Web App",
    icon: faGlobe,
    gradient: "from-cyan-500/30 via-blue-500/15 to-purple-500/10",
    iconStyle: "bg-cyan-500/15 text-cyan-300",
    images: [
      "/projects/multi-company/home.png",
      "/projects/multi-company/company.png",
      "/projects/multi-company/setting.png",
      "/projects/multi-company/employee.png",
    ],
  },
  {
    title: "LinkGraph",
    description:
      "Contributed to frontend development for a professional web application, including work on the Google Business Profile module and related features.",
    technologies: ["React", "JavaScript"],
    type: "Web App",
    icon: faCode,
    gradient: "from-purple-500/30 via-pink-500/15 to-blue-500/10",
    iconStyle: "bg-purple-500/15 text-purple-300",
    images: [
      "/projects/linkgraph/linkgrapgLLM.jpeg",
      "/projects/linkgraph/linkgraphGBP.png",
      "/projects/linkgraph/linkgraphgbp.webp",
    ],
  },
  {
    title: "Rentaround",
    description:
      "A React Native rental application with separate buyer, seller, and admin workflows. Contributed to the development of the buyer-side application.",
    technologies: ["React Native", "JavaScript"],
    type: "Mobile App",
    icon: faMobileScreenButton,
    gradient: "from-blue-500/25 via-purple-500/15 to-cyan-500/10",
    iconStyle: "bg-blue-500/15 text-blue-300",
    images: [
      "/projects/rentaround/rentArroundHome.png",
      "/projects/rentaround/rentArroundMenu.png",
      "/projects/rentaround/rentArroundSplash.png",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 text-white md:px-10 md:py-32
      bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.07),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.06),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.05),transparent_45%),linear-gradient(135deg,#17151f,#151721,#131722)]"
    >
      <div className="relative mx-auto max-w-7xl">
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

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-6">
          {/* Top row - 3 equal cards */}
          {projects.slice(0, 3).map((project) => (
            <div key={project.title} className="lg:col-span-2">
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Bottom row - 2 equal centered cards */}
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

type Project = (typeof projects)[number];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group relative flex h-[662px] flex-col overflow-hidden rounded-[2rem] border border-white/[0.08] bg-zinc-950 transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.16] hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      <div
        className={`relative h-[290px] shrink-0 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/15 blur-[90px]" />

        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:35px_35px]" />

        <div className="absolute left-6 top-6 z-30 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
          <FontAwesomeIcon
            icon={project.icon}
            className={`h-4 w-4 ${project.iconStyle}`}
          />
        </div>

        <span className="absolute right-6 top-6 z-30 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-xl">
          {project.type}
        </span>

        <ProjectVisual images={project.images} title={project.title} />

        <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-7 md:p-8">
        <h3 className="shrink-0 text-2xl font-semibold tracking-tight md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

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

const ProjectVisual = ({
  images,
  title,
}: {
  images: string[];
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

        <div className="absolute left-1/2 top-0 z-10 h-72 w-[48%] -translate-x-1/2 rotate-1 overflow-hidden rounded-[1.5rem] border border-white/25 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:-translate-x-1/2 group-hover:-rotate-1">
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

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
    </div>
  );
};

export default Projects;