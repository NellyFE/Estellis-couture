import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row border mx-auto px-12 py-6  text-white">
        <div className="flex flex-2">
          <div className="flex flex-col justify-between gap-4 w-1/2">
            <div>
              <a href="#">
                <img src="/logo.png" alt="logo" className="logoimg w-24" />
              </a>
            </div>

            <div className="flex gap-4 text-4xl w-1/2">
              <a href="https://www.instagram.com/estelliscouture?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                <FaInstagram className="hover:text-[#fcbd7d] transition-all duration-300" />
              </a>
              <a href="https://www.tiktok.com/@estelliscouture?_t=ZM-8wTxqMho8kK&_r=1">
                <FaTiktok className="hover:text-[#fcbd7d] transition-all duration-300" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className=" border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300 w-1/2"
            >
              Home
            </a>
            <a
              href="#aboutsection"
              className=" border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300"
            >
              About Us
            </a>
            <a
              href="#lookbook"
              className=" border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300"
            >
              Lookbook
            </a>
            <a
              href="#me"
              className=" border-b border-transparent hover:border-[#fcbd7d] transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            {" "}
            <HiOutlineMail /> <p>Manuwastella8@gmail.com</p>{" "}
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <IoCall /> <p>+234 902 429 2299 </p>{" "}
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <FaLocationDot /> <p>Lagos, Nigeria</p>{" "}
          </div>

          <div class="hidden text-white/50 md:block text-sm">
            <i>
              &copy; 2025 All Rights Reserved |{" "}
              <a
                href="https://www.linkedin.com/in/makuochukwu"
                class="cursor-pointer"
              >
                {" "}
                Website by NellyFE{" "}
              </a>
            </i>
          </div>
        </div>
        
      </div>

      <div class="relative block text-center !text-white/50 text-sm md:hidden">
        <span>
          &copy; 2025 All Rights Reserved |{" "}
          <a
            href="https://www.linkedin.com/in/makuochukwu"
            class="cursor-pointer"
          >
            {" "}
            Website by NellyFE{" "}
          </a>
        </span>
      </div>
    </section>
  );
};
