import React from "react";
import HomeAbout from "../components/homepage/HomeAbout";
import CoreServices from "../components/homepage/CoreServices";
import StrenghtsO from "../components/homepage/StrenghtsO";
import OurExprtise from "../components/homepage/OurExprtise";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-16">
      <div className="hero-section">
        <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10 bg-[rgba(0,0,0,0.3)] w-full h-full ">
          <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
            <div className="flex items-center flex-col gap-4">
              <h1 className="fadeUp fadeUp Delay2 text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-headingFont">
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
