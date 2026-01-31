// import React, { useState } from "react";
// import { servicesTabs } from "../../data/text";
// import ourTeamside from "../../assets/aboutpage/out-promise.webp";
// const OverviewSa = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section className="bg-secondary-50 py-14 md:py-20">
//       <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
//         {/* Heading */}
//         <div className="text-center mb-10 md:mb-12">
//           <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-[var(--primary-700)]">
//             Comprehensive Business Services Overview
//           </h2>
//           <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[var(--primary-600)]">
//             A complete ecosystem of professional financial, advisory and
//             compliance services for your business growth.
//           </p>
//         </div>

//         {/* Tabs (Scrollable on Mobile) */}
//         <div className="relative mb-10 md:mb-12">
//           <div className="flex gap-3 overflow-x-auto scrollbar-hide px-1 sm:px-0 md:justify-center">
//             {servicesTabs.map((tab, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTab(index)}
//                 className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all
//                   ${
//                     activeTab === index
//                       ? "bg-[var(--primary-700)] text-white shadow-md"
//                       : "bg-white text-[var(--primary-600)] hover:bg-[var(--primary-50)]"
//                   }`}
//               >
//                 {tab.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="flex items-start gap-5">
//           <div
//             data-aos="fade-up"
//             className="w-full rounded-xl md:rounded-2xl
//           p-5 sm:p-6 md:p-8  mx-auto"
//           >
//             <h3 className="text-xl md:text-2xl font-semibold text-[var(--primary-700)] mb-3 md:mb-4">
//               {servicesTabs[activeTab].title}
//             </h3>

//             <p className="mb-4 text-sm sm:text-base text-[var(--primary-600)]">
//               <strong>Overview:</strong> {servicesTabs[activeTab].overview}
//             </p>

//             <p className="mb-5 text-sm sm:text-base text-[var(--primary-600)]">
//               <strong>Why it matters:</strong> {servicesTabs[activeTab].why}
//             </p>

//             <div className="mb-5">
//               <h4 className="font-semibold text-[var(--primary-700)] mb-2">
//                 Our services include:
//               </h4>
//               <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-[var(--primary-600)]">
//                 {servicesTabs[activeTab].services.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             <p className="mb-6 text-sm sm:text-base text-[var(--primary-600)]">
//               <strong>Who we serve:</strong> {servicesTabs[activeTab].serve}
//             </p>

//             {/* CTA */}
//             <button
//               className="
//               w-full md:w-auto
//               px-6 py-3 rounded-lg
//               bg-[var(--primary-700)] text-white
//               font-medium text-sm sm:text-base
//               hover:opacity-90 transition
//             "
//             >
//               {servicesTabs[activeTab].cta}
//             </button>
//           </div>
//           <div className="w-full h-full p-5 sm:p-6 md:p-8">
//             <img
//               src={ourTeamside}
//               alt="ourTeamside"
//               className="rounded-xl md:block hidden w-full h-[300px] object-cover object-left"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OverviewSa;

import React, { useState } from "react";
import { servicesTabs } from "../../data/text";
import ourTeamside from "../../assets/aboutpage/our promise.svg";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OverviewSa = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gradient-to-b from-secondary-50 to-primary-50 py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 fadeUp">
          <div className="inline-block mb-4">
            <span className="text-secondary-600 font-semibold text-xs md:text-sm uppercase tracking-wider px-4 py-2 bg-white rounded-full shadow-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 font-headingFont mb-4">
            Comprehensive Professional Solutions
            <br className="hidden md:block" />
            Under One Roof
          </h2>
          <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-sm md:text-base text-gray-700 font-paraFont leading-relaxed">
            CLASS & Co. LLP offers an integrated range of professional services
            designed to support businesses, institutions, and individuals across
            statutory compliance, advisory, and financial management functions.
          </p>
        </div>

        {/* Tabs (Scrollable on Mobile) */}
        <div className="relative mb-10 md:mb-12 fadeUp fadeUpDelay2">
          <div className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide px-1 sm:px-0 pb-2">
            {servicesTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  whitespace-nowrap px-4 md:px-6 py-2.5 md:py-3 
                  text-xs md:text-sm font-semibold rounded-lg
                  transition-all duration-300 
                  font-paraFont
                  ${
                    activeTab === index
                      ? "bg-primary-700 text-white shadow-lg scale-105"
                      : "bg-white text-primary-700 hover:bg-primary-50 hover:shadow-md border border-primary-200"
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          {/* Content Section */}
          <div
            className="w-full lg:w-3/5 bg-white rounded-xl md:rounded-2xl 
            p-6 sm:p-7 md:p-9 shadow-lg border border-primary-100
            fadeUp fadeUpDelay3"
          >
            {/* Category Badge (if exists) */}
            {servicesTabs[activeTab].category && (
              <div className="mb-3">
                <span className="inline-block text-xs font-semibold text-secondary-700 bg-secondary-100 px-3 py-1 rounded-full">
                  {servicesTabs[activeTab].category}
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-800 mb-4 font-headingFont">
              {servicesTabs[activeTab].title}
            </h3>

            {/* Overview */}
            <div className="mb-6 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-600">
              <p className="text-sm sm:text-base text-gray-800 font-paraFont leading-relaxed">
                {servicesTabs[activeTab].overview}
              </p>
            </div>

            {/* Services List */}
            <div className="mb-6">
              <h4 className="font-bold text-primary-800 mb-4 text-base md:text-lg font-headingFont flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary-600 rounded"></span>
                Services Include
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {servicesTabs[activeTab].services.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-gray-700 font-paraFont group"
                  >
                    <FaCheckCircle className="text-secondary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-primary-800 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              to={"/contact-us"}
              className="
                w-full md:w-fit
                px-6 md:px-8 py-3 md:py-4 rounded-lg
                bg-gradient-to-r from-primary-700 to-primary-600
                text-white font-semibold text-sm sm:text-base
                hover:shadow-xl hover:scale-105
                transition-all duration-300
                flex items-center justify-center gap-2
                group
                font-paraFont
              "
            >
              {servicesTabs[activeTab].cta}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-2/5 fadeUp fadeUpDelay3">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <img
                src={servicesTabs[activeTab].ourTeamside}
                alt="Professional Services"
                className="w-full h-[250px] md:h-[400px] lg:h-full object-cover object-center"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-transparent p-6">
                <p className="text-black font-semibold text-sm md:text-base font-paraFont">
                  Expert guidance tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Info Banner */}
        <div className="mt-10 md:mt-12 fadeUp fadeUpDelay3">
          <div className="bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-white font-semibold text-base md:text-lg font-paraFont mb-2">
              Need a customized solution?
            </p>
            <p className="text-white/90 text-sm md:text-base font-paraFont">
              We offer integrated service packages designed to meet your
              specific business requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSa;
