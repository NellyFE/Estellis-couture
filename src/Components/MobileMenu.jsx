
import React from "react";

export const MobileMenu = ({ isOpen, onClose }) => { 
  return (

    
   <div
  className={`md:hidden fixed top-0 left-0 w-full mt-24 mx-24 p-12 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center gap-10 text-white text-xl transition-opacity duration-300 z-40 ${
    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
      <a href="#home" onClick={onClose}>
        Home
      </a>
      <a href="#About" onClick={onClose}>
        About
      </a>
      <a href="#lookbook" onClick={onClose}>
        Lookbook
      </a>
      <a href="#contactUs" onClick={onClose}>
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
