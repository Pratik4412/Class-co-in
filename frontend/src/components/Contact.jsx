// import React, { useState } from "react";
// import contactImge from "../assets/contact-us.webp";
// import toast from "react-hot-toast";
// import { sendContactMail } from "../api/mailApi.js";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     service: "",
//     message: "",
//     agree: false,
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.agree) {
//       toast.error("Please accept terms & conditions");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await sendContactMail(formData);

//       if (res.success) {
//         toast.success("Message sent successfully!");

//         setFormData({
//           fname: "",
//           lname: "",
//           email: "",
//           service: "",
//           message: "",
//           agree: false,
//         });
//       } else {
//         toast.error("Failed to send message");
//       }
//     } catch (error) {
//       toast.error(error.message || "Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div
//       className="container mx-auto px-5 md:px-10 lg:px-20 py-20 flex flex-col gap-12"
//       id="contact-form"
//     >
//       {/* HEADER */}
//       <div
//         className="text-center flex flex-col gap-4 justify-center items-center"
//         data-aos="fade-up"
//       >
//         <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold   bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]   bg-clip-text text-transparent">
//           Get in touch with us
//         </h1>
//         <p className="text-sm md:text-xl font-paraFont text-gray-300 max-w-2xl">
//           We would love to hear from you! Whether you have questions, need a
//           quote, or want to schedule a service, our team is here to help.
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row items-center gap-14 w-full">
//         <div
//           className="w-full md:w-1/2 flex justify-center"
//           data-aos="zoom-in"
//           data-aos-duration="900"
//         >
//           <img
//             src={contactImge}
//             alt="contact"
//             className="
//               w-full sm:w-[90%] lg:w-[500px]
//               h-auto object-cover rounded-2xl
//               shadow-xl transition-all duration-700
//               hover:scale-105 hover:shadow-2xl
//             "
//           />
//         </div>

//         {/* FORM */}
//         <div
//           className="
//             bg-[#281F1C] p-6 md:p-10 rounded-2xl
//             flex flex-col gap-6 w-full md:w-1/2
//             shadow-xl
//           "
//           data-aos="fade-up"
//           // data-aos="fade-left"
//           data-aos-delay="200"
//         >
//           <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               <input
//                 type="text"
//                 name="fname"
//                 value={formData.fname}
//                 onChange={handleChange}
//                 placeholder="First Name"
//                 required
//                 className="
//                   w-full text-sm font-headingFont font-semibold
//                   py-3 px-4 rounded-md outline-none
//                   focus:ring-2 focus:ring-primary-color
//                 "
//               />
//               <input
//                 type="text"
//                 name="lname"
//                 value={formData.lname}
//                 onChange={handleChange}
//                 placeholder="Last Name"
//                 required
//                 className="
//                   w-full text-sm font-headingFont font-semibold
//                   py-3 px-4 rounded-md outline-none
//                   focus:ring-2 focus:ring-primary-color
//                 "
//               />
//             </div>

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="
//                 w-full text-sm font-headingFont font-semibold
//                 py-3 px-4 rounded-md outline-none
//                 focus:ring-2 focus:ring-primary-color
//               "
//             />
//             <input
//               type="number"
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//               placeholder="number"
//               required
//               className="
//                 w-full text-sm font-headingFont font-semibold
//                 py-3 px-4 rounded-md outline-none
//                 focus:ring-2 focus:ring-primary-color
//               "
//             />
//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               required
//               className="
//     text-sm font-headingFont font-semibold
//     py-3 px-4 rounded-md outline-none
//     focus:ring-2 focus:ring-primary-color
//   "
//             >
//               <option disabled selected>
//                 Select Service
//               </option>

//               <option>Information Technology</option>
//               <option>Pharmaceuticals & Healthcare</option>
//               <option>Engineering & Infrastructure Services</option>
//               <option>Education Sector</option>
//               <option>Banking & Financial Services</option>
//               <option>Import & Export</option>
//               <option>E-Commerce & Retail</option>
//               <option>Real Estate</option>
//               <option>Vessels & Marine</option>
//               <option>Logistics Services</option>
//               <option>Automobiles Industry</option>
//               <option>Media & Entertainment</option>
//               <option>Manufacturing & Trading</option>
//               <option>Non-Profit Organisations</option>
//               <option>Chemicals Sector</option>
//               <option>HNI Services</option>
//               <option>NRI Client Advisory</option>
//               <option>Individual Tax Advisory</option>
//               <option>Self-Employed Professionals</option>
//               <option>MSME Businesses</option>
//             </select>

//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Description"
//               required
//               className="
//                 text-sm font-headingFont font-semibold
//                 py-3 px-4 h-24 rounded-md outline-none resize-none
//                 focus:ring-2 focus:ring-primary-color
//               "
//             ></textarea>

//             <label
//               htmlFor="check"
//               className="text-xs md:text-sm font-paraFont font-semibold flex items-start gap-2 text-gray-300"
//             >
//               <input
//                 type="checkbox"
//                 name="agree"
//                 checked={formData.agree}
//                 onChange={handleChange}
//                 id="check"
//                 className="mt-1 "
//               />
//               I agree that my submitted data is being collected and stored.
//             </label>
//             <button
//               type="submit"
//               disabled={loading}
//               className={`
//     py-3 rounded-lg text-white w-full
//     font-semibold tracking-wide
//     transition-all duration-500
//     ${
//       loading
//         ? "bg-gray-400 cursor-not-allowed"
//         : "bg-primary-color hover:shadow-xl hover:-translate-y-1 active:scale-95"
//     }
//   `}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useEffect, useState } from "react";
import contactImge from "../assets/contact-us.webp";
import toast from "react-hot-toast";
import Select from "react-select";
import { sendContactMail } from "../api/mailApi.js";

/* ===============================
   SERVICE OPTIONS (MULTI SELECT)
================================ */
const serviceOptions = [
  { value: "Audit & Assurance", label: "Audit & Assurance" },
  { value: "Taxation", label: "Taxation" },
  { value: "Corporate Finance", label: "Corporate Finance" },
  { value: "Business Advisory", label: "Business Advisory" },
  { value: "FEMA & RBI Compliance", label: "FEMA & RBI Compliance" },
  { value: "Forensic & Investigation", label: "Forensic & Investigation" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [countryCodeOptions, setCountryCodeOptions] = useState([]);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    services: [],
    countryCode: null,
    number: "",
    message: "",
    agree: false,
  });

  /* ===============================
     FETCH ALL COUNTRY CODES (API)
  =============================== */
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,flag",
        );

        if (!res.ok) {
          throw new Error("Failed to fetch country codes");
        }

        const data = await res.json();

        const codes = data
          .filter((c) => c.idd?.root)
          .map((c) => {
            const code = c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : "");
            return {
              value: code,
              label: `${c.flag} ${code} (${c.name.common})`,
            };
          })
          .sort((a, b) => a.label.localeCompare(b.label));

        setCountryCodeOptions(codes);

        // Default India (+91)
        const india = codes.find((c) => c.value === "+91");
        if (india) {
          setFormData((prev) => ({ ...prev, countryCode: india }));
        }
      } catch (error) {
        console.error(error);
        toast.error("Unable to load country codes");
      }
    };

    fetchCountryCodes();
  }, []);

  /* ===============================
     HANDLE CHANGE
  =============================== */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* ===============================
     SUBMIT FORM
  =============================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("Please accept terms & conditions");
      return;
    }

    if (!formData.countryCode) {
      toast.error("Please select country code");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        services: formData.services.map((s) => s.value),
        phone: `${formData.countryCode.value}${formData.number}`,
        message: formData.message,
        agree: formData.agree,
      };

      const res = await sendContactMail(payload);

      if (res.success) {
        toast.success("Message sent successfully!");
        setFormData({
          fname: "",
          lname: "",
          email: "",
          services: [],
          countryCode:
            countryCodeOptions.find((c) => c.value === "+91") || null,
          number: "",
          message: "",
          agree: false,
        });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-20">
      <div className="flex flex-col md:flex-row gap-14 items-center">
        {/* IMAGE */}
        <div className="md:w-1/2">
          <img
            src={contactImge}
            alt="contact"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* FORM */}
        <div className="md:w-1/2 bg-[#281F1C] p-8 rounded-2xl shadow-xl">
          <form
            className="flex flex-col gap-3 md:gap-6"
            onSubmit={handleSubmit}
          >
            {/* NAME */}
            <div className="flex gap-3 md:flex-row flex-col">
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="input"
              />
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="input"
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="input"
            />

            {/* SERVICES MULTI SELECT */}
            <Select
              isMulti
              options={serviceOptions}
              value={formData.services}
              onChange={(selected) =>
                setFormData({ ...formData, services: selected })
              }
              placeholder="Select Services"
              classNamePrefix="custom-select"
            />

            {/* PHONE WITH COUNTRY CODE */}
            <div className="flex gap-3 md:flex-row flex-col">
              <Select
                options={countryCodeOptions}
                value={formData.countryCode}
                onChange={(selected) =>
                  setFormData({ ...formData, countryCode: selected })
                }
                placeholder="Code"
                isSearchable
                className="w-full md:w-[260px] "
                classNamePrefix="custom-select"
              />

              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone number"
                required
                className="input"
              />
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="input"
            />

            {/* CHECKBOX */}
            <label className="text-sm text-gray-300 flex gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              I agree that my submitted data is being collected and stored.
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`py-3 rounded-lg text-white font-semibold ${
                loading ? "bg-gray-400" : "bg-primary-color"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
