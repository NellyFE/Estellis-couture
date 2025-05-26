import { useState } from "react";
import { RevealOnScroll } from "../ReavelOnScroll";

export const About = () => {
  const [activePage, setActivePage] = useState("where");

  return (
    <section id="about" className="h-screen md:h-96" > 

    <RevealOnScroll>
      {/* the parent container */}
      <div
        id="aboutsection"
        className="flex flex-col md:flex-row mx-auto p-12 px-6 md:px-12 justify-between md:space-x-8 h-96 gap-28 md:gap-0"
      >
        {/* image container */}

        <div className="w-full md:w-1/2 h-full">

        <p className="md:hidden font-bold text-[#ff9022] border-b w-8 text-2xl">About</p>
          <h2 className="md:hidden text-2xl font-bold mb-4">
            More than fashion. It's a statement
          </h2>

          {activePage === "where" && (
            <img
              src="/images/estya.jpg"
              alt="image"
              className="w-full h-full object-cover object-[50%_99%] rounded-b-0 md:rounded fade-in"
            />
          )}

          {activePage === "how" && (
            <img
              src="/images/esty6.jpg"
              alt="image"
              className="w-full h-full object-cover rounded-b-0 md:rounded fade-in"
            />
          )}

          {activePage === "who" && (
            <img
            src="./images/esty4.jpg"
            alt="image"
            className="w-full h-full object-cover object-[50%_29%] rounded-b-0 md:rounded fade-in"
          />
          )}
        </div>

         {/* text container */}
        <div className="flex md:flex-col w-full md:w-1/2 h-96 mt-0.5 md:mt-0">
          
          <p className="hidden md:flex font-bold mb-2">About</p>
          <h2 className="hidden md:flex text-2xl font-bold mb-4">
            More than fashion. It's a statement
          </h2>

          {/* the container for the about cards */}
          <div className="flex flex-col md:flex-row bg-[#fcbd7d]/20 md:bg-transparent pt-2 md:pt-0 gap-6 mb-0 md:mb-6 "> 
            <button
              onClick={() => setActivePage("where")}
              className={`${
                activePage=== "where" && "bg-[#fcbd7d]"
              } p-2 w-full md:w-1/3 font-semibold rounded-t-0 md:rounded cursor-pointer border border-transparent hover:border-[#fcbd7d] transition-all-ease`}
            >
              Where&nbsp;it&nbsp;began
            </button>

            <button
              onClick={() => setActivePage("how")}
              className={`${
                activePage === "how" && "bg-[#fcbd7d]"
              }  p-2 w-full text-left md:text-center md:w-1/3 font-semibold rounded-t-0 md:rounded cursor-pointer border border-transparent hover:border-[#fcbd7d] transition-all-ease`}
            >
              How&nbsp;it's&nbsp;made
            </button>   

            <button
              onClick={() => setActivePage("who")}
              className={`${
                activePage === "who" && "bg-[#fcbd7d]"
              } p-2 w-full text-left md:text-center md:w-1/3 font-semibold rounded-t-0 md:rounded cursor-pointer border border-transparent hover:border-[#fcbd7d] transition-all-ease`}
            >
              Who&nbsp;it's&nbsp;for
            </button>

          </div>

          {activePage === "where" && (
            <p className="bg-[#fcbd7d]/20 text-[#333333] w-full py-4 px-2 rounded fade-in">
              {" "}
              Our journey began with a desire to redefine femininity,to create
              fashion that merges grace with strength. What started as sketches
              and late-night ideas became a brand built to celebrate the power
              in every woman.
            </p>
          )}

          {activePage === "how" && (
            <p className="bg-[#fcbd7d]/20 text-[#333333] w-full py-4 px-2 rounded fade-in">
              Each piece is crafted with purpose from hand-picked fabrics to
              sculpted silhouettes. We blend traditional techniques with modern
              design to create garments that feel as powerful as they look.
            </p>
          )}

          {activePage === "who" && (
            <p className="bg-[#fcbd7d]/20 text-[#333333] w-full py-4 px-2 rounded fade-in">
              Our designs are made for women who lead with quiet confidence, who
              own every room they enter. She’s bold, refined, and
              unapologetically herself and she deserves fashion that reflects
              that.
            </p>
          )}
        </div>

      </div>

      <div className="md:hidden">

      </div>

     </RevealOnScroll>

    </section>
  );
};
