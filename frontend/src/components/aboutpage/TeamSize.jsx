// import React from "react";
// import { teamImage } from "../../data/text";

// const TeamSize = () => {
//   return (
//     <div className="flex flex-col gap-8">
//       <div className="w-full flex items-center gap-2 flex-col">
//         <h6 className="text-lg font-paraFont text-gray-600">Our pride</h6>
//         <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
//           Senior Pinnacle Squad
//         </h1>
//         <p className="text-lg font-paraFont text-gray-600">
//           Let us introduce you to our amazing team members
//         </p>
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
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

//             {/* Hover Overlay with Name */}
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
import React from "react";
import { teamImage } from "../../data/text";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TeamSize = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full flex items-center gap-2 flex-col">
        <h6 className="text-lg font-paraFont text-gray-600">Our pride</h6>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-start font-semibold text-[#01254A]">
          Senior Pinnacle Squad
        </h1>
        <p className="text-lg font-paraFont text-gray-600">
          Let us introduce you to our amazing team members
        </p>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="block lg:hidden">
        <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides={true}>
          {teamImage.map((team, i) => (
            <SwiperSlide key={i}>
              <div className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-72 object-cover object-left-top transform group-hover:scale-110 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <h6 className="text-white text-xl font-semibold">
                    {team.name}
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {teamImage.map((team, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <h6 className="text-white text-xl font-semibold">{team.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSize;
