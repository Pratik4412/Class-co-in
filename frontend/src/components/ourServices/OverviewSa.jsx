import React from "react";
import ourOverview from "../../assets/our-services/1. Business Support Services - visual selection 1.png";
const OverviewSa = () => {
  return (
    <div className="">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-6 md:gap-10 lg:gap-20 py-6 md:py-10 lg:py-20">
        <div className="flex items-center gap-8 flex-col ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
            Comprehensive Business Services Overview
          </h1>
          <img src={ourOverview} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OverviewSa;
