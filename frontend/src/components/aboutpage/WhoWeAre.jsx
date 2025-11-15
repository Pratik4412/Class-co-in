import React from "react";
import whoAre from "../../assets/aboutpage/Image Block → About Image.png";
const WhoWeAre = () => {
  return (
    <div>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-8">
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A]">
            Who We Are
          </h1>
        </div>
        <div className="md:relative flex flex-col gap-4">
          <div className="flex md:items-center flex-col md:flex-row text-start gap-5 md:gap-10 ">
            <img src={whoAre} alt="whoAre" />
            <p className="text-sm md:text-xl font-paraFont">
              M/s CLASS & Co. LLP (formerly Chaturvedi & Agrawal) is a
              Mumbai-based Chartered Accountancy firm offering end-to-end
              professional solutions — from audit and taxation to restructuring
              and regulatory consulting. For over four decades, we've been
              helping clients simplify complex financial landscapes through
              personalized, ethical, and value-driven services.
            </p>
          </div>
          <div className="bg-white shadow-lg md:absolute bottom-0 right-0 rounded-lg p-5 flex flex-col md:flex-row items-center gap-4 ">
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A]">
                40+
              </h1>
              <p className="text-base font-paraFont text-gray-600">
                Years of Legacy
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A]">
                500+
              </h1>
              <p className="text-base font-paraFont text-gray-600">
                Clients Served
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A]">
                6
              </h1>
              <p className="text-base font-paraFont text-gray-600">
                Experienced Partners
              </p>
            </div>
            <div className="bg-gray-200 w-full md:w-[2px] h-[1px] md:h-[80px]"></div>
            <div className="w-full md:w-fit flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-semibold text-[#01254A]">
                We put our customers at the <br /> heart of everything we do.
              </h1>
              <p className="text-base font-paraFont text-gray-600">
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
