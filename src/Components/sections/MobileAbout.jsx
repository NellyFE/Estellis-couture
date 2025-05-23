import { useState } from "react";

export const MobileAbout = () => {
  const [hovered1, setIsHovered1] = useState(false);
  const [hovered2, setIsHovered2] = useState(false);
  const [hovered3, setIsHovered3] = useState(false);
  const [hovered4, setIsHovered4] = useState(false);

  return (
    <div className="flex flex-col md:hidden justify-between gap-6 rounded-lg w-full h-full ">
      <div
        className="bespoke bg-top relative min-h-[400px] rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div className="absolute inset-0 flex flex-col justify-end text-white text-center p-6 bg-gradient-to-t from-black/90 to-transparent transition-all duration-500 ease-in-out">
          <p className="text-2xl">Bespoke Womenswear</p>

          {hovered1 && (
            <>
              <p className="mt-4">
                Gowns, suits, and foundational pieces crafted from scratch for
                women who want clarity, not costume.
              </p>
              <button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 hover:bg-transparent">
                Shop now
              </button>
            </>
          )}
        </div>
      </div>

      {/* the two middle cards */}

      <div
        className="girlwear relative min-h-[400px] rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <div className="absolute inset-0 flex flex-col justify-end text-white text-center p-6 bg-gradient-to-t from-black/90 to-transparent transition-all duration-500 ease-in-out">
          <p className="text-2xl">Girlwear</p>

          {hovered2 && (
            <>
              <p className="mt-4">
                Tailored clothing for girls aged 8-16, made for comfort,
                confidence, and special moments with family.
              </p>
              <button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 hover:bg-transparent">
                Shop now
              </button>
            </>
          )}
        </div>
      </div>

      {/* 2 */}
      <div
        className="capsule relative min-h-[400px] rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <div className="absolute inset-0 flex flex-col justify-end text-white text-center p-6 bg-gradient-to-t from-black/90 to-transparent transition-all duration-500 ease-in-out">
          <p className="text-2xl">Everyday Tailored</p>

          {hovered3 && (
            <>
              <p className="mt-4">
                Effortless, custom casuals for daily wear, made to bring ease,
                style, and longevity to your wardrobe.
              </p>
              <button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 hover:bg-transparent">
                Shop now
              </button>
            </>
          )}
        </div>
      </div>

      {/* the last card */}
      <div
        className="mother relative min-h-[400px] rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <div className="absolute inset-0 flex flex-col justify-end text-white text-center p-6 bg-gradient-to-t from-black/90 to-transparent transition-all duration-500 ease-in-out">
          <p className="text-2xl">Bridal Wear</p>

          {hovered4 && (
            <>
              <p className="mt-4">
                Thoughtfully designed bridal pieces that reflect your story and
                make you feel special on your big day.
              </p>
              <button className="mt-6 border border-white py-2 px-4 rounded bg-white/10 hover:bg-transparent">
                Shop now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
