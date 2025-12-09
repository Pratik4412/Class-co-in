import React from "react";

function ContactForm() {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <form className="bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col gap-5">
        <h3 className="text-2xl font-semibold text-center font-headingFont">
          Send Us a Message
        </h3>

        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border p-3 rounded-lg h-32"
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
