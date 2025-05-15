import { useState } from "react";

export const Categories = () => {
  const [hovered1, setIsHovered1] = useState(false);
  const [hovered2, setIsHovered2] = useState(false);
  const [hovered3, setIsHovered3] = useState(false);
  const [hovered4, setIsHovered4] = useState(false);

  return (
    <section id="categories">
      <div className="flex flex-col mx-auto px-12 items-center py-6 justify-between space-y-4 h-screen ">
        <h1 className="font-bold text-3xl border-b pb-2 text-[#ff9022]">
          Shop by Categories
        </h1>
        <p className="text-[#ff9022]">
          Have a look on what categories we have{" "}
        </p>

        <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 rounded-lg w-full h-full ">
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
              className={`w-full text-white text-center rounded-lg bottom-0 mt-auto p-8 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent transition-all duration-300 ease-in-out
                 ${hovered1 ? "h-[80%]" : "h-[35%]"}`}
            >
              <p className="text-3xl mt-8">Bespoke Womenswear</p>
              {hovered1 && (
                <p>
                  Gowns, suits, and foundational pieces crafted from scratch for
                  women who want clarity, not costume.
                </p>
              )}

              {hovered1 && (
                <button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                  Shop now
                </button>
              )}
            </div>
          </div>

          {/* the two middle cards */}
          <div className="flex flex-col flex-1 shrink-0 gap-6 justify-between h-full ">
            <div
              className="girlwear rounded-lg h-1/2 flex flex-col "
              onMouseEnter={() => {
                setIsHovered2(true);
              }}
              onMouseLeave={() => {
                setIsHovered2(false);
              }}
            >
              <div
                className={`w-full text-white text-center rounded-lg mt-auto p-8 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent
                transition-all duration-300 ease-in-out  }
          `}
              >
                <p className="text-3xl mt-8">Girlwear</p>

                {hovered2 && (
                  <p>
                    Clothes for little girls who stand tall without needing
                    sparkle or softness to be seen.
                  </p>
                )}

                {hovered2 && (
                  <button className="mt-4 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                    Shop now
                  </button>
                )}

                              </div>
            </div>

            {/* 2 */}
            <div
              className="capsule rounded-lg h-1/2 flex flex-col"
              onMouseEnter={() => {
                setIsHovered3(true);
              }}
              onMouseLeave={() => {
                setIsHovered3(false);
              }}
            >
              <div className=" w-full text-white text-center rounded-lg mt-auto bottom-0 p-6 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent ">
                <p className="text-3xl mt-8">Capsule wardrobe</p>

                {hovered3 && (
                  <p>
                    A tightly designed collection of core pieces that move with
                    your life and no one else
                  </p>
                )}

                {hovered3 && (
                  <button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                    Shop now
                  </button>
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
              className={`w-full text-white text-center rounded-lg bottom-0 mt-auto p-8 z-10 max-w-xl bg-gradient-to-t from-black/90 to-transparent transition-all duration-300 ease-in-out
                 ${hovered4 ? "h-[80%]" : "h-[35%]"}`}
            >
              <p className="text-3xl mt-8">Bridal wear</p>
              {hovered4 && (
                <p>
                  Clothes for children age 8 -16. Also suitable for legacy
                  dressing for mothers and daughters occasion wears{" "}
                </p>
              )}

              {hovered4 && (
                <button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
                  Shop now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
