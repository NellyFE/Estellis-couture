export const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-r from-black/90 to-transparent overflow-hidden ">
          <img
            src="/heroimg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>

      <div className="relative text-center md:text-left z-10 max-w-xl text-white ml-0 md:ml-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Elegance in every curve, strength in every seam.
        </h1>

        <p className="text-lg">
          we craft custom, sculptural garments that highlight the beauty of your
          form while embodying the strength of your presence. Tailored for the
          woman who is both graceful and powerful.
        </p>

        <button className="mt-8 border border-white p-4 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
          Explore Our Collection →
        </button>
      </div>
    </section>
  );
};
