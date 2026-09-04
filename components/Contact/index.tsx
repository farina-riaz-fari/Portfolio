const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
          Get In Touch
        </p>

        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mb-10 max-w-2xl leading-7 text-gray-400">
          I'm always open to discussing new projects, opportunities, and
          interesting ideas. Feel free to reach out.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:your-email@example.com"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Email Me
          </a>

          <a
            href="https://github.com/farina-riaz-fari"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-700 px-6 py-3 font-medium transition hover:bg-white hover:text-black"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/farina-riaz-867066240/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-700 px-6 py-3 font-medium transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;