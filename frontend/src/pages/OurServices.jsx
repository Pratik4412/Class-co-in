import React from "react";
import DetaildServices from "../components/ourServices/DetaildServices";
import BussinessSupport from "../components/ourServices/BussinessSupport";
import OverviewSa from "../components/ourServices/OverviewSa";

const OurServices = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="our-section px-5 md:px-10 lg:px-20 py-6">
        <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
          <div className="flex items-center flex-col gap-4">
            <h1 className="fadeUp fadeUp Delay2 text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-headingFont">
              Our Services
            </h1>

            <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
              Decades of Trust. Decades of Excellence.
            </h6>
          </div>
        </div>
      </div>
      <DetaildServices />
      <BussinessSupport />
      <OverviewSa />
    </div>
  );
};

export default OurServices;
