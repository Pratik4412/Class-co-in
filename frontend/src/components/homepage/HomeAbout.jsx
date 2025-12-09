// import React from "react";
// import abouthome from "../../assets/landingpage/Image Block → About Image.png";
// import { useNavigate } from "react-router-dom";
// const HomeAbout = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col sm:flex-row gap-5 md:gap-10 ">
//       <div>
//         <img src={abouthome} alt="" />
//       </div>
//       <div className="flex flex-col gap-3 md:gap-6">
//         <h1
//           data-aos="fade-up"
//           data-aos-delay="150"
//           className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black font-headingFont"
//         >
//           About Summary Section
//         </h1>
//         <p
//           data-aos="fade-up"
//           data-aos-delay="250"
//           className="text-base md:text-lg lg:text-xl font-paraFont"
//         >
//           Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
//           Accountancy firm providing audit, taxation, and advisory services.
//         </p>
//         <div data-aos="fade-up" data-aos-delay="350">
//           <button
//             onClick={() => navigate("/about")}
//             className="btn-button hover:border border-primary-color"
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
import abouthome from "../../assets/landingpage/Image Block → About Image.png";
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center flex-col-reverse sm:flex-row gap-10 md:gap-16">
      {/* Image Section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="900"
        className="w-full sm:w-1/2 flex justify-center relative group"
      >
        <img
          src={abouthome}
          alt="About Us"
          className="
      w-full sm:w-[90%] lg:w-[420px] xl:w-[460px]
      max-w-full
      rounded-2xl shadow-xl
      transition-all duration-700
      group-hover:scale-105
      group-hover:shadow-2xl
      object-cover
    "
        />

        {/* Floating Glow Effect */}
        <div className="absolute inset-0 max-w-[460px] mx-auto rounded-2xl bg-primary-color opacity-0 group-hover:opacity-10 transition duration-700"></div>
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-1/2 flex flex-col gap-4 md:gap-6">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black font-headingFont leading-tight"
        >
          About Summary Section
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="text-base md:text-lg lg:text-xl font-paraFont text-gray-600 leading-relaxed"
        >
          Established in 1984, CLASS & Co. LLP is a Mumbai-based Chartered
          Accountancy firm providing audit, taxation, and advisory services.
        </p>

        <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="800">
          <button
            onClick={() => navigate("/about")}
            className="
              btn-button border border-primary-color
              transition-all duration-500
              hover:bg-primary-color hover:text-white
              hover:-translate-y-1 hover:shadow-xl
              active:scale-95
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
