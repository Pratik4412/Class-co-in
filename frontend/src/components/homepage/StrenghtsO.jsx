import React from "react";
import strength from "../../assets/landingpage/Key Facts - visual selection 1.png";
const StrenghtsO = () => {
  return (
    <div className="container mx-auto flex items-center flex-col md:flex-row gap-8 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col gap-10 md:gap-44 lg:gap-56 h-full w-full ">
        <div
          className="flex flex-col gap-1 items-end text-end"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <h1 className="text-2xl font-headingFont font-semibold">
            Versatility
          </h1>
          <p className="text-xl font-paraFont text-gray-600">
            Ready to tackle challenges and seize opportunities
          </p>
        </div>
        <div
          className="flex flex-col gap-1 items-end"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <h1 className="text-2xl font-headingFont font-semibold">
            Leadership
          </h1>
          <p className="text-xl font-paraFont text-gray-600">
            Positioned as a leader in its field
          </p>
        </div>
      </div>
      <div
        className="w-full"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <img src={strength} alt="strenght-image" />
      </div>
      <div className="flex flex-col gap-10 md:gap-44 lg:gap-60 w-full">
        <div
          className="flex flex-col gap-1 items-start"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h1 className="text-2xl font-headingFont font-semibold">Legacy</h1>
          <p className="text-xl font-paraFont text-gray-600">
            Over 40 years of experience
          </p>
        </div>
        <div
          className="flex flex-col gap-1 items-start"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h1 className="text-2xl font-headingFont font-semibold">
            Multi-Industry Expertise
          </h1>
          <p className="text-xl font-paraFont text-gray-600">
            Partnerships in 6 industries
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrenghtsO;
