import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Properties", path: "/properties" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ variant = "transparent" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition ${
        variant === "transparent"
          ? "text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">

        {/* Logo */}
        <h1 className="font-semibold tracking-wide">
          <NavLink to="/">LUXE CURATOR</NavLink>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-500 font-semibold"
                    : "hover:text-yellow-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <button
          className={`hidden md:block px-4 py-2 text-sm font-medium ${
            variant === "transparent"
              ? "bg-yellow-500 text-black"
              : "bg-black text-white"
          }`}
        >
          Book Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              size={28}
              className="text-white"
              
            />
          ) : (
            <Menu
              size={28}
              className={
                variant === "transparent" ? "text-white" : "text-black"
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-lg transition-all duration-300 z-[105] ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-yellow-500 font-semibold"
                  : "text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        <button className="bg-yellow-500 text-black px-6 py-3 font-medium">
          Book Consultation
        </button>
      </div>
    </header>
  );
};

export default Navbar;