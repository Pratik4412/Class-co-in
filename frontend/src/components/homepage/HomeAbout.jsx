import React from "react";
import abouthome from "../../assets/landingpage/Image Block → About Image.png";
const HomeAbout = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col sm:flex-row gap-5 md:gap-10 ">
      <div>
        <img src={abouthome} alt="" />
      </div>
      <div className="flex flex-col gap-3 md:gap-6">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A] font-headingFont"
        >
          About Summary Section
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="250"
          className="text-base md:text-lg lg:text-xl font-paraFont"
        >
          Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
          Accountancy firm providing audit, taxation, and advisory services.
        </p>
        <div data-aos="fade-up" data-aos-delay="350">
          <button className="btn-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
