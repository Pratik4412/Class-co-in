// import React from "react";
// import { teamImage } from "../../data/text";

// // Swiper Imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const TeamSize = () => {
//   return (
//     <div className="flex flex-col gap-10">
//       <div className="w-full flex items-center gap-2 flex-col">
//         <h6 className="text-lg font-paraFont text-gray-600">Our pride</h6>
//         <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
//           Senior Pinnacle Squad
//         </h1>
//         <p className="text-lg font-paraFont text-gray-600">
//           Let us introduce you to our amazing team members
//         </p>
//       </div>

//       {/* MOBILE CAROUSEL */}
//       <div className="block lg:hidden">
//         <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides={true}>
//           {teamImage.map((team, i) => (
//             <SwiperSlide key={i}>
//               <div className="relative group overflow-hidden rounded-lg shadow-md">
//                 <img
//                   src={team.image}
//                   alt={team.name}
//                   className="w-full h-72 object-cover object-left-top transform group-hover:scale-110 transition-all duration-500"
//                 />

//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//                   <h6 className="text-white text-xl font-semibold">
//                     {team.name}
//                   </h6>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* DESKTOP GRID */}
//       <div className="hidden lg:grid grid-cols-3 gap-6">
//         {teamImage.map((team, i) => (
//           <div
//             key={i}
//             className="relative group overflow-hidden rounded-lg shadow-md"
//           >
//             <img
//               src={team.image}
//               alt={team.name}
//               className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
//             />

//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//               <h6 className="text-white text-xl font-semibold">{team.name}</h6>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSize;
import React, { useEffect } from "react";
import { teamImage } from "../../data/text";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSize = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col gap-12 py-20">
      {/* Heading */}
      <div className="w-full flex items-center gap-2 flex-col text-center">
        <h6 className="text-lg font-paraFont text-gray-600">Our Pride</h6>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A] font-headingFont">
          Senior Pinnacle Squad
        </h1>
        <p className="text-lg font-paraFont text-gray-600">
          Meet the leaders who drive our firm with experience & integrity
        </p>
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="block lg:hidden">
        <Swiper spaceBetween={20} slidesPerView={1.1} centeredSlides>
          {teamImage.map((team, i) => (
            <SwiperSlide key={i}>
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-[300px] object-cover object-top"
                />

                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[#01254A] font-headingFont">
                    {team.name}
                  </h3>

                  <h6 className="text-sm font-medium text-primary-color">
                    {team.designation}
                  </h6>

                  <p className="text-sm text-gray-600 font-paraFont">
                    {team.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {teamImage.map((team, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 120}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-[400px] object-cover object-top"
            />

            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#01254A] font-headingFont">
                {team.name}
              </h3>

              <h6 className="text-sm font-medium text-primary-color">
                {team.designation}
              </h6>

              <p className="text-sm text-gray-600 font-paraFont leading-relaxed">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSize;
