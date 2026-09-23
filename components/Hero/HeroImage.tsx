import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import profileImage from "@/src/assets/profileImage.png";

const HeroImage = () => {
  return (
    <div className="relative flex w-full min-w-0 justify-center overflow-visible">
      <div className="hero-image-wrapper">
        <div className="hero-image-scale relative h-[580px] w-[490px]">
          {/* Ambient Glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[2px]
              top-1/2
              h-[445px]
              w-[445px]
              -translate-y-1/2
              rounded-full
              bg-purple-600/20
              blur-[120px]
            "
          />

          {/* Circle Background Glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[20px]
              top-1/2
              z-[1]
              h-[405px]
              w-[405px]
              -translate-y-1/2
              rounded-full
              bg-gradient-to-br
              from-purple-500/45
              via-blue-500/25
              to-cyan-400/40
              blur-[4px]
              shadow-[0_0_50px_rgba(168,85,247,0.45),0_0_100px_rgba(34,211,238,0.2)]
            "
          />

          {/* Outer Cyan Circle */}
          <div
            className="
              pointer-events-none
              absolute
              right-[8px]
              top-1/2
              z-[2]
              h-[415px]
              w-[415px]
              -translate-y-1/2
              rounded-full
              border
              border-cyan-300/30
              opacity-90
              blur-[1px]
              shadow-[0_0_20px_rgba(34,211,238,0.35)]
            "
          />

          {/* Middle Purple Circle */}
          <div
            className="
              pointer-events-none
              absolute
              right-[20px]
              top-1/2
              z-[3]
              h-[405px]
              w-[405px]
              -translate-y-1/2
              rounded-full
              border
              border-purple-400/30
              shadow-[0_0_28px_rgba(168,85,247,0.3)]
            "
          />

          {/* Inner Circle */}
          <div
            className="
              pointer-events-none
              absolute
              right-[32px]
              top-1/2
              z-[4]
              h-[382px]
              w-[382px]
              -translate-y-1/2
              rounded-full
              border
              border-purple-300/15
            "
          />

          {/* Profile Image */}
          <div
            className="
              absolute
              bottom-0
              right-0
              z-[10]
              h-[600px]
              w-[445px]
            "
          >
            <svg
              className="absolute h-0 w-0"
              aria-hidden="true"
            >
              <defs>
                <mask id="profile-circle-mask">
                  <rect
                    x="0"
                    y="0"
                    width="445"
                    height="600"
                    fill="black"
                  />

                  <rect
                    x="55"
                    y="0"
                    width="390"
                    height="240"
                    fill="white"
                  />

                  <circle
                    cx="225"
                    cy="305"
                    r="195"
                    fill="white"
                  />
                </mask>
              </defs>
            </svg>

            <Image
              src={profileImage}
              alt="Farina Riaz"
              fill
              priority
              sizes="445px"
              className="object-contain object-bottom"
              style={{
                maskImage: "url(#profile-circle-mask)",
                WebkitMaskImage: "url(#profile-circle-mask)",
              }}
            />
          </div>

          {/* Lower Purple Neon Arc */}
          <svg
            className="
              pointer-events-none
              absolute
              right-[20px]
              top-1/2
              z-[11]
              h-[405px]
              w-[405px]
              -translate-y-1/2
              overflow-visible
            "
            viewBox="0 0 350 350"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 20 175 A 155 155 0 0 0 330 175"
              stroke="rgba(168,85,247,0.65)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="drop-shadow(0 0 8px rgba(168,85,247,0.5))"
            />
          </svg>

          {/* React & TypeScript */}
          <div
            className="
              absolute
              -left-5
              top-16
              z-20
              flex
              items-center
              gap-2.5
              rounded-xl
              border
              border-purple-400/45
              bg-black/70
              px-3
              py-2.5
              shadow-[0_0_12px_rgba(168,85,247,0.25),inset_0_0_12px_rgba(168,85,247,0.06)]
              backdrop-blur-lg
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-purple-400/20
                bg-purple-500/15
                text-purple-300
                shadow-[0_0_10px_rgba(168,85,247,0.2)]
              "
            >
              <FontAwesomeIcon
                icon={faCode}
                className="h-3.5 w-3.5"
              />
            </div>

            <div className="whitespace-nowrap">
              <p className="text-[10px] text-gray-400">
                Specialized in
              </p>

              <p className="text-xs font-medium text-white">
                React & TypeScript
              </p>
            </div>
          </div>

          {/* Web & Mobile */}
          <div
            className="
              absolute
              -right-5
              bottom-5
              z-20
              flex
              items-center
              gap-2.5
              rounded-xl
              border
              border-cyan-400/45
              bg-black/70
              px-3
              py-2.5
              shadow-[0_0_12px_rgba(34,211,238,0.25),inset_0_0_12px_rgba(34,211,238,0.06)]
              backdrop-blur-lg
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-cyan-400/20
                bg-cyan-400/15
                text-cyan-300
                shadow-[0_0_10px_rgba(34,211,238,0.2)]
              "
            >
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="h-3.5 w-3.5"
              />
            </div>

            <div className="whitespace-nowrap">
              <p className="text-[10px] text-gray-400">
                Building for
              </p>

              <p className="text-xs font-medium text-white">
                Web & Mobile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;