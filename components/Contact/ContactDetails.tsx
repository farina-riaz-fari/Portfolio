import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ContactDetails = () => {
  return (
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
      {/* Email + Phone */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <a
          href="mailto:farinariaz573@gmail.com"
          className="group flex items-center gap-3 text-sm text-gray-500 transition duration-300 hover:text-white"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-purple-400/70 transition group-hover:text-purple-300"
          />

          farinariaz573@gmail.com
        </a>

        <span className="hidden h-4 w-px bg-white/10 sm:block" />

        <a
          href="tel:+923036740104"
          className="group flex items-center gap-3 text-sm text-gray-500 transition duration-300 hover:text-white"
        >
          <FontAwesomeIcon
            icon={faPhone}
            className="text-cyan-400/70 transition group-hover:text-cyan-300"
          />

          +92 303 6740104
        </a>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/farina-riaz-fari"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/[0.08] hover:text-purple-300"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-2 transition-transform duration-300 group-hover:scale-110"
          />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/farina-riaz-867066240/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/[0.08] hover:text-cyan-300"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="mr-2 transition-transform duration-300 group-hover:scale-110"
          />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;