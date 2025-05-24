import { RevealOnScroll } from "../ReavelOnScroll"

export const Contact = () => {
  return (
    <section id="contactUs">

      <RevealOnScroll>
      <div className="flex mx-auto p-12">

        <div className="me flex flex-col md:flex-row border p-4 md:p-6 justify-between items-center rounded-lg w-full text-white">
          <div className="flex flex-col w-full md:w-1/2 text-center md:text-left"> 
            <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
            <p>
              Whether you're ready to start your custom piece or simply have a
              question, we’d love to hear from you.
            </p>
          </div>

          <div className="flex w-full md:w-1/2 items-end justify-center">
            <button className="mt-4 md:mt-8 border border-white py-4 px-8 rounded bg-white/10 cursor-pointer hover:bg-transparent transition-all-ease">
              Contact Us →
            </button>
          </div>
        </div>

      </div>

      </RevealOnScroll>
    </section>
  );
};
