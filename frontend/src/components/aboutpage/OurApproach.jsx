import React from "react";

const OurApproach = () => {
  return (
    <div className="bg-primary-50 py-5 sm:py-10 md:py-20">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col md:flex-row gap-11">
        <div className="w-full flex items-start gap-5 flex-col">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="w-full text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]"
          >
            Our Approach
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center md:text-start text-lg font-paraFont text-gray-600"
          >
            Our approach is built on three cornerstones — Expertise, Ethics, and
            Empathy. We go beyond compliance to deliver insights that empower
            decisions. Every engagement is handled with utmost confidentiality
            and a genuine understanding of each client's business.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-10">
            <div className="flex justify-end w-full">
              <div
                data-aos="fade-down"
                // data-aos="fade-left"
                data-aos-delay="400"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-white rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold">
                  Expertise
                </h1>
              </div>
            </div>
            <div className="flex justify-start ">
              <div
                data-aos="fade-down"
                // data-aos="fade-left"
                data-aos-delay="400"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-primary-color rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold text-white">
                  Ethics
                </h1>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div
                data-aos="fade-down"
                // data-aos="fade-left"
                data-aos-delay="400"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-white rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold">
                  Empathy
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
