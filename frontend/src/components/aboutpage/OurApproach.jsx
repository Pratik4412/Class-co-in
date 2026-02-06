import React from "react";

const OurApproach = () => {
  return (
    <div className="bg-[#281F1C] py-5 sm:py-10 md:py-20">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col md:flex-row gap-11">
        <div className="w-full flex items-start gap-5 flex-col">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight"
          >
            Our Approach
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-start text-md md:text-base font-paraFont text-gray-300"
          >
            Our professional approach is centred on:
            <br /> 1. Understanding client requirements and regulatory context
            <br />
            2. Risk assessment and applicability evaluation <br />
            3. Structured execution with proper documentation <br />
            4. Review, reporting, and ongoing advisory support
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-10">
            <div className="flex justify-end w-full">
              <div
                data-aos="fade-down"
                // data-aos="fade-left"
                data-aos-delay="400"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-[#180F0B] rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold text-white">
                  Structured
                </h1>
              </div>
            </div>
            <div className="flex justify-start ">
              <div
                data-aos="fade-down"
                // data-aos="fade-left"
                data-aos-delay="400"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-primary-800 rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold text-white">
                  Disciplined
                </h1>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div
                data-aos="fade-down"
                // data-aos="fade-left"
                data-aos-delay="400"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-[#180F0B] rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold text-white">
                  Transparent
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
