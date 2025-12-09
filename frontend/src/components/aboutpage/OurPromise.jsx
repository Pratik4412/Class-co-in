import React from "react";
import ourPromi from "../../assets/aboutpage/Image 2Block → About Image.png";
const OurPromise = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <div className="flex text-start md:items-center gap-6 md:gap-10 flex-col md:flex-row justify-center">
        <img src={ourPromi} alt="" className="h-[500px]" />
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
            Our Promise
          </h1>
          <p className=" text-center md:text-start text-lg md:text-xl font-gray-600 font-paraFont">
            At CLASS & Co. LLP, our promise is simple — to combine technical
            excellence with practical business sense. Whether you’re an
            individual, startup, or corporate, you can expect strategic advice,
            proactive solutions, and long-term partnership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
