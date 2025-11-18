import React from "react";

const OurExprtise = () => {
  return (
    <div className="bg-[#F7F1EE] py-12">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col md:flex-row gap-11">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
            Our Expertise In <br className="hidden md:block " /> Different
            Demins
          </h1>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end w-full">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-white rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold">
                  Convenience Accessibility
                </h1>
                <p className="text-base font-paraFont">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper dolor lacus, nec ornare velit cursus sed.{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-start ">
              <div
                data-aos="fade-left"
                data-aos-delay="150"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-primary-color rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold text-white">
                  Customer Satisfaction
                </h1>
                <p className="text-base font-paraFont text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper dolor lacus, nec ornare velit cursus sed.{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-white rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold">
                  Quality and Freshness
                </h1>
                <p className="text-base font-paraFont">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper dolor lacus, nec ornare velit cursus sed.{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-start  ">
              <div
                data-aos="fade-left"
                data-aos-delay="150"
                className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-primary-color rounded-lg"
              >
                <h1 className="text-xl font-headingFont font-semibold text-white">
                  Quality and Freshness
                </h1>
                <p className="text-base font-paraFont text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  semper dolor lacus, nec ornare velit cursus sed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExprtise;
