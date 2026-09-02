import image from "../../assets/img1.png";

const FirstPart = () => {
  return (
    <div className="grid grid-cols-2 p-12 h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-5xl font-bold text-[#693382]">
          Hi, I'm Farina Riaz
        </div>

        <div className="text-4xl font-bold text-[#693382]">
          Web & Mobile Developer
        </div>

        <p className="text-lg text-gray-600 text-center max-w-xl">
          I build modern, responsive web applications and mobile apps using
          React, React Native, TypeScript, JavaScript, and Next.js.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <img src={image} alt="Farina Riaz" className="w-[70%] h-[70%]" />
      </div>
    </div>
  );
};

export default FirstPart;