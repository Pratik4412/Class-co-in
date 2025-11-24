import React from "react";
import logo from "../assets/header-logo.png";
import Ca_log from "../assets/ca-logo.svg";
// import clss_co from "../assets/class-co.svg";
const Footer = () => {
  return (
    <div className="bg-[#8a5b47]">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-20 ">
        <div className="flex items-start flex-col md:flex-row justify-between gap-4 footer-bg">
          <div className="flex flex-col gap-4 w-1/2 ">
            <img
              src={logo}
              alt="footerLogo"
              className="w-full md:w-[250px] h-full"
            />
            <p className="text-base font-paraFont text-white w-full md:w-[350px]">
              Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
              Accountancy firm providing audit, taxation, and advisory services.
            </p>
          </div>
          {/* <div className="w-full h-full opacity-50">
            <img src={clss_co} alt="" className="w-full h-full" />
          </div> */}
          <div className="flex items-start flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-4 items-start">
              <h1 className="text-lg font-headingFont font-semibold text-white">
                Navigate
              </h1>
              <ul className="flex items-start flex-col gap-2">
                <li className="text-sm text-white">Home</li>
                <li className="text-sm text-white">About Us</li>
                <li className="text-sm text-white">Services</li>
                <li className="text-sm text-white">Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start ">
              <h1 className="text-lg font-headingFont font-semibold text-white">
                Legal
              </h1>
              <ul className="flex items-start flex-col gap-2">
                <li className="text-sm text-white">Privacy Policy</li>
                <li className="text-sm text-white">Terms of service</li>
                <li className="text-sm text-white">Legal</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start ">
              <h1 className="text-lg font-headingFont font-semibold text-white">
                Certification
              </h1>
              <img src={Ca_log} alt="" className="bg-white rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
