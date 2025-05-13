const Navbar = () => {
  return (
    <div className="p-6 flex justify-around items-center bg-gradient-to-r from-fuchsia-100 to-purple-100 px-24">
      <a href="#home" className="text-[#693382] font-bold text-xl">
        Home
      </a>
      <a href="#about" className="text-[#693382] font-bold text-xl">
        About
      </a>
      <a href="#work" className="text-[#693382] font-bold text-xl">
        Work
      </a>
      <a href="#contact" className="text-[#693382] font-bold text-xl">
        Contact
      </a>
    </div>
  );
};

export default Navbar;
