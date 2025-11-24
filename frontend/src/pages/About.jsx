import React from "react";
import WhoWeAre from "../components/aboutpage/WhoWeAre";
import OurApproach from "../components/aboutpage/OurApproach";
import OurPromise from "../components/aboutpage/OurPromise";
import Vision from "../components/aboutpage/Vision";

function About() {
  return (
    <div className="flex flex-col gap-24">
      <div className="about-section px-5 md:px-10 lg:px-20 py-6">
        <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
          <div className="flex items-center flex-col gap-4">
            <h1 className="fadeUp fadeUp Delay2 text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-headingFont">
              About CLASS & Co. LLP
            </h1>

            <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
              Decades of Trust. Decades of Excellence.
            </h6>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <OurApproach />
      <OurPromise />  
      <Vision />
    </div>
  );
}

export default About;
