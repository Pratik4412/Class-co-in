import React from "react";
import { servicesContent } from "../../data/text";

const CoreServices = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 text-center flex flex-col gap-8">
      <div>
        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent"
        >
          Core Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesContent.map((item, i) => {
          return (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              data-aos-duration="800"
              className="
          group relative flex flex-col items-center gap-4
          bg-[#281F1C] rounded-2xl p-10
          shadow-md hover:shadow-2xl
          transition-all duration-500 ease-out
          hover:-translate-y-2
          overflow-hidden
        "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-dark-overlay opacity-0 group-hover:opacity-5 transition duration-500"></div>

              <span className="text-secondary-color w-20 h-20 flex items-center justify-center text-3xl bg-[rgba(0,0,0,0.5)] border border-[#805f3f] backdrop-blur-[12.5px] rounded-full rounded-b-none transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                {item.icons}
              </span>

              {/* Title */}
              <h1
                className="
            text-lg md:text-2xl font-paraFont font-semibold text-center
            transition-all duration-500 text-white
            group-hover:text-primary-color
          "
              >
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="
           text-sm md:text-base text-gray-200 font-paraFont text-center
            transition-all duration-500
          "
              >
                {item.description}
              </p>

              <span
                className="
            absolute bottom-0 left-1/2 w-0 h-[3px]
            bg-gold-gradient
            transition-all duration-500
            group-hover:w-full group-hover:left-0
          "
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreServices;
