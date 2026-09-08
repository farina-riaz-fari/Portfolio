const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-16 text-center md:px-12 md:py-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-gray-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I&apos;m always open to discussing new projects, opportunities,
            and interesting ideas. Feel free to reach out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:farinariaz573@gmail.com"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:bg-gray-200"
            >
              Email Me
            </a>

            <a
              href="https://github.com/farina-riaz-fari"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition duration-300 hover:border-zinc-500 hover:bg-white hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/farina-riaz-867066240/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition duration-300 hover:border-zinc-500 hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-12 border-t border-zinc-800 pt-8">
            <div className="flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-8">
              <a
                href="mailto:farinariaz573@gmail.com"
                className="text-gray-500 transition duration-300 hover:text-white"
              >
                farinariaz573@gmail.com
              </a>

              <span className="hidden h-4 w-px bg-zinc-800 sm:block" />

              <a
                href="tel:+923036740104"
                className="text-gray-500 transition duration-300 hover:text-white"
              >
                +92 303 6740104
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;