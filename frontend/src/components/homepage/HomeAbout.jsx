// import React from "react";
// import abouthome from "../../assets/landingpage/about.webp";
// import { useNavigate } from "react-router-dom";

// const HomeAbout = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col-reverse sm:flex-row gap-10 md:gap-16">
//       <div
//         data-aos="zoom-in"
//         data-aos-delay="100"
//         data-aos-duration="900"
//         className="w-full sm:w-1/2 flex justify-center relative group"
//       >
//         <img
//           src={abouthome}
//           alt="About Us"
//           className="
//       w-full sm:w-[90%] lg:w-[420px] xl:w-[460px]
//       max-w-full
//       rounded-2xl shadow-xl
//       transition-all duration-700
//       group-hover:scale-105
//       group-hover:shadow-2xl
//       object-cover
//     "
//         />

//         {/* Floating Glow Effect */}
//         <div className="absolute inset-0 max-w-[460px] mx-auto rounded-2xl bg-primary-color opacity-0 group-hover:opacity-10 transition duration-700"></div>
//       </div>

//       {/* Content Section */}
//       <div className="w-full sm:w-1/2 flex flex-col gap-4 md:gap-6">
//         <h1
//           data-aos="fade-up"
//           data-aos-delay="150"
//           data-aos-duration="800"
//           className="text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-semibold text-black font-headingFont leading-tight"
//         >
//           About Summary Section
//         </h1>

//         <p
//           data-aos="fade-up"
//           data-aos-delay="300"
//           data-aos-duration="800"
//           className="text-center md:text-start text-base md:text-lg lg:text-xl font-paraFont text-gray-600 leading-relaxed"
//         >
//           Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
//           Accountancy firm providing audit, taxation, and advisory services.
//         </p>

//         <div
//           data-aos="fade-up"
//           data-aos-delay="450"
//           data-aos-duration="800"
//           className="flex items-center justify-center md:justify-start"
//         >
//           <button
//             onClick={() => navigate("/about")}
//             className="
//               btn-button border border-primary-color
//               transition-all duration-500
//               hover:bg-primary-color hover:text-white
//               hover:-translate-y-1 hover:shadow-xl
//               active:scale-95
//             "
//           >
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeAbout;

import React from "react";
import abouthome from "../../assets/landingpage/about.webp";
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#281F1C] py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* IMAGE SECTION */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="900"
          className="w-full md:w-1/2 flex justify-center relative group"
        >
          <img
            src={abouthome}
            alt="About CLASS & Co. LLP"
            className="
              w-full sm:w-[90%] lg:w-[420px] xl:w-[460px]
              rounded-2xl shadow-xl
              transition-all duration-700
              group-hover:scale-105
              group-hover:shadow-2xl
              object-cover
            "
          />

          {/* Soft Glow */}
          <div className="absolute inset-0 max-w-[460px] mx-auto rounded-2xl bg-primary-color opacity-0 group-hover:opacity-10 transition duration-700"></div>
        </div>

        {/* CONTENT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)] bg-clip-text text-transparent font-headingFont leading-tight"
          >
            Trusted Financial Advisors Since 1984
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sm md:text-base font-paraFont text-gray-400 leading-relaxed"
          >
            Established in 1984, CLASS & Co. LLP is a Mumbai-based firm of
            Chartered Accountants offering a wide range of professional services
            including audit & assurance, direct and indirect taxation, corporate
            finance, insolvency advisory, and regulatory compliance. Over the
            years, the firm has evolved into a multidisciplinary practice
            serving clients across diverse sectors and business stages.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-sm md:text-base font-paraFont text-gray-400 leading-relaxed"
          >
            Our approach combines technical expertise, regulatory understanding,
            and practical execution to deliver solutions that are accurate,
            compliant, and aligned with client requirements.
          </p>
          {/* TRUST POINTS */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="text-lg font-semibold text-primary-700">
                40+ Years
              </h4>
              <p className="text-sm text-gray-600">Industry Experience</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="text-lg font-semibold text-primary-700">
                Multi-Industry
              </h4>
              <p className="text-sm text-gray-600">Domain Expertise</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="text-lg font-semibold text-primary-700">
                Trusted
              </h4>
              <p className="text-sm text-gray-600">Advisory Partner</p>
            </div>
          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex justify-center md:justify-start mt-4"
          >
            <button
              onClick={() => navigate("/about")}
              className="
                btn-button 
                transition-all duration-500
                hover:bg-primary-color hover:text-white
                hover:-translate-y-1 hover:shadow-xl
                active:scale-95
              "
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
