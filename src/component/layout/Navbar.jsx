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
        <h1 className="font-semibold tracking-wide">
          LUXE CURATOR
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#">Properties</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
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
          {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-lg transition-all duration-300 z-50 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <a href="#">Properties</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        <button className="bg-yellow-500 text-black px-6 py-3 font-medium">
          Book Consultation
        </button>
      </div>
    </header>
  );
};

export default Navbar;