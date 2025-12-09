// import React from "react";
// import strength from "../../assets/landingpage/Key Facts - visual selection 1.png";
// const StrenghtsO = () => {
//   return (
//     <div className="container mx-auto flex items-center flex-col md:flex-row gap-8 px-5 md:px-10 lg:px-20">
//       <div className="flex flex-col gap-10 md:gap-44 lg:gap-56 h-full w-full ">
//         <div
//           className="flex flex-col gap-1 items-end text-end"
//           data-aos="fade-right"
//           data-aos-delay="150"
//         >
//           <h1 className="text-2xl font-headingFont font-semibold">
//             Versatility
//           </h1>
//           <p className="text-xl font-paraFont text-gray-600">
//             Ready to tackle challenges and seize opportunities
//           </p>
//         </div>
//         <div
//           className="flex flex-col gap-1 items-end"
//           data-aos="fade-right"
//           data-aos-delay="150"
//         >
//           <h1 className="text-2xl font-headingFont font-semibold">
//             Leadership
//           </h1>
//           <p className="text-xl font-paraFont text-gray-600">
//             Positioned as a leader in its field
//           </p>
//         </div>
//       </div>
//       <div
//         className="w-full"
//         data-aos="fade-zoom-in"
//         data-aos-offset="200"
//         data-aos-easing="ease-in-sine"
//         data-aos-duration="700"
//       >
//         <img src={strength} alt="strenght-image" />
//       </div>
//       <div className="flex flex-col gap-10 md:gap-44 lg:gap-60 w-full">
//         <div
//           className="flex flex-col gap-1 items-start"
//           data-aos="fade-left"
//           data-aos-delay="150"
//         >
//           <h1 className="text-2xl font-headingFont font-semibold">Legacy</h1>
//           <p className="text-xl font-paraFont text-gray-600">
//             Over 40 years of experience
//           </p>
//         </div>
//         <div
//           className="flex flex-col gap-1 items-start"
//           data-aos="fade-left"
//           data-aos-delay="150"
//         >
//           <h1 className="text-2xl font-headingFont font-semibold">
//             Multi-Industry Expertise
//           </h1>
//           <p className="text-xl font-paraFont text-gray-600">
//             Partnerships in 6 industries
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StrenghtsO;

import React from "react";
import strength from "../../assets/landingpage/Key Facts - visual selection 1.png";

const StrenghtsO = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-14 flex flex-col md:flex-row items-center gap-16">
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/3 flex flex-col gap-14">
        <div
          className="flex flex-col gap-2 items-center md:items-end text-center md:text-right"
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          <h1 className="text-xl md:text-2xl font-headingFont font-semibold">
            Versatility
          </h1>
          <p className="text-base md:text-lg font-paraFont text-gray-600 max-w-sm">
            Ready to tackle challenges and seize opportunities
          </p>
        </div>

        <div
          className="flex flex-col gap-2 items-center md:items-end text-center md:text-right"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <h1 className="text-xl md:text-2xl font-headingFont font-semibold">
            Leadership
          </h1>
          <p className="text-base md:text-lg font-paraFont text-gray-600 max-w-sm">
            Positioned as a leader in its field
          </p>
        </div>
      </div>

      {/* CENTER IMAGE */}
      <div
        className="w-full md:w-1/3 flex justify-center"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        <img
          src={strength}
          alt="strength"
          className="
            w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px]
            object-contain
            transition-transform duration-700
            hover:scale-105
          "
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/3 flex flex-col gap-14">
        <div
          className="flex flex-col gap-2 text-center md:text-start"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="800"
        >
          <h1 className="text-xl md:text-2xl font-headingFont font-semibold">
            Legacy
          </h1>
          <p className="text-base md:text-lg font-paraFont text-gray-600 max-w-sm">
            Over 40 years of experience
          </p>
        </div>

        <div
          className="flex flex-col gap-2 text-center md:text-start"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <h1 className="text-xl md:text-2xl font-headingFont font-semibold">
            Multi-Industry Expertise
          </h1>
          <p className="text-base md:text-lg font-paraFont text-gray-600 max-w-sm">
            Partnerships in 6 industries
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrenghtsO;
