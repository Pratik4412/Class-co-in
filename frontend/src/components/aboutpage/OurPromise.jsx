import React from "react";
import ourPromi from "../../assets/aboutpage/CA. Prashant Mittal.jpeg";
const OurPromise = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <div className="flex text-start md:items-center gap-6 md:gap-10 flex-col md:flex-row justify-center">
        <div className=" flex items-center justify-center w-full lg:w-1/2">
          <img
            src={ourPromi}
            alt=""
            className="w-1/2  md:h-[300px] rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent"
          >
            CA. Prashant Gurudas Mittal <br />{" "}
            <span className=" text-center md:text-start text-lg md:text-xl font-gray-600 font-paraFont text-gray-300">
              Chairman Emeritus – C L A S S & Co. LLP
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-sm md:text-base font-gray-600 font-paraFont text-gray-300"
          >
            CA. Prashant Gurudas Mittal is a visionary professional whose career
            reflects exceptional dedication, discipline, and commitment to
            professional excellence. He qualified as a Chartered Accountant at
            the age of 19, making him one of the youngest Chartered Accountants
            of his time.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-sm md:text-base font-gray-600 font-paraFont text-gray-300"
          >
            With over two decades of professional experience, he has played a
            pivotal role in shaping C L A S S & Co. LLP into a trusted and
            well-recognised professional institution. His leadership philosophy
            is rooted in integrity, collective growth, and long-term value
            creation for clients and teams alike.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className=" text-center md:text-start text-sm md:text-base font-gray-600 font-paraFont text-gray-300"
          >
            A committed lifelong learner, CA. Prashant Mittal has consistently
            enhanced his professional capabilities across finance, taxation,
            corporate law, audit, and forensic disciplines. His guidance
            continues to influence the firm’s strategic direction, governance
            standards, and professional culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
