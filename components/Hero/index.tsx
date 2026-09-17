import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-10 lg:py-0"
    >
      {/* BACKGROUND DIAMONDS */}

      {/* Top-left purple diamond */}
      <div className="pointer-events-none absolute left-10 top-24 z-0 h-70 w-70 rotate-45 bg-purple-600/5 blur-3xl" />

      <div className="pointer-events-none absolute left-10 top-24 z-0 h-70 w-70 rotate-45 border border-purple-400/15" />

      {/* Center blue diamond */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-blue-400/10" />

      {/* Bottom-right cyan diamond */}
      <div className="pointer-events-none absolute bottom-10 right-10 z-0 h-76 w-76 rotate-45 bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-10 z-0 h-76 w-76 rotate-45 border border-cyan-400/15" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;