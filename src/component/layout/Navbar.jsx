import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-(--color-neutral) px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-xl font-semibold tracking-wide">
          LUXE CURATOR
        </h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li><a href="#">Properties</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-(--color-tertiary) px-6 py-2 text-base font-medium rounded-md">
          Book Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Overlay style) */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-base font-medium">
          <a href="#">Properties</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

          <button className="bg-(--color-tertiary) px-4 py-2 rounded-md mt-2">
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;