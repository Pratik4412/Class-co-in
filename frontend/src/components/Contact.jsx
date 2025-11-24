import React from "react";
import contactImge from "../assets/Desktop1.jpg";
const Contact = () => {
  return (
    // <div className="b">
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-6 flex flex-col gap-8" id="contact-form">
      <div className="text-center flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl md:text-start font-semibold text-[#01254A]">
          Get in touch with us
        </h1>
        <p className="text-sm md:text-xl font-paraFont ">
          We would love to hear from you! Whether you have questions, need a
          <br className="hidden md:block " />
          quote, or want to schedule a service, our team is here to help.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-10 w-full h-full">
        {/* <div className="w-full h-full"> */}
        <img
          src={contactImge}
          alt="contactImge"
          className="w-full  rounded-xl object-contain md:h-[490px]"
        />
        {/* </div> */}
        <div className="bg-secondary-color p-4 md:p-10 rounded-2xl flex flex-col gap-6 w-full h-full">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                className="w-full text-sm font-headingFont font-semibold py-3 px-4 rounded-md outline-none"
              />
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                className="w-full text-sm font-headingFont font-semibold py-3 px-4 rounded-md outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full text-sm font-headingFont font-semibold py-3 px-4 rounded-md outline-none"
            />
            <select
              className="text-sm font-headingFont font-semibold py-3 px-3  rounded-md outline-none"
              placeholder="Select services"
            >
              <option disabled selected>
                service
              </option>
              <option value="services">services1</option>
              <option value="services">services2</option>
              <option value="services">services3</option>
              <option value="services">services4</option>
            </select>
            <textarea
              name=""
              id=""
              placeholder="Discription"
              className="text-sm font-headingFont font-semibold py-3 px-4 h-20 rounded-md outline-none resize-none "
            ></textarea>
            <label
              htmlFor="check"
              className="text-xs md:text-sm font-paraFont font-semibold flex items-start md:items-center gap-2"
            >
              <input type="checkbox" id="check" />I agree that my submitted data
              is being collected and stored.
            </label>
          </form>
          <button className="py-2 md:py-3 px-3 md:px-4 bg-primary-color rounded-lg text-white w-full ">
            Send Message
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Contact;
