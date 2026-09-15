import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="absolute h-[350px] w-[350px] rounded-full bg-gradient-to-r from-purple-600/30 via-blue-500/20 to-cyan-400/20 blur-[80px]" />

      <div className="hero-image relative">
        <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-70" />

        <div className="relative h-[390px] w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900 md:h-[450px] md:w-[370px]">
          <Image
            src="/images/profile.png"
            alt="Profile"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 320px, 370px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="absolute -left-8 top-12 hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md md:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
            <FontAwesomeIcon icon={faCode} className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs text-gray-500">Specialized in</p>

            <p className="text-sm font-medium text-white">
              React & TypeScript
            </p>
          </div>
        </div>

        <div className="absolute -bottom-6 -right-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md md:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="h-4 w-4"
            />
          </div>

          <div>
            <p className="text-xs text-gray-500">Building for</p>

            <p className="text-sm font-medium text-white">
              Web & Mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;