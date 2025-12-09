// import React from "react";

// const OurExprtise = () => {
//   return (
//     <div className="bg-[#F7F1EE] py-12">
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col md:flex-row gap-11">
//         <div className="w-full">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
//             Our Expertise In <br className="hidden md:block " /> Different
//             Demins
//           </h1>
//         </div>
//         <div className="w-full">
//           <div className="flex flex-col gap-4">
//             <div className="flex justify-end w-full">
//               <div
//                 data-aos="fade-right"
//                 data-aos-delay="150"
//                 className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-white rounded-lg"
//               >
//                 <h1 className="text-xl font-headingFont font-semibold">
//                   Convenience Accessibility
//                 </h1>
//                 <p className="text-base font-paraFont">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   semper dolor lacus, nec ornare velit cursus sed.{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-start ">
//               <div
//                 data-aos="fade-left"
//                 data-aos-delay="150"
//                 className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-primary-color rounded-lg"
//               >
//                 <h1 className="text-xl font-headingFont font-semibold text-white">
//                   Customer Satisfaction
//                 </h1>
//                 <p className="text-base font-paraFont text-white">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   semper dolor lacus, nec ornare velit cursus sed.{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-end w-full">
//               <div
//                 data-aos="fade-right"
//                 data-aos-delay="150"
//                 className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-white rounded-lg"
//               >
//                 <h1 className="text-xl font-headingFont font-semibold">
//                   Quality and Freshness
//                 </h1>
//                 <p className="text-base font-paraFont">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   semper dolor lacus, nec ornare velit cursus sed.{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="flex justify-start  ">
//               <div
//                 data-aos="fade-left"
//                 data-aos-delay="150"
//                 className="w-[460px] flex items-start flex-col gap-2 py-6 px-8 bg-primary-color rounded-lg"
//               >
//                 <h1 className="text-xl font-headingFont font-semibold text-white">
//                   Quality and Freshness
//                 </h1>
//                 <p className="text-base font-paraFont text-white">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   semper dolor lacus, nec ornare velit cursus sed.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurExprtise;

import React from "react";

const OurExprtise = () => {
  return (
    <div className="bg-[#F7F1EE] py-20 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16">
        {/* LEFT HEADING */}
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="w-full md:w-[30%]"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-left font-semibold text-[#01254A] leading-tight">
            Our Expertise In <br className="hidden md:block" /> Different
            Domains
          </h1>
          <p className="mt-4 text-gray-600 max-w-md text-center md:text-left">
            Delivering excellence through experience, innovation and trust.
          </p>
        </div>

        {/* RIGHT ZIG-ZAG CARDS */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* CARD 1 */}
          <div className="flex justify-end w-full">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="
                w-full sm:w-[420px]
                flex flex-col gap-2 py-6 px-8
                bg-white rounded-xl
                shadow-md hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                group
              "
            >
              <h1 className="text-xl font-headingFont font-semibold group-hover:text-primary-color transition">
                Convenience & Accessibility
              </h1>
              <p className="text-base font-paraFont text-gray-600">
                Seamless access to expert solutions tailored to your business.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex justify-start w-full">
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="
                w-full sm:w-[420px]
                flex flex-col gap-2 py-6 px-8
                bg-primary-color rounded-xl
                text-white
                shadow-md hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                group
              "
            >
              <h1 className="text-xl font-headingFont font-semibold">
                Customer Satisfaction
              </h1>
              <p className="text-base font-paraFont opacity-90">
                A client-first approach built on trust and long-term success.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex justify-end w-full">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="
                w-full sm:w-[420px]
                flex flex-col gap-2 py-6 px-8
                bg-white rounded-xl
                shadow-md hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                group
              "
            >
              <h1 className="text-xl font-headingFont font-semibold group-hover:text-primary-color transition">
                Quality & Precision
              </h1>
              <p className="text-base font-paraFont text-gray-600">
                Consistent accuracy with uncompromised quality standards.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex justify-start w-full">
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="
                w-full sm:w-[420px]
                flex flex-col gap-2 py-6 px-8
                bg-primary-color rounded-xl
                text-white
                shadow-md hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                group
              "
            >
              <h1 className="text-xl font-headingFont font-semibold">
                Industry Expertise
              </h1>
              <p className="text-base font-paraFont opacity-90">
                Multi-domain experience delivering measurable impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExprtise;
