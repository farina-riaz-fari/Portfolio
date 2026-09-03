const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          Farina Riaz<span className="text-gray-400">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-white transition">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition">
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;