import React from "react";
import HomeAbout from "../components/homepage/HomeAbout";
import CoreServices from "../components/homepage/CoreServices";
import StrenghtsO from "../components/homepage/StrenghtsO";
import OurExprtise from "../components/homepage/OurExprtise";

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="hero-section px-5 md:px-10 lg:px-20 py-6 md:py-10">
        <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
          <div className="flex items-center flex-col gap-4">
            <h6 className="fadeUp fadeUpDelay1 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
              Chartered Accountants • Consultants • Advisors
            </h6>

            <h1 className="fadeUp fadeUp Delay2 text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-headingFont">
              Committed to Excellence <br />
              in Professional Services
            </h1>

            <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
              Chartered Accountants • Consultants • Advisors
            </h6>
          </div>
          <div>
            <button className="btn-button">Explore Services</button>
          </div>
        </div>
      </div>
      <HomeAbout />
      <CoreServices />
      <StrenghtsO />
      <OurExprtise />
    </div>
  );
};

export default Home;
