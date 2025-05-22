import { useState } from "react";
import { MobileAbout } from "./MobileAbout";

export const About = () => {
  const [activePage, setActivePage] = useState("where");

  return (
    <section id="about" > 
      {/* the parent container */}
      <div
        id="aboutsection"
        className="hidden md:flex flex-col md:flex-row mx-auto p-12 justify-between space-x-8 h-96"
      >
        {/* image container */}

        <div className="w-1/2 h-full">
          {activePage === "where" && (
            <img
              src="./src/assets/images/estya.jpg"
              alt="image"
              className="w-full h-full object-cover object-[50%_99%] rounded fade-in"
            />
          )}

          {activePage === "how" && (
            <img
              src="./src/assets/images/esty6.jpg"
              alt="image"
              className="w-full h-full object-cover rounded fade-in"
            />
          )}

          {activePage === "who" && (
            <img
            src="./src/assets/images/esty4.jpg"
            alt="image"
            className="w-full h-full object-cover object-[50%_29%] rounded fade-in"
          />
          )}
        </div>

         {/* text container */}
        <div className="w-1/2">
          <p className="font-bold mb-2">About</p>
          <h2 className="text-2xl font-bold mb-4">
            More than fashion. It's a statement
          </h2>

          {/* the container for the about cards */}
          <div className="flex space-x-6 mb-6">
            <button
              onClick={() => setActivePage("where")}
              className={`${
                activePage=== "where" && "bg-[#fcbd7d]"
              }  p-2 rounded cursor-pointer border border-transparent hover:border-[#fcbd7d] transition-all-ease`}
            >
              Where it began
            </button>

            <button
              onClick={() => setActivePage("how")}
              className={`${
                activePage === "how" && "bg-[#fcbd7d]"
              }  p-2 rounded cursor-pointer border border-transparent hover:border-[#fcbd7d] transition-all-ease`}
            >
              How it's made
            </button>   

            <button
              onClick={() => setActivePage("who")}
              className={`${
                activePage === "who" && "bg-[#fcbd7d]/70"
              }  p-2 rounded cursor-pointer border border-transparent hover:border-[#fcbd7d] transition-all-ease`}
            >
              Who it's for
            </button>
            
          </div>
          {activePage === "where" && (
            <p className="bg-[#fcbd7d]/20 w-3/4 py-4 px-2 rounded fade-in">
              {" "}
              Our journey began with a desire to redefine femininity,to create
              fashion that merges grace with strength. What started as sketches
              and late-night ideas became a brand built to celebrate the power
              in every woman.
            </p>
          )}

          {activePage === "how" && (
            <p className="bg-[#fcbd7d]/20 w-3/4 py-4 px-2 rounded fade-in">
              Each piece is crafted with purpose from hand-picked fabrics to
              sculpted silhouettes. We blend traditional techniques with modern
              design to create garments that feel as powerful as they look.
            </p>
          )}

          {activePage === "who" && (
            <p className="bg-[#fcbd7d]/20 w-3/4 py-4 px-2 rounded fade-in">
              Our designs are made for women who lead with quiet confidence, who
              own every room they enter. She’s bold, refined, and
              unapologetically herself and she deserves fashion that reflects
              that.
            </p>
          )}
        </div>

      </div>

      <div className="md:hidden">
 <MobileAbout/>
      </div>

     

    </section>
  );
};
