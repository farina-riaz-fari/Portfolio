import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const HeroImage = () => {
  return (
    <div className="relative flex min-w-0 justify-center lg:justify-end">
      {/* Background Glow */}
      <div className="pointer-events-none absolute h-[350px] w-[350px] rounded-full bg-gradient-to-r from-purple-600/30 via-blue-500/20 to-cyan-400/20 blur-[80px] max-[364px]:h-[300px] max-[364px]:w-[300px]" />

      <div className="hero-image relative">
        {/* Gradient Border */}
        <div className="pointer-events-none absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-70" />

        {/* Profile Image */}
        <div
          className="
            relative
            h-[335px] w-[275px]
            overflow-hidden
            rounded-[2rem]
            border border-white/10
            bg-gray-900

            min-[365px]:h-[390px]
            min-[365px]:w-[320px]

            md:h-[450px]
            md:w-[370px]
          "
        >
          <Image
            src="/images/profile.png"
            alt="Profile"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 364px) 275px, (max-width: 768px) 320px, 370px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* React & TypeScript Tag */}
        <div
          className="
            absolute -left-8 top-12
            flex items-center gap-3
            rounded-2xl border border-white/10
            bg-black/80 px-4 py-3
            backdrop-blur-md

            min-[640px]:max-[1369px]:left-0
            min-[640px]:max-[1369px]:-translate-x-2

            max-[639px]:-left-4
            max-[639px]:top-8
            max-[639px]:scale-[0.9]

            max-[364px]:left-0
            max-[364px]:top-6
            max-[364px]:scale-[0.72]
            max-[364px]:origin-left
            max-[364px]:gap-2
            max-[364px]:px-3
            max-[364px]:py-2

            min-[1370px]:-left-8
          "
        >
          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              bg-purple-500/15
              text-purple-300

              max-[364px]:h-7
              max-[364px]:w-7
            "
          >
            <FontAwesomeIcon
              icon={faCode}
              className="h-4 w-4 max-[364px]:h-3 max-[364px]:w-3"
            />
          </div>

          <div className="whitespace-nowrap">
            <p className="text-xs text-gray-500 max-[364px]:text-[9px]">
              Specialized in
            </p>

            <p className="text-sm font-medium text-white max-[364px]:text-[11px]">
              React & TypeScript
            </p>
          </div>
        </div>

        {/* Web & Mobile Tag */}
        <div
          className="
            absolute -bottom-6 -right-6
            flex items-center gap-3
            rounded-2xl border border-white/10
            bg-black/80 px-4 py-3
            backdrop-blur-md

            min-[640px]:max-[1369px]:right-2
            min-[640px]:max-[1369px]:translate-x-0

            max-[639px]:-right-4
            max-[639px]:-bottom-4
            max-[639px]:scale-[0.9]

            max-[364px]:right-0
            max-[364px]:bottom-0
            max-[364px]:scale-[0.72]
            max-[364px]:origin-right
            max-[364px]:gap-2
            max-[364px]:px-3
            max-[364px]:py-2

            min-[1370px]:-right-6
          "
        >
          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              bg-cyan-400/10
              text-cyan-300

              max-[364px]:h-7
              max-[364px]:w-7
            "
          >
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="h-4 w-4 max-[364px]:h-3 max-[364px]:w-3"
            />
          </div>

          <div className="whitespace-nowrap">
            <p className="text-xs text-gray-500 max-[364px]:text-[9px]">
              Building for
            </p>

            <p className="text-sm font-medium text-white max-[364px]:text-[11px]">
              Web & Mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
