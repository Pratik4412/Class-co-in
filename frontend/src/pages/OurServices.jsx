import React from "react";
import DetaildServices from "../components/ourServices/DetaildServices";
import BussinessSupport from "../components/ourServices/BussinessSupport";
import OverviewSa from "../components/ourServices/OverviewSa";

const OurServices = () => {
  return (
    <div className="flex flex-col">
      <div className="our-section">
        <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10 bg-[linear-gradient(180deg,rgba(24,15,11,0.65)_0%,rgba(24,15,11,0.45)_50%,rgba(24,15,11,0.75)_100%)] w-full h-full ">
          <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
            <div className="flex items-center flex-col gap-4">
              <h1 className="fadeUp fadeUp Delay2 text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-headingFont">
                Our Services
              </h1>

              <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
                Comprehensive Professional Solutions Under One Roof
              </h6>
            </div>
          </div>
        </div>
      </div>
      <DetaildServices />
      <OverviewSa />
    </div>
  );
};

export default OurServices;
