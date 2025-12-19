import React from "react";
import ourPromi from "../../assets/aboutpage/out-promise.webp";
const OurPromise = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <div className="flex text-start md:items-center gap-6 md:gap-10 flex-col md:flex-row justify-center">
        <img src={ourPromi} alt="" className="h-[500px] rounded-2xl" />
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1
            className=" text-center text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent"
          >
            Our Promise
          </h1>
          <p className=" text-center md:text-start text-lg md:text-xl font-gray-600 font-paraFont text-gray-300">
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
