import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export const Carousel = () => {
  return (
    <div className="h-screen flex items-center justify-center mx-auto px-12 py-6">
        <div className="flex flex-col flex-1">
        <h1 className="font-bold text-3xl border-b pb-2 text-[#ff9022] w-12">
        Lookbook</h1>
      <p>
        From bridal gowns to everyday essentials, here’s a glimpse into what
        we’ve made, and what we can make for you.
      </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper flex-2"
      >
        <SwiperSlide>
          <img
            src="./src/assets/images/esty10.jpg"
            className="  object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/esty11.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/esty1.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="./src/assets/images/esty4.jpg"
            className="object-cover rounded-lg"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
