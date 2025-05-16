export const Process = () => {
  return (
    <section id="process">
      {/* main container */}

      <div className="flex flex-col items-center justify-center mx-auto px-12 py-6">
        <h1 className="font-bold text-3xl border-b pb-2 text-[#ff9022]">
          Our Process
        </h1>

        <div className="flex flex-wrap md:flex-nowrap py-6 gap-6">
          <div className="flex flex-col border border-transparent w-1/4 p-4 rounded-lg bg-white/50 shadow-2xl shadow-black/40 hover:border-[#ff9022] transition-all duration-500 ease-in-out">
            <h2 className="font-bold text-[#ff9022]  border-b pb-2 ">
              Consultation
            </h2>
            <p className="mt-2">
              We begin with a one-on-one conversation to understand your style,
              your needs, and what you’re envisioning.
            </p>
          </div>

          <div className="flex flex-col border border-transparent w-1/4 p-4 rounded-lg bg-white/50 shadow-2xl shadow-black/40 hover:border-[#ff9022] transition-all duration-500 ease-in-out">
            <h2 className="font-bold text-[#ff9022]  border-b pb-2 ">
              Design and Fabric Selection
            </h2>
            <p className="mt-2">
              Together, we choose the perfect fabrics and sketch out your custom
              design — refined to suit your taste and comfort.
            </p>
          </div>

          <div className="flex flex-col border border-transparent w-1/4 p-4 rounded-lg bg-white/50 shadow-2xl shadow-black/40 hover:border-[#ff9022] transition-all duration-500 ease-in-out">
            <h2 className="font-bold text-[#ff9022]  border-b pb-2 ">
              Tailoring & Fittings
            </h2>
            <p className="mt-2">
              Your garment is hand-crafted with care. We schedule fittings to
              ensure everything feels just right at every step.
            </p>
          </div>

          <div className="flex flex-col border border-transparent w-1/4 p-4 rounded-lg bg-white/50 shadow-2xl shadow-black/40 hover:border-[#ff9022] transition-all duration-500 ease-in-out">
            <h2 className="font-bold text-[#ff9022]  border-b pb-2 ">
              Delivery
            </h2>
            <p className="mt-2">
              Once every detail is perfect, your piece is finished and ready.
              It’s beautifully made and entirely yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
