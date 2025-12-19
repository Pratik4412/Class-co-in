import React, { useState } from "react";
import contactImge from "../assets/contact-us.webp";
import toast from "react-hot-toast";
import { sendContactMail } from "../api/mailApi.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    service: "",
    message: "",
    agree: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("Please accept terms & conditions");
      return;
    }

    try {
      setLoading(true);
      const res = await sendContactMail(formData);

      if (res.success) {
        toast.success("Message sent successfully!");

        setFormData({
          fname: "",
          lname: "",
          email: "",
          service: "",
          message: "",
          agree: false,
        });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold   bg-[linear-gradient(105.17deg,_#251611_-25.01%,_#FFCA97_42.41%,_#251611_121.11%)]   bg-clip-text text-transparent">
          Get in touch with us
        </h1>
        <p className="text-sm md:text-xl font-paraFont text-gray-300 max-w-2xl">
          We would love to hear from you! Whether you have questions, need a
          quote, or want to schedule a service, our team is here to help.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-14 w-full">
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <img
            src={contactImge}
            alt="contact"
            className="
              w-full sm:w-[90%] lg:w-[500px]
              h-auto object-cover rounded-2xl
              shadow-xl transition-all duration-700
              hover:scale-105 hover:shadow-2xl
            "
          />
        </div>

        {/* FORM */}
        <div
          className="
            bg-[#281F1C] p-6 md:p-10 rounded-2xl
            flex flex-col gap-6 w-full md:w-1/2
            shadow-xl
          "
          data-aos="fade-up"
          // data-aos="fade-left"
          data-aos-delay="200"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="
                  w-full text-sm font-headingFont font-semibold
                  py-3 px-4 rounded-md outline-none
                  focus:ring-2 focus:ring-primary-color 
                "
              />
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
                required
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="
                w-full text-sm font-headingFont font-semibold
                py-3 px-4 rounded-md outline-none
                focus:ring-2 focus:ring-primary-color 
              "
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Description"
              required
              className="
                text-sm font-headingFont font-semibold
                py-3 px-4 h-24 rounded-md outline-none resize-none
                focus:ring-2 focus:ring-primary-color 
              "
            ></textarea>

            <label
              htmlFor="check"
              className="text-xs md:text-sm font-paraFont font-semibold flex items-start gap-2 text-gray-300"
            >
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                id="check"
                className="mt-1 "
              />
              I agree that my submitted data is being collected and stored.
            </label>
            <button
              type="submit"
              disabled={loading}
              className={`
    py-3 rounded-lg text-white w-full
    font-semibold tracking-wide
    transition-all duration-500
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-primary-color hover:shadow-xl hover:-translate-y-1 active:scale-95"
    }
  `}
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
