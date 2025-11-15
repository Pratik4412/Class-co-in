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
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesContent.map((item, i) => {
          return (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="group flex items-center flex-col gap-3 shadow-lg bg-white hover:bg-primary-color transition-all rounded-xl p-10 "
            >
              <h1 className="text-lg md:text-2xl font-paraFont font-semibold group-hover:text-white">
                {item.title}
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-paraFont font-normal group-hover:text-white">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreServices;
