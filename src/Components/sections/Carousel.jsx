import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RevealOnScroll } from "../ReavelOnScroll";

export const Carousel = () => {
  return (
    <section id="lookbook" className="max-h-fit">

      <RevealOnScroll>
<div className="h-screen text-center flex flex-col items-center justify-center px-4 md:px-12 py-6  ">
<h1 className="font-bold text-3xl border-b pb-2 text-[#ff9022]">
        Lookbook</h1>
      <p className="p-2 md:p-6 w-full md:w-1/2">
       Here’s a glimpse into what
        we’ve made, and what we can make for you.
      </p>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full border-6 border-[#fcbd7d]/20 rounded-lg w-full md:w-1/3"
      >
        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty10.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
        <img
            src="/images/esty25.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
        <img
            src="/images/esty24.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
        <img
            src="/images/esty23.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
        <img
            src="/images/esty19.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
        <img
            src="/images/esty13.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
        <img
            src="/images/esty14.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
        <img
            src="/images/esty2.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
        <img
            src="/images/esty18.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>


        <SwiperSlide>
        <img
            src="/images/esty21.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty16.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty15.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty29.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty26.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty22.jpg"
            className=" w-full h-full object-cover object-[50%_20%] "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty11.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
        <img
            src="/images/esty17.jpg"
            className="w-full h-full  object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty20.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty9.jpg"
            className=" w-full h-full object-cover object-[50%_20%] "
          />{" "}
        </SwiperSlide>

        <SwiperSlide className="flex justify-center" >
        <img
            src="/images/esty28.jpg"
            className=" w-full h-full object-cover "
          />{" "}
        </SwiperSlide>
      </Swiper>
    </div>

        </RevealOnScroll>

    </section>
  );
};
