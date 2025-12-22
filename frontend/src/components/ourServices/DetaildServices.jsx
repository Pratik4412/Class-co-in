import { services } from "../../data/text";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const DetailedServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-[#180F0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent"
          >
            {" "}
            Businesses We Serve
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            We provide specialized solutions across multiple industries with
            deep domain expertise.
          </p>
        </div>

        {/* =========== MOBILE CAROUSEL =========== */}
        <div className="relative pb-16">
          <Swiper
            spaceBetween={24}
            centeredSlides={false}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                  className="
            group bg-[#281F1C] rounded-xl shadow-md h-[190px] p-6
            text-center flex flex-col gap-3 justify-center items-center
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300
          "
                >
                  <span
                    className="
              text-secondary-color w-20 h-20 flex items-center justify-center text-3xl
              bg-[rgba(0,0,0,0.5)] border border-[#805f3f]
              backdrop-blur-[12.5px] rounded-full rounded-b-none
              transition-all duration-500
              group-hover:rotate-6 group-hover:scale-110
              shadow-lg
            "
                  >
                    {item.icon}
                  </span>

                  <h4 className="text-lg font-semibold text-gray-300">
                    {item.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="custom-prev bg-primary-color text-white w-10 h-10 flex items-center justify-center rounded-full">
              &#8592;
            </button>
            <button className="custom-next bg-primary-color text-white w-10 h-10 flex items-center justify-center rounded-full">
              &#8594;
            </button>
          </div>
        </div>

        {/* =========== DESKTOP GRID =========== */}
        {/* <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#281F1C] rounded-xl shadow-md p-6 flex items-center flex-col gap-2 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-secondary-color w-20 h-20 flex items-center justify-center text-3xl bg-[rgba(0,0,0,0.5)] border border-[#805f3f] backdrop-blur-[12.5px] rounded-full rounded-b-none transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                {item.icon}
              </span>
              <h4 className="text-lg font-semibold text-gray-300">
                {item.title}
              </h4>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default DetailedServices;
