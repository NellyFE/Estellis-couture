
import React from "react";

export const MobileMenu = ({ isOpen, onClose }) => { 
  return (

    
<div
  className={`md:hidden fixed top-0 left-1/2 transform -translate-x-1/2 mt-24 p-12 w-90 rounded-lg bg-white bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center gap-10  text-xl transition-opacity duration-500 z-40 ${
    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>

      <a href="#home" onClick={onClose} className="border-b border-transparent hover:border-[#fcbd7d]">
        Home
      </a>
      <a href="#About" onClick={onClose} className="border-b border-transparent hover:border-[#fcbd7d]">
        About
      </a>
      <a href="#lookbook" onClick={onClose} className="border-b border-transparent hover:border-[#fcbd7d]">
        Lookbook
      </a>
      <a href="#contactUs" onClick={onClose} className="border-b border-transparent hover:border-[#fcbd7d]">
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
