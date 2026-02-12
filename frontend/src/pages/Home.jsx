import React from "react";
import HomeAbout from "../components/homepage/HomeAbout";
import CoreServices from "../components/homepage/CoreServices";
import StrenghtsO from "../components/homepage/StrenghtsO";
import OurExprtise from "../components/homepage/OurExprtise";
import { useNavigate } from "react-router-dom";
import Credentials from "../components/homepage/Credentials";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <div className="hero-section">
        <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10 bg-[linear-gradient(180deg,rgba(24,15,11,0.65)_0%,rgba(24,15,11,0.45)_50%,rgba(24,15,11,0.75)_100%)] w-full h-full ">
          <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
            <div className="flex items-center flex-col gap-4">
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
                Chartered Accountants | Consultants | Advisors
              </h6>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-3 ">
              <button
                className="btn-button "
                onClick={() => navigate("/services")}
              >
                Explore Our Services
              </button>
              <a
                href="https://drive.google.com/file/d/1T37F1muX6QEWJq1Ly22seZikDMKDDmcI/view"
                target="_blank"
                className="
    text-secondary-200
    border border-secondary-color
    py-2 px-6 text-xl rounded-lg

    transition-all duration-[400ms] ease-in-out

    hover:text-white
    hover:shadow-xl
    hover:-translate-y-1
  "
              >
                Download our E-brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeAbout />
      <CoreServices />
      <Credentials />
      <StrenghtsO />
      <OurExprtise />
    </div>
  );
};

export default Home;
