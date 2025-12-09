// import React from "react";
// import logo from "../assets/header-logo.png";
// import Ca_log from "../assets/ca-logo.svg";
// // import clss_co from "../assets/class-co.svg";
// const Footer = () => {
//   return (
//     <div className="bg-[#8a5b47]">
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 py-20 ">
//         <div className="flex items-start flex-col md:flex-row justify-between gap-4 footer-bg">
//           <div className="flex flex-col gap-4 w-1/2 ">
//             <img
//               src={logo}
//               alt="footerLogo"
//               className="w-full md:w-[250px] h-full"
//             />
//             <p className="text-base font-paraFont text-white w-full md:w-[350px]">
//               Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
//               Accountancy firm providing audit, taxation, and advisory services.
//             </p>
//           </div>
//           <div className="flex items-start flex-col md:flex-row gap-10 ">
//             <div className="flex flex-col gap-4 items-start">
//               <h1 className="text-lg font-headingFont font-semibold text-white">
//                 Navigate
//               </h1>
//               <ul className="flex items-start flex-col gap-2">
//                 <li className="text-sm text-white">Home</li>
//                 <li className="text-sm text-white">About Us</li>
//                 <li className="text-sm text-white">Services</li>
//                 <li className="text-sm text-white">Contact Us</li>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-4 items-start ">
//               <h1 className="text-lg font-headingFont font-semibold text-white">
//                 Legal
//               </h1>
//               <ul className="flex items-start flex-col gap-2">
//                 <li className="text-sm text-white">Privacy Policy</li>
//                 <li className="text-sm text-white">Terms of service</li>
//                 <li className="text-sm text-white">Legal</li>
//               </ul>
//             </div>
//             <div className="flex flex-col gap-4 items-start ">
//               <h1 className="text-lg font-headingFont font-semibold text-white">
//                 Certification
//               </h1>
//               <img src={Ca_log} alt="" className="bg-white rounded-lg" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../assets/header-logo.png";
import Ca_log from "../assets/ca-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#8a5b47] overflow-hidden">
      {/* Background Image */}
      <div className="footer-bg absolute inset-0 opacity-10"></div>

      {/* Content */}
      <div className="relative container mx-auto px-5 md:px-10 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
          {/* BRAND */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <img
              src={logo}
              alt="footerLogo"
              className="w-[180px] md:w-[250px]"
            />
            <p className="text-base font-paraFont max-w-md leading-relaxed text-white/90">
              Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
              Accountancy firm providing audit, taxation, and advisory services.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-headingFont font-semibold">Navigate</h1>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Services
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-headingFont font-semibold">Legal</h1>
            <ul className="flex flex-col gap-2 text-sm text-white/90">
              <Link to="/privacy-policy">
                <li className="hover:text-white transition cursor-pointer">
                  Privacy Policy
                </li>
              </Link>

              <Link to="/terms-of-service">
                <li className="hover:text-white transition cursor-pointer">
                  Terms & Conditions
                </li>
              </Link>

              <Link to="/legal-disclaimer">
                <li className="hover:text-white transition cursor-pointer">
                  Legal Disclaimer
                </li>
              </Link>
            </ul>

            <div className="mt-4">
              <img
                src={Ca_log}
                alt="CA Certification"
                className="bg-white p-2 rounded-lg w-[140px]"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-14 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} CLASS & Co. LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
