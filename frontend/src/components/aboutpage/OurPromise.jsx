import React from "react";
import ourPromi from "../../assets/aboutpage/CA. Prashant Mittal.jpeg";
const OurPromise = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <div className="flex text-start md:items-center gap-6 md:gap-10 flex-col md:flex-row justify-center">
        <img src={ourPromi} alt="" className="md:h-[500px] rounded-2xl" />
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent"
          >
            CA. Prashant Mittal <br />{" "}
            <span className=" text-center md:text-start text-lg md:text-xl font-gray-600 font-paraFont text-gray-300">
              Chairman Emeritus – C L A S S & Co. LLP
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-lg md:text-xl font-gray-600 font-paraFont text-gray-300"
          >
            A visionary leader and one of the youngest Chartered Accountants of
            his time, qualifying at the age of 19. With over two decades of
            experience, he has shaped robust financial and governance frameworks
            across diverse sectors. Guided by integrity, excellence, and
            collective growth, he continues to inspire leadership and long-term
            value at C L A S S & Co. LLP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
