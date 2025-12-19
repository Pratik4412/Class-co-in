// import React from "react";
// import logo from "../assets/header-logo.png";
// import Ca_log from "../assets/ca-logo.svg";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#8a5b47] overflow-hidden">
//       {/* Background Image */}
//       <div className="footer-bg absolute inset-0 opacity-10"></div>

//       {/* Content */}
//       <div className="relative container mx-auto px-5 md:px-10 lg:px-20 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
//           {/* BRAND */}
//           <div className="flex flex-col gap-4 md:col-span-2">
//             <img
//               src={logo}
//               alt="footerLogo"
//               className="w-[180px] md:w-[250px]"
//             />
//             <p className="text-base font-paraFont max-w-md leading-relaxed text-white/90">
//               Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
//               Accountancy firm providing audit, taxation, and advisory services.
//             </p>
//           </div>
//           <div className="flex items-start justify-between gap-6 w-full">
//             {/* NAVIGATION */}
//             <div className="flex flex-col gap-4">
//               <h1 className="text-lg font-headingFont font-semibold">
//                 Navigate
//               </h1>
//               <ul className="flex flex-col gap-2 text-sm text-white/90">
//                 <Link to="/">
//                   <li className="hover:text-white transition cursor-pointer">
//                     Home
//                   </li>
//                 </Link>
//                 <Link to="/about">
//                   <li className="hover:text-white transition cursor-pointer">
//                     About Us
//                   </li>
//                 </Link>
//                 <Link to="/services">
//                   <li className="hover:text-white transition cursor-pointer">
//                     Services
//                   </li>
//                 </Link>
//                 <Link to="/contact-us">
//                   <li className="hover:text-white transition cursor-pointer">
//                     Contact Us
//                   </li>
//                 </Link>
//               </ul>
//             </div>

//             {/* LEGAL */}
//             <div className="flex flex-col gap-4">
//               <h1 className="text-lg font-headingFont font-semibold">Legal</h1>
//               <ul className="flex flex-col gap-2 text-sm text-white/90">
//                 <Link to="/privacy-policy">
//                   <li className="hover:text-white transition cursor-pointer">
//                     Privacy Policy
//                   </li>
//                 </Link>

//                 <Link to="/terms-of-service">
//                   <li className="hover:text-white transition cursor-pointer">
//                     Terms & Conditions
//                   </li>
//                 </Link>

//                 <Link to="/legal-disclaimer">
//                   <li className="hover:text-white transition cursor-pointer">
//                     Legal Disclaimer
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-4">
//             <img
//               src={Ca_log}
//               alt="CA Certification"
//               className="bg-white p-2 rounded-lg w-[140px]"
//             />
//           </div>
//         </div>

//         {/* BOTTOM BAR */}
//         <div className="border-t border-white/20 mt-14 pt-6 text-center text-sm text-white/80">
//           © {new Date().getFullYear()} CLASS & Co. LLP. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import logo from "../assets/header-logo.png";
import Ca_log from "../assets/ca-logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#180F0B] to-primary-700 text-white overflow-hidden">
      {/* Soft Background Glow */}
      <div className="footer-bg absolute inset-0 opacity-10 md:block hidden"></div>
      <div className="absolute inset-0 bg-gold-gradient opacity-[0.04] pointer-events-none"></div>

      <div className="relative container mx-auto px-5 md:px-10 lg:px-20 py-20">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <img
              src={logo}
              alt="CLASS & Co LLP"
              className="w-[180px] md:w-[240px]"
            />

            <p className="text-base font-paraFont leading-relaxed text-white/85 max-w-md">
              Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
              Accountancy firm providing audit, taxation, compliance, and
              advisory services with integrity and excellence.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            {/* NAVIGATION */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-headingFont font-semibold text-secondary-color">
                Navigate
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Contact Us", path: "/contact-us" },
                ].map((item, i) => (
                  <Link key={i} to={item.path}>
                    <li className="text-white/80 hover:text-secondary-color transition">
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-headingFont font-semibold text-secondary-color">
                Legal
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  { name: "Privacy Policy", path: "/privacy-policy" },
                  { name: "Terms & Conditions", path: "/terms-of-service" },
                  { name: "Legal Disclaimer", path: "/legal-disclaimer" },
                ].map((item, i) => (
                  <Link key={i} to={item.path}>
                    <li className="text-white/80 hover:text-secondary-color transition">
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* CERTIFICATION */}
          <div className="flex md:justify-end items-start">
            <div className="bg-white/95 p-3 rounded-xl shadow-lg">
              <img src={Ca_log} alt="CA Certification" className="w-[80px]" />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-secondary-color/40 to-transparent"></div>

        {/* BOTTOM BAR */}
        <div className="mt-6 text-center text-sm text-white/70 font-paraFont">
          © {new Date().getFullYear()} CLASS & Co. LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
