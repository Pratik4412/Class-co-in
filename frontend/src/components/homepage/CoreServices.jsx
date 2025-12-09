import React from "react";
import { servicesContent } from "../../data/text";

const CoreServices = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 text-center flex flex-col gap-8">
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A]">
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
          bg-white rounded-2xl p-10
          shadow-md hover:shadow-2xl
          transition-all duration-500 ease-out
          hover:-translate-y-2
          overflow-hidden
        "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary-color opacity-0 group-hover:opacity-5 transition duration-500"></div>

              {/* Icon */}
              <span
                className="
            bg-primary-color w-20 h-20 rounded-full
            flex items-center justify-center text-white text-3xl
            transition-all duration-500
            group-hover:rotate-6 group-hover:scale-110
            shadow-lg
          "
              >
                {item.icons}
              </span>

              {/* Title */}
              <h1
                className="
            text-lg md:text-2xl font-paraFont font-semibold text-center
            transition-all duration-500
            group-hover:text-primary-color
          "
              >
                {item.title}
              </h1>

              {/* Description */}
              <p
                className="
            text-base md:text-lg text-gray-600 font-paraFont text-center
            transition-all duration-500
            group-hover:text-gray-800
          "
              >
                {item.description}
              </p>

              {/* Bottom Animated Line */}
              <span
                className="
            absolute bottom-0 left-1/2 w-0 h-[3px]
            bg-primary-color
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
