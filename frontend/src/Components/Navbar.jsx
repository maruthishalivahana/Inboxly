import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("inboxly-theme");
    if (saved === "light") setIsDark(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("inboxly-theme", next ? "dark" : "light");
      return next;
    });
  };

  const linkStyle = isDark ? "text-[#FCA311]" : "text-[#14213D]";
  const buttonStyle = isDark
    ? "bg-[#FCA311] text-black"
    : "bg-[#14213D] text-white";

  return (
    <nav
      className={`${
        isDark ? "bg-slate-800/60" : "bg-white/10 border-b border-[#E5E5E5]"
      } flex items-center justify-between py-4 px-6 backdrop-blur sticky h-12 top-0 z-40 rounded-b-xs`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
      <h1 className={`${isDark ? "text-white" : "text-[#14213D]"} text-xl font-semibold`}>
        Inboxly
      </h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/profile" className={`${linkStyle} hover:brightness-110`}>
          Get Started
        </Link>
        <Link to="/about" className={`${linkStyle} hover:brightness-110`}>
          About
        </Link>
        <Link to="/contact" className={`${linkStyle} hover:brightness-110`}>
          Contact
        </Link>
        <button
          onClick={toggleTheme}
          className={`${buttonStyle} rounded-full px-3 py-1 text-sm font-medium shadow-sm`}
        >
          {isDark ? "Light mode" : "Dark mode"}
        </button>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-xl focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className="text-[#FCA311]">{menuOpen ? "✖" : "☰"}</span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full ${
            isDark ? "bg-slate-800/60" : "bg-white/30"
          } flex flex-col items-start px-6 py-4 gap-4 shadow-md md:hidden`}
        >
          <Link to="/profile" className={`${linkStyle} hover:brightness-110`} onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
          <Link to="/about" className={`${linkStyle} hover:brightness-110`} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className={`${linkStyle} hover:brightness-110`} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className={`${buttonStyle} rounded-full px-3 py-1 text-sm font-medium shadow-sm`}
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;