import React from "react";
import ourPromi from "../../assets/aboutpage/vision.webp";
import ourValues from "../../assets/aboutpage/Core Values - visual selection 1.png";
import { BiCurrentLocation } from "react-icons/bi";
import { BiRevision } from "react-icons/bi";
import TeamSize from "./TeamSize";
const Vision = () => {
  return (
    <div className="bg-primary-50">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-6 md:gap-10 lg:gap-20 py-6 md:py-10 lg:py-20">
        <div className="flex text-start md:items-center gap-6 md:gap-10 flex-col md:flex-row">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
              Driven by Vision.
              <br className="hidden md:block " /> Guided by Values.
            </h1>
            <p className="text-center md:text-start text-lg md:text-xl font-gray-600 font-paraFont">
              The foundation of CLASS & Co. LLP is built on purpose, principles,
              and professional excellence
            </p>
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-6 ">
              <div className="bg-[#281F1C] shadow-xl p-6 rounded-xl flex flex-col gap-4">
                <span className="text-secondary-color">
                  <BiCurrentLocation size={32} />
                </span>
                <h3 className="text-xl font-headingFont font-semibold text-white">
                  Our <span className="text-secondary-color">Mission</span>{" "}
                </h3>
                <p className="text-base font-paraFont text-gray-300">
                  To be recognized as a trusted leader in professional services
                  by maintaining integrity, accuracy, and client satisfaction at
                  all times.
                </p>
              </div>
              <div className="bg-[#281F1C] shadow-xl p-6 rounded-xl flex flex-col gap-4">
                <span className="text-secondary-color">
                  <BiRevision size={32} />
                </span>
                <h3 className="text-xl font-headingFont font-semibold text-white">
                  Our <span className="text-secondary-color">Vision</span>
                </h3>
                <p className="text-base font-paraFont text-gray-300">
                  To turn knowledge into value for the benefit of our clients
                  and continually strive for excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
          <img src={ourPromi} alt="" className="rounded-2xl" />
        </div>
        <TeamSize />
        <div className="flex items-center gap-8 flex-col ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
            Our values
          </h1>
          <img src={ourValues} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
