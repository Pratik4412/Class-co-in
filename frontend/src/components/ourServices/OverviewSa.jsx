// import React from "react";
// import { servicesPage } from "../../data/text";

// const positionClasses = {
//   "top-left": "top-0 left-[8%]",
//   "top-right": "top-0 right-[8%]",
//   left: "top-1/2 left-0 -translate-y-1/2",
//   right: "top-1/2 right-0 -translate-y-1/2",
//   "bottom-left": "bottom-0 left-[8%]",
//   "bottom-right": "bottom-0 right-[8%]",
//   "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
// };

// const OverviewSa = () => {
//   return (
//     <section className="bg-[var(--secondary-color)] py-20">
//       <div className="container mx-auto px-5 md:px-10 lg:px-20">
//         {/* Title */}
//         <div className="text-center mb-20">
//           <h2
//             className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[var(--primary-700)]"
//             style={{ fontFamily: "var(--headingFont)" }}
//           >
//             Comprehensive Business Services Overview
//           </h2>
//           <p
//             className="mt-4 max-w-2xl mx-auto text-[var(--primary-600)]"
//             style={{ fontFamily: "var(--paraFont)" }}
//           >
//             A complete ecosystem of professional financial, advisory and
//             compliance services for your business growth.
//           </p>
//         </div>

//         {/* Diagram Area */}
//         <div className="relative min-h-[750px] flex items-center justify-center">
//           {/* Center Box */}
//           <div
//             className="z-10 bg-[var(--primary-50)] border border-[var(--primary-200)]
//             rounded-2xl p-10 text-center shadow-lg"
//           >
//             <div className="text-4xl mb-3">👤</div>
//             <h3
//               className="text-xl font-semibold text-[var(--primary-700)]"
//               style={{ fontFamily: "var(--headingFont)" }}
//             >
//               Business Services
//             </h3>
//           </div>

//           {/* Service Nodes */}
//           {servicesPage.map((item, index) => (
//             <div
//               key={index}
//               className={`absolute ${positionClasses[item.position]}
//               bg-white border border-[var(--primary-100)]
//               w-64 rounded-2xl shadow-md p-5 transition-all
//               hover:shadow-xl hover:-translate-y-1 duration-300`}
//             >
//               <div
//                 className="flex items-center gap-2 mb-2 font-semibold
//                 text-[var(--primary-700)]"
//                 style={{ fontFamily: "var(--headingFont)" }}
//               >
//                 <span className="text-xl">{item.icon}</span>
//                 {item.title}
//               </div>

//               <ul
//                 className="text-sm text-[var(--primary-600)] space-y-1"
//                 style={{ fontFamily: "var(--paraFont)" }}
//               >
//                 {item.points.map((point, i) => (
//                   <li key={i}>• {point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OverviewSa;
import React from "react";
import { servicesPage } from "../../data/text";

const OverviewSa = () => {
  return (
    <section className="bg-secondary-50 py-20">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicesPage.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white border border-[var(--primary-100)]
              rounded-2xl shadow-md p-5 transition-all hover:shadow-xl
              hover:-translate-y-1 duration-300 cursor-pointer"
            >
              <div
                className="flex items-center gap-2 mb-3 font-semibold text-[var(--primary-700)]"
                style={{ fontFamily: "var(--headingFont)" }}
              >
                {/* <span className="text-xl">{item.icon}</span> */}
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
