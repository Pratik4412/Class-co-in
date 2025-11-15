import React from "react";
import footerLogo from "../assets/footer-logo.png";
const Footer = () => {
  return (
    <div className="bg-secondary-color">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-20 ">
        <div className="flex items-start flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <img
              src={footerLogo}
              alt="footerLogo"
              className="w-full md:w-[250px] h-full"
            />
            <p className="text-base font-paraFont text-gray-700 w-full md:w-[350px]">
              Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
              Accountancy firm providing audit, taxation, and advisory services.
            </p>
          </div>
          <div className="flex items-start flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-4 items-start">
              <h1 className="text-lg font-headingFont font-semibold">
                Navigate
              </h1>
              <ul className="flex items-start flex-col gap-2">
                <li className="text-sm text-gray-700">Home</li>
                <li className="text-sm text-gray-700">About Us</li>
                <li className="text-sm text-gray-700">Services</li>
                <li className="text-sm text-gray-700">Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start ">
              <h1 className="text-lg font-headingFont font-semibold">Legal</h1>
              <ul className="flex items-start flex-col gap-2">
                <li className="text-sm text-gray-700">Privacy Policy</li>
                <li className="text-sm text-gray-700">Terms of service</li>
                <li className="text-sm text-gray-700">Legal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
