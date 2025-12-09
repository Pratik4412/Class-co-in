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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800">
            Businesses We Serve
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We provide specialized solutions across multiple industries with
            deep domain expertise.
          </p>
        </div>

        {/* =========== MOBILE CAROUSEL =========== */}
        <div className="block lg:hidden relative pb-16 ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  className="bg-white rounded-xl shadow-md h-[180px] p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="custom-prev bg-primary-color text-white  w-10 h-10 flex items-center justify-center rounded-full text-[16px]">
              &#8592;
            </button>
            <button className="custom-next bg-primary-color text-white  w-10 h-10 flex items-center justify-center rounded-full text-[16px]">
              &#8594;
            </button>
          </div>
        </div>

        {/* =========== DESKTOP GRID =========== */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
