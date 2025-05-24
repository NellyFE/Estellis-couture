import { useEffect, useState } from "react";
import {MobileMenu} from "../MobileMenu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`fixed top-0 w-full z-40 px-6 ${
        isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-[rgba(10, 10, 0.8)]"
      }`}
    >
      <div className="flex mx-auto px-4 justify-between items-center py-2">
        {/* the logo */}
        <div>
          <a href="#home">
            <img src="/logo.png" alt="logo" className="logoimg w-24" />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-3xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* the navbar */}
        <div className="hidden md:flex items-center space-x-8 ">
          <a href="#home" className="text-white font-bold border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300">
            Home
          </a>
          <a href="#About" className="text-white font-bold border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300">
            About
          </a>
          <a href="#lookbook" className="text-white font-bold border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300">
            Lookbook
          </a>
          <a href="#contact" className="text-white font-bold border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
};
