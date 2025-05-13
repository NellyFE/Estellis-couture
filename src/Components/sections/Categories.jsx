export const Categories = () => {
  return (
    <section id="categories">
      <div className="flex flex-col mx-auto px-12 items-center py-6 justify-between space-y-4 h-screen ">
        <h1 className="font-bold text-3xl border-b pb-2 text-[#ff9022]">Shop by Categories</h1>
        <p className="text-[#ff9022]">Have a look on what categories we have </p>

        <div className="flex flex-wrap md:flex-nowrap h-[70vh] justify-between border gap-6 rounded-lg w-full ">
          <div className="border flex-1">

          <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-black/90 to-transparent overflow-hidden ">
          <img
            src="./src/assets/images/heroimg.jpg"
            alt=""
            className="w-full h-full object-cover mix-blend-overlay"
          /> 
        </div> 

          </div>

          <div className="relative z-10 max-w-xl ">  

            <p>Bespoke womenswear</p>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-row-2 flex-2 shrink-0">
            <div>
              <p>Structured girlwear</p>
            </div>
            <div>
              <p>occassion wear</p>
            </div>
            <div>
              <p>Legacy Dressing (mother & Daughter)</p>
            </div>
            <div>
              <p>Capsule wardrobe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
