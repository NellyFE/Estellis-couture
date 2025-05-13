export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 0.8)] px-6 ">
      <div className="flex mx-auto px-4 justify-between items-center py-2">

{/* the logo */}
        <div>
            <a href="#home">
                <img src="./src/assets/images/logo.png" alt="logo" className="logoimg w-24" />
            </a>
        </div>

{/* the navbar */}
        <div className="hidden md:flex items-center space-x-8 ">
            <a href="#home" className="text-white font-bold">Home</a>
            <a href="#About" className="text-white font-bold">About</a>
            <a href="#lookbook" className="text-white font-bold">Lookbook</a>
            <a href="#contact" className="text-white font-bold">Contact</a>
        </div>

      </div>
    </nav>
  );
};
