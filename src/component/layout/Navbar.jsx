import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-100 text-white">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <h1 className="font-semibold tracking-wide">LUXE CURATOR</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="text-lg hover:text-yellow-400 transition duration-200">Properties</a>
          <a href="#" className="text-lg hover:text-yellow-400 transition duration-200">Services</a>
          <a href="#" className="text-lg hover:text-yellow-400 transition duration-200">About</a>
          <a href="#" className="text-lg hover:text-yellow-400 transition duration-200">Contact</a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-yellow-500 text-black px-4 py-2 text-sm font-medium">
          Book Consultation
        </button>

        {/* Mobile Icon */}
        <button
          className="md:hidden z-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Mobile Menu */}
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black text-white p-8 flex flex-col gap-8 transform transition-transform duration-300 z-60 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#" 
        onClick={() => setMenuOpen(false)}
        className="text-lg hover:text-yellow-400 transition duration-200"
        >
          Properties
        </a>
        <a href="#" 
        onClick={() => setMenuOpen(false)}
        className="text-lg hover:text-yellow-400 transition duration-200"
        >
          Services
        </a>
        <a href="#" 
        onClick={() => setMenuOpen(false)}
        className="text-lg hover:text-yellow-400 transition duration-200"
        >
          About
        </a>
        <a href="#" 
        onClick={() => setMenuOpen(false)}
        className="text-lg hover:text-yellow-400 transition duration-200"
        >
          Contact
        </a>

        <button
          onClick={() => setMenuOpen(false)}
          className="bg-yellow-500 text-black px-6 py-3 font-medium mt-auto"
        >
          Book Consultation
        </button>
      </div>
    </header>
  );
};

export default Navbar;
