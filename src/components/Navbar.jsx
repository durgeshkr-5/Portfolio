import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-shadow duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-white"
      }`}
      ref={menuRef}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-extrabold text-cyan-600 tracking-tight">
          Durgesh
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {["about", "projects", "skills", "resume", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative hover:text-cyan-600 transition-all duration-200 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-cyan-600 hover:before:w-full before:transition-all before:duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-6 rounded bg-cyan-600 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 rounded bg-cyan-600 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 rounded bg-cyan-600 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="bg-white border-t border-gray-200 space-y-3 px-5 py-5">
          {["about", "projects", "skills", "resume", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block text-gray-700 font-medium hover:text-cyan-600"
                onClick={() => setMenuOpen(false)} // close when link clicked
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
