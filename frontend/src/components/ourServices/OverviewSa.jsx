// import React from "react";
// import ourOverview from "../../assets/our-services/1. Business Support Services - visual selection 1.png";
// import { servicesPage } from "../../data/text";
// const OverviewSa = () => {
//   const positionClasses = {
//     "top-left": "top-0 left-10",
//     "top-right": "top-0 right-10",
//     left: "top-1/2 left-0 -translate-y-1/2",
//     right: "top-1/2 right-0 -translate-y-1/2",
//     "bottom-left": "bottom-0 left-10",
//     "bottom-right": "bottom-0 right-10",
//     "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
//   };
//   return (
//     // <div className="">
//     //   <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-6 md:gap-10 lg:gap-20 py-6 md:py-10 lg:py-20">
//     //     <div className="flex items-center gap-8 flex-col ">
//     //       <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
//     //         Comprehensive Business Services Overview
//     //       </h1>
//     //       <img src={ourOverview} alt="" />
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="relative min-h-[700px] bg-black flex items-center justify-center py-20">
//       {/* Center Box */}
//       <div className="z-10 bg-slate-100 rounded-xl p-8 text-center shadow-xl">
//         <div className="text-4xl mb-2">👤</div>
//         <h2 className="text-xl font-semibold text-gray-800">
//           Business Services
//         </h2>
//       </div>

//       {/* Service Nodes */}
//       {servicesPage.map((item, index) => (
//         <div
//           key={index}
//           className={`absolute ${positionClasses[item.position]}
//           bg-white text-black w-64 rounded-xl shadow-lg p-4`}
//         >
//           <div className="flex items-center gap-2 mb-2 font-semibold">
//             <span className="text-xl">{item.icon}</span>
//             {item.title}
//           </div>

//           <ul className="text-sm text-gray-600 space-y-1">
//             {item.points.map((point, i) => (
//               <li key={i}>• {point}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OverviewSa;

import React from "react";
import { servicesPage } from "../../data/text";

const positionClasses = {
  "top-left": "top-0 left-[8%]",
  "top-right": "top-0 right-[8%]",
  left: "top-1/2 left-0 -translate-y-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  "bottom-left": "bottom-0 left-[8%]",
  "bottom-right": "bottom-0 right-[8%]",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
};

const OverviewSa = () => {
  return (
    <section className="bg-[var(--secondary-color)] py-20">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        {/* Title */}
        <div className="text-center mb-20">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[var(--primary-700)]"
            style={{ fontFamily: "var(--headingFont)" }}
          >
            Comprehensive Business Services Overview
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-[var(--primary-600)]"
            style={{ fontFamily: "var(--paraFont)" }}
          >
            A complete ecosystem of professional financial, advisory and
            compliance services for your business growth.
          </p>
        </div>

        {/* Diagram Area */}
        <div className="relative min-h-[750px] flex items-center justify-center">
          {/* Center Box */}
          <div
            className="z-10 bg-[var(--primary-50)] border border-[var(--primary-200)]
            rounded-2xl p-10 text-center shadow-lg"
          >
            <div className="text-4xl mb-3">👤</div>
            <h3
              className="text-xl font-semibold text-[var(--primary-700)]"
              style={{ fontFamily: "var(--headingFont)" }}
            >
              Business Services
            </h3>
          </div>

          {/* Service Nodes */}
          {servicesPage.map((item, index) => (
            <div
              key={index}
              className={`absolute ${positionClasses[item.position]}
              bg-white border border-[var(--primary-100)]
              w-64 rounded-2xl shadow-md p-5 transition-all
              hover:shadow-xl hover:-translate-y-1 duration-300`}
            >
              <div
                className="flex items-center gap-2 mb-2 font-semibold
                text-[var(--primary-700)]"
                style={{ fontFamily: "var(--headingFont)" }}
              >
                <span className="text-xl">{item.icon}</span>
                {item.title}
              </div>

              <ul
                className="text-sm text-[var(--primary-600)] space-y-1"
                style={{ fontFamily: "var(--paraFont)" }}
              >
                {item.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSa;
