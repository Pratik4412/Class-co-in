import React from "react";

function ContactForm() {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <form className="bg-[#281F1C] shadow-lg rounded-xl p-6 md:p-10 flex flex-col gap-5">
        <h3 className="text-2xl font-semibold text-center font-headingFont text-white">
          Send Us a Message
        </h3>

        <input
          className="
                  w-full text-sm font-headingFont font-semibold
                  py-3 px-4 rounded-md outline-none
                  focus:ring-2 focus:ring-secondary-color  
                "
          type="text"
          placeholder="Your Name"
        />
        <input
          className="
                  w-full text-sm font-headingFont font-semibold
                  py-3 px-4 rounded-md outline-none
                  focus:ring-2 focus:ring-secondary-color  
                "
          type="email"
          placeholder="Your Email"
        />
        <input
          className="
                  w-full text-sm font-headingFont font-semibold
                  py-3 px-4 rounded-md outline-none
                  focus:ring-2 focus:ring-secondary-color  
                "
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="
          resize-none
                  w-full text-sm font-headingFont font-semibold
                  py-3 px-4 rounded-md outline-none
                  focus:ring-2 focus:ring-secondary-color  
                "
          placeholder="Your Message"
        ></textarea>

        <button className="bg-primary-color text-white py-3 rounded-lg font-semibold hover:opacity-80 transition-all duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
