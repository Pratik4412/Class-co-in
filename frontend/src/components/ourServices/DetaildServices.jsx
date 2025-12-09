import { ourServicesContent, services } from "../../data/text";
import React, { useEffect } from "react";
// import { services } from "../data/services";
import AOS from "aos";
import "aos/dist/aos.css";
const DetaildServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    // <div className="container mx-auto px-5 md:px-10 lg:px-20 text-center flex flex-col gap-8">
    //   <div>
    //     <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A]">
    //       Detailed Services
    //     </h1>
    //   </div>
    //   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //     {ourServicesContent.map((item, i) => {
    //       return (
    //         <div
    //           key={i}
    //           data-aos="fade-up"
    //           data-aos-delay={i * 150}
    //           className="group flex items-center flex-col gap-3 shadow-lg bg-white hover:bg-primary-400 transition-all rounded-xl p-10 "
    //         >
    //           <h1 className="text-lg md:text-2xl font-paraFont font-semibold group-hover:text-white">
    //             {item.title}
    //           </h1>
    //           <p className="text-base md:text-lg text-gray-600 font-paraFont font-normal group-hover:text-white">
    //             {item.description}
    //           </p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 60}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
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

export default DetaildServices;
