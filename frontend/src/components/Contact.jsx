// import React from "react";
// import contactImge from "../assets/Desktop1.jpg";
// const Contact = () => {
//   return (
//     // <div className="b">
//     <div className="container mx-auto px-5 md:px-10 lg:px-20 py-6 flex flex-col gap-8" id="contact-form">
//       <div className="text-center flex flex-col gap-4 justify-center items-center">
//         <h1 className="text-2xl md:text-4xl lg:text-5xl md:text-start font-semibold text-[#01254A]">
//           Get in touch with us
//         </h1>
//         <p className="text-sm md:text-xl font-paraFont ">
//           We would love to hear from you! Whether you have questions, need a
//           <br className="hidden md:block " />
//           quote, or want to schedule a service, our team is here to help.
//         </p>
//       </div>
//       <div className="flex flex-col md:flex-row items-start gap-10 w-full h-full">
//         {/* <div className="w-full h-full"> */}
//         <img
//           src={contactImge}
//           alt="contactImge"
//           className="w-full  rounded-xl object-contain md:h-[490px]"
//         />
//         {/* </div> */}
//         <div className="bg-secondary-color p-4 md:p-10 rounded-2xl flex flex-col gap-6 w-full h-full">
//           <form className="flex flex-col gap-6">
//             <div className="flex flex-col md:flex-row items-center gap-3">
//               <input
//                 type="text"
//                 name="fname"
//                 id="fname"
//                 placeholder="First Name"
//                 className="w-full text-sm font-headingFont font-semibold py-3 px-4 rounded-md outline-none"
//               />
//               <input
//                 type="text"
//                 name="lname"
//                 id="lname"
//                 placeholder="Last Name"
//                 className="w-full text-sm font-headingFont font-semibold py-3 px-4 rounded-md outline-none"
//               />
//             </div>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Email"
//               className="w-full text-sm font-headingFont font-semibold py-3 px-4 rounded-md outline-none"
//             />
//             <select
//               className="text-sm font-headingFont font-semibold py-3 px-3  rounded-md outline-none"
//               placeholder="Select services"
//             >
//               <option disabled selected>
//                 service
//               </option>
//               <option value="services">services1</option>
//               <option value="services">services2</option>
//               <option value="services">services3</option>
//               <option value="services">services4</option>
//             </select>
//             <textarea
//               name=""
//               id=""
//               placeholder="Discription"
//               className="text-sm font-headingFont font-semibold py-3 px-4 h-20 rounded-md outline-none resize-none "
//             ></textarea>
//             <label
//               htmlFor="check"
//               className="text-xs md:text-sm font-paraFont font-semibold flex items-start md:items-center gap-2"
//             >
//               <input type="checkbox" id="check" />I agree that my submitted data
//               is being collected and stored.
//             </label>
//           </form>
//           <button className="py-2 md:py-3 px-3 md:px-4 bg-primary-color rounded-lg text-white w-full ">
//             Send Message
//           </button>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import contactImge from "../assets/Desktop1.jpg";

const Contact = () => {
  return (
    <div
      className="container mx-auto px-5 md:px-10 lg:px-20 py-20 flex flex-col gap-12"
      id="contact-form"
    >
      {/* HEADER */}
      <div
        className="text-center flex flex-col gap-4 justify-center items-center"
        data-aos="fade-up"
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#01254A]">
          Get in touch with us
        </h1>
        <p className="text-sm md:text-xl font-paraFont text-gray-600 max-w-2xl">
          We would love to hear from you! Whether you have questions, need a
          quote, or want to schedule a service, our team is here to help.
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-14 w-full">
        {/* IMAGE */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <img
            src={contactImge}
            alt="contact"
            className="
              w-full sm:w-[90%] lg:w-[460px]
              h-auto object-cover rounded-2xl
              shadow-xl transition-all duration-700
              hover:scale-105 hover:shadow-2xl
            "
          />
        </div>

        {/* FORM */}
        <div
          className="
            bg-secondary-color p-6 md:p-10 rounded-2xl
            flex flex-col gap-6 w-full md:w-1/2
            shadow-xl
          "
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="
                  w-full text-sm font-headingFont font-semibold
                  py-3 px-4 rounded-md outline-none
                  focus:ring-2 focus:ring-primary-color
                "
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="
                  w-full text-sm font-headingFont font-semibold
                  py-3 px-4 rounded-md outline-none
                  focus:ring-2 focus:ring-primary-color
                "
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="
                w-full text-sm font-headingFont font-semibold
                py-3 px-4 rounded-md outline-none
                focus:ring-2 focus:ring-primary-color
              "
            />

            <select
              className="
    text-sm font-headingFont font-semibold
    py-3 px-4 rounded-md outline-none
    focus:ring-2 focus:ring-primary-color
  "
            >
              <option disabled selected>
                Select Service
              </option>

              <option>Information Technology</option>
              <option>Pharmaceuticals & Healthcare</option>
              <option>Engineering & Infrastructure Services</option>
              <option>Education Sector</option>
              <option>Banking & Financial Services</option>
              <option>Import & Export</option>
              <option>E-Commerce & Retail</option>
              <option>Real Estate</option>
              <option>Vessels & Marine</option>
              <option>Logistics Services</option>
              <option>Automobiles Industry</option>
              <option>Media & Entertainment</option>
              <option>Manufacturing & Trading</option>
              <option>Non-Profit Organisations</option>
              <option>Chemicals Sector</option>
              <option>HNI Services</option>
              <option>NRI Client Advisory</option>
              <option>Individual Tax Advisory</option>
              <option>Self-Employed Professionals</option>
              <option>MSME Businesses</option>
            </select>

            <textarea
              placeholder="Description"
              className="
                text-sm font-headingFont font-semibold
                py-3 px-4 h-24 rounded-md outline-none resize-none
                focus:ring-2 focus:ring-primary-color
              "
            ></textarea>

            <label
              htmlFor="check"
              className="text-xs md:text-sm font-paraFont font-semibold flex items-start gap-2 text-gray-700"
            >
              <input type="checkbox" id="check" className="mt-1" />I agree that
              my submitted data is being collected and stored.
            </label>
          </form>

          <button
            className="
              py-3 bg-primary-color rounded-lg text-white w-full
              font-semibold tracking-wide
              transition-all duration-500
              hover:shadow-xl hover:-translate-y-1
              active:scale-95
            "
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
