import React from "react";
import HomeAbout from "../components/homepage/HomeAbout";
import CoreServices from "../components/homepage/CoreServices";
import StrenghtsO from "../components/homepage/StrenghtsO";
import OurExprtise from "../components/homepage/OurExprtise";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <div className="hero-section">
        <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10 bg-[linear-gradient(180deg,rgba(24,15,11,0.65)_0%,rgba(24,15,11,0.45)_50%,rgba(24,15,11,0.75)_100%)] w-full h-full ">
          <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
            <div className="flex items-center flex-col gap-4">
              {/* <h1
                className="
    fadeUp fadeUpDelay2
    text-2xl md:text-4xl lg:text-6xl
    font-semibold text-center
    font-headingFont
    bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]
    bg-clip-text text-transparent
    drop-shadow-[0_2px_20px_rgba(255,202,151,0.35)]
  "
              > */}
              <h1
                className="
    fadeUp fadeUpDelay2
    text-2xl md:text-4xl lg:text-6xl
    font-semibold text-center
    font-headingFont
    text-white
    drop-shadow-[0_2px_20px_rgba(255,202,151,0.35)]
  "
              >
                Committed to Excellence <br />
                in Professional Services
              </h1>
              <h6 className="fadeUp fadeUpDelay3 fadeUp text-base md:text-lg lg:text-xl font-semibold text-white font-paraFont">
                Chartered Accountants • Consultants • Advisors
              </h6>
            </div>
            <div>
              <button
                className="btn-button"
                onClick={() => navigate("/services")}
              >
                Explore Services
              </button>
            </div>
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
