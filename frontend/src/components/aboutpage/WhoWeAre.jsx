import React from "react";
import whoAre from "../../assets/aboutpage/who-we-are.webp";
const WhoWeAre = () => {
  return (
    <div>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-8">
        <div className="md:relative flex flex-col gap-4">
          <div className="flex md:items-start flex-col md:flex-row text-start gap-5 md:gap-10 ">
            <img src={whoAre} alt="whoAre" className="rounded-2xl" />
            <div className="flex flex-col gap-6 py-5">
              <h1 className="text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent">
                Who We Are
              </h1>
              <p className="text-center md:text-start text-sm md:text-xl font-paraFont text-gray-300">
                M/s CLASS & Co. LLP (formerly Chaturvedi & Agrawal) is a
                Mumbai-based Chartered Accountancy firm offering end-to-end
                professional solutions — from audit and taxation to
                restructuring and regulatory consulting. For over four decades,
                we've been helping clients simplify complex financial landscapes
                through personalized, ethical, and value-driven services.
              </p>
            </div>
          </div>
          <div className="bg-[#281F1C] shadow-lg md:absolute bottom-0 right-0 rounded-lg p-5 flex flex-col md:flex-row items-center gap-4 ">
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className=" text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                40+
              </h1>
              <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Years of Legacy
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className="text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                500+
              </h1>
              <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Clients Served
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className=" text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                6
              </h1>
              <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Experienced Partners
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className=" text-center md:text-start text-xl md:text-2xl font-semibold text-white">
                We put our customers at the <br /> heart of everything we do.
              </h1>
              <p className=" text-center md:text-start text-base font-paraFont text-gray-300">
                Satisfied Users Over The Globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
