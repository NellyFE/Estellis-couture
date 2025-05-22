export const Contact = () => {
  return (
    <section id="contactUs">
      <div className="flex mx-auto p-12">

        <div className="me flex border p-6 justify-between items-center rounded-lg w-full text-white">
          <div className="flex flex-col w-1/2"> 
            <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
            <p>
              Whether you're ready to start your custom piece or simply have a
              question, we’d love to hear from you.
            </p>
          </div>

          <div className="flex w-1/2 items-end justify-center">
            <button className="mt-8 border border-white py-4 px-8 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
