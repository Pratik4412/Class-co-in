import React, { useEffect } from "react";
import { teamImage } from "../../data/text";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSize = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {/* Heading */}
      <div className="w-full flex items-center gap-2 flex-col text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight">
          Our Team
        </h1>
        <p className="text-lg font-paraFont text-gray-300">
          Meet the leaders who drive our firm with experience & integrity
        </p>
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="block  lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
        >
          {teamImage.map((team, i) => (
            <SwiperSlide key={i}>
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-[#180F0B] h-full rounded-xl shadow-md overflow-hidden"
              >
                {/* <div className="w-full h-[300px] bg-white object-top justify-center flex items-center">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-[200px] h-[250px] object-scale-down bg-white"
                  />
                </div> */}
                <div className="w-full object-top justify-center flex items-center">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-[150px] h-[150px] object-contain rounded-full"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 text-center">
                  <h3 className="text-base md:text-lg font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight">
                    {team.name}
                  </h3>

                  <h6 className="text-sm font-medium text-primary-color">
                    {team.designation}
                  </h6>

                  <p className="text-sm text-gray-200 font-paraFont">
                    {team.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" justify-center flex items-center gap-2 mt-3">
          <button className="custom-prev bg-primary-color text-white  w-10 h-10 flex items-center justify-center rounded-full text-[16px]">
            &#8592;
          </button>
          <button className="custom-next bg-primary-color text-white  w-10 h-10 flex items-center justify-center rounded-full text-[16px]">
            &#8594;
          </button>
        </div>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {teamImage.map((team, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 120}
            className="bg-[#180F0B] rounded-xl shadow-md overflow-hidden transition-all duration-300 py-6"
          >
            <div className="w-full object-top justify-center flex items-center">
              <img
                src={team.image}
                alt={team.name}
                className="w-[150px] h-[150px] object-contain rounded-full"
              />
            </div>

            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-center text-lg font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight">
                {team.name}
              </h3>

              <h6 className="text-center text-sm font-medium text-primary-color">
                {team.designation}
              </h6>

              <p className="text-sm text-gray-200 font-paraFont leading-relaxed">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSize;
