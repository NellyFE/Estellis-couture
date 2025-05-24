import { useState } from "react";
import { MobileAbout } from "./MobileAbout";
import { RevealOnScroll } from "../ReavelOnScroll";

export const Categories = () => {
  const [hovered1, setIsHovered1] = useState(false);
  const [hovered2, setIsHovered2] = useState(false);
  const [hovered3, setIsHovered3] = useState(false);
  const [hovered4, setIsHovered4] = useState(false);

  return (
    <section id="categories" className="h-fit md:h-screen">

      <RevealOnScroll>
      <div className="flex flex-col mx-auto px-12 items-center py-6 justify-between space-y-4 md:h-screen">
        <h1 className="font-bold text-3xl border-b pb-2 text-[#ff9022]">
          Shop by Categories
        </h1>
        <p className="text-[#ff9022]">
          Have a look on what categories we have{" "}
        </p>

        <div className="hidden md:flex justify-between gap-6 rounded-lg w-full h-full ">
          <div
            className="bespoke rounded-lg flex flex-col flex-1"
            onMouseEnter={() => {
              setIsHovered1(true);
            }}
            onMouseLeave={() => {
              setIsHovered1(false);
            }}
          >
            <div
              className={`w-full text-white text-center rounded-lg bottom-0 mt-auto p-8 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent transition-all duration-800 ease-in-out
                 ${hovered1 ? "h-[80%]" : "h-[35%]"}`}
            >
              <p className="text-3xl mt-18">Bespoke Womenswear</p>
              {hovered1 && (
                <p>
                  Gowns, suits, and foundational pieces crafted from scratch for
                  women who want clarity, not costume.
                </p>
              )}

              {hovered1 && (
                <a href="https://wa.link/0r6zbs"><button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                  Shop now
                </button></a>
              )}
            </div>
          </div>

          {/* the two middle cards */}
          <div className="flex flex-col flex-1 shrink-0 gap-6 justify-between h-full ">
            <div
              className="girlwear rounded-lg h-1/2 flex flex-col overflow-hidden "
              onMouseEnter={() => {
                setIsHovered2(true);
              }}
              onMouseLeave={() => {
                setIsHovered2(false);
              }}
            >
              <div className=" w-full text-white text-center rounded-lg mt-auto bottom-0 p-6 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent transition-all duration-800 ease-in-out ">
                <p className="text-3xl mt-8">Girlwear</p>

                {hovered2 && (
                  <p>
                    Tailored clothing for girls aged 8-16, made for comfort,
                    confidence, and special moments with family.
                  </p>
                )}

                {hovered2 && (
                 <a href="https://wa.link/d3dqo5"> <button className="mt-2 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                    Shop now
                  </button></a>
                )}
              </div>
            </div>

            {/* 2 */}
            <div
              className="capsule rounded-lg h-1/2 flex flex-col overflow-hidden"
              onMouseEnter={() => {
                setIsHovered3(true);
              }}
              onMouseLeave={() => {
                setIsHovered3(false);
              }}
            >
              <div className=" w-full text-white text-center rounded-lg mt-auto bottom-0 p-6 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent transition-all duration-800 ease-in-out ">
                <p className="text-3xl mt-8">Everyday Tailored</p>

                {hovered3 && (
                  <p>
                    Effortless, custom casuals for daily wear, made to bring
                    ease, style, and longevity to your wardrobe.
                  </p>
                )}

                {hovered3 && (
                  <a href="https://wa.link/xhumiq"><button className="mt-2 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                    Shop now
                  </button></a>
                )}
              </div>
            </div>
          </div>

          {/* the last card */}
          <div
            className="mother rounded-lg flex flex-col flex-1"
            onMouseEnter={() => {
              setIsHovered4(true);
            }}
            onMouseLeave={() => {
              setIsHovered4(false);
            }}
          >
            <div
              className={`w-full text-white text-center rounded-lg bottom-0 mt-auto p-8 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent transition-all duration-800 ease-in-out
                 ${hovered4 ? "h-[80%]" : "h-[35%]"}`}
            >
              <p className="text-3xl mt-18">Bridal wear</p>
              {hovered4 && (
                <p>
                  Thoughtfully designed bridal pieces that reflect your story
                  and make you feel special on your big day.
                </p>
              )}

              {hovered4 && (
                <a href="https://wa.link/7x6jy9"><button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                  Shop now
                </button></a>
              )}
            </div>
          </div>
        </div>

        <MobileAbout />
      </div>

      </RevealOnScroll>
    </section>
  );
};
